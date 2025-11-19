# Captures d'écran PWA

Ce dossier contient les captures d'écran utilisées pour l'interface d'installation PWA enrichie.

## Fichiers requis

- **desktop-wide.png** (1280x720) : Capture d'écran pour les appareils desktop/wide
- **desktop-narrow.png** (750x1334) : Capture d'écran pour les appareils mobile/narrow

## Comment créer de vraies captures d'écran

### Option 1 : Utiliser les DevTools du navigateur

1. Ouvrez votre site en mode production (`npm run build && npm run serve`)
2. Ouvrez les DevTools (F12)
3. Utilisez l'outil de capture d'écran ou le mode responsive
4. Pour desktop : réglez la vue à 1280x720
5. Pour mobile : réglez la vue à 750x1334
6. Prenez une capture d'écran de la page d'accueil ou d'une page représentative
7. Remplacez les fichiers dans ce dossier

### Option 2 : Utiliser un outil de capture

- **Chrome/Edge** : Mode responsive design + capture
- **Firefox** : Mode responsive design + capture
- **Outils tiers** : Screenshot tools, Figma, etc.

## Dimensions recommandées

- **Wide (desktop)** : 1280x720 minimum (ratio 16:9)
- **Narrow (mobile)** : 750x1334 (ratio iPhone) ou 390x844 (ratio moderne)

## Notes

Les captures actuelles sont des placeholders basées sur votre logo. Remplacez-les par de vraies captures de votre site pour une meilleure expérience utilisateur lors de l'installation PWA.

