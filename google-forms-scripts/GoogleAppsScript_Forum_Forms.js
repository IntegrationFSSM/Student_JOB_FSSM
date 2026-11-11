/**
 * ==============================================================================
 * FORUM STUDENTS & JOBS — 3e ÉDITION (FSSM - UCA MARRAKECH)
 * SCRIPT GOOGLE APPS SCRIPT POUR GÉNÉRER LES 2 GOOGLE FORMS OFFICIELS
 * ==============================================================================
 * 
 * 1. FORMULAIRE 1 : Concours du Meilleur CV Vidéo (Ouvert à tous, upload direct sur Drive)
 * 2. FORMULAIRE 2 : Formulaire Unique avec Branchement Conditionnel (IF / ELSE) :
 *    - PAGE 1 : Choix immédiat de la compétition (1 seul choix parmi les 3)
 *    - SI CASE CHALLENGE : Page Équipe avec 3 Noms, Prénoms, CNE, Contacts & Filières
 *    - SI MISSION EMPLOI : Page Équipe avec 3 Noms, Prénoms, CNE, Contacts & Filières
 *    - SI PITCH EN 3 MIN : Page Individuelle avec 1 SEUL Nom, Prénom, CNE, Contact & Thème
 *    - PAGE FINALE : Engagement sur l'honneur & Envoi
 * 
 * ==============================================================================
 * COMMENT UTILISER CE SCRIPT (EN 1 MINUTE) :
 * 1. Allez sur https://script.google.com/
 * 2. Cliquez sur "+ Nouveau projet".
 * 3. Effacez le code existant et collez TOUT le contenu de ce fichier.
 * 4. Cliquez sur "Enregistrer" (icône disquette ou Ctrl+S).
 * 5. Dans la barre du haut, sélectionnez la fonction "createAllForms" et cliquez sur "Exécuter".
 * 6. Autorisez les permissions Google demandées.
 * 7. Regardez dans le "Journal d'exécution" en bas : les liens publics et de modification
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
  Logger.log("1️⃣ FORMULAIRE CV VIDÉO (Upload Drive) :");
  Logger.log("   - Lien de modification : " + form1.getEditUrl());
  Logger.log("   - Lien public (étudiants) : " + form1.getPublishedUrl());
  Logger.log("\n2️⃣ FORMULAIRE DES 3 COMPÉTITIONS (Branchement Conditionnel IF/ELSE) :");
  Logger.log("   - Lien de modification : " + form2.getEditUrl());
  Logger.log("   - Lien public (étudiants) : " + form2.getPublishedUrl());
  Logger.log("==================================================================");
}

/**
 * ==============================================================================
 * FORMULAIRE 1 : CONCOURS DU MEILLEUR CV VIDÉO (FSSM - 3e ÉDITION)
 * ==============================================================================
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

  // --- IDENTITÉ DE L'ÉTUDIANT ---
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
    .setHelpText("Exemple : 06 12 34 56 78")
    .setRequired(true);

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

  form.addListItem()
    .setTitle("6. Niveau d'études actuel")
    .setChoiceValues([
      "Licence (S1 à S6)",
      "Master (M1 / M2)",
      "Doctorat",
      "Lauréat / Ancien diplômé"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("7. Langue principale de votre CV Vidéo")
    .setChoiceValues([
      "Français",
      "Arabe",
      "Anglais"
    ])
    .setRequired(true);

  // --- DÉPÔT DE LA VIDÉO DIRECTEMENT SUR DRIVE ---
  form.addSectionHeaderItem()
    .setTitle("📤 DÉPÔT DE VOTRE FICHIER VIDÉO")
    .setHelpText(
      "📌 RAPPEL : Pour activer l'upload direct de fichiers vers votre Google Drive en 2 clics :\n" +
      "Dans l'éditeur de ce formulaire, sur la question 8 ci-dessous, changez 'Réponse courte' en 'Importer un fichier (File Upload)' -> activez 'Vidéo' et taille max '1 Go' ou '10 Go'."
    );

  form.addTextItem()
    .setTitle("8. Déposez votre CV Vidéo (Fichier vidéo ou Lien Google Drive)")
    .setHelpText("Déposez votre fichier vidéo (MP4, MOV - Max 3 min) ou collez votre lien Google Drive en accès public.")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("9. Outils d'Intelligence Artificielle (IA) utilisés (le cas échéant)")
    .setHelpText("Exemple : CapCut pour les sous-titres, ChatGPT pour le plan... Si aucun, écrivez 'Aucun'.")
    .setRequired(true);

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
 * FORMULAIRE 2 : LES 3 COMPÉTITIONS SUR PLACE (BRANCHEMENT CONDITIONNEL IF/ELSE)
 * ==============================================================================
 * - PAGE 1 : L'étudiant CHOISIT d'abord son challenge (1 seul choix possible).
 * - SELON LE CHOIX (IF / ELSE) :
 *   • SI Case Challenge  ➔ Page Équipe de 3 personnes (Nom, Prénom, CNE x3)
 *   • SI Mission Emploi  ➔ Page Équipe de 3 personnes (Nom, Prénom, CNE x3)
 *   • SI Pitch en 3 min  ➔ Page Individuelle 1 seule personne (Nom, Prénom, CNE x1)
 * - TOUTES LES PAGES MÈNENT À LA PAGE FINALE DE VALIDATION & ENGAGEMENT.
 */
function createFormTroisCompetitions() {
  const form = FormApp.create("Forum Students & Jobs 2026 — Inscription aux Compétitions sur Place");

  form.setDescription(
    "FACULTÉ DES SCIENCES SEMLALIA MARRAKECH (FSSM - UCA)\n" +
    "Forum Students & Jobs — 3e Édition (25 & 26 Novembre 2026)\n\n" +
    "⚠️ RÈGLE FONDAMENTALE DE PARTICIPATION :\n" +
    "Vous devez choisir UNE SEULE compétition sur place parmi les trois suivantes :\n" +
    "1️⃣ Case Challenge « Du labo à l'entreprise » (Équipes de 3)\n" +
    "2️⃣ Mission Emploi — Escape Game recrutement (Équipes de 3)\n" +
    "3️⃣ Concours Pitch en 3 minutes (Individuel sur scène)\n\n" +
    "👉 Si vous participez à 1 de ces compétitions, vous NE POUVEZ PAS participer aux deux autres !\n" +
    "💡 Note : Le concours CV Vidéo reste quant à lui ouvert à tous et cumulable avec votre choix.\n\n" +
    "⏳ DATE LIMITE D'INSCRIPTION : Vendredi 20 Novembre 2026 à 12h00 précises."
  );

  form.setIsQuiz(false);
  form.setAllowResponseEdits(true);

  // ============================================================================
  // PAGE 1 : QUESTION DE CHOIX INITIALE (DÉTERMINE LE BRANCHEMENT IF / ELSE)
  // ============================================================================
  const compChoice = form.addMultipleChoiceItem();
  compChoice.setTitle("À quelle compétition sur place souhaitez-vous participer ?");
  compChoice.setHelpText(
    "⚠️ CHOIX UNIQUE : Veuillez sélectionner votre compétition. Le formulaire affichera ensuite automatiquement les questions correspondantes (équipe de 3 ou individuel)."
  );
  compChoice.setRequired(true);

  // ============================================================================
  // CRÉATION DES 4 PAGES SUIVANTES
  // ============================================================================
  
  // --- PAGE 2 : CASE CHALLENGE (ÉQUIPE DE 3 ÉTUDIANTS) ---
  const pageCase = form.addPageBreakItem();
  pageCase.setTitle("Compétition 1 : Case Challenge « Du labo à l'entreprise » (Équipe de 3)");
  pageCase.setHelpText(
    "« Une idée, une équipe, un jury : défendez votre projet ! »\n\n" +
    "• Format : Équipes de 3 étudiants.\n" +
    "• Préparation : 2 heures en équipe.\n" +
    "• Présentation : 7 minutes (5 slides maximum) + 3 minutes de questions du jury.\n" +
    "• Renseignez ci-dessous les informations des 3 membres de votre équipe :"
  );

  // Nom de l'équipe
  form.addTextItem()
    .setTitle("[Case Challenge] Nom de l'équipe (ou Domaine du projet)")
    .setHelpText("Exemple : BioTech Semlalia, EcoInnov...")
    .setRequired(true);

  // --- MEMBRE 1 (Chef d'équipe) ---
  form.addSectionHeaderItem()
    .setTitle("👤 MEMBRE 1 (Chef d'équipe / Contact principal)");

  form.addTextItem()
    .setTitle("Membre 1 — Nom & Prénom complet *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 1 — Code Apogée / CNE *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 1 — Téléphone (WhatsApp) *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 1 — Email académique ou personnel *")
    .setRequired(true);

  form.addListItem()
    .setTitle("Membre 1 — Filière FSSM *")
    .setChoiceValues(["Biologie", "Chimie", "Géologie", "Physique", "Informatique", "Mathématiques"])
    .setRequired(true);

  form.addListItem()
    .setTitle("Membre 1 — Niveau d'études *")
    .setChoiceValues(["Licence", "Master", "Doctorat", "Lauréat"])
    .setRequired(true);

  // --- MEMBRE 2 ---
  form.addSectionHeaderItem()
    .setTitle("👥 MEMBRE 2 DE L'ÉQUIPE");

  form.addTextItem()
    .setTitle("Membre 2 — Nom & Prénom complet *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 2 — Code Apogée / CNE *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 2 — Téléphone ou Email *")
    .setRequired(true);

  form.addListItem()
    .setTitle("Membre 2 — Filière FSSM *")
    .setChoiceValues(["Biologie", "Chimie", "Géologie", "Physique", "Informatique", "Mathématiques"])
    .setRequired(true);

  form.addListItem()
    .setTitle("Membre 2 — Niveau d'études *")
    .setChoiceValues(["Licence", "Master", "Doctorat", "Lauréat"])
    .setRequired(true);

  // --- MEMBRE 3 ---
  form.addSectionHeaderItem()
    .setTitle("👥 MEMBRE 3 DE L'ÉQUIPE");

  form.addTextItem()
    .setTitle("Membre 3 — Nom & Prénom complet *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 3 — Code Apogée / CNE *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 3 — Téléphone ou Email *")
    .setRequired(true);

  form.addListItem()
    .setTitle("Membre 3 — Filière FSSM *")
    .setChoiceValues(["Biologie", "Chimie", "Géologie", "Physique", "Informatique", "Mathématiques"])
    .setRequired(true);

  form.addListItem()
    .setTitle("Membre 3 — Niveau d'études *")
    .setChoiceValues(["Licence", "Master", "Doctorat", "Lauréat"])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("[Case Challenge] Vos compétences clés / Idée de projet")
    .setHelpText("Décrivez brièvement le domaine ou l'idée que vous souhaitez défendre devant le jury.")
    .setRequired(true);


  // --- PAGE 3 : MISSION EMPLOI (ESCAPE GAME EN ÉQUIPE DE 3) ---
  const pageMission = form.addPageBreakItem();
  pageMission.setTitle("Compétition 2 : Mission Emploi (Escape Game en équipe de 3)");
  pageMission.setHelpText(
    "« 45 minutes, 5 énigmes, 1 coffre : êtes-vous prêts pour la mission ? »\n\n" +
    "• Format : Équipes de 3 étudiants.\n" +
    "• Durée : 45 minutes chrono pour résoudre 5 énigmes RH.\n" +
    "• Règles : Téléphones non autorisés ! 3 indices maximum avec pénalité de temps.\n" +
    "• Renseignez ci-dessous les informations des 3 membres de votre équipe :"
  );

  form.addTextItem()
    .setTitle("[Mission Emploi] Nom de l'équipe (Optionnel)")
    .setHelpText("Exemple : Les Détectives RH...")
    .setRequired(false);

  // --- MISSION EMPLOI : MEMBRE 1 ---
  form.addSectionHeaderItem()
    .setTitle("👤 MEMBRE 1 (Capitaine d'équipe / Contact)");

  form.addTextItem()
    .setTitle("Membre 1 — Nom & Prénom *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 1 — Code Apogée / CNE *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 1 — Téléphone (WhatsApp) *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 1 — Email *")
    .setRequired(true);

  form.addListItem()
    .setTitle("Membre 1 — Filière FSSM *")
    .setChoiceValues(["Informatique", "Mathématiques", "Physique", "Chimie", "Biologie", "Géologie"])
    .setRequired(true);

  // --- MISSION EMPLOI : MEMBRE 2 ---
  form.addSectionHeaderItem()
    .setTitle("👥 MEMBRE 2 DE L'ÉQUIPE");

  form.addTextItem()
    .setTitle("Membre 2 — Nom & Prénom *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 2 — Code Apogée / CNE *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 2 — Téléphone ou Email *")
    .setRequired(true);

  form.addListItem()
    .setTitle("Membre 2 — Filière FSSM *")
    .setChoiceValues(["Informatique", "Mathématiques", "Physique", "Chimie", "Biologie", "Géologie"])
    .setRequired(true);

  // --- MISSION EMPLOI : MEMBRE 3 ---
  form.addSectionHeaderItem()
    .setTitle("👥 MEMBRE 3 DE L'ÉQUIPE");

  form.addTextItem()
    .setTitle("Membre 3 — Nom & Prénom *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 3 — Code Apogée / CNE *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Membre 3 — Téléphone ou Email *")
    .setRequired(true);

  form.addListItem()
    .setTitle("Membre 3 — Filière FSSM *")
    .setChoiceValues(["Informatique", "Mathématiques", "Physique", "Chimie", "Biologie", "Géologie"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("[Mission Emploi] Engagement sur les règles de l'Escape Game")
    .setChoiceValues([
      "Nous acceptons le règlement (45 minutes, téléphones portables strictement interdits, esprit d'équipe)."
    ])
    .setRequired(true);


  // --- PAGE 4 : PITCH EN 3 MIN (INDIVIDUEL - 1 SEUL CANDIDAT) ---
  const pagePitch = form.addPageBreakItem();
  pagePitch.setTitle("Compétition 3 : Concours Pitch en 3 minutes (Individuel)");
  pagePitch.setHelpText(
    "« 3 minutes pour convaincre. Et si c'était vous ? »\n\n" +
    "• Format : Candidature INDIVIDUELLE sur scène.\n" +
    "• Durée : 3 minutes chrono maximum (chronomètre visible).\n" +
    "• Déroulement : Sans diaporama / sans slides (notes brèves autorisées).\n" +
    "• Renseignez ci-dessous vos informations personnelles et le sujet de votre pitch :"
  );

  form.addTextItem()
    .setTitle("Nom & Prénom complet *")
    .setHelpText("Exemple : Yassine Ennhili")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Code Apogée / CNE *")
    .setHelpText("Votre numéro d'étudiant UCA")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Numéro de téléphone (WhatsApp) *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Adresse Email académique ou personnelle *")
    .setRequired(true);

  form.addListItem()
    .setTitle("Filière / Département à la FSSM *")
    .setChoiceValues(["Informatique", "Mathématiques", "Physique", "Chimie", "Biologie", "Géologie"])
    .setRequired(true);

  form.addListItem()
    .setTitle("Niveau d'études actuel *")
    .setChoiceValues(["Licence (S1 à S6)", "Master (M1 / M2)", "Doctorat", "Lauréat / Ancien étudiant"])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Stage ou Métier recherché (Thème de votre Pitch sur scène) *")
    .setHelpText("Exemple : Stage PFE Data Analyst, Ingénieur Chimiste, Développeur Mobile...")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Langue dans laquelle vous pitcherez sur scène *")
    .setChoiceValues(["Français", "Arabe", "Anglais"])
    .setRequired(true);


  // --- PAGE 5 : ENGAGEMENT SUR L'HONNEUR & VALIDATION FINALE ---
  const pageConfirmation = form.addPageBreakItem();
  pageConfirmation.setTitle("Validation & Engagement sur l'honneur");
  pageConfirmation.setHelpText(
    "Veuillez cocher la case d'engagement ci-dessous pour confirmer définitivement votre candidature au Forum Students & Jobs 2026."
  );

  const checkHonor = pageConfirmation.addCheckboxItem();
  checkHonor.setTitle("Engagement officiel :");
  checkHonor.setChoiceValues([
    "J'atteste sur l'honneur que cette inscription constitue mon CHOIX UNIQUE parmi les 3 compétitions sur place.",
    "J'ai bien noté que ma participation à cette compétition m'interdit de participer aux deux autres compétitions sur place.",
    "Je m'engage (ainsi que mes coéquipiers le cas échéant) à être présent(e) et ponctuel(le) le jour du Forum à la FSSM.",
    "Je sais que le concours CV Vidéo reste ouvert et cumulable avec cette compétition."
  ]);
  checkHonor.setRequired(true);

  // ============================================================================
  // CONFIGURATION DES REDIRECTIONS CONDITIONNELLES (IF / ELSE)
  // ============================================================================
  
  // 1. Branchement depuis la Page 1 selon le choix :
  compChoice.setChoices([
    compChoice.createChoice(
      "Case Challenge « Du labo à l'entreprise » (Équipe de 3 étudiants)",
      pageCase
    ),
    compChoice.createChoice(
      "Mission Emploi — Escape Game recrutement (Équipe de 3 étudiants)",
      pageMission
    ),
    compChoice.createChoice(
      "Concours Pitch en 3 minutes (Individuel sur scène — 1 personne)",
      pagePitch
    )
  ]);

  // 2. Redirections de chaque page vers la page finale de confirmation :
  pageCase.setGoToPage(pageConfirmation);
  pageMission.setGoToPage(pageConfirmation);
  pagePitch.setGoToPage(pageConfirmation);
  pageConfirmation.setGoToPage(FormApp.PageNavigationType.SUBMIT);

  Logger.log("Formulaire 2 (Branchement IF/ELSE avec 3 membres pour Case & Mission, 1 seul pour Pitch) généré.");
  return form;
}
