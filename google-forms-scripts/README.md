# 📋 Guide de Déploiement des 2 Google Forms
## Forum Students & Jobs — 3e Édition (FSSM - UCA Marrakech)

Ce dossier contient le script officiel **Google Apps Script** pour générer automatiquement les 2 formulaires avec le **branchement conditionnel dynamique (IF / ELSE)**.

---

## 🎯 Architecture des 2 Formulaires Créés

### 1️⃣ Formulaire 1 : Concours du Meilleur CV Vidéo (Ouvert à tous)
- **Upload Direct Google Drive** :
  - Dans Google Forms, le champ d'upload s'appelle **« Importer un fichier »** (*File Upload*).
  - Dès qu'un étudiant soumet sa vidéo, elle est stockée **automatiquement dans un dossier créé sur votre Google Drive**.
  - **Pour l'activer en 2 clics** : sur la question 8, changez le type en *« Importer un fichier »* ➔ cochez *Vidéo* ➔ taille *1 Go*.
- **Contenu** :
  - Identité complète du candidat (Nom, Prénom, CNE/Apogée, Email, WhatsApp, Filière FSSM, Niveau).
  - Choix de la langue de la vidéo (Français, Arabe, Anglais).
  - Outils d'IA utilisés (CapCut, ChatGPT, etc.).
  - Engagement (durée ≤ 3 min, présence à l'écran ≥ 1/3, accord de diffusion sur écrans FSSM).

---

### 2️⃣ Formulaire 2 : Les 3 Compétitions sur Place (Branchement Conditionnel IF / ELSE)
- **PAGE 1 : Choix initial de la compétition** (1 seul choix possible) :
  - 🔘 *Case Challenge « Du labo à l'entreprise »*
  - 🔘 *Mission Emploi (Escape Game recrutement)*
  - 🔘 *Concours Pitch en 3 minutes*
- **SELON LE CHOIX DE L'ÉTUDIANT (Logique IF / ELSE)** :
  - 🔀 **SI Case Challenge (Équipe de 3)** :
    - Redirigé vers la **Page Case Challenge**.
    - Nom de l'équipe / projet.
    - **3 NOMS & PRÉNOMS COMPLETS** :
      - *Membre 1 (Chef d'équipe)* : Nom, Prénom, CNE, WhatsApp, Email, Filière FSSM, Niveau.
      - *Membre 2* : Nom, Prénom, CNE, Téléphone/Email, Filière FSSM, Niveau.
      - *Membre 3* : Nom, Prénom, CNE, Téléphone/Email, Filière FSSM, Niveau.
      - Compétences clés & idée de projet.
    - ➔ Redirige automatiquement vers la **Page Finale (Validation)** sans passer par les autres compétitions.
  - 🔀 **SI Mission Emploi (Escape Game - Équipe de 3)** :
    - Redirigé vers la **Page Mission Emploi**.
    - Nom de l'équipe (optionnel).
    - **3 NOMS & PRÉNOMS COMPLETS** :
      - *Membre 1 (Capitaine)* : Nom, Prénom, CNE, WhatsApp, Email, Filière FSSM.
      - *Membre 2* : Nom, Prénom, CNE, Téléphone, Filière FSSM.
      - *Membre 3* : Nom, Prénom, CNE, Téléphone, Filière FSSM.
      - Acceptation des règles (45 min sans téléphone).
    - ➔ Redirige automatiquement vers la **Page Finale (Validation)**.
  - 🔀 **SI Pitch en 3 minutes (Individuel)** :
    - Redirigé vers la **Page Pitch**.
    - **1 SEUL NOM & PRÉNOM** : Nom, Prénom, CNE, WhatsApp, Email, Filière FSSM, Niveau.
    - Sujet du pitch / Stage ou emploi visé.
    - Langue du pitch sur scène (Français, Arabe, Anglais).
    - ➔ Redirige automatiquement vers la **Page Finale (Validation)**.
- **PAGE 5 FINALE : Engagement sur l'honneur commun** :
  - Coche d'engagement (1 seul choix parmi les 3, respect de la présence le jour J, date limite 20/11 à 12h00).
  - Envoi définitif du formulaire.

---

## 🚀 Comment Exécuter le Script (En 1 Minute)

1. Ouvrez votre navigateur et allez sur : **[https://script.google.com](https://script.google.com)**
2. Cliquez sur **« Nouveau projet »** en haut à gauche.
3. Effacez le code existant et collez l'intégralité du code de :
   [`GoogleAppsScript_Forum_Forms.js`](file:///c:/Users/yassi/OneDrive/Bureau/student job/google-forms-scripts/GoogleAppsScript_Forum_Forms.js)
4. Cliquez sur **Enregistrer** (Ctrl+S), sélectionnez **`createAllForms`** dans la barre du haut et cliquez sur **« Exécuter »**.
5. Autorisez les accès Google demandés.
6. Le **Journal d'exécution** affiche instantanément les liens publics et de modification des 2 formulaires créés dans votre Google Drive !
