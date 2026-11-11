/* ==========================================================================
   FORUM STUDENTS & JOBS — 3e ÉDITION (FSSM - UCA)
   PORTAIL TAPLINK DES 4 COMPÉTITIONS — LOGIQUE I18N (FR/AR/EN), THÈME & RÈGLES
   ========================================================================== */

(function () {
  const STORAGE_THEME = 'fsj_taplink_theme';
  const STORAGE_LANG = 'fsj_taplink_lang';
  const STORAGE_EXCLUSIVE_CHOICE = 'fsj_exclusive_comp_choice';
  const STORAGE_CV_VIDEO = 'fsj_cv_video_registered';

  const COMP_NAMES = {
    'case-challenge': {
      fr: "Case Challenge « Du labo à l'entreprise »",
      ar: "تحدي الحالات « من المختبر إلى المقاولة »",
      en: "Case Challenge 'From Lab to Business'"
    },
    'mission-emploi': {
      fr: "Mission Emploi (Escape Game)",
      ar: "مهمة التوظيف (Mission Emploi - Escape Game)",
      en: "Job Mission (Recruitment Escape Game)"
    },
    'pitch-3min': {
      fr: "Concours Pitch en 3 minutes",
      ar: "مسابقة العرض التقديمي في 3 دقائق (Pitch)",
      en: "3-Minute Pitch Competition"
    }
  };

  /* 1. THEME MANAGEMENT (Dark / Light) */
  function getSavedTheme() {
    return localStorage.getItem(STORAGE_THEME) || 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem(STORAGE_THEME, theme);

    const icon = document.querySelector('#themeToggle i');
    if (icon) {
      icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }

  /* 2. LANGUAGE MANAGEMENT (FR / AR / EN) */
  function getSavedLang() {
    return localStorage.getItem(STORAGE_LANG) || 'fr';
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem(STORAGE_LANG, lang);

    // Update active language buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Translate elements with data-fr / data-ar / data-en
    document.querySelectorAll('[data-fr]').forEach((el) => {
      const val = el.getAttribute(`data-${lang}`) || el.getAttribute('data-fr');
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', val);
        } else {
          el.innerHTML = val;
        }
      }
    });

    updateChoiceBanner(lang);
  }

  /* 3. EXCLUSIVE RULE NOTIFICATION & FORM VALIDATION
     - CV Vidéo: open to everyone (cumulable)
     - Case Challenge, Mission Emploi, Pitch 3 min: ONLY 1 CHOICE ALLOWED! */
  function updateChoiceBanner(lang) {
    const currentLang = lang || getSavedLang();
    const savedChoice = localStorage.getItem(STORAGE_EXCLUSIVE_CHOICE);
    const alertBox = document.getElementById('activeChoiceAlert');
    const alertText = document.getElementById('activeChoiceText');

    if (!alertBox || !alertText) return;

    if (savedChoice && COMP_NAMES[savedChoice]) {
      const compLabel = COMP_NAMES[savedChoice][currentLang] || COMP_NAMES[savedChoice].fr;
      const messages = {
        fr: `<i class="fa-solid fa-circle-check" style="color:var(--gold)"></i> Vous êtes déjà inscrit(e) à : <strong>${compLabel}</strong> (Votre choix unique parmi les 3 compétitions exclusives). Le concours <strong>CV Vidéo</strong> reste ouvert !`,
        ar: `<i class="fa-solid fa-circle-check" style="color:var(--gold)"></i> أنت مسجل(ة) حالياً في: <strong>${compLabel}</strong> (خيارك الوحيد من بين المسابقات الثلاث الحصرية). مسابقة <strong>السيرة الذاتية بالفيديو</strong> تظل مفتوحة لك!`,
        en: `<i class="fa-solid fa-circle-check" style="color:var(--gold)"></i> You are already registered for: <strong>${compLabel}</strong> (Your single choice among the 3 exclusive competitions). The <strong>Video CV</strong> contest remains open to you!`
      };
      alertText.innerHTML = messages[currentLang] || messages.fr;
      alertBox.classList.add('visible');
    } else {
      alertBox.classList.remove('visible');
    }
  }

  function initCompetitionForm() {
    const form = document.getElementById('compRegistrationForm');
    if (!form) return;

    const compId = form.getAttribute('data-comp-id'); // 'cv-video' | 'case-challenge' | 'mission-emploi' | 'pitch-3min'
    const isExclusive = form.getAttribute('data-exclusive') === 'true';
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const lang = getSavedLang();
      const existingChoice = localStorage.getItem(STORAGE_EXCLUSIVE_CHOICE);

      // Check exclusivity rule for the 3 mutually exclusive competitions
      if (isExclusive && existingChoice && existingChoice !== compId) {
        const chosenName = COMP_NAMES[existingChoice]
          ? COMP_NAMES[existingChoice][lang]
          : existingChoice;

        const errMsgs = {
          fr: `<i class="fa-solid fa-triangle-exclamation"></i> <strong>Inscription bloquée par le règlement :</strong> Vous êtes déjà inscrit(e) à <em>${chosenName}</em>. Rappel : vous ne pouvez participer qu'à <strong>UNE SEULE</strong> compétition parmi (Case Challenge, Mission Emploi, Pitch en 3 min). Vous pouvez toutefois participer librement au concours <strong>CV Vidéo</strong> !`,
          ar: `<i class="fa-solid fa-triangle-exclamation"></i> <strong>تنبيه قانون المسابقة:</strong> لقد قمت بالتسجيل مسبقاً في <em>${chosenName}</em>. تذكير: يحق لك المشاركة في <strong>مسابقة واحدة فقط</strong> من بين (Case Challenge أو Mission Emploi أو Pitch en 3 min). لكن يمكنك المشاركة بحرية في مسابقة <strong>CV Vidéo</strong>!`,
          en: `<i class="fa-solid fa-triangle-exclamation"></i> <strong>Registration blocked by rule:</strong> You are already registered for <em>${chosenName}</em>. Reminder: you can only participate in <strong>ONE</strong> competition among (Case Challenge, Mission Emploi, 3-Min Pitch). However, you can still freely enter the <strong>Video CV</strong> contest!`
        };

        feedback.className = 'form-feedback error';
        feedback.innerHTML = errMsgs[lang] || errMsgs.fr;
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
      }

      // Save choice
      if (isExclusive) {
        localStorage.setItem(STORAGE_EXCLUSIVE_CHOICE, compId);
      } else {
        localStorage.setItem(STORAGE_CV_VIDEO, 'true');
      }

      const fullName = (form.querySelector('[name="fullName"]') || {}).value || '';
      const okMsgs = {
        fr: `<i class="fa-solid fa-circle-check"></i> <strong>Candidature enregistrée avec succès, ${fullName} !</strong><br>Date limite officielle : <strong>Vendredi 20 Novembre à 12h00</strong>. ${
          isExclusive
            ? 'Rappel : cette inscription constitue votre <strong>choix unique</strong> parmi les 3 compétitions sur place (Case Challenge, Mission Emploi, Pitch en 3 min). Vous pouvez toujours participer au <strong>CV Vidéo</strong> !'
            : 'Votre participation au <strong>CV Vidéo</strong> est bien notée. Vous pouvez également choisir <strong>1 compétition</strong> parmi les 3 autres (Case Challenge, Mission Emploi ou Pitch en 3 min) !'
        }`,
        ar: `<i class="fa-solid fa-circle-check"></i> <strong>تم تسجيل طلب مشاركتك بنجاح يا ${fullName}!</strong><br>آخر أجل للتسجيل: <strong>الجمعة 20 نونبر على الساعة 12:00 زوالاً</strong>. ${
          isExclusive
            ? 'تذكير: هذا التسجيل يمثل <strong>خيارك الوحيد</strong> من بين المسابقات الثلاث الحضورية. لا يزال بإمكانك المشاركة في مسابقة <strong>CV Vidéo</strong>!'
            : 'تم تسجيل مشاركتك في <strong>CV Vidéo</strong> بنجاح. يمكنك أيضاً اختيار <strong>مسابقة واحدة</strong> من بين المسابقات الثلاث الأخرى!'
        }`,
        en: `<i class="fa-solid fa-circle-check"></i> <strong>Registration successfully recorded, ${fullName}!</strong><br>Official deadline: <strong>Friday, November 20 at 12:00 PM</strong>. ${
          isExclusive
            ? 'Reminder: this registration counts as your <strong>single choice</strong> among the 3 exclusive competitions. You may still participate in the <strong>Video CV</strong> contest!'
            : 'Your <strong>Video CV</strong> entry is recorded. You can also join <strong>1 competition</strong> among the other 3 (Case Challenge, Job Mission, or 3-Min Pitch)!'
        }`
      };

      feedback.className = 'form-feedback success';
      feedback.innerHTML = okMsgs[lang] || okMsgs.fr;
      updateChoiceBanner(lang);
      form.reset();
    });
  }

  /* 4. INITIALIZE ON DOM READY */
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getSavedTheme());
    applyLang(getSavedLang());

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(next);
      });
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });

    const resetBtn = document.getElementById('resetChoiceBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        localStorage.removeItem(STORAGE_EXCLUSIVE_CHOICE);
        updateChoiceBanner(getSavedLang());
      });
    }

    initCompetitionForm();
  });
})();

