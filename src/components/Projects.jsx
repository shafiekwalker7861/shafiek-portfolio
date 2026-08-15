import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const conceptBase = `${import.meta.env.BASE_URL}demos`;

const projects = [
  {
    title: "CT3DR",
    category: "live",
    eyebrow: "Live website · 3D visualisation",
    description: "A cinematic portfolio for architectural rendering, built around immersive project imagery and a premium visual system.",
    image: "https://capetown3drenders.co.za/media/atlantic-house.webp",
    accent: "ocean",
    featured: true,
    links: [{ label: "Visit website", url: "https://capetown3drenders.co.za/" }],
  },
  {
    title: "The Interior Company",
    category: "live",
    eyebrow: "Live website · Personal brand",
    description: "A multi-disciplinary portfolio bringing web development, 3D visualisation and technical design into one online presence.",
    image: "https://theinteriorcompany.co.za/assets/img/0.png",
    accent: "paper",
    links: [{ label: "Visit website", url: "https://theinteriorcompany.co.za/" }],
  },
  {
    title: "The Fix Hub",
    category: "live",
    eyebrow: "Client website · Mobile repair",
    description: "A responsive service-business website designed to make repairs, offers and contact routes easy to find.",
    image: "https://theinteriorcompany.co.za/assets/img/1.png",
    accent: "red",
    status: "Host temporarily offline",
    links: [],
  },
  {
    title: "Cape Town Designer",
    category: "live",
    eyebrow: "Live archive · Creative portfolio",
    description: "An earlier portfolio showcasing graphic design, technical work and visual projects in a gallery-led format.",
    accent: "orange",
    links: [{ label: "Visit archive", url: "http://capetowndesigner.co.za/" }],
  },
  {
    title: "TV Show Project",
    category: "live",
    eyebrow: "JavaScript app · CodeYourFuture",
    description: "A searchable TV catalogue that fetches show data, renders episode information and supports fast client-side discovery.",
    accent: "purple",
    status: "Live host requires access",
    links: [{ label: "View code", url: "https://github.com/shafiekwalker7861/Project-TV-Show" }],
  },
  {
    title: "RC2 Website",
    category: "live",
    eyebrow: "Client website · Coming next",
    description: "A new website build currently in development. The case study and live link will be added after launch.",
    accent: "blueprint",
    status: "In development",
    links: [],
  },
  {
    title: "Evergreen Lawn Care",
    category: "webflow",
    eyebrow: "Webflow-ready concept · Lawn care",
    description: "A friendly, lead-focused local service site with quick quote paths, service proof and clear area coverage.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=82",
    accent: "evergreen",
    featured: true,
    links: [{ label: "Explore concept", url: `${conceptBase}/evergreen.html` }],
  },
  {
    title: "Northline Landscapes",
    category: "webflow",
    eyebrow: "Webflow-ready concept · Landscaping",
    description: "An editorial landscape design concept that uses spacious composition, project storytelling and a refined enquiry journey.",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=82",
    accent: "sand",
    links: [{ label: "Explore concept", url: `${conceptBase}/northline.html` }],
  },
  {
    title: "Harbor Home Services",
    category: "webflow",
    eyebrow: "Webflow-ready concept · Home services",
    description: "A high-clarity service website system designed for local search, urgent enquiries and multi-service expansion.",
    accent: "harbor",
    links: [{ label: "Explore concept", url: `${conceptBase}/harbor.html` }],
  },
  {
    title: "Python Learning Coach",
    category: "learning",
    eyebrow: "Python · Stanford Code in Place",
    description: "A beginner-friendly learning experience that turns core Python concepts into a simple, guided interaction.",
    accent: "python",
    links: [{ label: "Open project", url: "https://codeinplace.stanford.edu/cip6/share/BMxsYEs66oNXem5AFMQF" }],
  },
  {
    title: "Module Data Flows",
    category: "learning",
    eyebrow: "JavaScript · Data flow",
    description: "CodeYourFuture coursework focused on following data through applications and building predictable program logic.",
    accent: "matrix",
    links: [{ label: "View code", url: "https://github.com/shafiekwalker7861/Module-Data-Flows" }],
  },
  {
    title: "Structuring & Testing Data",
    category: "learning",
    eyebrow: "JavaScript · Testing",
    description: "Exercises in organizing data, testing behaviour and writing clearer, more maintainable JavaScript.",
    accent: "testing",
    links: [{ label: "View code", url: "https://github.com/shafiekwalker7861/Module-Structuring-and-Testing-Data" }],
  },
];

const filters = [
  { id: "live", label: "Live websites", count: "06" },
  { id: "webflow", label: "Webflow concepts", count: "03" },
  { id: "learning", label: "Development work", count: "03" },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("live");
  const visibleProjects = projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="section-heading section-heading-row">
        <div>
          <p className="section-label">02 / Selected work</p>
          <h2>Different briefs.<br />Different visual languages.</h2>
        </div>
        <p className="section-intro">
          Live client work, self-initiated Webflow-ready concepts and hands-on development projects.
        </p>
      </div>

      <div className="project-filters" role="tablist" aria-label="Project categories">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter.id}
            className={activeFilter === filter.id ? "active" : ""}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label} <span>{filter.count}</span>
          </button>
        ))}
      </div>

      <motion.div className="project-grid" layout>
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.article
              className={`project-card project-${project.accent} ${project.featured ? "project-featured" : ""}`}
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="project-visual">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} website preview`} loading="lazy" />
                ) : (
                  <div className="generated-preview" aria-hidden="true">
                    <span>{project.title}</span>
                    <i></i><i></i><i></i>
                  </div>
                )}
                <span className="project-index">0{index + 1}</span>
              </div>

              <div className="project-content">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} <span>↗</span>
                    </a>
                  ))}
                  {project.status && <span className="project-status">{project.status}</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {activeFilter === "webflow" && (
        <p className="concept-note">
          These self-initiated, Webflow-ready portfolio builds demonstrate sector-specific design and conversion thinking.
        </p>
      )}

      <a className="section-handoff section-handoff-dark" href="#skills">
        How I build <span>↓</span>
      </a>
    </section>
  );
}

export default Projects;
