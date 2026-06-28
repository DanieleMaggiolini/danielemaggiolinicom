"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  {
    category: "Piattaforma ERP",
    items: [
      { name: "Microsoft Dynamics 365 F&O", primary: true },
      { name: "D365 Supply Chain Management" },
      { name: "D365 Warehouse Management" },
      { name: "D365 Finance" },
    ],
  },
  {
    category: "Moduli & Funzionalità",
    items: [
      { name: "Accounts Payable & Receivable" },
      { name: "Production Module" },
      { name: "Product Management" },
      { name: "Transportation & Shipping" },
      { name: "System Administration" },
      { name: "Security & Role Management" },
    ],
  },
  {
    category: "Strumenti & Metodologia",
    items: [
      { name: "Azure DevOps" },
      { name: "Functional Documentation" },
      { name: "UAT & Testing" },
      { name: "Business Process Mapping" },
      { name: "WMS Devices & Hardware" },
      { name: "Microsoft 365" },
    ],
  },
];

export default function TechSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[540px] mx-auto mb-14"
        >
          <span className="badge mb-5">Tecnologie</span>
          <h2 className="text-display-md font-bold text-text-primary mb-4">
            Stack tecnologico
          </h2>
          <p className="text-text-secondary text-body-md">
            Lavoro esclusivamente su Microsoft Dynamics 365 F&O. La profondità conta più
            della varietà.
          </p>
        </motion.div>

        {/* Microsoft D365 F&O highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
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

        {/* Tech categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            >
              <div className="card p-6 h-full">
                <h4 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-5">
                  {tech.category}
                </h4>
                <ul className="space-y-3">
                  {tech.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.primary ? "bg-accent" : "bg-surface-muted"}`} />
                      <span className={item.primary ? "text-text-primary font-medium" : "text-text-secondary"}>
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
