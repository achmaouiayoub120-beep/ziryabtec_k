"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { temoignages, Temoignage } from "@/lib/temoignages";
import { Card, CardContent } from "@/components/ui/card";

function TestimonialCard({ temoignage, isActive }: { temoignage: Temoignage; isActive: boolean }) {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="min-w-[320px] md:min-w-[450px] p-4 cursor-grab active:cursor-grabbing"
    >
      <Card className="h-full bg-white shadow-elevated border-none">
        <CardContent className="p-8">
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: isActive ? i * 0.1 : 0 }}
              >
                <Star 
                  className={`w-5 h-5 ${i < temoignage.note ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`} 
                />
              </motion.div>
            ))}
          </div>
          <p className="text-muted text-lg italic mb-8 line-clamp-4">
            "{temoignage.texte}"
          </p>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100">
              <Image 
                src={temoignage.photo} 
                alt={temoignage.nom}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground">{temoignage.nom}</h4>
              <p className="text-sm text-slate-500">{temoignage.role} @ {temoignage.entreprise}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function TemoignagesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="temoignages" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
          Ils ont transformé leur carrière
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Découvrez les retours d'expérience de nos anciens apprenants qui ont propulsé 
          leur carrière vers de nouveaux sommets.
        </p>
      </div>

      <div className="w-full flex items-center justify-center overflow-hidden px-4 md:px-0">
        <motion.div 
          ref={containerRef}
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          onDrag={(e, info) => {
            // Un calcul simple pour simuler le card actif, idéalement on utiliserait useScroll
          }}
        >
          {temoignages.map((t, i) => (
            <TestimonialCard 
              key={t.id} 
              temoignage={t} 
              isActive={i === activeIndex || (i === 0 && activeIndex === -1)} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
