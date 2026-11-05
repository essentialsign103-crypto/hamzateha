'use client';

import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Shield, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { CampusVoicePreview } from './CampusVoicePreview';

export function AcademicProjectSection() {
  const [activeScreen, setActiveScreen] = useState<'form' | 'dashboard' | 'architecture'>('form');
  const project = PORTFOLIO_DATA.academicProjects[0];

  return (
    <section
      id="academic-work"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#f7f6f2] text-[#0f1012] border-b border-black/8"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/8 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-[#0f1012]/30" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#0f1012]/50">
                Academic Engineering Assignment
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-[-0.035em] text-[#0f1012] leading-[1]">
              Campus Voice &amp; <br />
              <span className="italic font-serif font-normal text-[#0f1012]/40 lowercase">
                assignment codebase.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#0f1012]/70 leading-relaxed md:text-right">
            Retained as a verified full-stack development project. Demonstrates pure React state management, Express schema validation, and atomic JSON file persistence.
          </div>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive UI Showcase (6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-black/10 bg-[#121316] text-white p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Interactive Live Views:
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[
                  { key: 'form', label: 'Form' },
                  { key: 'dashboard', label: 'Dashboard' },
                  { key: 'architecture', label: 'Architecture' },
                ].map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActiveScreen(s.key as typeof activeScreen)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all ${
                      activeScreen === s.key
                        ? 'bg-white text-[#121316]'
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <CampusVoicePreview activeScreen={activeScreen} />
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-white/50 pt-1">
              <span>Haramaya University Coursework Assignment</span>
              <span className="text-emerald-400 font-bold">• Verified Codebase</span>
            </div>
          </div>

          {/* Right Column: Technical Architecture & Specs (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-black/8 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0f1012]/50">
                  Engineering Scope
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/5 text-[#0f1012]">
                  React + Express + JSON Engine
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase text-[#0f1012] tracking-tight">
                {project.title} — {project.tagline}
              </h3>

              <p className="text-sm text-[#0f1012]/75 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-black/8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0f1012]/40 font-bold block">
                  Technical Architecture Highlights
                </span>
                {project.architectureHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#0f1012]/70 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-black/8 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-black/5 text-[10px] font-mono text-[#0f1012]/70 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0f1012] text-white text-xs font-bold uppercase hover:bg-black transition-all shrink-0"
                  >
                    <GithubIcon size={14} /> Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
