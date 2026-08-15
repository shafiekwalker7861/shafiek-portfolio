import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      id="top"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="status"><span aria-hidden="true">●</span> Cape Town · Available remotely</p>

      <h1>
        I build digital experiences <span>that work.</span>
      </h1>

      <h2>Shafiek Walker — web developer, Webflow builder and technical designer.</h2>

      <p className="intro">
        I turn clear ideas into responsive websites with strong visual hierarchy,
        clean builds and practical user journeys — from custom front-end work to
        conversion-focused Webflow execution.
      </p>

      <div className="hero-actions">
        <a className="button button-primary" href="#projects">Explore my work ↓</a>
        <a
          className="button button-ghost"
          href="https://github.com/shafiekwalker7861"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;
