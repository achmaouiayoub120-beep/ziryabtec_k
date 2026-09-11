"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Code2, Terminal, Shield, CheckCircle2, Cloud } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════
   Bespoke Animation Curves
   ═══════════════════════════════════════════════════════ */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/* ═══════════════════════════════════════════════════════
   Parallax Card Component for the 3D effect
   ═══════════════════════════════════════════════════════ */
function ParallaxCard({ 
  children, 
  className, 
  depth = 1 
}: { 
  children: React.ReactNode; 
  className?: string;
  depth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-100, 100], [10 * depth, -10 * depth]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10 * depth, 10 * depth]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scrolling for background elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden bg-background selection:bg-primary/20 selection:text-primary-dark"
    >
      {/* ────────────────────────────────────────────
          GLOBAL BACKGROUND: Ethereal Mesh & Noise
          ──────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Animated Mesh Gradients */}
        <motion.div style={{ y: y1 }} className="absolute -top-[10%] -right-[5%] w-[55%] h-[60%] rounded-full bg-primary/10 blur-[120px] animate-mesh-1" />
        <motion.div style={{ y: y2 }} className="absolute top-[40%] -left-[10%] w-[45%] h-[55%] rounded-full bg-secondary/10 blur-[130px] animate-mesh-2" />
        <div className="absolute bottom-[10%] left-[30%] w-[35%] h-[35%] rounded-full bg-accent/5 blur-[100px] animate-mesh-3" />
        
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* ────────────────────────────────────────────
              LEFT COLUMN: Massive Typography
              ──────────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-white/60 text-primary-dark text-sm font-semibold mb-8 w-fit shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Rentrée 2026 : Inscriptions ouvertes
            </motion.div>

            {/* Staggered Text Reveal */}
            <div className="flex flex-col gap-1 mb-8">
              <div className="overflow-hidden pb-2">
                <motion.h1 
                  initial={{ y: "110%", rotate: 2 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
                  className="text-[4rem] sm:text-[5.5rem] lg:text-[6.5rem] font-black font-heading leading-[0.9] tracking-[-0.04em] text-foreground"
                >
                  Façonnez
                </motion.h1>
              </div>
              <div className="overflow-hidden pb-2">
                <motion.h1 
                  initial={{ y: "110%", rotate: 2 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.1, ease: EASE_OUT_EXPO }}
                  className="text-[4rem] sm:text-[5.5rem] lg:text-[6.5rem] font-black font-heading leading-[0.9] tracking-[-0.04em]"
                >
                  le futur <span className="text-gradient italic pr-4">digital.</span>
                </motion.h1>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE_OUT_EXPO }}
              className="text-lg sm:text-xl text-muted leading-[1.7] max-w-xl mb-12 font-medium"
            >
              ZiryabTec est l'académie d'élite certifiante. Maîtrisez l'architecture Cloud, 
              la Cybersécurité offensive et l'IA avec les plus grands experts de l'industrie.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE_OUT_EXPO }}
              className="flex flex-col sm:flex-row gap-5"
            >
              {/* Primary Premium Button */}
              <Link 
                href="/formations"
                className="relative h-14 px-8 rounded-full bg-foreground text-white font-semibold text-[15px] overflow-hidden group flex items-center justify-center shadow-elevated hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-0.5"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-white/20" />
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir les programmes
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.22,0.68,0,1)] group-hover:translate-x-1.5" />
                </span>
              </Link>

              {/* Secondary Glass Button */}
              <Link 
                href="/contact"
                className="relative h-14 px-8 rounded-full glass-panel text-foreground font-semibold text-[15px] flex items-center justify-center hover:bg-white/80 transition-colors duration-300 group"
              >
                Planifier un appel
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: EASE_OUT_EXPO }}
              className="mt-14 flex items-center gap-5"
            >
              <div className="flex -space-x-3">
                {[
                  "https://i.pravatar.cc/100?img=11",
                  "https://i.pravatar.cc/100?img=32",
                  "https://i.pravatar.cc/100?img=47",
                  "https://i.pravatar.cc/100?img=68"
                ].map((src, i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={src} alt="Alumni" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-500">
                Rejoignez <span className="text-foreground font-bold">+500 alumni</span><br/>placés dans la tech.
              </div>
            </motion.div>
          </div>

          {/* ────────────────────────────────────────────
              RIGHT COLUMN: 3D Floating Bento Cards
              ──────────────────────────────────────────── */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center h-[700px] perspective-1000">
            
            <div className="relative w-full max-w-[480px] h-[550px]">
              
              {/* Back ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />

              {/* Card 1: Cloud Architecture (Top Right) */}
              <ParallaxCard depth={0.8} className="absolute top-0 right-0 z-20">
                <motion.div 
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: EASE_OUT_EXPO }}
                  className="glass-panel w-64 p-5 rounded-[24px] shadow-elevated"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-md">AWS</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">Cloud Architect</h3>
                  <p className="text-xs text-muted mb-4">Déploiement d'infrastructure multi-AZ à haute disponibilité.</p>
                  
                  {/* Fake progress bar */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              </ParallaxCard>

              {/* Card 2: Cyber Security (Bottom Left) */}
              <ParallaxCard depth={1.2} className="absolute bottom-10 -left-8 z-30">
                <motion.div 
                  initial={{ opacity: 0, y: -40, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: EASE_OUT_EXPO }}
                  className="glass-panel w-72 p-5 rounded-[24px] shadow-elevated border-green-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 flex-shrink-0">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-1">Offensive Security</h3>
                      <div className="flex flex-col gap-2 mt-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Bypass WAF
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Privilege Escalation
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ParallaxCard>

              {/* Card 3: Code Snippet (Center Right) */}
              <ParallaxCard depth={1.5} className="absolute top-[45%] -right-12 z-40">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: EASE_OUT_EXPO }}
                  className="bg-[#0D1117] border border-white/10 w-72 p-5 rounded-[24px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="font-mono text-[11px] leading-relaxed">
                    <span className="text-pink-400">import</span> <span className="text-blue-300">{"{ ZiryabTec }"}</span> <span className="text-pink-400">from</span> <span className="text-green-300">"@future/tech"</span>;
                    <br/><br/>
                    <span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-purple-400">=</span> <span className="text-pink-400">new</span> <span className="text-yellow-200">ZiryabTec</span>();
                    <br/>
                    <span className="text-blue-300">developer</span>.<span className="text-yellow-200">masterSkills</span>([
                    <br/>
                    &nbsp;&nbsp;<span className="text-green-300">"React"</span>, <span className="text-green-300">"Node.js"</span>, <span className="text-green-300">"AWS"</span>
                    <br/>
                    ]);
                  </div>
                </motion.div>
              </ParallaxCard>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
