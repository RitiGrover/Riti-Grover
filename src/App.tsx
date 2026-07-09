import { motion } from 'framer-motion';

// Layout
import SmoothScroller from './components/layout/SmoothScroller';
import Cursor from './components/layout/Cursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Leadership from './components/sections/Leadership';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <SmoothScroller>
      {/* ── Background layers ── */}
      <div className="paper-texture" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />

      {/* ── Custom cursor (desktop only) ── */}
      <Cursor />

      {/* ── Fixed navigation ── */}
      <Navbar />

      {/* ── Page entry animation ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* ── Main content ── */}
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Leadership />
          <Skills />
          <Contact />
        </main>

        {/* ── Footer ── */}
        <Footer />
      </motion.div>
    </SmoothScroller>
  );
}
