import { useState } from "react";
import { motion } from "framer-motion";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to ShafiekOS v1.0",
    "Type 'help' to get started.",
  ]);

  const commands = {
    help: ["Available commands:", "about", "skills", "projects", "webflow", "contact", "clear"],
    about: [
      "Cape Town–based software developer and technical designer.",
      "I build responsive, purposeful digital experiences.",
    ],
    skills: ["Webflow", "HTML + CSS", "JavaScript", "React", "Git + GitHub", "On-page SEO"],
    projects: ["CT3DR", "The Interior Company", "The Fix Hub", "Cape Town Designer", "TV Show Project"],
    webflow: ["3 conversion-led concepts:", "Evergreen Lawn Care", "Northline Landscapes", "Harbor Home Services"],
    contact: [
      "Email: shafiekwalker1@gmail.com",
      "GitHub: shafiekwalker7861",
      "Codewars: Shafiek_Walker",
    ],
  };

  function handleCommand(e) {
    e.preventDefault();

    const cmd = input.toLowerCase().trim();

    if (cmd === "clear") {
      setOutput([]);
      setInput("");
      return;
    }

    if (commands[cmd]) {
      setOutput((prev) => [...prev, `> ${cmd}`, ...commands[cmd]]);
    } else {
      setOutput((prev) => [...prev, `> ${cmd}`, "Command not found"]);
    }

    setInput("");
  }

  return (
    <motion.section
      className="terminal"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="terminal-header">terminal</div>

      <div className="terminal-body">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        <form onSubmit={handleCommand}>
          <span className="prompt">
  shafiek@portfolio:~$
</span>
          <input
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Terminal command"
            autoComplete="off"
          />
        </form>
      </div>
    </motion.section>
  );
}

export default Terminal;
