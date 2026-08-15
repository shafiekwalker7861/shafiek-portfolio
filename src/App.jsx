import "./App.css";
import VideoBackground from "./components/VideoBackground";
//import MatrixRain from "./components/MatrixRain";
import MusicPlayer from "./components/MusicPlayer";
//import Scene3D from "./components/Scene3D";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import Projects from "./components/Projects";
import MouseGlow from "./components/MouseGlow";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <VideoBackground />
      
      <MouseGlow />
      <Navbar />

      <main className="layout">
        <Hero />
        <div className="terminal-wrap">
          <Terminal />
        </div>
      </main>

      <aside className="signal-strip" aria-label="Portfolio highlights">
        <span>04 live web builds</span>
        <span>03 Webflow-ready concepts</span>
        <span>React + JavaScript</span>
        <span>Responsive + SEO aware</span>
      </aside>

      <About />
      <Projects />
      <Skills />
      <Contact />
      <MusicPlayer />

      <footer className="footer">
        <p>Designed and developed by Shafiek Walker.</p>
        <a href="#top" aria-label="Back to the top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
