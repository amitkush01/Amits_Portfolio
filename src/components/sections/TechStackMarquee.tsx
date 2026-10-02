"use client";

import { Cpu, Terminal, Code2, Server, Database, Cloud } from "lucide-react";

export default function TechStackMarquee() {
  const techLogos = [
    { name: "Java", category: "Core Backend & DSA" },
    { name: "C++", category: "Algorithms & Systems" },
    { name: "React.js", category: "Frontend UI" },
    { name: "Next.js", category: "Full Stack App Router" },
    { name: "Python", category: "Scripting & AI" },
    { name: "Node.js", category: "Server Runtime" },
    { name: "Express.js", category: "REST APIs" },
    { name: "MongoDB", category: "NoSQL Database" },
    { name: "MySQL", category: "Relational DB" },
    { name: "Firebase", category: "Realtime & Auth" },
    { name: "AWS Cloud", category: "Generative AI & Cloud" },
    { name: "Tailwind CSS", category: "Styling System" },
    { name: "Git & GitHub", category: "Version Control" },
  ];

  return (
    <section className="py-3 border-y border-slate-800/80 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-1 text-center">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
          // Powered By Modern Technologies
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="py-1 animate-marquee whitespace-nowrap flex items-center gap-6">
          {techLogos.concat(techLogos).map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group cursor-default"
            >
              <Code2 className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
