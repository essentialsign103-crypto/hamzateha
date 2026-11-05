import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ToolsSection } from '@/components/ToolsSection';
import { SelectedWork } from '@/components/SelectedWork';
import { ServicesList } from '@/components/ServicesList';
import { ContactBento } from '@/components/ContactBento';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f7f6f2] dark:bg-[#0e1013] text-[#0f1012] dark:text-[#f3f4f6] selection:bg-[#0f1012] dark:selection:bg-[#f3f4f6] selection:text-[#f7f6f2] dark:selection:text-[#0e1013] transition-colors duration-300">
      {/* 00. Floating Navigation (Ref: miftahfentaw.site) */}
      <Navbar />

      {/* Main Orchestration */}
      <main id="main-content" className="relative">
        {/* 01. Hero (PROTECTED — 100% READ ONLY) */}
        <HeroSection />

        {/* 02. About Section (Ref: miftahfentaw.site #about) */}
        <AboutSection />

        {/* 03. Experience Timeline (Ref: miftahfentaw.site #experience) */}
        <ExperienceSection />

        {/* 04. Tools & Technologies (Ref: miftahfentaw.site #tools) */}
        <ToolsSection />

        {/* 05. Portfolio / Selected Work (Ref: miftahfentaw.site #work) */}
        <SelectedWork />

        {/* 06. Services / What I Do (Ref: miftahfentaw.site #services) */}
        <ServicesList />

        {/* 07. Contact & Available for Hire Banner (Ref: miftahfentaw.site #contact) */}
        <ContactBento />
      </main>

      {/* 08. Footer with Name Art (Ref: miftahfentaw.site footer) */}
      <Footer />
    </div>
  );
}
