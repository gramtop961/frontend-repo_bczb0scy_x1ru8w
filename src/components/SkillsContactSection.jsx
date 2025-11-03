import React from 'react';
import { Shield, Network, Code2, Cpu, PenTool, FileText, Users, Clock, Brain, Send } from 'lucide-react';

const SkillBadge = ({ label, level }) => (
  <div className="flex items-center justify-between rounded-lg border border-cyan-400/30 bg-slate-900/40 px-4 py-3 text-slate-200">
    <span className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px] shadow-cyan-400" />
      {label}
    </span>
    <span className="text-sm text-cyan-300">{level}</span>
  </div>
);

export default function SkillsContactSection() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Key Skills</h2>
          <p className="mt-2 text-slate-300">Blending technical depth with creative thinking and leadership.</p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <SkillBadge label="AI / Machine Learning" level="Intermediate" />
            <SkillBadge label="Data Science" level="Intermediate" />
            <SkillBadge label="Cybersecurity" level="Foundational" />
            <SkillBadge label="Networking" level="Foundational" />
          </div>
          <div className="space-y-3">
            <SkillBadge label="Web Development (HTML/CSS/JS)" level="Intermediate" />
            <SkillBadge label="Python" level="Intermediate" />
            <SkillBadge label="JavaScript" level="Intermediate" />
            <SkillBadge label="Creative Digital Design" level="Strong" />
          </div>
          <div className="space-y-3">
            <SkillBadge label="Leadership" level="Strong" />
            <SkillBadge label="Communication" level="Strong" />
            <SkillBadge label="Critical Thinking" level="Strong" />
            <SkillBadge label="Collaboration & Time Management" level="Strong" />
          </div>
        </div>

        <div id="contact" className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/40 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Let’s build something impactful</h3>
            <p className="mt-2 text-slate-300">
              I’m open to internships, collaborations, and mentorships in AI, data, cybersecurity, and full‑stack development.
            </p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><Cpu className="h-4 w-4 text-cyan-300" /> AI & Data Projects</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-cyan-300" /> Cybersecurity & Networks</li>
              <li className="flex items-center gap-2"><Code2 className="h-4 w-4 text-cyan-300" /> Web Development</li>
              <li className="flex items-center gap-2"><PenTool className="h-4 w-4 text-cyan-300" /> Creative Tech + Content</li>
              <li className="flex items-center gap-2"><Users className="h-4 w-4 text-cyan-300" /> Team Collaboration</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-cyan-300" /> Part‑time / Project‑based</li>
            </ul>
            <div className="mt-6 rounded-lg border border-cyan-400/30 bg-slate-950/60 p-4 text-slate-200">
              <p className="text-sm">Email</p>
              <a href="mailto:aashikkc2@gmail.com" className="text-cyan-300 hover:text-white transition">aashikkc2@gmail.com</a>
            </div>
          </div>

          <form className="rounded-2xl border border-cyan-400/30 bg-slate-900/40 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Contact Form</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-slate-700/60 bg-slate-950 px-3 py-2 text-slate-200 outline-none ring-0 focus:border-cyan-400" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-slate-700/60 bg-slate-950 px-3 py-2 text-slate-200 outline-none ring-0 focus:border-cyan-400" placeholder="name@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border border-slate-700/60 bg-slate-950 px-3 py-2 text-slate-200 outline-none ring-0 focus:border-cyan-400" placeholder="Tell me about your project or opportunity..." />
            </div>
            <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
              <Send className="h-4 w-4" />
              Send Message
            </button>
            <p className="mt-3 text-xs text-slate-400">This demo form doesn’t send emails yet. Use the email address for direct contact.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
