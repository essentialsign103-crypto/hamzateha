'use client';

import React, { useState } from 'react';
import { Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, TechnologyItem } from '@/data/portfolioData';
import { TechIcon } from './TechIcons';

export function TechEcosystem() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tooling'>('all');

  const categories = [
    { key: 'all', label: 'All Technologies' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'database', label: 'Databases & Storage' },
    { key: 'tooling', label: 'Tools & Workflow' },
  ] as const;

  const filteredTech =
    activeCategory === 'all'
      ? PORTFOLIO_DATA.technologies
      : PORTFOLIO_DATA.technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section
      id="stack"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#efece6]/50 text-[#0f1012] border-b border-black/8"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/8 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-[#0f1012]/30" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#0f1012]/50">
                03 / Engineering Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-[-0.035em] text-[#0f1012] leading-[1]">
              Core Ecosystem &amp; <br />
              <span className="italic font-serif font-normal text-[#0f1012]/40 lowercase">
                tooling discipline.
              </span>
            </h2>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all shrink-0 ${
                activeCategory === cat.key
                  ? 'bg-[#0f1012] text-white shadow-sm'
                  : 'bg-white/80 border border-black/8 text-[#0f1012]/60 hover:text-[#0f1012] hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-white border border-black/8 shadow-sm hover:shadow-md hover:border-black/20 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center p-2 shrink-0">
                    <TechIcon name={item.icon} size={24} className="w-6 h-6 object-contain" />
                  </div>

                  <span
                    className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      item.experienceLevel === 'Comfortable'
                        ? 'bg-emerald-500/10 text-emerald-800 border-emerald-500/20'
                        : 'bg-blue-500/10 text-blue-800 border-blue-500/20'
                    }`}
                  >
                    {item.experienceLevel}
                  </span>
                </div>

                <h3 className="text-base font-black uppercase text-[#0f1012] tracking-tight">
                  {item.name}
                </h3>
                <p className="text-xs text-[#0f1012]/65 mt-1 leading-relaxed">
                  {item.highlight}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-[#0f1012]/40 uppercase tracking-widest">
                <span>Domain: {item.category}</span>
                <span className="text-emerald-700 font-bold">• Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
