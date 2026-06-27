"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { siteData } from "@/lib/data";
import { cn } from "@/lib/utils";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "card overflow-hidden transition-all duration-300",
        isOpen && "border-accent/20"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-text-primary font-medium text-body-md pr-2">
          {question}
        </span>
        <div
          className={cn(
            "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200",
            isOpen
              ? "bg-accent/10 border border-accent/20"
              : "bg-surface-muted/50 border border-surface-border group-hover:border-accent/15"
          )}
        >
          {isOpen ? (
            <Minus size={14} className="text-accent" />
          ) : (
            <Plus size={14} className="text-text-muted group-hover:text-accent transition-colors" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px bg-surface-border mb-4" />
              <p className="text-text-secondary text-body-sm leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-28">
              <span className="badge mb-5">FAQ</span>
              <h2 className="text-display-md font-bold text-text-primary mb-4">
                Domande frequenti
              </h2>
              <p className="text-text-secondary text-body-md mb-6">
                Le risposte alle domande più comuni su modalità di lavoro, collaborazioni
                e aree di competenza.
              </p>
              <p className="text-text-muted text-sm">
                Non trovi quello che cerchi?{" "}
                <a
                  href={`mailto:${siteData.personal.email}`}
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  Scrivimi direttamente
                </a>
                .
              </p>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <div className="lg:col-span-8 space-y-3">
            {siteData.faq.map((item, i) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <FaqItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
