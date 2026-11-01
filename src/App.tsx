import { useEffect } from "react"
import { useLenis } from "@/hooks/use-lenis"
import { CustomCursor } from "@/components/custom-cursor"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { InkOrbitSection } from "@/components/ink-orbit-section"
import { ProjectsSection } from "@/components/projects-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export function App() {
  // Initialize Lenis smooth inertial scrolling
  useLenis(true)

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        el.scrollIntoView({ behavior: "instant" })
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-foreground selection:text-background grain">
      {/* Interactive Trailing Cursor */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <InkOrbitSection />
        <ProjectsSection />
        <ProcessSection />
        <AboutSection />
      </main>

      {/* Footer & Contact */}
      <ContactSection />
    </div>
  )
}

export default App
