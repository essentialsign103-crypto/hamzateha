'use client';

import React, { useState } from 'react';
import { ArrowRight, Lock, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, ClientProject } from '@/data/portfolioData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectDetailsModal } from './ProjectDetailsModal';

export function SelectedWork() {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'systems'>('all');
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);

  const filterProjects = (projects: ClientProject[]) => {
    if (activeTab === 'web') {
      return projects.filter((p) => !p.isInstitutional);
    }
    if (activeTab === 'systems') {
      return projects.filter((p) => p.isInstitutional || p.id === 'huis');
    }
    return projects;
  };

  const displayedProjects = filterProjects(PORTFOLIO_DATA.selectedProjects);

  return (
    <section
      id="work"
      aria-label="Portfolio and Selected Projects"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-24 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors"
    >
      {/* Anchor alias for projects */}
      <span id="projects" className="sr-only" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Portfolio"
          subtitle="Minimal showcase of deployed products, web applications, and institutional system architectures"
        />

        {/* Filter Tabs Matching Reference */}
        <div
          className="flex justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 border-b border-black/10 dark:border-white/10 pb-2 overflow-x-auto transition-colors"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'web', label: 'Web Applications' },
            { key: 'systems', label: 'Systems & Architecture' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`text-xs sm:text-sm font-medium pb-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.key
                  ? 'text-black dark:text-white border-black dark:border-white font-semibold'
                  : 'text-neutral-400 dark:text-neutral-500 border-transparent hover:text-neutral-700 dark:hover:text-neutral-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Minimal Project Cards Grid (No Screenshot Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group relative flex flex-col justify-between border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-7 bg-white/75 dark:bg-[#15171c]/80 hover:bg-white dark:hover:bg-[#15171c] hover:border-black/25 dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
            >
              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 transition-colors">
                    {project.category}
                  </span>
                  {project.liveUrl && (
                    <span className="text-[10px] font-mono font-medium text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-200/70 dark:border-emerald-800/50 transition-colors">
                      Live Deployed
                    </span>
                  )}
                  {project.isInstitutional && (
                    <span className="text-[10px] font-mono font-medium text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-200/70 dark:border-amber-800/50 flex items-center gap-1 transition-colors">
                      <Lock className="w-2.5 h-2.5" /> Institutional
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="font-Display font-bold text-xl sm:text-2xl text-black dark:text-white leading-snug group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans-body mt-1 mb-3 transition-colors">
                  {project.tagline}
                </p>

                {/* Meaningful Brief Overview */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans-body leading-relaxed line-clamp-3 mb-5 transition-colors">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[10px] font-mono text-neutral-600 dark:text-neutral-300 font-medium transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="flex items-center justify-between pt-4 border-t border-black/10 dark:border-white/10 transition-colors">
                  <span className="text-xs sm:text-sm font-semibold text-black dark:text-white inline-flex items-center gap-2 group-hover:translate-x-0.5 transition-transform">
                    <span>Explore project details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    View case →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep Project Exploration Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
