"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const titleText = "Devenez l'Expert que les Entreprises S'arrachent.".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Grille filigrane subtile en fond */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 80%)',
          opacity: 0.4
        }}
      />

      {/* Mesh gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cat-ia/20 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-slate-200 shadow-sm mb-8"
        >
          <ShieldCheck className="w-5 h-5 text-secondary animate-pulse" />
          <span className="text-sm font-mono font-medium text-muted">Certifications Reconnues Mondialement</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6 leading-tight">
          {titleText.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-3 last:mr-0"
            >
              {word === "l'Expert" || word === "S'arrachent." ? (
                <span className="text-gradient">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto"
        >
          Rejoignez l'académie d'élite en IT. Maîtrisez le Cloud AWS, la Cybersécurité, 
          l'IA ou le Dev Full Stack avec des experts certifiés.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/formations">
              Découvrir les formations <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <Link href="/apropos">
              En savoir plus
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
