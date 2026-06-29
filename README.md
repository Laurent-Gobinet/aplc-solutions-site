# APLC Solutions - Site internet V11

Version de finalisation du site APLC Solutions, développée à partir de la V10 Next.js.

## Objectif de la V11

Créer un site premium, sobre et crédible, comparable à la présence digitale d'un cabinet de conseil haut de gamme :

- positionnement clair : conseil aux dirigeants de PME et ETI ;
- promesse renforcée : de la stratégie au déploiement opérationnel ;
- design plus institutionnel, confidentiel et haut de gamme ;
- parcours du dirigeant clarifié et lisible ;
- suppression définitive de l'ancienne frise ;
- intégration des photos et logos depuis le dossier `/public` ;
- responsive desktop, tablette et mobile ;
- base Next.js propre, prête à déployer sur Vercel.

## Démarrage local

```bash
npm install
npm run dev
```

Puis ouvrir :

```text
http://localhost:3000
```

## Build de production

```bash
npm run build
npm run start
```

## Assets principaux

Les visuels sont référencés dans le code avec les noms suivants :

- `/public/hero-aplc.jpg`
- `/public/laurent-gobinet-portrait.jpg`
- `/public/pourquoi-aplc-reunion.jpg`
- `/public/contact-rencontre.jpg`
- `/public/anchor-satellite.jpg`
- `/public/adour-helice-navire.jpg`
- `/public/cap200-comite-investissement.jpg`
- `/public/giddy-up-defile.jpg`
- `/public/neopolia-atelier.jpg`
- logos de référence : `/public/ref-*.png`
- QR contact : `/public/qr-contact-laurent-gobinet.png`

## Déploiement

Le projet est compatible avec Vercel. Après dépôt sur GitHub, Vercel peut redéployer automatiquement la V11.


## Ajustements V11 - références conseil

- Remplacement de la grille de références institutionnelles par des exemples de dossiers conseil : GESTAL / ROMA2S, HALGAND, SINFONY, DIMATEX, IGUANA YACHTS, ASPIPRO.
- Ajout des logos fournis dans `public/`.
- Suppression de l'expertise `Restructuration & retournement`.
- Les photos finales restent à intégrer dès réception.
