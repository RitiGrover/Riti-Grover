import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { about, education } from '../../data/portfolio';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-base">
      <div className="container-main">
        {/* Section counter */}
        <p className="label-mono" style={{ marginBottom: 60 }}>002 / ABOUT</p>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left: Giant ABOUT heading */}
          <div>
            <div className="text-reveal-wrapper" style={{ overflow: 'hidden' }}>
              <motion.h2
                className="heading-section"
                style={{ color: 'var(--text-primary)', lineHeight: 0.88 }}
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              >
                ABOUT
              </motion.h2>
            </div>
          </div>

          {/* Right: Professional summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {about.summary.split('\n\n').map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-primary)',
                  marginBottom: i < about.summary.split('\n\n').length - 1 ? 28 : 0,
                  fontWeight: 400,
                }}
              >
                {para}
              </p>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 28 }}
            >
              <div>
                <p className="label-mono" style={{ marginBottom: 16 }}>EDUCATION</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {education.map((edu, idx) => (
                    <div key={idx}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 400, lineHeight: 1.5 }}>
                        {edu.institution}
                      </p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 300, marginTop: 4 }}>
                        {edu.degree}
                      </p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 300, marginTop: 2 }}>
                        {edu.location}
                      </p>
                      <p className="label-mono" style={{ fontSize: '0.65rem', marginTop: 8 }}>
                        {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
