'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, ShieldCheck, Layers } from 'lucide-react';
import { LiveProduct } from '@/data/portfolioData';

interface LiveProductModalProps {
  product: LiveProduct | null;
  onClose: () => void;
}

export function LiveProductModal({ product, onClose }: LiveProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#121316] text-white rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20 inline-block mb-1.5">
              {product.category}
            </span>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              {product.officialName}
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-0.5">{product.tagline}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Genuine Production Screenshot */}
        <div className="my-6 rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-lg">
          <div className="px-4 py-2 bg-[#0a0a0d] border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 truncate max-w-[300px]">{product.deployedUrl}</span>
            </div>
            <a
              href={product.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <img
            src={product.screenshot}
            alt={`${product.title} Full Production Screenshot`}
            className="w-full h-auto object-cover object-top max-h-[380px]"
          />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-400 mb-1.5">
                <Cpu className="w-4 h-4" /> Problem Statement
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{product.problem}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-1.5">
                <ShieldCheck className="w-4 h-4" /> Engineering Solution
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{product.solution}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-2">
              <Layers className="w-4 h-4" /> Core Functional Modules
            </div>
            <ul className="space-y-2">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contribution Note if Present */}
        {product.contributionNote && (
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 my-4 text-xs text-white/70 leading-relaxed">
            <span className="font-bold text-amber-400 font-mono block mb-1">
              Project Attribution & Role Context:
            </span>
            {product.contributionNote}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
            Verified Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {product.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-white/10">
          <a
            href={product.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <span>Visit Deployed Web App</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white text-[#121316] text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
