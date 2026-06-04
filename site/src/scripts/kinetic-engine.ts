/**
 * Kinetic Grid Engine
 * Handles: tile duplication, rAF animation, hover deceleration,
 * scroll wheel boost, middle-click drag, sticky labels, parallax.
 * Touch: swipe to scroll columns, tap to colorize.
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

// Touch drag state
let touchActive = false
let touchColIndex = -1
let touchLastY = 0
let touchVelocity = 0
let touchStartY = 0
let touchStartTime = 0
const TOUCH_FRICTION = 0.92
const TOUCH_BOOST_SCALE = 0.08

// Hovered column
let hoveredColIndex = -1

// Detect touch device
const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0

function getColumnFromTouch(e: TouchEvent): number {
  const x = e.touches[0].clientX
  const columns = document.querySelectorAll('.column')
  for (let i = 0; i < columns.length; i++) {
    const rect = (columns[i] as HTMLElement).getBoundingClientRect()
    if (x >= rect.left && x <= rect.right) return i
  }
  return -1
}

export function initKineticGrid() {
  const isTouch = isTouchDevice()

  // Column hover listeners (desktop)
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

  // Touch: swipe to scroll individual columns
  if (isTouch) {
    document.addEventListener('touchstart', (e) => {
      if (lightboxOpen || animationPaused) return
      const colIdx = getColumnFromTouch(e)
      if (colIdx < 0) return

      touchActive = true
      touchColIndex = colIdx
      touchLastY = e.touches[0].clientY
      touchStartY = e.touches[0].clientY
      touchStartTime = Date.now()
      touchVelocity = 0
    }, { passive: true })

    document.addEventListener('touchmove', (e) => {
      if (!touchActive || touchColIndex < 0) return
      const y = e.touches[0].clientY
      const dy = y - touchLastY
      touchVelocity = dy
      columnScrollBoost[touchColIndex] += dy * TOUCH_BOOST_SCALE
      columnScrollBoost[touchColIndex] = Math.max(
        -SCROLL_BOOST_MAX,
        Math.min(SCROLL_BOOST_MAX, columnScrollBoost[touchColIndex])
      )
      touchLastY = y
    }, { passive: true })

    document.addEventListener('touchend', (e) => {
      if (!touchActive) return
      // Fling: apply remaining velocity
      if (touchColIndex >= 0 && Math.abs(touchVelocity) > 2) {
        columnScrollBoost[touchColIndex] += touchVelocity * TOUCH_BOOST_SCALE * 3
        columnScrollBoost[touchColIndex] = Math.max(
          -SCROLL_BOOST_MAX,
          Math.min(SCROLL_BOOST_MAX, columnScrollBoost[touchColIndex])
        )
      }
      touchActive = false
      touchColIndex = -1
    }, { passive: true })

    // Touch: tap to colorize tile (toggle)
    document.addEventListener('touchstart', (e) => {
      const target = e.target as HTMLElement
      const tile = target.closest('.tile') as HTMLElement | null
      if (!tile) return
      // Add 'touched' class for color activation
      tile.classList.add('touch-active')
    }, { passive: true })

    document.addEventListener('touchend', () => {
      // Remove touch-active after a delay to let color show briefly
      setTimeout(() => {
        document.querySelectorAll('.tile.touch-active').forEach(t => {
          t.classList.remove('touch-active')
        })
      }, 1500)
    }, { passive: true })
  }

  // Scroll wheel (desktop)
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

  // Middle mouse drag (desktop)
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

  // Subtle parallax (desktop only)
  if (!isTouch) {
    const grid = document.querySelector('.kinetic-grid') as HTMLElement
    document.addEventListener('mousemove', (e) => {
      if (lightboxOpen || middleDragActive) return
      const x = (e.clientX / window.innerWidth - 0.5) * 6
      const y = (e.clientY / window.innerHeight - 0.5) * 4
      grid.style.transform = `translate(${x}px, ${y}px)`
    })
  }

  // Wait for images then start animation
  waitForImages().then(() => {
    // Duplicate tiles for seamless loop — ensure enough copies to fill viewport
    document.querySelectorAll('.column-inner').forEach((inner) => {
      const el = inner as HTMLElement
      const original = el.innerHTML
      const singleHeight = el.scrollHeight
      const viewportHeight = window.innerHeight

      // Need at least 2x, but if tiles are short we may need 3x or 4x
      let copies = 2
      if (singleHeight < viewportHeight * 1.5) copies = 3
      if (singleHeight < viewportHeight) copies = 4

      let html = original
      for (let i = 1; i < copies; i++) {
        html += original
      }
      el.innerHTML = html
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
      copies: number
    }[] = []

    columns.forEach((col, i) => {
      const el = col as HTMLElement
      // Count how many copies we made
      const originalTileCount = document.querySelectorAll(`.column[data-col-index="${i}"]`).length
      const totalTiles = el.querySelectorAll('.tile').length
      const originalHeight = el.scrollHeight / (totalTiles > 0 ? Math.round(totalTiles / (el.querySelectorAll('.tile[data-tile-index]').length / 2 || 1)) : 2)

      const totalHeight = el.scrollHeight / 2 // For 2+ copies, half is one full set
      const direction = el.dataset.direction || 'down'
      const speed = parseFloat(el.dataset.speed || '0.5')
      state.push({
        el,
        colIndex: i,
        offset: direction === 'down' ? -totalHeight : 0,
        totalHeight,
        direction,
        baseSpeed: speed,
        copies: 2,
      })
    })

    // Recalculate totalHeight properly based on actual first-set height
    for (const s of state) {
      // The totalHeight should be scrollHeight / number_of_copies
      const tiles = s.el.querySelectorAll('.tile')
      if (tiles.length === 0) continue
      // Find the original tile count from data attributes
      const originals = new Set<string>()
      tiles.forEach(t => {
        const idx = (t as HTMLElement).dataset.tileIndex
        if (idx) originals.add(idx)
      })
      const copies = Math.round(tiles.length / originals.size) || 2
      s.totalHeight = s.el.scrollHeight / copies
      s.copies = copies
      s.offset = s.direction === 'down' ? -s.totalHeight : 0
    }

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

      // Decay scroll boost (including touch)
      for (let i = 0; i < columnScrollBoost.length; i++) {
        const friction = (touchActive && touchColIndex === i) ? 1 : SCROLL_BOOST_DECAY
        columnScrollBoost[i] *= friction
        if (Math.abs(columnScrollBoost[i]) < 0.001) columnScrollBoost[i] = 0
      }

      // Decay touch velocity
      if (!touchActive) {
        touchVelocity *= TOUCH_FRICTION
        if (Math.abs(touchVelocity) < 0.01) touchVelocity = 0
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
