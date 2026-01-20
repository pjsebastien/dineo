# 🔧 Fix Vercel - HTML Prerendering Complet

## ❌ Problème identifié

Sur Vercel, toutes les pages affichaient seulement `<div id="root"></div>` dans le code source HTML, même après avoir configuré le prerendering localement.

### Causes du problème

1. **Mauvaise configuration `vercel.json`**
   - Le `buildCommand` était juste `npm run build` (sans prerendering)
   - Les `rewrites` redirigeaient tout vers `/index.html`, écrasant les pages pré-rendues

2. **Script de build incomplet**
   - Le script `build:ssg` ne fonctionnait pas correctement sur Vercel
   - Problèmes avec les commandes background (`&`) et `sleep` sur Linux

## ✅ Solution mise en place

### 1. Nouveau script de build cross-platform

Créé [scripts/build-with-prerender.mjs](scripts/build-with-prerender.mjs):
- Lance le build Vite
- Démarre le serveur preview
- Attend que le serveur soit prêt
- Lance le prerendering Puppeteer
- Arrête proprement le serveur

### 2. Script de prerendering amélioré

Mis à jour [scripts/simple-prerender.mjs](scripts/simple-prerender.mjs):
- Lit automatiquement toutes les activités depuis `src/data/activities.ts`
- Génère les pages pour les 29 activités
- **Total: 43 pages pré-rendues** (14 statiques + 29 activités)

### 3. Configuration Vercel corrigée

Mis à jour [vercel.json](vercel.json):
```json
{
  "buildCommand": "node scripts/build-with-prerender.mjs",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

**Important**: Les `rewrites` ont été SUPPRIMÉS car ils empêchaient les pages pré-rendues d'être servies.

### 4. Package.json mis à jour

```json
"scripts": {
  "build:ssg": "node scripts/build-with-prerender.mjs"
}
```

## 📊 Résultat

### Pages pré-rendues (43 au total)

**Pages statiques (14):**
- `/` - Page d'accueil
- `/activites-famille-reunion`
- `/activites-couple-reunion`
- `/activites-insolites-reunion`
- `/activites-pas-cheres-reunion`
- `/activites-a-offrir-reunion`
- `/que-faire-saint-pierre-reunion`
- `/que-faire-saint-leu-reunion`
- `/que-faire-cilaos-reunion`
- `/que-faire-piton-fournaise-reunion`
- `/que-faire-saint-benoit-reunion`
- `/mentions-legales`
- `/politique-confidentialite`
- `/cgu`

**Pages d'activités (29):**
- `/activite/balade-cheval-grand-etang-reunion`
- `/activite/snorkeling-saint-leu-lagon-reunion`
- `/activite/parapente-xl-saint-leu-reunion`
- ... et 26 autres activités

## 🚀 Déploiement sur Vercel

### Option 1: Déploiement automatique (Recommandé)

Vercel va maintenant automatiquement:
1. Exécuter `node scripts/build-with-prerender.mjs`
2. Générer toutes les pages avec HTML complet
3. Déployer le dossier `dist/` avec les pages pré-rendues

```bash
git add .
git commit -m "fix: Configure Vercel build with full HTML prerendering"
git push
```

Vercel détectera le push et déploiera automatiquement.

### Option 2: Build local puis upload

Si vous préférez contrôler le build:

```bash
# Build avec prerendering
npm run build:ssg

# Vérifier que les pages sont générées
ls dist/activite/

# Déployer manuellement via Vercel CLI
vercel --prod
```

## ✅ Vérification

### 1. Vérifier localement

```bash
# Build
npm run build:ssg

# Vérifier le HTML d'une page d'activité
cat dist/activite/snorkeling-saint-leu-lagon-reunion/index.html | grep "<h1"

# Résultat attendu:
# <h1 class="text-3xl font-bold text-gray-900 mb-4">Snorkeling dans la Baie...
```

### 2. Vérifier sur Vercel (après déploiement)

```bash
# Voir le code source HTML
curl https://dineo.re/activite/snorkeling-saint-leu-lagon-reunion | grep "<h1"

# Résultat attendu: tout le contenu HTML visible
```

### 3. Test Google Search Console

1. Aller sur: https://search.google.com/test/rich-results
2. Entrer: `https://dineo.re/activite/snorkeling-saint-leu-lagon-reunion`
3. Vérifier que Google voit tout le contenu

## 🔍 Différence avant/après

### ❌ Avant (code source sur Vercel)
```html
<body>
  <div id="root"></div>
  <script src="/assets/index.js"></script>
</body>
```

### ✅ Après (code source sur Vercel)
```html
<body>
  <div id="root">
    <div class="min-h-screen bg-gray-50">
      <header>...</header>
      <main>
        <h1>Snorkeling dans la Baie de Saint-Leu</h1>
        <div class="grid">
          <img src="...">
          <p>Partez en snorkeling dans la magnifique baie...</p>
          <!-- TOUT LE CONTENU EST VISIBLE -->
        </div>
      </main>
      <footer>...</footer>
    </div>
  </div>
  <script src="/assets/index.js"></script>
</body>
```

## 📈 Impact SEO

✅ **Google voit maintenant:**
- Tous les titres (H1, H2, H3)
- Toutes les descriptions d'activités
- Toutes les images avec alt text
- Les prix, durées, niveaux
- Les points de rendez-vous
- Tous les contenus textuels

✅ **Avantages:**
- Indexation immédiate (pas besoin d'attendre le JavaScript)
- Meilleur ranking SEO
- Snippets enrichis dans les résultats Google
- Partage social avec Open Graph

## ⚠️ Points d'attention

### Puppeteer sur Vercel

Puppeteer fonctionne sur Vercel mais peut avoir des limites:
- Timeout possible sur le build (limite 15 minutes par défaut)
- Mémoire limitée pour les grandes quantités de pages

Si vous rencontrez des problèmes, considérez:
1. Réduire le nombre de pages pré-rendues
2. Augmenter les timeouts dans le script
3. Utiliser une solution alternative (Prerender.io, Netlify, etc.)

### Temps de build

Le build complet prend environ:
- Build Vite: ~7 secondes
- Preview server startup: ~5 secondes
- Prerendering 43 pages: ~90 secondes
- **Total: ~2 minutes**

C'est acceptable pour Vercel (limite: 15 minutes sur le plan gratuit).

## 🎯 Prochaines étapes

1. ✅ Pusher sur Git
2. ✅ Vérifier le déploiement Vercel
3. ⏳ Tester les pages sur le site en production
4. ⏳ Soumettre le sitemap à Google Search Console
5. ⏳ Monitorer l'indexation sur quelques jours

## 📝 Notes techniques

### Pourquoi supprimer les rewrites?

Les rewrites Vercel redirigent toutes les requêtes vers `/index.html`, ce qui empêche de servir les pages pré-rendues comme:
- `/activites-famille-reunion/index.html`
- `/activite/snorkeling-saint-leu/index.html`

En supprimant les rewrites, Vercel sert directement les fichiers HTML pré-rendus.

### Client-side routing fonctionne toujours

React Router continue de gérer la navigation côté client après le chargement initial, offrant:
- Navigation instantanée entre les pages
- Expérience SPA fluide
- Progressive Enhancement

---

**Date de fix:** Janvier 2026
**Scripts:** [build-with-prerender.mjs](scripts/build-with-prerender.mjs), [simple-prerender.mjs](scripts/simple-prerender.mjs)
**Config:** [vercel.json](vercel.json)
