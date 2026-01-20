export interface Activity {
  titre: string;
  categorie: string;
  sous_categorie: string;
  destination: string;
  lieu: string;
  url: string;
  prix_des: string;
  duree: string;
  age_min: string;
  niveau: string;
  politique_annulation: string;
  langues: string;
  point_de_rdv: string;
  comprend: string;
  ne_comprend_pas: string;
  a_prevoir: string;
  pre_requis: string;
  conditions_particulieres: string;
  organisateur: string;
  note: string;
  nb_avis: string;
  points_forts: string;
  resume: string;
  seo_title: string;
  slug: string;
  meta_description: string;
  image_url_1: string;
  image_url_2: string;
  image_url_3: string;
}

export interface FilterState {
  category: string;
  location: string;
  priceRange: string;
  duration: string;
  searchQuery: string;
}