"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/lib/data";

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[540px] mx-auto mb-14"
        >
          <span className="badge mb-5">Competenze</span>
          <h2 className="text-display-md font-bold text-text-primary mb-4">
            Aree di competenza
          </h2>
          <p className="text-text-secondary text-body-md">
            Specializzazione esclusiva su Microsoft Dynamics 365 F&O, con focus su Supply
            Chain, Warehouse e governance applicativa. La profondità conta più della varietà.
          </p>
        </motion.div>

        {/* (a) Microsoft D365 F&O highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div
            className="relative overflow-hidden rounded-2xl p-8 md:p-10 border"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.02) 100%)",
              borderColor: "rgba(59,130,246,0.2)",
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <span className="text-accent font-bold text-xl">F&O</span>
              </div>
              <div>
                <h3 className="text-text-primary font-bold text-heading-lg mb-2">
                  Microsoft Dynamics 365 Finance & Operations
                </h3>
                <p className="text-text-secondary text-body-sm max-w-[560px]">
                  Piattaforma ERP enterprise Microsoft. Specializzazione esclusiva sull&apos;ecosistema
                  D365 F&O: dalla configurazione funzionale alla gestione della sicurezza,
                  dall&apos;ottimizzazione SCM al testing dei Continuous Update.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* (b) Moduli D365 in risalto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10"
        >
          <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-5 text-center">
            Moduli e aree D365 F&O
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteData.skills.modules.map((mod, i) => (
              <motion.div
                key={mod}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                className="card p-5 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-text-secondary text-sm font-medium leading-snug">
                  {mod}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* (c) Specializzazioni */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-5 text-center">
            Specializzazioni
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {siteData.skills.specializations.map((spec) => (
              <span key={spec} className="badge">
                {spec}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
