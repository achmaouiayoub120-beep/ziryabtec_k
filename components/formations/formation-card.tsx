"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Formation, CategorieFormation } from "@/lib/formations";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categoryVariantMap: Record<CategorieFormation, any> = {
  Cloud: "cloud",
  Cybersécurité: "cyber",
  Développement: "dev",
  "Intelligence artificielle": "ia",
};

export function FormationCard({ formation, index = 0 }: { formation: Formation; index?: number }) {
  const [places, setPlaces] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaces(formation.placesDisponibles);
    }, 500 + index * 100);
    return () => clearTimeout(timer);
  }, [formation.placesDisponibles, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={formation.image}
            alt={formation.nom}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <Badge variant={categoryVariantMap[formation.categorie]}>
              {formation.categorie}
            </Badge>
            <Badge variant="glass">{formation.niveau}</Badge>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {formation.nom}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col justify-between gap-6">
          <p className="text-sm text-muted line-clamp-2">
            {formation.description}
          </p>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-muted font-mono">
              <Clock className="w-4 h-4 text-primary" />
              <span>{formation.duree} • {formation.mode}</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-sm font-mono text-muted">
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Places</span>
                <span className="font-semibold text-foreground">{places} / {formation.places}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <motion.div 
                  className="bg-primary h-full rounded-full" 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(formation.placesDisponibles / formation.places) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between border-t border-slate-50 pt-6">
          <div className="flex flex-col">
            <span className="text-xs text-muted font-mono uppercase tracking-wider">Tarif</span>
            <span className="text-lg font-bold font-mono text-foreground">{formation.prix.toLocaleString()} MAD</span>
          </div>
          <Button variant="ghost" size="sm" className="group/btn" asChild>
            <Link href={`/formations/${formation.id}`}>
              Détails
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
