"use client";

import { Code2, Terminal, Cpu, Database, Globe, Server, GitBranch, Wifi, Monitor, BrainCircuit, CloudCog, Layers } from "lucide-react";

const icons = [
  { Icon: Code2, label: "Code", color: "text-blue-400" },
  { Icon: Terminal, label: "Terminal", color: "text-cyan-400" },
  { Icon: Cpu, label: "Processor", color: "text-purple-400" },
  { Icon: Database, label: "Database", color: "text-emerald-400" },
  { Icon: Globe, label: "Web", color: "text-sky-400" },
  { Icon: Server, label: "Server", color: "text-rose-400" },
  { Icon: GitBranch, label: "Version Control", color: "text-orange-400" },
  { Icon: Monitor, label: "UI/UX", color: "text-teal-400" },
  { Icon: BrainCircuit, label: "AI", color: "text-violet-400" },
  { Icon: CloudCog, label: "Cloud", color: "text-indigo-400" },
  { Icon: Layers, label: "Stack", color: "text-yellow-400" },
  { Icon: Wifi, label: "Network", color: "text-pink-400" },
];

export default function FloatingOrbsDivider() {
  const doubled = [...icons, ...icons, ...icons];

  return (
    <section className="py-4 bg-transparent relative overflow-hidden border-y border-slate-800/60">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="relative flex overflow-x-hidden">
        <div className="py-1 animate-marquee whitespace-nowrap flex items-center gap-4">
          {doubled.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-slate-800 hover:border-slate-600 transition-all duration-300 group cursor-default ${item.color}`}
              >
                <Icon className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
