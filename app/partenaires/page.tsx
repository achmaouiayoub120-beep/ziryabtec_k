"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Users, Shield, Globe, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════
   Bespoke Animation Curves
   ═══════════════════════════════════════════════════════ */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/* ═══════════════════════════════════════════════════════
   Logos Tech via CDN (Devicon)
   ═══════════════════════════════════════════════════════ */
const techLogos = [
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
];

export default function PartenairesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      
      {/* ────────────────────────────────────────────
          GLOBAL BACKGROUND: Mesh & Noise
          ──────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none fixed">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] rounded-full bg-blue-400/[0.08] blur-[120px] animate-mesh-1" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[60%] rounded-full bg-violet-400/[0.06] blur-[100px] animate-mesh-2" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence baseFrequency=%270.75%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <Header />
      
      <main className="flex-grow pt-40 pb-24 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* ────────────────────────────────────────────
              HERO SECTION
              ──────────────────────────────────────────── */}
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-semibold mb-8 tracking-wide"
            >
              <SparklesIcon className="w-4 h-4" />
              Technologies de Pointe
            </motion.div>
            
            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: EASE_OUT_EXPO }}
                className="text-5xl md:text-7xl font-black font-heading tracking-tight leading-[1.05]"
              >
                Notre Écosystème <br />
                <span className="text-gradient">Technologique</span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE_OUT_EXPO }}
              className="text-lg md:text-xl text-muted leading-relaxed"
            >
              ZiryabTec s'associe aux leaders mondiaux de la technologie pour vous offrir des formations pertinentes et alignées sur les exigences réelles du marché.
            </motion.p>
          </div>

          {/* ────────────────────────────────────────────
              TECH LOGOS GRID (Animated)
              ──────────────────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
            {techLogos.map((tech, i) => (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel rounded-3xl p-8 flex items-center justify-center aspect-[3/2] group cursor-default transition-all duration-500"
              >
                {/* Tech Logo with dynamic hover effect (grayscale to color) */}
                <img 
                  src={tech.url} 
                  alt={tech.name} 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* ────────────────────────────────────────────
              BENTO BOX: POURQUOI DEVENIR PARTENAIRE
              ──────────────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: EASE_OUT_EXPO }}
            className="glass-panel rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden"
          >
            {/* Inner Glow / Accent for the Bento Box */}
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-80" />
            
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold font-heading mb-4">Pourquoi devenir partenaire ?</h2>
              <p className="text-muted">Rejoignez un réseau d'excellence et captez les meilleurs talents.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              
              <BentoFeature 
                delay={0.1}
                icon={<Users className="w-6 h-6 text-primary" />}
                title="Accès exclusif aux Talents"
                desc="Recrutez directement parmi nos lauréats certifiés et formés sur vos technologies spécifiques, prêts à être opérationnels."
              />
              
              <BentoFeature 
                delay={0.2}
                icon={<Shield className="w-6 h-6 text-secondary" />}
                title="Visibilité & Marque Employeur"
                desc="Renforcez votre image de marque auprès de la nouvelle génération de développeurs et d'ingénieurs à travers nos événements."
              />
              
              <BentoFeature 
                delay={0.3}
                icon={<Globe className="w-6 h-6 text-accent" />}
                title="Projets Concrets (Use Cases)"
                desc="Proposez des projets de fin d'études à nos étudiants pour résoudre vos problématiques métiers avec un regard neuf."
              />

              <BentoFeature 
                delay={0.4}
                icon={<Zap className="w-6 h-6 text-yellow-500" />}
                title="Innovation Continue"
                desc="Participez à nos hackathons, ateliers techniques et conférences pour stimuler l'innovation au sein de votre propre entreprise."
              />

            </div>

            {/* CTA inside Bento */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE_OUT_EXPO }}
              className="mt-16 text-center"
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-foreground text-white font-semibold hover:bg-primary transition-colors duration-300 group shadow-elevated"
              >
                Devenir Partenaire
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </motion.div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* Sub-component for Bento Features */
function BentoFeature({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT_EXPO }}
      className="flex gap-6 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.22,0.68,0,1)]">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

/* Simple Sparkles Icon SVG */
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
