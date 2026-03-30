export type Language = "es" | "en" | "fr";

type TranslationSchema = {
  nav: {
    home: string;
    gallery: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    quote: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  gallery: {
    subtitle: string;
    title: string;
    filters: {
      all: string;
      realism: string;
      fineline: string;
    };
    works: Array<{ title: string; category: string; categoryKey: "realism" | "fineline" }>;
  };
  stats: {
    tattoos: string;
    years: string;
    hygiene: string;
    rating: string;
  };
  services: {
    subtitle: string;
    title: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
  };
  about: {
    subtitle: string;
    title: string;
    yearsLabel: string;
    paragraphs: string[];
    role: string;
  };
  contact: {
    subtitle: string;
    title: string;
    intro: string;
    bookingTitle: string;
    bookingSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    dateLabel: string;
    datePlaceholder: string;
    timeLabel: string;
    styleLabel: string;
    stylePlaceholder: string;
    note: string;
    submit: string;
    validation: string;
  };
  footer: {
    rights: string;
  };
  notFound: {
    title: string;
    back: string;
  };
};

export const translations: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      home: "Inicio",
      gallery: "Galería",
      services: "Servicios",
      about: "Sobre Mí",
      contact: "Contacto",
    },
    hero: {
      subtitle: "Tattoo Artist",
      quote: '"Arte que cuenta historias"',
      description:
        "Artista tatuador profesional especializado en realismo y línea fina. Cada pieza es una obra única diseñada para ti.",
      ctaPrimary: "Agendar cita",
      ctaSecondary: "@pipeandradetattoo",
    },
    gallery: {
      subtitle: "Mi Trabajo",
      title: "Galería",
      filters: { all: "Todos", realism: "Realismo", fineline: "Línea Fina" },
      works: [
        { title: "Retrato realista", category: "Realismo", categoryKey: "realism" },
        { title: "Flor línea fina", category: "Línea Fina", categoryKey: "fineline" },
        { title: "León realista", category: "Realismo", categoryKey: "realism" },
        { title: "Brújula geométrica", category: "Línea Fina", categoryKey: "fineline" },
        { title: "Ojo con lágrimas", category: "Realismo", categoryKey: "realism" },
      ],
    },
    stats: {
      tattoos: "Tatuajes realizados",
      years: "Años de experiencia",
      hygiene: "Higiene y seguridad",
      rating: "Calificación clientes",
    },
    services: {
      subtitle: "Especialidades",
      title: "Servicios",
      description: "Cada estilo tiene su propia magia. Descubre cuál resuena contigo.",
      items: [
        {
          title: "Realismo",
          desc: "Tatuajes hiperrealistas que capturan cada detalle con precisión fotográfica.",
        },
        {
          title: "Línea fina",
          desc: "Trazos delicados y precisos para diseños elegantes y minimalistas.",
        },
        {
          title: "Diseño personalizado",
          desc: "Creamos diseños únicos basados en tus ideas y visión personal.",
        },
        {
          title: "Cover up",
          desc: "Transformamos tatuajes antiguos en nuevas obras de arte.",
        },
      ],
    },
    about: {
      subtitle: "Conóceme",
      title: "Mi Historia",
      yearsLabel: "Años",
      paragraphs: [
        "Desde pequeño, el arte fue mi forma de expresión. Descubrí que la piel era el lienzo perfecto para crear obras que cuentan historias.",
        "Me especializo en realismo y línea fina, dos estilos que me permiten explorar precisión y delicadeza en cada diseño.",
        "Mi estudio está pensado para una experiencia cómoda y segura, con materiales de alta calidad y protocolos de higiene estrictos.",
      ],
      role: "Artista Tatuador",
    },
    contact: {
      subtitle: "Hablemos",
      title: "Agenda tu cita",
      intro: "¿Tienes una idea en mente? Agenda tu consulta y finaliza la reserva directamente por WhatsApp.",
      bookingTitle: "Agenda tu cita",
      bookingSubtitle: "Selecciona fecha y hora, y finaliza tu reserva directamente en WhatsApp.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      dateLabel: "Fecha",
      datePlaceholder: "Fecha",
      timeLabel: "Hora",
      styleLabel: "Idea o estilo",
      stylePlaceholder: "Describe el estilo o referencia (opcional)",
      note: "Al reservar serás dirigido a WhatsApp:",
      submit: "Reservar por WhatsApp",
      validation: "Completa nombre, fecha y hora para continuar.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    notFound: {
      title: "Oops, página no encontrada",
      back: "Volver al inicio",
    },
  },
  en: {
    nav: {
      home: "Home",
      gallery: "Gallery",
      services: "Services",
      about: "About Me",
      contact: "Contact",
    },
    hero: {
      subtitle: "Tattoo Artist",
      quote: '"Art that tells stories"',
      description:
        "Professional tattoo artist specialized in realism and fine line work. Each piece is unique and crafted for you.",
      ctaPrimary: "Book appointment",
      ctaSecondary: "@pipeandradetattoo",
    },
    gallery: {
      subtitle: "My Work",
      title: "Gallery",
      filters: { all: "All", realism: "Realism", fineline: "Fine Line" },
      works: [
        { title: "Realistic portrait", category: "Realism", categoryKey: "realism" },
        { title: "Fine line flower", category: "Fine Line", categoryKey: "fineline" },
        { title: "Realistic lion", category: "Realism", categoryKey: "realism" },
        { title: "Geometric compass", category: "Fine Line", categoryKey: "fineline" },
        { title: "Eye with tears", category: "Realism", categoryKey: "realism" },
      ],
    },
    stats: {
      tattoos: "Completed tattoos",
      years: "Years of experience",
      hygiene: "Hygiene and safety",
      rating: "Client rating",
    },
    services: {
      subtitle: "Specialties",
      title: "Services",
      description: "Every style has its own magic. Discover what resonates with you.",
      items: [
        {
          title: "Realism",
          desc: "Hyper-realistic tattoos that capture every detail with photographic precision.",
        },
        {
          title: "Fine line",
          desc: "Delicate and precise strokes for elegant and minimalist designs.",
        },
        {
          title: "Custom design",
          desc: "Unique designs created from your ideas and personal vision.",
        },
        {
          title: "Cover up",
          desc: "We transform old tattoos into brand new pieces of art.",
        },
      ],
    },
    about: {
      subtitle: "Meet Me",
      title: "My Story",
      yearsLabel: "Years",
      paragraphs: [
        "Since childhood, art has been my way of expression. I discovered skin as the perfect canvas for meaningful pieces.",
        "I specialize in realism and fine line, two styles that let me explore precision and delicacy in every tattoo.",
        "My studio is designed for a comfortable and safe experience, using high-quality materials and strict hygiene standards.",
      ],
      role: "Tattoo Artist",
    },
    contact: {
      subtitle: "Let's Talk",
      title: "Book your appointment",
      intro: "Have an idea in mind? Schedule your consultation and complete your booking directly on WhatsApp.",
      bookingTitle: "Book your appointment",
      bookingSubtitle: "Choose your date and time, then complete your booking directly on WhatsApp.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      dateLabel: "Date",
      datePlaceholder: "Date",
      timeLabel: "Time",
      styleLabel: "Idea or style",
      stylePlaceholder: "Describe style or reference (optional)",
      note: "You will be redirected to WhatsApp:",
      submit: "Book via WhatsApp",
      validation: "Fill in name, date and time to continue.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    notFound: {
      title: "Oops, page not found",
      back: "Back to home",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      gallery: "Galerie",
      services: "Services",
      about: "À Propos",
      contact: "Contact",
    },
    hero: {
      subtitle: "Artiste Tatoueur",
      quote: '"Un art qui raconte des histoires"',
      description:
        "Tatoueur professionnel spécialisé en réalisme et fine line. Chaque pièce est unique et conçue pour vous.",
      ctaPrimary: "Prendre rendez-vous",
      ctaSecondary: "@pipeandradetattoo",
    },
    gallery: {
      subtitle: "Mon Travail",
      title: "Galerie",
      filters: { all: "Tous", realism: "Réalisme", fineline: "Fine Line" },
      works: [
        { title: "Portrait réaliste", category: "Réalisme", categoryKey: "realism" },
        { title: "Fleur fine line", category: "Fine Line", categoryKey: "fineline" },
        { title: "Lion réaliste", category: "Réalisme", categoryKey: "realism" },
        { title: "Boussole géométrique", category: "Fine Line", categoryKey: "fineline" },
        { title: "Oeil avec larmes", category: "Réalisme", categoryKey: "realism" },
      ],
    },
    stats: {
      tattoos: "Tatouages réalisés",
      years: "Années d'expérience",
      hygiene: "Hygiène et sécurité",
      rating: "Avis clients",
    },
    services: {
      subtitle: "Spécialités",
      title: "Services",
      description: "Chaque style a sa magie. Découvrez celui qui vous correspond.",
      items: [
        {
          title: "Réalisme",
          desc: "Tatouages hyperréalistes avec une précision photographique.",
        },
        {
          title: "Fine line",
          desc: "Traits délicats et précis pour des designs élégants et minimalistes.",
        },
        {
          title: "Design personnalisé",
          desc: "Création de designs uniques selon vos idées et votre vision.",
        },
        {
          title: "Cover up",
          desc: "Transformation d'anciens tatouages en nouvelles oeuvres d'art.",
        },
      ],
    },
    about: {
      subtitle: "Me Connaître",
      title: "Mon Histoire",
      yearsLabel: "Années",
      paragraphs: [
        "Depuis l'enfance, l'art est mon mode d'expression. J'ai découvert la peau comme toile idéale pour raconter des histoires.",
        "Je me spécialise en réalisme et fine line, deux styles qui me permettent de travailler précision et délicatesse.",
        "Mon studio est conçu pour offrir une expérience confortable et sûre avec des matériaux premium et une hygiène stricte.",
      ],
      role: "Artiste Tatoueur",
    },
    contact: {
      subtitle: "Parlons",
      title: "Prenez rendez-vous",
      intro: "Vous avez une idée en tête ? Planifiez votre consultation et finalisez votre réservation sur WhatsApp.",
      bookingTitle: "Prenez rendez-vous",
      bookingSubtitle: "Choisissez la date et l'heure, puis finalisez directement sur WhatsApp.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      dateLabel: "Date",
      datePlaceholder: "Date",
      timeLabel: "Heure",
      styleLabel: "Idée ou style",
      stylePlaceholder: "Décrivez le style ou la référence (optionnel)",
      note: "Vous serez redirigé vers WhatsApp :",
      submit: "Réserver via WhatsApp",
      validation: "Complétez nom, date et heure pour continuer.",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
    notFound: {
      title: "Oups, page introuvable",
      back: "Retour à l'accueil",
    },
  },
};
