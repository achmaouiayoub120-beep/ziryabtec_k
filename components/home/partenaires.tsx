"use client";

import Image from "next/image";
import { partenaires } from "@/lib/data";
import { motion } from "framer-motion";

export function PartenairesSection() {
  // Dupliquer pour l'effet de boucle infinie
  const marqueeItems = [...partenaires, ...partenaires, ...partenaires];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
          Technologies & Partenaires
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Nous collaborons avec les technologies les plus demandées sur le marché du travail.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div 
          className="flex whitespace-nowrap items-center gap-16 px-8"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {marqueeItems.map((p, i) => (
            <div 
              key={`${p.id}-${i}`} 
              className="relative w-32 h-16 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 interactive"
            >
              <div className="text-xl font-heading font-semibold text-slate-400 hover:text-primary transition-colors cursor-pointer">
                {/* Fallback en attendant les vrais logos SVG */}
                {p.nom}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
