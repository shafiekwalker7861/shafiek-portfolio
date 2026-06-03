import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="status">● Available for Junior Developer Opportunities</p>

      <h1>
        Hi, I'm <span>Shafiek Walker</span>
      </h1>

      <h2>
  Technical Designer • Frontend Developer • Problem Solver
</h2>

      <p className="intro">
        I'm transitioning from a career in design and technical detailing into
        software development. Currently learning JavaScript, React, Python and
        modern web development.
      </p>

      <button className="hero-btn">View Projects</button>
    </motion.section>
  );
}

export default Hero;