"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import { siteData } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4">
              <span className="badge">Chi sono</span>
            </div>

            <h2 className="text-display-md font-bold text-text-primary mb-6 text-balance">
              Consulente funzionale D365 F&O,{" "}
              <span className="text-text-secondary font-normal">
                con un approccio orientato ai processi reali.
              </span>
            </h2>

            <div className="space-y-4 text-text-secondary text-body-md leading-relaxed">
              <p>
                Lavoro come consulente indipendente Microsoft Dynamics 365 Finance & Operations,
                affiancando aziende manifatturiere, distributori e system integrator nelle fasi
                di implementazione, ottimizzazione e supporto dei loro sistemi ERP.
              </p>
              <p>
                Il mio metodo parte sempre dai processi operativi reali: capire come funziona
                il business è la condizione necessaria per configurare un sistema che lo supporti
                davvero, non uno che lo forzi.
              </p>
              <p>
                Ho maturato esperienza su progetti mid-to-large, lavorando su Supply Chain Management,
                Warehouse Management, sicurezza applicativa e AMS. Sono abituato a muovermi
                autonomamente nelle attività progettuali e a interfacciarmi sia con i responsabili
                di reparto che con i team tecnici.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8 flex flex-wrap gap-2">
              {siteData.personal.languages.map((lang) => (
                <span key={lang} className="badge-neutral">
                  {lang}
                </span>
              ))}
            </div>

            {/* Contact chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteData.personal.email}`}
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors group"
              >
                <Mail size={14} className="text-accent" />
                {siteData.personal.email}
              </a>
              <span className="text-surface-muted">·</span>
              <a
                href={`tel:${siteData.personal.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                <Phone size={14} className="text-accent" />
                {siteData.personal.phone}
              </a>
              <span className="text-surface-muted">·</span>
              <a
                href={siteData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                <Linkedin size={14} className="text-accent" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            {/* Main card */}
            <div className="card p-8 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              {/* Profile placeholder / monogram */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold text-xl">DM</span>
                </div>
                <div>
                  <div className="text-text-primary font-semibold text-lg">
                    {siteData.personal.name}
                  </div>
                  <div className="text-text-secondary text-sm mt-0.5">
                    {siteData.personal.title}
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Disponibile</span>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Anni esperienza", value: "3+" },
                  { label: "Piattaforma", value: "D365 F&O" },
                  { label: "Area core", value: "SCM · WMS" },
                  { label: "Modalità", value: "Remote / On-site" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-xl bg-surface-muted/30 border border-surface-border"
                  >
                    <div className="text-text-muted text-xs mb-1">{item.label}</div>
                    <div className="text-text-primary font-semibold text-sm">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Specializations */}
              <div>
                <div className="text-text-muted text-xs uppercase tracking-widest mb-3">
                  Specializzazioni
                </div>
                <div className="flex flex-wrap gap-2">
                  {["SCM", "WMS", "AMS", "Security Roles", "License Optimization", "Intercompany"].map(
                    (tag) => (
                      <span key={tag} className="badge text-xs">
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border border-surface-border bg-surface rotate-12 z-[-1] opacity-50" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl border border-accent/10 bg-accent/5 -rotate-6 z-[-1]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
