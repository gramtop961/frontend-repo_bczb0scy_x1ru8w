import React from 'react';
import HeroSection from './components/HeroSection';
import AboutCareerSection from './components/AboutCareerSection';
import ExperienceProjectsSection from './components/ExperienceProjectsSection';
import SkillsContactSection from './components/SkillsContactSection';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-inter">
      <HeroSection />
      <AboutCareerSection />
      <ExperienceProjectsSection />
      <SkillsContactSection />
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Aashik Khatri. Built with passion and precision.
      </footer>
    </div>
  );
}
