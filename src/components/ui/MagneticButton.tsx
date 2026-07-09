import React, { useRef, useCallback } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  as?: 'button' | 'a';
  type?: 'button' | 'submit';
  'aria-label'?: string;
}

export default function MagneticButton({
  children,
  strength = 0.35,
  className = '',
  style = {},
  onClick,
  href,
  target,
  rel,
  download,
  as: Tag = 'button',
  type = 'button',
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current || window.innerWidth <= 768) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      if (ref.current) {
        ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      }
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0, 0)';
    }
  }, []);

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `magnetic-wrap ${className}`,
    style: { transition: 'transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)', ...style },
    'aria-label': ariaLabel,
  };

  if (Tag === 'a') {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        download={download}
        {...commonProps}
      >
        <span ref={innerRef}>{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      type={type}
      {...commonProps}
      style={{ ...commonProps.style, background: 'none', border: 'none', padding: 0, cursor: 'none' }}
    >
      <span ref={innerRef}>{children}</span>
    </button>
  );
}
