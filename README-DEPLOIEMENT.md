# 🚀 Déploiement Dineo - Solution qui fonctionne

## Le problème avec SSR

SSR avec Vite + React Router + React Helmet est trop compliqué et cause des erreurs (`document is not defined`, etc.).

## ✅ Solution simple qui fonctionne

**Build localement avec Puppeteer prerendering**, puis déployer les fichiers HTML générés.

### Étape 1: Build local avec prerendering

```bash
# Build le site
npm run build:client

# Lancer preview server
npm run preview &

# Attendre 5 secondes
sleep 5

# Prerender toutes les pages
node prerender.js
```

Ou en une commande:

```bash
npm run build:client && npm run preview & sleep 5 && node prerender.js
```

### Étape 2: Vérifier les fichiers générés

```bash
# Vérifier qu'une page d'activité a le HTML complet
cat dist/activite/snorkeling-saint-leu-lagon-reunion/index.html | grep "<h1"

# Vous devez voir le H1 avec le titre de l'activité
```

### Étape 3: Déployer sur Vercel

#### Option A: Vercel CLI avec prebuilt

```bash
# Déployer les fichiers déjà buildés
vercel --prebuilt --prod
```

#### Option B: Push sur Git (sans build automatique)

1. Modifier `vercel.json`:
```json
{
  "buildCommand": "",
  "outputDirectory": "dist"
}
```

2. Commiter les fichiers du dossier `dist/`:
```bash
git add dist/
git commit -m "deploy: Add prerendered HTML"
git push
```

⚠️ **Note:** Normalement on ne commit pas `dist/`, mais c'est la solution la plus simple pour Vercel.

#### Option C: CI/CD avec GitHub Actions

Créer `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm install
      - run: npm run build:client

      # Lancer preview et prerender
      - run: npm run preview & sleep 10 && node prerender.js

      # Déployer sur Vercel
      - run: npx vercel --token=${{ secrets.VERCEL_TOKEN }} --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## Configuration Vercel finale

**vercel.json:**

```json
{
  "buildCommand": "",
  "outputDirectory": "dist",
  "framework": null
}
```

Pas de buildCommand car on build localement ou via CI/CD.

## Scripts package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "npm run build:client && npm run preview & sleep 5 && node prerender.js",
    "build:client": "vite build",
    "preview": "vite preview"
  }
}
```

## ✅ Résultat

- 43 pages HTML complètes
- Tout le contenu visible dans le code source
- Google peut indexer sans JavaScript
- Fonctionne sur n'importe quel hébergeur statique

---

**TL;DR:** Build localement avec Puppeteer, déployer les fichiers générés. C'est la méthode qui fonctionne.
