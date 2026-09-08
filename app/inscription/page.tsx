"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { formations } from "@/lib/formations";

export default function InscriptionPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 flex">
        {/* Right decorative panel (mirrored) */}
        <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-bl from-[#7C5CFC] to-[#2563EB] relative items-center justify-center p-16 order-2">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>
          <div className="relative z-10 text-white max-w-md">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white font-heading font-bold text-2xl">
                Z
              </div>
              <span className="font-heading font-bold text-2xl">ZiryabTec</span>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6 leading-tight">
              Votre avenir commence ici.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Inscrivez-vous et accédez à des programmes de formation conçus par les meilleurs experts de l'industrie IT.
            </p>
          </div>
        </div>

        {/* Left form panel */}
        <div className="flex-1 flex items-center justify-center p-8 order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg space-y-8"
          >
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                Créer votre compte
              </h1>
              <p className="text-muted">
                Rejoignez ZiryabTec et commencez votre transformation.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="prenom" className="text-sm font-medium text-foreground">
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="nom" className="text-sm font-medium text-foreground">
                    Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Adresse email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="vous@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="telephone" className="text-sm font-medium text-foreground">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  placeholder="+212 6XX XX XX XX"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="formation" className="text-sm font-medium text-foreground">
                  Formation souhaitée
                </label>
                <select
                  id="formation"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground appearance-none"
                >
                  <option value="">Sélectionner une formation</option>
                  {formations.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-foreground">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-slate-400 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-foreground transition-colors interactive"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirm" className="text-sm font-medium text-foreground">
                    Confirmer
                  </label>
                  <div className="relative">
                    <input
                      id="confirm"
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-slate-400 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-foreground transition-colors interactive"
                    >
                      {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted">
                  J'accepte les{" "}
                  <Link href="/mentions-legales" className="text-primary hover:underline interactive">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link href="/confidentialite" className="text-primary hover:underline interactive">
                    politique de confidentialité
                  </Link>
                  .
                </span>
              </label>

              <Button className="w-full h-12" type="submit">
                Créer mon compte <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <p className="text-center text-sm text-muted">
              Déjà inscrit ?{" "}
              <Link href="/connexion" className="text-primary font-semibold hover:underline interactive">
                Se connecter
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}
