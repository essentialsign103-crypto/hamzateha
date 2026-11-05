import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className = '',
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-Display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight mb-3 sm:mb-4 transition-colors">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-500 dark:text-neutral-400 font-sans-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed transition-colors">
          {subtitle}
        </p>
      )}
    </div>
  );
}

