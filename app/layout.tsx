import type { Metadata } from 'next';
import { Geist, Geist_Mono, Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ThemeProvider } from '@/components/ThemeProvider';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hamza Teha — Freelance Full-Stack Developer',
  description:
    'Hamza Teha is a Freelance Full-Stack Developer and Third-Year Information Technology Student at Haramaya University, Ethiopia, specializing in resilient web applications, robust backend architectures, and clean interactive user experiences.',
  keywords: [
    'Hamza Teha',
    'Freelance Full-Stack Developer',
    'Full-Stack Developer',
    'Software Engineer',
    'React Developer',
    'Node.js Developer',
    'Next.js Developer',
    'Haramaya University',
    'Information Technology Student',
    'Web Application Architecture',
    'REST API',
    'Ethiopia Developer',
  ],
  authors: [{ name: 'Hamza Teha' }],
  creator: 'Hamza Teha',
  metadataBase: new URL('https://hamzateha.dev'),
  openGraph: {
    title: 'Hamza Teha — Freelance Full-Stack Developer',
    description:
      'Freelance Full-Stack Developer & Third-Year Information Technology Student at Haramaya University, Ethiopia.',
    url: 'https://hamzateha.dev',
    siteName: 'Hamza Teha Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Teha — Freelance Full-Stack Developer',
    description:
      'Freelance Full-Stack Developer & Third-Year Information Technology Student at Haramaya University, Ethiopia.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PORTFOLIO_DATA.brand.name,
    jobTitle: PORTFOLIO_DATA.brand.title,
    description: PORTFOLIO_DATA.brand.subheadline,
    url: 'https://hamzateha.dev',
    affiliation: {
      '@type': 'EducationalOrganization',
      name: 'Haramaya University, Ethiopia',
    },
    sameAs: [
      PORTFOLIO_DATA.brand.github,
      PORTFOLIO_DATA.brand.linkedin,
      PORTFOLIO_DATA.brand.telegram,
    ],
    knowsAbout: [
      'Full-Stack Web Development',
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'REST APIs',
      'TypeScript',
      'MySQL',
      'Database Architecture',
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        {/* Synchronous script to prevent flash of wrong theme (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var stored = localStorage.getItem('theme');
                if (stored === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e){}
            })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f7f6f2] dark:bg-[#0e1013] text-[#0f1012] dark:text-[#f3f4f6] font-sans-body selection:bg-[#0f1012] dark:selection:bg-[#f3f4f6] selection:text-[#f7f6f2] dark:selection:text-[#0e1013] overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
