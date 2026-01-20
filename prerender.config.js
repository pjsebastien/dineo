// Configuration pour le prerendering
export default {
  // Port du serveur de preview
  port: 4173,

  // Routes statiques
  staticRoutes: [
    '/',
    '/activites-famille-reunion',
    '/activites-couple-reunion',
    '/activites-insolites-reunion',
    '/activites-pas-cheres-reunion',
    '/activites-a-offrir-reunion',
    '/que-faire-saint-pierre-reunion',
    '/que-faire-saint-leu-reunion',
    '/que-faire-cilaos-reunion',
    '/que-faire-piton-fournaise-reunion',
    '/que-faire-saint-benoit-reunion',
    '/mentions-legales',
    '/politique-confidentialite',
    '/cgu',
  ],

  // Function to generate dynamic routes (activity pages)
  async getDynamicRoutes() {
    // Import activities data
    const activitiesModule = await import('./src/data/activities.ts');
    const activities = activitiesModule.activities;

    return activities.map(activity => `/activite/${activity.slug}`);
  }
};
