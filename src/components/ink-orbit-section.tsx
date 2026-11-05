import { motion } from "framer-motion"
import InkOrbitFeatures from "@/components/ui/ink-orbit-features"
import { useTheme } from "@/hooks/use-theme"
import { SectionLabel } from "@/components/motion"

export function InkOrbitSection() {
  const { theme } = useTheme()

  return (
    <section id="features" className="py-20 md:py-28 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <SectionLabel index="01">INTELLIGENT SYSTEMS & WORKFLOWS</SectionLabel>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Autonomous Engineering Pipeline
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
              Live telemetry and automated delivery from 21st DEV architecture. Synchronizing multi-tenant backends, AI audio intelligence, and auditable git workflows.
            </p>
          </div>

          <div className="font-mono text-xs text-muted-foreground border border-border px-3 py-1.5 rounded-md bg-secondary/50 self-start md:self-auto">
            <span>LIVE 21ST DEV INTEGRATION</span>
          </div>
        </motion.div>
      </div>

      {/* 21st DEV Ink Orbit Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InkOrbitFeatures
          theme={theme}
          brand="PRANATAA LABS"
          tag="WORKFLOW ENGINE"
          title="Intelligent *Full-Stack* Automation"
          collaboration={{
            title: "Strict Co-Authorship & Pairing",
            description:
              "Every commit pairs seamlessly with aria sastra and CI bots, enforcing Conventional Commits and clean PR flows without friction.",
          }}
          reports={{
            title: "Automated Changelogs & Audit Logs",
            description:
              "Structured release notes generated with git-cliff, commitlint verification, and zero manual formatting required.",
          }}
          integrations={{
            title: "Full-Stack Integrations Hub",
            description:
              "Synchronizes web APIs, WebSockets telemetry, Midtrans payment gateway, and Google Gemini AI into one resilient ecosystem.",
            tools: ["Laravel", "React", "Python", "MySQL"],
          }}
          insights={{
            title: "Predictive Code & System Metrics",
            description:
              "Real-time test suite coverage and release health forecasting across all 15+ production repositories.",
            values: [35, 42, 48, 55, 62, 70, 78, 85, 91, 95, 98, 100],
            forecastFrom: 8,
          }}
          team={[
            "Aria Sastra · Lead Architect",
            "Aria Dev · Co-Author Pairing",
            "CI/CD · Automated Test Runner",
            "Ohio Caffe · Table Menu POS",
            "FleetPulse · Telemetry Server",
          ]}
          className="rounded-2xl border border-border overflow-hidden shadow-xs"
        />
      </div>
    </section>
  )
}
