import React from 'react';
import { personal } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer-base" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="label-mono" style={{ color: 'var(--accent)' }}>
          © 2026
        </p>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a
            href={`mailto:${personal.email}`}
            className="label-mono"
            style={{ color: 'var(--accent)', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          >
            {personal.email}
          </a>
          <span style={{ width: 1, height: 12, background: 'var(--border-subtle)', display: 'inline-block' }} />
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="label-mono"
            style={{ color: 'var(--accent)', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          >
            LinkedIn
          </a>
          <span style={{ width: 1, height: 12, background: 'var(--border-subtle)', display: 'inline-block' }} />
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="label-mono"
            style={{ color: 'var(--accent)', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
