"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";

export default function ConnexionPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 flex">
        {/* Left decorative panel */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#2563EB] to-[#7C5CFC] relative items-center justify-center p-16">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
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
              Accélérez votre carrière dans la Tech.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Rejoignez des centaines de professionnels qui ont transformé leur parcours grâce à nos formations certifiantes.
            </p>
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex-1 flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md space-y-8"
          >
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                Bon retour parmi nous
              </h1>
              <p className="text-muted">
                Connectez-vous à votre espace apprenant.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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

              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm text-primary hover:underline interactive"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              <Button className="w-full h-12" type="submit">
                Se connecter <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <p className="text-center text-sm text-muted">
              Pas encore inscrit ?{" "}
              <Link href="/inscription" className="text-primary font-semibold hover:underline interactive">
                Créer un compte
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}
