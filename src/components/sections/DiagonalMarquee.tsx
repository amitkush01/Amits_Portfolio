"use client";

import { Cpu } from "lucide-react";

export default function DiagonalMarquee() {
  const words = [
    "BUILDING THE FUTURE",
    "WRITING CLEAN CODE",
    "SCALABLE ARCHITECTURE",
    "SOLVING COMPLEX PROBLEMS",
    "CREATING DIGITAL EXPERIENCES",
  ];

  return (
    <section className="py-8 bg-transparent relative overflow-hidden border-y border-blue-500/20">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="relative flex overflow-x-hidden">
        <div className="py-2 animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...words, ...words, ...words].map((word, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="text-sm font-black uppercase tracking-[0.25em] bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {word}
              </span>
              <Cpu className="w-4 h-4 text-purple-500 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
