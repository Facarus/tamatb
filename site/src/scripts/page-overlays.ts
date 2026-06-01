/**
 * Page Overlays — fade-in panels over the kinetic grid
 * Handles: Studio, Videos, Contact pages as overlays
 * Also manages hamburger menu pin/unpin behavior
 */

import { setAnimationPaused } from './kinetic-engine'

let activeOverlay: HTMLElement | null = null
let pageBackdrop: HTMLElement
let kineticGrid: HTMLElement
let vignetteEl: HTMLElement

const pageMap: Record<string, string> = {
  studio: 'pageStudio',
  videos: 'pageVideos',
  contact: 'pageContact',
}

function openPage(pageId: string) {
  const overlay = document.getElementById(pageMap[pageId])
  if (!overlay) return

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

    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('nav-active'))
  }, 450)
}

export function initPageOverlays() {
  pageBackdrop = document.getElementById('pageBackdrop')!
  kineticGrid = document.getElementById('kineticGrid')!
  vignetteEl = document.getElementById('vignette')!

  const navTrigger = document.getElementById('navTrigger')
  const navHamburger = document.getElementById('navHamburger')

  // Hamburger click: toggle pinned state
  if (navHamburger && navTrigger) {
    navHamburger.addEventListener('click', (e) => {
      e.stopPropagation()
      navTrigger.classList.toggle('open')
    })
  }

  // Nav link click handlers
  document.querySelectorAll('.nav-menu a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const pageId = (link as HTMLElement).dataset.page
      if (!pageId) return

      // Close hamburger menu when a page is selected
      if (navTrigger) navTrigger.classList.remove('open')

      if (pageMap[pageId]) {
        if (activeOverlay && activeOverlay.id === pageMap[pageId]) {
          closePage()
        } else {
          openPage(pageId)
        }
      }
    })
  })

  // Logo click returns to grid (closes overlay)
  const logoLink = document.querySelector('.logo[data-page="built"]')
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault()
      if (activeOverlay) closePage()
      if (navTrigger) navTrigger.classList.remove('open')
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

  // Keyboard: Escape closes overlay or menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (activeOverlay) {
        closePage()
      } else if (navTrigger && navTrigger.classList.contains('open')) {
        navTrigger.classList.remove('open')
      }
    }
  })
}

export function isPageOverlayOpen(): boolean {
  return activeOverlay !== null
}
