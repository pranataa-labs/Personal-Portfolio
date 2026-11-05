import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { type Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group relative flex flex-col justify-between rounded-xl border border-border bg-card/70 hover:border-foreground/40 hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
      data-cursor="project"
      onClick={() => onSelect(project)}
    >
      <div>
        {/* Card Visual / Screenshot */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-neutral-950/90 flex items-center justify-center p-2 sm:p-2.5">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain rounded-md shadow-xs grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
            />
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-secondary/30 rounded-md">
              <span className="font-mono text-3xl font-extrabold tracking-widest text-foreground/40 group-hover:text-foreground/80 transition-colors">
                {project.mark || "SYSTEM"}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground mt-1">
                PRANATAA-LABS REPO
              </span>
            </div>
          )}

          {/* Category & Year Floating Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
            <span className="font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded-sm bg-background/90 backdrop-blur-xs border border-border/80 text-foreground">
              {project.category}
            </span>
          </div>
          <div className="absolute top-3 right-3 z-10">
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-background/90 backdrop-blur-xs border border-border/80 text-muted-foreground">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:underline underline-offset-4 flex items-center gap-1.5 break-words">
                <span>{project.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-foreground" />
              </h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                {project.tagline}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-foreground/80 mt-3 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/50">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] px-2 py-0.5 rounded-xs bg-secondary/60 text-muted-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="font-mono text-[10px] px-1.5 py-0.5 text-muted-foreground">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="px-5 py-3 border-t border-border/60 bg-secondary/20 flex items-center justify-between font-mono text-[11px]">
        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
          CLICK TO INSPECT
        </span>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors p-1"
            title="Inspect GitHub Repository"
          >
            <Github className="w-3.5 h-3.5" />
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.article>
  )
}
