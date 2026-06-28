"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/lib/data";

export default function WorkMethodSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="method" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-surface/30 pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[540px] mx-auto mb-14"
        >
          <span className="badge mb-5">Metodo</span>
          <h2 className="text-display-md font-bold text-text-primary mb-4">
            Come lavoro
          </h2>
          <p className="text-text-secondary text-body-md">
            Un processo iterativo, documentato, costruito sul dialogo continuo tra
            business e sistema.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.workMethod.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="card p-6 h-full hover:border-accent/20 transition-all duration-300 relative z-10">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center shrink-0">
                    <span className="text-accent text-xs font-bold tabular-nums">
                      {step.step}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-surface-border" />
                </div>

                <h3 className="text-text-primary font-semibold text-sm mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
