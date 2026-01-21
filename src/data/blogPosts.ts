// Données centralisées des articles de blog avec publication programmée
// publishAt: date ISO au format "YYYY-MM-DD" - l'article sera publié à partir de cette date

export interface BlogPostData {
  id: string;
  slug: string;
  titre: string;
  excerpt: string;
  image: string;
  date: string;           // Date d'affichage (ex: "31 Janvier 2026")
  publishAt: string;      // Date de publication ISO (ex: "2026-01-31")
  readTime: string;
  category: string;
  author: string;
}

// Liste complète des articles - triés du plus récent au plus ancien
export const blogPosts: BlogPostData[] = [
  {
    id: '21',
    slug: 'voyage-reunion-decembre',
    titre: 'Voyager à La Réunion en décembre : météo, avis et activités',
    excerpt: 'Décembre à La Réunion : les fêtes sous les tropiques avec letchis, plage et ambiance festive créole. Guide complet pour Noël au soleil.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/baignade-a-ile-de-La-Reunion.jpg',
    date: '31 Janvier 2026',
    publishAt: '2026-01-31',
    readTime: '14 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '20',
    slug: 'voyage-reunion-novembre',
    titre: 'Voyager à La Réunion en novembre : météo, avis et activités',
    excerpt: 'Novembre à La Réunion : flamboyants en fleurs, tarifs attractifs et peu de touristes. Le bon plan méconnu pour visiter l\'île.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/plage-ile-de-La-Reunion.jpg',
    date: '30 Janvier 2026',
    publishAt: '2026-01-30',
    readTime: '13 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '19',
    slug: 'voyage-reunion-octobre',
    titre: 'Voyager à La Réunion en octobre : météo, avis et activités',
    excerpt: 'Octobre à La Réunion : le printemps austral avec nature en fleurs, dernières baleines et conditions idéales pour la randonnée.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/trou-de-fer-ile-de-La-Reunion.jpg',
    date: '29 Janvier 2026',
    publishAt: '2026-01-29',
    readTime: '13 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '18',
    slug: 'voyage-reunion-septembre',
    titre: 'Voyager à La Réunion en septembre : météo, avis et activités',
    excerpt: 'Septembre à La Réunion : LE mois parfait ! Baleines, randonnée idéale, peu de touristes et prix attractifs. Notre coup de cœur.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/randonnee-La-Reunion.jpg',
    date: '28 Janvier 2026',
    publishAt: '2026-01-28',
    readTime: '14 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '17',
    slug: 'voyage-reunion-aout',
    titre: 'Voyager à La Réunion en août : météo, avis et activités',
    excerpt: 'Août à La Réunion : haute saison avec baleines omniprésentes, météo idéale mais forte affluence. Guide complet et conseils.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/saut-baleine-ile-de-La-Reunion.jpg',
    date: '27 Janvier 2026',
    publishAt: '2026-01-27',
    readTime: '14 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '16',
    slug: 'voyage-reunion-juillet',
    titre: 'Voyager à La Réunion en juillet : météo, avis et activités',
    excerpt: 'Juillet à La Réunion : vacances d\'hiver au soleil avec les premières baleines à bosse. Haute saison, conseils et budget.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/baleine-ile-de-La-Reunion.jpg',
    date: '26 Janvier 2026',
    publishAt: '2026-01-26',
    readTime: '13 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '15',
    slug: 'voyage-reunion-juin',
    titre: 'Voyager à La Réunion en juin : météo, avis et activités',
    excerpt: 'Juin à La Réunion : début de l\'hiver austral idéal pour la randonnée et les premières observations de baleines.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/cirque-ile-de-La-Reunion.jpg',
    date: '25 Janvier 2026',
    publishAt: '2026-01-25',
    readTime: '13 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '14',
    slug: 'voyage-reunion-avril',
    titre: 'Voyager à La Réunion en avril : météo, avis et activités',
    excerpt: 'Avril à La Réunion : la fin de la saison des pluies, climat agréable et début de la saison sèche. Conseils et activités.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/randonnee-ile-de-La-Reunion.jpg',
    date: '24 Janvier 2026',
    publishAt: '2026-01-24',
    readTime: '12 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '13',
    slug: 'voyage-reunion-mars',
    titre: 'Voyager à La Réunion en mars : météo, avis et activités',
    excerpt: 'Mars à La Réunion : fin de la saison humide, cascades spectaculaires et tarifs encore bas. Guide météo et conseils.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/bassin-ile-de-La-Reunion.jpg',
    date: '23 Janvier 2026',
    publishAt: '2026-01-23',
    readTime: '12 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '12',
    slug: 'voyage-reunion-fevrier',
    titre: 'Voyager à La Réunion en février : météo, avis et activités',
    excerpt: 'Février à La Réunion : pic de la saison des pluies mais aussi les prix les plus bas de l\'année. Guide complet et conseils.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2026/01/cascade-ile-de-La-Reunion.jpg',
    date: '22 Janvier 2026',
    publishAt: '2026-01-22',
    readTime: '12 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '10',
    slug: 'tarif-vol-helicoptere-la-reunion',
    titre: 'Tarif vol en hélicoptère à La Réunion : prix et réservation',
    excerpt: 'Découvrez les tarifs des vols en hélicoptère à La Réunion : de 110€ à 390€. Survol du volcan, cirques, cascades. Réservation en ligne et conseils.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2023/03/helicoptere-reunion-tarifs-et-avis-1170x630.jpg',
    date: '21 Janvier 2026',
    publishAt: '2026-01-21',
    readTime: '14 min',
    category: 'Activités aériennes',
    author: 'Équipe Dineo'
  },
  {
    id: '1',
    slug: 'ou-dormir-en-van-reunion',
    titre: 'Où dormir en van à La Réunion ? Top 10 des meilleurs spots',
    excerpt: 'Cap Homard, Maïdo, volcan, forêt de Bélouve... Découvrez les spots testés pour votre road trip en van aménagé à La Réunion.',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
    date: '18 Janvier 2026',
    publishAt: '2026-01-18',
    readTime: '15 min',
    category: 'Van & Road Trip',
    author: 'Équipe Dineo'
  },
  {
    id: '2',
    slug: 'road-trip-van-reunion-10-jours',
    titre: 'Road trip en van à La Réunion : itinéraire de 10 jours',
    excerpt: 'L\'itinéraire parfait pour découvrir La Réunion en van aménagé : spots de camping, activités, conseils pratiques.',
    image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80',
    date: '12 Janvier 2026',
    publishAt: '2026-01-12',
    readTime: '20 min',
    category: 'Van & Road Trip',
    author: 'Équipe Dineo'
  },
  {
    id: '3',
    slug: 'cascade-niagara-la-reunion',
    titre: 'Cascade Niagara à La Réunion : accès, randonnée et baignade',
    excerpt: 'Accès facile, randonnée courte 30 min et baignade rafraîchissante. Découvrez la Cascade Niagara à Sainte-Suzanne avec notre itinéraire détaillé.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2023/03/cascade-niagara-la-reunion-1170x630.jpg',
    date: '5 Janvier 2026',
    publishAt: '2026-01-05',
    readTime: '12 min',
    category: 'Randonnée',
    author: 'Équipe Dineo'
  },
  {
    id: '4',
    slug: 'voyage-reunion-janvier',
    titre: 'Voyager à La Réunion en janvier : météo, avis et activités',
    excerpt: 'Saison chaude et humide, nature luxuriante, cascades spectaculaires : découvrez si janvier est une bonne période pour visiter La Réunion.',
    image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80',
    date: '28 Décembre 2025',
    publishAt: '2025-12-28',
    readTime: '14 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '5',
    slug: 'voyage-reunion-mai',
    titre: 'Voyager à La Réunion en mai : météo, conseils et activités',
    excerpt: 'Mai à La Réunion : l\'une des meilleures périodes de l\'année. Météo idéale, saison sèche, conditions parfaites pour la randonnée.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    date: '15 Décembre 2025',
    publishAt: '2025-12-15',
    readTime: '13 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '6',
    slug: 'quelle-heure-est-il-a-la-reunion',
    titre: 'Quelle heure est-il à La Réunion ?',
    excerpt: 'Fuseau horaire UTC+4, décalage avec la France (+2h ou +3h selon la saison). Tout savoir sur l\'heure locale réunionnaise.',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80',
    date: '3 Décembre 2025',
    publishAt: '2025-12-03',
    readTime: '6 min',
    category: 'Pratique',
    author: 'Équipe Dineo'
  },
  {
    id: '7',
    slug: 'la-reunion-dom-ou-tom',
    titre: 'La Réunion est-elle un DOM ou un TOM ?',
    excerpt: 'La Réunion est un DOM (département français depuis 1946), pas un TOM. Découvrez son statut juridique et ce que cela implique pour votre voyage.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80',
    date: '20 Novembre 2025',
    publishAt: '2025-11-20',
    readTime: '8 min',
    category: 'Pratique',
    author: 'Équipe Dineo'
  },
  {
    id: '8',
    slug: 'cascade-jacqueline-langevin',
    titre: 'Cascade Jacqueline à Langevin : randonnée et baignade',
    excerpt: 'Magnifique cascade du sud sauvage accessible par une randonnée facile 1h A/R avec un superbe bassin pour la baignade.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2023/03/cascade-jacqueline-langevin-1170x630.jpg',
    date: '8 Novembre 2025',
    publishAt: '2025-11-08',
    readTime: '10 min',
    category: 'Randonnée',
    author: 'Équipe Dineo'
  },
  {
    id: '9',
    slug: 'la-reunion-ou-ile-maurice',
    titre: 'La Réunion ou Île Maurice : que choisir ?',
    excerpt: 'Comparatif complet pour choisir entre La Réunion et Maurice selon vos envies : paysages, activités, budget, culture. Nos conseils pour faire le bon choix.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    date: '25 Octobre 2025',
    publishAt: '2025-10-25',
    readTime: '15 min',
    category: 'Voyage & Conseils',
    author: 'Équipe Dineo'
  },
  {
    id: '11',
    slug: 'histoire-rhum-la-reunion',
    titre: 'L\'histoire du rhum de La Réunion : distilleries et saveurs créoles',
    excerpt: 'Trois siècles de tradition rhumière : découvrez l\'histoire fascinante du rhum réunionnais, ses distilleries emblématiques et les secrets du rhum arrangé.',
    image: 'https://www.blog.dineo.re/wp-content/uploads/2023/03/rhum-de-lile-de-la-reunion-1170x630.jpg',
    date: '10 Octobre 2025',
    publishAt: '2025-10-10',
    readTime: '16 min',
    category: 'Culture & Gastronomie',
    author: 'Équipe Dineo'
  }
];

// Catégories disponibles
export const blogCategories = [
  'Tous',
  'Van & Road Trip',
  'Randonnée',
  'Voyage & Conseils',
  'Pratique',
  'Activités aériennes',
  'Culture & Gastronomie'
];

/**
 * Retourne uniquement les articles publiés (publishAt <= aujourd'hui)
 * À utiliser dans le code React et dans generate-html.mjs
 */
export const getPublishedPosts = (): BlogPostData[] => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Début de journée pour comparaison

  return blogPosts.filter(post => {
    const publishDate = new Date(post.publishAt);
    publishDate.setHours(0, 0, 0, 0);
    return publishDate <= now;
  });
};

/**
 * Retourne les slugs des articles publiés pour generate-html.mjs
 */
export const getPublishedSlugs = (): string[] => {
  return getPublishedPosts().map(post => post.slug);
};
