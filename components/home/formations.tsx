"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formations } from "@/lib/formations";
import { Button } from "@/components/ui/button";
import { FormationCard } from "@/components/formations/formation-card";

export function FormationsSection() {
  return (
    <section id="formations" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground">
              Programmes d'Élite
            </h2>
            <p className="text-lg text-muted">
              Développez des compétences critiques très recherchées. Formations certifiantes animées par des experts de l'industrie.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="outline" asChild>
              <Link href="/formations">Voir tout le catalogue</Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((formation, index) => (
            <FormationCard key={formation.id} formation={formation} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

