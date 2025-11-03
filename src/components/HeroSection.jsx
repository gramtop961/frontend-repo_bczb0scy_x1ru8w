import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Instagram, Mail, ArrowRight, Download } from 'lucide-react';

const SocialLink = ({ href, children, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-cyan-400/40 text-cyan-300 hover:text-white hover:border-cyan-300 transition-colors duration-200"
  >
    {children}
  </a>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle glow overlays */}
      <div className="pointer-events-none absolute -inset-x-10 -top-10 h-72 blur-3xl opacity-60" aria-hidden>
        <div className="mx-auto h-full max-w-4xl rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-400/10 to-purple-500/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-slate-900/40 px-3 py-1 text-xs tracking-wide text-cyan-300 shadow-sm backdrop-blur">
            Futuristic • Minimal • Impact-driven
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Aashik Khatri — Aspiring Computer Scientist | Developer | Creative Technologist.
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Turning ideas into digital impact through innovation and intelligence.
          </p>
          <p className="mt-4 max-w-2xl text-slate-300">
            I’m Aashik Khatri — a young technologist from Nepal who discovered his love for computers in class 5. What started as curiosity became a purpose: to build intelligent, creative, and data-driven solutions that make life smarter. I’m focused on using technology not just as a tool, but as a way to connect people, solve problems, and inspire progress.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/Aashik_Khatri_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              download
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-slate-900/50 px-5 py-3 text-sm font-medium text-cyan-300 backdrop-blur transition hover:border-cyan-300 hover:text-white"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="ml-2 flex items-center gap-2">
              <SocialLink href="https://www.linkedin.com" label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://github.com" label="GitHub">
                <Github className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com" label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="mailto:aashikkc2@gmail.com" label="Email">
                <Mail className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
