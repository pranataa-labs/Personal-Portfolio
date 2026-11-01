import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { animate, motion, useInView, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export const EASE_OUT = [0.22, 1, 0.36, 1] as const

/** Fade + lift into view once. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Words slide up from behind a mask, one after another. */
export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  as = "span",
  immediate = false,
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
  as?: ElementType
  immediate?: boolean
}) {
  const Tag = as
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const show = immediate || inView
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className={cn("inline-block will-change-transform", wordClassName)}
            initial={{ y: "110%" }}
            animate={show ? { y: "0%" } : { y: "110%" }}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease: EASE_OUT }}
          >
            {w}
            {i < text.split(" ").length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=/<>"

/** Letters shuffle before settling on the label. Runs on hover or on mount. */
export function ScrambleText({
  text,
  className,
  trigger = "hover",
  duration = 600,
}: {
  text: string
  className?: string
  trigger?: "hover" | "mount"
  duration?: number
}) {
  const [out, setOut] = useState(text)
  const frame = useRef(0)

  const run = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    cancelAnimationFrame(frame.current)
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const settled = Math.floor(p * text.length)
      setOut(
        text
          .split("")
          .map((c, i) => (i < settled || c === " " ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(""),
      )
      if (p < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    if (trigger === "mount") run()
    return () => cancelAnimationFrame(frame.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, trigger])

  return (
    <span className={cn("inline-block tabular-nums", className)} onMouseEnter={trigger === "hover" ? run : undefined} aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  )
}

/** Pulls its child toward the pointer a little, then springs back. */
export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

/** Number that counts up when it scrolls into view. */
export function CountUp({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 1.8, ease: EASE_OUT, onUpdate: (v) => setVal(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to])
  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {val}
      {suffix}
    </span>
  )
}

/** Mono section label like "(02) — Selected work". */
export function SectionLabel({ index, children, className }: { index: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground", className)}>
      <span className="text-foreground">({index})</span>
      <motion.span
        className="h-px w-10 origin-left bg-foreground/40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE_OUT }}
      />
      <span>{children}</span>
    </div>
  )
}
