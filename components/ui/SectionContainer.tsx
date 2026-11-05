import React from 'react';

interface SectionContainerProps {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

export function SectionContainer({
  id,
  className = '',
  innerClassName = 'max-w-5xl mx-auto',
  children,
  'aria-label': ariaLabel,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-24 border-b border-black/[0.06] ${className}`}
    >
      <div className={innerClassName}>
        {children}
      </div>
    </section>
  );
}

