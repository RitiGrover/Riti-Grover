import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolio';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projects.find((p) => p.id === projectId);

  return (
    <AnimatePresence>
      {projectId && project && (
        <>
          {/* Overlay */}
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="modal-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            data-lenis-prevent="true"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'none',
                border: '1px solid var(--border-subtle)',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-primary)',
                transition: 'background 0.2s ease',
              }}
              aria-label="Close project details"
              data-cursor-hover
            >
              ×
            </button>

            {/* Content */}
            <div style={{ paddingTop: 40 }}>
              <p className="label-mono" style={{ marginBottom: 12 }}>
                {project.category} / PROJECT
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                lineHeight: 0.9,
                marginBottom: 12,
              }}>
                {project.name}
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--accent)', marginBottom: 40 }}>
                {project.tagline}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border-subtle)', marginBottom: 40 }} />

              {/* Problem */}
              <div style={{ marginBottom: 36 }}>
                <p className="label-mono" style={{ marginBottom: 12 }}>// PROBLEM</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 400, color: 'var(--text-primary)' }}>
                  {project.problem}
                </p>
              </div>

              {/* Approach */}
              <div style={{ marginBottom: 36 }}>
                <p className="label-mono" style={{ marginBottom: 12 }}>// APPROACH</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 400, color: 'var(--text-primary)' }}>
                  {project.approach}
                </p>
              </div>

              {/* Technologies */}
              <div style={{ marginBottom: 36 }}>
                <p className="label-mono" style={{ marginBottom: 12 }}>// TECHNOLOGIES</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div style={{ marginBottom: 36 }}>
                <p className="label-mono" style={{ marginBottom: 12 }}>// KEY FEATURES</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {project.features.map((f, i) => (
                    <li key={i} style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      color: 'var(--text-primary)',
                      fontWeight: 300,
                      paddingLeft: 16,
                      borderLeft: '1px solid var(--border-subtle)',
                      marginBottom: 8,
                    }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div style={{ marginBottom: 48 }}>
                <p className="label-mono" style={{ marginBottom: 12 }}>// CHALLENGES</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 400, color: 'var(--text-primary)' }}>
                  {project.challenges}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border-subtle)', marginBottom: 32 }} />

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  style={{ cursor: 'none' }}
                  data-cursor-hover
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path fillRule="evenodd" d="M7 0C3.13 0 0 3.13 0 7c0 3.09 2.01 5.72 4.8 6.65.35.06.48-.15.48-.34v-1.18c-1.96.43-2.37-.94-2.37-.94-.32-.81-.78-1.03-.78-1.03-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.08 1.65.77 2.05.59.06-.46.24-.77.44-.95-1.57-.18-3.22-.78-3.22-3.49 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.93.72A6.7 6.7 0 017 3.41c.6 0 1.2.08 1.76.23 1.34-.91 1.93-.72 1.93-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.89 0 2.71-1.65 3.31-3.23 3.48.25.22.48.65.48 1.31v1.94c0 .19.12.41.48.34A7.001 7.001 0 0014 7c0-3.87-3.13-7-7-7z"/>
                  </svg>
                  VIEW ON GITHUB
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ cursor: 'none' }}
                    data-cursor-hover
                  >
                    LIVE DEMO ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
