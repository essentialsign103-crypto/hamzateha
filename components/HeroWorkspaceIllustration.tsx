'use client';

import React from 'react';
import {
  Terminal,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Play,
  FileCode,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export function HeroWorkspaceIllustration() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto select-none py-4 sm:py-6">
      {/* Ambient background glow behind workspace */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-amber-500/10 via-emerald-500/10 to-blue-500/10 rounded-[3rem] blur-2xl opacity-70 animate-pulse-glow"
      />

      {/* Main 3D Perspective Isometric Container */}
      <div className="relative transform-gpu transition-transform duration-500 hover:scale-[1.01]">
        {/* Layer 1: Main IDE / Code Window (Centerpiece) */}
        <div className="relative rounded-2xl bg-[#0d0e12] border border-white/15 shadow-2xl overflow-hidden animate-float-workspace">
          {/* Editor Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#15161c] border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
              <span className="ml-2 text-white/40 font-mono text-[11px] hidden sm:inline">
                hamza-teha-workspace
              </span>
            </div>

            {/* Active Tab */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d0e12] border border-white/10 text-white/90 font-mono text-[11px]">
              <FileCode className="w-3.5 h-3.5 text-amber-400" />
              <span>HamzaTeha.tsx</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1 animate-pulse" />
            </div>

            <div className="flex items-center gap-2 text-white/40 font-mono text-[10px]">
              <span className="hidden sm:inline">git:(main)</span>
              <span className="text-emerald-400 font-bold">UTF-8</span>
            </div>
          </div>

          {/* Code Editor Pane */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-white/90 overflow-x-auto">
            <div className="space-y-1">
              <div className="text-white/40 italic">
                <span className="text-white/30 mr-3 select-none">01</span>
                // Hamza Teha — Freelancer Full-Stack Developer
              </div>
              <div className="text-white/40 italic">
                <span className="text-white/30 mr-3 select-none">02</span>
                // Haramaya University • 3rd-Year IT Student
              </div>
              <div className="text-white/30 select-none">03</div>

              <div>
                <span className="text-white/30 mr-3 select-none">04</span>
                <span className="text-purple-400 font-semibold">import</span>{' '}
                <span className="text-amber-300">&#123; FullStackPractice &#125;</span>{' '}
                <span className="text-purple-400 font-semibold">from</span>{' '}
                <span className="text-emerald-300">&apos;@ethiopia/software-dev&apos;</span>;
              </div>

              <div className="text-white/30 select-none">05</div>

              <div>
                <span className="text-white/30 mr-3 select-none">06</span>
                <span className="text-blue-400 font-semibold">export const</span>{' '}
                <span className="text-amber-300">hamza</span>:{' '}
                <span className="text-cyan-300">DeveloperProfile</span> = &#123;
              </div>

              <div className="pl-4">
                <span className="text-white/30 mr-3 select-none">07</span>
                <span className="text-white/70">identity:</span>{' '}
                <span className="text-emerald-300">&apos;HAMZA TEHA&apos;</span>,
              </div>

              <div className="pl-4">
                <span className="text-white/30 mr-3 select-none">08</span>
                <span className="text-white/70">role:</span>{' '}
                <span className="text-emerald-300">&apos;Freelancer Full-Stack Developer&apos;</span>,
              </div>

              <div className="pl-4">
                <span className="text-white/30 mr-3 select-none">09</span>
                <span className="text-white/70">academic:</span>{' '}
                <span className="text-emerald-300">&apos;Haramaya University (IT Student)&apos;</span>,
              </div>

              <div className="pl-4">
                <span className="text-white/30 mr-3 select-none">10</span>
                <span className="text-white/70">coreStack:</span> [
                <span className="text-amber-300">&apos;Next.js&apos;</span>,{' '}
                <span className="text-cyan-300">&apos;React&apos;</span>,{' '}
                <span className="text-emerald-300">&apos;Node.js&apos;</span>,{' '}
                <span className="text-blue-300">&apos;TypeScript&apos;</span>],
              </div>

              <div className="pl-4">
                <span className="text-white/30 mr-3 select-none">11</span>
                <span className="text-white/70">availability:</span>{' '}
                <span className="text-emerald-400 font-bold">&apos;Open For Hire&apos;</span>,
              </div>

              <div>
                <span className="text-white/30 mr-3 select-none">12</span>
                &#125;;
              </div>

              <div className="text-white/30 select-none">13</div>

              <div>
                <span className="text-white/30 mr-3 select-none">14</span>
                <span className="text-blue-400 font-semibold">export async function</span>{' '}
                <span className="text-yellow-300">shipSolution</span>() &#123;
              </div>

              <div className="pl-4">
                <span className="text-white/30 mr-3 select-none">15</span>
                <span className="text-purple-400 font-semibold">return await</span>{' '}
                <span className="text-cyan-300">FullStackPractice</span>.
                <span className="text-yellow-300">deliver</span>(&#123;
              </div>

              <div className="pl-8 text-white/80">
                <span className="text-white/30 mr-3 select-none">16</span>
                verified: <span className="text-emerald-400 font-bold">true</span>, standards:{' '}
                <span className="text-amber-300">&apos;Production Grade&apos;</span>
              </div>

              <div className="pl-4">
                <span className="text-white/30 mr-3 select-none">17</span>
                &#125;);
              </div>

              <div>
                <span className="text-white/30 mr-3 select-none">18</span>
                &#125;
                <span className="inline-block w-2 h-4 bg-amber-400 ml-1.5 animate-pulse align-middle" />
              </div>
            </div>
          </div>

          {/* Editor Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#121318] border-t border-white/5 text-[10px] font-mono text-white/50">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3 h-3" /> 0 Errors
              </span>
              <span className="text-white/30">|</span>
              <span className="text-amber-400 flex items-center gap-1">
                <Zap className="w-3 h-3" /> TypeScript 5.8
              </span>
            </div>
            <span>Spaces: 2 • Line 18, Col 2</span>
          </div>
        </div>

        {/* Layer 2: Floating Satellite Card (Top-Right) - Live Telemetry & Build */}
        <div className="hidden md:block absolute -top-5 -right-2 lg:-right-5 w-56 rounded-xl bg-[#181920]/95 backdrop-blur-md border border-white/15 p-3.5 shadow-2xl animate-float-card1">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <span className="text-white/50 uppercase tracking-wider">Runtime Stream</span>
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              ACTIVE
            </span>
          </div>

          <div className="mt-2.5 space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-white/70">
              <span>ImageFit Canvas Engine</span>
              <span className="text-emerald-400 font-bold">100% Client</span>
            </div>
            <div className="flex items-center justify-between text-white/70">
              <span>HU CMS Role Router</span>
              <span className="text-blue-400 font-bold">RBAC OK</span>
            </div>
            <div className="flex items-center justify-between text-white/70">
              <span>TEHA TECH Creator Suite</span>
              <span className="text-amber-400 font-bold">Bilingual</span>
            </div>
          </div>
        </div>

        {/* Layer 3: Floating Satellite Card (Bottom-Left) - Production Terminal */}
        <div className="hidden md:block absolute -bottom-5 -left-2 lg:-left-5 w-60 rounded-xl bg-[#090a0d]/95 backdrop-blur-md border border-emerald-500/30 p-3.5 shadow-2xl animate-float-card2">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-bold">DEPLOYED PRODUCTION</span>
            </div>
            <span className="text-white/40">Next.js 16</span>
          </div>

          <div className="mt-2 space-y-1 font-mono text-[10px] text-white/80">
            <div className="text-white/50">&gt; vercel --prod</div>
            <div className="text-emerald-400 font-bold flex items-center gap-1">
              <span>✓</span> Prerendered 100% Static Pages
            </div>
            <div className="text-amber-300">● 4 Live Products Connected</div>
            <div className="text-white/40 text-[9px] pt-1 border-t border-white/10">
              Ready for client &amp; engineering opportunities
            </div>
          </div>
        </div>

        {/* Layer 4: Floating Tech Badges */}
        <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-white text-[#0f1012] font-mono text-[10px] font-extrabold shadow-lg flex items-center gap-1.5 border border-black/10">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span>React 19 &amp; Next.js</span>
        </div>

        <div className="absolute -bottom-3 right-8 px-3 py-1 rounded-full bg-[#121316] text-white font-mono text-[10px] font-extrabold shadow-lg flex items-center gap-1.5 border border-white/15">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Node.js &amp; MySQL</span>
        </div>
      </div>
    </div>
  );
}
