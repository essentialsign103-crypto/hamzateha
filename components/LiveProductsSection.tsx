'use client';

import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, Globe, Lock, Maximize2 } from 'lucide-react';
import { PORTFOLIO_DATA, LiveProduct } from '@/data/portfolioData';
import { LiveProductModal } from './LiveProductModal';

export function LiveProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<LiveProduct | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-24 sm:py-32 bg-[#efece6]/40 text-[#0f1012] border-b border-black/8 relative"
    >
      {/* Anchor alias for existing live-products links */}
      <span id="live-products" className="sr-only" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-black/8 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-[#0f1012]/30" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#0f1012]/50">
                Collection A / Verified Deployed Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.035em] text-[#0f1012] leading-[1]">
              Live Products &amp; <br />
              <span className="italic font-serif font-normal text-[#0f1012]/40 lowercase">
                digital solutions.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#0f1012]/70 leading-relaxed md:text-right">
            Four functional, publicly deployed web applications. Inspect authentic screenshots captured directly from production, review verified technology stacks, or open the live deployments.
          </div>
        </div>

        {/* Products Grid (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PORTFOLIO_DATA.liveProducts.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col rounded-[2rem] overflow-hidden border border-white/10 bg-[#121316] text-white shadow-xl hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
            >
              {/* Architectural Browser Mockup Header */}
              <div className="relative bg-[#0a0a0c] p-4 sm:p-5 border-b border-white/10">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <div className="ml-2 flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 max-w-[200px] sm:max-w-[280px] truncate">
                      <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{product.deployedUrl}</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Product</span>
                  </span>
                </div>

                {/* Genuine Product Screenshot Frame */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 aspect-[16/10] cursor-pointer group/img"
                  title="Click to view full case details and specifications"
                >
                  <img
                    src={product.screenshot}
                    alt={`${product.title} Live Interface Screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    loading="lazy"
                  />

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-white bg-black/50 backdrop-blur-[2px]">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                    <span>View Case Details</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:text-amber-300 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-white/50 text-xs sm:text-sm font-medium mt-1 leading-relaxed">
                        {product.tagline}
                      </p>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono font-bold text-white/70 uppercase tracking-wider shrink-0">
                      {product.category}
                    </span>
                  </div>

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {product.summary}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {product.keyHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/75 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Collaborative Attribution Disclosure if applicable */}
                  {product.contributionNote && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-white/80 leading-relaxed">
                      <span className="font-bold text-amber-300 font-mono block mb-0.5">
                        Team Attribution Note:
                      </span>
                      {product.contributionNote}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {product.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={product.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-widest active:scale-95 transition-all shadow-md"
                  >
                    <span>Open Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase tracking-widest active:scale-95 transition-all border border-white/10"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Case Details</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Details Modal */}
      <LiveProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
