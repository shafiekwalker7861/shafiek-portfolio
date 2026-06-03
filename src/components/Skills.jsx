function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Git",
    "GitHub",
    "Responsive Design",
    "Accessibility",
    "Problem Solving"
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;