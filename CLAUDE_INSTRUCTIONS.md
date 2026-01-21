# Instructions Claude - Projet Dineo

## Ajouter un article de blog avec publication programmée

Le site utilise un système de publication programmée au build-time. Les articles avec `publishAt > aujourd'hui` ne sont pas générés (vrai 404).

### Étapes pour créer un nouvel article :

1. **Créer le composant** dans `src/components/` (ex: `BlogPostNomArticle.tsx`)
   - Utiliser un article existant comme template (ex: `BlogPostJanuaryReunion.tsx`)

2. **Ajouter l'entrée dans `src/data/blogPosts.ts`** :
```typescript
{
  id: '22',  // Incrémenter l'ID
  slug: 'mon-nouvel-article',
  titre: 'Titre de l\'article',
  excerpt: 'Description courte...',
  image: 'https://url-image.jpg',
  date: '1 Février 2026',        // Date d'affichage
  publishAt: '2026-02-01',       // Date de publication ISO (YYYY-MM-DD)
  readTime: '10 min',
  category: 'Catégorie',         // Voir blogCategories dans le même fichier
  author: 'Équipe Dineo'
}
```

3. **Ajouter l'import dans `src/App.tsx`** (section imports blog, vers ligne 20-50)

4. **Ajouter le mapping dans `blogComponentMap`** dans `src/App.tsx` (ligne 69-91) :
```typescript
'mon-nouvel-article': BlogPostNomArticle,
```

### Rebuild automatique

- GitHub Actions déclenche un rebuild Vercel tous les jours à 5h UTC
- Les articles avec `publishAt <= date du jour` apparaissent automatiquement
- Fichier workflow : `.github/workflows/daily-build.yml`

### Catégories disponibles

- Van & Road Trip
- Randonnée
- Voyage & Conseils
- Pratique
- Activités aériennes
- Culture & Gastronomie

### Fichiers clés

- `src/data/blogPosts.ts` - Données centralisées des articles
- `src/App.tsx` - Routes et mapping composants
- `generate-html.mjs` - Génération HTML statique (filtrage par publishAt)
- `.github/workflows/daily-build.yml` - Rebuild quotidien
