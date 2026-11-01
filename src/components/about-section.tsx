import { SectionLabel } from "@/components/motion"
import { contact } from "@/data/projects"
import { MapPin, Terminal, Award, BookOpen, ExternalLink } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel index="04">ENGINEER PROFILE</SectionLabel>

        <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Bridging interactive web interfaces and intelligent systems.
            </h2>

            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-sans">
              I am <span className="font-semibold text-foreground">Muhammad Aria Sastra</span>, a full-stack engineer and researcher based in Yogyakarta. Through <span className="font-mono text-foreground font-semibold">pranataa-labs</span>, I architect and build production-ready web platforms, dual-sided e-commerce ecosystems, and machine learning pipelines.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              My core stack centers on Laravel, React 19, TypeScript, and modern Tailwind CSS. I have developed multi-tenant SaaS tracking portals (<span className="text-foreground">FleetPulse</span>), audio polyclinic calling systems (<span className="text-foreground">Clinic Queue</span>), and boutique commercial platforms with automated Midtrans payment gateways.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Alongside web engineering, I conduct active research in Machine Learning and audio intelligence. Recent initiatives include <span className="text-foreground">EchoMind</span> (low-latency meeting transcription on CPU via faster-whisper paired with Gemini reasoning) and digital image steganography with AES-256-GCM authenticated encryption.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-sm bg-secondary/30">
                <MapPin className="w-3.5 h-3.5 text-foreground" />
                <span>{contact.location}</span>
              </div>
              <div className="flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-sm bg-secondary/30">
                <Terminal className="w-3.5 h-3.5 text-foreground" />
                <span>FULL-STACK & ML</span>
              </div>
              <div className="flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-sm bg-secondary/30">
                <BookOpen className="w-3.5 h-3.5 text-foreground" />
                <span>OPEN SOURCE CONTRIBUTOR</span>
              </div>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Facts Card */}
            <div className="border border-border bg-card rounded-xl p-6 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">
                CORE FACTS & CREDENTIALS
              </span>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex items-center justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">LOCATION</span>
                  <span className="text-foreground font-medium">Yogyakarta, ID</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">ORGANIZATION</span>
                  <span className="text-foreground font-medium">pranataa-labs</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">CO-AUTHOR PAIR</span>
                  <a
                    href="https://github.com/ariasastra-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground font-medium hover:underline inline-flex items-center gap-1"
                  >
                    ariasastra-dev <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">OPERATING OS</span>
                  <span className="text-foreground font-medium">Workflow Master</span>
                </li>
                <li className="flex items-center justify-between py-1.5">
                  <span className="text-muted-foreground">AVAILABILITY</span>
                  <span className="text-foreground font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                    OPEN FOR PROJECTS
                  </span>
                </li>
              </ul>
            </div>

            {/* Guiding Principles */}
            <div className="border border-border bg-secondary/20 rounded-xl p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-foreground" /> ENGINEERING PRINCIPLES
              </span>
              <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground font-mono">01. Autonomous Scaffolding:</strong> Dual-sided architecture with protected admin flows and clean production handoffs.
                </p>
                <p>
                  <strong className="text-foreground font-mono">02. Anti-Slop UI:</strong> Restraint in color, high-contrast slate-oklch typography, and thumb-friendly touch targets.
                </p>
                <p>
                  <strong className="text-foreground font-mono">03. Traceable Commits:</strong> Atomic Conventional Commits with automated changelog generation and pairing metadata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
