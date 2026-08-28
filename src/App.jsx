import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AIHireX from "./pages/Aihirex";
import BugTracking from "./pages/BugTracking";

function Home() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/aihirex" element={<AIHireX />} />
        <Route path="/projects/bug-tracking" element={<BugTracking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
