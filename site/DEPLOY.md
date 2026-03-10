# Mise en production – Mission Évangélique Ephphatha

## Prérequis

- Compte [Vercel](https://vercel.com) (recommandé pour Next.js) ou autre hébergeur Node
- Variables d’environnement de production (voir ci‑dessous)

## 1. Déploiement sur Vercel

1. **Importer le projet**
   - Allez sur [vercel.com](https://vercel.com) → **Add New** → **Project**
   - Connectez votre dépôt Git (GitHub, GitLab, Bitbucket)
   - **Root Directory** : indiquez `site` (le projet Next.js est dans le dossier `site`)

2. **Variables d’environnement**
   - Dans le projet Vercel : **Settings** → **Environment Variables**
   - Ajoutez au minimum pour la production :

   | Variable | Description | Exemple |
   |----------|-------------|---------|
   | `NEXT_PUBLIC_SITE_URL` | URL publique du site (SEO, partage) | `https://www.ephphatha.fr` |
   | `CONTACT_TO` | Email qui reçoit les formulaires | `contact@ephphatha.fr` |
   | `SMTP_HOST` | Serveur SMTP (optionnel) | `smtp.example.com` |
   | `SMTP_PORT` | Port SMTP (souvent 587) | `587` |
   | `SMTP_USER` | Utilisateur SMTP | — |
   | `SMTP_PASS` | Mot de passe SMTP | — |
   | `SMTP_FROM` | Adresse d’envoi des emails | `contact@ephphatha.fr` |

   Sans SMTP, les formulaires renverront un lien `mailto:` ; les messages ne seront pas envoyés automatiquement.

3. **Déployer**
   - **Deploy** : chaque push sur la branche principale (ou celle configurée) déclenche un déploiement.
   - Après le premier déploiement, notez l’URL fournie (ex. `https://ephphatha.vercel.app`).

4. **Domaine personnalisé**
   - **Settings** → **Domains** : ajoutez `www.ephphatha.fr` (et éventuellement `ephphatha.fr` en redirection).
   - Configurez les enregistrements DNS chez votre hébergeur de domaine comme indiqué par Vercel.

## 2. Vérifications après déploiement

- [ ] La page d’accueil et toutes les pages s’affichent correctement.
- [ ] Les images et assets se chargent (chemins relatifs ou URL de base).
- [ ] Testez l’envoi d’un formulaire (Contact, Prière, S’impliquer) : vérifiez que l’email arrive à `CONTACT_TO` (ou que le fallback mailto s’affiche si SMTP n’est pas configuré).
- [ ] Vérifiez les méta (onglet, partage réseau social) : titre et description sur la home et une page interne.
- [ ] `NEXT_PUBLIC_SITE_URL` doit être l’URL finale du site (avec https) pour que les liens Open Graph et canonical soient corrects.

## 3. Build local (test avant déploiement)

```bash
cd site
npm ci
npm run build
npm run start
```

Puis ouvrez `http://localhost:3000` pour simuler la production en local.

## 4. Fichier d’exemple des variables

Le fichier `.env.example` à la racine de `site/` liste les variables attendues. En production, configurez-les dans l’interface Vercel (ou dans les variables d’environnement de votre hébergeur), **sans** commiter de fichier `.env` contenant des secrets.
