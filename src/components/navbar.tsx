import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { scrollToTarget } from "@/hooks/use-lenis"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "SYSTEMS", href: "#features" },
    { label: "PROCESS", href: "#process" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    scrollToTarget(href)
  }

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    toggle({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#hero")
          }}
          className="group flex items-center gap-2 text-foreground font-display font-bold text-xl tracking-tighter"
          data-cursor="hover"
        >
          <span className="font-mono text-sm border border-foreground/30 px-2 py-0.5 rounded-sm group-hover:bg-foreground group-hover:text-background transition-colors">
            MAS
          </span>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest hidden sm:inline-block">
            / pranataa-labs
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="hover:text-foreground transition-colors relative py-1"
              data-cursor="hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 border border-border/80 px-3 py-1 rounded-full bg-secondary/40 font-mono text-[11px] text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            <span>SYSTEM / 001</span>
          </div>

          {/* Theme Switcher Button */}
          <button
            onClick={handleThemeToggle}
            aria-label="Toggle monochrome color theme"
            className="w-11 h-11 rounded-full border border-border hover:border-foreground/40 bg-secondary/50 flex items-center justify-center text-foreground transition-all cursor-pointer active:scale-95"
            data-cursor="hover"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu navigation"
            className="md:hidden w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary cursor-pointer"
            data-cursor="hover"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Rule 19 Touch Ergonomics) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden px-6 py-8"
          >
            <div className="flex flex-col gap-5 font-mono text-sm tracking-wider">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="py-3 px-2 border-b border-border/50 text-foreground flex items-center justify-between min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>STATUS: OPERATIONAL</span>
                <span>YOGYAKARTA, ID</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
