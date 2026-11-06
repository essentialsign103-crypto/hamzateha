'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import hamzaPortrait from '@/public/images/hamza.png';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#f5f4f0] dark:bg-[#0e1013] text-[#111111] dark:text-[#f3f4f6] transition-colors duration-300"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-black/10 dark:bg-white/10" />
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-black/[0.025] dark:bg-white/[0.025] blur-[100px]" />
      </div>

      {/* Top identity */}
      <div className="relative z-40 flex justify-center px-4 pt-10 sm:pt-14">
        <div className="flex items-center justify-center gap-3 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.22em] text-black/50 dark:text-white/50 text-center">
          <span className="w-6 sm:w-10 h-px bg-black/30 dark:bg-white/30" />
          HAMZA TEHA — FREELANCER SOFTWARE DEVELOPER
          <span className="w-6 sm:w-10 h-px bg-black/30 dark:bg-white/30" />
        </div>
      </div>

      {/* Main composition */}
      <div className="relative w-full max-w-[1600px] mx-auto px-3 sm:px-6">
        <div className="relative h-[650px] sm:h-[760px] lg:h-[calc(100svh-120px)] min-h-[650px]">

          {/* PORTRAIT — behind the headline */}
          <div className="
            absolute z-10
            bottom-[75px] sm:bottom-[80px]
            left-1/2 -translate-x-1/2
            w-[270px] h-[370px]
            sm:w-[350px] sm:h-[470px]
            lg:w-[430px] lg:h-[540px]
            group
          ">
            {/* Outer: entrance animation (translateX) */}
            <div className="portrait-enter relative w-full h-full">
              {/* Inner: float animation (translateY) — isolated transform axis */}
              <div className="portrait-float relative w-full h-full">
                <Image
                  src={hamzaPortrait}
                  alt="Hamza Teha — Software Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 270px, (max-width: 1024px) 350px, 430px"
                  className="
                    object-contain object-bottom
                    grayscale group-hover:grayscale-0
                    hamza-portrait-gradient
                    drop-shadow-[0_20px_30px_rgba(0,0,0,0.16)]
                    transition-all duration-700 ease-out
                    group-hover:drop-shadow-[0_0_24px_rgba(34,197,94,0.6)]
                  "
                />
              </div>
            </div>
          </div>

          {/* HEADLINE — always above the portrait */}
          <div className="
            absolute z-20
            top-[155px] sm:top-[175px] lg:top-[190px]
            left-0 right-0
            flex flex-col items-center
            w-full pointer-events-none
          ">
            <h1 className="
              w-full text-center
              whitespace-nowrap
              text-[clamp(2.6rem,11.7vw,11rem)]
              leading-[0.85]
              font-black uppercase
              tracking-[-0.085em]
              text-[#16A34A]
            ">
              SOFTWARE
            </h1>

            <div
              aria-hidden="true"
              className="
                w-full text-center
                whitespace-nowrap
                text-[clamp(2.1rem,10.3vw,9.8rem)]
                leading-[0.95]
                font-black italic uppercase
                tracking-[-0.085em]
                mt-1
              "
              style={{
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '2px #5bf5d9',
              }}
            >
              DEVELOPER
            </div>
          </div>

          {/* Small floating label */}
          <div className="
            absolute z-30
            top-[105px] sm:top-[115px]
            right-6 sm:right-12 lg:right-20
            text-[9px] sm:text-[10px]
            uppercase tracking-[0.25em]
            text-black/40 dark:text-white/40 whitespace-nowrap
          ">
            Creative Mind · Digital Builder
          </div>

          {/* Bottom information */}
          <div className="absolute z-30 bottom-0 left-0 right-0 max-w-[1050px] mx-auto px-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/15 dark:border-white/15 pt-4 pb-4">
              <div className="text-[9px] sm:text-[10px] font-medium tracking-wide text-black/55 dark:text-white/55 text-center sm:text-left">
                <span className="text-black/80 dark:text-white/80">BASED IN ETHIOPIA</span>
                <span className="mx-2">—</span>
                AVAILABLE WORLDWIDE
              </div>
              <div className="flex items-center gap-3 sm:gap-5 text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.13em] text-black/55 dark:text-white/55">
                <span>Reliability</span>
                <span>Performance</span>
                <span>Clean Code</span>
              </div>
            </div>
          </div>

        </div>
      </div>


{/* Introduction */}
<div className="relative z-30 max-w-[850px] mx-auto px-5 sm:px-6 pt-10 pb-6">

  <div className="w-full max-w-3xl mx-auto text-center">

    {/* Top Accent */}
    <div className="
      mx-auto mb-6
      h-[2px] w-12
      rounded-full
      bg-black/70 dark:bg-white/70
    " />

    {/* Headline */}
    <h2 className="
      mx-auto max-w-2xl
      text-2xl sm:text-3xl lg:text-4xl
      font-bold
      tracking-[-0.045em]
      leading-[1.15]
      text-[#111111] dark:text-white
    ">
      Building Digital Experiences
      <span className="block text-black/45 dark:text-white/45">
        That Make an Impact.
      </span>
    </h2>

    {/* Small Description Rectangle */}
    <div className="
      relative mx-auto mt-7
      w-fit max-w-full
      rounded-lg
      border border-black/[0.12] dark:border-white/[0.15]
      bg-black/[0.015] dark:bg-white/[0.03]
      px-5 py-3.5 sm:px-7 sm:py-4
    ">
      <p className="
        mx-auto max-w-xl
        text-[13px] sm:text-[14px]
        font-medium
        leading-[1.8]
        tracking-[-0.015em]
        text-black/60 dark:text-white/70
        text-center
      ">
        I transform ideas into thoughtful digital solutions, combining modern web development, creative design, and technology to build meaningful experiences that solve problems and help businesses grow.
      </p>
    </div>

    {/* Bottom Accent */}
    <div className="
      mx-auto mt-7
      h-px w-10
      bg-black/15 dark:bg-white/15
    " />

  </div>
</div>

      {/* Hero buttons */}
      <div className="
        relative z-30
        flex flex-wrap justify-center items-center
        gap-3 px-4 pt-4 pb-12 sm:pb-16
      ">
        <a
          href="#projects"
          className="
            inline-flex items-center gap-3
            rounded-full bg-[#101010] text-white dark:bg-white dark:text-[#0e1013]
            px-7 py-3.5 text-xs font-medium
            transition-all duration-300
            hover:bg-black/75 dark:hover:bg-neutral-200 hover:-translate-y-1
          "
        >
          Explore My Work
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          className="
            inline-flex items-center gap-3
            rounded-full border border-black/20 dark:border-white/20
            bg-transparent px-7 py-3.5
            text-xs font-medium text-black dark:text-white
            transition-all duration-300
            hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#0e1013]
            hover:-translate-y-1
          "
        >
          Get In Touch
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-30 flex justify-center pb-7 text-black/35 dark:text-white/35">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

    </section>
  );
}
