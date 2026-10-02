"use client";

import { FileCode2, Braces, Binary, Hash, SquareCode, FunctionSquare, Bug, Webhook, ShieldCheck, PackageOpen, Blocks, Settings2 } from "lucide-react";

const devIcons = [
  { Icon: FileCode2, label: "Source File", color: "text-blue-400" },
  { Icon: Braces, label: "JSON / Object", color: "text-cyan-400" },
  { Icon: Binary, label: "Binary", color: "text-purple-400" },
  { Icon: Hash, label: "Algorithm", color: "text-emerald-400" },
  { Icon: SquareCode, label: "Component", color: "text-sky-400" },
  { Icon: FunctionSquare, label: "Function", color: "text-rose-400" },
  { Icon: Bug, label: "Debugging", color: "text-orange-400" },
  { Icon: Webhook, label: "API Hook", color: "text-teal-400" },
  { Icon: ShieldCheck, label: "Security", color: "text-violet-400" },
  { Icon: PackageOpen, label: "Package", color: "text-indigo-400" },
  { Icon: Blocks, label: "Module", color: "text-yellow-400" },
  { Icon: Settings2, label: "Config", color: "text-pink-400" },
];

export default function CyberGridDivider() {
  const doubled = [...devIcons, ...devIcons, ...devIcons];

  return (
    <section className="py-4 bg-transparent relative overflow-hidden border-y border-slate-800/60">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Left to right direction */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-1 animate-marquee-reverse whitespace-nowrap flex items-center gap-4">
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
