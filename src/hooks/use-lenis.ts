import { useEffect } from "react"
import Lenis from "lenis"

let instance: Lenis | null = null

/** Smooth inertial scrolling. Skipped for users who prefer reduced motion. */
export function useLenis(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), touchMultiplier: 1.2 })
    instance = lenis
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      instance = null
    }
  }, [enabled])
}

export function scrollToTarget(target: string | number) {
  if (instance) {
    instance.scrollTo(target, { offset: typeof target === "string" ? -16 : 0 })
    return
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" })
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
  }
}

export function lockScroll(locked: boolean) {
  if (instance) {
    if (locked) instance.stop()
    else instance.start()
  }
  document.documentElement.style.overflow = locked ? "hidden" : ""
}
