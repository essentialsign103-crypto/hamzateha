'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { X, ExternalLink, Check, Lock, ShieldCheck, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons';
import { ClientProject } from '@/data/portfolioData';

interface ProjectDetailsModalProps {
  project: ClientProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image whenever project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const screenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : project.screenshot
    ? [project.screenshot]
    : [];

  const activeScreenshot = screenshots[activeImageIndex] || screenshots[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/65 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto"
      onClick={(e) => {
        // Close when clicking the backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#fbfbf9] dark:bg-[#121418] text-black dark:text-[#f3f4f6] border border-black/15 dark:border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200 transition-colors">
        {/* Sticky Header with Navigation and Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-7 py-4 bg-[#fbfbf9]/95 dark:bg-[#121418]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
              {project.category}
            </span>
            {project.liveUrl && (
              <span className="text-[10px] sm:text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Live Deployed
              </span>
            )}
            {project.isInstitutional && (
              <span className="text-[10px] sm:text-xs font-mono font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/60 flex items-center gap-1">
                <Lock className="w-3 h-3 text-amber-700 dark:text-amber-400" />
                Institutional System
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1d24] text-black dark:text-neutral-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center transition-all duration-200 shrink-0 shadow-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-5 sm:p-7 md:p-8 space-y-8 overflow-y-auto">
          {/* Project Title, Tagline & Direct Links */}
          <div className="space-y-3">
            <h2
              id="modal-project-title"
              className="font-Display text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight leading-tight transition-colors"
            >
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans-body transition-colors">
              {project.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-[#0e1013] dark:hover:bg-neutral-200 text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <span>Visit Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#1a1d24] hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  <GithubIcon size={14} className="w-3.5 h-3.5" />
                  <span>View Source Code</span>
                </a>
              )}

              {project.isInstitutional && (
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-[#0e1013] dark:hover:bg-neutral-200 text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <span>Inquire for Architecture Schemas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Screenshot Showcase / Gallery */}
          {screenshots.length > 0 ? (
            <div className="space-y-3">
              {/* Browser Mockup Wrapper */}
              <div className="border border-black/10 dark:border-white/10 rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-[#16181e] shadow-md transition-colors">
                {/* Browser Frame Chrome */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 dark:bg-[#14151a] border-b border-black/10 dark:border-white/10 transition-colors">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-white dark:bg-[#1a1d24] border border-black/5 dark:border-white/10 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 truncate max-w-[200px] sm:max-w-xs transition-colors">
                    {project.liveUrl || 'production-interface'}
                  </div>
                  <div className="w-8" />
                </div>

                {/* Screenshot Image */}
                <div className="relative bg-neutral-50 dark:bg-[#121418] aspect-[16/10] overflow-hidden flex items-center justify-center transition-colors">
                  <img
                    src={activeScreenshot}
                    alt={`${project.title} detailed screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Multiple Screenshots Gallery Thumbnails (if > 1) */}
              {screenshots.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {screenshots.map((shot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-black dark:border-white scale-105' : 'border-black/10 dark:border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={shot} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Institutional Architecture Visual Banner */
            <div className="p-6 sm:p-8 rounded-2xl bg-[#131417] dark:bg-[#0c0d10] text-white border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Verified Institutional Enterprise Architecture
                </span>
              </div>
              <h3 className="font-Display text-lg sm:text-xl font-bold text-white">
                ACID-Compliant Relational Schemas &amp; Role Governance
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans-body leading-relaxed max-w-2xl">
                This project represents multi-institution software architectures designed for university and educational environments. To maintain institutional privacy and security standards, live administrative credentials are confidential. Complete entity-relationship models, schema normalization proofs, and system specifications are available upon verified inquiry.
              </p>
            </div>
          )}

          {/* Deep Exploration Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-black/10 dark:border-white/10 transition-colors">
            {/* Left Column: Overview, Problem, Solution */}
            <div className="space-y-6">
              {/* Overview */}
              <div>
                <h4 className="font-Display text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                  Project Overview
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans-body leading-relaxed transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Problem Addressed */}
              {project.problem && (
                <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 space-y-1.5 transition-colors">
                  <h4 className="font-Display text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    The Challenge / Problem
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans-body leading-relaxed transition-colors">
                    {project.problem}
                  </p>
                </div>
              )}

              {/* Solution Implemented */}
              {project.solution && (
                <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 space-y-1.5 transition-colors">
                  <h4 className="font-Display text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    The Implemented Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans-body leading-relaxed transition-colors">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Role, Deliverables, Tech Stack */}
            <div className="space-y-6">
              {/* Hamza's Role & Contribution */}
              {project.role && (
                <div className="p-4 rounded-xl bg-white dark:bg-[#1a1d24] border border-black/10 dark:border-white/10 shadow-sm space-y-1.5 transition-colors">
                  <h4 className="font-Display text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-black dark:text-white" />
                    Role &amp; Contribution
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-sans-body leading-relaxed font-medium transition-colors">
                    {project.role}
                  </p>
                </div>
              )}

              {/* Key Highlights & Capabilities */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="font-Display text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                    Key Highlights &amp; Capabilities
                  </h4>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 transition-colors">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies & Tools */}
              <div>
                <h4 className="font-Display text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Technologies &amp; Architecture
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-[#1a1d24] border border-black/10 dark:border-white/10 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 font-medium transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-5 sm:px-7 py-3.5 bg-neutral-50 dark:bg-[#0e1013] border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-4 mt-auto transition-colors">
          <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
            Hamza Teha · Professional Portfolio
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Close exploration ×
          </button>
        </div>
      </div>
    </div>
  );
}
