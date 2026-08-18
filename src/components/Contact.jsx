function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">04 / Contact</p>
      <div className="contact-grid">
        <div>
          <h2>Have a site to build,<br />improve or maintain?</h2>
          <p>
            I’m available for WordPress and WooCommerce builds, Webflow execution,
            software development and design-led web projects — locally in Cape Town or remotely.
          </p>
        </div>

        <div className="contact-actions">
          <a className="contact-primary" href="mailto:shafiekwalker1@gmail.com">
            <span>Email me</span>
            <strong>shafiekwalker1@gmail.com</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="https://github.com/shafiekwalker7861" target="_blank" rel="noopener noreferrer">
            GitHub <span>↗</span>
          </a>
          <a href="https://www.codewars.com/users/Shafiek_Walker" target="_blank" rel="noopener noreferrer">
            Codewars <span>↗</span>
          </a>
          <a href="https://capetown3drenders.co.za/" target="_blank" rel="noopener noreferrer">
            CT3DR <span>↗</span>
          </a>
          <a href="https://theinteriorcompany.co.za/" target="_blank" rel="noopener noreferrer">
            Design portfolio <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
