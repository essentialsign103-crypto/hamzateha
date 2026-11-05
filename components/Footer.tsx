'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-0 pt-10 sm:pt-14 pb-10 sm:pb-12 border-t border-black/[0.06] dark:border-white/[0.08] bg-[#f7f6f2] dark:bg-[#0e1013] transition-colors">
      {/* Signature Oversized Outlined Name Art matching reference */}
      <div className="relative w-full select-none mb-8 sm:mb-12 px-4 sm:px-6 pointer-events-none" aria-hidden="true">
        <p
          className="font-Display font-extrabold uppercase tracking-[-0.04em] text-center leading-[0.88] select-none footer-name-art"
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 12rem)',
          }}
        >
          Hamza <br />Teha
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Back to top & Email */}
        <div className="text-center">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-block text-sm font-medium text-black dark:text-white border-b border-black dark:border-white pb-0.5 hover:opacity-55 transition-all cursor-pointer"
          >
            Back to top ↑
          </button>

          <div className="flex items-center justify-center gap-2 mt-4 text-neutral-600 dark:text-neutral-400">
            <Mail className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0" />
            <a
              href={`mailto:${PORTFOLIO_DATA.brand.email}`}
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-sans-body"
            >
              {PORTFOLIO_DATA.brand.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar matching reference */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 mt-8 pt-6 text-xs sm:text-sm text-center sm:text-left transition-colors">
          <p className="text-neutral-500 dark:text-neutral-400 font-sans-body transition-colors">
            © {new Date().getFullYear()} Hamza Teha. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-10 list-none p-0 m-0">
            <li>
              <a
                href={PORTFOLIO_DATA.brand.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-medium font-sans-body"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={PORTFOLIO_DATA.brand.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-medium font-sans-body"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={PORTFOLIO_DATA.brand.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-medium font-sans-body"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
