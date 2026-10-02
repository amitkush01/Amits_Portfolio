"use client";

import { ArrowUp, Mail, ShieldCheck } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface FooterProps {
  onOpenRecruiterModal: () => void;
}

export default function Footer({ onOpenRecruiterModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#040612] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-bold text-white tracking-tight">{PERSONAL_INFO.name}</span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-blue-400 font-mono">B.Tech CSE (2023-2027)</span>
          </div>
          <p className="text-xs text-slate-500">
            CGC Landran (IKGPTU) • Full Stack Developer & Java DSA Enthusiast
          </p>
        </div>

        {/* Center Recruiter Trigger & Socials */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onOpenRecruiterModal}
            className="text-[11px] font-mono text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            Recruiter ATS Summary View
          </button>
        </div>

        {/* Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-600 font-mono hidden sm:inline">
            Designed for Product Companies
          </span>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
