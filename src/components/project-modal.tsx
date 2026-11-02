import * as Dialog from "@radix-ui/react-dialog"
import { X, ExternalLink, Github, CheckCircle2, Calendar, Layers } from "lucide-react"
import { type Project } from "@/data/projects"
import { Button } from "@/components/ui/button"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-card p-6 sm:p-8 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                <span>{project.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {project.year}
                </span>
              </div>
              <Dialog.Title className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                {project.title}
              </Dialog.Title>
              <Dialog.Description className="text-sm text-muted-foreground mt-1">
                {project.tagline}
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </Dialog.Close>
          </div>

          {/* Project Screenshot / Visual */}
          {project.image ? (
            <div className="relative rounded-xl overflow-hidden border border-border bg-neutral-950/90 p-2 sm:p-3 aspect-[16/9] flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain rounded-lg shadow-sm"
              />
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-secondary/30 p-8 flex flex-col items-center justify-center text-center">
              <span className="font-mono text-4xl font-bold tracking-widest text-foreground/40 mb-2">
                {project.mark || "PRANATAA"}
              </span>
              <p className="font-mono text-xs text-muted-foreground">
                CORE SYSTEM REPOSITORY ARCHITECTURE
              </p>
            </div>
          )}

          {/* Project Summary */}
          <div className="space-y-4 pt-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                SYSTEM OVERVIEW
              </h4>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Architectural Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="pt-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2.5">
                  KEY ARCHITECTURAL HIGHLIGHTS
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> TECHNOLOGIES & STACK
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border/80 bg-secondary/40 font-mono text-xs px-2.5 py-1 rounded-sm text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-4 border-t border-border flex items-center justify-between gap-3 mt-2">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Button variant="default" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  <span>Inspect Source Code</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </a>
            ) : (
              <span className="font-mono text-xs text-muted-foreground">
                Internal Private Architecture
              </span>
            )}

            <Dialog.Close asChild>
              <Button variant="outline" size="sm">
                Close
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
