import { useCallback, useEffect, useState } from "react"
import { flushSync } from "react-dom"

export type Theme = "dark" | "light"

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

/**
 * Black/white theme switch. When the browser supports the View Transitions API
 * the new theme grows out of the click point as a circle; otherwise colors
 * cross-fade through the CSS transitions on <body>.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0f0f0f" : "#fafafa")
    try {
      localStorage.setItem("theme", theme)
    } catch {
      /* storage blocked: theme still works for this visit */
    }
  }, [theme])

  const toggle = useCallback((origin?: { x: number; y: number }) => {
    const next: Theme = readTheme() === "dark" ? "light" : "dark"
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> }
    }

    if (!doc.startViewTransition || reduced) {
      setTheme(next)
      return
    }

    const x = origin?.x ?? window.innerWidth / 2
    const y = origin?.y ?? 0
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

    const vt = doc.startViewTransition(() => {
      flushSync(() => setTheme(next))
      document.documentElement.classList.toggle("dark", next === "dark")
    })
    vt.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(.65,0,.35,1)", pseudoElement: "::view-transition-new(root)" },
      )
    })
  }, [])

  return { theme, toggle }
}
