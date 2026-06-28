# Site MAJUBAH Consulting — Formation IA

Site vitrine **multi-pages statique** (HTML/CSS/JS, sans framework ni build) avec
deux fonctions serverless. Positionnement : MAJUBAH forme les professionnels à
intégrer l'IA dans leur métier (formation 3 jours · Campus numérique · ateliers).

## Structure

```
index.html                 Accueil
formation-ia.html          Formation IA (programme, modalités, FAQ)
campus-numerique.html      Campus numérique (page publique)
ateliers-ia.html           Ateliers pilotes
reserver.html              Parcours de préinscription (6 étapes)
contact.html               Contact
mentions-legales.html | politique-confidentialite.html | conditions-generales.html
404.html · robots.txt · sitemap.xml
assets/
  site.config.js           ← SOURCE UNIQUE : prix, capacités, liens, sessions, contact
  site.css · site.js
  baudry.png · salle-pont-audemer.png · logo/
api/
  reservation.js           Serverless : réservation → CRM
  ai.js                    Serverless : démo Claude (OPTIONNEL — voir §16 du cahier des charges)
_ds/                       Design system (tokens couleurs/typo réutilisés)
_archive/                  Ancienne page unique (.dc.html) + runtime, conservés
```

## Tout se règle dans `assets/site.config.js`
Prix, capacités, seuil de confirmation, liens, coordonnées, **sessions**, outils.
Modifier une valeur ici la met à jour sur toutes les pages (aucun doublon).
Les sessions vides → la page `/reserver` propose « être informé des prochaines dates ».

## Déploiement (Vercel ou Netlify)
1. Déposer le dossier (Git ou import direct). Les fichiers `api/*.js` deviennent des fonctions serverless.
2. Définir les variables d'environnement (voir `.env.example`) :
   - `CRM_WEBHOOK_URL` (obligatoire pour activer le formulaire de réservation)
   - `CRM_AUTH_HEADER` (optionnel)
   - `ANTHROPIC_API_KEY` (uniquement si la démo `api/ai.js` est conservée)
3. Renseigner le domaine de production (voir ci-dessous).

> En local, le rendu se teste avec un simple serveur statique (`python3 -m http.server`),
> mais les fonctions `api/*` ne s'exécutent que sur Vercel/Netlify (ou `vercel dev`).

## À COMPLÉTER avant mise en ligne
- **Domaine** : remplacer `EXEMPLE-DOMAINE` dans les `canonical`, Open Graph, `robots.txt`, `sitemap.xml`.
- **`assets/site.config.js`** : Qualiopi (n° déclaration), certification/CPF (label, code, certificateur — sinon restent masqués), LinkedIn, téléphone.
- **Pages légales** : remplacer tous les `[À COMPLÉTER]` (SIRET, hébergeur, durées, dates…) et faire valider juridiquement.
- **Photo de la salle** : `assets/salle-pont-audemer.png` (~2 Mo) à convertir en JPG/WebP allégé pour la performance.
- **CRM** : configurer `CRM_WEBHOOK_URL` (et le pipeline côté CRM).

## Conformité éditoriale appliquée
- Positionnement IA unique ; offres généralistes retirées.
- Aucune statistique inventée ; pas d'affirmation CPF/certifiante non vérifiée.
- Présentiel et visio en **sessions séparées** (pas d'hybride) ; « Campus » = numérique uniquement.
- Démo « Posez une question » / newsletter / compteurs : absents du nouveau site (ancienne page dans `_archive/`).
