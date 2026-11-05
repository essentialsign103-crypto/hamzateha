'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-24 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Experience"
          subtitle="Real projects, real problems, real digital solutions built"
        />

        {/* Timeline Matching Reference Design */}
        <ol className="relative list-none p-0 m-0">
          {/* Vertical Timeline Rule */}
          <span
            aria-hidden="true"
            className="absolute left-[7.25rem] sm:left-[8.75rem] top-3 bottom-3 w-px bg-black/15 dark:bg-white/15 pointer-events-none transition-colors"
          />

          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <li
              key={idx}
              className="relative grid grid-cols-[7.25rem_1fr] sm:grid-cols-[8.75rem_1fr] gap-x-5 sm:gap-x-8 pb-12 last:pb-0 group"
            >
              {/* Date Pill */}
              <time
                dateTime={exp.period}
                className="relative z-10 mt-0.5 justify-self-start self-start whitespace-nowrap rounded-full border border-black/15 dark:border-white/15 bg-[#f7f6f2] dark:bg-[#16181d] px-2.5 sm:px-3 py-1 text-[0.65rem] sm:text-xs font-mono font-medium text-black dark:text-neutral-200 shadow-sm transition-colors"
              >
                {exp.period}
              </time>

              {/* Experience Details */}
              <div className="min-w-0 pt-0.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-Display text-lg sm:text-xl font-bold text-black dark:text-white leading-snug transition-colors">
                    {exp.company}
                  </h3>
                </div>

                <p className="mt-0.5 text-sm sm:text-base font-medium text-black dark:text-neutral-200 transition-colors">
                  {exp.role}
                </p>

                <p className="mt-2 text-sm sm:text-[0.95rem] text-neutral-600 dark:text-neutral-300 font-sans-body leading-relaxed transition-colors">
                  {exp.description}
                </p>

                {exp.linkText && (
                  <a
                    href={exp.linkUrl || '#contact'}
                    className="mt-3.5 inline-flex text-xs font-medium text-neutral-500 dark:text-neutral-400 border-b border-neutral-300 dark:border-neutral-700 pb-0.5 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors"
                  >
                    {exp.linkText}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

