"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Headphones, Shield, GraduationCap, ChevronRight } from "lucide-react";
import { siteData } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Headphones,
  Shield,
  GraduationCap,
};

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section-padding relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[620px] mx-auto mb-14"
        >
          <span className="badge mb-5">Servizi</span>
          <h2 className="text-display-md font-bold text-text-primary mb-4 text-balance">
            Cosa faccio
          </h2>
          <p className="text-text-secondary text-body-md">
            Consulenza funzionale Microsoft D365 F&O end-to-end. Dalla business analysis
            al supporto post-produzione, con focus su SCM, Operations e governance applicativa.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {siteData.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className={cn(
                    "group card p-7 h-full cursor-default transition-all duration-300",
                    "hover:border-accent/20 hover:bg-surface"
                  )}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center mb-5 transition-all duration-200 group-hover:bg-accent/12 group-hover:border-accent/25">
                    {Icon && <Icon size={20} className="text-accent" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-text-primary font-semibold text-heading-md mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-body-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-text-muted text-sm"
                      >
                        <ChevronRight
                          size={13}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-text-muted text-sm">
            Disponibile per ingaggi da{" "}
            <span className="text-text-secondary">remoto</span> o{" "}
            <span className="text-text-secondary">in sede</span> (rimborso spese).{" "}
            Aperto a clienti <span className="text-text-secondary">internazionali</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
