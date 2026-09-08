"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Award, Briefcase } from "lucide-react";
import { formateurs } from "@/lib/data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function certVariant(cert: string): "cloud" | "cyber" | "dev" | "outline" {
  const lower = cert.toLowerCase();
  if (lower.includes("aws") || lower.includes("docker") || lower.includes("kubernetes"))
    return "cloud";
  if (lower.includes("ceh") || lower.includes("cissp") || lower.includes("oscp"))
    return "cyber";
  if (lower.includes("react") || lower.includes("node"))
    return "dev";
  return "outline";
}

export default function FormateursPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground"
            >
              Nos Formateurs <span className="text-gradient">d'Exception</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted"
            >
              Des experts certifiés et actifs dans l'industrie, passionnés par la transmission de savoir.
            </motion.p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {formateurs.map((formateur, index) => (
                <motion.div
                  key={formateur.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Card className="h-full group hover:shadow-elevated transition-all duration-500 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Photo */}
                      <div className="relative h-72 w-full overflow-hidden">
                        <Image
                          src={formateur.photo}
                          alt={`${formateur.prenom} ${formateur.nom}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-heading font-bold text-white">
                            {formateur.prenom} {formateur.nom}
                          </h3>
                          <p className="text-white/80 text-sm">{formateur.specialite}</p>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6 space-y-5">
                        <p className="text-muted leading-relaxed">{formateur.biographie}</p>

                        <div className="flex items-center gap-2 text-sm font-mono text-muted">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span>{formateur.experience} d'expérience</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {formateur.certifications.map((cert) => (
                            <Badge key={cert} variant={certVariant(cert)}>
                              <Award className="w-3 h-3 mr-1" /> {cert}
                            </Badge>
                          ))}
                        </div>

                        <a
                          href={`mailto:${formateur.email}`}
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline interactive font-medium"
                        >
                          <Mail className="w-4 h-4" /> {formateur.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
