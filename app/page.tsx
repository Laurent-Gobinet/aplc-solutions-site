const offers = [
  {
    title: 'Croissance externe & acquisition',
    text: "Qualifier les cibles, structurer l'opération, sécuriser la négociation puis organiser l'intégration opérationnelle.",
  },
  {
    title: 'Cession & transmission',
    text: "Préparer l'entreprise, clarifier l'equity story, piloter les échanges et maximiser les conditions de réalisation.",
  },
  {
    title: 'Levée de fonds & financement',
    text: 'Construire une trajectoire crédible, documenter le business plan et organiser la relation avec les investisseurs.',
  },
  {
    title: 'Transformation & performance',
    text: "Passer de la feuille de route stratégique à l'exécution terrain, avec des priorités claires et un pilotage pragmatique.",
  },
  {
    title: 'Projets industriels structurants',
    text: "Accélérer les projets combinant stratégie, opérations, financement, partenaires industriels et gouvernance.",
  },
];

const method = [
  ['01', 'Anticiper', 'Clarifier les enjeux, les risques, les leviers de valeur et les conditions de réussite avant les décisions structurantes.'],
  ['02', 'Structurer', "Formaliser une trajectoire, un financement, une opération ou un plan d'action lisible, robuste et mobilisateur."],
  ['03', 'Sécuriser', "Challenger les hypothèses, objectiver les arbitrages et préparer les parties prenantes internes ou externes."],
  ['04', 'Déployer', "Accompagner la mise en œuvre opérationnelle, le pilotage des priorités et la concrétisation de la valeur."],
];

const projects = [
  { img: '/anchor-satellite.jpg', title: 'ANCHOR', eyebrow: 'Innovation industrielle', text: 'Transformation d’une technologie brevetée en trajectoire industrielle et financière.', tags: 'Spatial · Défense · Composites' },
  { img: '/adour-helice-navire.jpg', title: 'ADOUR', eyebrow: 'Croissance externe', text: 'Structuration d’une acquisition industrielle créatrice de valeur.', tags: 'Industrie navale · Reprise · Développement' },
  { img: '/cap200-comite-investissement.jpg', title: 'CAP200', eyebrow: 'Investissement territorial', text: "Construction d'une plateforme d'investissement dédiée aux PME régionales.", tags: 'Investisseurs · PME · Territoires' },
  { img: '/giddy-up-defile.jpg', title: 'GIDDY UP', eyebrow: 'Marque internationale', text: "Création d'un modèle événementiel et média à vocation internationale.", tags: 'Mode · Luxe · Média · Événementiel' },
  { img: '/neopolia-atelier.jpg', title: 'NEOPOLIA', eyebrow: 'Écosystème industriel', text: "Développement d'opportunités collectives au sein d'un réseau industriel exigeant.", tags: 'Industrie · Innovation · Coopérations' },
];

const references = [
  { name: 'GESTAL', logo: '/ref-gestal.png', mission: 'Acquisition de la société ROMA2S en Roumanie' },
  { name: 'HALGAND', logo: '/ref-halgand.png', mission: 'Élaboration et accompagnement d’un projet de croissance via build-up' },
  { name: 'SINFONY', logo: '/ref-sinfony.png', mission: 'Accompagnement opérationnel du plan de transformation et de build-up' },
  { name: 'DIMATEX', logo: '/ref-dimatex.png', mission: 'Accompagnement d’un projet de cession' },
  { name: 'IGUANA YACHTS', logo: '/ref-iguana-yachts.png', mission: 'Accompagnement du plan stratégique' },
  { name: 'ASPIPRO', logo: '/ref-aspipro.png', mission: 'Accompagnement du plan stratégique et financier' },
];

const journey = [
  { company: 'THALES', role: 'Responsable des coopérations grands comptes', angle: 'Coopérations industrielles, grands comptes et environnements technologiques complexes.', logo: '/ref-thales.png' },
  { company: 'AIRBUS', role: 'Directeur achats filiale', angle: 'Pilotage achats, performance fournisseurs et enjeux aéronautiques exigeants.', logo: '/ref-airbus.png' },
  { company: "CHANTIERS DE L'ATLANTIQUE", role: 'Directeur achats groupe', angle: 'Achats stratégiques, grands projets industriels et chaîne de valeur navale.', logo: '/ref-chantiers.png' },
  { company: 'MANITOU GROUP', role: 'Directeur achats groupe', angle: 'Transformation achats, structuration internationale et performance opérationnelle.', logo: '/ref-manitou.png' },
  { company: 'GESTAL', role: 'Président', angle: "Direction d'ETI industrielle, croissance, gouvernance, équipes et création de valeur.", logo: '/ref-gestal.png' },
  { company: 'GEREJE CORPORATE FINANCE', role: 'Partner – Fusions & Acquisitions', angle: "Accompagnement d'opérations stratégiques, transmissions, acquisitions et levées de fonds.", logo: '/ref-gereje.png' },
  { company: 'APLC SOLUTIONS', role: 'Président – Conseil aux dirigeants', angle: 'Accompagnement de dirigeant à dirigeant, de la stratégie au déploiement opérationnel.', logo: '/logo-aplc-chrome-small.png' },
];


const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'APLC Solutions',
  url: 'https://aplc-solutions.fr',
  logo: 'https://aplc-solutions.fr/logo-aplc-chrome.png',
  image: 'https://aplc-solutions.fr/logo-aplc-chrome.png',
  founder: {
    '@type': 'Person',
    name: 'Laurent Gobinet',
    jobTitle: 'Président',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nantes',
    addressCountry: 'FR',
  },
  areaServed: ['France', 'Pays de la Loire', 'Nantes'],
  description: "Conseil aux dirigeants de PME et d'ETI en croissance externe, acquisition, cession, levée de fonds, transformation et déploiement opérationnel.",
  sameAs: ['https://www.linkedin.com/in/laurent-gobinet-21663930'],
  knowsAbout: [
    'Conseil aux dirigeants',
    'Fusions acquisitions',
    'Croissance externe',
    'Cession entreprise',
    'Levée de fonds',
    'Transformation opérationnelle',
    'Conseil industriel',
  ],
};

const insights = [
  ['Vision dirigeant', "Une décision stratégique n'est jamais seulement financière : elle engage une entreprise, des équipes, des partenaires et une trajectoire."],
  ['Exigence terrain', "Les plans robustes sont ceux qui résistent au réel : contraintes industrielles, ressources disponibles, calendrier et exécution."],
  ['Création de valeur', "La valeur se prépare en amont, se sécurise pendant l'opération et se concrétise après la décision."],
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="APLC Solutions"><img src="/logo-aplc-header.png" alt="APLC Solutions" /><span>Accélérer pour la croissance</span></a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#approche">Approche</a>
            <a href="#offre">Expertises</a>
            <a href="#realisations">Réalisations</a>
            <a href="#references">Références</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-portrait"><img src="/laurent-gobinet-portrait.jpg" alt="Laurent Gobinet, président d'APLC Solutions" /></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">APLC Solutions · Conseil aux dirigeants</p>
              <h1>Anticiper aujourd'hui,<br />créer de la valeur demain.</h1>
              <p className="hero-lead">Une approche confidentielle, exigeante et opérationnelle pour accompagner les décisions qui engagent durablement l'avenir d'une entreprise.</p>
              <p className="hero-sub">APLC Solutions intervient auprès des dirigeants de PME et d'ETI sur les sujets de croissance, acquisition, cession, financement, transformation et déploiement opérationnel.</p>
              <div className="hero-actions">
                <a className="btn primary" href="#contact">Organiser un échange <span>→</span></a>
                <a className="btn secondary" href="#approche">Découvrir l'approche <span>→</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="signature-band" aria-label="Chiffres clés">
          <div className="container signature-grid">
            <div><strong>30+</strong><span>années d'expérience industrielle</span></div>
            <div><strong>PME & ETI</strong><span>dirigeants, actionnaires et investisseurs</span></div>
            <div><strong>Stratégie → exécution</strong><span>un accompagnement jusqu'au terrain</span></div>
          </div>
        </section>

        <section id="approche" className="approach section-dark">
          <div className="container">
            <div className="section-heading centered">
              <p className="section-kicker">Notre approche</p>
              <h2>Un conseil de dirigeant à dirigeant, pensé pour les situations à fort enjeu.</h2>
              <p>APLC combine recul stratégique, expérience industrielle, compréhension des opérations et capacité à embarquer les parties prenantes.</p>
            </div>
            <div className="method-grid">{method.map(([num, title, text]) => <article key={title}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section id="offre" className="offer">
          <div className="container offer-grid">
            <div className="sticky-copy">
              <p className="section-kicker left dark">Expertises</p>
              <h2>Accompagner les décisions structurantes, avant, pendant et après l'opération.</h2>
              <p className="large">La valeur ne se limite pas à la décision. Elle se prépare, se structure, se négocie puis se déploie avec méthode.</p>
            </div>
            <div className="offer-list">{offers.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className="why">
          <div className="container why-grid">
            <div className="why-copy">
              <p className="section-kicker left">Pourquoi APLC ?</p>
              <h2>Une expérience vécue des enjeux de direction.</h2>
              <div className="divider" />
              <div className="why-cards">
                <article><h3>Recul stratégique</h3><p>Un regard indépendant pour clarifier les options, challenger les hypothèses et objectiver les arbitrages.</p></article>
                <article><h3>Culture industrielle</h3><p>Une compréhension concrète des opérations, des achats, de la performance, des équipes et des chaînes de valeur.</p></article>
                <article><h3>Exécution opérationnelle</h3><p>Un accompagnement qui ne s'arrête pas au diagnostic et reste mobilisé jusqu'à la mise en œuvre.</p></article>
              </div>
            </div>
            <figure className="why-photo"><img src="/pourquoi-aplc-reunion.jpg" alt="Réunion de travail stratégique" /></figure>
          </div>
        </section>

        <section className="quote-band"><div className="container"><p>Créer de la valeur est une ambition.<br />La concrétiser est une méthode.</p></div></section>

        <section id="realisations" className="projects">
          <div className="container">
            <div className="section-title-row">
              <div><p className="section-kicker left dark">Réalisations</p><h2>Des situations concrètes, des enjeux structurants.</h2></div>
              <a href="#contact">Échanger sur votre projet →</a>
            </div>
            <div className="project-grid">{projects.map((p) => <article className="project-card" key={p.title}><img src={p.img} alt={p.title} /><div><span className="project-eyebrow">{p.eyebrow}</span><h3>{p.title}</h3><p>{p.text}</p><small>{p.tags}</small></div></article>)}</div>
          </div>
        </section>

        <section id="references" className="references">
          <div className="container">
            <p className="section-kicker">Références conseil</p>
            <h2>Quelques exemples de dossiers accompagnés en M&A, stratégie et transformation.</h2>
            <div className="ref-grid">{references.map((r) => <article className="ref-logo-card" key={r.name}><div className="ref-logo"><img src={r.logo} alt={r.name} /></div><p>{r.mission}</p></article>)}</div>
          </div>
        </section>

        <section id="parcours" className="career">
          <div className="container">
            <div className="career-head">
              <div><p className="section-kicker left">Parcours du dirigeant</p><h2>Une double expérience de direction industrielle et de conseil stratégique.</h2></div>
              <p>Plus de trente années au cœur d'organisations industrielles, puis aux côtés de dirigeants engagés dans des opérations de croissance, financement, acquisition, cession ou transformation.</p>
            </div>
            <div className="journey">{journey.map((step) => <article className="journey-card" key={step.company}><div className="journey-logo"><img src={step.logo} alt={step.company} /></div><div className="journey-content"><h3>{step.company}</h3><strong>{step.role}</strong><p>{step.angle}</p></div></article>)}</div>
          </div>
        </section>

        <section className="insights">
          <div className="container">
            <p className="section-kicker">Regards de dirigeant</p>
            <h2>Trois convictions au service des décisions sensibles.</h2>
            <div className="insight-grid">{insights.map(([title, text]) => <article key={title}><span>{title}</span><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container"><h2>Vous préparez une décision stratégique ?</h2><p>Prenons une heure pour comprendre votre projet, vos enjeux et les conditions de réussite.</p><a className="btn primary" href="#contact">Demander un premier échange <span>→</span></a></div>
        </section>

        <section id="contact" className="contact-section">
          <figure className="contact-photo"><img src="/contact-rencontre.jpg" alt="Rencontre professionnelle" /></figure>
          <div className="container contact-grid">
            <div className="contact-card"><p className="section-kicker left">Contact</p><h2>Échangeons en toute confidentialité.</h2><div className="divider" /><p>Vous préparez une décision structurante ? APLC Solutions vous accompagne dans la clarification, la structuration et la mise en œuvre.</p></div>
            <div className="contact-details"><p><span>Téléphone</span><a href="tel:+33630255807">06 30 25 58 07</a></p><p><span>Email</span><a href="mailto:laurent.gobinet@aplc-solutions.fr">laurent.gobinet@aplc-solutions.fr</a></p><p><span>Implantation</span>Basé à Nantes<br />Interventions en France et à l'international</p><p><span>LinkedIn</span><a href="https://www.linkedin.com/in/laurent-gobinet-21663930" target="_blank" rel="noopener">linkedin.com/in/laurent-gobinet</a></p><a className="mail-cta" href="mailto:laurent.gobinet@aplc-solutions.fr?subject=Premier%20échange%20APLC%20Solutions">Envoyer un message</a></div>
            <div className="qr"><img src="/qr-contact-laurent-gobinet.png" alt="QR code contact Laurent Gobinet" /><span>Ajouter à vos contacts</span></div>
          </div>
        </section>
      </main>

      <footer><div className="container footer-grid"><img src="/logo-aplc-chrome-small.png" alt="APLC" /><p>Anticiper aujourd'hui,<br />créer de la valeur demain.</p><p>© APLC Solutions – aplc-solutions.fr</p></div></footer>
    </>
  );
}
