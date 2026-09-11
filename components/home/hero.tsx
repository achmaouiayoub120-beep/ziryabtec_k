"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Terminal, Cloud, ShieldCheck } from "lucide-react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════
   Bespoke Animation Curves & Physics
   ═══════════════════════════════════════════════════════ */
const CUSTOM_SPRING = {
  stiffness: 70,
  damping: 20,
  mass: 1.2
};

const STAGGER_DELAY = 0.15;

/* ═══════════════════════════════════════════════════════
   Parallax Container for the 3D Cards
   ═══════════════════════════════════════════════════════ */
function FloatingCardContainer({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [8, -8]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-8, 8]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
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
      className="relative w-full h-[600px] flex items-center justify-center perspective-[1200px]"
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 selection:bg-indigo-500/20 selection:text-indigo-900">
      
      {/* ────────────────────────────────────────────
          BACKGROUND: Subtle Ambient Mesh & Noise
          ──────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Very subtle ambient glowing orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-300/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/10 blur-[120px]" />
        
        {/* Ultra-fine noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence baseFrequency=%271.5%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* ────────────────────────────────────────────
              LEFT COLUMN: Editorial Typography
              ──────────────────────────────────────────── */}
          <div className="flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...CUSTOM_SPRING, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.02)] text-[13px] font-semibold text-slate-600 mb-8 w-fit tracking-wide uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Académie d'élite
            </motion.div>

            {/* Massive Kerned Headline */}
            <div className="mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...CUSTOM_SPRING, delay: 0.2 }}
                className="text-[4rem] sm:text-[5rem] lg:text-[5.5rem] font-bold font-heading leading-none tracking-tighter text-slate-900 mb-2"
              >
                L'Excellence
              </motion.h1>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...CUSTOM_SPRING, delay: 0.3 }}
                className="text-[4rem] sm:text-[5rem] lg:text-[5.5rem] font-bold font-heading leading-none tracking-tighter"
              >
                {/* sophisticated fluid gradient text mask */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] animate-[gradient-slide_4s_linear_infinite] pb-2 inline-block">
                  Technologique.
                </span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...CUSTOM_SPRING, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 leading-[1.6] max-w-lg mb-10 font-medium tracking-tight"
            >
              Formez-vous aux métiers du futur. Maîtrisez le Cloud, la Cybersécurité et l'ingénierie logicielle avec les meilleurs experts de l'industrie au Maroc.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...CUSTOM_SPRING, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/formations"
                className="relative h-14 px-8 rounded-full bg-slate-900 text-white font-semibold text-[15px] flex items-center justify-center shadow-[0_8px_30px_rgba(15,23,42,0.2)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-white/20" />
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir les programmes
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link 
                href="/contact"
                className="relative h-14 px-8 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.02)] text-slate-700 font-semibold text-[15px] flex items-center justify-center hover:bg-white/80 transition-colors duration-300"
              >
                Parler à un conseiller
              </Link>
            </motion.div>
          </div>

          {/* ────────────────────────────────────────────
              RIGHT COLUMN: 3D Asymmetric Bento Cluster
              ──────────────────────────────────────────── */}
          <div className="relative hidden lg:block">
            <FloatingCardContainer>
              
              {/* Card 1: Sleek Mini-Terminal (Center/Back) */}
              <motion.div 
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...CUSTOM_SPRING, delay: 0.6 + STAGGER_DELAY * 0 }}
                style={{ transform: "translateZ(-40px)" }}
                className="absolute top-[10%] left-[10%] z-10 w-[380px] rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-[10px] font-mono text-white/40 tracking-wider">server.ts — Full Stack JS</span>
                </div>
                {/* Terminal Body */}
                <div className="p-5 font-mono text-[12px] leading-relaxed text-slate-300">
                  <span className="text-purple-400">import</span> {"{ "} <span className="text-yellow-200">ZiryabApp</span> {" }"} <span className="text-purple-400">from</span> <span className="text-green-300">'@core'</span>;
                  <br/><br/>
                  <span className="text-blue-400">const</span> <span className="text-slate-100">app</span> = <span className="text-pink-400">new</span> <span className="text-yellow-200">ZiryabApp</span>({"{ "}
                  <br/>
                  &nbsp;&nbsp;engine: <span className="text-green-300">'next.js'</span>,
                  <br/>
                  &nbsp;&nbsp;performance: <span className="text-orange-300">99.9</span>
                  <br/>
                  {"}"});
                  <br/><br/>
                  <span className="text-slate-100">app</span>.<span className="text-yellow-200">deploy</span>().<span className="text-blue-300">then</span>(() <span className="text-purple-400">=&gt;</span> {"{"}
                  <br/>
                  &nbsp;&nbsp;console.<span className="text-blue-300">log</span>(<span className="text-green-300">"Future Ready 🚀"</span>);
                  <br/>
                  {"}"});
                </div>
              </motion.div>

              {/* Card 2: Minimalist Stat Card (Bottom Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...CUSTOM_SPRING, delay: 0.6 + STAGGER_DELAY * 1 }}
                style={{ transform: "translateZ(30px)" }}
                className="absolute bottom-[20%] right-0 z-30 w-[240px] p-5 rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_20px_40px_-10px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                    <Cloud className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Infrastructure
                  </div>
                </div>
                <div className="text-2xl font-bold font-heading text-slate-900 leading-none mb-1">
                  AWS Certified
                </div>
                <p className="text-[13px] text-slate-500 font-medium">Solutions Architect Expert.</p>
              </motion.div>

              {/* Card 3: Frosted Glass Pill (Top Right/Center) */}
              <motion.div 
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...CUSTOM_SPRING, delay: 0.6 + STAGGER_DELAY * 2 }}
                style={{ transform: "translateZ(80px)" }}
                className="absolute top-[40%] -right-[10%] z-40 px-5 py-4 rounded-full bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_12px_30px_-5px_rgba(0,0,0,0.1)] flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div className="pr-2">
                  <div className="text-[14px] font-bold text-slate-900 leading-tight">Cyber Defense</div>
                  <div className="text-[11px] font-medium text-emerald-600 uppercase tracking-widest">Secured</div>
                </div>
              </motion.div>

            </FloatingCardContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
