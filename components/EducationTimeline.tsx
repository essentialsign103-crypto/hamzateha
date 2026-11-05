'use client';

import React from 'react';
import { GraduationCap, Code2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export function EducationTimeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#f7f6f2] text-[#0f1012] border-b border-black/8 relative"
    >
      <span id="journey" className="sr-only" />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-black/8 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-[#0f1012]/30" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#0f1012]/50">
                06 / Education &amp; Milestones
              </span>
            </div>
           <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-[-0.035em] text-[#0f1012] leading-[1]">
            Academic Grounding &amp; <br />
             <span className="normal-case italic font-medium text-[#0f1012]/40">
            Independent Engineering.
             </span>
            </h2>
             </div>
            </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.education.map((milestone, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl border border-black/8 bg-white/70 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-black/8 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-[#0f1012]">
                      {milestone.type === 'university' ? (
                        <GraduationCap className="w-5 h-5 text-amber-600" />
                      ) : (
                        <Code2 className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#0f1012]/50 font-bold block">
                        {milestone.period}
                      </span>
                      <span className="text-xs font-mono text-[#0f1012]/60 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {milestone.location}
                      </span>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/5 border border-black/8 text-[#0f1012]/70">
                    {milestone.type === 'university' ? 'Academic' : 'Self-Directed'}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#0f1012]">
                    {milestone.institution}
                  </h3>
                  <p className="text-sm font-semibold text-amber-700 mt-1">{milestone.degree}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#0f1012]/75 leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0f1012]/40 font-bold block mb-3">
                  Key Focus Areas &amp; Coursework
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {milestone.coursework.map((course, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-[#0f1012]/70 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
