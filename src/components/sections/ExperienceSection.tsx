"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/lib/data";
import { GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[540px] mx-auto mb-14"
        >
          <span className="badge mb-5">Esperienza</span>
          <h2 className="text-display-md font-bold text-text-primary mb-4">
            Percorso professionale
          </h2>
          <p className="text-text-secondary text-body-md">
            3 anni di lavoro concreto su progetti D365 F&O, da junior consultant a freelance
            indipendente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Experience timeline */}
          <div className="lg:col-span-2 space-y-5">
            {siteData.experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={cn(
                    "card p-7 relative overflow-hidden transition-all duration-300",
                    exp.current && "border-accent/20"
                  )}
                >
                  {exp.current && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                  )}

                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                          exp.current
                            ? "bg-accent/10 border border-accent/20"
                            : "bg-surface-muted/50 border border-surface-border"
                        )}
                      >
                        <Briefcase
                          size={17}
                          className={exp.current ? "text-accent" : "text-text-muted"}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-text-primary font-semibold text-heading-md">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                              <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                              Presente
                            </span>
                          )}
                        </div>
                        <div className="text-text-secondary font-medium text-sm mt-0.5">
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-text-muted text-xs">{exp.period}</div>
                      <div className="text-text-muted text-xs mt-0.5">{exp.duration}</div>
                    </div>
                  </div>

                  <div className="text-text-muted text-xs mb-5 flex items-center gap-1.5">
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-full text-xs border",
                        exp.type === "Freelance"
                          ? "bg-accent/8 border-accent/15 text-accent"
                          : "bg-surface-muted/50 border-surface-border text-text-muted"
                      )}
                    >
                      {exp.type}
                    </span>
                    <span className="text-surface-muted">·</span>
                    <span>{exp.location}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-text-secondary text-sm">
                        <ChevronRight size={13} className="text-accent shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Sub-projects */}
                  {exp.projects.length > 0 && (
                    <div className="pt-5 border-t border-surface-border space-y-4">
                      {exp.projects.map((proj) => (
                        <div key={proj.name} className="pl-4 border-l border-accent/20">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-text-primary text-sm font-semibold">
                              {proj.name}
                            </span>
                            <span className="text-text-muted text-xs">{proj.period}</span>
                          </div>
                          <p className="text-text-muted text-xs leading-relaxed">
                            {proj.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <GraduationCap size={16} className="text-accent" />
                  </div>
                  <h3 className="text-text-primary font-semibold text-sm uppercase tracking-widest text-text-muted">
                    Formazione
                  </h3>
                </div>

                <div className="space-y-6">
                  {siteData.education.map((edu) => (
                    <div
                      key={edu.degree}
                      className="pb-6 last:pb-0 border-b last:border-0 border-surface-border"
                    >
                      <div className="text-text-muted text-xs mb-2">{edu.period}</div>
                      <div className="text-text-primary font-semibold text-sm mb-1">
                        {edu.degree}
                      </div>
                      <div className="text-text-secondary text-sm">{edu.institution}</div>
                      <div className="text-text-muted text-xs mt-1">{edu.focus}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="card p-6">
                <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-5">
                  Lingue
                </h3>
                <div className="space-y-3">
                  {siteData.personal.languages.map((lang) => (
                    <div key={lang} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-text-secondary text-sm">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
