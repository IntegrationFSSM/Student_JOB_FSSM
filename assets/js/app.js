'use strict';

var THEME_KEY = 'sj-theme';
var LANG_KEY = 'sj-lang';
var LANGS = ['fr', 'ar', 'en'];

var I18N = {
  fr: {
    'title.home': 'Forum Students & Jobs — 3e Édition | FSSM Marrakech',
    'title.hackathon': 'Hackathon Innovation & Emploi | Forum Students & Jobs FSSM',
    'title.case': 'Case Challenge « Du labo à l\'entreprise » | Forum Students & Jobs FSSM',
    'title.cv': 'Concours CV Vidéo | Forum Students & Jobs FSSM',
    'title.mission': 'Mission Emploi (Escape Game) | Forum Students & Jobs FSSM',
    'title.pitch': 'Concours Pitch en 3 min | Forum Students & Jobs FSSM',

    'nav.home': 'Accueil',
    'nav.pillars': 'Espaces',
    'nav.leaders': 'Mots Officiels',
    'nav.competitions': 'Compétitions',
    'nav.program': 'Programme',
    'nav.partners': 'Partenaires',

    'hero.inst': 'Université Cadi Ayyad • Faculté des Sciences Semlalia Marrakech',
    'hero.edition': '3e Édition • 25 & 26 Novembre 2026',
    'hero.hackBadge': 'Hackathon : 24 & 25 Novembre 2026',
    'hero.forumWord': 'FORUM OFFICIEL D\'INSERTION PROFESSIONNELLE',
    'hero.sloganLabel': 'Slogan officiel de la 3e Édition',
    'hero.sloganFr': '« Étudiants aujourd\'hui, professionnels demain »',
    'hero.meta1Label': 'Hackathon d\'ouverture',
    'hero.meta1Val': '24 & 25 Novembre 2026',
    'hero.meta2Label': 'Forum Students & Jobs',
    'hero.meta2Val': '25 & 26 Novembre 2026',
    'hero.meta3Label': 'Lieu de l\'événement',
    'hero.meta3Val': 'Faculté des Sciences Semlalia (FSSM)',
    'hero.meta4Label': 'Date limite compétitions',
    'hero.meta4Val': 'Vendredi 20 Nov. à 12h00',
    'hero.btnComp': 'Découvrir les Compétitions',
    'hero.btnLeaders': 'Mots des Responsables',
    'hero.btnProg': 'Voir le Programme',
    'hero.stat1Num': '3e',
    'hero.stat1Lbl': 'Édition Officielle',
    'hero.stat2Num': '5',
    'hero.stat2Lbl': 'Grandes Compétitions',
    'hero.stat3Num': '20+',
    'hero.stat3Lbl': 'Entreprises & Partenaires',
    'hero.stat4Num': '3',
    'hero.stat4Lbl': 'Jours d\'Innovation',
    'hero.tabLogo': 'Logo Officiel',
    'hero.tabPoster': 'Affiche 2026',
    'hero.captionLeft': 'Charte Officielle — 3e Édition',
    'hero.captionRight': 'FSSM Marrakech',

    'pillars.kicker': 'Au Cœur du Forum',
    'pillars.title': 'Les 3 Espaces Phares du Forum',
    'pillars.sub': 'Un carrefour privilégié de rencontre entre les étudiants, les jeunes diplômés de la FSSM et les acteurs socio-économiques autour de trois grands pôles.',
    'pillars.confTitle': 'Conférences',
    'pillars.confDesc': 'Échanges animés par des professionnels du secteur et experts invités autour des métiers d\'avenir, des exigences du marché du travail et des parcours inspirants.',
    'pillars.workTitle': 'Ateliers',
    'pillars.workDesc': 'Formations pratiques animées par des experts en insertion professionnelle : rédaction de CV impactant, préparation aux entretiens, personal branding et soft skills.',
    'pillars.standTitle': 'Stands',
    'pillars.standDesc': 'Information directe sur l\'emploi, les métiers et le cursus universitaire : réseautage avec les entreprises partenaires, opportunités de stages PFE et recrutement.',

    'leaders.kicker': 'Allocutions & Vision Institutionnelle',
    'leaders.title': 'Mots Officiels & Comité du Forum',
    'leaders.sub': 'L\'engagement de l\'Université Cadi Ayyad et de la Faculté des Sciences Semlalia pour la réussite, le suivi et l\'insertion professionnelle de nos lauréats.',

    'leader1.badge': 'Président de l\'Université',
    'leader1.name': 'Pr. Belaïd BOUGADIR',
    'leader1.role': 'Président de l\'Université Cadi Ayyad (UCA)',
    'leader1.speech': '« L\'employabilité de nos lauréats et leur intégration harmonieuse dans le tissu socio-économique national et international constituent une priorité stratégique de l\'Université Cadi Ayyad. À travers le Forum Students & Jobs, nous consolidons les passerelles entre l\'excellence académique, la recherche scientifique et le monde du travail afin que chaque diplômé devienne un acteur majeur du développement et de l\'innovation. »',
    'leader1.foot': 'Présidence de l\'Université Cadi Ayyad',

    'leader2.badge': 'Doyen de la Faculté',
    'leader2.name': 'Pr. El Hassan EL MOUDEN',
    'leader2.role': 'Doyen de la Faculté des Sciences Semlalia (FSSM)',
    'leader2.speech': '« La Faculté des Sciences Semlalia de Marrakech forme des générations de scientifiques dotés d\'une rigueur analytique et d\'un savoir-faire reconnus. Cette 3ème édition du Forum Students & Jobs offre à nos étudiants de licence, master et doctorat une immersion concrète auprès des recruteurs, valorisant la richesse de nos filières scientifiques et accompagnant nos futurs lauréats vers des carrières d\'excellence. »',
    'leader2.foot': 'Décanat de la FSSM Marrakech',

    'leader3.badge': 'Coordinatrice — 3e Édition',
    'leader3.name': 'Mme Zineb CHAQUIQ EL BADRE',
    'leader3.role': 'Responsable du Service des Prévisions, Statistiques & Suivi des Lauréats — Initiatrice du Forum',
    'leader3.speech': '« Initié et porté par le Service des Statistiques et du Suivi de l\'Insertion des Lauréats, le Forum Students & Jobs célèbre sa 3ème édition sous le signe de l\'action et de l\'audace : "Étudiants aujourd\'hui, professionnels demain". Grâce au Hackathon, au Case Challenge, au CV Vidéo, à l\'Escape Game Mission Emploi et au Pitch en 3 minutes, chaque étudiant devient acteur de son avenir professionnel. »',
    'leader3.foot': 'Service des Statistiques & Suivi des Lauréats (FSSM)',

    'comp.kicker': 'Défis & Talents • Inscriptions jusqu\'au 20/11 à 12h00',
    'comp.title': 'Compétitions & Challenges Officiels',
    'comp.sub': 'Découvrez chaque compétition en détail sur sa page dédiée, préparez votre candidature et relevez le défi devant nos jurys d\'experts et de recruteurs.',
    'comp.btnDiscover': 'Découvrir & Participer',
    'comp.deadline': 'Date limite : Vendredi 20/11 à 12h00',

    'comp1.tag': '24 & 25 Novembre 2026 • En équipe',
    'comp1.title': 'Hackathon Students & Jobs',
    'comp1.slogan': '« 48 heures pour innover, prototyper et convaincre les entreprises ! »',
    'comp1.desc': 'En ouverture du forum les 24 et 25 novembre, développez en équipe des solutions innovantes répondant à des problématiques réelles d\'entreprises et d\'employabilité.',
    'comp1.meta1': 'Dates : Mardi 24 & Mercredi 25 Novembre 2026',
    'comp1.meta2': 'Format : Équipes pluridisciplinaires & Mentoring',

    'comp2.tag': 'Équipe de 3 étudiants • Sur place',
    'comp2.title': 'Case Challenge « Du labo à l\'entreprise »',
    'comp2.slogan': '« Une idée, une équipe, un jury : défendez votre projet ! »',
    'comp2.desc': 'Transformez votre savoir scientifique en un projet entrepreneurial structuré. Découvrez vos coéquipiers sur place, préparez votre projet en 2h et défendez-le devant un jury d\'experts.',
    'comp2.meta1': 'Préparation : 2h | Pitch : 7 min + 3 min Q&R',
    'comp2.meta2': 'Équipes de 3 formées au début de l\'épreuve',

    'comp3.tag': 'Individuel • Vidéo 3 min max',
    'comp3.title': 'Concours CV Vidéo',
    'comp3.slogan': '« Votre CV prend vie : montrez qui vous êtes en 3 minutes. »',
    'comp3.desc': 'Un CV classique dit ce que vous avez fait ; un CV vidéo montre votre énergie, votre assurance et votre personnalité. Toutes les vidéos seront diffusées sur les écrans de la FSSM.',
    'comp3.meta1': 'Langues : Français, Arabe ou Anglais (IA autorisée)',
    'comp3.meta2': 'Dépôt avant le Vendredi 20/11 à 12h00',

    'comp4.tag': 'Escape Game • 45 min • Équipe de 3',
    'comp4.title': 'Mission Emploi (Escape Game)',
    'comp4.slogan': '« 45 minutes, 5 énigmes, 1 coffre : êtes-vous prêts pour la mission ? »',
    'comp4.desc': 'Affrontez les étapes clés du recrutement sous forme de jeu immersif : corriger un CV, décoder une offre, déjouer les pièges d\'entretien, reconstituer un organigramme et choisir le bon candidat.',
    'comp4.meta1': '5 énigmes RH | Sans téléphone | 3 indices max',
    'comp4.meta2': 'Équipes de 3 formées sur place',

    'comp5.tag': 'Individuel • Scène • 3 min max',
    'comp5.title': 'Concours Pitch en 3 min',
    'comp5.slogan': '« 3 minutes pour convaincre. Et si c\'était vous ? »',
    'comp5.desc': 'Montez sur scène sans diaporama et présentez en 3 minutes votre parcours, vos compétences clés et le stage ou poste que vous visez devant un jury de professionnels.',
    'comp5.meta1': 'Format : Individuel sur scène, sans support visuel',
    'comp5.meta2': 'Chronomètre visible & Jury de recruteurs',

    'prog.kicker': 'Agenda Officiel 2026',
    'prog.title': 'Programme des Journées (24, 25 & 26 Novembre)',
    'prog.sub': 'Trois journées intenses rythmant l\'innovation technologique, la rencontre avec les recruteurs et les compétitions d\'insertion professionnelle.',
    'prog.day1Title': 'Mardi 24 Novembre 2026',
    'prog.day1Badge': 'Journée 1 • Hackathon',
    'prog.d1.t1': '09h00 - 10h30',
    'prog.d1.h1': 'Accueil des équipes & Lancement du Hackathon',
    'prog.d1.p1': 'Présentation des défis d\'innovation, constitution des espaces de travail et démarrage du brainstorming.',
    'prog.d1.t2': '11h00 - 18h00',
    'prog.d1.h2': 'Ateliers de prototypage & Coaching par les mentors',
    'prog.d1.p2': 'Accompagnement intensif des équipes par des enseignants-chercheurs et professionnels partenaires.',

    'prog.day2Title': 'Mercredi 25 Novembre 2026',
    'prog.day2Badge': 'Journée 2 • Ouverture Forum & Hackathon',
    'prog.d2.t1': '09h00 - 10h30',
    'prog.d2.h1': 'Cérémonie d\'Ouverture Officielle — 3e Édition',
    'prog.d2.p1': 'Allocutions de M. le Président de l\'UCA, M. le Doyen de la FSSM et Mme la Responsable du Suivi des Lauréats.',
    'prog.d2.t2': '10h30 - 13h00',
    'prog.d2.h2': 'Conférences Plénières & Ouverture des Stands Entreprises',
    'prog.d2.p2': 'Panels avec les recruteurs et visite officielle des stands d\'information sur l\'emploi, les métiers et les cursus.',
    'prog.d2.t3': '14h30 - 18h00',
    'prog.d2.h3': 'Délibérations du Hackathon, Ateliers & Diffusion des CV Vidéo',
    'prog.d2.p3': 'Pitch final du Hackathon, ateliers pratiques d\'insertion et projection des CV Vidéo sur les écrans de la FSSM.',

    'prog.day3Title': 'Jeudi 26 Novembre 2026',
    'prog.day3Badge': 'Journée 3 • Compétitions, Ateliers & Clôture',
    'prog.d3.t1': '09h00 - 13h00',
    'prog.d3.h1': 'Case Challenge « Du labo à l\'entreprise » & Mission Emploi',
    'prog.d3.p1': 'Épreuves par équipes de 3 étudiants (formation des équipes sur place, résolution des 5 énigmes RH et défense de projet).',
    'prog.d3.t2': '14h00 - 16h30',
    'prog.d3.h2': 'Concours Pitch en 3 min & Ateliers Carrière',
    'prog.d3.p2': 'Passages sur scène devant le jury de professionnels et sessions de coaching CV / entretiens.',
    'prog.d3.t3': '16h30 - 18h00',
    'prog.d3.h3': 'Cérémonie de Clôture & Remise des Prix aux Lauréats',
    'prog.d3.p3': 'Annonce des gagnants de toutes les compétitions et remise des trophées et attestations.',
    'prog.posterBtn': 'Ouvrir l\'Affiche en Plein Écran',

    'partners.kicker': 'Écosystème & Réseau',
    'partners.title': 'Entreprises, Institutions & Clubs Partenaires',
    'partners.sub': 'Un large réseau d\'acteurs économiques, institutionnels et associatifs mobilisés aux côtés de la Faculté des Sciences Semlalia.',

    'footer.desc': 'Forum officiel d\'insertion professionnelle, d\'entrepreneuriat et de suivi des lauréats de la Faculté des Sciences Semlalia — Université Cadi Ayyad Marrakech.',
    'footer.col1': 'Navigation',
    'footer.col2': 'Nos Compétitions',
    'footer.rights': '© 2026 Faculté des Sciences Semlalia Marrakech (UCA) — Service des Statistiques et du Suivi des Lauréats. Tous droits réservés.',

    'detail.backHome': 'Retour à l\'accueil',
    'detail.allComps': 'Compétitions',
    'detail.registerNow': 'S\'inscrire à la compétition',
    'detail.deadlineNote': 'Date limite d\'inscription / dépôt : Vendredi 20 Novembre 2026 à 12h00',
    'detail.otherComps': 'Découvrir les autres compétitions du Forum :'
  },

  ar: {
    'title.home': 'منتدى الطلبة والمهن (Students & Jobs) — النسخة الثالثة | كلية العلوم السملالية مراكش',
    'title.hackathon': 'هاكاثون الابتكار والتشغيل | منتدى Students & Jobs FSSM',
    'title.case': 'مسابقة Case Challenge «من المختبر إلى المقاولة» | منتدى Students & Jobs',
    'title.cv': 'مسابقة السيرة الذاتية المصورة (CV Vidéo) | منتدى Students & Jobs',
    'title.mission': 'مهمة التوظيف Mission Emploi (Escape Game) | منتدى Students & Jobs',
    'title.pitch': 'مسابقة العرض في 3 دقائق (Pitch en 3 min) | منتدى Students & Jobs',

    'nav.home': 'الرئيسية',
    'nav.pillars': 'فضاءات المنتدى',
    'nav.leaders': 'كلمات رسمية',
    'nav.competitions': 'المسابقات',
    'nav.program': 'البرنامج',
    'nav.partners': 'الشركاء',

    'hero.inst': 'جامعة القاضي عياض • كلية العلوم السملالية مراكش',
    'hero.edition': 'النسخة الثالثة • 25 و 26 نونبر 2026',
    'hero.hackBadge': 'الهاكاثون: 24 و 25 نونبر 2026',
    'hero.forumWord': 'المنتدى الرسمي للإدماج المهني ومتابعة الخريجين',
    'hero.sloganLabel': 'الشعار الرسمي للنسخة الثالثة',
    'hero.sloganFr': '« طلبة اليوم، مهنيو الغد »',
    'hero.meta1Label': 'هاكاثون الافتتاح',
    'hero.meta1Val': '24 و 25 نونبر 2026',
    'hero.meta2Label': 'أيام المنتدى الرسمي',
    'hero.meta2Val': '25 و 26 نونبر 2026',
    'hero.meta3Label': 'المكان',
    'hero.meta3Val': 'كلية العلوم السملالية مراكش (FSSM)',
    'hero.meta4Label': 'آخر أجل للتسجيل بالمسابقات',
    'hero.meta4Val': 'الجمعة 20 نونبر على الساعة 12:00',
    'hero.btnComp': 'اكتشف المسابقات',
    'hero.btnLeaders': 'كلمات المسؤولين',
    'hero.btnProg': 'برنامج المنتدى',
    'hero.stat1Num': '3',
    'hero.stat1Lbl': 'النسخة الرسمية',
    'hero.stat2Num': '5',
    'hero.stat2Lbl': 'مسابقات كبرى',
    'hero.stat3Num': '+20',
    'hero.stat3Lbl': 'مقاولة وشريك مؤسساتي',
    'hero.stat4Num': '3',
    'hero.stat4Lbl': 'أيام من الابتكار والفرص',
    'hero.tabLogo': 'الشعار الرسمي',
    'hero.tabPoster': 'ملصق 2026',
    'hero.captionLeft': 'الهوية البصرية — النسخة 3',
    'hero.captionRight': 'كلية العلوم السملالية',

    'pillars.kicker': 'محاور المنتدى',
    'pillars.title': 'الفضاءات الثلاثة الكبرى للمنتدى',
    'pillars.sub': 'فضاء متميز للتواصل المباشر بين طلبة وخريجي كلية العلوم السملالية والفاعلين الاقتصاديين والمقاولات حول ثلاثة أقطاب رئيسية.',
    'pillars.confTitle': 'المؤتمرات والندوات',
    'pillars.confDesc': 'لقاءات ونقاشات يؤطرها مهنيون وخبراء مدعوون حول مهن المستقبل ومتطلبات سوق الشغل وتجارب النجاح الملهمة.',
    'pillars.workTitle': 'الورشات التطبيقية',
    'pillars.workDesc': 'تكوينات عملية يؤطرها خبراء في الإدماج المهني: صياغة السيرة الذاتية، التحضير لمقابلات العمل، وتطوير المهارات الذاتية.',
    'pillars.standTitle': 'الأروقة والمعارض',
    'pillars.standDesc': 'معلومات مباشرة حول التشغيل والمهن والمسارات الجامعية، وفرص التدريب والتوظيف مع المقاولات والمؤسسات الشريكة.',

    'leaders.kicker': 'كلمات توجيهية ورؤية مؤسساتية',
    'leaders.title': 'كلمات رسمية ولجنة قيادة المنتدى',
    'leaders.sub': 'التزام راسخ من رئاسة جامعة القاضي عياض وعمادة كلية العلوم السملالية ومصلحة الإحصائيات ومتابعة الخريجين لدعم التشغيل والتميز المهني.',

    'leader1.badge': 'رئيس الجامعة',
    'leader1.name': 'الأستاذ بلعيد بوكادير',
    'leader1.role': 'رئيس جامعة القاضي عياض بمراكش (UCA)',
    'leader1.speech': '« إن قابلية تشغيل خريجينا وإدماجهم الفعلي في النسيج الاقتصادي والاجتماعي الوطني والدولي يمثلان أولوية استراتيجية لجامعة القاضي عياض. ومن خلال منتدى Students & Jobs، نعزز الجسور بين التميز الأكاديمي والبحث العلمي وعالم المقاولة والعمل، ليكون كل خريج فاعلاً أساسياً في التنمية والابتكار. »',
    'leader1.foot': 'رئاسة جامعة القاضي عياض',

    'leader2.badge': 'عميد الكلية',
    'leader2.name': 'الأستاذ الحسن المودن',
    'leader2.role': 'عميد كلية العلوم السملالية بمراكش (FSSM)',
    'leader2.speech': '« تُكوّن كلية العلوم السملالية بمراكش أجيالاً من الكفاءات العلمية المتميزة بالصرامة المنهجية والمهارة التطبيقية. وتتيح هذه النسخة الثالثة من منتدى Students & Jobs لطلبتنا في الإجازة والماستر والدكتوراه فرصة الانفتاح المباشر على المشغلين، وتثمين غنى الشعب العلمية ومواكبة خريجينا نحو مسارات مهنية ناجحة. »',
    'leader2.foot': 'عمادة كلية العلوم السملالية بمراكش',

    'leader3.badge': 'منسقة ومبادرة المنتدى — النسخة 3',
    'leader3.name': 'السيدة زينب شقيق البدر',
    'leader3.role': 'مسؤولة مصلحة التوقعات والإحصائيات ومتابعة إدماج الخريجين — منظمة المنتدى',
    'leader3.speech': '« بمبادرة وتنظيم من مصلحة الإحصائيات ومتابعة إدماج الخريجين، يحتفي منتدى Students & Jobs بنسخته الثالثة تحت شعار: "طلبة اليوم، مهنيو الغد". ومن خلال الهاكاثون، وتحدي المقاولة، ومسابقة السيرة الذاتية المصورة، ولعبة مهمة التوظيف، ومسابقة الإلقاء في 3 دقائق، نمنح كل طالب فرصة عملية لإبراز مواهبه وبناء مستقبله المهني. »',
    'leader3.foot': 'مصلحة الإحصائيات ومتابعة الخريجين (FSSM)',

    'comp.kicker': 'التحديات والمسابقات • آخر أجل للتسجيل: 20/11 على الساعة 12:00',
    'comp.title': 'المسابقات والتحديات الرسمية للمنتدى',
    'comp.sub': 'اكتشف تفاصيل وقواعد كل مسابقة عبر صفحتها الخاصة، وسجّل مشاركتك لخوض التحدي أمام لجان التحكيم والمهنيين.',
    'comp.btnDiscover': 'اكتشف التفاصيل وشارك',
    'comp.deadline': 'آخر أجل: الجمعة 20/11 على الساعة 12:00',

    'comp1.tag': '24 و 25 نونبر 2026 • عمل جماعي',
    'comp1.title': 'هاكاثون Students & Jobs',
    'comp1.slogan': '« 48 ساعة للابتكار وتطوير الحلول وإقناع المقاولات! »',
    'comp1.desc': 'يُنظم يومي 24 و25 نونبر في افتتاح المنتدى، حيث تتنافس الفرق الطلابية لتطوير مشاريع وحلول مبتكرة تستجيب لتحديات المقاولات وسوق الشغل.',
    'comp1.meta1': 'التاريخ: الثلاثاء 24 والأربعاء 25 نونبر 2026',
    'comp1.meta2': 'الصيغة: فرق متعددة التخصصات وتأطير ميداني',

    'comp2.tag': 'فرق من 3 طلبة • تُشكّل بعين المكان',
    'comp2.title': 'تحدي Case Challenge «من المختبر إلى المقاولة»',
    'comp2.slogan': '« فكرة، فريق، لجنة تحكيم: دافعوا عن مشروعكم! »',
    'comp2.desc': 'حوّل معارفك العلمية إلى مشروع مقاولاتي متكامل. يتعرف أعضاء الفريق (3 طلبة) على بعضهم في بداية المسابقة لتحضير المشروع في ساعتين وعرضه أمام لجنة متخصصة.',
    'comp2.meta1': 'التحضير: ساعتان | العرض: 7 دقائق + 3 دقائق أسئلة',
    'comp2.meta2': 'فرق من 3 طلبة من مختلف الشعب العلمية',

    'comp3.tag': 'مشاركة فردية • فيديو 3 دقائق كحد أقصى',
    'comp3.title': 'مسابقة السيرة الذاتية المصورة (CV Vidéo)',
    'comp3.slogan': '« سيرتك الذاتية تنبض بالحياة: أظهر من أنت في 3 دقائق. »',
    'comp3.desc': 'صمّم فيديو لا يتعدى 3 دقائق يعكس شخصيتك ومهاراتك ومشروعك المهني. ستُعرض جميع الفيديوهات المشاركة على شاشات كلية العلوم السملالية.',
    'comp3.meta1': 'اللغات: العربية، الفرنسية أو الإنجليزية (يُسمح بالذكاء الاصطناعي بشروط)',
    'comp3.meta2': 'آخر أجل للإيداع: الجمعة 20/11 على الساعة 12:00',

    'comp4.tag': 'لعبة الهروب Escape Game • 45 دقيقة',
    'comp4.title': 'مهمة التوظيف Mission Emploi',
    'comp4.slogan': '« 45 دقيقة، 5 ألغاز، صندوق واحد: هل أنتم مستعدون للمهمة؟ »',
    'comp4.desc': 'خض مراحل التوظيف في شكل لعبة تفاعلية: اكتشاف أخطاء سيرة ذاتية، فك شفرة عرض عمل، رصد الأجوبة الخاطئة في مقابلة، إعادة تركيب هيكل تنظيمي واختيار المرشح الأنسب.',
    'comp4.meta1': '5 ألغاز في الموارد البشرية | بدون هاتف | 3 تلميحات',
    'comp4.meta2': 'فرق من 3 طلبة لمدة 45 دقيقة',

    'comp5.tag': 'فردي • على الخشبة • 3 دقائق',
    'comp5.title': 'مسابقة العرض في 3 دقائق (Pitch en 3 min)',
    'comp5.slogan': '« 3 دقائق للإقناع. ماذا لو كنت أنت الفائز؟ »',
    'comp5.desc': 'اصعد على الخشبة بدون عرض تقديمي (PowerPoint) وقدّم في 3 دقائق مسارك ومهاراتك وطموحك المهني أمام لجنة تحكيم من الخبراء والمشغلين.',
    'comp5.meta1': 'الصيغة: فردي على الخشبة مع ملاحظات مختصرة فقط',
    'comp5.meta2': 'عداد زمني مرئي ولجنة تحكيم مهنية',

    'prog.kicker': 'البرنامج العام 2026',
    'prog.title': 'برنامج الأيام الثلاثة (24 و 25 و 26 نونبر)',
    'prog.sub': 'ثلاثة أيام حافلة بالابتكار، الندوات، الورشات التطبيقية، أروقة المقاولات والمسابقات الطلابية.',
    'prog.day1Title': 'الثلاثاء 24 نونبر 2026',
    'prog.day1Badge': 'اليوم 1 • انطلاق الهاكاثون',
    'prog.d1.t1': '09:00 - 10:30',
    'prog.d1.h1': 'استقبال الفرق المشاركة وإعطاء انطلاقة الهاكاثون',
    'prog.d1.p1': 'تقديم محاور التحدي وتوزيع الفضاءات وبداية العمل الجماعي.',
    'prog.d1.t2': '11:00 - 18:00',
    'prog.d1.h2': 'ورشات تطوير النماذج الأولية والمواكبة التقنية',
    'prog.d1.p2': 'تأطير الفرق من طرف أساتذة وخبراء المقاولات الشريكة.',

    'prog.day2Title': 'الأربعاء 25 نونبر 2026',
    'prog.day2Badge': 'اليوم 2 • الافتتاح الرسمي والندوات',
    'prog.d2.t1': '09:00 - 10:30',
    'prog.d2.h1': 'حفل الافتتاح الرسمي للنسخة الثالثة للمنتدى',
    'prog.d2.p1': 'كلمات السيد رئيس جامعة القاضي عياض، السيد عميد الكلية، والسيدة مسؤولة مصلحة متابعة الخريجين.',
    'prog.d2.t2': '10:30 - 13:00',
    'prog.d2.h2': 'الندوات الرسمية وافتتاح أروقة المقاولات والمؤسسات',
    'prog.d2.p2': 'نقاشات مع المهنيين وزيارة أروقة التشغيل والتوجيه المهني.',
    'prog.d2.t3': '14:30 - 18:00',
    'prog.d2.h3': 'نهائيات الهاكاثون، الورشات وعرض فيديوهات السيرة الذاتية',
    'prog.d2.p3': 'عروض مشاريع الهاكاثون أمام لجنة التحكيم وورشات الإدماج المهني.',

    'prog.day3Title': 'الخميس 26 نونبر 2026',
    'prog.day3Badge': 'اليوم 3 • المسابقات والحفل الختامي',
    'prog.d3.t1': '09:00 - 13:00',
    'prog.d3.h1': 'مسابقة Case Challenge ولعبة Mission Emploi',
    'prog.d3.p1': 'منافسات الفرق الطلابية في ريادة الأعمال وحل ألغاز التوظيف.',
    'prog.d3.t2': '14:00 - 16:30',
    'prog.d3.h2': 'مسابقة Pitch en 3 min والورشات التطبيقية',
    'prog.d3.p2': 'عروض الإقناع الفردية في 3 دقائق أمام لجنة التحكيم.',
    'prog.d3.t3': '16:30 - 18:00',
    'prog.d3.h3': 'الحفل الختامي وتوزيع الجوائز على الفائزين',
    'prog.d3.p3': 'الإعلان عن النتائج النهائية وتكريم الفائزين والشركاء.',
    'prog.posterBtn': 'عرض الملصق الرسمي بالحجم الكامل',

    'partners.kicker': 'شركاء النجاح',
    'partners.title': 'المقاولات والمؤسسات والأندية الشريكة',
    'partners.sub': 'شبكة واسعة من الشركاء الاقتصاديين والمؤسساتيين والأندية الطلابية بكلية العلوم السملالية.',

    'footer.desc': 'المنتدى الرسمي للإدماج المهني وريادة الأعمال ومتابعة الخريجين بكلية العلوم السملالية — جامعة القاضي عياض بمراكش.',
    'footer.col1': 'روابط سريعة',
    'footer.col2': 'المسابقات الرسمية',
    'footer.rights': '© 2026 كلية العلوم السملالية مراكش (جامعة القاضي عياض) — مصلحة الإحصائيات ومتابعة الخريجين. جميع الحقوق محفوظة.',

    'detail.backHome': 'العودة للرئيسية',
    'detail.allComps': 'المسابقات',
    'detail.registerNow': 'التسجيل في المسابقة',
    'detail.deadlineNote': 'آخر أجل للتسجيل أو الإيداع: الجمعة 20 نونبر 2026 على الساعة 12:00',
    'detail.otherComps': 'اكتشف المسابقات الأخرى في المنتدى:'
  },

  en: {
    'title.home': 'Students & Jobs Forum — 3rd Edition | FSSM Marrakech',
    'title.hackathon': 'Innovation & Employability Hackathon | Students & Jobs Forum FSSM',
    'title.case': 'Case Challenge "From Lab to Business" | Students & Jobs Forum FSSM',
    'title.cv': 'Video CV Contest | Students & Jobs Forum FSSM',
    'title.mission': 'Job Mission (Escape Game) | Students & Jobs Forum FSSM',
    'title.pitch': '3-Minute Pitch Contest | Students & Jobs Forum FSSM',

    'nav.home': 'Home',
    'nav.pillars': 'Areas',
    'nav.leaders': 'Official Words',
    'nav.competitions': 'Competitions',
    'nav.program': 'Schedule',
    'nav.partners': 'Partners',

    'hero.inst': 'Cadi Ayyad University • Faculty of Sciences Semlalia Marrakech',
    'hero.edition': '3rd Edition • November 25 & 26, 2026',
    'hero.hackBadge': 'Hackathon: November 24 & 25, 2026',
    'hero.forumWord': 'OFFICIAL CAREER & EMPLOYABILITY FORUM',
    'hero.sloganLabel': 'Official 3rd Edition Motto',
    'hero.sloganFr': '“Students today, professionals tomorrow”',
    'hero.meta1Label': 'Opening Hackathon',
    'hero.meta1Val': 'Nov 24 & 25, 2026',
    'hero.meta2Label': 'Students & Jobs Forum',
    'hero.meta2Val': 'Nov 25 & 26, 2026',
    'hero.meta3Label': 'Venue',
    'hero.meta3Val': 'Faculty of Sciences Semlalia (FSSM)',
    'hero.meta4Label': 'Registration Deadline',
    'hero.meta4Val': 'Friday, Nov 20 at 12:00 PM',
    'hero.btnComp': 'Explore Competitions',
    'hero.btnLeaders': 'Official Keynotes',
    'hero.btnProg': 'View Schedule',
    'hero.stat1Num': '3rd',
    'hero.stat1Lbl': 'Official Edition',
    'hero.stat2Num': '5',
    'hero.stat2Lbl': 'Major Competitions',
    'hero.stat3Num': '20+',
    'hero.stat3Lbl': 'Corporate Partners',
    'hero.stat4Num': '3',
    'hero.stat4Lbl': 'Days of Innovation',
    'hero.tabLogo': 'Official Logo',
    'hero.tabPoster': '2026 Poster',
    'hero.captionLeft': 'Official Branding — 3rd Edition',
    'hero.captionRight': 'FSSM Marrakech',

    'pillars.kicker': 'Core Pillars',
    'pillars.title': 'The 3 Flagship Areas of the Forum',
    'pillars.sub': 'A premier bridge connecting FSSM students and graduates with industry leaders, recruiters, and socio-economic partners across three dedicated spaces.',
    'pillars.confTitle': 'Conferences',
    'pillars.confDesc': 'Interactive panels and keynotes led by industry professionals and invited experts on future careers, job market trends, and inspiring alumni journeys.',
    'pillars.workTitle': 'Workshops',
    'pillars.workDesc': 'Hands-on training sessions led by career integration experts: crafting impactful resumes, mastering job interviews, personal branding, and soft skills.',
    'pillars.standTitle': 'Exhibition Booths',
    'pillars.standDesc': 'Direct information on jobs, careers, and academic pathways: network with partner companies, discover internship (PFE) offers, and explore career openings.',

    'leaders.kicker': 'Institutional Vision & Leadership',
    'leaders.title': 'Official Messages & Forum Leadership',
    'leaders.sub': 'The strong commitment of Cadi Ayyad University and the Faculty of Sciences Semlalia toward graduate tracking, employability, and career excellence.',

    'leader1.badge': 'University President',
    'leader1.name': 'Pr. Belaïd BOUGADIR',
    'leader1.role': 'President of Cadi Ayyad University (UCA)',
    'leader1.speech': '“The employability of our graduates and their seamless integration into the national and international socio-economic fabric are strategic priorities for Cadi Ayyad University. Through the Students & Jobs Forum, we strengthen the bridges between academic excellence, scientific research, and the workplace so that every graduate becomes a driving force for innovation and development.”',
    'leader1.foot': 'Presidency of Cadi Ayyad University',

    'leader2.badge': 'Dean of the Faculty',
    'leader2.name': 'Pr. El Hassan EL MOUDEN',
    'leader2.role': 'Dean of the Faculty of Sciences Semlalia (FSSM)',
    'leader2.speech': '“The Faculty of Sciences Semlalia in Marrakech trains generations of scientists renowned for their analytical rigor and technical expertise. This 3rd edition of the Students & Jobs Forum offers our Bachelor, Master, and PhD students direct immersion with recruiters, showcasing the diversity of our scientific programs and guiding our future graduates toward outstanding careers.”',
    'leader2.foot': 'Dean’s Office — FSSM Marrakech',

    'leader3.badge': 'Forum Coordinator — 3rd Edition',
    'leader3.name': 'Mrs. Zineb CHAQUIQ EL BADRE',
    'leader3.role': 'Head of Forecasting, Statistics & Graduate Tracking Service — Forum Initiator',
    'leader3.speech': '“Initiated and organized by the Forecasting, Statistics, and Graduate Tracking Service, the Students & Jobs Forum celebrates its 3rd edition under the banner of action and ambition: ‘Students today, professionals tomorrow’. Through our Hackathon, Case Challenge, Video CV, Job Mission Escape Game, and 3-Minute Pitch, every student actively shapes their professional future.”',
    'leader3.foot': 'Statistics & Graduate Tracking Service (FSSM)',

    'comp.kicker': 'Challenges & Talent • Apply by Nov 20 at 12:00 PM',
    'comp.title': 'Official Competitions & Challenges',
    'comp.sub': 'Explore each competition on its dedicated HTML page, prepare your application, and rise to the challenge in front of our expert and recruiter juries.',
    'comp.btnDiscover': 'Discover & Register',
    'comp.deadline': 'Deadline: Friday, Nov 20 at 12:00 PM',

    'comp1.tag': 'Nov 24 & 25, 2026 • Team Event',
    'comp1.title': 'Students & Jobs Hackathon',
    'comp1.slogan': '“48 hours to innovate, prototype, and pitch to industry leaders!”',
    'comp1.desc': 'Kicking off the forum on November 24 and 25, collaborate in multidisciplinary teams to build innovative solutions addressing real corporate and employability challenges.',
    'comp1.meta1': 'Dates: Tuesday, Nov 24 & Wednesday, Nov 25, 2026',
    'comp1.meta2': 'Format: Multidisciplinary teams & Expert mentoring',

    'comp2.tag': 'Teams of 3 Students • On-site',
    'comp2.title': 'Case Challenge “From Lab to Business”',
    'comp2.slogan': '“One idea, one team, one jury: defend your project!”',
    'comp2.desc': 'Turn your scientific knowledge into a structured entrepreneurial project. Meet your teammates at the start of the event, prepare in 2 hours, and defend your vision before an entrepreneurship jury.',
    'comp2.meta1': 'Prep: 2 hrs | Pitch: 7 min (max 5 slides) + 3 min Q&A',
    'comp2.meta2': 'Teams of 3 formed on-site across all departments',

    'comp3.tag': 'Individual • Max 3-min Video',
    'comp3.title': 'Video CV Contest',
    'comp3.slogan': '“Your resume comes alive: show who you are in 3 minutes.”',
    'comp3.desc': 'A traditional resume shows what you have done; a Video CV reveals your energy, confidence, and personality. All participating videos will be broadcast on FSSM campus screens.',
    'comp3.meta1': 'Languages: French, Arabic, or English (AI allowed with disclosure)',
    'comp3.meta2': 'Submission deadline: Friday, Nov 20 at 12:00 PM',

    'comp4.tag': 'Escape Game • 45 min • Teams of 3',
    'comp4.title': 'Job Mission (Escape Game)',
    'comp4.slogan': '“45 minutes, 5 puzzles, 1 vault: are you ready for the mission?”',
    'comp4.desc': 'Conquer the key stages of recruitment through an immersive game: spot resume mistakes, decode a job offer, avoid interview traps, rebuild an org chart, and select the right candidate.',
    'comp4.meta1': '5 HR Puzzles | No phones allowed | Max 3 hints',
    'comp4.meta2': 'Teams of 3 formed on-site at the start',

    'comp5.tag': 'Individual • On Stage • Max 3 min',
    'comp5.title': '3-Minute Pitch Contest',
    'comp5.slogan': '“3 minutes to convince. What if it were you?”',
    'comp5.desc': 'Step onto the stage with no slides and present your background, key skills, career project, and target internship or job in 3 minutes flat before a jury of recruiters.',
    'comp5.meta1': 'Format: Individual on stage, brief notes allowed',
    'comp5.meta2': 'Visible timer & Professional jury',

    'prog.kicker': 'Official 2026 Schedule',
    'prog.title': '3-Day Event Program (Nov 24, 25 & 26)',
    'prog.sub': 'Three days of technological innovation, recruiter networking, career workshops, and student competitions.',
    'prog.day1Title': 'Tuesday, November 24, 2026',
    'prog.day1Badge': 'Day 1 • Hackathon Kickoff',
    'prog.d1.t1': '09:00 - 10:30',
    'prog.d1.h1': 'Team Welcome & Official Hackathon Launch',
    'prog.d1.p1': 'Announcement of innovation challenges, workspace setup, and ideation kickoff.',
    'prog.d1.t2': '11:00 - 18:00',
    'prog.d1.h2': 'Prototyping Workshops & Mentor Coaching',
    'prog.d1.p2': 'Hands-on mentoring by FSSM professors and industry experts.',

    'prog.day2Title': 'Wednesday, November 25, 2026',
    'prog.day2Badge': 'Day 2 • Forum Opening & Keynotes',
    'prog.d2.t1': '09:00 - 10:30',
    'prog.d2.h1': 'Official Opening Ceremony — 3rd Edition',
    'prog.d2.p1': 'Addresses by the President of UCA, the Dean of FSSM, and the Head of Graduate Tracking.',
    'prog.d2.t2': '10:30 - 13:00',
    'prog.d2.h2': 'Plenary Conferences & Opening of Corporate Booths',
    'prog.d2.p2': 'Industry panels and official tour of recruitment, career, and academic booths.',
    'prog.d2.t3': '14:30 - 18:00',
    'prog.d2.h3': 'Hackathon Finals, Career Workshops & Video CV Screening',
    'prog.d2.p3': 'Final Hackathon pitches, practical workshops, and broadcasting of Video CVs across campus.',

    'prog.day3Title': 'Thursday, November 26, 2026',
    'prog.day3Badge': 'Day 3 • Competitions, Workshops & Closing',
    'prog.d3.t1': '09:00 - 13:00',
    'prog.d3.h1': 'Case Challenge “From Lab to Business” & Job Mission Escape Game',
    'prog.d3.p1': 'Team challenges (on-site team formation, solving the 5 HR puzzles, and pitching entrepreneurial projects).',
    'prog.d3.t2': '14:00 - 16:30',
    'prog.d3.h2': '3-Minute Pitch Contest & Career Coaching',
    'prog.d3.p2': 'On-stage 3-minute pitches before the jury and resume/interview coaching.',
    'prog.d3.t3': '16:30 - 18:00',
    'prog.d3.h3': 'Closing Ceremony & Awards Presentation',
    'prog.d3.p3': 'Announcement of winners across all competitions and presentation of awards.',
    'prog.posterBtn': 'Open Official Poster Fullscreen',

    'partners.kicker': 'Ecosystem & Network',
    'partners.title': 'Partner Companies, Institutions & Clubs',
    'partners.sub': 'A broad network of corporate, institutional, and student club partners mobilized alongside the Faculty of Sciences Semlalia.',

    'footer.desc': 'Official employability, entrepreneurship, and graduate tracking forum of the Faculty of Sciences Semlalia — Cadi Ayyad University Marrakech.',
    'footer.col1': 'Quick Links',
    'footer.col2': 'Competitions',
    'footer.rights': '© 2026 Faculty of Sciences Semlalia Marrakech (UCA) — Statistics & Graduate Tracking Service. All rights reserved.',

    'detail.backHome': 'Back to Home',
    'detail.allComps': 'Competitions',
    'detail.registerNow': 'Register for this Competition',
    'detail.deadlineNote': 'Registration / Submission Deadline: Friday, November 20, 2026 at 12:00 PM',
    'detail.otherComps': 'Explore the other Forum competitions:'
  }
};

function mergePageI18n() {
  if (!window.PAGE_I18N) return;
  LANGS.forEach(function (lang) {
    if (window.PAGE_I18N[lang]) {
      Object.keys(window.PAGE_I18N[lang]).forEach(function (k) {
        I18N[lang][k] = window.PAGE_I18N[lang][k];
      });
    }
  });
}

function getTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch (e) {
    return 'light';
  }
}

function getLang() {
  try {
    var l = localStorage.getItem(LANG_KEY) || 'fr';
    return LANGS.indexOf(l) !== -1 ? l : 'fr';
  } catch (e) {
    return 'fr';
  }
}

function t(key) {
  var lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.fr[key] || '';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  var icon = document.querySelector('[data-theme-icon]');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

function applyLang(lang) {
  mergePageI18n();
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var val = t(el.getAttribute('data-i18n'));
    if (val) {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var val = t(el.getAttribute('data-i18n-html'));
    if (val) {
      el.innerHTML = val;
    }
  });

  var titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey && t(titleKey)) {
    document.title = t(titleKey);
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    var active = btn.getAttribute('data-set-lang') === lang;
    btn.classList.toggle('is-active', active);
  });
}

function setTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {}
  applyTheme(theme);
}

function setLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {}
  applyLang(lang);
}

function initApp() {
  applyTheme(getTheme());
  applyLang(getLang());
  document.documentElement.classList.remove('i18n-pending');

  // Theme Toggle
  var themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  // Language Buttons
  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      setLang(btn.getAttribute('data-set-lang'));
    });
  });

  // Mobile Menu Drawer
  var menuBtn = document.querySelector('[data-nav-toggle]');
  var navbar = document.querySelector('[data-navbar]');
  var overlay = document.querySelector('[data-nav-overlay]');

  function closeMenu() {
    if (navbar) navbar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (menuBtn) {
      var ic = menuBtn.querySelector('i');
      if (ic) ic.className = 'fas fa-bars';
    }
  }

  if (menuBtn && navbar) {
    menuBtn.addEventListener('click', function () {
      var isOpen = navbar.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active', isOpen);
      var ic = menuBtn.querySelector('i');
      if (ic) ic.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  document.querySelectorAll('[data-nav-link]').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Hero Visual Showcase Tabs (Logo vs Poster)
  var tabBtns = document.querySelectorAll('[data-showcase-tab]');
  var tabPanels = document.querySelectorAll('[data-showcase-panel]');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-showcase-tab');
      tabBtns.forEach(function (b) {
        b.classList.toggle('active', b === btn);
      });
      tabPanels.forEach(function (p) {
        p.classList.toggle('active', p.getAttribute('data-showcase-panel') === target);
      });
    });
  });

  // Go Top Button & Scroll Spy
  var goTopBtn = document.querySelector('[data-go-top]');
  window.addEventListener('scroll', function () {
    if (goTopBtn) {
      goTopBtn.classList.toggle('active', window.scrollY > 320);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

