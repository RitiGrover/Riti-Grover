import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3';
}

export default function AnimatedText({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: AnimatedTextProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const innerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.style.transitionDelay = `${delay}ms`;
      if (inView) {
        innerRef.current.classList.add('revealed');
      }
    }
  }, [inView, delay]);

  return (
    <div ref={ref} className={`text-reveal-wrapper ${className}`}>
      <Tag
        ref={innerRef as React.RefObject<any>}
        className="text-reveal-inner"
      >
        {children}
      </Tag>
    </div>
  );
}

// Staggered text reveal for multiple lines
interface StaggeredTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  staggerMs?: number;
}

export function StaggeredText({ lines, className = '', lineClassName = '', staggerMs = 80 }: StaggeredTextProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="text-reveal-wrapper" style={{ overflow: 'hidden' }}>
          <div
            className={`text-reveal-inner ${lineClassName}`}
            style={{
              transitionDelay: `${i * staggerMs}ms`,
              ...(inView ? { transform: 'translateY(0)' } : {}),
            }}
          >
            {line}
          </div>
        </div>
      ))}
    </div>
  );
}
