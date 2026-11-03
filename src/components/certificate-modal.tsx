import * as Dialog from "@radix-ui/react-dialog"
import { X, ExternalLink, Award, CheckCircle2, Calendar, FileText } from "lucide-react"
import { type Certificate } from "@/data/projects"
import { Button } from "@/components/ui/button"

interface CertificateModalProps {
  certificate: Certificate | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CertificateModal({ certificate, open, onOpenChange }: CertificateModalProps) {
  if (!certificate) return null

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-5 border border-border bg-card p-6 sm:p-8 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl max-h-[92vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  <Award className="w-3.5 h-3.5" /> VERIFIED CREDENTIAL
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {certificate.issueDate}
                </span>
                <span>•</span>
                <span className="font-mono text-foreground font-medium">{certificate.courseCode}</span>
              </div>
              <Dialog.Title className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                {certificate.title}
              </Dialog.Title>
              <Dialog.Description className="text-xs sm:text-sm text-muted-foreground mt-1">
                {certificate.issuer} · {certificate.organization}
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer shrink-0"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </Dialog.Close>
          </div>

          {/* Certificate Full Visual */}
          <div className="relative rounded-xl overflow-hidden border border-border bg-neutral-950/90 p-2 sm:p-4 aspect-16/10 flex items-center justify-center shadow-inner group">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* Description & Competencies */}
          <div className="space-y-4">
            <p className="text-sm text-foreground/90 leading-relaxed font-sans">
              {certificate.description}
            </p>

            {/* Core Competencies Checklist */}
            <div className="border border-border/80 bg-secondary/20 rounded-xl p-4 sm:p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-3 font-semibold">
                CURRICULUM & VERIFIED SKILLS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {certificate.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-foreground shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs border border-border bg-secondary/50 px-2.5 py-1 rounded text-foreground font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <a
              href={certificate.imagePng}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:underline"
            >
              <FileText className="w-3.5 h-3.5" /> View Original Resolution (PNG)
            </a>

            <div className="flex items-center gap-3">
              <Dialog.Close asChild>
                <Button variant="outline" size="sm">
                  Close
                </Button>
              </Dialog.Close>

              <Button size="sm" asChild>
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  <span>Verify Authenticity</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
