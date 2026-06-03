import { motion } from "framer-motion";

const projects = [
  {
    title: "Python Learning App",
    stack: "Python",
    description: "A beginner-friendly app that teaches students basic Python concepts.",
    github: "#",
    demo: "#",
  },
  {
    title: "Robotics Club Website",
    stack: "HTML • CSS • JavaScript",
    description: "A website for a student robotics and coding club.",
    github: "#",
    demo: "#",
  },
  {
    title: "CYF Coursework",
    stack: "GitHub • HTML • CSS • JS",
    description: "Learning projects from Code Your Future.",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
          >
            <p className="project-stack">{project.stack}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
  <a href={project.github}>GitHub</a>
  <a href={project.demo}>Live Demo</a>
</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;