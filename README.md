# Daniele Maggiolini — Sito Personale

Sito web professionale di **Daniele Maggiolini**, consulente Microsoft Dynamics 365 Finance & Operations specializzato in **Supply Chain Management & Operations**.

Un biglietto da visita digitale premium, costruito per convincere aziende manifatturiere, distributori e system integrator a entrare in contatto.

---

## Stack tecnologico

- **[Next.js 14](https://nextjs.org/)** — App Router, React Server Components
- **[React 18](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)** — strict mode
- **[Tailwind CSS](https://tailwindcss.com/)** — design system custom
- **[Framer Motion](https://www.framer.com/motion/)** — micro-animazioni e scroll reveal
- **[Lucide React](https://lucide.dev/)** — icone
- Asset visivi generati con **Higgsfield** (CDN CloudFront)

---

## Caratteristiche

- **Dark mode** nativa, palette bianco / nero / grigi con accento blu (`#3b82f6`)
- **Responsive** completo (mobile-first)
- **Design system** coerente: token tipografici, spaziature e colori centralizzati in `tailwind.config.ts`
- **Animazioni** curate con Framer Motion (mai invasive, `prefers-reduced-motion` rispettato)
- **SEO completa**: metadata, Open Graph, Twitter Card, **Schema.org** (Person + ProfessionalService + WebSite), sitemap e robots dinamici
- **Accessibilità**: focus visibile, semantica corretta, contrasto AA
- **Performance**: font ottimizzati, zero dipendenze pesanti, pronto per Lighthouse alto

---

## Struttura delle sezioni

| Sezione | Componente | Contenuto |
|---|---|---|
| Hero | `HeroSection` | Headline, posizionamento, CTA, stats |
| Chi sono | `AboutSection` | Bio professionale + card profilo |
| Servizi | `ServicesSection` | 4 servizi con dettagli |
| Competenze | `SkillsSection` | Focus D365 F&O + moduli + specializzazioni |
| Esperienza | `ExperienceSection` | Timeline lavoro + formazione + lingue |
| Progetti | `ProjectsSection` | Case study (Security Roles Review) |
| Metodo | `WorkMethodSection` | 4 fasi del processo di lavoro |
| Perché me | `WhyMeSection` | 6 punti di forza |
| FAQ | `FaqSection` | Accordion con 6 domande |
| CTA finale | `CtaSection` | Contatti + call to action |
| Footer | `Footer` | Navigazione + contatti |

---

## Setup & sviluppo

```bash
# 1. Installa le dipendenze
npm install

# 2. Scarica gli asset grafici generati con Higgsfield (opzionale ma consigliato)
node scripts/download-assets.js

# 3. Avvia in locale
npm run dev
# → http://localhost:3000

# 4. Build di produzione
npm run build
npm start
```

> **Nota sugli asset**: il sito è progettato per funzionare anche **senza** gli asset scaricati — gli sfondi hero usano pattern CSS e glow radiali nativi. Gli asset Higgsfield (`hero-bg.png`, `scm-flow.png`, `logo-mark.png`, `og-image.png`) sono enhancement progressivi salvati in `public/images/`.

---

## Deploy su Vercel

Il progetto è pronto per il deploy diretto su [Vercel](https://vercel.com/):

1. Push del repository su GitHub/GitLab
2. Importa il progetto su Vercel
3. Vercel rileva automaticamente Next.js — nessuna configurazione richiesta
4. Deploy

Oppure via CLI:

```bash
npm i -g vercel
vercel
```

### Prima del deploy

- Sostituisci `public/og-image.jpg` con l'immagine social definitiva (1200×630)
- Aggiungi i file favicon in `public/`: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `favicon-192x192.png`, `favicon-512x512.png`
- Verifica il dominio in `src/app/layout.tsx`, `sitemap.ts` e `robots.ts` (attualmente `https://www.danielemaggiolini.com`)
- Aggiorna l'URL LinkedIn in `src/lib/data.ts` se necessario

---

## Personalizzazione dei contenuti

Tutti i testi e i dati professionali sono centralizzati in **un unico file**:

```
src/lib/data.ts
```

Modifica questo file per aggiornare bio, servizi, competenze, esperienze, progetti e FAQ. Non serve toccare i componenti.

I token di design (colori, tipografia, spaziature) sono in:

```
tailwind.config.ts   →  scala tipografica, colori, animazioni
src/app/globals.css   →  variabili CSS, classi utility, base styles
```

---

## Note sui dati

⚠️ **Segnaposti da verificare** — alcuni dettagli non erano presenti nei documenti forniti e sono stati impostati con valori prudenti o segnalati:

- **URL LinkedIn**: profilo reale impostato (`https://www.linkedin.com/in/daniele-maggiolini-erp`).
- **Cliente del progetto Security Roles**: indicato come "Cliente Privato" per riservatezza (il documento non specificava il nome).
- **Date freelance**: i documenti riportavano sia "apr 2026" che "Apr 2025" come inizio dell'attività freelance. È stata usata la versione più recente e coerente con il resto della timeline (**Apr 2026**). Da confermare.
- **Immagine profilo**: nel CV è presente una foto, ma non è stata estratta nel sito (si usa un monogramma "DM"). Può essere aggiunta in `AboutSection`.

---

## Licenza

Progetto personale. Tutti i contenuti © Daniele Maggiolini.

---

## Contatti

- **Email**: daniele@danielemaggiolini.com
- **Telefono**: +39 392 328 7370
- **Sito**: www.danielemaggiolini.com
- **Area**: Meda, Lombardia — Milano · Remote & On-site
