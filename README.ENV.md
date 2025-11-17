# Configuration de l'environnement

## Fichier .env

Le projet utilise un fichier `.env` pour configurer l'URL du site.

### Configuration

1. Copiez le fichier `.env.example` vers `.env` :
```bash
cp .env.example .env
```

2. Modifiez le fichier `.env` et remplacez l'URL par votre nom de domaine :
```env
SITE_URL=https://votre-domaine.com
```

### Utilisation

L'URL définie dans `.env` est utilisée automatiquement dans :
- `docusaurus.config.js` - Configuration principale du site
- `src/components/SEOHead/index.js` - Meta tags SEO
- `static/robots.txt` - Généré automatiquement avant le build

### Génération du robots.txt

Le fichier `robots.txt` est généré automatiquement avant chaque build à partir de la variable `SITE_URL`.

Vous pouvez aussi le générer manuellement :
```bash
npm run generate-robots
```

### Note

Le fichier `.env` est ignoré par Git (défini dans `.gitignore`) pour éviter de commiter des informations sensibles. Le fichier `.env.example` sert de template et peut être versionné.

