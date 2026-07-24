import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="section-base">
      <div className="container-main">
        <p className="label-mono" style={{ marginBottom: 16 }}>003 / EXPERIENCE</p>
        <div className="text-reveal-wrapper" style={{ overflow: 'hidden', marginBottom: 80 }}>
          <motion.h2
            className="heading-section"
            style={{ color: 'var(--text-primary)' }}
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            WORK
          </motion.h2>
        </div>

        <div ref={ref} style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ position: 'relative', marginBottom: 60 }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" style={{ background: expanded === exp.id ? 'var(--text-primary)' : 'var(--bg-primary)' }} />

              {/* Experience card */}
              <motion.div
                layout
                onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                style={{
                  cursor: 'none',
                  borderLeft: expanded === exp.id ? '2px solid var(--accent)' : '2px solid transparent',
                  paddingLeft: 24,
                  transition: 'border-color 0.3s ease',
                }}
                data-cursor-hover
              >
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <p className="label-mono" style={{ marginBottom: 6 }}>{exp.period}</p>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                      letterSpacing: '-0.015em',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      lineHeight: 1.15,
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--accent)',
                      marginTop: 4,
                      fontWeight: 400,
                    }}>
                      {exp.company}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: expanded === exp.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.2rem',
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginTop: 4,
                    }}
                  >
                    +
                  </motion.span>
                </div>

                {/* Expandable content */}
                <AnimatePresence>
                  {expanded === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        marginTop: 20,
                        marginBottom: 20,
                      }}>
                        {exp.description.split('\n').filter(Boolean).map((line, idx) => (
                          <li key={idx} style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1rem',
                            lineHeight: 1.75,
                            color: 'var(--text-primary)',
                            fontWeight: 400,
                            paddingLeft: 20,
                            textIndent: -20,
                            marginBottom: 8,
                          }}>
                            {line.trim()}
                          </li>
                        ))}
                      </ul>

                      {exp.technologies.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              style={{
                                padding: '4px 12px',
                                border: '1px solid var(--border-subtle)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.62rem',
                                letterSpacing: '0.08em',
                                color: 'var(--accent)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
