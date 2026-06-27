"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowRight, MapPin } from "lucide-react";
import { siteData } from "@/lib/data";

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[760px] mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-text-secondary text-xs font-medium tracking-wide">
              Disponibile per nuovi progetti
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-display-lg font-bold text-text-primary mb-6 text-balance">
            Hai un progetto D365 F&O?{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Parliamone.
            </span>
          </h2>

          <p className="text-text-secondary text-body-lg max-w-[520px] mx-auto mb-10 leading-relaxed">
            Che si tratti di un'implementazione, di supporto AMS o di un intervento mirato
            su SCM e sicurezza, sono a disposizione per capire come posso essere utile.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${siteData.personal.email}`}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all duration-200 hover:shadow-[0_0_28px_rgba(59,130,246,0.35)] active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Mail size={17} />
              Scrivimi una email
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href={siteData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 text-text-primary font-medium rounded-xl transition-all duration-200 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Linkedin size={17} />
              Connettiti su LinkedIn
            </a>
          </div>

          {/* Contact details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 pt-10 border-t border-surface-border">
            <a
              href={`mailto:${siteData.personal.email}`}
              className="flex items-center gap-2 text-text-muted hover:text-text-secondary text-sm transition-colors"
            >
              <Mail size={14} className="text-accent" />
              {siteData.personal.email}
            </a>
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <MapPin size={14} className="text-accent" />
              Meda, Milano Area · Remote &amp; On-site
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
