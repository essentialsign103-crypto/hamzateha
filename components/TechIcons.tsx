import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = 'w-6 h-6', size = 24 }: TechIconProps) {
  switch (name.toLowerCase()) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} width={size} height={size} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" className={className} width={size} height={size} fill="none">
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path
            d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.136 149.508 157.438Z"
            fill="url(#paint0_linear_next)"
          />
          <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)" />
          <defs>
            <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'typescript':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path
            d="M71.2 59.8h13.9v38.4h11.9V59.8h13.9V49.7H71.2v10.1zm-48.4 17.5c0 12.3 8.8 21.6 22.7 21.6 8.3 0 14.7-2.6 18.5-6.2l-5.7-8.7c-3.1 2.5-7.2 4.4-12.2 4.4-6.8 0-11.4-4.2-11.5-10.7h30.2c.2-1.3.3-2.9.3-4.5 0-12.8-8.2-24.2-21.7-24.2-13.4 0-20.6 11.2-20.6 28.3zm12-4.5c.3-5.7 3.9-9.9 9.3-9.9 5.3 0 8.8 4.2 8.8 9.9H34.8z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <path
            d="M67.3 98.7c3.1 5.2 7.8 8.8 14.6 8.8 6.1 0 10.2-3 10.2-7.3 0-5.1-4.1-6.9-11.1-10-10.1-4.3-16.7-9.8-16.7-20.9 0-10.4 8.2-18.4 20.8-18.4 9 0 15.4 3.2 19.4 10.3l-9.1 5.8c-2.3-4-5.3-5.8-10.3-5.8-4.6 0-7.8 2.7-7.8 6.2 0 4.3 3.3 6 10.1 8.9 11.7 5.1 17.8 10.3 17.8 21.9 0 12.5-9.8 19.3-23.2 19.3-13.1 0-21.3-6.2-25.2-13.4l10.5-5.4zm-44.4.2c2.4 4.1 5.6 7.4 11.4 7.4 5.9 0 9.8-2.6 9.8-12.6V51.7h13.2v42.2c0 17-9.9 24.2-22.9 24.2-11.7 0-18.8-6-22.4-14.7l10.9-4.5z"
            fill="#000000"
          />
        </svg>
      );

    case 'tailwind':
      return (
        <svg viewBox="0 0 54 33" className={className} width={size} height={size} fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.005-5.147-3.654C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.005 5.147 3.654C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'nodejs':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <path
            d="M64 4.5l55 31.8v63.4L64 123.5 9 89.7V26.3L64 4.5zm0 13.4L20.6 35.8v47.4L64 107.9l43.4-24.7V35.8L64 17.9z"
            fill="#339933"
          />
          <path
            d="M64 36.8l27.5 15.9v31.7L64 100.3 36.5 84.4V52.7L64 36.8zm0 11.5L46.5 58.4v19.2L64 87.7l17.5-10.1V58.4L64 48.3z"
            fill="#66CC33"
          />
        </svg>
      );

    case 'express':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="16" fill="#1A1B20" />
          <text
            x="64"
            y="76"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="32"
            fontWeight="bold"
            fontFamily="monospace"
          >
            ex
          </text>
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="16" fill="#00758F" />
          <path
            d="M40 85c0-15 15-25 35-25s30 10 30 25M30 65c0-10 10-18 25-18 10 0 18 5 22 12"
            stroke="#F29111"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="80" cy="50" r="5" fill="#F29111" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="16" fill="#336791" />
          <ellipse cx="64" cy="50" rx="35" ry="25" fill="#FFFFFF" opacity="0.9" />
          <path d="M45 55c5 15 15 35 19 45 4-10 14-30 19-45" stroke="#336791" strokeWidth="8" fill="none" />
          <circle cx="52" cy="45" r="4" fill="#336791" />
          <circle cx="76" cy="45" r="4" fill="#336791" />
        </svg>
      );

    case 'supabase':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="16" fill="#1C1C1C" />
          <path
            d="M68.5 14.8c-2.4-3.1-7.4-1.7-7.8 2.2L55.8 62H24.5c-4.4 0-6.8 5-4 8.5l39 49.9c2.4 3.1 7.4 1.7 7.8-2.2L72.2 73h31.3c4.4 0 6.8-5 4-8.5L68.5 14.8z"
            fill="#3ECF8E"
          />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <path
            d="M125.7 57.6L70.4 2.3c-3.1-3.1-8.1-3.1-11.2 0L47.7 13.8l14.4 14.4c3.3-1.1 7.2-.4 9.9 2.3 2.7 2.7 3.4 6.6 2.3 9.9l13.9 13.9c3.3-1.1 7.2-.4 9.9 2.3 3.8 3.8 3.8 10 0 13.8-3.8 3.8-10 3.8-13.8 0-2.8-2.8-3.5-7-1.9-10.4L65.4 46.2v31.7c1.1.5 2.1 1.3 2.9 2.1 3.8 3.8 3.8 10 0 13.8-3.8 3.8-10 3.8-13.8 0-3.8-3.8-3.8-10 0-13.8.9-.9 2-1.6 3.1-2.1V45.7c-1.1-.5-2.2-1.2-3.1-2.1-2.8-2.8-3.5-7-1.9-10.4L38.4 18.9 2.3 55c-3.1 3.1-3.1 8.1 0 11.2l55.3 55.3c3.1 3.1 8.1 3.1 11.2 0l56.9-56.9c3.1-3.1 3.1-8.1 0-11.2"
            fill="#F05032"
          />
        </svg>
      );

    case 'vite':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <path
            d="M121.2 16.5L68 116.3c-1.8 3.4-6.7 3.4-8.5 0L6.8 16.5c-2-3.8 1.4-8.2 5.5-7.3l50.8 11.4c.6.1 1.3.1 1.9 0L115.7 9.2c4.1-.9 7.5 3.5 5.5 7.3z"
            fill="url(#viteGradient)"
          />
          <path
            d="M74.8 13.8L40.9 69.2c-.7 1.2.3 2.7 1.7 2.5l25.8-3.2-12.8 38.6c-.6 1.8 1.7 3.2 2.9 1.8L93 54.3c.9-1.1.1-2.8-1.4-2.6l-23.7 2.5 16-37.9c.7-1.7-1.4-3.3-2.9-2.1l-6.2-.4z"
            fill="#FFD62E"
          />
          <defs>
            <linearGradient id="viteGradient" x1="10" y1="10" x2="110" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 38 57" className={className} width={size} height={size} fill="none">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
        </svg>
      );

    case 'linux':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="16" fill="#E8B400" />
          <path
            d="M64 20c-15 0-22 14-22 26 0 8 3 15 5 22-5 6-12 14-12 25 0 10 8 15 20 15 6 0 11-1 15-2 4 1 9 2 15 2 12 0 20-5 20-15 0-11-7-19-12-25 2-7 5-14 5-22 0-12-7-26-22-26z"
            fill="#111111"
          />
          <circle cx="56" cy="38" r="3.5" fill="#FFFFFF" />
          <circle cx="72" cy="38" r="3.5" fill="#FFFFFF" />
          <path d="M57 46c3 3 11 3 14 0l-7 8-7-8z" fill="#FFA500" />
        </svg>
      );

    case 'html5':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <path d="M19.1 11.2l9.1 102.2 35.8 9.9 35.8-9.9 9.1-102.2H19.1z" fill="#E44D26" />
          <path d="M64 115.8l28.6-7.9 7.7-86.7H64v94.6z" fill="#F16529" />
          <path d="M64 45.4H48.4l1.1 12.3H64v12.3H37.8l-3.3-37h59l-1.1 12.4H64zM64 86.6l-14.7-4-1-10.7H36l1.9 21.5L64 99.8v-13.2zm0-12.8h17.9l-1.7 18.8L64 96.6v-12.8z" fill="#EBEBEB" />
        </svg>
      );

    case 'css3':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <path d="M19.1 11.2l9.1 102.2 35.8 9.9 35.8-9.9 9.1-102.2H19.1z" fill="#1572B6" />
          <path d="M64 115.8l28.6-7.9 7.7-86.7H64v94.6z" fill="#33A9DC" />
          <path d="M64 45.4H48.4l1.1 12.3H64v12.3H37.8l-3.3-37h59l-1.1 12.4H64z" fill="#FFFFFF" />
        </svg>
      );

    case 'api':
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="#3b82f6" />
        </svg>
      );

    case 'premiere':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="28" fill="#00005B" />
          <text x="64" y="80" textAnchor="middle" fill="#EA77FF" fontSize="52" fontWeight="bold" fontFamily="sans-serif">
            Pr
          </text>
        </svg>
      );

    case 'aftereffects':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="28" fill="#00005B" />
          <text x="64" y="80" textAnchor="middle" fill="#9999FF" fontSize="52" fontWeight="bold" fontFamily="sans-serif">
            Ae
          </text>
        </svg>
      );

    case 'davinci':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="28" fill="#1A1A1A" />
          <circle cx="64" cy="48" r="18" fill="#E11D48" />
          <circle cx="48" cy="80" r="18" fill="#2563EB" />
          <circle cx="80" cy="80" r="18" fill="#F59E0B" />
        </svg>
      );

    case 'audition':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="28" fill="#00005B" />
          <text x="64" y="80" textAnchor="middle" fill="#00E5FF" fontSize="52" fontWeight="bold" fontFamily="sans-serif">
            Au
          </text>
        </svg>
      );

    case 'photoshop':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="28" fill="#001E36" />
          <text x="64" y="80" textAnchor="middle" fill="#31A8FF" fontSize="52" fontWeight="bold" fontFamily="sans-serif">
            Ps
          </text>
        </svg>
      );

    case 'illustrator':
      return (
        <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
          <rect width="128" height="128" rx="28" fill="#330000" />
          <text x="64" y="80" textAnchor="middle" fill="#FF9A00" fontSize="52" fontWeight="bold" fontFamily="sans-serif">
            Ai
          </text>
        </svg>
      );

    case 'design':
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" stroke="#8b5cf6" />
          <path d="m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16 3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" stroke="#8b5cf6" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="m9 9 6 6m0-6-6 6" />
        </svg>
      );
  }
}
