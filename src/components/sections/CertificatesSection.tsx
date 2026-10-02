"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { CERTIFICATES, ACHIEVEMENTS } from "@/data/portfolioData";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-lg font-mono font-extrabold tracking-widest uppercase tracking-wider">
            <Award className="w-6 h-6" /> Industry Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Global certifications in Generative AI, Cloud Infrastructure, Database Engineering, and competitive hackathons.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.01, translateY: -4 }}
              className="glass-panel rounded-3xl p-4 sm:p-5 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-2.5 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-mono text-amber-300 font-semibold uppercase">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 text-xs font-mono">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>

                {cert.image && (
                  <div className={`mt-3 rounded-xl overflow-hidden border border-slate-700/50 relative shadow-sm mx-auto ${
                    cert.id === 'cisco-cybersecurity' ? 'w-[90%] sm:w-[80%]' :
                    (cert.id === 'ncat-2026' || cert.id === 'mindhack-2025') ? 'w-[95%] sm:w-[90%] h-64' :
                    'w-[95%] sm:w-[90%]'
                  }`}>
                    <img src={cert.image} alt={cert.title} className={`w-full hover:scale-105 transition-transform duration-500 ${
                      (cert.id === 'ncat-2026' || cert.id === 'mindhack-2025') ? 'h-full object-cover object-top' : 'h-auto object-cover'
                    }`} />
                  </div>
                )}

                {cert.description && (
                  <div className="mt-2.5 text-sm text-slate-300 font-medium whitespace-pre-line leading-relaxed">
                    {cert.description}
                  </div>
                )}

                <div className="mt-2.5 space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Skills Validated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">ID: {cert.credentialId}</span>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-white font-semibold transition-colors"
                  >
                    Verify Credential <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Banner */}
        <div className="glass-panel rounded-3xl p-4 sm:p-5 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5">
            <Trophy className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold text-white">Honors & Competitions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.id} className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-lg font-mono font-extrabold tracking-widest">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  {ach.badge}
                </div>
                <h4 className="text-base font-bold text-white">{ach.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
                <div className="text-[11px] text-slate-500 font-mono">{ach.organization} • {ach.date}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
