# Guide complet : mettre le site en ligne avec www.missionevangeliqueephphatha.com

Ce guide vous accompagne **du début à la fin** : dépôt GitHub, hébergement sur Vercel, achat du nom de domaine et connexion du domaine au site. C’est fait pour une première fois.

---

## Vue d’ensemble (ce que vous allez faire)

1. **Créer un compte GitHub** et un dépôt pour votre code.
2. **Mettre votre projet sur GitHub** (avec Git sur votre ordinateur).
3. **Acheter le nom de domaine** `missionevangeliqueephphatha.com` chez un registrar.
4. **Créer un compte Vercel** et connecter votre dépôt GitHub pour héberger le site.
5. **Configurer le domaine** sur Vercel et chez le registrar (DNS) pour que `www.missionevangeliqueephphatha.com` affiche votre site.

**Coûts indicatifs :**
- **GitHub** : gratuit.
- **Vercel** : gratuit pour un site personnel / association (plan Hobby).
- **Nom de domaine** : environ 10–15 €/an selon le registrar (vous allez le payer).

---

# ÉTAPE 1 – Créer un compte GitHub et un dépôt

## 1.1 Compte GitHub

1. Allez sur **https://github.com**
2. Cliquez sur **Sign up**
3. Renseignez : email, mot de passe, nom d’utilisateur (ex. `votre-pseudo`)
4. Validez l’email si demandé

## 1.2 Créer un nouveau dépôt (repository)

1. Une fois connecté, cliquez sur le **+** en haut à droite → **New repository**
2. **Repository name** : par exemple `ephphatha` ou `mission-ephphatha`
3. **Description** (optionnel) : « Site Mission Évangélique Ephphatha »
4. Choisissez **Private** si vous ne voulez pas que le code soit visible par tout le monde, ou **Public** (gratuit dans les deux cas)
5. **Ne cochez pas** « Add a README file » (vous avez déjà un projet)
6. Cliquez sur **Create repository**

Vous verrez une page avec une URL du type :  
`https://github.com/VOTRE-PSEUDO/ephphatha.git`  
**Notez cette URL** (remplacez VOTRE-PSEUDO par votre vrai pseudo).

---

# ÉTAPE 2 – Mettre votre projet sur GitHub (avec Git)

Votre projet est dans le dossier `ephphatha` sur votre PC. On va en faire un dépôt Git puis l’envoyer sur GitHub.

## 2.1 Vérifier si Git est installé

1. Ouvrez **PowerShell** (ou l’invite de commandes) : touche Windows, tapez `PowerShell`, ouvrez l’application.
2. Tapez :
   ```powershell
   git --version
   ```
3. Si vous voyez un numéro de version (ex. `git version 2.43.0`), Git est installé. Passez au **2.2**.
4. Si vous voyez « command not found » ou une erreur :
   - Téléchargez Git pour Windows : **https://git-scm.com/download/win**
   - Installez-le (options par défaut suffisent)
   - Fermez puis rouvrez PowerShell, retestez `git --version`

## 2.2 Configurer Git (une seule fois sur ce PC)

Dans PowerShell, exécutez (remplacez par vos infos) :

```powershell
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

Utilisez de préférence **l’email associé à votre compte GitHub**.

## 2.3 Initialiser le dépôt dans le dossier du projet

1. Dans PowerShell, allez dans le dossier **parent** qui contient tout le projet (le dossier dans lequel vous voyez le dossier `site`, le dossier `Ressources`, etc.).  
   Exemple si votre projet est dans `Documents\ephphatha` :

   ```powershell
   cd C:\Users\josue\Documents\ephphatha
   ```

2. Vérifiez que vous voyez bien le dossier `site` :

   ```powershell
   dir
   ```
   Vous devez voir au moins : `site`, éventuellement `Ressources`, etc.

3. Si dans ce dossier il n’y a **pas encore** de dépôt Git, initialisez-le :

   ```powershell
   git init
   ```

4. Créez un fichier `.gitignore` **à la racine** du projet (dans `ephphatha`, pas dans `site`) s’il n’existe pas, pour ne pas envoyer des fichiers inutiles ou secrets sur GitHub.  
   Vous pouvez copier celui du dossier `site` ou en créer un minimal. Par exemple, à la racine de `ephphatha`, le `.gitignore` peut contenir :

   ```
   node_modules/
   .next/
   .env
   .env.local
   .env*.local
   ```

   (Le dossier `site` a déjà son propre `.gitignore` ; si vous faites `git init` dans `ephphatha`, un `.gitignore` à la racine de `ephphatha` est utile.)

5. Ajoutez tous les fichiers, commitez :

   ```powershell
   git add .
   git status
   ```
   Vérifiez qu’il n’y a pas de fichier `.env` ou `.env.local` dans la liste (ils doivent être ignorés).

   ```powershell
   git commit -m "Premier envoi : site Mission Ephphatha"
   ```

## 2.4 Branche « main » (si votre branche s’appelle « master »)

Vercel et GitHub utilisent souvent la branche `main`. Si Git vous a créé `master`, renommez :

```powershell
git branch -M main
```

## 2.5 Relier le dépôt GitHub et envoyer le code

1. Remplacez `VOTRE-PSEUDO` et `NOM-DU-REPO` par votre pseudo GitHub et le nom du dépôt que vous avez créé (ex. `ephphatha`) :

   ```powershell
   git remote add origin https://github.com/VOTRE-PSEUDO/NOM-DU-REPO.git
   ```

   Exemple :
   ```powershell
   git remote add origin https://github.com/josue/ephphatha.git
   ```

2. Envoyez le code sur GitHub :

   ```powershell
   git push -u origin main
   ```

3. Si GitHub vous demande de vous connecter : utilisez votre pseudo et un **Personal Access Token** (mot de passe) au lieu du mot de passe du compte.  
   - GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**  
   - Donnez un nom (ex. « Vercel deploy »), cochez au minimum `repo`, générez, **copiez le token** et collez-le quand Git demande le mot de passe.

4. Après un `git push` réussi, actualisez la page de votre dépôt sur GitHub : vous devez voir tous vos fichiers.

---

# ÉTAPE 3 – Acheter le nom de domaine missionevangeliqueephphatha.com

Vous devez **acheter** le domaine (payer une fois par an) chez un **registrar** (bureau d’enregistrement).

## 3.1 Choisir un registrar (où acheter le domaine)

Quelques options courantes (françaises ou internationales) :

| Registrar      | Site              | Remarque                    |
|----------------|-------------------|-----------------------------|
| **OVH**        | ovh.com           | Très utilisé en France      |
| **Gandi**      | gandi.net         | Simple, .com disponible     |
| **Namecheap**  | namecheap.com     | Prix souvent compétitifs     |
| **Google Domains** | domains.google* | Intégration Google (à vérifier selon pays) |

*Selon votre pays, Google Domains peut être migré vers Squarespace Domains ; vérifiez sur Google.

Choisissez **un seul** registrar (par ex. OVH ou Gandi pour rester en français).

## 3.2 Vérifier la disponibilité et acheter

1. Allez sur le site du registrar (ex. **gandi.net** ou **ovh.com**).
2. Dans la zone de recherche de domaine, tapez : **missionevangeliqueephphatha.com**
3. Cliquez sur « Rechercher » ou équivalent.
4. Si le nom est **disponible** :
   - Ajoutez-le au panier.
   - Vérifiez le prix (souvent 10–15 €/an pour un .com).
   - Passez à la création de compte si besoin, puis au paiement.
5. Complétez les informations (propriétaire du domaine, email, adresse). Ces infos peuvent être masquées (whois privé) si le registrar le propose (parfois payant).
6. Validez la commande et payez.

Une fois le domaine acheté, vous avez accès à un **espace client** où vous pourrez gérer les **DNS** (étape 6). Notez bien :
- Le site où vous vous connectez (ex. gandi.net, ovh.com).
- Votre identifiant et mot de passe.

---

# ÉTAPE 4 – Héberger le site sur Vercel (gratuit)

Vercel va construire et héberger votre site à partir du code sur GitHub.

## 4.1 Créer un compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez sur **Sign Up**
3. Choisissez **Continue with GitHub**
4. Autorisez Vercel à accéder à votre compte GitHub (lecture des dépôts, etc.)

## 4.2 Importer le projet (dépôt GitHub)

1. Une fois connecté sur Vercel, cliquez sur **Add New…** → **Project**
2. Vous devriez voir la liste de vos dépôts GitHub. Cliquez sur **Import** à côté du dépôt qui contient le projet (ex. `ephphatha`).
3. **Configure the Project** :
   - **Root Directory** : cliquez sur **Edit** à côté de « Root Directory », tapez **`site`** puis validez.  
     C’est indispensable : le site Next.js est dans le sous-dossier `site`, pas à la racine du dépôt.
   - **Framework Preset** : Next.js (normalement détecté automatiquement).
   - **Build Command** : `npm run build` (par défaut).
   - **Output Directory** : laisser par défaut.
   - **Install Command** : `npm install` (par défaut).

4. **Environment Variables (Variables d’environnement)**  
   Avant de déployer, ajoutez au moins ces deux variables (cliquez sur **Environment Variables**, ajoutez une par une) :

   | Name                    | Value                                      | Environment |
   |-------------------------|--------------------------------------------|-------------|
   | `NEXT_PUBLIC_SITE_URL`  | `https://www.missionevangeliqueephphatha.com` | Production  |
   | `CONTACT_TO`            | L’email qui doit recevoir les formulaires  | Production  |

   Pour chaque variable : **Name** = nom, **Value** = valeur, **Environment** = cochez **Production** (et éventuellement Preview si vous voulez les mêmes en préview).

5. Cliquez sur **Deploy**
6. Attendez 1 à 2 minutes. À la fin, vous verrez **Congratulations!** et une URL du type :  
   `https://ephphatha-xxxx.vercel.app`  
   Cliquez dessus : c’est votre site déjà en ligne (sans votre domaine pour l’instant).

**Important :** si le déploiement échoue (erreur de build), vérifiez bien que **Root Directory** est `site` et que le dépôt contient bien le dossier `site` avec un `package.json` à l’intérieur.

---

# ÉTAPE 5 – Ajouter le domaine sur Vercel

On indique à Vercel que le site doit aussi être accessible via **www.missionevangeliqueephphatha.com**.

1. Dans le projet Vercel, allez dans l’onglet **Settings**
2. Dans le menu de gauche, cliquez sur **Domains**
3. Dans le champ « Domain », tapez : **www.missionevangeliqueephphatha.com**
4. Cliquez sur **Add**
5. Vercel va vous dire que le domaine n’est pas encore configuré et va vous montrer les **enregistrements DNS** à créer.  
   Notez bien :
   - Soit un enregistrement **CNAME** pour `www` pointant vers `cname.vercel-dns.com`
   - Soit des enregistrements **A** (pour le domaine nu) si vous ajoutez aussi `missionevangeliqueephphatha.com` sans www

On va faire cette configuration à l’étape 6.

---

# ÉTAPE 6 – Configurer les DNS chez votre registrar

Pour que **www.missionevangeliqueephphatha.com** pointe vers Vercel, vous devez créer un enregistrement **CNAME** dans la zone DNS du domaine, chez le registrar où vous l’avez acheté.

## 6.1 Où faire la modification

- Connectez-vous à l’espace client du registrar (OVH, Gandi, Namecheap, etc.).
- Trouvez la section **DNS**, **Zone DNS**, **Gestion des DNS** ou **Domain management** pour **missionevangeliqueephphatha.com**.

## 6.2 Créer l’enregistrement CNAME pour www

1. Ajoutez un **nouvel enregistrement** (ou « Add record », « Ajouter une entrée »).
2. Choisissez le type : **CNAME**
3. **Nom / Host / Sous-domaine** :  
   - Selon les interfaces : mettez **`www`** (sans .com).  
   - Parfois le champ s’appelle « Name » et on met « www » ou « www.missionevangeliqueephphatha.com » selon ce que demande l’interface ; si on vous demande juste le préfixe, c’est **www**.
4. **Valeur / Target / Pointe vers** :  
   - **`cname.vercel-dns.com`**  
   (exactement ce que Vercel affiche dans la section Domains.)
5. **TTL** : 3600 ou « Automatique » si proposé.
6. Enregistrez / Sauvegardez.

## 6.3 (Optionnel) Rediriger le domaine sans www vers www

Si vous voulez que **missionevangeliqueephphatha.com** (sans www) redirige vers **www.missionevangeliqueephphatha.com** :

- Sur **Vercel** : dans **Settings** → **Domains**, ajoutez aussi **missionevangeliqueephphatha.com**. Vercel vous proposera soit une config **A** (adresse IP), soit une redirection. Suivez les instructions affichées pour le domaine « nu ».
- Chez le registrar : si Vercel vous donne une **adresse A** (ex. `76.76.21.21`), créez un enregistrement **A** pour le nom `@` ou `missionevangeliqueephphatha.com` pointant vers cette IP.

(Vercel indique clairement les valeurs sur la page Domains une fois le domaine ajouté.)

## 6.4 Attendre la propagation DNS

Les DNS peuvent prendre **quelques minutes à 48 h** (souvent 15–30 min). Pendant ce temps, Vercel peut afficher « Invalid configuration » pour le domaine ; c’est normal.

- Sur Vercel, l’état du domaine passera à **Valid** quand la config sera correcte.
- Vercel activera automatiquement le **HTTPS** (cadenas) pour votre domaine.

---

# ÉTAPE 7 – Vérifications finales

1. **Ouvrez** **https://www.missionevangeliqueephphatha.com** dans votre navigateur : vous devez voir votre site.
2. **Testez** quelques pages (Accueil, Cultes, Contact, etc.) et un envoi de formulaire (Contact ou Prière).
3. Vérifiez que l’URL dans la barre d’adresse est bien en **https** (cadenas).

Si vous avez ajouté **missionevangeliqueephphatha.com** (sans www) sur Vercel et configuré la redirection, taper **missionevangeliqueephphatha.com** doit rediriger vers **https://www.missionevangeliqueephphatha.com**.

---

# Récapitulatif des étapes

| # | Action | Où / Quoi |
|---|--------|-----------|
| 1 | Compte GitHub + créer un dépôt | github.com |
| 2 | Git sur le PC : init, commit, remote, push | Dossier `ephphatha`, PowerShell |
| 3 | Acheter le domaine | Registrar (OVH, Gandi, Namecheap, etc.) : missionevangeliqueephphatha.com |
| 4 | Compte Vercel, importer le dépôt, Root = `site`, variables d’env, Deploy | vercel.com |
| 5 | Ajouter le domaine www sur Vercel | Vercel → Settings → Domains |
| 6 | CNAME `www` → `cname.vercel-dns.com` chez le registrar | Espace client du registrar (DNS) |
| 7 | Attendre la propagation, tester le site | Navigateur : www.missionevangeliqueephphatha.com |

---

# En cas de problème

- **Le build Vercel échoue** : vérifiez que **Root Directory** = `site` et que sur GitHub le dossier `site` contient bien `package.json` et `app/`.
- **Le domaine reste « Invalid »** : revérifiez le CNAME (nom = `www`, cible = `cname.vercel-dns.com`), attendez jusqu’à 48 h, et vérifiez qu’il n’y a pas d’autre enregistrement qui écrase (ex. un A ou CNAME en conflit).
- **Les formulaires n’envoient pas d’email** : ajoutez les variables SMTP dans Vercel (Settings → Environment Variables) comme dans `.env.example` du dossier `site`, ou utilisez temporairement le lien mailto affiché après envoi.

Bon déploiement.
