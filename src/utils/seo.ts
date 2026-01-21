export const generateStructuredData = (activity: any) => {
  const rating = parseFloat(activity.note.split('/')[0]);
  const reviewCount = parseInt(activity.nb_avis.replace('≈', '').replace('~', ''));
  const price = activity.prix_des.replace('Dès ', '').replace(' €', '').replace(',', '.');

  // Date de validité du prix : 1 an à partir d'aujourd'hui
  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
  const priceValidUntilISO = priceValidUntil.toISOString().split('T')[0];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": activity.titre,
    "description": activity.meta_description,
    "image": [activity.image_url_1, activity.image_url_2, activity.image_url_3],
    "url": `https://dineo.re/activite/${activity.slug}`,
    "brand": {
      "@type": "Brand",
      "name": activity.organisateur && activity.organisateur !== 'NA' ? activity.organisateur : "Dineo"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://dineo.re/activite/${activity.slug}`,
      "price": price,
      "priceCurrency": "EUR",
      "priceValidUntil": priceValidUntilISO,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Dineo",
        "url": "https://dineo.re"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "category": activity.categorie,
    "provider": {
      "@type": "Organization",
      "name": "Dineo",
      "url": "https://dineo.re"
    }
  };
};

export const getRandomInternalLink = () => {
  const anchors = [
    "activités île de la Réunion",
    "activité la Réunion", 
    "activités à faire à la Réunion"
  ];
  return anchors[Math.floor(Math.random() * anchors.length)];
};

export const extractPrice = (priceString: string): number => {
  const match = priceString.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

export const extractDuration = (durationString: string): number => {
  const match = durationString.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

// FAQ Schema pour les pages activités
export const generateFAQSchema = (activity: any) => {
  const faqs = [
    {
      question: "Cette activité est-elle adaptée aux débutants ?",
      answer: activity.niveau === 'Accessible à tous'
        ? "Absolument ! Cette activité est spécialement conçue pour accueillir les débutants. Votre guide adaptera le rythme et les explications à votre niveau, et tout l'équipement nécessaire est fourni."
        : activity.niveau === 'Sportif occasionnel'
        ? "Une condition physique de base est recommandée, mais aucune expérience préalable n'est nécessaire. L'encadrement professionnel vous permettra de progresser en toute sécurité."
        : "Cette activité s'adresse à des personnes ayant déjà une bonne condition physique. Une expérience préalable est recommandée pour profiter pleinement de l'expérience."
    },
    {
      question: "L'équipement est-il fourni ?",
      answer: `Oui, ${activity.comprend.toLowerCase()}. Vous n'avez qu'à prévoir ${activity.a_prevoir.toLowerCase()}. L'équipement est régulièrement contrôlé et répond aux normes de sécurité en vigueur.`
    },
    {
      question: "À partir de quel âge peut-on participer ?",
      answer: `Cette activité est accessible dès ${activity.age_min}. ${parseInt(activity.age_min) < 12
        ? "Les enfants doivent être accompagnés d'un adulte et le guide adaptera l'activité à leur âge."
        : "Les mineurs doivent être accompagnés d'un adulte ou présenter une autorisation parentale."}`
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer: `Cette activité bénéficie d'une politique d'annulation ${activity.politique_annulation.toLowerCase()}. ${activity.politique_annulation === 'Flexible'
        ? "Vous pouvez généralement annuler jusqu'à 24h avant l'activité pour un remboursement complet."
        : "Les conditions d'annulation varient selon le prestataire. Nous vous recommandons de vérifier les modalités précises lors de votre réservation."}`
    },
    {
      question: "Quel est le prix de cette activité ?",
      answer: `Le tarif de cette activité est ${activity.prix_des.toLowerCase()} par personne. Ce prix inclut ${activity.comprend.toLowerCase()}.`
    }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Breadcrumb Schema
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Organization Schema pour la page d'accueil
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dineo",
    "url": "https://dineo.re",
    "logo": "https://dineo.re/logo.png",
    "description": "Découvrez et réservez les meilleures activités à faire à La Réunion : randonnées, canyoning, parapente, plongée et bien plus encore.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressRegion": "La Réunion"
    },
    "sameAs": [
      "https://www.instagram.com/dineo.re",
      "https://www.facebook.com/dineo.re"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French"]
    }
  };
};

// WebSite Schema avec SearchAction pour la page d'accueil
export const generateWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dineo",
    "url": "https://dineo.re",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dineo.re/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

// LocalBusiness Schema pour les pages de destinations
export const generateDestinationSchema = (destination: {
  name: string;
  description: string;
  image: string;
  slug: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.description,
    "image": destination.image,
    "url": `https://dineo.re/${destination.slug}`,
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "La Réunion",
      "containedInPlace": {
        "@type": "Country",
        "name": "France"
      }
    },
    "touristType": ["Adventure travelers", "Nature lovers", "Family travelers"]
  };
};