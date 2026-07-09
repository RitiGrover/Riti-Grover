import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolio';

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const categories = Object.keys(skills) as (keyof typeof skills)[];

  return (
    <section id="skills" className="section-base" style={{ paddingBottom: 60 }}>
      <div className="container-main">
        <p className="label-mono" style={{ marginBottom: 16 }}>SKILLS</p>
        <div className="text-reveal-wrapper" style={{ overflow: 'hidden', marginBottom: 80 }}>
          <motion.h2
            className="heading-section"
            style={{ color: 'var(--text-primary)' }}
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            STACK
          </motion.h2>
        </div>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '60px',
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {category}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills[category].map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIdx * 0.15 + skillIdx * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
