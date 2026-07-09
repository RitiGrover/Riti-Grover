import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Cursor from './components/layout/Cursor';

export default function WriteupsApp() {
  useEffect(() => {
    document.documentElement.classList.add('lenis');
  }, []);

  return (
    <>
      <Cursor />
      
      {/* Background textures */}
      <div className="paper-texture" />
      <div className="grid-bg" />

      <Navbar />

      <main style={{ minHeight: '100vh', paddingTop: 160, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
        <div className="container-main">
          <p className="label-mono" style={{ marginBottom: 16 }}>SECURITY RESEARCH</p>
          <div className="text-reveal-wrapper" style={{ overflow: 'hidden', marginBottom: 80 }}>
            <h2
              className="heading-section"
              style={{ color: 'var(--text-primary)' }}
            >
              WRITEUPS
            </h2>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 64 }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'var(--text-primary)',
              fontWeight: 400,
            }}>
              CTF writeups and security research will be published here soon.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
