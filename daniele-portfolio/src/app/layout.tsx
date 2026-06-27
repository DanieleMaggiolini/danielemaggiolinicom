import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.danielemaggiolini.com";
const siteName = "Daniele Maggiolini — D365 F&O Consultant";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniele Maggiolini | Microsoft Dynamics 365 F&O Consultant — SCM & Operations",
    template: "%s | Daniele Maggiolini",
  },
  description:
    "Consulente Microsoft Dynamics 365 Finance & Operations specializzato in Supply Chain Management, Warehouse Management e Operations. Freelance, disponibile da remoto e in sede. Progetti con aziende manifatturiere, distributori e system integrator.",
  keywords: [
    "Microsoft Dynamics 365 F&O",
    "D365 Finance Operations consultant",
    "SCM consultant Italy",
    "Supply Chain Management ERP",
    "Warehouse Management D365",
    "Dynamics 365 implementation",
    "AMS ERP consultant",
    "ERP freelance consultant Italy",
    "consulente D365 F&O",
    "consulente ERP Milano",
    "Dynamics 365 SCM freelance",
  ],
  authors: [{ name: "Daniele Maggiolini", url: siteUrl }],
  creator: "Daniele Maggiolini",
  publisher: "Daniele Maggiolini",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName,
    title: "Daniele Maggiolini | D365 F&O Consultant — SCM & Operations",
    description:
      "Consulente Microsoft Dynamics 365 Finance & Operations specializzato in Supply Chain Management e Operations. Freelance disponibile per progetti remoti e on-site.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniele Maggiolini — Microsoft Dynamics 365 F&O Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniele Maggiolini | D365 F&O Consultant",
    description:
      "Consulente Microsoft Dynamics 365 F&O, specializzato in SCM e Operations. Freelance, disponibile per progetti remoti e internazionali.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Daniele Maggiolini",
      url: siteUrl,
      jobTitle: "Microsoft Dynamics 365 F&O Consultant",
      description:
        "Consulente Microsoft Dynamics 365 Finance & Operations specializzato in Supply Chain Management, Warehouse Management e Operations. Freelance con 3 anni di esperienza su progetti mid-to-large enterprise.",
      email: "daniele@danielemaggiolini.com",
      telephone: "+393923287370",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Meda",
        addressRegion: "Lombardia",
        addressCountry: "IT",
      },
      knowsAbout: [
        "Microsoft Dynamics 365 Finance & Operations",
        "Supply Chain Management",
        "Warehouse Management",
        "ERP Implementation",
        "Application Management Services",
        "Security Role Governance",
        "Intercompany Flows",
        "Business Process Analysis",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "ERP Consultant",
        occupationLocation: {
          "@type": "Country",
          name: "Italy",
        },
      },
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      sameAs: ["https://www.linkedin.com/in/daniele-maggiolini/"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description:
        "Sito professionale di Daniele Maggiolini, consulente Microsoft Dynamics 365 F&O specializzato in SCM e Operations",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: ["it-IT", "en-US"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Daniele Maggiolini — D365 F&O Consulting",
      url: siteUrl,
      provider: {
        "@id": `${siteUrl}/#person`,
      },
      serviceType: "ERP Consulting",
      areaServed: {
        "@type": "Place",
        name: "Europe",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "D365 F&O Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "End-to-End Implementation",
              description:
                "Progetti di implementazione Microsoft D365 F&O dalla business analysis al go-live",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Application Management Services (AMS)",
              description:
                "Gestione ticket, supporto continuativo e manutenzione del sistema D365 F&O",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Security Roles & License Optimization",
              description:
                "Revisione e ottimizzazione dei ruoli di sicurezza e delle licenze Microsoft D365 F&O",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "User Training & Adoption",
              description:
                "Formazione utenti e supporto all'adozione del sistema ERP",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} font-sans bg-[#0a0a0f] text-text-primary antialiased selection:bg-accent/20 selection:text-accent-light`}
      >
        {children}
      </body>
    </html>
  );
}
