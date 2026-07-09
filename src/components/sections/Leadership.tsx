import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { leadership } from '../../data/portfolio';

export default function Leadership() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="leadership" className="section-base">
      <div className="container-main">
        <p className="label-mono" style={{ marginBottom: 16 }}>006 / EXTRA CURRICULARS</p>
        <div className="text-reveal-wrapper" style={{ overflow: 'hidden', marginBottom: 80 }}>
          <motion.h2
            className="heading-section"
            style={{ color: 'var(--text-primary)' }}
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            EXTRA CURRICULARS
          </motion.h2>
        </div>

        <div ref={ref}>
          {leadership.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '60px',
                paddingTop: 32,
                paddingBottom: 32,
                borderBottom: '1px solid var(--border-subtle)',
                alignItems: 'start',
              }}
              className="flex-col md:grid"
            >
              {/* Left: role + org */}
              <div>
                <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                marginBottom: 6,
              }}>
                  {item.role}
                </h3>
                <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--accent)',
                fontWeight: 400,
                marginBottom: 4,
              }}>
                  {item.organization}
                </p>
                <p className="label-mono" style={{ fontSize: '0.6rem' }}>{item.period}</p>
              </div>

              {/* Right: description */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
                fontWeight: 400,
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
