/**
 * Page Overlays — fade-in panels over the kinetic grid
 * Handles: Studio, Present, Videos, Contact pages as overlays
 */

import { setAnimationPaused } from './kinetic-engine'

let activeOverlay: HTMLElement | null = null
let pageBackdrop: HTMLElement
let kineticGrid: HTMLElement
let vignetteEl: HTMLElement

const pageMap: Record<string, string> = {
  studio: 'pageStudio',
  present: 'pagePresent',
  videos: 'pageVideos',
  contact: 'pageContact',
}

function openPage(pageId: string) {
  const overlay = document.getElementById(pageMap[pageId])
  if (!overlay) return

  // Close any currently open overlay
  if (activeOverlay) {
    activeOverlay.classList.remove('active')
  }

  activeOverlay = overlay
  setAnimationPaused(true)

  kineticGrid.classList.add('dimmed')
  vignetteEl.classList.add('hidden')
  pageBackdrop.classList.add('active')

  // Update active nav link
  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('nav-active'))
  const navLink = document.querySelector(`.nav-menu a[data-page="${pageId}"]`)
  if (navLink) navLink.classList.add('nav-active')

  void overlay.offsetWidth
  requestAnimationFrame(() => {
    overlay.classList.add('active')
  })
}

function closePage() {
  if (!activeOverlay) return

  activeOverlay.classList.add('closing')
  activeOverlay.classList.remove('active')

  const closing = activeOverlay
  setTimeout(() => {
    closing.classList.remove('closing')
    pageBackdrop.classList.remove('active')
    kineticGrid.classList.remove('dimmed')
    vignetteEl.classList.remove('hidden')
    setAnimationPaused(false)
    activeOverlay = null

    // Remove active nav link
    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('nav-active'))
  }, 450)
}

export function initPageOverlays() {
  pageBackdrop = document.getElementById('pageBackdrop')!
  kineticGrid = document.getElementById('kineticGrid')!
  vignetteEl = document.getElementById('vignette')!

  // Nav link click handlers
  document.querySelectorAll('.nav-menu a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const pageId = (link as HTMLElement).dataset.page
      if (!pageId) return

      if (activeOverlay && activeOverlay.id === pageMap[pageId]) {
        closePage()
      } else {
        openPage(pageId)
      }
    })
  })

  // "Built" link returns to grid
  const builtLink = document.querySelector('.nav-menu a[data-page="built"]')
  if (builtLink) {
    builtLink.addEventListener('click', (e) => {
      e.preventDefault()
      if (activeOverlay) closePage()
    })
  }

  // Close buttons
  document.querySelectorAll('.page-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      closePage()
    })
  })

  // Click backdrop to close
  pageBackdrop.addEventListener('click', closePage)

  // Keyboard: Escape closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeOverlay) {
      closePage()
    }
  })
}

export function isPageOverlayOpen(): boolean {
  return activeOverlay !== null
}
