/**
 * ==============================================================================
 * FORUM STUDENTS & JOBS — 3e ÉDITION (FSSM - UCA MARRAKECH)
 * SCRIPT GOOGLE APPS SCRIPT POUR GÉNÉRER LES 2 GOOGLE FORMS OFFICIELS
 * ==============================================================================
 * 
 * Ce script s'exécute directement sur Google Apps Script (https://script.google.com).
 * Il crée automatiquement dans votre Google Drive les deux formulaires complets :
 * 
 * 1. FORMULAIRE 1 : Concours du Meilleur CV Vidéo (Ouvert à tous, dépôt de vidéo)
 * 2. FORMULAIRE 2 : Formulaire Unique pour les 3 Compétitions sur place
 *                   (Case Challenge, Mission Emploi, Pitch 3 min)
 *                   avec BRANCHEMENT CONDITIONNEL selon la compétition choisie !
 * 
 * ==============================================================================
 * COMMENT UTILISER CE SCRIPT (EN 1 MINUTE) :
 * 1. Allez sur https://script.google.com/
 * 2. Cliquez sur "+ Nouveau projet".
 * 3. Effacez le code existant et collez TOUT le contenu de ce fichier.
 * 4. Cliquez sur "Enregistrer" (icône disquette).
 * 5. Dans la barre du haut, sélectionnez la fonction "createAllForms" et cliquez sur "Exécuter".
 * 6. Autorisez les permissions Google demandées.
 * 7. Regardez dans le "Journal d'exécution" en bas : les liens publics et liens de modification
 *    des 2 Google Forms s'affichent instantanément !
 * ==============================================================================
 */

/**
 * Fonction Principale : Génère les deux formulaires en une seule fois.
 */
function createAllForms() {
  Logger.log("==================================================================");
  Logger.log("🚀 DÉMARRAGE DE LA CRÉATION DES 2 FORMULAIRES GOOGLE FORMS...");
  Logger.log("==================================================================");

  const form1 = createFormCVVideo();
  const form2 = createFormTroisCompetitions();

  Logger.log("\n==================================================================");
  Logger.log("✅ TOUS LES FORMULAIRES ONT ÉTÉ CRÉÉS AVEC SUCCÈS DANS VOTRE DRIVE !");
  Logger.log("==================================================================");
  Logger.log("1️⃣ FORMULAIRE CV VIDÉO :");
  Logger.log("   - Lien de modification : " + form1.getEditUrl());
  Logger.log("   - Lien public (pour les étudiants) : " + form1.getPublishedUrl());
  Logger.log("\n2️⃣ FORMULAIRE DES 3 COMPÉTITIONS (CHOIX UNIQUE) :");
  Logger.log("   - Lien de modification : " + form2.getEditUrl());
  Logger.log("   - Lien public (pour les étudiants) : " + form2.getPublishedUrl());
  Logger.log("==================================================================");
}

/**
 * ==============================================================================
 * FORMULAIRE 1 : CONCOURS DU MEILLEUR CV VIDÉO (FSSM - 3e ÉDITION)
 * ==============================================================================
 * - Ouvert à tous les étudiants de la faculté.
 * - Saisie des informations personnelles et académiques.
 * - Dépôt du lien de la vidéo (Google Drive, YouTube, WeTransfer...).
 * - Mention des outils d'IA utilisés (le cas échéant).
 * - Validation des règles (durée <= 3 min, présence à l'écran, accord de diffusion).
 */
function createFormCVVideo() {
  const form = FormApp.create("Forum Students & Jobs 2026 — Concours du Meilleur CV Vidéo");

  form.setDescription(
    "FACULTÉ DES SCIENCES SEMLALIA MARRAKECH (FSSM - UCA)\n" +
    "Forum Students & Jobs — 3e Édition (25 & 26 Novembre 2026)\n\n" +
    "« Votre CV prend vie : montrez qui vous êtes en 3 minutes. »\n\n" +
    "📌 RÈGLE DE PARTICIPATION :\n" +
    "Ce concours est OUVERT À TOUS les étudiants de la FSSM (Licence, Master, Doctorat, Lauréats) sans aucune restriction !\n" +
    "Vous pouvez participer à ce concours CV Vidéo ET choisir en plus 1 seule compétition parmi les trois autres (Case Challenge, Mission Emploi ou Pitch en 3 min).\n\n" +
    "⏳ DATE LIMITE D'ENVOI : Vendredi 20 Novembre 2026 à 12h00 précises.\n\n" +
    "🎥 RÈGLES OFFICIELLES DU CV VIDÉO :\n" +
    "• Durée : 3 minutes maximum.\n" +
    "• Présence à l'écran obligatoire (au moins 1/3 de la durée totale).\n" +
    "• Langue au choix : Français, Arabe ou Anglais.\n" +
    "• Usage de l'IA autorisé (montage, sous-titres, visuels) si mentionné clairement. L'IA aide, elle ne remplace pas.\n" +
    "• Toutes les vidéos participantes seront diffusées sur les écrans de la faculté pendant le forum !"
  );

  form.setIsQuiz(false);
  form.setAllowResponseEdits(true);

  // --- SECTION IDENTITÉ DE L'ÉTUDIANT ---
  // Nom & Prénom
  form.addTextItem()
    .setTitle("1. Nom & Prénom complet")
    .setHelpText("Exemple : Yassine Ennhili")
    .setRequired(true);

  // Code Apogée / CNE
  form.addTextItem()
    .setTitle("2. Code Apogée / CNE")
    .setHelpText("Votre numéro d'étudiant UCA")
    .setRequired(true);

  // Email
  form.addTextItem()
    .setTitle("3. Adresse Email")
    .setHelpText("Email académique (@uca.ac.ma) ou personnel actif")
    .setRequired(true);

  // Téléphone WhatsApp
  form.addTextItem()
    .setTitle("4. Numéro de téléphone (WhatsApp)")
    .setHelpText("Exemple : 06 12 34 56 78 (pour vous contacter rapidement)")
    .setRequired(true);

  // Filière / Département
  form.addListItem()
    .setTitle("5. Filière / Département d'études à la FSSM")
    .setChoiceValues([
      "Informatique",
      "Mathématiques",
      "Physique",
      "Chimie",
      "Biologie",
      "Géologie"
    ])
    .setRequired(true);

  // Niveau d'études
  form.addListItem()
    .setTitle("6. Niveau d'études actuel")
    .setChoiceValues([
      "Licence (S1 à S6)",
      "Master (M1 / M2)",
      "Doctorat",
      "Lauréat / Ancien diplômé"
    ])
    .setRequired(true);

  // Langue du CV Vidéo
  form.addMultipleChoiceItem()
    .setTitle("7. Langue principale de votre CV Vidéo")
    .setChoiceValues([
      "Français",
      "Arabe",
      "Anglais"
    ])
    .setRequired(true);

  // --- SECTION DÉPÔT DE LA VIDÉO ---
  // Lien vers la vidéo
  form.addTextItem()
    .setTitle("8. Lien vers votre CV Vidéo (Google Drive, YouTube, OneDrive, WeTransfer...)")
    .setHelpText(
      "IMPORTANT : Assurez-vous que le lien est en accès public ou partagé avec tout le monde disposant du lien !\n" +
      "(Astuce : pour Google Drive, mettez 'Tous les utilisateurs disposant du lien' en lecteur)."
    )
    .setRequired(true);

  // Outils d'IA
  form.addParagraphTextItem()
    .setTitle("9. Outils d'Intelligence Artificielle (IA) utilisés (le cas échéant)")
    .setHelpText("Exemple : CapCut pour les sous-titres, ChatGPT pour la structure du script, Canva... Si aucun outil IA n'a été utilisé, écrivez 'Aucun'.")
    .setRequired(true);

  // --- ENGAGEMENTS SUR L'HONNEUR ---
  const checkRules = form.addCheckboxItem();
  checkRules.setTitle("10. Engagements du candidat & Autorisation de diffusion");
  checkRules.setChoiceValues([
    "Je confirme que ma vidéo dure 3 minutes maximum.",
    "Je confirme que j'apparais personnellement à l'écran (sur toute la vidéo ou au moins un tiers de la durée).",
    "J'autorise la Faculté des Sciences Semlalia à diffuser ma vidéo sur les écrans de la faculté durant le Forum Students & Jobs 2026."
  ]);
  checkRules.setRequired(true);

  Logger.log("Formulaire 1 (CV Vidéo) généré.");
  return form;
}

/**
 * ==============================================================================
 * FORMULAIRE 2 : LES 3 COMPÉTITIONS SUR PLACE (CHOIX UNIQUE PARMI LES 3)
 * ==============================================================================
 * - Couvre : Case Challenge, Mission Emploi, Pitch en 3 minutes.
 * - Intègre la RÈGLE D'EXCLUSIVITÉ : 1 SEUL CHOIX AUTORISÉ parmi les 3.
 * - Utilise le BRANCHEMENT CONDITIONNEL (Sections / Pages) selon la compétition !
 */
function createFormTroisCompetitions() {
  const form = FormApp.create("Forum Students & Jobs 2026 — Inscription aux Compétitions sur Place");

  form.setDescription(
    "FACULTÉ DES SCIENCES SEMLALIA MARRAKECH (FSSM - UCA)\n" +
    "Forum Students & Jobs — 3e Édition (25 & 26 Novembre 2026)\n\n" +
    "⚠️ RÈGLE FONDAMENTALE DE PARTICIPATION :\n" +
    "Vous ne pouvez choisir qu'UNE SEULE compétition parmi les trois suivantes :\n" +
    "1️⃣ Case Challenge « Du labo à l'entreprise »\n" +
    "2️⃣ Mission Emploi (Escape Game recrutement)\n" +
    "3️⃣ Concours Pitch en 3 minutes\n\n" +
    "👉 Si vous participez à 1 de ces trois compétitions, vous NE POUVEZ PAS participer aux deux autres !\n" +
    "💡 Note : Le concours CV Vidéo reste quant à lui ouvert à tous et cumulable avec votre choix.\n\n" +
    "⏳ DATE LIMITE D'INSCRIPTION : Vendredi 20 Novembre 2026 à 12h00 précises."
  );

  form.setIsQuiz(false);
  form.setAllowResponseEdits(true);

  // ============================================================================
  // SECTION 1 : INFORMATIONS GÉNÉRALES DU CANDIDAT
  // ============================================================================
  form.addTextItem()
    .setTitle("1. Nom & Prénom complet")
    .setHelpText("Exemple : Yassine Ennhili")
    .setRequired(true);

  form.addTextItem()
    .setTitle("2. Code Apogée / CNE")
    .setHelpText("Votre numéro d'étudiant UCA")
    .setRequired(true);

  form.addTextItem()
    .setTitle("3. Adresse Email")
    .setHelpText("Email académique (@uca.ac.ma) ou personnel")
    .setRequired(true);

  form.addTextItem()
    .setTitle("4. Numéro de téléphone (WhatsApp)")
    .setHelpText("Numéro joignable pour l'organisation")
    .setRequired(true);

  form.addListItem()
    .setTitle("5. Filière / Département à la FSSM")
    .setChoiceValues([
      "Informatique",
      "Mathématiques",
      "Physique",
      "Chimie",
      "Biologie",
      "Géologie"
    ])
    .setRequired(true);

  form.addListItem()
    .setTitle("6. Niveau d'études")
    .setChoiceValues([
      "Licence (S1 à S6)",
      "Master (M1 / M2)",
      "Doctorat",
      "Lauréat / Ancien étudiant"
    ])
    .setRequired(true);

  // ============================================================================
  // CRÉATION DES SECTIONS SPÉCIFIQUES & DU BRANCHEMENT CONDITIONNEL
  // ============================================================================
  
  // Section pour le Case Challenge
  const pageCase = form.addPageBreakItem();
  pageCase.setTitle("Compétition : Case Challenge « Du labo à l'entreprise »");
  pageCase.setHelpText(
    "« Une idée, une équipe, un jury : défendez votre projet ! »\n\n" +
    "• Format : Équipes de 3 étudiants formées sur place au début de l'épreuve.\n" +
    "• Préparation : 2 heures en équipe.\n" +
    "• Présentation : 7 minutes (5 slides maximum) + 3 minutes de questions du jury.\n" +
    "• Objectif : Valoriser vos compétences scientifiques dans un projet entrepreneurial concret."
  );

  pageCase.addParagraphTextItem()
    .setTitle("Domaine d'intérêt ou compétences clés que vous apportez à l'équipe")
    .setHelpText("Exemple : Biotechnologie, Intelligence Artificielle, Énergie, Chimie des matériaux, Gestion de projet, Communication...")
    .setRequired(true);

  pageCase.addMultipleChoiceItem()
    .setTitle("Avez-vous déjà une idée de projet que vous aimeriez proposer à votre équipe le jour J ?")
    .setChoiceValues([
      "Oui, j'ai une idée/sujet en tête que je proposerai à mes coéquipiers",
      "Non, je préfère brainstormer et co-créer l'idée sur place avec mon équipe"
    ])
    .setRequired(true);

  // Section pour Mission Emploi
  const pageMission = form.addPageBreakItem();
  pageMission.setTitle("Compétition : Mission Emploi (Escape Game Recrutement)");
  pageMission.setHelpText(
    "« 45 minutes, 5 énigmes, 1 coffre : êtes-vous prêts pour la mission ? »\n\n" +
    "• Format : Équipes de 3 étudiants formées au démarrage.\n" +
    "• Durée : 45 minutes chrono pour résoudre 5 énigmes RH (erreurs de CV, offre d'emploi, entretien, organigramme, sélection de candidat).\n" +
    "• Règles : Téléphones non autorisés ! 3 indices maximum avec pénalité de temps."
  );

  pageMission.addMultipleChoiceItem()
    .setTitle("Avez-vous déjà participé à un Escape Game ou un jeu de logique / d'équipe ?")
    .setChoiceValues([
      "Oui, j'adore les énigmes et les jeux d'équipe",
      "Non, c'est ma toute première fois et je veux relever le défi"
    ])
    .setRequired(true);

  pageMission.addParagraphTextItem()
    .setTitle("Votre point fort dans un jeu d'équipe sous pression de temps :")
    .setHelpText("Exemple : Logique d'analyse, rapidité de lecture, organisation, sang-froid...")
    .setRequired(true);

  // Section pour le Pitch en 3 min
  const pagePitch = form.addPageBreakItem();
  pagePitch.setTitle("Compétition : Concours Pitch en 3 minutes");
  pagePitch.setHelpText(
    "« 3 minutes pour convaincre. Et si c'était vous ? »\n\n" +
    "• Format : Individuel sur scène.\n" +
    "• Durée : 3 minutes maximum avec chronomètre visible.\n" +
    "• Déroulement : Sans diaporama / sans slides (notes brèves autorisées).\n" +
    "• Objectif : Présenter votre parcours, vos atouts et décrocher votre stage ou emploi cible devant un jury de recruteurs."
  );

  pagePitch.addTextItem()
    .setTitle("Stage ou Métier recherché (Sujet de votre pitch)")
    .setHelpText("Exemple : Stage PFE Data Analyst, Ingénieur R&D Chimie, Enseignement, Développeur Web...")
    .setRequired(true);

  pagePitch.addMultipleChoiceItem()
    .setTitle("Langue dans laquelle vous souhaitez pitcher sur scène")
    .setChoiceValues([
      "Français",
      "Arabe",
      "Anglais"
    ])
    .setRequired(true);

  pagePitch.addParagraphTextItem()
    .setTitle("En une ou deux phrases, pourquoi souhaitez-vous relever ce défi de pitch ?")
    .setHelpText("Exemple : Vaincre le trac, m'entraîner aux entretiens d'embauche, convaincre les recruteurs présents...")
    .setRequired(false);

  // Section Finale : Confirmation & Engagement sur l'honneur
  const pageConfirmation = form.addPageBreakItem();
  pageConfirmation.setTitle("Engagement sur l'honneur & Validation de votre candidature");
  pageConfirmation.setHelpText(
    "Veuillez lire attentivement et cocher la case d'engagement ci-dessous pour valider votre inscription officielle."
  );

  const checkHonor = pageConfirmation.addCheckboxItem();
  checkHonor.setTitle("Engagement officiel :");
  checkHonor.setChoiceValues([
    "J'atteste sur l'honneur que je m'inscris à UNE SEULE compétition sur place parmi (Case Challenge, Mission Emploi, Pitch en 3 min).",
    "J'ai bien noté que si je m'inscris à l'une de ces 3 compétitions, je ne pourrai pas participer aux deux autres.",
    "Je m'engage à être présent(e) et ponctuel(le) le jour de l'épreuve à la Faculté des Sciences Semlalia Marrakech.",
    "Je sais que le concours CV Vidéo reste ouvert et que je peux également y participer librement."
  ]);
  checkHonor.setRequired(true);

  // Maintenant, configurer les redirections de fin de section :
  pageCase.setGoToPage(pageConfirmation);
  pageMission.setGoToPage(pageConfirmation);
  pagePitch.setGoToPage(pageConfirmation);
  pageConfirmation.setGoToPage(FormApp.PageNavigationType.SUBMIT);

  // Maintenant, on configure la question de CHOIX dans la SECTION 1 avec le routage conditionnel :
  const compChoice = form.addMultipleChoiceItem();
  compChoice.setTitle("7. À quelle compétition sur place souhaitez-vous participer ? (1 SEUL CHOIX POSSIBLE)");
  compChoice.setHelpText("Attention : choisissez attentivement. Vous ne pouvez participer qu'à une seule de ces 3 compétitions !");
  compChoice.setChoices([
    compChoice.createChoice("Case Challenge « Du labo à l'entreprise » (Équipe de 3)", pageCase),
    compChoice.createChoice("Mission Emploi (Escape Game recrutement en équipe)", pageMission),
    compChoice.createChoice("Concours Pitch en 3 minutes (Individuel sur scène)", pagePitch)
  ]);
  compChoice.setRequired(true);

  Logger.log("Formulaire 2 (3 Compétitions avec branchement conditionnel) généré.");
  return form;
}
