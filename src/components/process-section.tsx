import { useState } from "react"
import { workflow, stack } from "@/data/projects"
import { SectionLabel } from "@/components/motion"
import { CheckCircle2, ChevronRight, Cpu } from "lucide-react"

export function ProcessSection() {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section id="process" className="py-20 md:py-28 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel index="03">DISCIPLINE & ARSENAL</SectionLabel>

        {/* Section Heading */}
        <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              9-Stage Engineering Standard
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
              Strict engineering governance adapted from Workflow Master. Every feature undergoes a structured lifecycle to ensure type safety, regression prevention, and clean production handoffs.
            </p>
          </div>

          <div className="font-mono text-xs text-muted-foreground border border-border px-3 py-1.5 rounded-md bg-secondary/50 self-start md:self-auto">
            <span>REFERENCE: WORKFLOW MASTER OS</span>
          </div>
        </div>

        {/* 9-Stage Interactive Lifecycle Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 items-start">
          {/* Stage Selector List (Desktop & Mobile) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-3">
              SELECT ENGINEERING PHASE
            </span>
            <div className="space-y-1.5">
              {workflow.map((item, idx) => {
                const isActive = activeStage === idx
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveStage(idx)}
                    className={`w-full text-left font-mono text-xs px-4 py-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer min-h-[44px] ${
                      isActive
                        ? "bg-foreground text-background border-foreground font-bold shadow-xs"
                        : "bg-secondary/30 text-muted-foreground border-border/70 hover:border-foreground/30 hover:text-foreground"
                    }`}
                    data-cursor="hover"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] ${isActive ? "text-background/80" : "text-muted-foreground"}`}>
                        0{idx + 1}
                      </span>
                      <span className="tracking-wider uppercase">{item.title}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "translate-x-1" : ""}`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Phase Deep Dive Panel */}
          <div className="lg:col-span-7 border border-border bg-card rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-foreground/5 font-mono text-8xl font-black pointer-events-none">
              0{activeStage + 1}
            </div>

            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                ACTIVE PHASE PROTOCOL • STAGE 0{activeStage + 1} / 09
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                {workflow[activeStage].title}
              </h3>

              <p className="text-base sm:text-lg text-foreground/90 mt-4 leading-relaxed max-w-xl">
                {workflow[activeStage].body}
              </p>

              <div className="mt-8 pt-6 border-t border-border/80 space-y-3 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Mandatory adherence across all pranataa-labs repositories.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                  <span>Integrated with Rule 12.1 (Dual-Account Co-Authorship & Pairing).</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                  <span>Enforces Rule 19 Anti-Slop, Mobile-First ergonomics, and Security Audit.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee / Arsenal */}
        <div className="pt-10 border-t border-border">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Cpu className="w-4 h-4" /> VERIFIED PRODUCTION TECH STACK
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {stack.length} TECHNOLOGIES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {stack.map((item) => (
              <div
                key={item}
                className="border border-border/80 bg-secondary/30 rounded-lg p-3 text-center font-mono text-xs text-foreground hover:border-foreground/40 hover:bg-secondary/60 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
