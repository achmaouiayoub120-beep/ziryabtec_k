"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        {/* Glowing Orbs */}
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-cat-ia/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Inscriptions ouvertes pour la session d'automne
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6 text-foreground"
            >
              L'Excellence <br />
              <span className="text-gradient">Technologique</span> <br />
              au Maroc.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-xl"
            >
              Académie d'élite certifiante. Formez-vous aux métiers du futur avec des 
              experts de l'industrie en AWS, Cybersécurité, Data et Full Stack.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/formations">
                  Découvrir les programmes <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Parler à un conseiller
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for avatars */}
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <span className="text-foreground font-bold text-base">500+</span> 
                <br />Alumni placés
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Abstract 3D/Tech Representation using Framer Motion */}
              <div className="relative w-full max-w-md aspect-square">
                
                {/* Central Core */}
                <motion.div 
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-primary/20"
                />
                
                <motion.div 
                  animate={{ 
                    rotate: -360,
                  }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-0 rounded-full border border-slate-200"
                />

                {/* Floating Tech Cards */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 glass-panel p-4 rounded-2xl shadow-elevated flex items-center gap-3"
                >
                  <div className="p-2 bg-cat-cloud/10 text-cat-cloud rounded-lg">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-mono">AWS Certified</p>
                    <p className="font-semibold text-sm">Cloud Architect</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-0 glass-panel p-4 rounded-2xl shadow-elevated flex items-center gap-3"
                >
                  <div className="p-2 bg-cat-cyber/10 text-cat-cyber rounded-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-mono">Offensive Security</p>
                    <p className="font-semibold text-sm">Cyber Defense</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 -right-8 glass-panel p-4 rounded-2xl shadow-elevated flex items-center gap-3"
                >
                  <div className="p-2 bg-cat-dev/10 text-cat-dev rounded-lg">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Full Stack JS</p>
                  </div>
                </motion.div>

                {/* Center Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-cat-ia shadow-glow flex items-center justify-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/20 blur-xl group-hover:bg-white/30 transition-colors" />
                    <span className="font-heading font-bold text-2xl relative z-10">ZTec</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
