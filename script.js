// =========================================================================
    // GROUNDED DATA STORE (100% Verified from CV & Official Certificates Pages 1-8)
    // =========================================================================
    const EXPERIENCES = [
      {
        id: 'garango',
        category: 'district',
        role: 'Pharmacienne du District Sanitaire / Chef de service de la pharmacie, des laboratoires et de la médecine traditionnelle',
        organization: 'Ministère de la Santé du Burkina Faso – District Sanitaire de Garango',
        period: 'Mai 2024 – à ce jour (Prise de service le 14 mai 2024)',
        badge: 'Poste Actuel • Matricule 399 053 K',
        certificateIndex: 2,
        missions: [
          {
            title: 'Approvisionnement stratégique & programmes',
            detail: "Assurer l'approvisionnement et la gestion des intrants du paludisme, du VIH, de la nutrition, de la tuberculose, du COVID et de la santé de la reproduction."
          },
          {
            title: 'Gestion globale des MEG',
            detail: "Assurer l'approvisionnement en Médicaments Essentiels Génériques (MEG) et consommables médicaux des formations sanitaires du district (CSPS, CM et CMA) dans le respect des Bonnes Pratiques de Distribution (BPD)."
          },
          {
            title: 'Distribution au dernier kilomètre',
            detail: "Implémenter avec succès la distribution au dernier kilomètre dans le district sanitaire de Garango (planification des tournées, contrôle des stocks, suivi de la chaîne du froid et réduction des périmés)."
          },
          {
            title: 'Dispensation individuelle nominative (DIN)',
            detail: "Implémenter la dispensation individuelle nominative (DIN) au sein du CMA de Garango afin de sécuriser le circuit du médicament et optimiser la traçabilité."
          },
          {
            title: 'Partenariats & campagnes de masse',
            detail: "Assurer la collaboration opérationnelle et logistique avec les partenaires techniques et humanitaires (PAM, The Hunger Project, CRS) pour la continuité des intrants, ainsi que la supervision des intrants lors des campagnes (CPS, JVA+, MILDA, SNSR+) et la coordination des analyses biomédicales (CM/CMA)."
          }
        ],
        tags: ['BPD', 'Dernier Kilomètre', 'MEG', 'Chaîne du Froid', 'DIN CMA Garango', 'PAM / CRS / Hunger Project', 'CPS / MILDA / JVA+']
      },
      {
        id: 'dpbf',
        category: 'grossiste',
        role: "Pharmacienne Stagiaire – Opérations et Chaîne d'Approvisionnement",
        organization: 'DPBF (Distribution Pharmaceutique du Burkina Faso) – Grossiste-répartiteur',
        period: 'Octobre 2023 – Janvier 2024',
        badge: 'Grossisterie-Répartition',
        certificateIndex: null,
        missions: [
          {
            title: 'Approvisionnement et achats',
            detail: 'Gestion des commandes auprès des laboratoires et fournisseurs pharmaceutiques, suivi des délais de livraison et contrôle de conformité à la réception.'
          },
          {
            title: 'Gestion des stocks et entreposage',
            detail: 'Application des Bonnes Pratiques de Distribution (BPD), gestion des emplacements, suivi des péremptions (FEFO) et maintien de la chaîne du froid.'
          },
          {
            title: 'Distribution et relation client',
            detail: 'Traitement des commandes des officines, préparation, acheminement et suivi de la satisfaction des pharmacies partenaires.'
          }
        ],
        tags: ['Grossiste-Répartiteur', 'Achats Laboratoires', 'FEFO', 'BPD Entreposage', 'Chaîne du Froid', 'Distribution Officines']
      },
      {
        id: 'ghsc',
        category: 'usaid',
        role: "Superviseur de soutien – Logistique et Chaîne d'Approvisionnement",
        organization: 'GHSC/TA-FTO (USAID Global Health Supply Chain Francophone Task Order)',
        period: 'Mai 2022 – Juin 2023 (et Formatrice en Mars 2024)',
        badge: 'Programme International USAID',
        certificateIndex: 5,
        missions: [
          {
            title: 'Audit et gestion des inventaires',
            detail: 'Évaluation et audit de la gestion logistique et des inventaires des produits de la Planification Familiale au niveau des dépôts et formations sanitaires.'
          },
          {
            title: 'Qualité et conformité BPD',
            detail: "Correction des anomalies de stock et insuffisances logistiques constatées, et promotion des Bonnes Pratiques de Distribution et d'entreposage."
          },
          {
            title: 'Encadrement & amélioration continue',
            detail: "Identification des besoins de formation des équipes d'exploitation, encadrement technique et élaboration de plans d'action correctifs."
          }
        ],
        tags: ['USAID GHSC/TA-FTO', 'Audit Inventaires', 'Planification Familiale', 'Conformité BPD', 'Plans Correctifs', 'Supervision de Soutien']
      }
    ];

    const CERTIFICATES = [
      {
        id: 0,
        category: 'academique',
        title: "Diplôme d'État de Docteur en Pharmacie",
        issuer: "Université Joseph KI-ZERBO — Ministère de l'Enseignement Supérieur, de la Recherche et de l'Innovation",
        ref: 'Soutenu le 16 Déc. 2022 • Délivré le 11 Avr. 2024 • N° 7232',
        image: 'assets/cert_diplome_pharmacie.jpg',
        desc: "Diplôme d'État de Docteur en Pharmacie conféré à BATIONO Kégnama Valérie (née le 29 mai 1994 à Ouagadougou), signé par le Président de l'Université Joseph KI-ZERBO, Pr Jean François Silas KOBIANE."
      },
      {
        id: 1,
        category: 'administratif',
        title: "Attestation d'Inscription au Tableau de l'Ordre (2026)",
        issuer: 'Ordre National des Pharmaciens du Burkina Faso — Conseil Régional de l’Est',
        ref: 'N° R3-1216C/ONPBF • Fait à Fada le 16/01/2026',
        image: 'assets/cert_ordre_pharmaciens.jpg',
        desc: "Certifie que Dr BATIONO Kégnama Valérie, Pharmacien, est régulièrement inscrite à la Section C de l'Ordre National des Pharmaciens du Burkina Faso sous le numéro R3-1216C/ONPBF au compte de l'année 2026. Signé par Dr W Carine KINTEGA DENTOUNDA."
      },
      {
        id: 2,
        category: 'administratif',
        title: 'Attestation de Travail — District Sanitaire de Garango',
        issuer: 'Ministère de la Santé — Région du Nakambé — District Sanitaire de Garango',
        ref: 'N° 2026-280/MS/RNKB/DRS/DS-GRG • 1er Avril 2026',
        image: 'assets/cert_attestation_travail.jpg',
        desc: "Atteste que Madame BATIONO Kégnama Valérie, Pharmacien Généraliste, Matricule 399 053 K, est en service à la Direction du District Sanitaire de Garango depuis le 14 mai 2024 jusqu'à nos jours. Signé par le Médecin Chef du District, Dr Germaine KANZIE."
      },
      {
        id: 3,
        category: 'academique',
        title: 'Avis de Soutenance de Mémoire de Master II',
        issuer: 'Université Joseph KI-ZERBO — UFR Sciences de la Santé (UFR-SDS)',
        ref: 'Soutenance le 03/11/2026 (14h00–16h00, Salle R1) • Signé le 26/10/2026',
        image: 'assets/cert_avis_soutenance_master.jpg',
        desc: "Avis officiel de soutenance pour le Diplôme de Master de Spécialités en Santé et Sciences du Médicament (Option : Gestion des approvisionnements pharmaceutiques et logistique de santé) sur le thème : « Analyse du processus d'approvisionnement en produits de santé issus du secteur public, cas du CHU-YO : états des lieux, évaluation et perspectives ». Signé par Pr Ismaël DIALLO."
      },
      {
        id: 4,
        category: 'academique',
        title: 'Autorisation de Dépôt de Mémoire de Master II',
        issuer: 'Master de Spécialités en Santé et Sciences du Médicament (MSSM) — UJKZ',
        ref: 'Ouagadougou, le 26 Octobre 2026 • Pr Rasmané SEMDE',
        image: 'assets/cert_autorisation_depot_master.jpg',
        desc: "Autorisation officielle délivrée par le Professeur Rasmané SEMDE, coordonnateur du Master de spécialités en santé et sciences du médicament, pour la soutenance du mémoire de Master II du Dr BATIONO Valérie Kégnama devant le jury présidé par Dr SOMBIE B. Charles (MCA)."
      },
      {
        id: 5,
        category: 'administratif',
        title: 'Attestation Formateur — Supervision de Soutien (USAID / COCOFA)',
        issuer: 'COCOFA en partenariat avec USAID / GHSC TA Francophone TO',
        ref: 'Ouagadougou, du 18 au 21 Mars 2024',
        image: 'assets/cert_attestation_formateur.jpg',
        desc: "Atteste que Docteur BATIONO Kégnama Valérie est intervenue comme formatrice pour la formation sur la Stratégie de Supervision de Soutien à Ouagadougou du 18 au 21 mars 2024. Co-signé par DIAPA Edouard (COCOFA) et Dr GNOULA Charlemagne (Directeur Régional Francophone TO)."
      }
    ];

    const QUICK_COMMANDS = [
      { label: 'Aller aux Expériences Professionnelles', action: () => scrollToSection('experiences') },
      { label: 'Ouvrir le Simulateur Logistique SIGL / FEFO', action: () => scrollToSection('simulateur') },
      { label: "Voir le Diplôme d'État de Docteur en Pharmacie (N° 7232)", action: () => openCertificateModal(0) },
      { label: "Voir l'Attestation d'Inscription à l'Ordre 2026 (R3-1216C/ONPBF)", action: () => openCertificateModal(1) },
      { label: "Voir l'Attestation de Travail — District Sanitaire de Garango", action: () => openCertificateModal(2) },
      { label: "Voir l'Avis de Soutenance du Master II (CHU-YO)", action: () => openCertificateModal(3) },
      { label: "Voir l'Attestation de Formatrice USAID / GHSC-TA-FTO", action: () => openCertificateModal(5) },
      { label: 'Copier le numéro de téléphone (+226 70 42 06 76)', action: () => copyText('+226 70 42 06 76', 'Téléphone copié') },
      { label: "Copier l'adresse e-mail (valeriebationo@gmail.com)", action: () => copyText('valeriebationo@gmail.com', 'E-mail copié') },
      { label: 'Télécharger la fiche contact vCard (.vcf)', action: () => downloadVCard() },
      { label: 'Basculer le mode Sombre / Clair', action: () => toggleTheme() }
    ];

    let activeExpFilter = 'all';
    let activeCertFilter = 'all';
    let currentCertModalIndex = 0;

    // =========================================================================
    // RENDER EXPERIENCES
    // =========================================================================
    function filterExperience(cat) {
      activeExpFilter = cat;
      ['all', 'district', 'grossiste', 'usaid'].forEach((key) => {
        const btn = document.getElementById('exp-tab-' + key);
        if (!btn) return;
        if (key === cat) {
          btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-700 text-white shadow-md shadow-blue-700/20 transition';
        } else {
          btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-semibold glass-card text-slate-700 dark:text-slate-300';
        }
      });
      renderExperiences();
    }

    function resetExperienceSearch() {
      const input = document.getElementById('exp-search-input');
      if (input) input.value = '';
      filterExperience('all');
    }

    function renderExperiences() {
      const container = document.getElementById('experience-list');
      const queryInput = document.getElementById('exp-search-input');
      const query = queryInput ? queryInput.value.trim().toLowerCase() : '';

      const filtered = EXPERIENCES.filter((exp) => {
        const matchesCat = activeExpFilter === 'all' || exp.category === activeExpFilter;
        if (!matchesCat) return false;
        if (!query) return true;
        const haystack = (
          exp.role + ' ' +
          exp.organization + ' ' +
          exp.period + ' ' +
          exp.tags.join(' ') + ' ' +
          exp.missions.map((m) => m.title + ' ' + m.detail).join(' ')
        ).toLowerCase();
        return haystack.includes(query);
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="glass-card rounded-2xl p-8 text-center space-y-3">
            <p class="text-sm text-slate-600 dark:text-slate-300">Aucune mission ne correspond à votre filtre actuel.</p>
            <button type="button" onclick="resetExperienceSearch()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-700 text-white shadow-md shadow-blue-700/20">
              Afficher toutes les expériences
            </button>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map((exp) => `
        <article class="glass-card is-visible rounded-3xl p-6 sm:p-8 space-y-5">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-200/70 dark:border-slate-800 pb-4">
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-blue-600/10 text-blue-700 dark:text-blue-200">
                  ${exp.period}
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  ${exp.badge}
                </span>
              </div>
              <h3 class="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white pt-1">
                ${exp.role}
              </h3>
              <p class="text-sm font-semibold text-blue-700 dark:text-orange-400">
                ${exp.organization}
              </p>
            </div>
            ${exp.certificateIndex !== null ? `
              <button type="button" onclick="openCertificateModal(${exp.certificateIndex})" class="self-start lg:self-center inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600/10 hover:bg-orange-500 hover:text-white text-blue-700 dark:text-blue-200 border border-blue-600/30 transition shrink-0">
                <span>Voir l'attestation officielle</span>
                <span>→</span>
              </button>
            ` : ''}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${exp.missions.map((m) => `
              <div class="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/75 border border-slate-200/70 dark:border-slate-800/90 space-y-1">
                <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                  <span>${m.title}</span>
                </p>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-3.5">
                  ${m.detail}
                </p>
              </div>
            `).join('')}
          </div>

          <div class="flex flex-wrap gap-1.5 pt-1">
            ${exp.tags.map((t) => `
              <span class="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-200/70 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-800">
                #${t}
              </span>
            `).join('')}
          </div>
        </article>
      `).join('');
    }

    // =========================================================================
    // SUPPLY CHAIN & FEFO SIMULATOR
    // =========================================================================
    function loadSimulatorPreset(type) {
      const prog = document.getElementById('sim-program');
      const cmm = document.getElementById('sim-cmm');
      const sdu = document.getElementById('sim-sdu');
      const maxM = document.getElementById('sim-max-months');
      const fefo = document.getElementById('sim-fefo-risk');

      if (type === 'paludisme') {
        prog.value = 'Intrants Paludisme & Campagne CPS/MILDA';
        cmm.value = 6500;
        sdu.value = 11000;
        maxM.value = 4;
        fefo.value = 4;
      } else if (type === 'meg') {
        prog.value = 'Médicaments Essentiels Génériques (MEG - CSPS/CM/CMA)';
        cmm.value = 8000;
        sdu.value = 22000;
        maxM.value = 3.5;
        fefo.value = 8;
      } else if (type === 'nutrition') {
        prog.value = 'Intrants Nutrition & Santé de la Reproduction (PAM/CRS)';
        cmm.value = 3500;
        sdu.value = 4800;
        maxM.value = 4.5;
        fefo.value = 11;
      }
      updateSimulator();
      showToast('Scénario logistique chargé');
    }

    function updateSimulator() {
      const cmm = Number(document.getElementById('sim-cmm').value) || 500;
      const sdu = Number(document.getElementById('sim-sdu').value) || 0;
      const maxMonths = Number(document.getElementById('sim-max-months').value) || 4;
      const fefoPct = Number(document.getElementById('sim-fefo-risk').value) || 0;

      document.getElementById('sim-cmm-val').textContent = cmm.toLocaleString('fr-FR') + ' unités';
      document.getElementById('sim-sdu-val').textContent = sdu.toLocaleString('fr-FR') + ' unités';
      document.getElementById('sim-max-months-val').textContent = maxMonths + ' mois';
      document.getElementById('sim-fefo-risk-val').textContent = fefoPct + '%';

      const msd = sdu / cmm;
      const maxStockTarget = Math.round(cmm * maxMonths);
      const qac = Math.max(0, maxStockTarget - sdu);
      const fefoUnits = Math.round((sdu * fefoPct) / 100);
      const coveragePct = maxStockTarget > 0 ? Math.min(100, Math.round((sdu / maxStockTarget) * 100)) : 0;

      document.getElementById('sim-msd-out').textContent = msd.toFixed(2) + ' mois';
      document.getElementById('sim-qac-out').textContent = qac.toLocaleString('fr-FR') + ' u.';
      document.getElementById('sim-fefo-out').textContent = fefoUnits.toLocaleString('fr-FR') + ' u.';
      document.getElementById('sim-cov-out').textContent = coveragePct + '%';
      document.getElementById('sim-bar').style.width = coveragePct + '%';

      const badge = document.getElementById('sim-msd-badge');
      const statusLabel = document.getElementById('sim-status-label');
      const rec = document.getElementById('sim-recommendation');

      if (msd < 1.5) {
        badge.textContent = 'Alerte : Stock sous le seuil de sécurité';
        badge.className = 'text-[11px] text-rose-500 mt-1 font-semibold';
        statusLabel.textContent = 'État du stock : Commande d’urgence / Réapprovisionnement prioritaire';
        rec.textContent = `Déclencher immédiatement une commande de ${qac.toLocaleString('fr-FR')} unités et organiser une tournée de distribution au dernier kilomètre pour éviter toute rupture dans les CSPS, CM et CMA. Appliquer la règle FEFO sur les ${fefoUnits.toLocaleString('fr-FR')} unités à échéance proche.`;
      } else if (msd <= maxMonths) {
        badge.textContent = 'Stock opérationnel conforme BPD';
        badge.className = 'text-[11px] text-orange-500 mt-1 font-semibold';
        statusLabel.textContent = 'État du stock : Couverture nominale équilibrée';
        rec.textContent = `Valider une commande régulière de ${qac.toLocaleString('fr-FR')} unités pour atteindre le stock maximum cible (${maxMonths} mois) et prioriser la sortie FEFO des ${fefoUnits.toLocaleString('fr-FR')} unités identifiées lors de l'inventaire.`;
      } else {
        badge.textContent = 'Surstock détecté : Optimisation FEFO requise';
        badge.className = 'text-[11px] text-amber-500 mt-1 font-semibold';
        statusLabel.textContent = 'État du stock : Excédent par rapport au seuil maximal';
        rec.textContent = `Suspendre la commande (${qac} unité requise) et redéployer prioritairement les ${fefoUnits.toLocaleString('fr-FR')} unités proches de péremption vers les formations sanitaires à forte consommation pour garantir zéro périmé.`;
      }
    }

    // =========================================================================
    // EDUCATION TABS
    // =========================================================================
    function switchEduTab(tab) {
      const dipPanel = document.getElementById('edu-panel-diplomes');
      const certPanel = document.getElementById('edu-panel-certifications');
      const dipBtn = document.getElementById('edu-tab-diplomes');
      const certBtn = document.getElementById('edu-tab-certifications');

      if (tab === 'diplomes') {
        dipPanel.classList.remove('hidden');
        certPanel.classList.add('hidden');
        certPanel.classList.remove('grid');
        dipBtn.className = 'px-4 py-2 rounded-xl text-xs font-semibold bg-blue-700 text-white shadow-md shadow-blue-700/20 transition';
        certBtn.className = 'px-4 py-2 rounded-xl text-xs font-semibold glass-card text-slate-700 dark:text-slate-300';
      } else {
        dipPanel.classList.add('hidden');
        certPanel.classList.remove('hidden');
        certPanel.classList.add('grid');
        certBtn.className = 'px-4 py-2 rounded-xl text-xs font-semibold bg-blue-700 text-white shadow-md shadow-blue-700/20 transition';
        dipBtn.className = 'px-4 py-2 rounded-xl text-xs font-semibold glass-card text-slate-700 dark:text-slate-300';
      }
    }

    // =========================================================================
    // CERTIFICATES GALLERY & MODAL
    // =========================================================================
    function filterCertificates(cat) {
      activeCertFilter = cat;
      ['all', 'academique', 'administratif'].forEach((key) => {
        const btn = document.getElementById('cert-tab-' + key);
        if (!btn) return;
        if (key === cat) {
          btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-700 text-white shadow-md shadow-blue-700/20 transition';
        } else {
          btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-semibold glass-card text-slate-700 dark:text-slate-300';
        }
      });
      renderCertificates();
    }

    function renderCertificates() {
      const grid = document.getElementById('certificates-grid');
      const items = CERTIFICATES.filter((c) => activeCertFilter === 'all' || c.category === activeCertFilter);

      grid.innerHTML = items.map((c) => `
        <div class="glass-card is-visible rounded-3xl overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="relative h-52 bg-slate-900 overflow-hidden border-b border-slate-200/60 dark:border-slate-800">
              <img src="${c.image}" alt="${c.title}" class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 opacity-95" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-950/80 text-orange-300 border border-blue-600/30">
                ${c.ref}
              </span>
            </div>
            <div class="p-5 space-y-2">
              <h3 class="font-display font-bold text-base text-slate-900 dark:text-white leading-snug">
                ${c.title}
              </h3>
              <p class="text-xs font-medium text-blue-700 dark:text-orange-400">
                ${c.issuer}
              </p>
              <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                ${c.desc}
              </p>
            </div>
          </div>
          <div class="px-5 pb-5 pt-2">
            <button type="button" onclick="openCertificateModal(${c.id})" class="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600/10 hover:bg-orange-500 hover:text-white text-blue-700 dark:text-blue-200 border border-blue-600/30 transition flex items-center justify-center gap-2">
              <span>Inspecter la pièce officielle</span>
              <span>🔍</span>
            </button>
          </div>
        </div>
      `).join('');
    }

    function openCertificateModal(index) {
      currentCertModalIndex = index;
      const cert = CERTIFICATES[index];
      if (!cert) return;
      document.getElementById('modal-cert-title').textContent = cert.title;
      document.getElementById('modal-cert-issuer').textContent = cert.issuer;
      document.getElementById('modal-cert-ref').textContent = cert.ref;
      document.getElementById('modal-cert-desc').textContent = cert.desc;
      document.getElementById('modal-cert-img').src = cert.image;

      const modal = document.getElementById('cert-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeCertificateModal() {
      const modal = document.getElementById('cert-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function prevCertificate() {
      const nextIdx = (currentCertModalIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length;
      openCertificateModal(nextIdx);
    }

    function nextCertificate() {
      const nextIdx = (currentCertModalIndex + 1) % CERTIFICATES.length;
      openCertificateModal(nextIdx);
    }

    // =========================================================================
    // COMMAND PALETTE (Ctrl+K / ⌘K)
    // =========================================================================
    function openCommandPalette() {
      const modal = document.getElementById('cmd-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const input = document.getElementById('cmd-input');
      input.value = '';
      renderCommandList();
      setTimeout(() => input.focus(), 50);
    }

    function closeCommandPalette() {
      const modal = document.getElementById('cmd-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function renderCommandList() {
      const q = (document.getElementById('cmd-input').value || '').trim().toLowerCase();
      const container = document.getElementById('cmd-results');
      const matches = QUICK_COMMANDS.filter((item) => !q || item.label.toLowerCase().includes(q));

      container.innerHTML = matches.map((item, idx) => `
        <button type="button" onclick="runCommand(${idx})" class="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-blue-600/10 flex items-center justify-between transition">
          <span class="font-medium text-slate-800 dark:text-slate-200">${item.label}</span>
          <span class="text-xs font-mono text-orange-500">Exécuter ↵</span>
        </button>
      `).join('');
      window._currentCommandMatches = matches;
    }

    function runCommand(idx) {
      const list = window._currentCommandMatches || QUICK_COMMANDS;
      const item = list[idx];
      closeCommandPalette();
      if (item && item.action) item.action();
    }

    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // =========================================================================
    // UTILITIES: THEME, CLIPBOARD, VCARD, CONTACT FORM, CLOCK
    // =========================================================================
    function toggleTheme() {
      const root = document.documentElement;
      const isDark = root.classList.toggle('dark');
      try {
        localStorage.setItem('bv_portfolio_theme', isDark ? 'dark' : 'light');
      } catch (e) {}
      showToast(isDark ? 'Mode Sombre 2026 activé' : 'Mode Clair Éditorial activé');
    }

    function toggleMobileMenu() {
      const nav = document.getElementById('mobile-nav');
      nav.classList.toggle('hidden');
    }

    function copyText(value, message) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(() => {
          showToast(message + ' : ' + value);
        }).catch(() => fallbackCopy(value, message));
      } else {
        fallbackCopy(value, message);
      }
    }

    function fallbackCopy(value, message) {
      const ta = document.createElement('textarea');
      ta.value = value;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch (e) {}
      document.body.removeChild(ta);
      showToast(message + ' : ' + value);
    }

    function downloadVCard() {
      const vcf = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'N:BATIONO;Kégnama Valérie;;Dr;',
        'FN:Dr BATIONO Kégnama Valérie',
        'TITLE:Docteur d\'État en Pharmacie | Spécialiste en Gestion des Approvisionnements Pharmaceutiques et Logistique de Santé',
        'ORG:Ministère de la Santé du Burkina Faso - District Sanitaire de Garango',
        'TEL;TYPE=CELL:+22670420676',
        'TEL;TYPE=WORK:+22675422882',
        'EMAIL;TYPE=INTERNET:valeriebationo@gmail.com',
        'NOTE:Inscrite à l\'Ordre National des Pharmaciens du Burkina Faso sous le N° R3-1216C/ONPBF | Matricule 399 053 K',
        'END:VCARD'
      ].join('\r\n');

      const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Dr_BATIONO_Kegnama_Valerie.vcf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Fiche contact vCard (.vcf) téléchargée');
    }

    function handleContactSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const org = document.getElementById('sender-org').value.trim();
      const subject = document.getElementById('sender-subject').value;
      const message = document.getElementById('sender-message').value.trim();

      const formatted = `À : Dr BATIONO Kégnama Valérie (valeriebationo@gmail.com)\nObjet : ${subject}\nDe : ${name} (${org})\n\n${message}\n\n---\nCoordonnées Dr BATIONO : +226 70 42 06 76 / 75 42 28 82`;
      document.getElementById('contact-preview-text').textContent = formatted;
      document.getElementById('contact-preview-box').classList.remove('hidden');

      const mailto = 'mailto:valeriebationo@gmail.com?subject=' + encodeURIComponent(subject + ' - ' + org) + '&body=' + encodeURIComponent(message + '\n\nCordialement,\n' + name + '\n' + org);
      document.getElementById('mailto-direct-link').href = mailto;

      copyText(formatted, 'Courriel structuré copié dans le presse-papiers');
    }

    function showToast(msg) {
      const toast = document.getElementById('toast-container');
      const text = document.getElementById('toast-message');
      text.textContent = msg;
      toast.classList.remove('hidden');
      toast.classList.add('flex');
      clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
      }, 3400);
    }

    function updateClock() {
      const el = document.getElementById('live-clock');
      if (!el) return;
      const now = new Date();
      const utcTime = now.toLocaleTimeString('fr-FR', { timeZone: 'Africa/Ouagadougou', hour: '2-digit', minute: '2-digit', second: '2-digit' });
      el.textContent = 'Ouagadougou / Garango • ' + utcTime + ' UTC';
    }

    // Keyboard shortcuts (Ctrl+K / Cmd+K and Escape)
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openCommandPalette();
      } else if (e.key === 'Escape') {
        closeCommandPalette();
        closeCertificateModal();
      }
    });

    // =========================================================================
    // MODERN 2026 ANIMATION ENGINE (Interactive Blue/Orange Network + Scroll & 3D Tilt)
    // =========================================================================
    function initModernAnimations() {
      // 1. Scroll-reveal staggered animation on sections and cards
      const revealTargets = document.querySelectorAll('section, .glass-card');
      revealTargets.forEach((el, idx) => {
        el.classList.add('reveal-item');
        el.style.transitionDelay = ((idx % 4) * 65) + 'ms';
      });

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, { threshold: 0.08 });
        revealTargets.forEach((el) => observer.observe(el));
      } else {
        revealTargets.forEach((el) => el.classList.add('is-visible'));
      }

      // 2. Interactive Blue, White & Orange Supply-Chain Particle Network on Canvas
      const canvas = document.getElementById('bg-network-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const mouse = { x: width * 0.5, y: height * 0.3, active: false };
      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
      });
      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      const nodeCount = 34;
      const nodes = Array.from({ length: nodeCount }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: i % 3 === 0 ? 3.2 : 2.1,
        isOrange: i % 3 === 0
      }));

      function drawNetwork() {
        ctx.clearRect(0, 0, width, height);
        const isDark = document.documentElement.classList.contains('dark');

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          // Subtle attraction to cursor
          if (mouse.active) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 180 && dist > 1) {
              n.x += (dx / dist) * 0.35;
              n.y += (dy / dist) * 0.35;
            }
          }

          // Draw node (Orange or Royal Blue)
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = n.isOrange
            ? 'rgba(249, 115, 22, 0.55)'
            : (isDark ? 'rgba(96, 165, 250, 0.5)' : 'rgba(29, 78, 216, 0.42)');
          ctx.fill();

          // Connect nearby nodes
          for (let j = i + 1; j < nodes.length; j++) {
            const m = nodes[j];
            const dist = Math.hypot(n.x - m.x, n.y - m.y);
            if (dist < 155) {
              const alpha = (1 - dist / 155) * 0.22;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(m.x, m.y);
              ctx.strokeStyle = (n.isOrange || m.isOrange)
                ? `rgba(249, 115, 22, ${alpha})`
                : `rgba(29, 78, 216, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(drawNetwork);
      }
      requestAnimationFrame(drawNetwork);
    }

    // Initialize Application
    window.addEventListener('DOMContentLoaded', () => {
      try {
        const savedTheme = localStorage.getItem('bv_portfolio_theme');
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
      renderExperiences();
      renderCertificates();
      updateSimulator();
      updateClock();
      setInterval(updateClock, 1000);
      initModernAnimations();
    });
