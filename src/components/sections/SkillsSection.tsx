"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/lib/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-text-secondary text-sm font-medium">{name}</span>
        <span className="text-text-muted text-xs">{level}%</span>
      </div>
      <div className="h-1 bg-surface-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)",
          }}
        />
      </div>
    </div>
  );
}

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
            Anni di lavoro concreto su implementazioni D365 F&O, con focus su Supply Chain,
            Warehouse e governance applicativa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Skill bars */}
          <div className="lg:col-span-2 card p-8 space-y-6">
            <h3 className="text-text-primary font-semibold mb-6 text-sm uppercase tracking-widest text-text-muted">
              Competenze principali
            </h3>
            {siteData.skills.core.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={i * 0.08}
              />
            ))}
          </div>

          {/* Modules + Specializations */}
          <div className="space-y-5">
            {/* Modules */}
            <div className="card p-6">
              <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4">
                Moduli D365 F&O
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteData.skills.modules.map((mod) => (
                  <span key={mod} className="badge-neutral text-xs">
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="card p-6">
              <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4">
                Specializzazioni
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteData.skills.specializations.map((spec) => (
                  <span key={spec} className="badge text-xs">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="card p-6">
              <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4">
                Strumenti
              </h3>
              <div className="space-y-3">
                {siteData.skills.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">{tool.name}</span>
                    <span className="text-text-muted text-xs">{tool.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
