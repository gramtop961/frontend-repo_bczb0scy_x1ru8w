import React from 'react';

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-slate-300">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-full" />
    </div>
  );
}

export default function AboutCareerSection() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <SectionTitle title="Career Objective" />
            <p className="text-slate-300 leading-relaxed">
              To work with forward-thinking organizations where technology, creativity, and human insight intersect. My ambition is to apply skills in AI, data science, cybersecurity, and web development to build systems that enhance efficiency, empower users, and drive innovation. I’m eager to contribute to meaningful projects, grow through collaboration, and lead with curiosity and integrity.
            </p>
          </div>
          <div>
            <SectionTitle title="About Me" />
            <p className="text-slate-300 leading-relaxed">
              I’m driven by the belief that technology can change how we live, learn, and connect. Pursuing Computer Science as my major in classes 11 and 12 (under the science stream with Math, Physics, and Chemistry) deepened my logical and analytical skills. I enjoy exploring AI models, data structures, network systems, and cybersecurity — always learning through hands-on practice and real-world challenges.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-cyan-400/30 bg-slate-900/40 p-5 backdrop-blur">
            <p className="text-sm text-slate-400">Class 10 GPA</p>
            <p className="mt-1 text-2xl font-semibold text-white">3.45</p>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-slate-900/40 p-5 backdrop-blur">
            <p className="text-sm text-slate-400">Class 11 GPA</p>
            <p className="mt-1 text-2xl font-semibold text-white">2.91</p>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-slate-900/40 p-5 backdrop-blur">
            <p className="text-sm text-slate-400">Class 12 GPA</p>
            <p className="mt-1 text-2xl font-semibold text-white">3.25</p>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-slate-900/40 p-5 backdrop-blur">
            <p className="text-sm text-slate-400">PTE Score</p>
            <p className="mt-1 text-2xl font-semibold text-white">87</p>
            <p className="text-xs text-cyan-300">Proficient English User</p>
          </div>
        </div>
      </div>
    </section>
  );
}
