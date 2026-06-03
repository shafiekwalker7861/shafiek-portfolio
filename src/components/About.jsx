import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <p className="section-label">About Me</p>

      <h2>From design and technical detailing to software development.</h2>

      <p>
        I’m Shafiek Walker, a designer transitioning into tech. My background is
        in CAD, technical drawings, 3D visualisation, shopfitting, and web design.
        I’m now building my skills in JavaScript, React, Python, Git and GitHub.
      </p>

      <div className="timeline">
        <div>Designer</div>
        <span>↓</span>
        <div>Technical Draughtsman</div>
        <span>↓</span>
        <div>Web Development</div>
        <span>↓</span>
        <div>Code Your Future</div>
        <span>↓</span>
        <div>Junior Developer Goal</div>
      </div>
    </motion.section>
  );
}

export default About;