function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#top" aria-label="Shafiek Walker, home">
        &lt;SW/&gt;
      </a>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a className="nav-cta" href="mailto:shafiekwalker1@gmail.com">Let&apos;s talk ↗</a>
    </nav>
  );
}

export default Navbar;
