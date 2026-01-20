# 🚀 Guide de déploiement - Dineo

## ✅ Build local vérifié

Le site génère correctement **43 pages HTML complètes** avec:
- Tout le contenu visible dans le code source
- Meta tags SEO complets (title, description, keywords)
- Open Graph pour les réseaux sociaux
- Schema.org (JSON-LD) pour Google Rich Results
- Images et contenu textuel intégral

**Test réussi:** Toutes les pages contiennent le HTML complet, pas juste `<div id="root"></div>`

## 📦 Build pour production

```bash
npm run build:ssg
```

Ou manuellement:

```bash
node scripts/build-with-prerender.mjs
```

Ce script:
1. Build Vite (génère les assets JS/CSS)
2. Lance un serveur preview
3. Pré-rend toutes les 43 pages avec Puppeteer
4. Arrête le serveur

**Durée:** ~2 minutes
**Résultat:** Dossier `dist/` avec 43 pages HTML complètes

## 📂 Structure générée

```
dist/
├── index.html                              # Accueil (HTML complet)
├── activites-famille-reunion/
│   └── index.html                          # HTML complet
├── activite/
│   ├── snorkeling-saint-leu-lagon-reunion/
│   │   └── index.html                      # HTML complet
│   ├── parapente-xl-saint-leu-reunion/
│   │   └── index.html                      # HTML complet
│   └── ... (27 autres activités)
├── assets/
│   ├── index-DYWWNo3k.js                   # JavaScript bundle
│   └── index-Ch6q7uah.css                  # CSS bundle
└── ... (autres pages)
```

## 🌐 Déploiement

### Option 1: Vercel (Recommandé)

**Configuration:** [vercel.json](vercel.json)

```json
{
  "buildCommand": "node scripts/build-with-prerender.mjs",
  "outputDirectory": "dist",
  "framework": null
}
```

**Déploiement:**

```bash
git add .
git commit -m "deploy: HTML prerendering ready"
git push
```

Vercel va automatiquement:
1. Exécuter le buildCommand
2. Déployer le dossier `dist/`

**⚠️ Important:**
- Le build prend ~2 minutes (Puppeteer)
- Vérifier que le build ne timeout pas (limite Vercel: 15 min)
- Les logs Vercel doivent montrer "✅ 43/43 pages générées!"

### Option 2: Netlify

Créer un fichier `netlify.toml`:

```toml
[build]
  command = "node scripts/build-with-prerender.mjs"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Build local + Upload manuel

```bash
# Build localement
npm run build:ssg

# Vérifier que les pages sont générées
ls dist/activite/

# Uploader le dossier dist/ vers votre hébergeur
# (FTP, S3, etc.)
```

## ✅ Vérification après déploiement

### 1. Vérifier le code source HTML

```bash
curl https://dineo.re/activite/snorkeling-saint-leu-lagon-reunion | grep "<title>"
```

**Résultat attendu:**
```html
<title>Snorkeling à Saint‑Leu | Lagon et récifs de La Réunion</title>
```

### 2. Vérifier le body HTML

```bash
curl https://dineo.re/activite/snorkeling-saint-leu-lagon-reunion | grep -o "class=\"text-3xl font-bold"
```

**Résultat attendu:**
```
class="text-3xl font-bold
```

Si vous voyez juste `<div id="root"></div>`, le HTML n'a pas été pré-rendu correctement.

### 3. Test Google Rich Results

1. Aller sur: https://search.google.com/test/rich-results
2. Entrer: `https://dineo.re/activite/snorkeling-saint-leu-lagon-reunion`
3. Vérifier que Google détecte:
   - Le Product schema
   - Les images
   - Le prix
   - Les notes

### 4. Test Mobile-Friendly

1. Aller sur: https://search.google.com/test/mobile-friendly
2. Entrer: `https://dineo.re/activite/snorkeling-saint-leu-lagon-reunion`
3. Cliquer sur "Afficher la page explorée"
4. Vérifier que tout le contenu est visible

## 🐛 Résolution de problèmes

### Problème: Les pages montrent `<div id="root"></div>` sur le site déployé

**Cause possible:** Le prerendering n'a pas fonctionné lors du build

**Solutions:**

1. **Vérifier les logs de build** sur Vercel/Netlify
   - Chercher "✅ 43/43 pages générées!"
   - Si absent, le prerendering a échoué

2. **Puppeteer ne fonctionne pas sur l'hébergeur**
   - Solution: Build localement puis upload manuel
   ```bash
   npm run build:ssg
   vercel --prod --prebuilt
   ```

3. **Timeout du build**
   - Augmenter le timeout dans vercel.json
   - Ou réduire le nombre de pages à pré-rendre

### Problème: 404 sur les pages d'activités

**Cause:** La configuration du serveur ne sert pas les fichiers HTML correctement

**Solutions:**

1. **Vercel:** Ajouter dans vercel.json:
```json
{
  "cleanUrls": false,
  "trailingSlash": false
}
```

2. **Netlify:** Ajouter dans netlify.toml:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

3. **Apache:** Créer `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Problème: Le build prend trop de temps

**Solution:** Réduire le nombre de pages

Modifier [scripts/simple-prerender.mjs](scripts/simple-prerender.mjs):

```javascript
// Pré-rendre seulement les pages statiques
const routes = [...staticRoutes];

// Ou pré-rendre seulement les 10 premières activités
const routes = [...staticRoutes, ...activitySlugs.slice(0, 10)];
```

## 📊 Performance

### Temps de build

- Build Vite: ~8 secondes
- Preview server startup: ~5 secondes
- Prerendering 43 pages: ~90 secondes
- **Total: ~2 minutes**

### Taille des fichiers

- JavaScript bundle: 515 KB (~132 KB gzippé)
- CSS: 28 KB (~5 KB gzippé)
- HTML par page: ~60-100 KB (contenu complet)

### SEO Benefits

✅ First Contentful Paint amélioré (HTML disponible immédiatement)
✅ Google voit tout le contenu sans exécuter JavaScript
✅ Rich Results activés (Product, AggregateRating)
✅ Open Graph pour partages sociaux

## 🎯 Prochaines étapes après déploiement

1. ✅ Vérifier que toutes les pages sont accessibles
2. ✅ Tester le code source HTML (curl)
3. ⏳ Soumettre le sitemap à Google Search Console
4. ⏳ Tester Rich Results avec l'outil Google
5. ⏳ Monitorer l'indexation (quelques jours)
6. ⏳ Analyser les Core Web Vitals

## 📝 Notes

- Le prerendering capture l'état de la page après que React ait fini de rendre
- React Helmet met à jour le `<head>` avant que Puppeteer capture le HTML
- Le JavaScript continue de fonctionner après le chargement initial (SPA)
- Les utilisateurs bénéficient de la navigation SPA fluide + SEO optimal

---

**Dernière mise à jour:** Janvier 2026
**Scripts:** [build-with-prerender.mjs](scripts/build-with-prerender.mjs), [simple-prerender.mjs](scripts/simple-prerender.mjs)
