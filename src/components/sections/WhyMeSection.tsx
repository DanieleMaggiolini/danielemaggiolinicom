"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Globe, BookOpen, RefreshCw, Users } from "lucide-react";
import { siteData } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Target,
  Zap,
  Globe,
  BookOpen,
  RefreshCw,
  Users,
};

export default function WhyMeSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-me" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute inset-0 bg-surface/20 pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[540px] mx-auto mb-14"
        >
          <span className="badge mb-5">Perché scegliermi</span>
          <h2 className="text-display-md font-bold text-text-primary mb-4">
            Cosa mi distingue
          </h2>
          <p className="text-text-secondary text-body-md">
            Non solo competenza tecnica: un approccio orientato ai risultati concreti
            e al dialogo con il business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.whyChooseMe.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="card p-6 h-full group hover:border-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center mb-4 transition-all duration-200 group-hover:bg-accent/12 group-hover:border-accent/25">
                    {Icon && <Icon size={18} className="text-accent" />}
                  </div>
                  <h3 className="text-text-primary font-semibold text-sm mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
