import { useState } from "react";
import { motion } from "framer-motion";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to ShafiekOS v1.0",
    "Type 'help' to get started.",
  ]);

  const commands = {
    help: ["Available commands:", "about", "skills", "projects", "contact", "clear"],
    about: [
      "Designer transitioning into software development.",
      "Currently learning React, JavaScript and Python.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Python", "Git", "GitHub", "React"],
    projects: ["Python Learning App", "Robotics Club Website", "Code Your Future Projects"],
    contact: ["Email: westerncapetowndesigner@gmail.com", "GitHub: shafiekwalker7861"],
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
            autoFocus
          />
        </form>
      </div>
    </motion.section>
  );
}

export default Terminal;