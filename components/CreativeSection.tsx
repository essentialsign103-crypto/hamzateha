'use client';

import React from 'react';
import { Palette, Film } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export function CreativeSection() {
  return (
    <section className="py-16 bg-[#efece6]/30 text-[#0f1012] border-b border-black/8">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-px bg-[#0f1012]/30" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#0f1012]/50">
                07 / Auxiliary Capabilities
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0f1012]">
              Creative &amp; Visual Design Disciplines
            </h3>
            <p className="text-xs sm:text-sm text-[#0f1012]/70 leading-relaxed">
              Complementary design capabilities that support full-stack engineering. While software architecture is my primary focus, I leverage UI prototyping and video editing to deliver cohesive digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-1/2">
            {PORTFOLIO_DATA.creativeCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#f7f6f2] border border-black/8 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-[#0f1012]">
                    {idx === 0 ? <Palette className="w-4 h-4 text-purple-600" /> : <Film className="w-4 h-4 text-rose-600" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0f1012]/50 px-2 py-0.5 rounded bg-black/5">
                    {item.tool}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#0f1012]">{item.title}</h4>
                <p className="text-xs text-[#0f1012]/65 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
