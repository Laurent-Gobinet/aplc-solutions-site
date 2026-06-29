# APLC Solutions - Site internet V12 Next.js

Version V12 orientee finalisation SEO et referencement Google, basee sur la V11 mise a jour avec les references conseil.

## Domaine de production

Domaine cible : `https://aplc-solutions.fr`

## Evolutions V12

- Optimisation SEO des metadonnees Next.js dans `app/layout.tsx`.
- Titre Google cible : `APLC Solutions | Conseil aux dirigeants, M&A et croissance externe`.
- Description Google enrichie : conseil aux dirigeants PME / ETI, croissance externe, acquisition, cession, levee de fonds, transformation et deploiement operationnel.
- Ajout / consolidation des balises Open Graph et Twitter Cards.
- Ajout de l'URL canonique `https://aplc-solutions.fr`.
- Declaration explicite de l'indexation dans les metadonnees robots.
- Fichier dynamique `robots.txt` via `app/robots.ts`.
- Fichier dynamique `sitemap.xml` via `app/sitemap.ts`.
- Ajout de donnees structurees Schema.org de type `ProfessionalService` dans `app/page.tsx`.
- Version du package passee en `12.0.0`.

## Deploiement recommande

1. Dezipper le fichier V12.
2. Uploader le contenu du dossier dans le repository GitHub connecte a Vercel.
3. Faire un commit, par exemple :

```bash
V12 - SEO et referencement Google
```

4. Laisser Vercel redeployer automatiquement.
5. Verifier que le site est bien accessible sur :

```text
https://aplc-solutions.fr
```

6. Verifier egalement :

```text
https://aplc-solutions.fr/robots.txt
https://aplc-solutions.fr/sitemap.xml
```

## Google Search Console

Apres deploiement V12, declarer le domaine dans Google Search Console :

1. Aller dans Google Search Console.
2. Ajouter une propriete de type `Domaine` : `aplc-solutions.fr`.
3. Suivre la verification DNS demandee par Google chez le gestionnaire du domaine.
4. Une fois le domaine valide, aller dans `Sitemaps`.
5. Soumettre :

```text
https://aplc-solutions.fr/sitemap.xml
```

6. Utiliser l'outil d'inspection d'URL sur :

```text
https://aplc-solutions.fr
```

7. Cliquer sur `Demander une indexation`.

## Notes importantes

- Google peut mettre quelques jours a plusieurs semaines pour faire apparaitre le site dans les resultats.
- La requete de marque a privilegier est : `APLC Solutions` ou `aplc-solutions.fr`.
- Pour un meilleur referencement, il faudra ensuite ajouter progressivement du contenu indexable : pages dediees expertises, cas clients anonymises, actualites ou publications LinkedIn reprises sur le site.

## Commandes locales

```bash
npm install
npm run dev
```

Puis ouvrir :

```text
http://localhost:3000
```


## Correction logo header

Le logo affiché en haut à gauche du site utilise désormais le fichier d’origine `public/logo-aplc-chrome-small.png`, plus lisible dans le header sombre.
