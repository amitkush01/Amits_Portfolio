"use client";

import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    // Increase count slightly for the "ash" feel
    const particleCount = Math.min(Math.floor(width / 10), 120);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      color: string;
      sway: number; // For side-to-side sway
      angle: number; // For sway calculation

      constructor(isRespawn = false) {
        this.x = Math.random() * width;
        // If respawning, start from bottom. If initializing, anywhere on screen.
        this.y = isRespawn ? height + 10 : Math.random() * height;
        
        // Ash drifts upwards slowly (very slow speed requested)
        this.vy = -(Math.random() * 0.15 + 0.05); 
        this.vx = (Math.random() - 0.5) * 0.2;
        
        // Ash particles vary in size
        this.size = Math.random() * 2.5 + 0.5;
        
        this.baseAlpha = Math.random() * 0.6 + 0.2;
        this.alpha = isRespawn ? 0 : this.baseAlpha; // fade in if respawned
        
        this.sway = Math.random() * 0.01; // Slower sway
        this.angle = Math.random() * Math.PI * 2; // Initial angle

        // Ash colors but with the requested blue/white space theme
        const colors = ["#ffffff", "#ffffff", "#ffffff", "#93c5fd", "#60a5fa", "#3b82f6", "#06b6d4"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Sway side to side like ash
        this.angle += this.sway;
        this.x += this.vx + Math.sin(this.angle) * 0.3;
        
        // Float upwards
        this.y += this.vy;

        // Fade out slightly as it reaches the top
        if (this.y < height * 0.2) {
          this.alpha = Math.max(0, this.alpha - 0.005);
        } else if (this.alpha < this.baseAlpha) {
          this.alpha = Math.min(this.baseAlpha, this.alpha + 0.01);
        }

        // Reset if it goes off screen
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          Object.assign(this, new Particle(true));
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        // Glow effect
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting straight lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 120) * 0.25; 
            ctx.strokeStyle = "#60a5fa"; // soft blue line
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#000000]">
      {/* Little Blue Light mix with Black Space */}
      <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-800/15 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] bg-indigo-800/15 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-cyan-800/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '15s', animationDelay: '5s' }} />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-80"
      />
    </div>
  );
}
