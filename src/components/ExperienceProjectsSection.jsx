import React from 'react';
import { Briefcase, Award, Rocket, ExternalLink } from 'lucide-react';

const ExperienceItem = ({ role, org, children }) => (
  <div className="rounded-xl border border-cyan-400/30 bg-slate-900/40 p-5 backdrop-blur">
    <div className="flex items-center gap-3">
      <Briefcase className="h-5 w-5 text-cyan-300" />
      <h4 className="text-lg font-semibold text-white">{role} — <span className="text-slate-300">{org}</span></h4>
    </div>
    <p className="mt-2 text-slate-300 leading-relaxed">{children}</p>
  </div>
);

const ProjectCard = ({ title, desc }) => (
  <div className="group rounded-xl border border-cyan-400/30 bg-slate-900/40 p-5 backdrop-blur transition hover:border-cyan-300/60">
    <div className="flex items-start justify-between">
      <div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="mt-1 text-slate-300">{desc}</p>
      </div>
      <ExternalLink className="mt-1 h-4 w-4 text-cyan-300 opacity-70 group-hover:opacity-100" />
    </div>
    <button className="mt-4 inline-flex items-center gap-2 rounded-md border border-cyan-400/40 px-3 py-1.5 text-sm text-cyan-300 transition hover:border-cyan-300 hover:text-white">
      View details
      <Rocket className="h-3.5 w-3.5" />
    </button>
  </div>
);

export default function ExperienceProjectsSection() {
  return (
    <section id="experience" className="relative w-full bg-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Experience</h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-full" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ExperienceItem role="Media Manager" org="KUrautey (Local News Outlet)">
            Managed media outreach, digital strategy, and communication. Learned public engagement, content delivery, and data forensics. Built skills in coordination, adaptability, and content optimization for digital audiences.
          </ExperienceItem>
          <ExperienceItem role="Creative Developer" org="Thinkniti">
            Designed visual posts, wrote creative content, and maintained digital presence. Improved teamwork, creative direction, and leadership by managing online platforms. Combined design thinking with technical problem-solving to deliver effective campaigns.
          </ExperienceItem>
          <ExperienceItem role="Independent Projects & Learning" org="Self-Directed">
            Built small-scale websites, explored AI-driven chatbots, automated data dashboards, and experimented with cybersecurity simulations. Gained insights into system security, data visualization, and creative AI workflows.
          </ExperienceItem>
          <div className="rounded-xl border border-cyan-400/30 bg-slate-900/40 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-cyan-300" />
              <h4 className="text-lg font-semibold text-white">Achievements & Recognition</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-slate-300">
              <li>Strong English communication proven by PTE Score 87.</li>
              <li>Recognized in school for creativity, technical curiosity, and leadership.</li>
              <li>Contributed to multiple team-based tech and media initiatives.</li>
            </ul>
          </div>
        </div>

        <div id="projects" className="mt-14">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Projects Portfolio</h3>
            <p className="mt-2 text-slate-300">Explorations that blend code, design, and intelligence.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard title="AI Chatbot Assistant" desc="Experimental chatbot for interactive learning." />
            <ProjectCard title="Smart Data Dashboard" desc="Real-time analytics and visualization system." />
            <ProjectCard title="News Automation Tool" desc="Media-content auto-delivery project." />
            <ProjectCard title="Personal Portfolio Website" desc="Design and structure by Aashik Khatri." />
          </div>
        </div>
      </div>
    </section>
  );
}
