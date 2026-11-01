import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects, categories, type CategoryFilter, type Project } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { SectionLabel } from "@/components/motion"

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="work" className="py-20 md:py-28 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel index="02">PRODUCTION WORKSPACE</SectionLabel>

        {/* Section Header */}
        <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Selected Projects & Systems
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
              Real application architectures, dual-sided e-commerce platforms, real-time logistics portals, and machine learning research built under pranataa-labs.
            </p>
          </div>

          <div className="font-mono text-xs text-muted-foreground">
            <span>SHOWING {filteredProjects.length} OF {projects.length} REPOSITORIES</span>
          </div>
        </div>

        {/* Category Filter Pills (Rule 19 Thumb Ergonomics) */}
        <div className="flex flex-wrap items-center gap-2 py-6 overflow-x-auto scrollbar-none">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length

            const isActive = activeCategory === cat

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-3.5 py-2 rounded-full border transition-all cursor-pointer flex items-center gap-2 min-h-[44px] ${
                  isActive
                    ? "bg-foreground text-background border-foreground font-semibold shadow-xs"
                    : "bg-secondary/40 text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                }`}
                data-cursor="hover"
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-background/20 text-background" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                onSelect={handleOpenProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detailed Modal */}
        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  )
}
