import { Mail, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-[#0a0a0f]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-10 md:pb-12 border-b border-surface-border">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">DM</span>
              </div>
              <span className="font-semibold text-text-primary">Daniele Maggiolini</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Consulente Microsoft Dynamics 365 F&O specializzato in SCM e Operations.
              Freelance disponibile per progetti remoti e internazionali.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-text-secondary text-xs font-semibold uppercase tracking-widest">
              Navigazione
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#about", label: "Chi sono" },
                { href: "#services", label: "Servizi" },
                { href: "#experience", label: "Esperienza" },
                { href: "#projects", label: "Progetti" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-text-secondary text-xs font-semibold uppercase tracking-widest">
              Contatti
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteData.personal.email}`}
                  className="flex items-center gap-2.5 text-text-muted hover:text-text-secondary text-sm transition-colors group"
                >
                  <Mail size={14} className="text-accent shrink-0" />
                  {siteData.personal.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-text-muted text-sm">
                  <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                  <span>Meda, Lombardia · Remote &amp; On-site</span>
                </div>
              </li>
              <li>
                <a
                  href={siteData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-text-muted hover:text-text-secondary text-sm transition-colors group"
                >
                  <Linkedin size={14} className="text-accent shrink-0" />
                  LinkedIn
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © {year} Daniele Maggiolini. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-1 text-text-muted text-xs">
            <span>Microsoft Dynamics 365 F&O Consultant</span>
            <span className="mx-2 text-surface-muted">·</span>
            <span>SCM &amp; Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
