'use client';

import React from 'react';
import {
  Server,
  Database,
  Shield,
  Layers,
  CheckCircle2,
  Lock,
  Network,
  Users,
  Building2,
  Cpu,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export function InstitutionalSystemsSection() {
  return (
    <section
      id="institutional-systems"
      className="scroll-mt-20 py-24 sm:py-32 bg-[#0f1012] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-architectural-dots-dark"
      />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-amber-500" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-amber-400">
                Collection B / Institutional Systems Design
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.035em] text-white leading-[1]">
              Institutional &amp; <br />
              <span className="italic font-serif font-normal text-white/40 lowercase">
                large-scale systems.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm text-white/60 leading-relaxed md:text-right">
            Two major software engineering systems designed for academic and institutional operations, student records, and structured relational data management.
          </div>
        </div>

        {/* Enterprise Case Studies Stack */}
        <div className="space-y-16">
          {PORTFOLIO_DATA.institutionalSystems.map((system, index) => (
            <article
              key={system.id}
              className="rounded-[2.5rem] border border-white/15 bg-[#14151a] p-6 sm:p-10 lg:p-12 shadow-2xl space-y-10"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/25">
                      Case Study 0{index + 1} • {system.category}
                    </span>

                    <span className="text-[10px] font-mono text-white/50 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      {system.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                    {system.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/60 font-medium">
                    {system.tagline}
                  </p>
                </div>

                {/* Impact Classification Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0 lg:text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                    System Classification
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">{system.impactMetric}</p>
                  <span className="text-[10px] text-emerald-400 font-mono">Verified Architectural Scope</span>
                </div>
              </div>

              {/* Core Overview & Contribution Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    <Cpu className="w-4 h-4" /> System Scope &amp; Institutional Purpose
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed">
                    {system.overview}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="pt-4 space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                      Key Architectural Guardrails
                    </span>
                    {system.architectureHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/80 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                      <Shield className="w-4 h-4" /> Hamza Teha&apos;s Engineering Contribution
                    </div>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans">
                      {system.hamzaContribution}
                    </p>
                  </div>

                  {/* Architecture Diagram Representation */}
                  <div className="p-5 rounded-2xl bg-[#0b0c0f] border border-white/10 font-mono text-[11px] text-white/70 space-y-2">
                    <div className="flex items-center justify-between text-white/40 text-[10px] pb-2 border-b border-white/10">
                      <span className="flex items-center gap-1.5 text-amber-400">
                        <Network className="w-3.5 h-3.5" /> System Topology &amp; Access Controls
                      </span>
                      <span>Relational Database Core</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-1">
                      <div className="p-2.5 rounded bg-white/5 border border-white/10">
                        <Users className="w-3.5 h-3.5 mx-auto mb-1 text-blue-400" />
                        <span>Multi-Role UI</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/10">
                        <Layers className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400" />
                        <span>RBAC Logic</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/10">
                        <Database className="w-3.5 h-3.5 mx-auto mb-1 text-amber-400" />
                        <span>Schema Data</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Functional Modules Grid */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/50">
                    Institutional Subsystems Breakdown ({system.coreModules.length} Modules)
                  </span>
                  <span className="text-[10px] font-mono text-white/40">Verified Capabilities</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {system.coreModules.map((module, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-1.5 hover:bg-white/[0.06] transition-colors"
                    >
                      <span className="text-[10px] font-mono font-bold text-amber-400">
                        Module 0{mIdx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white">{module.name}</h4>
                      <p className="text-xs text-white/60 leading-relaxed">{module.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Badges */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mr-2">
                    Underlying Architecture:
                  </span>
                  {system.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-[10px] font-mono text-white/50">
                  * Academic &amp; Institutional Software Engineering Projects
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
