import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [cursorType, setCursorType] = useState<"default" | "hover" | "project">("default")
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring physics for trailing ring
  const ringX = useSpring(mouseX, { stiffness: 450, damping: 28, mass: 0.5 })
  const ringY = useSpring(mouseY, { stiffness: 450, damping: 28, mass: 0.5 })

  useEffect(() => {
    // Only activate on pointer devices with fine precision (mouse/trackpad, not touch)
    if (window.matchMedia("(pointer: fine)").matches) {
      setMounted(true)
      document.documentElement.classList.add("has-custom-cursor")
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)

      // Detect hover target
      const target = e.target as HTMLElement | null
      if (!target) return

      const interactive = target.closest("button, a, input, [data-cursor='hover'], .ib-tool, .ib-av")
      const projectCard = target.closest("[data-cursor='project']")

      if (projectCard) {
        setCursorType("project")
      } else if (interactive) {
        setCursorType("hover")
      } else {
        setCursorType("default")
      }
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    window.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mouseenter", onMouseEnter)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.documentElement.classList.remove("has-custom-cursor")
    }
  }, [mouseX, mouseY, visible])

  if (!mounted || !visible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none">
      {/* Central crisp dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-foreground"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing smooth magnetic ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-foreground/40 backdrop-invert-0 pointer-events-none flex items-center justify-center font-mono text-[9px] tracking-wider font-semibold uppercase text-foreground bg-foreground/[0.04]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "project" ? 64 : cursorType === "hover" ? 44 : 26,
          height: cursorType === "project" ? 64 : cursorType === "hover" ? 44 : 26,
          borderColor: cursorType === "hover" ? "var(--foreground)" : "rgba(128,128,128,0.4)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {cursorType === "project" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] tracking-widest text-foreground font-mono"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </div>
  )
}
