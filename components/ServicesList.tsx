'use client';

import React from 'react';
import { ArrowRight, Code2, Film, Palette, Database } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ServicesList() {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code2 className="w-6 h-6 text-black dark:text-white transition-colors" />;
      case 'video':
        return <Film className="w-6 h-6 text-black dark:text-white transition-colors" />;
      case 'palette':
        return <Palette className="w-6 h-6 text-black dark:text-white transition-colors" />;
      case 'server':
        return <Database className="w-6 h-6 text-black dark:text-white transition-colors" />;
      default:
        return <Code2 className="w-6 h-6 text-black dark:text-white transition-colors" />;
    }
  };

  return (
    <section
      id="services"
      aria-label="Professional Services"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-24 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="What I Do"
          subtitle="Things I've done enough times to do exceptionally well"
        />

        {/* 2-Column Grid of Glass Cards matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 md:gap-5">
          {PORTFOLIO_DATA.clientServices.map((service) => (
            <a
              key={service.id}
              href="#contact"
              className="glass-card group rounded-2xl p-5 sm:p-6 flex items-start sm:items-center gap-4 sm:gap-5 no-underline transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Icon Container matching reference */}
              <div className="w-12 h-12 sm:w-16 sm:h-14 md:w-16 md:h-16 rounded-xl overflow-hidden shrink-0 flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:scale-105 transition-all duration-300">
                {getServiceIcon(service.icon)}
              </div>

              {/* Service Title & Description */}
              <div className="flex-1 min-w-0">
                <h3 className="font-Display text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-white leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-1 text-[0.72rem] sm:text-xs text-neutral-600 dark:text-neutral-300 font-sans-body leading-relaxed line-clamp-2 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Glass Arrow */}
              <span
                className="hidden sm:inline-flex shrink-0 w-8 h-8 rounded-full border border-black/10 dark:border-white/10 items-center justify-center text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white group-hover:border-black dark:group-hover:border-white group-hover:translate-x-0.5 transition-all duration-200"
                aria-hidden="true"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
