'use client';

import React from 'react';
import { Mail, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from '@/components/BrandIcons';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ContactBento() {
  const mailtoUrl = `mailto:${PORTFOLIO_DATA.brand.email}?subject=Project%20Inquiry%20%E2%80%94%20Hamza%20Teha&body=Hi%20Hamza%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AProject%20Type%3A%20%5BWeb%20Development%20%2F%20Video%20Editing%20%2F%20Graphic%20Design%5D%0ABudget%20%2F%20Timeline%3A%20%0ABrief%20Overview%3A%20%0A%0AThanks%21`;

  const channels = [
    {
      name: 'Email',
      value: PORTFOLIO_DATA.brand.email,
      href: mailtoUrl,
      icon: <Mail className="w-5 h-5" />,
      actionText: 'Send email',
    },
    {
      name: 'Telegram',
      value: '@hamzateha',
      href: PORTFOLIO_DATA.brand.telegram,
      icon: <TelegramIcon size={18} />,
      actionText: 'Message',
      external: true,
    },
    {
      name: 'LinkedIn',
      value: 'hamzateha',
      href: PORTFOLIO_DATA.brand.linkedin,
      icon: <LinkedinIcon size={18} />,
      actionText: 'Connect',
      external: true,
    },
    {
      name: 'GitHub',
      value: 'hamzatehafeko8-boop',
      href: PORTFOLIO_DATA.brand.github,
      icon: <GithubIcon size={18} />,
      actionText: 'View profile',
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact Information and Inquiries"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <SectionHeader
          title="Contact me"
          subtitle="Feel free to contact me for any freelance contract, project inquiry, or creative collaboration"
        />

        {/* Signature "Available for hire" Banner matching reference */}
        <a
          href={mailtoUrl}
          className="group relative mb-12 sm:mb-14 mx-auto max-w-xl flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-left no-underline rounded-2xl border border-[#14A800]/35 dark:border-[#14A800]/45 bg-[#14A800]/[0.08] dark:bg-[#14A800]/[0.12] px-6 py-6 sm:px-8 sm:py-7 shadow-[0_12px_40px_-10px_rgba(20,168,0,0.25)] dark:shadow-[0_12px_40px_-10px_rgba(20,168,0,0.35)] hover:shadow-[0_18px_50px_-10px_rgba(20,168,0,0.45)] hover:-translate-y-0.5 hover:border-[#14A800]/60 transition-all duration-300"
        >
          <span className="shrink-0 flex h-14 w-[6.5rem] sm:h-16 sm:w-28 items-center justify-center rounded-2xl bg-white dark:bg-[#121418] shadow-sm px-3 overflow-hidden border border-black/5 dark:border-white/10 transition-colors">
            <span className="font-Display font-black text-xl text-black dark:text-white">HT<span className="text-[#14A800]">.</span></span>
          </span>

          <span className="flex-1 min-w-0 text-center sm:text-left">
            <span className="block text-[0.65rem] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#14A800] mb-1">
              Available for hire
            </span>
            <span className="block font-Display text-lg sm:text-xl font-bold text-black dark:text-white mb-1 transition-colors">
              Start a Project with Hamza
            </span>
            <span className="block text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans-body leading-relaxed transition-colors">
              Hire me for Web Development, Video Editing, or Graphic Design — reliable delivery for clients worldwide.
            </span>
          </span>

          <span className="shrink-0 text-sm font-semibold text-[#14A800] border-b border-[#14A800] pb-0.5 group-hover:opacity-75 transition-opacity">
            Start Project →
          </span>
        </a>

        {/* Channels Grid matching reference */}
        <div className="grid items-start gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto text-left">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#15171c] hover:border-black/25 dark:hover:border-white/20 dark:hover:bg-[#1a1d24] hover:shadow-md transition-all duration-200 group no-underline"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black dark:bg-white text-white dark:text-[#0e1013] transition-colors">
                  {channel.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="font-Display text-xs font-bold text-black dark:text-white tracking-wide leading-none transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-[0.72rem] text-neutral-500 dark:text-neutral-400 font-sans-body truncate mt-1 transition-colors">
                    {channel.value}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
