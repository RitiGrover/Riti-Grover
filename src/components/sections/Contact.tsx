import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personal } from '../../data/portfolio';

const contactItems = [
  {
    label: 'EMAIL',
    value: personal.email,
    href: `mailto:${personal.email}`,
    display: personal.email,
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/arohmaurya',
    href: personal.linkedin,
    display: 'LINKEDIN ↗',
  },
  {
    label: 'GITHUB',
    value: 'github.com/aroh3006',
    href: personal.github,
    display: 'GITHUB ↗',
  },
  {
    label: 'RESUME',
    value: 'Download PDF',
    href: personal.resume,
    display: 'RESUME ↓',
    download: true,
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="contact" className="section-base">
      <div className="container-main">
        <p className="label-mono" style={{ marginBottom: 16 }}>007 / CONTACT</p>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left: large heading */}
          <div>
            <div className="text-reveal-wrapper" style={{ overflow: 'hidden' }}>
              <motion.h2
                className="heading-section"
                style={{ color: 'var(--text-primary)', fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              >
                GET IN
              </motion.h2>
            </div>
            <div className="text-reveal-wrapper" style={{ overflow: 'hidden' }}>
              <motion.h2
                className="heading-section"
                style={{ color: 'var(--text-primary)', fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
              >
                TOUCH
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--accent)',
                fontWeight: 400,
                marginTop: 32,
                maxWidth: 340,
              }}
            >
              Open to conversations about cybersecurity, interesting problems, and opportunities worth exploring.
            </motion.p>
          </div>

          {/* Right: contact links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ paddingTop: 8 }}
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: 24,
                  paddingTop: 24,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div>
                  <p className="label-mono" style={{ marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 400 }}>
                    {item.value}
                  </p>
                </div>
                <a
                  href={item.href}
                  {...(item.download ? { download: true } : {})}
                  {...(!item.download ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="btn-outline"
                  style={{ cursor: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
                  data-cursor-hover
                >
                  {item.display}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
