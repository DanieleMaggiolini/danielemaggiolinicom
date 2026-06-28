"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/lib/data";
import { CheckCircle2, Calendar } from "lucide-react";

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 60%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[540px] mx-auto mb-14"
        >
          <span className="badge mb-5">Progetti</span>
          <h2 className="text-display-md font-bold text-text-primary mb-4">
            Progetti principali
          </h2>
          <p className="text-text-secondary text-body-md">
            Interventi concreti su sistemi D365 F&O live, con impatto misurabile su processi
            e costi aziendali.
          </p>
        </motion.div>

        <div className="space-y-6">
          {siteData.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="card p-8 relative overflow-hidden group hover:border-accent/20 transition-all duration-300">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: project info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <h3 className="text-text-primary font-bold text-heading-lg">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4 text-text-muted text-xs">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={11} />
                            {project.period}
                          </span>
                          <span className="text-surface-muted">·</span>
                          <span>{project.client}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-text-secondary text-body-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge-neutral text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: outcomes */}
                  <div className="lg:border-l lg:border-surface-border lg:pl-8">
                    <h4 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4">
                      Risultati
                    </h4>
                    <ul className="space-y-3">
                      {project.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2.5 text-text-secondary text-sm"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-accent shrink-0 mt-0.5"
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about more projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-text-muted text-sm">
            Per esigenze di riservatezza, i dettagli dei clienti non sono pubblici.{" "}
            <a
              href={`mailto:${siteData.personal.email}`}
              className="text-accent hover:text-accent-light transition-colors"
            >
              Contattami
            </a>{" "}
            per discutere casi specifici.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
