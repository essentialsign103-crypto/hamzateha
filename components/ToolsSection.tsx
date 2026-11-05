'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { TechIcon } from './TechIcons';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ToolsSection() {
  // Single-open accordion state: index 0 (Web & Frontend Development) is expanded by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleCategory = (index: number) => {
    // If clicking the currently open category, collapse it; otherwise open the new category
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="tools"
      aria-label="Tools and technologies"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-24 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Tools & Technologies"
          subtitle="Interactive stack of technologies, frameworks, and creative software I use across projects"
        />

        {/* Interactive Accordion Stack */}
        <div className="space-y-4 sm:space-y-5" role="tablist" aria-label="Technology Categories Accordion">
          {PORTFOLIO_DATA.toolCategories.map((category, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={category.title}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-black/20 bg-white/80 shadow-sm dark:border-white/20 dark:bg-[#15171c]/90'
                    : 'border-black/10 bg-white/40 hover:bg-white/60 hover:border-black/15 dark:border-white/10 dark:bg-[#15171c]/40 dark:hover:bg-[#15171c]/70 dark:hover:border-white/15'
                }`}
              >
                {/* Category Header Button */}
                <button
                  type="button"
                  id={`tools-header-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`tools-panel-${idx}`}
                  onClick={() => toggleCategory(idx)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 text-left select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-2xl cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="font-mono text-xs text-neutral-400 font-medium">
                      0{idx + 1}
                    </span>
                    <h3 className="font-Display text-base sm:text-lg font-semibold text-black dark:text-white tracking-wide truncate transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[0.7rem] sm:text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-black/5 text-neutral-600 border border-black/5 dark:bg-white/5 dark:text-neutral-300 dark:border-white/10 transition-colors">
                      {category.tools.length} {category.tools.length === 1 ? 'tool' : 'tools'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-xs font-mono text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                      {isOpen ? 'Collapse' : 'Expand'}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? 'bg-black text-white border-black dark:bg-white dark:text-[#0e1013] dark:border-white rotate-180'
                          : 'bg-black/[0.04] text-neutral-500 border-black/10 group-hover:border-black/25 group-hover:bg-white group-hover:text-black dark:bg-white/[0.06] dark:text-neutral-400 dark:border-white/10 dark:group-hover:border-white/25 dark:group-hover:bg-white/10 dark:group-hover:text-white rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </button>

                {/* Expandable Panel with Smooth CSS Grid Animation */}
                <div
                  id={`tools-panel-${idx}`}
                  role="region"
                  aria-labelledby={`tools-header-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-black/5 dark:border-white/5">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3 list-none p-0 m-0">
                        {category.tools.map((tool) => (
                          <li key={tool.name}>
                            <div className="group/tool flex flex-col items-center text-center gap-2 sm:gap-2.5 border border-black/10 rounded-xl px-2.5 py-3.5 sm:py-4 bg-white/90 hover:bg-white hover:border-black/25 hover:shadow-sm dark:border-white/10 dark:bg-[#1a1d24] dark:hover:bg-[#222630] dark:hover:border-white/25 transition-all duration-200">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center grayscale opacity-80 group-hover/tool:grayscale-0 group-hover/tool:opacity-100 transition-[filter,opacity] duration-300">
                                <TechIcon name={tool.icon} size={28} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                              </div>
                              <span className="text-[0.68rem] sm:text-xs text-neutral-700 dark:text-neutral-300 font-sans-body leading-tight font-medium transition-colors">
                                {tool.name}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
