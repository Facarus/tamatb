import { setLightboxOpen, setAnimationPaused } from './kinetic-engine'
import { isPageOverlayOpen } from './page-overlays'
import { getImageTier, tieredImagePath } from '../data/projects'

interface ProjectData {
  title: string
  state: string
  location: string
  typology: string
  date: string
  images: string[]
  text: string
}

type ProjectDB = Record<string, ProjectData>

let PROJECT_DB: ProjectDB = {}
let PROJECT_ORDER: string[] = []
let lightboxOpen = false
let currentProjectId: string | null = null
let currentImageIndex = 0
let infoVisible = false
let infoPinned = false // true when user mousedown-pins info on image 1

let currentTier: 'sm' | 'md' | 'lg' = 'lg'

/** Resolve a project image path to its optimized tier version */
function resolveImg(src: string): string {
  return tieredImagePath(src, currentTier)
}

let lbBackdrop: HTMLElement
let lbStage: HTMLElement
let lbPanel: HTMLElement
let lbImage: HTMLImageElement
let lbInfoOverlay: HTMLElement
let lbInfoTitle: HTMLElement
let lbInfoMeta: HTMLElement
let lbInfoText: HTMLElement
let lbInfoBtn: HTMLElement
let lbCounter: HTMLElement
let lbProjLabel: HTMLElement
let lbSpinner: HTMLElement
let kineticGrid: HTMLElement
let navOverlay: HTMLElement
let vignetteEl: HTMLElement

/** Show or hide the info overlay */
function setInfo(visible: boolean) {
  infoVisible = visible
  lbInfoOverlay.classList.toggle('visible', visible)
  lbInfoBtn.classList.toggle('active', visible)
}

/** Preload an image and return a promise */
function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    if (lbImage.src === new URL(src, location.href).href && lbImage.complete) {
      resolve()
      return
    }
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve() // resolve anyway to avoid hanging
    img.src = src
  })
}

function showSpinner() { lbSpinner.classList.add('visible') }
function hideSpinner() { lbSpinner.classList.remove('visible') }

function openLightbox(projectId: string, imgIndex = 0) {
  const proj = PROJECT_DB[projectId]
  if (!proj) return

  currentProjectId = projectId
  currentImageIndex = imgIndex
  lightboxOpen = true
  infoVisible = false
  infoPinned = false
  setLightboxOpen(true)
  setAnimationPaused(true)

  // Show spinner while first image loads
  showSpinner()
  lbImage.style.opacity = '0'

  lbImage.src = resolveImg(proj.images[imgIndex])
  updateCounter()
  lbProjLabel.textContent = proj.title

  lbInfoTitle.textContent = proj.title
  lbInfoMeta.innerHTML = proj.state + ' &middot; ' + proj.location + '<br>' + proj.typology + ' &middot; ' + proj.date
  lbInfoText.innerHTML = proj.text

  kineticGrid.classList.add('dimmed')
  navOverlay.classList.add('hidden')
  vignetteEl.classList.add('hidden')
  lbBackdrop.classList.add('active')
  lbStage.classList.add('active')

  lbPanel.classList.remove('open', 'closing', 'fade-out', 'fade-in')
  void lbPanel.offsetWidth

  // Wait for image to load, then reveal
  preloadImage(resolveImg(proj.images[imgIndex])).then(() => {
    hideSpinner()
    lbImage.style.opacity = ''
    requestAnimationFrame(() => {
      lbPanel.classList.add('open')
      // Auto-show info on first image (index 0)
      if (imgIndex === 0) {
        setInfo(true)
      } else {
        setInfo(false)
      }
    })
  })
}

function closeLightbox() {
  lbPanel.classList.remove('open')
  lbPanel.classList.add('closing')
  lightboxOpen = false
  infoPinned = false
  setLightboxOpen(false)
  setAnimationPaused(false)
  hideSpinner()
  setInfo(false)

  setTimeout(() => {
    lbBackdrop.classList.remove('active')
    lbStage.classList.remove('active')
    kineticGrid.classList.remove('dimmed')
    navOverlay.classList.remove('hidden')
    vignetteEl.classList.remove('hidden')
    lbPanel.classList.remove('closing')
  }, 550)
}

function showImage(index: number) {
  if (!currentProjectId) return
  const proj = PROJECT_DB[currentProjectId]
  if (!proj) return
  const nextIndex = ((index % proj.images.length) + proj.images.length) % proj.images.length
  if (nextIndex === currentImageIndex) return

  // Fade out current
  lbPanel.classList.add('fade-out')
  showSpinner()

  // Preload next image
  preloadImage(resolveImg(proj.images[nextIndex])).then(() => {
    currentImageIndex = nextIndex
    lbImage.src = resolveImg(proj.images[currentImageIndex])
    updateCounter()
    hideSpinner()
    lbPanel.classList.remove('fade-out')
    lbPanel.classList.add('fade-in')
    setTimeout(() => lbPanel.classList.remove('fade-in'), 350)

    // Hide info when navigating away from image 1, unless pinned on image 1
    if (nextIndex === 0) {
      // Returning to first image: show info
      setInfo(true)
    } else {
      // On any other image: hide info, reset pin
      infoPinned = false
      setInfo(false)
    }
  })
}

function switchProject(direction: number) {
  if (!currentProjectId) return
  const idx = PROJECT_ORDER.indexOf(currentProjectId)
  const next = ((idx + direction) % PROJECT_ORDER.length + PROJECT_ORDER.length) % PROJECT_ORDER.length

  lbPanel.classList.add('fade-out')
  showSpinner()

  const proj = PROJECT_DB[PROJECT_ORDER[next]]
  if (!proj) return

  // Preload first image of next project
  preloadImage(resolveImg(proj.images[0])).then(() => {
    currentProjectId = PROJECT_ORDER[next]
    currentImageIndex = 0
    lbImage.src = resolveImg(proj.images[0])
    updateCounter()
    lbProjLabel.textContent = proj.title
    lbInfoTitle.textContent = proj.title
    lbInfoMeta.innerHTML = proj.state + ' &middot; ' + proj.location + '<br>' + proj.typology + ' &middot; ' + proj.date
    lbInfoText.innerHTML = proj.text

    hideSpinner()
    infoPinned = false
    lbPanel.classList.remove('fade-out')
    lbPanel.classList.add('fade-in')
    setTimeout(() => lbPanel.classList.remove('fade-in'), 350)

    // Auto-show info on first image of new project
    setInfo(true)
  })
}

function updateCounter() {
  if (!currentProjectId) return
  const proj = PROJECT_DB[currentProjectId]
  if (!proj) return
  lbCounter.textContent = (currentImageIndex + 1) + ' / ' + proj.images.length
}

function toggleInfo() {
  if (infoVisible) {
    setInfo(false)
    infoPinned = false
  } else {
    setInfo(true)
    // Pin if on first image and user explicitly toggles
    if (currentImageIndex === 0) infoPinned = true
  }
}

function findTileFromEvent(e: Event): HTMLElement | null {
  let el = e.target as HTMLElement | null
  while (el && el !== document.body) {
    if (el.classList && el.classList.contains('tile') && el.dataset.project) {
      return el
    }
    el = el.parentElement
  }
  return null
}

export function initLightbox(projectDB: ProjectDB, projectOrder: string[]) {
  PROJECT_DB = projectDB
  PROJECT_ORDER = projectOrder
  currentTier = getImageTier()

  lbBackdrop = document.getElementById('lbBackdrop')!
  lbStage = document.getElementById('lbStage')!
  lbPanel = document.getElementById('lbPanel')!
  lbImage = document.getElementById('lbImage') as HTMLImageElement
  lbInfoOverlay = document.getElementById('lbInfoOverlay')!
  lbInfoTitle = document.getElementById('lbInfoTitle')!
  lbInfoMeta = document.getElementById('lbInfoMeta')!
  lbInfoText = document.getElementById('lbInfoText')!
  lbInfoBtn = document.getElementById('lbInfoBtn')!
  lbCounter = document.getElementById('lbCounter')!
  lbProjLabel = document.getElementById('lbProjLabel')!
  lbSpinner = document.getElementById('lbSpinner')!
  kineticGrid = document.getElementById('kineticGrid')!
  navOverlay = document.getElementById('navOverlay')!
  vignetteEl = document.getElementById('vignette')!

  const lbClose = document.getElementById('lbClose')!
  const lbPrevImg = document.getElementById('lbPrevImg')!
  const lbNextImg = document.getElementById('lbNextImg')!
  const lbPrevProj = document.getElementById('lbPrevProj')!
  const lbNextProj = document.getElementById('lbNextProj')!

  lbClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox() })

  // Info button: hover shows temporarily, mousedown on image 1 pins it
  lbInfoBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleInfo() })

  lbInfoBtn.addEventListener('mouseenter', () => {
    if (!infoVisible && lightboxOpen) {
      setInfo(true)
    }
  })

  lbInfoBtn.addEventListener('mouseleave', () => {
    // Only auto-hide if not pinned and not on first image (where info is auto-shown)
    if (!infoPinned && currentImageIndex !== 0 && lightboxOpen) {
      setInfo(false)
    }
  })

  lbInfoBtn.addEventListener('mousedown', (e) => {
    e.stopPropagation()
    if (currentImageIndex === 0) {
      // Pin info on first image
      infoPinned = true
      setInfo(true)
    }
  })

  lbPrevImg.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentImageIndex - 1) })
  lbNextImg.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentImageIndex + 1) })
  lbPrevProj.addEventListener('click', (e) => { e.stopPropagation(); switchProject(-1) })
  lbNextProj.addEventListener('click', (e) => { e.stopPropagation(); switchProject(1) })

  lbImage.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentImageIndex + 1) })
  lbImage.style.cursor = 'pointer'

  lbBackdrop.addEventListener('click', closeLightbox)

  document.addEventListener('keydown', (e) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1)
    if (e.key === 'ArrowRight') showImage(currentImageIndex + 1)
    if (e.key === 'ArrowUp') { e.preventDefault(); switchProject(-1) }
    if (e.key === 'ArrowDown') { e.preventDefault(); switchProject(1) }
    if (e.key === 'i' || e.key === 'I') toggleInfo()
  })

  document.addEventListener('click', (e) => {
    if (lightboxOpen || isPageOverlayOpen()) return
    const tile = findTileFromEvent(e)
    if (tile) {
      e.preventDefault()
      openLightbox(tile.dataset.project!)
    }
  })

  document.addEventListener('contextmenu', (e) => {
    if (lightboxOpen) { e.preventDefault(); return }
    if (isPageOverlayOpen()) return
    const tile = findTileFromEvent(e)
    if (tile) {
      e.preventDefault()
      openLightbox(tile.dataset.project!)
    }
  })
}
