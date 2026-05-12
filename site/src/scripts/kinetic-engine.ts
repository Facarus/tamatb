/**
 * Kinetic Grid Engine
 * Handles: tile duplication, rAF animation, hover deceleration,
 * scroll wheel boost, middle-click drag, sticky labels, parallax.
 */

// State shared with lightbox
export let lightboxOpen = false
export let animationPaused = false
export function setLightboxOpen(v: boolean) { lightboxOpen = v }
export function setAnimationPaused(v: boolean) { animationPaused = v }

// Hover deceleration
const columnHover: { target: number; current: number }[] = [
  { target: 1, current: 1 },
  { target: 1, current: 1 },
  { target: 1, current: 1 },
  { target: 1, current: 1 },
]
const DECEL_RATE = 0.02
const ACCEL_RATE = 0.015

// Scroll wheel boost
const columnScrollBoost = [0, 0, 0, 0]
const SCROLL_BOOST_AMOUNT = 0.8
const SCROLL_BOOST_DECAY = 0.97
const SCROLL_BOOST_MAX = 6.0

// Middle-click drag
let middleDragActive = false
let middleDragColIndex = -1
let middleDragLastY = 0
let middleDragVelocity = 0
const DRAG_FRICTION = 0.94

// Hovered column
let hoveredColIndex = -1

export function initKineticGrid() {
  // Column hover listeners
  document.querySelectorAll('.column').forEach((col) => {
    const el = col as HTMLElement
    const idx = parseInt(el.dataset.colIndex || '0')
    el.addEventListener('mouseenter', () => {
      columnHover[idx].target = 0
      hoveredColIndex = idx
    })
    el.addEventListener('mouseleave', () => {
      columnHover[idx].target = 1
      if (hoveredColIndex === idx) hoveredColIndex = -1
    })
  })

  // Scroll wheel
  document.addEventListener('wheel', (e) => {
    if (lightboxOpen) return
    if (hoveredColIndex < 0) return
    e.preventDefault()
    const delta = Math.sign(e.deltaY) * SCROLL_BOOST_AMOUNT
    columnScrollBoost[hoveredColIndex] += delta
    columnScrollBoost[hoveredColIndex] = Math.max(
      -SCROLL_BOOST_MAX,
      Math.min(SCROLL_BOOST_MAX, columnScrollBoost[hoveredColIndex])
    )
  }, { passive: false })

  // Middle mouse drag
  document.addEventListener('mousedown', (e) => {
    if (e.button !== 1) return
    if (lightboxOpen) return
    e.preventDefault()
    if (hoveredColIndex >= 0) {
      middleDragActive = true
      middleDragColIndex = hoveredColIndex
      middleDragLastY = e.clientY
      middleDragVelocity = 0
      document.body.style.cursor = 'grabbing'
    }
  })

  document.addEventListener('mousemove', (e) => {
    if (!middleDragActive) return
    const dy = e.clientY - middleDragLastY
    middleDragVelocity = dy
    middleDragLastY = e.clientY
  })

  document.addEventListener('mouseup', (e) => {
    if (e.button !== 1) return
    if (middleDragActive) {
      middleDragActive = false
      document.body.style.cursor = ''
      if (middleDragColIndex >= 0) {
        columnScrollBoost[middleDragColIndex] += middleDragVelocity * 0.05
      }
    }
  })

  // Prevent browser auto-scroll on middle click
  document.addEventListener('auxclick', (e) => {
    if (e.button === 1) e.preventDefault()
  })

  // Subtle parallax
  const grid = document.querySelector('.kinetic-grid') as HTMLElement
  document.addEventListener('mousemove', (e) => {
    if (lightboxOpen || middleDragActive) return
    const x = (e.clientX / window.innerWidth - 0.5) * 6
    const y = (e.clientY / window.innerHeight - 0.5) * 4
    grid.style.transform = `translate(${x}px, ${y}px)`
  })

  // Wait for images then start animation
  waitForImages().then(() => {
    // Duplicate tiles for seamless loop
    document.querySelectorAll('.column-inner').forEach((inner) => {
      const original = inner.innerHTML
      inner.innerHTML = original + original
    })

    // Stagger reveal tiles with gradient-to-image fade
    const allTiles = document.querySelectorAll('.tile') as NodeListOf<HTMLElement>
    allTiles.forEach((tile) => {
      const idx = parseInt(tile.dataset.tileIndex || '0', 10)
      const delay = 80 + idx * 120 + Math.random() * 200
      setTimeout(() => tile.classList.add('revealed'), delay)
    })

    const columns = document.querySelectorAll('.column-inner')
    const state: {
      el: HTMLElement
      colIndex: number
      offset: number
      totalHeight: number
      direction: string
      baseSpeed: number
    }[] = []

    columns.forEach((col, i) => {
      const el = col as HTMLElement
      const totalHeight = el.scrollHeight / 2
      const direction = el.dataset.direction || 'down'
      const speed = parseFloat(el.dataset.speed || '0.5')
      state.push({
        el,
        colIndex: i,
        offset: direction === 'down' ? -totalHeight : 0,
        totalHeight,
        direction,
        baseSpeed: speed,
      })
    })

    let vh = window.innerHeight
    const EDGE_MARGIN = 10
    window.addEventListener('resize', () => { vh = window.innerHeight })

    function updateLabels() {
      for (let si = 0; si < state.length; si++) {
        const s = state[si]
        const tiles = s.el.querySelectorAll('.tile')
        const isDown = s.direction === 'down'

        for (let ti = 0; ti < tiles.length; ti++) {
          const tile = tiles[ti] as HTMLElement
          const info = tile.querySelector('.tile-info') as HTMLElement | null
          if (!info) continue

          const rect = tile.getBoundingClientRect()
          const tileH = rect.height

          if (rect.bottom < -50 || rect.top > vh + 50) continue

          const infoH = 18
          let labelTop: number

          if (isDown) {
            labelTop = (vh - EDGE_MARGIN - infoH) - rect.top
            labelTop = Math.max(EDGE_MARGIN, Math.min(labelTop, tileH - infoH - EDGE_MARGIN))
          } else {
            labelTop = EDGE_MARGIN - rect.top
            labelTop = Math.max(EDGE_MARGIN, Math.min(labelTop, tileH - infoH - EDGE_MARGIN))
          }

          info.style.top = labelTop + 'px'
        }
      }
    }

    function animate() {
      // Hover easing
      for (let i = 0; i < columnHover.length; i++) {
        const ch = columnHover[i]
        if (ch.current < ch.target) {
          ch.current = Math.min(ch.target, ch.current + ACCEL_RATE)
        } else if (ch.current > ch.target) {
          ch.current = Math.max(ch.target, ch.current - DECEL_RATE)
        }
      }

      // Decay scroll boost
      for (let i = 0; i < columnScrollBoost.length; i++) {
        columnScrollBoost[i] *= SCROLL_BOOST_DECAY
        if (Math.abs(columnScrollBoost[i]) < 0.001) columnScrollBoost[i] = 0
      }

      // Decay middle-drag velocity
      if (!middleDragActive) {
        middleDragVelocity *= DRAG_FRICTION
        if (Math.abs(middleDragVelocity) < 0.01) middleDragVelocity = 0
      }

      const globalPause = animationPaused ? 0 : 1

      for (let si = 0; si < state.length; si++) {
        const s = state[si]
        const hoverMul = columnHover[s.colIndex].current
        const baseMotion = s.baseSpeed * hoverMul * globalPause
        const scrollBoost = columnScrollBoost[s.colIndex]

        let dragOffset = 0
        if (middleDragActive && middleDragColIndex === s.colIndex) {
          dragOffset = middleDragVelocity
        } else if (!middleDragActive && middleDragColIndex === s.colIndex) {
          dragOffset = middleDragVelocity
        }

        if (s.direction === 'down') {
          s.offset += baseMotion + scrollBoost + dragOffset
          if (s.offset >= 0) s.offset -= s.totalHeight
          if (s.offset < -s.totalHeight) s.offset += s.totalHeight
        } else {
          s.offset -= baseMotion
          s.offset += scrollBoost + dragOffset
          if (s.offset <= -s.totalHeight) s.offset += s.totalHeight
          if (s.offset > 0) s.offset -= s.totalHeight
        }
        s.el.style.transform = `translateY(${s.offset}px)`
      }

      updateLabels()
      requestAnimationFrame(animate)
    }

    animate()
  })
}

function waitForImages(): Promise<void[]> {
  const images = document.querySelectorAll('.tile img')
  const promises: Promise<void>[] = []
  images.forEach((img) => {
    const el = img as HTMLImageElement
    if (el.complete) { promises.push(Promise.resolve()); return }
    promises.push(new Promise<void>((resolve) => {
      el.onload = () => resolve()
      el.onerror = () => resolve()
    }))
  })
  return Promise.all(promises)
}
