"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Award className="w-10 h-10" />,
    title: "Experts Certifiés",
    description: "Apprenez avec des professionnels actifs, certifiés par AWS, Microsoft et Offensive Security."
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Formations Pro",
    description: "Des cursus intensifs alignés sur les besoins réels du marché de l'emploi technologique."
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Certifications Reconnues",
    description: "Préparez-vous efficacement aux certifications internationales les plus prestigieuses."
  },
  {
    icon: <Laptop className="w-10 h-10" />,
    title: "Approche Pratique",
    description: "80% de pratique via des laboratoires intensifs, des projets réels et des études de cas."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground"
          >
            Pourquoi Choisir ZiryabTec
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted"
          >
            Notre méthodologie unique combine excellence académique et immersion professionnelle 
            pour garantir votre employabilité.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="h-full group hover:border-primary/20 bg-background/50">
                <CardContent className="p-8 flex flex-col items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                    {/* Simplified line-draw SVG effect via strokeDasharray would go here, 
                        using Lucide icons as a base for now */}
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
