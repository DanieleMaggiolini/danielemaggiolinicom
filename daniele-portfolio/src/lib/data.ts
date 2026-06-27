export const siteData = {
  personal: {
    name: "Daniele Maggiolini",
    title: "Microsoft Dynamics 365 F&O Consultant",
    subtitle: "SCM & Operations · Supply Chain · Warehouse · AMS",
    location: "Meda, Lombardia — Milano Area",
    locationNote: "Disponibile da remoto e in sede con rimborso spese. Aperto a progetti internazionali.",
    email: "daniele@danielemaggiolini.com",
    phone: "+39 392 328 7370",
    website: "www.danielemaggiolini.com",
    linkedin: "https://www.linkedin.com/in/daniele-maggiolini/",
    languages: ["Italiano (Madrelingua)", "Inglese", "Spagnolo"],
    yearsExperience: 3,
    bio: "Consulente funzionale Microsoft Dynamics 365 Finance & Operations con 3 anni di esperienza su progetti mid-to-large enterprise. Specializzato in Supply Chain Management, Warehouse Management e Operations.",
    longBio: `Opero come consulente indipendente D365 F&O, affiancando aziende manifatturiere, distributori e system integrator nelle fasi di implementazione, ottimizzazione e supporto continuativo dei loro sistemi ERP.

Il mio punto di forza è la capacità di tradurre i processi operativi reali in configurazioni di sistema efficaci: non mi limito alla parte tecnica, ma lavoro a stretto contatto con i team di business per capire i flussi, le criticità e gli obiettivi concreti.

Disponibile per ingaggi da remoto o in sede con rimborso spese. Aperto a collaborazioni internazionali.`,
  },

  services: [
    {
      id: "implementation",
      icon: "Layers",
      title: "Implementazione End-to-End",
      description:
        "Dalla business analysis al go-live: analisi dei processi, configurazione del sistema, test e validazione, supporto post-avviamento. Coordinamento con sviluppatori e team tecnici nelle fasi critiche.",
      details: [
        "Business analysis e raccolta requisiti",
        "Configurazione e personalizzazione D365 F&O",
        "Testing, validazione e gestione UAT",
        "Go-live support e post-avviamento",
        "Coordinamento con team tecnici e fornitori",
      ],
    },
    {
      id: "ams",
      icon: "Headphones",
      title: "Application Management Services",
      description:
        "Supporto continuativo post go-live: gestione ticket, risoluzione problemi, testing per Microsoft Continuous Updates e assistenza quotidiana agli utenti finali.",
      details: [
        "Gestione e risoluzione ticket evolutivi e correttivi",
        "Testing per Microsoft Continuous Updates",
        "Supporto operativo agli utenti finali",
        "Monitoraggio e manutenzione del sistema",
        "Gestione delle release e aggiornamenti",
      ],
    },
    {
      id: "security",
      icon: "Shield",
      title: "Security Roles & License Optimization",
      description:
        "Revisione completa dei ruoli di sicurezza, mappatura accessi per reparto, ottimizzazione delle licenze Microsoft. Riduzione dei costi e miglioramento della governance applicativa.",
      details: [
        "Audit e mappatura ruoli di sicurezza esistenti",
        "Definizione ruoli per reparto e funzione",
        "Ottimizzazione assegnazione licenze",
        "Rollout e gestione feedback iterativi",
        "Documentazione governance e compliance",
      ],
    },
    {
      id: "training",
      icon: "GraduationCap",
      title: "Formazione & User Adoption",
      description:
        "Affiancamento agli utenti in fase di go-live e post-avviamento, formazione strutturata per team operativi e documentazione funzionale chiara e riutilizzabile.",
      details: [
        "Sessioni di formazione per team operativi",
        "Affiancamento individuale in fase go-live",
        "Redazione documentazione funzionale",
        "Creazione guide utente e materiali formativi",
        "Supporto change management",
      ],
    },
  ],

  skills: {
    core: [
      { name: "Microsoft Dynamics 365 F&O", level: 90 },
      { name: "Supply Chain Management", level: 88 },
      { name: "Warehouse Management (WMS)", level: 85 },
      { name: "Business Process Analysis", level: 82 },
      { name: "Functional Consulting", level: 85 },
      { name: "AMS & Ticket Management", level: 88 },
    ],
    modules: [
      "Accounts Payable & Receivable",
      "Warehouse Management",
      "Production",
      "System Administration",
      "Product Management",
      "Transportation & Shipping",
      "Security & Roles",
      "Intercompany Flows",
    ],
    tools: [
      { name: "Azure DevOps", category: "Project Management" },
      { name: "Microsoft D365 F&O", category: "ERP Platform" },
      { name: "WMS Devices", category: "Warehouse Tech" },
      { name: "Microsoft 365", category: "Productivity" },
    ],
    specializations: [
      "Security Roles Governance",
      "License Optimization",
      "Intercompany Flows",
      "Continuous Update Testing",
      "Go-live Support",
      "Functional Documentation",
    ],
  },

  experience: [
    {
      id: "freelance",
      role: "Freelance ERP Solution Consultant",
      company: "Self-employed",
      period: "Apr 2026 — Presente",
      duration: "In corso",
      location: "Lombardia, Italia · Ibrido",
      type: "Freelance",
      current: true,
      highlights: [
        "Operativo come consulente indipendente D365 F&O su clienti in ambito SCM e Operations",
        "Gestione autonoma dei progetti dalla fase di analisi al supporto post go-live",
        "Collaborazione con aziende e system integrator su attività di consulenza funzionale",
      ],
      projects: [
        {
          name: "Security Roles Review & Optimization",
          period: "Feb — Mag 2026",
          description:
            "Revisione completa dei ruoli di sicurezza D365 F&O su tutti i reparti aziendali. Definizione ruoli per funzione, ottimizzazione licenze e gestione del rollout con feedback iterativi.",
        },
      ],
    },
    {
      id: "porini",
      role: "Junior ERP Consultant",
      company: "PORINI",
      period: "Ott 2023 — Apr 2026",
      duration: "2 anni 7 mesi",
      location: "Sesto San Giovanni, Lombardia · In sede",
      type: "Full-time",
      current: false,
      highlights: [
        "Consulenza funzionale su progetti Microsoft D365 F&O per clienti multi-settore",
        "AMS: gestione ticket, risoluzione problemi e supporto continuativo agli utenti finali",
        "Testing e validazione per Microsoft Continuous Updates, garantendo stabilità del sistema",
        "Supporto end-to-end su sviluppi custom: dalla business analysis al supporto post go-live",
        "Operativo su più moduli F&O: AP/AR, WMS, Produzione, System Administration, Product Management, Transportation",
      ],
      projects: [],
    },
  ],

  education: [
    {
      degree: "Diploma IFTS — Dynamics Specialist",
      institution: "ITS Incom",
      period: "Ott 2023 — Lug 2024",
      focus: "Microsoft Dynamics 365 specialization",
    },
    {
      degree: "Diploma Istituto Tecnico — Informatica e Telecomunicazioni",
      institution: "IIS Jean Monnet",
      period: "2018 — 2023",
      focus: "Informatica e Telecomunicazioni",
    },
  ],

  projects: [
    {
      id: "security-roles",
      title: "Security Roles Review & Optimization",
      period: "Feb 2026 — Mag 2026",
      client: "Cliente Privato",
      tags: ["D365 F&O", "Security", "License Optimization", "Governance"],
      summary:
        "Revisione e redesign completo dei ruoli di sicurezza Microsoft D365 F&O su tutti i reparti aziendali.",
      outcomes: [
        "Mappatura completa delle attività operative per reparto",
        "Definizione ruoli di sicurezza allineati alle responsabilità operative",
        "Riduzione delle assegnazioni licenze non necessarie e ottimizzazione costi",
        "Rollout su utenti con gestione iterativa del feedback",
      ],
      description:
        "Ho guidato un progetto di revisione completa dei ruoli di sicurezza in Microsoft Dynamics 365 F&O, partendo dall'analisi dei processi operativi di ciascun reparto. Il lavoro ha incluso la mappatura degli accessi esistenti, la ridefinizione dei ruoli per funzione e la successiva ottimizzazione delle licenze assegnate, con un impatto diretto sulla riduzione dei costi aziendali.",
    },
  ],

  workMethod: [
    {
      step: "01",
      title: "Analisi dei processi",
      description:
        "Ogni progetto inizia con una lettura attenta dei processi reali dell'azienda. Non parto da template: capire come lavora il business è la base di ogni configurazione efficace.",
    },
    {
      step: "02",
      title: "Formalizzazione e specifiche",
      description:
        "Traduco i requisiti di business in specifiche funzionali chiare, condivisibili con il team tecnico e con il cliente. La documentazione è parte integrante del lavoro, non un'aggiunta.",
    },
    {
      step: "03",
      title: "Configurazione e iterazione",
      description:
        "Configuro il sistema in modo incrementale, con cicli di test e validazione continua. Il feedback degli utenti è integrato in ogni fase, non solo a fine progetto.",
    },
    {
      step: "04",
      title: "Go-live e supporto",
      description:
        "Affianco il cliente nelle fasi critiche di avvio e resto disponibile nel post-produzione. Un go-live riuscito è il punto di partenza, non l'arrivo.",
    },
  ],

  whyChooseMe: [
    {
      icon: "Target",
      title: "Focus operativo reale",
      description:
        "Non configurazione fine a se stessa: il sistema deve supportare i processi del business, non il contrario. Lavoro partendo dai flussi reali.",
    },
    {
      icon: "Zap",
      title: "Autonomia e rapidità",
      description:
        "Gestisco in autonomia le attività progettuali, dalla raccolta requisiti al go-live. Meno overhead, più esecuzione.",
    },
    {
      icon: "Globe",
      title: "Disponibile da remoto e in sede",
      description:
        "Operativo in modalità ibrida: remoto come default, in sede quando il progetto lo richiede. Aperto a clienti internazionali.",
    },
    {
      icon: "BookOpen",
      title: "Documentazione inclusa",
      description:
        "Ogni configurazione è accompagnata da documentazione funzionale chiara. Il cliente capisce sempre cosa è stato fatto e perché.",
    },
    {
      icon: "RefreshCw",
      title: "Aggiornamento continuo",
      description:
        "Microsoft Dynamics evolve rapidamente. Ho esperienza diretta con i Continuous Update: testo, valido e mi adatto ad ogni release.",
    },
    {
      icon: "Users",
      title: "Interfaccia tra business e IT",
      description:
        "Parlo sia con i responsabili di reparto che con i developer. Traduco i requisiti di business in specifiche tecniche comprensibili.",
    },
  ],

  faq: [
    {
      question: "Lavori solo da remoto o anche in sede?",
      answer:
        "Principalmente da remoto, che resta la modalità preferita per efficienza e flessibilità. Sono disponibile per trasferte in sede quando il progetto lo richiede, con rimborso delle spese di viaggio e alloggio. Aperto a clienti italiani e internazionali.",
    },
    {
      question: "Collabori con system integrator e software house?",
      answer:
        "Sì, è una delle modalità di collaborazione che preferisco. Ho già lavorato all'interno di progetti gestiti da partner Microsoft, supportando attività di consulenza funzionale, AMS e formazione per clienti finali.",
    },
    {
      question: "Su quali moduli D365 F&O hai più esperienza?",
      answer:
        "Le mie aree core sono Supply Chain Management e Warehouse Management. Ho lavorato anche su Accounts Payable, Accounts Receivable, Produzione, System Administration, Product Management e Transportation & Shipping.",
    },
    {
      question: "Gestisci anche la parte di security e licenze?",
      answer:
        "Sì. Ho guidato un progetto specifico di Security Roles Review & Optimization: dalla mappatura degli accessi alla definizione di ruoli per reparto, fino all'ottimizzazione delle licenze assegnate con riduzione dei costi per il cliente.",
    },
    {
      question: "Quali sono i tempi di disponibilità?",
      answer:
        "Per nuovi progetti o collaborazioni, contattami via email per discutere disponibilità e modalità. I tempi dipendono dai progetti in corso: è preferibile pianificare con qualche settimana di anticipo.",
    },
    {
      question: "Gestisci anche la formazione degli utenti?",
      answer:
        "Sì. La formazione utenti e il supporto all'adozione del sistema sono parte integrante della mia offerta. Erogo sessioni strutturate per team operativi e produco documentazione funzionale riutilizzabile.",
    },
  ],
};
