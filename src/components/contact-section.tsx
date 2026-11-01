import { useState } from "react"
import { contact } from "@/data/projects"
import { scrollToTarget } from "@/hooks/use-lenis"
import { SectionLabel } from "@/components/motion"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Copy,
  Check,
  Github,
  Instagram,
  MapPin,
  ArrowUp,
  Sparkles,
  MoveRight,
} from "lucide-react"

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <footer id="contact" className="pt-20 md:pt-28 pb-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel index="05">GET IN TOUCH</SectionLabel>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-border">
          {/* Main Headline Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-foreground leading-[1.05]">
              Let’s architect something <span className="italic font-serif font-normal">impactful.</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
              Available for full-stack engineering, web application development, machine learning integrations, and technical architecture consulting.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a href={`mailto:${contact.email}`}>
                <Button size="lg" className="gap-2.5 font-medium">
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                  <MoveRight className="w-4 h-4" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                onClick={copyEmail}
                className="gap-2.5 font-mono text-xs cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-foreground" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "COPIED TO CLIPBOARD" : contact.email}</span>
              </Button>
            </div>
          </div>

          {/* Social Links & Avatar Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="border border-border bg-card p-6 rounded-xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block">
                DIRECT CHANNELS & PROFILES
              </span>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-border/80 bg-secondary/30 hover:border-foreground/40 hover:bg-secondary/70 transition-all text-foreground"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>GITHUB / PRANATAA-LABS</span>
                  </span>
                  <MoveRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>

                <a
                  href={contact.githubPersonal}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-border/80 bg-secondary/30 hover:border-foreground/40 hover:bg-secondary/70 transition-all text-foreground"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>GITHUB / ARIASASTRA-DEV</span>
                  </span>
                  <MoveRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>

                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-border/80 bg-secondary/30 hover:border-foreground/40 hover:bg-secondary/70 transition-all text-foreground"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    <span>INSTAGRAM {contact.instagramHandle}</span>
                  </span>
                  <MoveRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-foreground" />
                  <span>{contact.location}</span>
                </span>
                <span>{contact.coords}</span>
              </div>
            </div>

            {/* Back to top button */}
            <div className="flex justify-end">
              <button
                onClick={() => scrollToTarget(0)}
                className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer group p-2 min-h-[44px]"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Manifesto Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} MUHAMMAD ARIA SASTRA</span>
            <span>•</span>
            <span>PRANATAA-LABS</span>
          </div>

          <div className="flex items-center gap-2 text-foreground">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUILT WITH REACT 19, TAILWIND V4 & WORKFLOW MASTER</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
