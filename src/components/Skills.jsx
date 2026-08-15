function Skills() {
  const groups = [
    {
      number: "01",
      title: "Frontend",
      skills: ["HTML5", "CSS", "JavaScript", "React", "Responsive UI", "Accessibility"],
    },
    {
      number: "02",
      title: "Webflow & search",
      skills: ["Webflow CMS", "Interactions", "On-page SEO", "Semantic structure", "Core Web Vitals", "Local landing pages"],
    },
    {
      number: "03",
      title: "Creative & technical",
      skills: ["UI/UX", "Figma", "CAD", "3D visualisation", "Technical detailing", "Adobe tools"],
    },
    {
      number: "04",
      title: "Workflow & quality",
      skills: ["Git", "GitHub", "Cross-browser QA", "Content updates", "Clear handoff", "Problem solving"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-heading section-heading-row">
        <div>
          <p className="section-label">03 / Capabilities</p>
          <h2>Practical skills for<br />sites that have a job to do.</h2>
        </div>
        <p className="section-intro">From the first wireframe to responsive QA and page-level SEO setup.</p>
      </div>

      <div className="skills-grid">
        {groups.map((group) => (
          <article key={group.title} className="skill-card">
            <span className="skill-number">{group.number}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <a className="section-handoff" href="#contact">
        Start a conversation <span>↓</span>
      </a>
    </section>
  );
}

export default Skills;
