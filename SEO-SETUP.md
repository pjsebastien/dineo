# Configuration SEO et Prerendering - Dineo

## Problème résolu

Le site était une **SPA (Single Page Application)** React avec rendu côté client uniquement.
Les moteurs de recherche voyaient seulement `<div id="root"></div>` sans contenu.

## Solution mise en place

### 1. **Amélioration du HTML de base** ([index.html](index.html))

- Ajout de métadonnées SEO complètes dans le `<head>`
- Balises Open Graph pour les réseaux sociaux
- Structured Data (JSON-LD) pour Google
- Balise `<noscript>` avec contenu de fallback
- Langue française (`lang="fr"`)
- Preconnect vers Cloudinary pour les performances

### 2. **Prerendering avec react-snap**

React-snap génère automatiquement du HTML statique pour chaque page après le build.

**Configuration dans** [package.json](package.json):
```json
"scripts": {
  "postbuild": "react-snap"  // S'exécute automatiquement après npm run build
}
```

**Routes pré-rendues:**
- Page d'accueil: `/`
- Pages thématiques: `/activites-famille-reunion`, `/activites-couple-reunion`, etc.
- Pages par ville: `/que-faire-saint-pierre-reunion`, etc.
- Pages légales: `/mentions-legales`, `/politique-confidentialite`, `/cgu`
- **Toutes les pages d'activités** sont découvertes automatiquement via le crawling

### 3. **Configuration Vercel** ([vercel.json](vercel.json))

- Redirections SPA configurées
- Headers de sécurité (X-Content-Type-Options, X-Frame-Options, etc.)
- Cache optimisé pour les assets statiques (1 an)

## Comment ça fonctionne

1. **Développement**: `npm run dev`
   - Le site fonctionne normalement en mode SPA

2. **Build pour production**: `npm run build`
   - Vite construit l'application
   - **Ensuite automatiquement**: react-snap lance un navigateur headless (Puppeteer)
   - React-snap visite chaque page définie
   - Le HTML complet généré par React est sauvegardé dans `dist/`
   - Chaque route a son propre `index.html` avec le contenu complet

3. **Résultat**:
   - `/dist/index.html` → Page d'accueil avec HTML complet
   - `/dist/activites-famille-reunion/index.html` → Page famille avec HTML complet
   - `/dist/activite/snorkeling-saint-leu/index.html` → Page activité avec HTML complet
   - etc.

## Vérification

Après le build, vérifiez le contenu HTML:

```bash
# Voir le HTML généré pour la page d'accueil
cat dist/index.html

# Voir le HTML généré pour une activité
cat dist/activite/snorkeling-saint-leu/index.html
```

Vous devriez voir:
- ✅ Tout le contenu HTML de la page
- ✅ Les métadonnées correctes (title, description)
- ✅ Le JSON-LD structuré
- ✅ Plus de simple `<div id="root"></div>`

## Performance SEO

### Avant
```html
<div id="root"></div>
<script src="/assets/index.js"></script>
```
❌ Google voit une page vide

### Après
```html
<div id="root">
  <header>...</header>
  <main>
    <h1>Snorkeling à Saint-Leu</h1>
    <p>Partez en snorkeling dans la baie de Saint-Leu...</p>
    <!-- Tout le contenu est présent -->
  </main>
  <footer>...</footer>
</div>
<script src="/assets/index.js"></script>
```
✅ Google indexe tout le contenu immédiatement

## Points importants

1. **React Helmet** continue de fonctionner pour les métadonnées dynamiques
2. Le site reste une SPA côté client (navigation rapide)
3. Le prerendering n'affecte que le premier chargement (SEO)
4. Vercel sert le HTML statique pré-rendu au premier chargement
5. Une fois JavaScript chargé, React prend le relais (hydratation)

## Ajout de nouvelles pages

Pour ajouter une nouvelle route à pré-rendre, ajoutez-la dans `package.json`:

```json
"reactSnap": {
  "include": [
    "/",
    "/ma-nouvelle-page",  // ← Ajouter ici
    ...
  ]
}
```

Ou laissez le crawling automatique découvrir les liens depuis la page d'accueil.

## Dépannage

Si une page n'est pas pré-rendue:

1. Vérifiez qu'elle est dans la liste `include` OU accessible via un lien
2. Assurez-vous qu'il n'y a pas d'erreur JavaScript sur cette page
3. Vérifiez les logs de react-snap pendant le build
4. Augmentez le timeout si nécessaire dans la config

## Déploiement

Sur Vercel:
```bash
git add .
git commit -m "Add SEO prerendering"
git push
```

Vercel exécutera automatiquement `npm run build` qui inclut le prerendering.

## Résultat final

🎉 **Chaque page de votre site a maintenant du HTML statique complet pour le SEO**
🎉 **Google peut indexer tout votre contenu immédiatement**
🎉 **Les performances restent excellentes grâce au SPA après le premier chargement**
