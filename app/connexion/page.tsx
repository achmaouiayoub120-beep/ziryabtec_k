"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════
   Custom easing curves — hand-tuned, never default
   ═══════════════════════════════════════════════════════ */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_SMOOTH  = [0.22, 0.68, 0, 1] as const;

/* ═══════════════════════════════════════════════════════
   Floating Label Input — organic micro-interactions
   ═══════════════════════════════════════════════════════ */
function FloatingInput({
  id,
  label,
  type = "text",
  delay = 0,
}: {
  id: string;
  label: string;
  type?: string;
  delay?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const isPassword = type === "password";
  const isActive = focused || value.length > 0;
  const inputType = isPassword && passwordVisible ? "text" : type;

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_EXPO }}
      className="relative mb-5"
    >
      {/* The floating label */}
      <label
        htmlFor={id}
        className="absolute left-4 pointer-events-none font-medium transition-all duration-300 ease-[cubic-bezier(0.22,0.68,0,1)]"
        style={{
          top: isActive ? "6px" : "50%",
          transform: isActive ? "translateY(0)" : "translateY(-50%)",
          fontSize: isActive ? "11px" : "15px",
          letterSpacing: isActive ? "0.04em" : "0",
          color: focused
            ? "var(--color-primary)"
            : isActive
            ? "var(--color-muted)"
            : "#9CA3AF",
        }}
      >
        {label}
      </label>

      <input
        id={id}
        type={inputType}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        autoComplete={isPassword ? "current-password" : "email"}
        className="peer w-full rounded-[14px] bg-white/50 px-4 pt-6 pb-2.5 text-[15px] text-foreground outline-none transition-all duration-300 ease-[cubic-bezier(0.22,0.68,0,1)]"
        style={{
          border: focused
            ? "1.5px solid var(--color-primary)"
            : "1.5px solid rgba(0,0,0,0.06)",
          boxShadow: focused
            ? "0 0 0 4px rgba(59,130,246,0.08), 0 2px 8px -2px rgba(59,130,246,0.1)"
            : "0 1px 3px -1px rgba(0,0,0,0.04)",
        }}
      />

      {/* Password toggle — pulses gently on hover */}
      {isPassword && (
        <button
          type="button"
          onClick={() => setPasswordVisible((v) => !v)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-200 group"
          tabIndex={-1}
        >
          {passwordVisible ? (
            <EyeOff className="w-[18px] h-[18px]" />
          ) : (
            <Eye className="w-[18px] h-[18px] group-hover:animate-pulse" />
          )}
        </button>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   Magnetic Button — subtly follows the cursor
   ═══════════════════════════════════════════════════════ */
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      x.set(dx * 0.15);
      y.set(dy * 0.15);
    },
    [x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      type="submit"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="relative w-full h-14 rounded-[14px] bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] text-white font-semibold text-[15px] overflow-hidden group cursor-pointer transition-shadow duration-500 hover:shadow-[0_8px_32px_-4px_rgba(59,130,246,0.3),0_0_0_1px_rgba(59,130,246,0.2)]"
      whileTap={{ scale: 0.985 }}
    >
      {/* Animated gradient slide on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-[gradient-slide_2s_linear_infinite]" />

      {/* Inner highlight — the subtle detail AI never adds */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <ArrowRight className="w-[18px] h-[18px] transition-transform duration-500 ease-[cubic-bezier(0.22,0.68,0,1)] group-hover:translate-x-1.5" />
      </span>
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════
   Animated Underline Link
   ═══════════════════════════════════════════════════════ */
function AnimatedLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`relative group inline-block ${className}`}>
      {children}
      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-primary rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,0.68,0,1)] group-hover:w-full" />
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function ConnexionPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen flex bg-background overflow-hidden">
      {/* ────────────────────────────────────────────
          LEFT PANEL — Brand & Mesh
          ──────────────────────────────────────────── */}
      <div className="relative hidden lg:flex lg:w-[52%] flex-col justify-between p-14 overflow-hidden">
        {/* Organic mesh gradient — three blobs, each unique timing */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[15%] -left-[10%] w-[55%] h-[60%] rounded-full bg-blue-400/[0.12] blur-[100px] animate-mesh-1" />
          <div className="absolute -bottom-[20%] -right-[5%] w-[50%] h-[55%] rounded-full bg-violet-400/[0.10] blur-[110px] animate-mesh-2" />
          <div className="absolute top-[25%] left-[35%] w-[35%] h-[40%] rounded-full bg-pink-300/[0.08] blur-[90px] animate-mesh-3" />
        </div>

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence baseFrequency=%270.75%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
          }}
        />

        {/* Abstract glass shapes — deliberate asymmetry */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[18%] right-[12%] w-28 h-28 rounded-3xl border border-white/40 bg-white/20 backdrop-blur-xl rotate-12"
          />
          <motion.div
            animate={{ y: [0, 22, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[22%] left-[8%] w-20 h-20 rounded-2xl border border-white/30 bg-white/15 backdrop-blur-lg -rotate-6"
          />
          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-[55%] right-[30%] w-14 h-14 rounded-xl border border-white/25 bg-white/10 backdrop-blur-md rotate-45"
          />
        </div>

        {/* Logo — top */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          className="relative z-10"
        >
          <Link href="/">
            <Image
              src="/logo-transparent.png"
              alt="ZiryabTec"
              width={180}
              height={54}
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Brand text — bottom, with text-masking reveal */}
        <div className="relative z-10 max-w-md">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE_OUT_EXPO }}
              className="text-[2.75rem] leading-[1.12] font-extrabold font-heading text-foreground mb-5"
            >
              Accélérez votre carrière dans la{" "}
              <span className="text-gradient">Tech.</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: EASE_OUT_EXPO }}
              className="text-[17px] leading-relaxed text-muted"
            >
              Accédez à votre espace apprenant pour suivre vos formations, vos
              laboratoires pratiques et vos certifications.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────
          RIGHT PANEL — Form
          ──────────────────────────────────────────── */}
      <div className="w-full lg:w-[48%] flex items-center justify-center p-6 md:p-12 relative">
        {/* Subtle dot grid — never perfectly uniform */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* The glass form container */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: EASE_SMOOTH,
          }}
          className="relative w-full max-w-[420px] glass-panel rounded-[28px] p-10 md:p-12"
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-10">
            <Link href="/">
              <Image
                src="/logo-transparent.png"
                alt="ZiryabTec"
                width={150}
                height={45}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT_EXPO }}
          >
            <h2 className="text-[28px] font-bold font-heading text-foreground mb-1.5 tracking-tight">
              Bienvenue
            </h2>
            <p className="text-[15px] text-muted mb-9">
              Connectez-vous à votre espace.
            </p>
          </motion.div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-0"
          >
            <FloatingInput
              id="login-email"
              label="Adresse email"
              type="email"
              delay={0.45}
            />
            <FloatingInput
              id="login-password"
              label="Mot de passe"
              type="password"
              delay={0.55}
            />

            {/* Forgot password */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex justify-end pt-1 pb-7"
            >
              <AnimatedLink
                href="/mot-de-passe-oublie"
                className="text-[13px] font-medium text-primary"
              >
                Mot de passe oublié ?
              </AnimatedLink>
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE_OUT_EXPO }}
            >
              <MagneticButton>Se connecter</MagneticButton>
            </motion.div>
          </form>

          {/* Sign up link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mt-9 text-[14px] text-muted"
          >
            Vous n&apos;avez pas de compte ?{" "}
            <AnimatedLink
              href="/inscription"
              className="font-semibold text-foreground"
            >
              Créer un compte
            </AnimatedLink>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
