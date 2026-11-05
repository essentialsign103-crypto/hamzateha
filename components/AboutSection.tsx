'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Hamza Teha"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-24 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Display Headline matching reference */}
        <h2 className="font-Display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 leading-tight px-1 tracking-tight transition-colors">
          {PORTFOLIO_DATA.aboutHeadline}
        </h2>

        {/* Narrative Paragraphs */}
        <p className="text-neutral-600 dark:text-neutral-300 font-sans-body text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-4 transition-colors">
          {PORTFOLIO_DATA.aboutParagraphs[0]}
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 font-sans-body text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12 transition-colors">
          {PORTFOLIO_DATA.aboutParagraphs[1]}
        </p>

        {/* Signature 3-Card Glass Stats Grid from reference */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg mx-auto">
          {PORTFOLIO_DATA.aboutStats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl px-3 py-5 text-center transition-all duration-300 hover:-translate-y-0.5"
            >
              <h3 className="font-Display text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight transition-colors">
                {stat.value}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 font-sans-body text-[0.68rem] sm:text-xs mt-1.5 leading-tight font-medium transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
