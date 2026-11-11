# 📋 Guide de Déploiement Automatique des 2 Google Forms
## Forum Students & Jobs — 3e Édition (FSSM - UCA Marrakech)

Ce dossier contient le script **Google Apps Script** officiel qui permet de générer **automatiquement et en 1 clic** les deux Google Forms prêts à l'emploi dans votre Google Drive.

---

## 🎯 Architecture des 2 Formulaires Créés

### 1️⃣ Formulaire 1 : Concours du Meilleur CV Vidéo
- **Statut** : **Ouvert à TOUS** les étudiants FSSM (Licence, Master, Doctorat, Lauréats) sans limitation ni exclusivité.
- **Contenu** :
  - Identité complète : Nom & Prénom, CNE / Code Apogée, Email, Téléphone WhatsApp, Filière FSSM, Niveau.
  - Choix de la langue de la vidéo (Français, Arabe, Anglais).
  - Dépôt du lien de la vidéo (Google Drive, YouTube, OneDrive, WeTransfer...).
  - Outils d'Intelligence Artificielle (IA) déclarés (règle officielle : *« L'IA peut vous aider, elle ne doit pas vous remplacer »*).
  - Case d'engagement obligatoire (durée ≤ 3 min, présence à l'écran obligatoire sur au moins 1/3, accord de diffusion sur les écrans de la faculté).

### 2️⃣ Formulaire 2 : Formulaire Unique pour les 3 Compétitions sur Place
- **Statut** : **1 SEUL CHOIX PAR ÉTUDIANT** parmi :
  1. **Case Challenge « Du labo à l'entreprise »**
  2. **Mission Emploi (Escape Game recrutement)**
  3. **Concours Pitch en 3 minutes**
- **Branchement Conditionnel Automatique** :
  - **Section 1 (Commune)** : Identité de l'étudiant + Question de choix unique de la compétition.
  - **Selon le choix de l'étudiant** :
    - S'il choisit **Case Challenge** ➔ Redirigé vers la page du Case Challenge (règles de l'équipe de 3, domaine d'expertise, idée de projet).
    - S'il choisit **Mission Emploi** ➔ Redirigé vers la page Escape Game (règles 45 min sans téléphone, atout en équipe).
    - S'il choisit **Pitch en 3 min** ➔ Redirigé vers la page Pitch (sujet du pitch, stage/métier ciblé, langue du pitch sur scène).
  - **Section Finale** : Engagement sur l'honneur (respect de la règle d'exclusivité, présence obligatoire, date limite 20/11 à 12h00).

---

## 🚀 Comment Exécuter le Script (En 4 Étapes Simples)

1. Ouvrez votre navigateur et rendez-vous sur : **[https://script.google.com](https://script.google.com)** (connectez-vous avec votre compte Google).
2. Cliquez sur le bouton bleu **« Nouveau projet »** en haut à gauche.
3. Effacez le code qui apparaît par défaut dans l'éditeur et collez l'intégralité du code contenu dans :
   [`GoogleAppsScript_Forum_Forms.js`](file:///c:/Users/yassi/OneDrive/Bureau/student job/google-forms-scripts/GoogleAppsScript_Forum_Forms.js)
4. Cliquez sur **Enregistrer** (icône disquette ou `Ctrl+S`), puis dans le menu déroulant en haut sélectionnez la fonction **`createAllForms`** et cliquez sur **« Exécuter »**.

> 💡 **Remarque sur l'autorisation** : Google vous demandera d'autoriser le script à créer des formulaires dans votre Google Drive. Cliquez sur *« Examiner les autorisations »*, choisissez votre compte, puis *« Paramètres avancés »* ➔ *« Accéder au projet (non sécurisé) »* ➔ *« Autoriser »*.

---

## 📬 Récupération des Liens

Dès que le script a fini de tourner (environ 3 secondes), le **Journal d'exécution** en bas affiche directement :
- Le **lien de modification** de chaque formulaire (pour voir les réponses ou modifier des questions).
- Le **lien public** prêt à partager avec les étudiants ou à insérer dans le site web !
