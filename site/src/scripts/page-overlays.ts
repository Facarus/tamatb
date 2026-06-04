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

  // ===== Inline Video Player =====
  const videoOverlay = document.getElementById('videoPlayerOverlay')
  const videoFrame = document.getElementById('videoPlayerFrame') as HTMLIFrameElement | null
  const videoClose = document.getElementById('videoPlayerClose')

  function openVideo(youtubeId: string) {
    if (!videoOverlay || !videoFrame) return
    // Embed with minimal UI: no related videos, modest branding, autoplay
    videoFrame.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&color=white&iv_load_policy=3`
    videoOverlay.classList.add('active')
  }

  function closeVideo() {
    if (!videoOverlay || !videoFrame) return
    videoOverlay.classList.remove('active')
    // Stop video by clearing src
    setTimeout(() => { videoFrame.src = '' }, 350)
  }

  // Video circle click handlers
  document.querySelectorAll('.video-circle[data-youtube]').forEach(circle => {
    circle.addEventListener('click', () => {
      const ytId = (circle as HTMLElement).dataset.youtube
      if (ytId) {
        openVideo(ytId)
      }
    })
  })

  if (videoClose) videoClose.addEventListener('click', closeVideo)
  if (videoOverlay) {
    videoOverlay.addEventListener('click', (e) => {
      if (e.target === videoOverlay) closeVideo()
    })
  }

  // Keyboard: Escape closes video player, overlay, or menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (videoOverlay?.classList.contains('active')) {
        closeVideo()
      } else if (activeOverlay) {
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
