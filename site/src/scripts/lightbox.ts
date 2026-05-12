import { setLightboxOpen, setAnimationPaused } from './kinetic-engine'
import { isPageOverlayOpen } from './page-overlays'

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
let kineticGrid: HTMLElement
let navOverlay: HTMLElement
let vignetteEl: HTMLElement

function openLightbox(projectId: string, imgIndex = 0) {
  const proj = PROJECT_DB[projectId]
  if (!proj) return

  currentProjectId = projectId
  currentImageIndex = imgIndex
  lightboxOpen = true
  infoVisible = false
  setLightboxOpen(true)
  setAnimationPaused(true)

  lbImage.src = proj.images[imgIndex]
  updateCounter()
  lbProjLabel.textContent = proj.title

  lbInfoTitle.textContent = proj.title
  lbInfoMeta.innerHTML = proj.state + ' &middot; ' + proj.location + '<br>' + proj.typology + ' &middot; ' + proj.date
  lbInfoText.innerHTML = proj.text
  lbInfoOverlay.classList.remove('visible')
  lbInfoBtn.classList.remove('active')

  kineticGrid.classList.add('dimmed')
  navOverlay.classList.add('hidden')
  vignetteEl.classList.add('hidden')
  lbBackdrop.classList.add('active')
  lbStage.classList.add('active')

  lbPanel.classList.remove('open', 'closing', 'fade-out', 'fade-in')
  void lbPanel.offsetWidth
  requestAnimationFrame(() => {
    lbPanel.classList.add('open')
  })
}

function closeLightbox() {
  lbPanel.classList.remove('open')
  lbPanel.classList.add('closing')
  lightboxOpen = false
  setLightboxOpen(false)
  setAnimationPaused(false)

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

  lbPanel.classList.add('fade-out')
  setTimeout(() => {
    currentImageIndex = nextIndex
    lbImage.src = proj.images[currentImageIndex]
    updateCounter()
    lbPanel.classList.remove('fade-out')
    lbPanel.classList.add('fade-in')
    setTimeout(() => lbPanel.classList.remove('fade-in'), 350)
  }, 250)
}

function switchProject(direction: number) {
  if (!currentProjectId) return
  const idx = PROJECT_ORDER.indexOf(currentProjectId)
  const next = ((idx + direction) % PROJECT_ORDER.length + PROJECT_ORDER.length) % PROJECT_ORDER.length

  lbPanel.classList.add('fade-out')

  setTimeout(() => {
    const proj = PROJECT_DB[PROJECT_ORDER[next]]
    if (!proj) return

    currentProjectId = PROJECT_ORDER[next]
    currentImageIndex = 0
    lbImage.src = proj.images[0]
    updateCounter()
    lbProjLabel.textContent = proj.title
    lbInfoTitle.textContent = proj.title
    lbInfoMeta.innerHTML = proj.state + ' &middot; ' + proj.location + '<br>' + proj.typology + ' &middot; ' + proj.date
    lbInfoText.innerHTML = proj.text

    if (infoVisible) {
      infoVisible = false
      lbInfoOverlay.classList.remove('visible')
      lbInfoBtn.classList.remove('active')
    }

    lbPanel.classList.remove('fade-out')
    lbPanel.classList.add('fade-in')
    setTimeout(() => lbPanel.classList.remove('fade-in'), 350)
  }, 300)
}

function updateCounter() {
  if (!currentProjectId) return
  const proj = PROJECT_DB[currentProjectId]
  if (!proj) return
  lbCounter.textContent = (currentImageIndex + 1) + ' / ' + proj.images.length
}

function toggleInfo() {
  infoVisible = !infoVisible
  lbInfoOverlay.classList.toggle('visible', infoVisible)
  lbInfoBtn.classList.toggle('active', infoVisible)
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
  kineticGrid = document.getElementById('kineticGrid')!
  navOverlay = document.getElementById('navOverlay')!
  vignetteEl = document.getElementById('vignette')!

  const lbClose = document.getElementById('lbClose')!
  const lbPrevImg = document.getElementById('lbPrevImg')!
  const lbNextImg = document.getElementById('lbNextImg')!
  const lbPrevProj = document.getElementById('lbPrevProj')!
  const lbNextProj = document.getElementById('lbNextProj')!

  lbClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox() })
  lbInfoBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleInfo() })
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
