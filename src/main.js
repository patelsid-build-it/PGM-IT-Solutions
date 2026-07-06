import './style.css';

// PJM IT-Solutions Project Portal
// Client-side Application Logic

// ==========================================
// 1. STATE & DATA INITIALIZATION
// ==========================================

// Initial Project Phases Data
const defaultPhases = [
  {
    id: 'phase-1',
    nameDe: '1. Informieren (Information)',
    nameEn: '1. Informing (Information)',
    status: 'done', // done, in-progress, todo
    owner: 'Joshlyn',
    deliverables: [
      { id: 'del-1-1', labelDe: 'Kundenwunsch analysieren & dokumentieren', labelEn: 'Analyze & document customer requirements', checked: true },
      { id: 'del-1-2', labelDe: 'Ist-Zustand des Arbeitsplatzes/Raums erfassen', labelEn: 'Record current state of the workplace space', checked: true },
      { id: 'del-1-3', labelDe: 'Anforderungen an IT & Ergonomie definieren', labelEn: 'Define IT & ergonomic requirements', checked: true }
    ],
    descDe: 'Erfassung der Kundenbedürfnisse und Definition des Projektumfangs.',
    descEn: 'Gathering customer needs and defining the project scope.'
  },
  {
    id: 'phase-2',
    nameDe: '2. Planen (Planning)',
    nameEn: '2. Planning (Planning)',
    status: 'done',
    owner: 'Murat & Pascal',
    deliverables: [
      { id: 'del-2-1', labelDe: 'Erstellung des Lastenhefts', labelEn: 'Creation of requirements specification (Lastenheft)', checked: true },
      { id: 'del-2-2', labelDe: 'Erstellung des Pflichtenhefts', labelEn: 'Creation of system specification (Pflichtenheft)', checked: true },
      { id: 'del-2-3', labelDe: 'Vorbereitung des Betriebsabrechnungsbogens (BAB)', labelEn: 'Preparation of overhead cost sheet (BAB)', checked: true },
      { id: 'del-2-4', labelDe: 'Recherche gesetzlicher Normen (ArbStättV)', labelEn: 'Research of legal norms & workplace regulations', checked: true }
    ],
    descDe: 'Detaillierte Planung der Ressourcen, Zeitpläne und kaufmännischen Grundlagen.',
    descEn: 'Detailed planning of resources, schedules, and commercial bases.'
  },
  {
    id: 'phase-3',
    nameDe: '3. Entscheiden (Decision)',
    nameEn: '3. Decision (Decision)',
    status: 'done',
    owner: 'Joshlyn',
    deliverables: [
      { id: 'del-3-1', labelDe: 'Hardware- & Software-Auswahl via Nutzwertanalyse', labelEn: 'Hardware & software selection via utility analysis', checked: true },
      { id: 'del-3-2', labelDe: 'Angebotsvergleich der Zulieferer durchführen', labelEn: 'Perform supplier offer comparison', checked: true },
      { id: 'del-3-3', labelDe: 'Freigabe des Budgets und Angebotskalkulation', labelEn: 'Budget approval and offer calculation', checked: true }
    ],
    descDe: 'Auswertung der Planungsdaten und finale Entscheidung für einen Lösungsweg.',
    descEn: 'Evaluation of planning data and final decision on a solution path.'
  },
  {
    id: 'phase-4',
    nameDe: '4. Ausführen (Execution)',
    nameEn: '4. Execution (Execution)',
    status: 'in-progress',
    owner: 'Joshlyn, Murat, Siddharth, Maiky, Pascal',
    deliverables: [
      { id: 'del-4-1', labelDe: 'Beschaffungsprozess einleiten (Bestellung)', labelEn: 'Initiate procurement process (Ordering)', checked: true },
      { id: 'del-4-2', labelDe: 'Lieferzeiten überwachen & Logistik koordinieren', labelEn: 'Monitor delivery times & coordinate logistics', checked: true },
      { id: 'del-4-3', labelDe: 'IT-Komponenten montieren und konfigurieren', labelEn: 'Assemble and configure IT components', checked: false },
      { id: 'del-4-4', labelDe: 'Netzwerkintegration & Arbeitssicherheitsprüfung', labelEn: 'Network integration & work safety inspection', checked: false }
    ],
    descDe: 'Physischer Aufbau, Installation und softwareseitige Konfiguration des Arbeitsplatzes.',
    descEn: 'Physical assembly, installation, and software configuration of the workplace.'
  },
  {
    id: 'phase-5',
    nameDe: '5. Kontrollieren (Control)',
    nameEn: '5. Control (Control)',
    status: 'todo',
    owner: 'Joshlyn',
    deliverables: [
      { id: 'del-5-1', labelDe: 'Erstellung des Übergabeprotokolls', labelEn: 'Creation of handover protocol', checked: false },
      { id: 'del-5-2', labelDe: 'Funktionstest der Hardware & Software', labelEn: 'Functional test of hardware & software', checked: false },
      { id: 'del-5-3', labelDe: 'Soll-Ist-Vergleich der kaufmännischen Kosten', labelEn: 'Target-actual comparison of commercial costs', checked: false }
    ],
    descDe: 'Qualitätskontrolle und Abnahme aller technischen sowie kaufmännischen Ziele.',
    descEn: 'Quality control and acceptance of all technical and commercial goals.'
  },
  {
    id: 'phase-6',
    nameDe: '6. Bewerten (Evaluation)',
    nameEn: '6. Evaluation (Evaluation)',
    status: 'todo',
    owner: 'Joshlyn',
    deliverables: [
      { id: 'del-6-1', labelDe: 'Kundenzufriedenheit abfragen', labelEn: 'Query customer satisfaction', checked: false },
      { id: 'del-6-2', labelDe: 'Projektreflektion & Verbesserungsvorschläge', labelEn: 'Project reflection & suggestions for improvement', checked: false },
      { id: 'del-6-3', labelDe: 'Abschlusspräsentation vorbereiten (15-20 Min)', labelEn: 'Prepare final presentation (15-20 min)', checked: false }
    ],
    descDe: 'Kritische Bewertung des Projektergebnisses und Aufzeigen von Lerneffekten.',
    descEn: 'Critical evaluation of project outcomes and highlighting key learnings.'
  }
];

// Initial Questions Catalog Data
const defaultQuestions = [
  {
    id: 'q-1',
    cat: 1,
    status: 'todo',
    qDe: 'Welche spezifischen Arbeitsplatzprofile sollen dimensioniert werden, und gibt es ein Lastenheft des Kunden?',
    qEn: 'Which specific workstation profiles should be dimensioned, and is there a customer requirements specification?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-2',
    cat: 1,
    status: 'todo',
    qDe: 'Welches Gesamtbudget ist freigegeben und wie ist die Verteilung auf die Kostenarten geplant?',
    qEn: 'What is the approved total budget, and how is it planned to be distributed across cost categories?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-3',
    cat: 1,
    status: 'todo',
    qDe: 'Welche kaufmännischen/technischen Risiken bestehen und wie werden diese in der Kalkulation berücksichtigt?',
    qEn: 'What commercial/technical risks exist, and how are they accounted for in the calculation?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-4',
    cat: 1,
    status: 'todo',
    qDe: 'Sollen bestehende Lieferantenbeziehungen genutzt werden? Wie gehen wir mit Preissteigerungen und Nachträgen um?',
    qEn: 'Should existing supplier relationships be used? How do we handle price increases and amendments?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-5',
    cat: 2,
    status: 'todo',
    qDe: 'Welche konkreten Hardware-Profile (z. B. Standard-Notebook, CAD-Workstation) sind definiert?',
    qEn: 'Which concrete hardware profiles (e.g., standard notebook, CAD workstation) are defined?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-6',
    cat: 2,
    status: 'todo',
    qDe: 'Welche zusätzlichen Geräte (z. B. 27-Zoll-Monitore, ergonomische Headsets) sind Teil des Pakets?',
    qEn: 'Which additional devices (e.g., 27-inch monitors, ergonomic headsets) are part of the package?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-7',
    cat: 2,
    status: 'todo',
    qDe: 'Welche Softwareausstattung muss lizenziert und direkt bei der Beschaffung berücksichtigt werden?',
    qEn: 'Which software equipment must be licensed and considered directly during procurement?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-8',
    cat: 2,
    status: 'todo',
    qDe: 'Welche Prozesse greifen bei defekten Geräten oder Fehlern während der Inbetriebnahme?',
    qEn: 'Which processes apply in case of defective devices or failures during commissioning?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-9',
    cat: 3,
    status: 'todo',
    qDe: 'Wie hoch sind die aktuellen Lieferzeiten und wie groß muss der Zeitpuffer sein?',
    qEn: 'What are the current delivery times, and how large must the time buffer be?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-10',
    cat: 3,
    status: 'todo',
    qDe: 'Wo werden die Komponenten bis zur Installation sicher zwischengelagert und wie erfolgt die Erfassung?',
    qEn: 'Where are the components safely stored before installation, and how are they logged?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-11',
    cat: 3,
    status: 'todo',
    qDe: 'Wer übernimmt die physische Einrichtung, die Konfiguration und das Aufspielen des Standard-Images?',
    qEn: 'Who takes care of physical setup, configuration, and deploying the standard image?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-12',
    cat: 3,
    status: 'todo',
    qDe: 'Wie erfolgt die Demontage, das datenschutzkonforme Zurücksetzen und die Entsorgung von Altgeräten?',
    qEn: 'How are dismantling, data-compliant resetting, and disposal of old hardware handled?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-13',
    cat: 3,
    status: 'todo',
    qDe: 'Wer erstellt das geforderte Übergabeprotokoll und welche Abnahmekriterien müssen erfüllt sein?',
    qEn: 'Who creates the required handover protocol, and what acceptance criteria must be met?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-14',
    cat: 4,
    status: 'todo',
    qDe: 'Soll eine eigene Projektkostenstelle angelegt werden? Welche Kontierungsrichtlinien gelten?',
    qEn: 'Should a separate project cost center be created? What booking guidelines apply?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-15',
    cat: 4,
    status: 'todo',
    qDe: 'Wie sind Rechnungen strukturiert (Abschlag, Teillieferung, Schlussrechnung)? Wer gibt diese frei?',
    qEn: 'How are invoices structured (down payment, partial delivery, final invoice)? Who approves them?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-16',
    cat: 4,
    status: 'todo',
    qDe: 'Welche Zahlungsbedingungen (Ziel, Skonto) werden mit Lieferanten vereinbart?',
    qEn: 'What payment terms (term, discount) are negotiated with suppliers?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-17',
    cat: 4,
    status: 'todo',
    qDe: 'Wie werden Möbel/IT bilanziell behandelt (Anlagevermögen, Nutzungsdauer, Abschreibung)?',
    qEn: 'How are furniture/IT treated on the balance sheet (fixed assets, useful life, depreciation)?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-18',
    cat: 4,
    status: 'todo',
    qDe: 'Sind spezielle steuerliche Aspekte wie Vorsteuerabzug oder Investitionsabzugsbeträge relevant?',
    qEn: 'Are special tax aspects such as input tax deduction or investment allowances relevant?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-19',
    cat: 4,
    status: 'todo',
    qDe: 'Welche Reporting-Anforderungen bestehen (z. B. monatlicher Soll-Ist-Vergleich)?',
    qEn: 'What reporting requirements exist (e.g., monthly budget-actual comparison)?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-20',
    cat: 5,
    status: 'todo',
    qDe: 'Wie werden die geforderten Aspekte der Nachhaltigkeit und Energieeffizienz messbar einbezogen?',
    qEn: 'How are the required aspects of sustainability and energy efficiency measurably included?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-21',
    cat: 5,
    status: 'todo',
    qDe: 'Welche datenschutzrechtlichen Anforderungen (DSGVO) müssen bei dezentralen Arbeitsplätzen erfüllt sein?',
    qEn: 'Which data protection requirements (GDPR) must be met for decentralized workstation solutions?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-22',
    cat: 5,
    status: 'todo',
    qDe: 'Welche spezifischen Arbeitsschutzrichtlinien müssen bei der Montage und Einrichtung vor Ort beachtet werden?',
    qEn: 'Which specific occupational safety guidelines must be observed during on-site assembly and setup?',
    aDe: '',
    aEn: ''
  },
  {
    id: 'q-23',
    cat: 5,
    status: 'todo',
    qDe: 'Wie wird die interne Abstimmung zwischen Einkauf, IT-Technik und Vertrieb sichergestellt?',
    qEn: 'How is internal coordination between procurement, IT, and sales ensured?',
    aDe: '',
    aEn: ''
  }
];

// Initial Nutzwertanalyse Data
const defaultNwa = {
  criteria: [
    { id: 'crit-price', nameDe: 'Anschaffungspreis (Price)', nameEn: 'Purchase Price', weight: 30, val1: 8, val2: 4, val3: 9 },
    { id: 'crit-perf', nameDe: 'Rechenleistung (Performance)', nameEn: 'Compute Performance', weight: 25, val1: 7, val2: 10, val3: 4 },
    { id: 'crit-ergo', nameDe: 'Ergonomie & Flexibilität (Ergonomics)', nameEn: 'Ergonomics & Flexibility', weight: 20, val1: 6, val2: 9, val3: 5 },
    { id: 'crit-eco', nameDe: 'Energieeffizienz & Eco (Sustainability)', nameEn: 'Energy Efficiency & Eco', weight: 15, val1: 7, val2: 5, val3: 10 },
    { id: 'crit-time', nameDe: 'Lieferzeit & Verfügbarkeit (Delivery)', nameEn: 'Delivery Time & Availability', weight: 10, val1: 9, val2: 7, val3: 8 }
  ]
};

// ==========================================
// 2. DICTIONARY FOR TRANSLATION (DE & EN)
// ==========================================
const translations = {
  de: {
    nav_home: 'Startseite',
    nav_project: 'Projekt-Zentrale',
    hero_badge: 'Projektarbeit',
    hero_title: 'Einrichtung eines Arbeitsplatzes',
    hero_desc: 'Willkommen im Projekt-Portal der PJM IT-Solutions GmbH. Unser 5-köpfiges Team richtet einen modernen, ergonomischen und energieeffizienten Arbeitsplatz für einen Kunden ein. Dieses Portal dokumentiert unsere Fortschritte für unsere Dozentin Frau Petra.',
    btn_enter_hub: 'Projekt-Zentrale betreten',
    total_progress: 'Fortschritt',
    stat_team: 'Team-Mitglieder',
    stat_phases: 'Phasen Erledigt',
    stat_questions: 'Fragen Beantwortet',
    overview_title: 'Über das Projekt',
    overview_card1_title: 'Der Projektauftrag',
    overview_card1_desc: 'Die Einrichtung eines IT-Arbeitsplatzes nach Kundenwunsch. Dies umfasst die Bedarfsanalyse, kaufmännische Kalkulationen auf Basis des Betriebsabrechnungsbogens (BAB), Angebotserstellung mit einem Gewinnzuschlag von 18 %, Erstellung von Lasten- und Pflichtenheften, rechtssicheren Kaufverträgen sowie die physische Installation unter Berücksichtigung von Ergonomie und Arbeitssicherheit.',
    overview_card2_title: 'Die Methode: Vollständige Handlung',
    overview_card2_desc: 'Wir strukturieren das Projekt nach dem didaktischen Modell der vollständigen Handlung. Dies garantiert eine systematische Bearbeitung in 6 Phasen: Informieren, Planen, Entscheiden, Ausführen, Kontrollieren und Bewerten. In der Projekt-Zentrale können Sie den Fortschritt jeder einzelnen Phase live verfolgen.',
    sidebar_title: 'Projekt-Zentrale',
    tab_status: 'Projekt-Status',
    tab_team: 'Team-Organigramm',
    tab_faq: 'Fragenkatalog',
    tab_nwa: 'Nutzwertanalyse',
    tab_bab: 'BAB-Rechner',
    pane_status_title: 'Phasenfortschritt (Vollständige Handlung)',
    pane_team_title: 'Organigramm',
    pane_team_desc: 'Unser 5-köpfiges Team der PJM IT-Solutions GmbH arbeitet dezentral in ganz Deutschland. Hier sehen Sie unsere Rollenverteilung und Zuständigkeiten für das Projekt.',
    pane_faq_title: 'Projekt-Fragenkatalog',
    pane_faq_desc: 'Ein systematischer Katalog aller relevanten kaufmännischen, technischen, logistischen und organisatorischen Fragen zur Projektdurchführung. Sie können Fragen durchsuchen, filtern, ihren Bearbeitungsstatus ändern und sogar neue Fragen hinzufügen.',
    faq_search_placeholder: 'Fragen durchsuchen...',
    filter_all: 'Alle',
    filter_cat1: 'Umfang',
    filter_cat2: 'Infrastruktur',
    filter_cat3: 'Logistik & Montage',
    filter_cat4: 'Kaufmännisch',
    filter_cat5: 'Übergreifend',
    add_q_title: 'Neue Frage hinzufügen',
    add_q_cat: 'Kategorie',
    cat_option_1: '1. Projektumfang & Zielsetzung',
    cat_option_2: '2. IT-Infrastruktur & Ergonomie',
    cat_option_3: '3. Logistik, Montage & Rollout',
    cat_option_4: '4. Kaufmännische Abwicklung & Buchhaltung',
    cat_option_5: '5. Übergreifende Aspekte (Nachhaltigkeit, Datenschutz, Arbeitssicherheit)',
    add_q_question: 'Frage',
    add_q_text_placeholder: 'Geben Sie hier die Frage ein...',
    add_q_answer: 'Antwort',
    add_q_ans_placeholder: 'Geben Sie hier die ausführliche Antwort ein...',
    btn_add_question: 'Frage speichern',
    pane_nwa_title: 'Nutzwertanalyse für Arbeitsplatz-Ausstattung',
    pane_nwa_desc: 'Vergleichende Nutzwertanalyse zur Auswahl der optimalen Hardware-Ausstattung für den Arbeitsplatz. Passen Sie die Gewichtungen (%) und die Bewertungen (1-10) der Kriterien an, um das Ergebnis live neu zu berechnen.',
    nwa_th_criterion: 'Bewertungskriterium',
    nwa_th_weight: 'Gewichtung',
    nwa_th_opt1: 'Standard-Arbeitsplatz',
    nwa_th_opt2: 'Power Developer',
    nwa_th_opt3: 'Thin Client Eco',
    nwa_recommendation_label: 'Empfehlung:',
    pane_bab_title: 'Betriebsabrechnungsbogen & Angebotskalkulation',
    pane_bab_desc: 'Das kaufmännische Herzstück des Projekts. Berechnen Sie die Zuschlagssätze für Material, Fertigung, Verwaltung und Vertrieb auf Basis der Gemeinkosten und ermitteln Sie den Angebotspreis mit 18 % Gewinnzuschlag.',
    bab_table_title: 'Zuschlagsermittlung (BAB)',
    bab_th_cost: 'Kostenstelle',
    bab_th_base: 'Einzelkosten (€)',
    bab_th_overhead: 'Gemeinkosten (€)',
    bab_th_rate: 'Zuschlagsatz',
    bab_cell_material: 'Materialbereich',
    bab_cell_production: 'Fertigungsbereich',
    bab_cell_admin: 'Verwaltung',
    bab_cell_sales: 'Vertrieb',
    bab_note: '* Die Berechnung der Herstellkosten des Umsatzes (als Zuschlagsgrundlage für Verwaltung & Vertrieb) erfolgt automatisch inklusive Bestandsveränderungen (+25.000 €).',
    bab_calc_title: 'Angebotskalkulator',
    calc_label_mat: 'Material-Einzelkosten (€)',
    calc_label_labor: 'Fertigungslohn (€)',
    calc_mat_sum: 'Materialkosten (inkl. Zuschlag)',
    calc_labor_sum: 'Fertigungskosten (inkl. Zuschlag)',
    calc_hk: 'Herstellkosten (HK)',
    calc_admin_sales: 'Verw. & Vertr. Gemeinkosten',
    calc_sk: 'Selbstkosten (SK)',
    calc_gewinn: 'Gewinnzuschlag (18 %)',
    calc_netto: 'Netto-Verkaufspreis',
    footer_text: 'Projekt-Portal.',
    reset_data: 'Daten zurücksetzen',
    responsible: 'Verantwortlich',
    status_label: 'Status',
    status_done: 'Erledigt',
    status_in_progress: 'In Bearbeitung',
    status_todo: 'Offen',
    btn_edit: 'Bearbeiten',
    btn_cancel: 'Abbrechen',
    btn_save: 'Speichern',
    select_status: 'Status ändern',
    status_open_tag: 'Offen',
    status_wip_tag: 'In Bearbeitung',
    status_resolved_tag: 'Beantwortet',
    role_pm: 'Projektleitung & Qualitätsmanagement',
    role_pm_details: 'Verantwortlich für Koordination der 6 Phasen, Kundenkontakt und Erstellung des Übergabeprotokolls.',
    role_controller: 'Kaufmännischer Controller',
    role_controller_details: 'Erstellt den BAB, vergleicht Zulieferer-Angebote und führt die Nachkalkulation durch.',
    role_engineer: 'IT-Systemengineer',
    role_engineer_details: 'Planung der IT-Architektur, Staging, Software-Verteilung und Prüfung der Arbeitssicherheit.',
    role_logistics: 'Logistikkoordinator',
    role_logistics_details: 'Koordiniert den Einkaufsprozess, überwacht Lieferzeiten und verwaltet das Zwischenlager.',
    winner_suffix: 'mit einer Gesamtpunktzahl von'
  },
  en: {
    nav_home: 'Home',
    nav_project: 'Project Workspace',
    hero_badge: 'Project Work',
    hero_title: 'Workplace Integration',
    hero_desc: 'Welcome to the project portal of PJM IT-Solutions GmbH. Our 5-member team integrates a modern, ergonomic, and energy-efficient workstation for a client. This portal documents our progress for our lecturer Frau Petra.',
    btn_enter_hub: 'Enter Project Hub',
    total_progress: 'Progress',
    stat_team: 'Team Members',
    stat_phases: 'Phases Completed',
    stat_questions: 'Questions Answered',
    overview_title: 'About the Project',
    overview_card1_title: 'The Project Mandate',
    overview_card1_desc: 'Setting up an IT workplace according to customer requirements. This includes requirement analysis, commercial calculations based on the overhead cost sheet (BAB), offer preparation with an 18% profit margin, creation of requirement/system specifications, legal sales contracts, and physical installation considering ergonomics and occupational safety.',
    overview_card2_title: 'The Method: Complete Action',
    overview_card2_desc: 'We structure the project based on the pedagogical model of "complete action". This guarantees a systematic execution in 6 phases: Informing, Planning, Deciding, Executing, Controlling, and Evaluating. In the Project Workspace, you can follow the live progress of each phase.',
    sidebar_title: 'Project Hub',
    tab_status: 'Project Status',
    tab_team: 'Team Org Chart',
    tab_faq: 'Questions Catalog',
    tab_nwa: 'Utility Analysis',
    tab_bab: 'BAB Calculator',
    pane_status_title: 'Phase Progress (Complete Action)',
    pane_team_title: 'Org Chart',
    pane_team_desc: 'Our 5-member team at PJM IT-Solutions GmbH works remotely across Germany. Here you can see our distribution of roles and responsibilities for the project.',
    pane_faq_title: 'Project Q&A Catalog',
    pane_faq_desc: 'A systematic catalog of all relevant commercial, technical, logistical, and organizational questions for project execution. You can search, filter, change question status, and even add new questions.',
    faq_search_placeholder: 'Search questions...',
    filter_all: 'All',
    filter_cat1: 'Scope',
    filter_cat2: 'Infrastructure',
    filter_cat3: 'Logistics & Setup',
    filter_cat4: 'Commercial',
    filter_cat5: 'Cross-functional',
    add_q_title: 'Add New Question',
    add_q_cat: 'Category',
    cat_option_1: '1. Project Scope & Objectives',
    cat_option_2: '2. IT Infrastructure & Ergonomics',
    cat_option_3: '3. Logistics, Assembly & Rollout',
    cat_option_4: '4. Commercial Processing & Accounting',
    cat_option_5: '5. Cross-cutting Aspects (Sustainability, Data Privacy, Safety)',
    add_q_question: 'Question',
    add_q_text_placeholder: 'Enter the question here...',
    add_q_answer: 'Answer',
    add_q_ans_placeholder: 'Enter the detailed answer here...',
    btn_add_question: 'Save Question',
    pane_nwa_title: 'Utility Analysis for Workplace Equipment',
    pane_nwa_desc: 'Comparative utility analysis (Nutzwertanalyse) to select the optimal hardware setup for the workplace. Adjust the weights (%) and ratings (1-10) of the criteria to recalculate the result in real time.',
    nwa_th_criterion: 'Evaluation Criterion',
    nwa_th_weight: 'Weighting',
    nwa_th_opt1: 'Standard Workstation',
    nwa_th_opt2: 'Power Developer',
    nwa_th_opt3: 'Thin Client Eco',
    nwa_recommendation_label: 'Recommendation:',
    pane_bab_title: 'Overhead Cost Sheet & Offer Calculation',
    pane_bab_desc: 'The commercial heart of the project. Calculate overhead rates for material, production, administration, and sales based on overhead costs, and calculate the selling price with an 18% profit margin.',
    bab_table_title: 'Overhead Allocation (BAB)',
    bab_th_cost: 'Cost Center',
    bab_th_base: 'Direct Costs (€)',
    bab_th_overhead: 'Overhead (€)',
    bab_th_rate: 'Overhead Rate',
    bab_cell_material: 'Material Dept',
    bab_cell_production: 'Production Dept',
    bab_cell_admin: 'Administration',
    bab_cell_sales: 'Sales',
    bab_note: '* The calculation of cost of goods sold (as base for admin & sales) automatically includes inventory changes (+€25,000).',
    bab_calc_title: 'Offer Price Calculator',
    calc_label_mat: 'Direct Material Cost (€)',
    calc_label_labor: 'Direct Labor Cost (€)',
    calc_mat_sum: 'Material Costs (incl. overhead)',
    calc_labor_sum: 'Production Costs (incl. overhead)',
    calc_hk: 'Cost of Goods Mfd (HK)',
    calc_admin_sales: 'Admin & Sales Overheads',
    calc_sk: 'Cost of Sales (SK)',
    calc_gewinn: 'Profit Margin (18 %)',
    calc_netto: 'Net Selling Price',
    footer_text: 'Project Portal.',
    reset_data: 'Reset Data',
    responsible: 'Responsible',
    status_label: 'Status',
    status_done: 'Completed',
    status_in_progress: 'In Progress',
    status_todo: 'Open',
    btn_edit: 'Edit',
    btn_cancel: 'Cancel',
    btn_save: 'Save',
    select_status: 'Change status',
    status_open_tag: 'Open',
    status_wip_tag: 'In Progress',
    status_resolved_tag: 'Resolved',
    role_pm: 'Project Management & Quality Assurance',
    role_pm_details: 'Responsible for coordination of the 6 phases, client contact, and drafting the handover protocol.',
    role_controller: 'Commercial Controller',
    role_controller_details: 'Calculates the BAB, compares supplier offers, and performs target-actual analysis.',
    role_engineer: 'IT System Engineer',
    role_engineer_details: 'Planning of IT architecture, staging, software distribution, and auditing occupational safety.',
    role_logistics: 'Logistics Coordinator',
    role_logistics_details: 'Coordinates procurement, monitors delivery timelines, and manages the staging warehouse.',
    winner_suffix: 'with a total score of'
  }
};

// ==========================================
// 3. PERSISTENT STORAGE MANAGER (LocalStorage)
// ==========================================
function getLocalStorage(key, defaultValue) {
  const stored = localStorage.getItem(key);
  if (!stored) return defaultValue;
  try {
    return JSON.parse(stored);
  } catch (e) {
    return defaultValue;
  }
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Load states or initialize defaults
let currentLanguage = getLocalStorage('pjm_lang', 'de');
let phasesData = getLocalStorage('pjm_phases', defaultPhases);
let questionsData = getLocalStorage('pjm_questions', defaultQuestions);
let nwaData = getLocalStorage('pjm_nwa', defaultNwa);

// ==========================================
// 4. NAVIGATION & TAB SWITCHER
// ==========================================
function initNavigation() {
  const navHome = document.getElementById('nav-home');
  const navProject = document.getElementById('nav-project');
  const sectionHome = document.getElementById('section-home');
  const sectionProject = document.getElementById('section-project');
  const btnEnterHub = document.getElementById('btn-enter-hub');
  const btnBrand = document.getElementById('btn-brand');

  function switchMainPage(page) {
    if (page === 'home') {
      navHome.classList.add('active');
      navProject.classList.remove('active');
      sectionHome.classList.add('active');
      sectionProject.classList.remove('active');
    } else {
      navHome.classList.remove('active');
      navProject.classList.add('active');
      sectionHome.classList.remove('active');
      sectionProject.classList.add('active');
      // Trigger animations inside the sub-tabs
      calculateBAB();
      calculateNWA();
    }
  }

  navHome.addEventListener('click', () => switchMainPage('home'));
  navProject.addEventListener('click', () => switchMainPage('project'));
  btnEnterHub.addEventListener('click', () => switchMainPage('project'));
  btnBrand.addEventListener('click', (e) => {
    e.preventDefault();
    switchMainPage('home');
  });

  // Sidebar sub-tab navigation
  const sidebarButtons = document.querySelectorAll('.workspace-tab-btn');
  const contentPanes = document.querySelectorAll('.workspace-content-pane');

  sidebarButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sidebarButtons.forEach(b => b.classList.remove('active'));
      contentPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      const targetPaneId = btn.getAttribute('data-tab');
      document.getElementById(targetPaneId).classList.add('active');

      if (targetPaneId === 'pane-bab') {
        calculateBAB();
      } else if (targetPaneId === 'pane-nwa') {
        calculateNWA();
      }
    });
  });
}

// ==========================================
// 5. TRANSLATION ENGINE
// ==========================================
function updateLanguageUI() {
  const dict = translations[currentLanguage];

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;

  // Translate all marked elements
  const translateElements = document.querySelectorAll('[data-translate]');
  translateElements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate placeholders
  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update language switcher classes
  const langToggle = document.getElementById('lang-toggle');
  if (currentLanguage === 'en') {
    langToggle.classList.add('en');
    langToggle.classList.remove('de');
  } else {
    langToggle.classList.add('de');
    langToggle.classList.remove('en');
  }

  // Refresh dynamic contents
  renderTimeline();
  renderOrganigram();
  renderFaq();
  calculateNWA();
  calculateBAB();
  updateGlobalStats();
}

function initLanguageSwitcher() {
  const langToggle = document.getElementById('lang-toggle');
  langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'de' ? 'en' : 'en' ? 'en' : 'de';
    // Small correction for toggle value check
    if (langToggle.classList.contains('de')) {
      currentLanguage = 'en';
    } else {
      currentLanguage = 'de';
    }
    setLocalStorage('pjm_lang', currentLanguage);
    updateLanguageUI();
  });
}

// ==========================================
// 6. DYNAMIC RENDER: TIMELINE / STATUS
// ==========================================
function renderTimeline() {
  const dict = translations[currentLanguage];
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';

  phasesData.forEach((phase, index) => {
    const isDone = phase.status === 'done';
    const isWip = phase.status === 'in-progress';
    const statusClass = isDone ? 'done' : isWip ? 'in-progress' : 'todo';
    
    const phaseName = currentLanguage === 'de' ? phase.nameDe : phase.nameEn;
    const phaseDesc = currentLanguage === 'de' ? phase.descDe : phase.descEn;

    const item = document.createElement('div');
    item.className = `timeline-item ${statusClass}`;
    item.setAttribute('data-phase-id', phase.id);

    let deliverablesHtml = '';
    phase.deliverables.forEach(del => {
      const delLabel = currentLanguage === 'de' ? del.labelDe : del.labelEn;
      deliverablesHtml += `
        <li class="deliverable-item ${del.checked ? 'checked' : ''}">
          <input type="checkbox" id="${del.id}" ${del.checked ? 'checked' : ''}>
          <span>${delLabel}</span>
        </li>
      `;
    });

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="phase-name">${phaseName}</span>
          <span class="phase-status-badge status-${statusClass}">${dict['status_' + phase.status.replace('-', '_')]}</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
          <strong>${dict.responsible}:</strong> ${phase.owner}
        </p>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">${phaseDesc}</p>
        
        <div class="timeline-body">
          <ul class="deliverables-list">
            ${deliverablesHtml}
          </ul>
          <div class="phase-action-bar">
            <button class="phase-btn ${phase.status === 'todo' ? 'btn-active-status' : ''}" data-status="todo">${dict.status_todo}</button>
            <button class="phase-btn ${phase.status === 'in-progress' ? 'btn-active-status' : ''}" data-status="in-progress">${dict.status_in_progress}</button>
            <button class="phase-btn ${phase.status === 'done' ? 'btn-active-status' : ''}" data-status="done">${dict.status_done}</button>
          </div>
        </div>
      </div>
    `;

    // Make timeline item header toggle the expanded body
    const header = item.querySelector('.timeline-header');
    header.addEventListener('click', (e) => {
      // Prevent collapse when clicking status badge
      if (e.target.classList.contains('phase-status-badge')) return;
      item.classList.toggle('active');
    });

    // Handle check/uncheck deliverables
    const checkboxes = item.querySelectorAll('.deliverable-item input[type="checkbox"]');
    checkboxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        const delId = e.target.id;
        const deliverable = phase.deliverables.find(d => d.id === delId);
        if (deliverable) {
          deliverable.checked = e.target.checked;
          setLocalStorage('pjm_phases', phasesData);
          e.target.parentElement.classList.toggle('checked', e.target.checked);
          updateGlobalStats();
        }
      });
    });

    // Handle phase status toggle buttons
    const statusBtns = item.querySelectorAll('.phase-action-bar .phase-btn');
    statusBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent timeline item toggle collapse
        const newStatus = btn.getAttribute('data-status');
        phase.status = newStatus;
        setLocalStorage('pjm_phases', phasesData);
        
        // Re-render timeline to update styling, classes and progress
        renderTimeline();
        updateGlobalStats();
      });
    });

    container.appendChild(item);
  });
}

// ==========================================
// 7. DYNAMIC RENDER: TEAM ORGANIGRAMM
// ==========================================
function renderOrganigram() {
  const dict = translations[currentLanguage];
  const container = document.getElementById('organigram-container');
  container.innerHTML = '';

  const team = [
    { name: 'Joshlyn', roleKey: 'role_pm', detailsKey: 'role_pm_details', level: 1, initials: 'JO' },
    { name: 'Murat', roleKey: 'role_controller', detailsKey: 'role_controller_details', level: 2, initials: 'MU' },
    { name: 'Siddharth', roleKey: 'role_engineer', detailsKey: 'role_engineer_details', level: 3, initials: 'SI' },
    { name: 'Maiky', roleKey: 'role_engineer', detailsKey: 'role_engineer_details', level: 3, initials: 'MA' },
    { name: 'Pascal', roleKey: 'role_logistics', detailsKey: 'role_logistics_details', level: 2, initials: 'PA' }
  ];

  // Organize by levels
  const levels = {
    1: [],
    2: [],
    3: []
  };

  team.forEach(member => {
    levels[member.level].push(member);
  });

  // Render cards level-by-level
  for (let l = 1; l <= 3; l++) {
    const levelDiv = document.createElement('div');
    levelDiv.className = `org-level level-${l}`;
    
    levels[l].forEach(member => {
      const card = document.createElement('div');
      card.className = 'org-card';
      
      const roleName = dict[member.roleKey];
      const roleDetails = dict[member.detailsKey];

      card.innerHTML = `
        <div class="avatar-placeholder">${member.initials}</div>
        <h4 class="member-name">${member.name}</h4>
        <div class="member-role">${roleName}</div>
        <div class="member-details">
          <p>${roleDetails}</p>
        </div>
      `;
      levelDiv.appendChild(card);
    });

    container.appendChild(levelDiv);
  }
}

// ==========================================
// 8. DYNAMIC RENDER: DYNAMIC FRAGENKATALOG
// ==========================================
let faqCategoryFilter = 'all';

function renderFaq() {
  const dict = translations[currentLanguage];
  const container = document.getElementById('faq-list-container');
  const searchVal = document.getElementById('faq-search').value.toLowerCase();
  
  container.innerHTML = '';

  // Filter questions by search and category
  const filtered = questionsData.filter(q => {
    const matchesCat = faqCategoryFilter === 'all' || q.cat.toString() === faqCategoryFilter;
    const qText = currentLanguage === 'de' ? q.qDe : q.qEn;
    const aText = currentLanguage === 'de' ? q.aDe : q.aEn;
    const matchesSearch = qText.toLowerCase().includes(searchVal) || aText.toLowerCase().includes(searchVal);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No questions found / Keine Fragen gefunden.</div>`;
    return;
  }

  filtered.forEach(q => {
    const item = document.createElement('details');
    item.className = 'faq-item';
    item.setAttribute('name', 'faq-accordion'); // Exclusive native accordion behavior!
    item.setAttribute('data-id', q.id);

    const questionText = currentLanguage === 'de' ? q.qDe : q.qEn;
    const answerText = currentLanguage === 'de' ? q.aDe : q.aEn;

    // Status tag styling
    let statusText = dict.status_open_tag;
    let statusClass = 'status-open';
    if (q.status === 'wip') {
      statusText = dict.status_wip_tag;
      statusClass = 'status-wip';
    } else if (q.status === 'resolved') {
      statusText = dict.status_resolved_tag;
      statusClass = 'status-resolved';
    }

    item.innerHTML = `
      <summary class="faq-summary">
        <div class="faq-summary-title">
          <svg class="faq-icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          <span>${questionText}</span>
        </div>
        <span class="faq-status ${statusClass}">${statusText}</span>
      </summary>
      <div class="faq-content">
        <div class="faq-view-mode">
          <!-- Quick Status Toggles in view mode -->
          <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap;">
            <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">Status:</span>
            <button class="faq-btn btn-status-pill ${q.status === 'todo' ? 'btn-active-status' : ''}" style="padding: 0.2rem 0.6rem; font-size: 0.75rem;" data-status-val="todo">${dict.status_open_tag}</button>
            <button class="faq-btn btn-status-pill ${q.status === 'wip' ? 'btn-active-status' : ''}" style="padding: 0.2rem 0.6rem; font-size: 0.75rem;" data-status-val="wip">${dict.status_wip_tag}</button>
            <button class="faq-btn btn-status-pill ${q.status === 'resolved' ? 'btn-active-status' : ''}" style="padding: 0.2rem 0.6rem; font-size: 0.75rem;" data-status-val="resolved">${dict.status_resolved_tag}</button>
          </div>
          <p class="faq-ans-text">${answerText || '<i>Noch keine Antwort hinterlegt. / No answer added yet.</i>'}</p>
          <div class="faq-editor-actions" style="margin-top: 1rem;">
            <button class="faq-btn btn-edit-faq">${dict.btn_edit}</button>
          </div>
        </div>
        <div class="faq-edit-mode" style="display: none;">
          <div class="faq-editor-area">
            <label style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">${dict.add_q_answer}:</label>
            <textarea class="faq-edit-textarea" style="width: 100%; min-height: 100px; padding: 0.5rem;">${answerText}</textarea>
          </div>
          <div class="faq-editor-actions" style="margin-top: 0.75rem;">
            <button class="faq-btn btn-cancel-faq">${dict.btn_cancel}</button>
            <button class="faq-btn btn-save btn-save-faq">${dict.btn_save}</button>
          </div>
        </div>
      </div>
    `;

    // Handle Quick Status Toggles
    const statusPills = item.querySelectorAll('.btn-status-pill');
    statusPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const nextStatus = pill.getAttribute('data-status-val');
        q.status = nextStatus;
        setLocalStorage('pjm_questions', questionsData);
        renderFaq();
        updateGlobalStats();
      });
    });

    // Handle Edit Mode Toggle
    const btnEdit = item.querySelector('.btn-edit-faq');
    const btnCancel = item.querySelector('.btn-cancel-faq');
    const btnSave = item.querySelector('.btn-save-faq');
    const viewMode = item.querySelector('.faq-view-mode');
    const editMode = item.querySelector('.faq-edit-mode');

    btnEdit.addEventListener('click', (e) => {
      e.preventDefault();
      viewMode.style.display = 'none';
      editMode.style.display = 'block';
      item.querySelector('.faq-edit-textarea').focus();
    });

    btnCancel.addEventListener('click', (e) => {
      e.preventDefault();
      viewMode.style.display = 'block';
      editMode.style.display = 'none';
    });

    btnSave.addEventListener('click', (e) => {
      e.preventDefault();
      const newAnswer = item.querySelector('.faq-edit-textarea').value;

      // Update local storage object
      if (currentLanguage === 'de') {
        q.aDe = newAnswer;
      } else {
        q.aEn = newAnswer;
      }
      setLocalStorage('pjm_questions', questionsData);

      // Re-render
      renderFaq();
      updateGlobalStats();
    });

    container.appendChild(item);
  });
}

function exportFaqPdf() {
  const printWindow = window.open('', '_blank');
  const dict = translations[currentLanguage];
  
  let faqContentHtml = '';
  questionsData.forEach((q, idx) => {
    const catName = dict['cat_option_' + q.cat] || `Kategorie ${q.cat}`;
    const qText = currentLanguage === 'de' ? q.qDe : q.qEn;
    const aText = currentLanguage === 'de' ? q.aDe : q.aEn;
    const statusText = dict['status_' + q.status + '_tag'] || q.status;
    
    faqContentHtml += `
      <div class="pdf-faq-item">
        <div class="pdf-faq-meta"><strong>${dict.add_q_cat}:</strong> ${catName} | <strong>${dict.status_label}:</strong> ${statusText}</div>
        <div class="pdf-faq-question"><strong>Q${idx + 1}:</strong> ${qText}</div>
        <div class="pdf-faq-answer"><strong>A:</strong> ${aText || '-'}</div>
      </div>
    `;
  });
  
  printWindow.document.write(`
    <html>
      <head>
        <title>Fragenkatalog - PJM IT-Solutions GmbH</title>
        <style>
          body { font-family: 'Plus Jakarta Sans', sans-serif; color: #1e293b; padding: 2rem; background: #fff; }
          h1 { font-family: 'Outfit', sans-serif; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }
          .pdf-faq-item { margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; page-break-inside: avoid; }
          .pdf-faq-meta { font-size: 0.85rem; color: #64748b; margin-bottom: 0.5rem; }
          .pdf-faq-question { font-size: 1.1rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
          .pdf-faq-answer { font-size: 0.95rem; line-height: 1.5; color: #334155; white-space: pre-line; }
        </style>
      </head>
      <body>
        <h1>PJM IT-Solutions GmbH - Projekt-Fragenkatalog</h1>
        <p style="font-size:0.9rem; color:#64748b; margin-bottom: 2rem;">Generiert am: ${new Date().toLocaleDateString('de-DE')}</p>
        ${faqContentHtml}
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 500);
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

function exportOrganigramPdf() {
  const printWindow = window.open('', '_blank');
  const dict = translations[currentLanguage];
  
  const team = [
    { name: 'Joshlyn', roleKey: 'role_pm', detailsKey: 'role_pm_details', level: 1, initials: 'JO' },
    { name: 'Murat', roleKey: 'role_controller', detailsKey: 'role_controller_details', level: 2, initials: 'MU' },
    { name: 'Pascal', roleKey: 'role_logistics', detailsKey: 'role_logistics_details', level: 2, initials: 'PA' },
    { name: 'Siddharth', roleKey: 'role_engineer', detailsKey: 'role_engineer_details', level: 3, initials: 'SI' },
    { name: 'Maiky', roleKey: 'role_engineer', detailsKey: 'role_engineer_details', level: 3, initials: 'MA' }
  ];
  
  let teamHtml = '';
  team.forEach(member => {
    const roleName = dict[member.roleKey];
    const roleDetails = dict[member.detailsKey];
    
    teamHtml += `
      <div class="pdf-member-card">
        <div class="pdf-avatar">${member.initials}</div>
        <div class="pdf-member-name">${member.name}</div>
        <div class="pdf-member-role">${roleName}</div>
        <div class="pdf-member-details">${roleDetails}</div>
      </div>
    `;
  });
  
  printWindow.document.write(`
    <html>
      <head>
        <title>Team-Organigramm - PJM IT-Solutions GmbH</title>
        <style>
          body { font-family: 'Plus Jakarta Sans', sans-serif; color: #1e293b; padding: 2rem; text-align: center; background: #fff; }
          h1 { font-family: 'Outfit', sans-serif; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; text-align: left; }
          .pdf-team-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; margin-top: 2rem; }
          .pdf-member-card { width: 240px; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; background: #f8fafc; text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); page-break-inside: avoid; }
          .pdf-avatar { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%); margin: 0 auto 1rem auto; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800; color: #0f172a; }
          .pdf-member-name { font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-bottom: 0.25rem; }
          .pdf-member-role { font-size: 0.85rem; font-weight: 600; color: #0284c7; margin-bottom: 0.75rem; text-transform: uppercase; }
          .pdf-member-details { font-size: 0.8rem; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 0.75rem; text-align: left; line-height: 1.4; }
        </style>
      </head>
      <body>
        <h1 style="text-align: center;">PJM IT-Solutions GmbH - Team-Organigramm</h1>
        <p style="font-size:0.9rem; color:#64748b; margin-bottom: 2rem; text-align: center;">Generiert am: ${new Date().toLocaleDateString('de-DE')}</p>
        <div class="pdf-team-grid">
          ${teamHtml}
        </div>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 500);
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

function initFaqControls() {
  const searchInput = document.getElementById('faq-search');
  searchInput.addEventListener('input', renderFaq);

  const filterBtns = document.querySelectorAll('.faq-filter-btn:not(#btn-export-faq-pdf):not(#btn-export-org-pdf)');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      faqCategoryFilter = btn.getAttribute('data-filter');
      renderFaq();
    });
  });

  // Handle PDF Export for FAQ
  const btnExportFaq = document.getElementById('btn-export-faq-pdf');
  btnExportFaq.addEventListener('click', (e) => {
    e.preventDefault();
    exportFaqPdf();
  });

  // Handle PDF Export for Organigramm
  const btnExportOrg = document.getElementById('btn-export-org-pdf');
  btnExportOrg.addEventListener('click', (e) => {
    e.preventDefault();
    exportOrganigramPdf();
  });

  // Handle new question submit
  const addForm = document.getElementById('add-question-form');
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cat = parseInt(document.getElementById('new-q-cat').value);
    const qText = document.getElementById('new-q-text').value;
    const aText = document.getElementById('new-q-ans').value;

    const newQ = {
      id: 'q-custom-' + Date.now(),
      cat: cat,
      status: 'resolved',
      qDe: currentLanguage === 'de' ? qText : '',
      qEn: currentLanguage === 'en' ? qText : '',
      aDe: currentLanguage === 'de' ? aText : '',
      aEn: currentLanguage === 'en' ? aText : ''
    };

    // If added in EN, make sure DE has empty fallback, or vice versa
    if (currentLanguage === 'de') {
      newQ.qEn = `[EN] ${qText}`;
      newQ.aEn = `[EN] ${aText}`;
    } else {
      newQ.qDe = `[DE] ${qText}`;
      newQ.aDe = `[DE] ${aText}`;
    }

    questionsData.push(newQ);
    setLocalStorage('pjm_questions', questionsData);

    // Reset form
    addForm.reset();
    renderFaq();
    updateGlobalStats();
  });
}

// ==========================================
// 9. DYNAMIC CALCULATIONS: NUTZWERTANALYSE
// ==========================================
function calculateNWA() {
  const dict = translations[currentLanguage];
  const container = document.getElementById('nwa-rows-container');
  container.innerHTML = '';

  let totalWeight = 0;
  let totalScore1 = 0;
  let totalScore2 = 0;
  let totalScore3 = 0;

  nwaData.criteria.forEach((crit, index) => {
    totalWeight += crit.weight;

    const critName = currentLanguage === 'de' ? crit.nameDe : crit.nameEn;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${critName}</td>
      <td style="text-align: center;">
        <input type="number" class="nwa-weight-input" data-crit-index="${index}" value="${crit.weight}" min="0" max="100">%
      </td>
      <td>
        <div class="nwa-slider-container">
          <input type="range" class="nwa-opt1-slider" data-crit-index="${index}" min="1" max="10" value="${crit.val1}">
          <span class="nwa-slider-val">${crit.val1}</span>
        </div>
      </td>
      <td>
        <div class="nwa-slider-container">
          <input type="range" class="nwa-opt2-slider" data-crit-index="${index}" min="1" max="10" value="${crit.val2}">
          <span class="nwa-slider-val">${crit.val2}</span>
        </div>
      </td>
      <td>
        <div class="nwa-slider-container">
          <input type="range" class="nwa-opt3-slider" data-crit-index="${index}" min="1" max="10" value="${crit.val3}">
          <span class="nwa-slider-val">${crit.val3}</span>
        </div>
      </td>
    `;

    // Sliders event handling
    const slider1 = row.querySelector('.nwa-opt1-slider');
    const slider2 = row.querySelector('.nwa-opt2-slider');
    const slider3 = row.querySelector('.nwa-opt3-slider');
    const weightInput = row.querySelector('.nwa-weight-input');

    slider1.addEventListener('input', (e) => {
      crit.val1 = parseInt(e.target.value);
      row.querySelector('.nwa-opt1-slider + .nwa-slider-val').textContent = crit.val1;
      setLocalStorage('pjm_nwa', nwaData);
      updateNWATotals();
    });

    slider2.addEventListener('input', (e) => {
      crit.val2 = parseInt(e.target.value);
      row.querySelector('.nwa-opt2-slider + .nwa-slider-val').textContent = crit.val2;
      setLocalStorage('pjm_nwa', nwaData);
      updateNWATotals();
    });

    slider3.addEventListener('input', (e) => {
      crit.val3 = parseInt(e.target.value);
      row.querySelector('.nwa-opt3-slider + .nwa-slider-val').textContent = crit.val3;
      setLocalStorage('pjm_nwa', nwaData);
      updateNWATotals();
    });

    weightInput.addEventListener('change', (e) => {
      crit.weight = parseInt(e.target.value) || 0;
      setLocalStorage('pjm_nwa', nwaData);
      updateNWATotals();
    });

    container.appendChild(row);
  });

  // Append Total Row
  const totalRow = document.createElement('tr');
  totalRow.className = 'nwa-total-row';
  totalRow.innerHTML = `
    <td><strong>Gesamt / Total</strong></td>
    <td style="text-align: center;" id="nwa-total-weight">${totalWeight}%</td>
    <td class="nwa-score-cell" id="nwa-total-opt1">0.0</td>
    <td class="nwa-score-cell" id="nwa-total-opt2">0.0</td>
    <td class="nwa-score-cell" id="nwa-total-opt3">0.0</td>
  `;
  container.appendChild(totalRow);

  // Initial calculation
  updateNWATotals();
}

function updateNWATotals() {
  const dict = translations[currentLanguage];
  let totalWeight = 0;
  let weightedSum1 = 0;
  let weightedSum2 = 0;
  let weightedSum3 = 0;

  nwaData.criteria.forEach(crit => {
    totalWeight += crit.weight;
    weightedSum1 += (crit.weight * crit.val1);
    weightedSum2 += (crit.weight * crit.val2);
    weightedSum3 += (crit.weight * crit.val3);
  });

  // Display weights
  document.getElementById('nwa-total-weight').textContent = totalWeight + '%';

  // Normalize scores (divide by total weight)
  const normScore1 = totalWeight > 0 ? (weightedSum1 / totalWeight).toFixed(1) : '0.0';
  const normScore2 = totalWeight > 0 ? (weightedSum2 / totalWeight).toFixed(1) : '0.0';
  const normScore3 = totalWeight > 0 ? (weightedSum3 / totalWeight).toFixed(1) : '0.0';

  document.getElementById('nwa-total-opt1').textContent = normScore1;
  document.getElementById('nwa-total-opt2').textContent = normScore2;
  document.getElementById('nwa-total-opt3').textContent = normScore3;

  // Decide winner
  const scores = [
    { name: dict.nwa_th_opt1, val: parseFloat(normScore1) },
    { name: dict.nwa_th_opt2, val: parseFloat(normScore2) },
    { name: dict.nwa_th_opt3, val: parseFloat(normScore3) }
  ];

  scores.sort((a, b) => b.val - a.val);
  const winner = scores[0];

  document.getElementById('nwa-recommendation-text').textContent = ` ${winner.name} ${dict.winner_suffix} ${winner.val.toFixed(1)} / 10`;
}

// ==========================================
// 10. DYNAMIC CALCULATIONS: BAB & PRICING
// ==========================================
function calculateBAB() {
  const matOverhead = parseFloat(document.getElementById('bab-mat-overhead').value) || 0;
  const prodOverhead = parseFloat(document.getElementById('bab-prod-overhead').value) || 0;
  const adminOverhead = parseFloat(document.getElementById('bab-admin-overhead').value) || 0;
  const salesOverhead = parseFloat(document.getElementById('bab-sales-overhead').value) || 0;

  // Standard bases from the PDF
  const matBase = 450000;
  const prodBase = 250000;
  
  // Calculate rates
  const matRate = matBase > 0 ? (matOverhead / matBase) * 100 : 0;
  const prodRate = prodBase > 0 ? (prodOverhead / prodBase) * 100 : 0;

  // Herstellkosten des Umsatzes calculation based on the BAB in PDF
  // Herstellkosten = Fertigungsmaterial + Materialgemeinkosten + Fertigungslohn + Fertigungsgemeinkosten
  // Bestandsveränderungen (+25.000 €) is added/subtracted
  const matTotalCost = matBase + matOverhead;
  const prodTotalCost = prodBase + prodOverhead;
  
  // According to standard BAB:
  // Materialbereich = 450.000 + 65.970 = 515.970
  // Fertigungsbereich = 250.000 + 208.450 = 458.450
  // Herstellkosten der Erzeugung = 515.970 + 458.450 = 974.420
  // Bestandsveränderungen = +25.000 (adds to basis, wait, in PDF it says: 974.420 + 25.000 = 999.420 Herstellkosten des Umsatzes)
  const hkUmsatz = matTotalCost + prodTotalCost + 25000; // 999.420 € under default values
  
  const adminRate = hkUmsatz > 0 ? (adminOverhead / hkUmsatz) * 100 : 0;
  const salesRate = hkUmsatz > 0 ? (salesOverhead / hkUmsatz) * 100 : 0;

  // Update rates in UI
  document.getElementById('bab-mat-rate').textContent = matRate.toFixed(1) + '%';
  document.getElementById('bab-prod-rate').textContent = prodRate.toFixed(1) + '%';
  document.getElementById('bab-admin-rate').textContent = adminRate.toFixed(1) + '%';
  document.getElementById('bab-sales-rate').textContent = salesRate.toFixed(1) + '%';

  document.getElementById('bab-admin-base').textContent = hkUmsatz.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('bab-sales-base').textContent = hkUmsatz.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Update offer calculator in parallel
  calculateOffer(matRate, prodRate, adminRate, salesRate);
}

function calculateOffer(matRate, prodRate, adminRate, salesRate) {
  const calcMat = parseFloat(document.getElementById('calc-mat').value) || 0;
  const calcLabor = parseFloat(document.getElementById('calc-labor').value) || 0;

  // Overheads addition
  const matOverheadSum = calcMat * (matRate / 100);
  const matTotal = calcMat + matOverheadSum;

  const laborOverheadSum = calcLabor * (prodRate / 100);
  const laborTotal = calcLabor + laborOverheadSum;

  // Herstellkosten (HK)
  const hk = matTotal + laborTotal;

  // Admin & Sales overheads (applied to Herstellkosten)
  const adminOverheadSum = hk * (adminRate / 100);
  const salesOverheadSum = hk * (salesRate / 100);
  const adminSalesOverhead = adminOverheadSum + salesOverheadSum;

  // Selbstkosten (SK)
  const sk = hk + adminSalesOverhead;

  // Gewinnzuschlag (18%)
  const profit = sk * 0.18;

  // Net selling price
  const netSellingPrice = sk + profit;

  // Render prices formatted
  const formatEuro = (val) => val.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

  document.getElementById('res-mat-total').textContent = formatEuro(matTotal);
  document.getElementById('res-labor-total').textContent = formatEuro(laborTotal);
  document.getElementById('res-hk').textContent = formatEuro(hk);
  document.getElementById('res-overhead').textContent = formatEuro(adminSalesOverhead);
  document.getElementById('res-sk').textContent = formatEuro(sk);
  document.getElementById('res-profit').textContent = formatEuro(profit);
  document.getElementById('res-netto').textContent = formatEuro(netSellingPrice);
}

function initBABControls() {
  const inputs = [
    document.getElementById('bab-mat-overhead'),
    document.getElementById('bab-prod-overhead'),
    document.getElementById('bab-admin-overhead'),
    document.getElementById('bab-sales-overhead'),
    document.getElementById('calc-mat'),
    document.getElementById('calc-labor')
  ];

  inputs.forEach(input => {
    input.addEventListener('input', calculateBAB);
  });
}

// ==========================================
// 11. GLOBAL PROJECT STATS & SYNC
// ==========================================
function updateGlobalStats() {
  // 1. Progress circle calculation
  // Count deliverables checked vs total
  let totalDels = 0;
  let checkedDels = 0;
  phasesData.forEach(p => {
    p.deliverables.forEach(d => {
      totalDels++;
      if (d.checked) checkedDels++;
    });
  });
  const progressPercent = totalDels > 0 ? Math.round((checkedDels / totalDels) * 100) : 0;
  
  // Update progress figures
  document.getElementById('home-progress-percentage').textContent = progressPercent + '%';
  const progressCircle = document.getElementById('home-progress-circle');
  if (progressCircle) {
    // 2 * PI * r = 2 * 3.14159 * 40 = 251.2
    const circumference = 251.2;
    const offset = circumference - (progressPercent / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
  }

  // 2. Erledigt phases
  const completedPhases = phasesData.filter(p => p.status === 'done').length;
  document.getElementById('stat-phases-done').textContent = `${completedPhases} / 6`;

  // 3. Questions answered (resolved status)
  const resolvedQuestions = questionsData.filter(q => q.status === 'resolved').length;
  document.getElementById('stat-questions-count').textContent = resolvedQuestions;
}

// ==========================================
// 12. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLanguageSwitcher();
  initFaqControls();
  initBABControls();

  // Handle Reset Data
  const btnReset = document.getElementById('btn-reset-data');
  if (btnReset) {
    btnReset.addEventListener('click', (e) => {
      e.preventDefault();
      const confirmMsg = currentLanguage === 'de' 
        ? 'Möchten Sie alle eingegebenen Daten (Antworten, Nutzwertanalyse, BAB) löschen und zurücksetzen?' 
        : 'Do you want to reset all data (answers, utility analysis, BAB) to default settings?';
      if (confirm(confirmMsg)) {
        localStorage.clear();
        location.reload();
      }
    });
  }

  // Initial render
  updateLanguageUI();
});
