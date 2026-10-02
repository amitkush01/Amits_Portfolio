"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SweetBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep soft dark base */}
      <div className="absolute inset-0 bg-[#050816]" />
      
      {/* Beautiful Sweet Gradient Orbs */}
      <div className="absolute -top-[10%] left-[10%] w-[700px] h-[700px] bg-rose-500/10 rounded-full blur-[140px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute -bottom-[10%] left-[30%] w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '9s', animationDelay: '4s' }} />
      
      {/* Tiny floating magical dust (sweet particles) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-300/40 blur-[1px]"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Subtle Starry mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
}
