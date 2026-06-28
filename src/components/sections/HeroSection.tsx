"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { siteData } from "@/lib/data";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  // Il fade/parallax sullo scroll funziona bene su desktop, dove l'hero entra
  // in una sola viewport. Su mobile il contenuto è più alto dello schermo: la
  // dissolvenza scatterebbe mentre si sta ancora leggendo la parte bassa. Per
  // questo lo abilitiamo solo da >= md (768px).
  const [enableScrollFade, setEnableScrollFade] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setEnableScrollFade(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-accent/8 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

      <motion.div
        style={enableScrollFade ? { opacity, y: translateY } : undefined}
        className="container relative z-10 pt-28 pb-20"
      >
        <div className="max-w-[820px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-medium tracking-wide">
                Disponibile — Freelance ERP Consultant
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-display-xl font-bold text-text-primary mb-6 text-balance"
          >
            Microsoft Dynamics 365{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              F&O Consultant
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-secondary text-body-lg max-w-[600px] mb-3 leading-relaxed"
          >
            Specializzato in{" "}
            <span className="text-text-primary font-medium">Supply Chain Management</span>,{" "}
            <span className="text-text-primary font-medium">Warehouse Management</span> e Operations.
            3 anni di esperienza su implementazioni, AMS e ottimizzazione di sistemi ERP enterprise.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-2 text-text-muted text-sm mb-10"
          >
            <MapPin size={13} />
            <span>Meda, Milano Area · Remote &amp; On-site · Progetti internazionali</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)] active:scale-[0.98]"
            >
              <Mail size={16} />
              Contattami
            </button>
            <button
              onClick={() => handleScroll("#services")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 text-text-primary font-medium rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              Scopri i servizi
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-10 border-t border-surface-border flex flex-wrap gap-x-10 gap-y-6"
          >
            {[
              { value: "3+", label: "Anni di esperienza" },
              { value: "D365 F&O", label: "Piattaforma specializzazione" },
              { value: "SCM · WMS", label: "Aree core" },
              { value: "Remote-first", label: "Modalità di lavoro" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-0.5">
                <div className="text-text-primary font-semibold text-lg tracking-tight">
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
