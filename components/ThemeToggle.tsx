'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Until mounted on client, render clean neutral state to prevent layout shift or SSR mismatch
  const isDark = mounted ? theme === 'dark' : false;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`relative inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 active:scale-95 cursor-pointer ${
        isDark
          ? 'bg-[#16181d] border-white/20 text-amber-300 hover:text-amber-200 hover:border-white/35 focus-visible:ring-white shadow-[0_0_12px_rgba(251,191,36,0.15)]'
          : 'bg-white/80 border-black/10 text-neutral-700 hover:text-black hover:border-black/25 focus-visible:ring-black shadow-sm'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
      <span className="sr-only">
        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </span>
    </button>
  );
}

