"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formations, CategorieFormation } from "@/lib/formations";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FormationCard } from "@/components/formations/formation-card";

const categories: (CategorieFormation | "Tous")[] = [
  "Tous",
  "Cloud",
  "Cybersécurité",
  "Développement",
  "Intelligence artificielle",
];

export default function FormationsPage() {
  const [activeCategory, setActiveCategory] = useState<CategorieFormation | "Tous">("Tous");

  const filtered =
    activeCategory === "Tous"
      ? formations
      : formations.filter((f) => f.categorie === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Banner */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground"
            >
              Catalogue des <span className="text-gradient">Formations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted"
            >
              Explorez nos programmes certifiants et trouvez la formation qui propulsera votre carrière IT au niveau supérieur.
            </motion.p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category filter pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 interactive ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-primary to-[#4F46E5] text-white shadow-glow"
                      : "bg-white text-muted border border-slate-200 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((formation, index) => (
                  <motion.div
                    key={formation.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <FormationCard formation={formation} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <p className="text-center text-muted py-20 text-lg">
                Aucune formation trouvée dans cette catégorie.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
