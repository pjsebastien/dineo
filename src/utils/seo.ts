export const generateStructuredData = (activity: any) => {
  const rating = parseFloat(activity.note.split('/')[0]);
  const reviewCount = parseInt(activity.nb_avis.replace('≈', '').replace('~', ''));
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": activity.titre,
    "description": activity.meta_description,
    "image": [activity.image_url_1, activity.image_url_2, activity.image_url_3],
    "offers": {
      "@type": "Offer",
      "price": activity.prix_des.replace('Dès ', '').replace(' €', ''),
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "provider": {
      "@type": "Organization",
      "name": "Dineo"
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