"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════
   Custom easing curves 
   ═══════════════════════════════════════════════════════ */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { name: "Formations", href: "/formations" },
  { name: "Formateurs", href: "/formateurs" },
  { name: "Partenaires", href: "/partenaires" },
  { name: "Témoignages", href: "/#temoignages" },
];

/* ═══════════════════════════════════════════════════════
   Magnetic Nav Link
   ═══════════════════════════════════════════════════════ */
function MagneticNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.2);
    y.set(dy * 0.2);
  }, [x, y]);

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={{ x: springX, y: springY }}
        className="relative px-4 py-2 text-[14px] font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 group"
      >
        <span className="relative z-10">{children}</span>
        {/* Hover pill background */}
        <span className="absolute inset-0 rounded-full bg-slate-100/0 group-hover:bg-slate-100/80 transition-colors duration-300 -z-0" />
      </motion.a>
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values for the floating capsule effect based on scroll
  const headerY = useTransform(scrollY, [0, 100], [20, 12]);
  const headerWidth = useTransform(scrollY, [0, 100], ["100%", "92%"]);
  const headerPadding = useTransform(scrollY, [0, 100], ["0px", "0px"]);
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.75)"]);
  const headerBorder = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.6)"]);
  const headerShadow = useTransform(scrollY, [0, 100], [
    "none", 
    "0 12px 40px -12px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)"
  ]);

  // Spring physics for smooth scroll transitions
  const smoothY = useSpring(headerY, { stiffness: 100, damping: 20 });
  const smoothWidth = useSpring(headerWidth, { stiffness: 100, damping: 20 });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <motion.div
        style={{
          y: smoothY,
          width: smoothWidth,
          backgroundColor: headerBg,
          borderColor: headerBorder,
          boxShadow: headerShadow,
        }}
        className="max-w-6xl mx-auto border backdrop-blur-2xl rounded-full pointer-events-auto transition-[background-color,box-shadow,border-color] duration-500"
      >
        <div className="px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image 
              src="/logo-transparent.png" 
              alt="ZiryabTec" 
              width={120} 
              height={36} 
              className="object-contain group-hover:opacity-80 transition-opacity duration-300" 
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <MagneticNavLink key={link.name} href={link.href}>
                {link.name}
              </MagneticNavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mr-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-bold tracking-widest text-green-700 uppercase">
                Inscriptions Ouvertes
              </span>
            </div>
            
            <Link 
              href="/connexion"
              className="text-[14px] font-semibold text-foreground/80 hover:text-foreground px-4 py-2 transition-colors"
            >
              Connexion
            </Link>

            <Link 
              href="/inscription"
              className="relative h-10 px-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-[14px] overflow-hidden group flex items-center justify-center shadow-glow hover:shadow-[0_8px_24px_-4px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              {/* Animated gradient slide on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-[gradient-slide_2s_linear_infinite]" />
              <span className="absolute inset-x-0 top-0 h-px bg-white/30" />
              <span className="relative z-10 flex items-center gap-1.5">
                S'inscrire
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          className="md:hidden absolute top-[85px] left-4 right-4 bg-white/80 backdrop-blur-3xl border border-white/60 shadow-elevated p-6 rounded-3xl flex flex-col gap-5 pointer-events-auto"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[17px] font-semibold text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full h-px bg-slate-100 my-2" />
          <div className="flex flex-col gap-3">
            <Link 
              href="/connexion" 
              className="w-full h-12 flex items-center justify-center rounded-xl bg-slate-50 text-foreground font-semibold border border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link 
              href="/inscription" 
              className="w-full h-12 flex items-center justify-center rounded-xl bg-primary text-white font-semibold shadow-glow"
              onClick={() => setMobileMenuOpen(false)}
            >
              S'inscrire
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
