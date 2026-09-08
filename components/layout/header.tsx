"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Formations", href: "/formations" },
  { name: "Formateurs", href: "/formateurs" },
  { name: "Partenaires", href: "/partenaires" },
  { name: "Témoignages", href: "/#temoignages" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.4)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.6)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 8px 30px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        borderColor: headerBorder,
        boxShadow: headerShadow,
      }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl' : ''}`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo-transparent.png" alt="ZiryabTec Logo" width={140} height={45} className="object-contain" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors interactive"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-green-600">
              Inscriptions Ouvertes
            </span>
          </div>
          
          <Button variant="ghost" size="sm" className="rounded-full hover:bg-slate-100/50 transition-colors" asChild>
            <Link href="/connexion">Connexion</Link>
          </Button>
          <Button size="sm" className="rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-all" asChild>
            <Link href="/inscription">
              S'inscrire <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground interactive"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-elevated p-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium p-2 hover:bg-slate-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
            <Button variant="outline" className="w-full justify-center" asChild>
              <Link href="/connexion" onClick={() => setMobileMenuOpen(false)}>Connexion</Link>
            </Button>
            <Button className="w-full justify-center" asChild>
              <Link href="/inscription" onClick={() => setMobileMenuOpen(false)}>S'inscrire</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
