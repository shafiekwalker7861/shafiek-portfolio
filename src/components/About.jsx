import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <div className="section-heading">
        <p className="section-label">01 / About</p>
        <h2>Built on design thinking.<br />Moving forward with code.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I’m a Cape Town–based software developer and designer with a background in CAD,
            technical detailing, 3D visualisation and web design. That mix taught me
            to balance precision with presentation — and to keep the end user in view.
          </p>
          <p>
            Today I build and maintain responsive web experiences using Webflow,
            JavaScript and React. I care about the details that make a site useful:
            clear content, purposeful interactions, fast pages and SEO-ready structure.
          </p>
        </div>

        <div className="about-note">
          <span>Current focus</span>
          <strong>Webflow execution for service businesses</strong>
          <p>Responsive builds · CMS · on-page SEO · quality control</p>
        </div>
      </div>

      <div className="timeline" aria-label="Career journey">
        <div><small>Foundation</small>Design + draughting</div>
        <span aria-hidden="true">→</span>
        <div><small>Expansion</small>3D + web design</div>
        <span aria-hidden="true">→</span>
        <div><small>Now</small>Frontend + Webflow</div>
      </div>

      <a className="section-handoff" href="#projects">
        Selected work <span>↓</span>
      </a>
    </motion.section>
  );
}

export default About;
