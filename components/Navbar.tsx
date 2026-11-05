'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = PORTFOLIO_DATA.navigation;

  // ─── Smooth scroll with header clearance ──────────────────────────────────
  const scrollToSection = useCallback((href: string, updateHistory = true, instant = false) => {
    const id = href.replace(/^#/, '');
    const isReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior = instant || isReducedMotion ? 'instant' : 'smooth';

    if (!id || id === 'home' || id === 'top') {
      window.scrollTo({ top: 0, behavior: scrollBehavior });
      if (updateHistory && window.location.hash !== '#home') {
        history.pushState(null, '', '#home');
      }
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 64;
      const targetTop = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: scrollBehavior });
      if (updateHistory && window.location.hash !== `#${id}`) {
        history.pushState(null, '', `#${id}`);
      }
      setActiveSection(id);
    }
  }, []);

  // ─── Active section detection ──────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const header = document.querySelector('header');
      const headerH = header ? header.getBoundingClientRect().height : 64;
      const probe = window.scrollY + headerH + 60;

      const ids = ['contact', 'services', 'work', 'projects', 'tools', 'experience', 'about', 'home'];
      for (const id of ids) {
        if (id === 'home') { setActiveSection('home'); break; }
        const el = document.getElementById(id);
        if (el && probe >= el.offsetTop) {
          setActiveSection(id === 'projects' ? 'work' : id);
          break;
        }
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ─── Hash restoration on mount / back-forward ─────────────────────────────
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const timers = [80, 250, 600].map((d) =>
        setTimeout(() => {
          const id = hash.replace(/^#/, '');
          const el = id === 'home' || id === 'top' ? null : document.getElementById(id);
          if (!el && (id === 'home' || id === 'top') && window.scrollY > 30) {
            scrollToSection('#home', false, true);
          } else if (el) {
            const header = document.querySelector('header');
            const headerH = header ? header.getBoundingClientRect().height : 64;
            if (Math.abs(el.getBoundingClientRect().top - headerH) > 120) {
              scrollToSection(hash, false, true);
            }
          }
        }, d)
      );
      return () => timers.forEach(clearTimeout);
    }

    const onPopState = () => scrollToSection(window.location.hash || '#home', false, true);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [scrollToSection]);

  // ─── Global hash-link delegation ──────────────────────────────────────────
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href?.startsWith('#') && href.length > 1) {
        const id = href.replace(/^#/, '');
        if (id === 'home' || id === 'top' || document.getElementById(id)) {
          e.preventDefault();
          scrollToSection(href);
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [scrollToSection]);

  // ─── Mobile menu keyboard + scroll lock ───────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Fixed Header ───────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#f5f4f0]/92 dark:bg-[#0e1013]/92 backdrop-blur-md border-b border-black/[0.07] dark:border-white/[0.08] shadow-[0_1px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_12px_rgba(0,0,0,0.3)]'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4 sm:gap-8">

          {/* ── Logo — anchored far left ──────────────────────────────────── */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            aria-label="Hamza Teha — Back to top"
            className="shrink-0 font-Display text-base font-bold tracking-tight text-black hover:text-black/55 dark:text-white dark:hover:text-white/60 transition-colors"
          >
            {PORTFOLIO_DATA.brand.logoName}
            <span className="text-black/25 dark:text-white/25">.</span>
          </a>

          {/* ── Desktop nav — centered in remaining space ─────────────────── */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-7"
          >
            {navItems.map((item) => {
              const id = item.href.replace(/^#/, '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`
                    relative text-[11px] font-medium uppercase tracking-[0.11em]
                    transition-colors duration-200 py-1
                    ${isActive ? 'text-black dark:text-white' : 'text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white'}
                  `}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black dark:bg-white"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* CTA — visible from sm upward */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="
                hidden sm:inline-flex items-center gap-1.5
                glass-pill
                px-3.5 py-[7px]
                text-[11px] font-medium tracking-[0.04em] text-black dark:text-white
                rounded-full
                hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]
                transition-all duration-200
                active:scale-95
              "
            >
              Start a Project
              <ArrowUpRight className="w-3 h-3 opacity-50" />
            </a>

            {/* Hamburger — visible below md */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden glass-pill p-2 rounded-full text-black dark:text-white transition-colors hover:bg-white dark:hover:bg-[#1a1d24]"
            >
              {mobileMenuOpen
                ? <X className="w-4 h-4" />
                : <Menu className="w-4 h-4" />
              }
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Drawer ──────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 flex flex-col bg-[#f5f4f0] dark:bg-[#0e1013] text-black dark:text-white md:hidden animate-in fade-in duration-200"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.07] dark:border-white/[0.08]">
            <span className="font-Display text-[15px] font-bold tracking-tight text-black dark:text-white">
              {PORTFOLIO_DATA.brand.logoName}
              <span className="text-black/30 dark:text-white/30">.</span>
            </span>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="glass-pill p-2 rounded-full text-black dark:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links list */}
          <nav
            aria-label="Mobile Navigation List"
            className="flex-1 flex flex-col justify-center px-8 gap-1"
          >
            {navItems.map((item) => {
              const id = item.href.replace(/^#/, '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    scrollToSection(item.href);
                  }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`
                    flex items-center justify-between
                    py-4 border-b border-black/[0.06] dark:border-white/[0.08]
                    text-2xl font-Display font-bold tracking-tight
                    transition-colors duration-150
                    ${isActive ? 'text-black dark:text-white' : 'text-black/35 hover:text-black dark:text-white/35 dark:hover:text-white'}
                  `}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA at bottom */}
          <div className="px-8 pb-12 pt-6 border-t border-black/[0.07] dark:border-white/[0.08]">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                scrollToSection('#contact');
              }}
              className="btn-solid w-full py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em]"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </>
  );
}
