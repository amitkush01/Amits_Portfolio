"use client";

import { motion } from "framer-motion";
import { MessageSquare, Quote, Star, User } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolioData";
import MouseParticles from "@/components/ui/MouseParticles";

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-lg font-mono font-extrabold tracking-widest uppercase tracking-wider">
            <MessageSquare className="w-6 h-6" /> Endorsements & Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Mentors & Peers <span className="gradient-text">Say</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Testimonials from professors, hackathon teammates, and technical mentors.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6 relative group hover:border-purple-500/40 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-purple-500/30 group-hover:text-purple-400 transition-colors" />

              <p className="text-sm text-slate-300 italic leading-relaxed">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 font-bold">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-slate-400 font-mono">{t.role} • {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
