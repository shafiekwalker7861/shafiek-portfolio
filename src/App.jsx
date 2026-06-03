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



function App() {
  return (
    <div className="app">
      <VideoBackground />
      
      <MouseGlow />
      <Navbar />

      <main className="layout">
  <Hero />
  <div>
    
    <MusicPlayer />
    <Terminal />
    
  </div>
</main>
      <About />
      <Projects />
      <Skills />
      
    </div>
  );
}

export default App;