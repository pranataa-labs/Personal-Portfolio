import { motion } from "framer-motion"
import { ArrowDown, Code2, Database, Terminal, Sparkles, MoveRight } from "lucide-react"
import { Hero as AnimatedCycleHero } from "@/components/ui/animated-hero"
import { contact } from "@/data/projects"
import { scrollToTarget } from "@/hooks/use-lenis"

export function Hero() {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 md:pb-24 overflow-hidden border-b border-border">
      {/* Subtle hatched background pattern */}
      <div className="absolute inset-0 text-hatched pointer-events-none opacity-40 dark:opacity-60" />

      {/* Decorative Rotating Geometric Wheel (Original Motif Refined for Monochrome) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] pointer-events-none opacity-[0.06] dark:opacity-[0.12]">
        <svg viewBox="0 0 500 500" className="w-full h-full animate-spin-slower">
          <circle cx="250" cy="250" r="230" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="16 8" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 250 250)`}>
              <line x1="250" y1="20" x2="250" y2="70" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="250,15 255,25 245,25" fill="currentColor" />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Coordinates & Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground pb-8 border-b border-border/40">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span>FULL-STACK ARCHITECT & ML RESEARCHER</span>
          </div>
          <div>
            <span>[ {contact.coords} ] {contact.location}</span>
          </div>
        </div>

        {/* 21st DEV Animated Cycling Titles */}
        <AnimatedCycleHero
          badgeText="Explore 2026 Production Catalog"
          badgeLink="#work"
          leadPrefix="Engineering"
          titles={[
            "robust web systems",
            "smart workflows",
            "ML audio pipelines",
            "scalable backends",
            "modern SaaS apps",
          ]}
          description="Software engineer building high-impact web applications, SaaS platforms, and machine learning models with Laravel, React, TypeScript, and Python."
          primaryCtaText="Selected Projects"
          primaryCtaLink="#work"
          secondaryCtaText="Contact Aria"
          secondaryCtaLink="#contact"
          className="pt-2 md:pt-6 pb-6"
        />

        {/* Bento Profile Spotlight & Architecture Badges */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-stretch">
          {/* Portrait & Persona Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 relative group border border-border bg-card/80 backdrop-blur-xs rounded-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xs hover:border-foreground/30 transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">FOUNDER & LEAD</span>
              <span className="font-mono text-xs text-foreground bg-secondary px-2.5 py-1 rounded-sm">pranataa-labs</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 my-2">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden border border-border bg-muted/40 shadow-inner">
                <img
                  src="/pranataa.webp"
                  alt="Muhammad Aria Sastra"
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/20 pointer-events-none" />
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  Muhammad Aria Sastra
                </h3>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  Yogyakarta, ID • Software Engineer
                </p>
                <p className="text-sm text-foreground/80 mt-3 leading-snug">
                  Specializing in clean production handoffs, dual-sided apps, and strict architectural discipline.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-border/60 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
              <span>ACTIVE STACK: LARAVEL / REACT / PYTHON</span>
              <span className="flex items-center gap-1 text-foreground">
                <Sparkles className="w-3.5 h-3.5" /> VERIFIED
              </span>
            </div>
          </motion.div>

          {/* Quick Metrics & Pillars Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-7 border border-border bg-card/80 backdrop-blur-xs rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-foreground/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">CORE CAPABILITIES</span>
                <span className="font-mono text-xs text-muted-foreground">9-STAGE WORKFLOW READY</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Engineered for Performance & Scalability
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
                Every repository strictly adheres to Conventional Commits, full-stack type safety, and responsive touch ergonomics with zero AI slop.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-border/60">
              <div className="border border-border/60 rounded-lg p-3 bg-secondary/30">
                <div className="flex items-center gap-2 text-foreground mb-1">
                  <Code2 className="w-4 h-4" />
                  <span className="font-mono text-xs font-semibold">Dual-Sided Web</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Storefronts & obfuscated admin portals in Laravel & React.
                </p>
              </div>

              <div className="border border-border/60 rounded-lg p-3 bg-secondary/30">
                <div className="flex items-center gap-2 text-foreground mb-1">
                  <Database className="w-4 h-4" />
                  <span className="font-mono text-xs font-semibold">Real-Time SaaS</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Fleet telemetry, audio queue calling & WebSockets.
                </p>
              </div>

              <div className="border border-border/60 rounded-lg p-3 bg-secondary/30">
                <div className="flex items-center gap-2 text-foreground mb-1">
                  <Terminal className="w-4 h-4" />
                  <span className="font-mono text-xs font-semibold">ML & Crypto</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  faster-whisper STT, Gemini multimodal & Stego LSB.
                </p>
              </div>
            </div>

            {/* Bottom Scroll Link */}
            <div className="pt-6 mt-4 flex items-center justify-between">
              <button
                onClick={() => scrollToTarget("#work")}
                className="inline-flex items-center gap-2 font-mono text-xs text-foreground hover:underline cursor-pointer group"
              >
                <span>DISCOVER PROJECTS BELOW</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
              </button>
              <a
                href="https://github.com/pranataa-labs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
              >
                <span>github.com/pranataa-labs</span>
                <MoveRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
