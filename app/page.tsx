const photo = (query: string, w = 1400, h = 900) =>
  `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(query)}`;

const projects = [
  { img: '/photo-anchor.jpg', title: 'ANCHOR', text: 'Transformer des innovations en réussite industrielle.', tags: 'Innovation industrielle · Spatial · Défense · Composites' },
  { img: '/photo-adour.jpg', title: 'ADOUR', text: 'Structurer une acquisition créatrice de valeur.', tags: 'Industrie navale · Croissance externe' },
  { img: '/photo-cap200.jpg', title: 'CAP200', text: "Construire une plateforme d'investissement régional.", tags: 'Investisseurs · PME · Territoires' },
  { img: '/photo-giddy.jpg', title: 'GIDDY UP FASHION NIGHT', text: "Créer une marque internationale d'événementiel et de média.", tags: 'Mode · Luxe · Média · Événementiel' },
  { img: '/photo-neopolia.jpg', title: 'NEOPOLIA', text: "Développer un écosystème industriel créateur d'opportunités.", tags: 'Industrie · Innovation · Réseau' },
];

const issues = [
  ['Acquisition', "Sécuriser l'opération et réussir l'intégration."],
  ['Cession', "Préparer l'entreprise et maximiser la valeur."],
  ['Levée de fonds', "Structurer l'opération et piloter les échanges investisseurs."],
  ['Croissance externe', "Construire, financer et déployer le projet."],
  ['Transformation industrielle', "Passer de la stratégie à l'exécution."],
  ['Réorganisation', "Mobiliser les équipes et sécuriser la mise en œuvre."],
];

const references = [
  { name: 'Airbus', logo: '/ref-airbus.png' },
  { name: 'Thales', logo: '/ref-thales.png' },
  { name: 'Manitou Group', logo: '/ref-manitou.png' },
  { name: "Chantiers de l'Atlantique", logo: '/ref-chantiers.png' },
  { name: 'Gestal', logo: '/ref-gestal.png' },
  { name: 'Gereje Corporate Finance', logo: '/ref-gereje.png' },
];


const insights = [
  ['Transmission', "Préparer une cession ne commence pas au moment de vendre. Elle se construit en amont."],
  ['Acquisition', "La réussite d'une acquisition se joue autant après le closing que pendant la négociation."],
  ['Levée de fonds', "Un investisseur finance une trajectoire crédible, pas seulement une ambition."],
];

const timeline = [
  ['THALES', 'Responsable des Coopérations Grands Comptes'],
  ['AIRBUS', 'Directeur Achats Filiale'],
  ["CHANTIERS DE L'ATLANTIQUE", 'Directeur Achats Groupe'],
  ['MANITOU', 'Directeur Achats Groupe'],
  ['GESTAL', 'Président'],
  ['GEREJE', 'Partner'],
  ['APLC', 'Président'],
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top"><img src="/logo-aplc-chrome.png" alt="APLC" /><span>Accélérer pour la Croissance</span></a>
          <nav className="desktop-nav"><a href="#approche">Notre approche</a><a href="#enjeux">Vos enjeux</a><a href="#realisations">Réalisations</a><a href="#references">Références</a><a href="#parcours">Qui sommes-nous ?</a><a href="#contact" className="nav-cta">Nous contacter</a></nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-photo" />
          <div className="hero-portrait"><img src="/laurent-gobinet-portrait.jpg" alt="Laurent Gobinet" /></div>
          <div className="container hero-grid"><div className="hero-copy">
            <p className="eyebrow">APLC Solutions</p>
            <h1>Anticiper aujourd'hui,<br />créer de la valeur demain.</h1>
            <div className="accent" />
            <p className="hero-lead">Une approche sur mesure, de dirigeant à dirigeant, pour accompagner les décisions qui engagent durablement l'avenir d'une entreprise.</p>
            <p className="hero-sub">De la réflexion stratégique au déploiement opérationnel, APLC accompagne les dirigeants de PME et d'ETI dans leurs projets de croissance, financement, acquisition, cession et transformation.</p>
            <div className="hero-buttons"><a className="btn primary" href="#enjeux">Identifier vos enjeux <span>→</span></a><a className="btn secondary" href="#contact">Demander un échange <span>→</span></a></div>
          </div></div>
        </section>

        <section id="approche" className="approach section-dark"><div className="container">
          <p className="section-kicker">Notre méthode</p><h2>Anticiper. Structurer. Décider. Déployer.</h2>
          <div className="approach-grid">
            <article><span className="num">01</span><h3>Anticiper</h3><p>Comprendre les enjeux, préparer les décisions, identifier les risques et les leviers de valeur.</p></article>
            <article><span className="num">02</span><h3>Structurer</h3><p>Construire une stratégie, un financement ou une opération claire, crédible et créatrice de valeur.</p></article>
            <article><span className="num">03</span><h3>Décider</h3><p>Sécuriser les arbitrages grâce à une vision indépendante, expérimentée et ancrée dans le réel.</p></article>
            <article><span className="num">04</span><h3>Déployer</h3><p>Transformer les décisions en résultats concrets, en gardant le cap jusqu'à l'exécution.</p></article>
          </div>
        </div></section>

        <section id="enjeux" className="issues"><div className="container issues-grid">
          <div><p className="section-kicker left">Vos enjeux</p><h2>Vous préparez une décision structurante ?</h2><p className="large">APLC vous accompagne dès les premières réflexions, jusqu'à la mise en œuvre opérationnelle.</p></div>
          <div className="issue-list">{issues.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section className="why"><div className="container why-grid">
          <div className="why-copy"><h2>Pourquoi APLC ?</h2><div className="accent" /><div className="why-cards">
            <article><h3>30 ans d'expérience industrielle</h3><p>Parce que les meilleures décisions sont celles qui intègrent la réalité du terrain.</p></article>
            <article><h3>Une vision de dirigeant</h3><p>Nous parlons le même langage que les dirigeants que nous accompagnons.</p></article>
            <article><h3>De la stratégie au déploiement</h3><p>Nous restons engagés jusqu'à la concrétisation de la valeur.</p></article>
          </div></div>
          <div className="why-photo"><img src="/photo-pourquoi-aplc.jpg" alt="Réunion de travail stratégique" /></div>
        </div></section>

        <section className="quote-band"><div className="container"><p>Créer de la valeur est une ambition.<br />La concrétiser est une méthode.</p></div></section>

        <section id="realisations" className="projects"><div className="container">
          <div className="section-title-row"><div><p className="section-kicker left dark">Nos réalisations</p><h2>Des situations concrètes, des enjeux structurants.</h2></div><a href="#contact">Échanger sur votre projet →</a></div>
          <div className="project-grid">{projects.map((p) => <article className="project-card" key={p.title}><img src={p.img} alt={p.title} /><div><h3>{p.title}</h3><p>{p.text}</p><span>{p.tags}</span></div></article>)}</div>
        </div></section>

        <section id="references" className="references"><div className="container">
          <p className="section-kicker">Références & expérience</p><h2>Une expérience acquise auprès d'organisations industrielles exigeantes.</h2>
          <div className="ref-grid">{references.map((r) => <span className="ref-logo-card" key={r.name}><img src={r.logo} alt={r.name} /></span>)}</div>
        </div></section>

        <section id="parcours" className="career"><div className="container"><h2>Mon parcours de dirigeant</h2><div className="accent" /><div className="timeline">{timeline.map(([company, role]) => <div key={company}><strong>{company}</strong><span>{role}</span></div>)}</div><p className="career-quote">Parce que les meilleures décisions sont prises par ceux qui ont déjà vécu les enjeux de l'entreprise.</p></div></section>


        <section className="insights"><div className="container">
          <p className="section-kicker">Regards de dirigeant</p>
          <h2>Des analyses concrètes pour préparer les décisions qui engagent l'avenir.</h2>
          <div className="insight-grid">{insights.map(([title, text]) => <article key={title}><span>{title}</span><p>{text}</p></article>)}</div>
        </div></section>

        <section className="final-cta"><div className="container">
          <h2>Vous préparez une décision stratégique ?</h2>
          <p>Prenons une heure pour comprendre votre projet, vos enjeux et les conditions de réussite.</p>
          <a className="btn primary" href="#contact">Demander un premier échange <span>→</span></a>
        </div></section>

        <section id="contact" className="contact-section"><div className="contact-photo"><img src="/photo-contact-rencontre.jpg" alt="Rencontre professionnelle en extérieur" /></div><div className="container contact-grid"><div className="contact-card"><h2>Échangeons.</h2><div className="accent" /><p>Vous préparez une décision stratégique ? Prenons une heure pour échanger sur votre projet, en toute confidentialité.</p></div><div className="contact-details"><p>☎ <a href="tel:+33630255807">06 30 25 58 07</a></p><p>✉ <a href="mailto:laurent.gobinet@aplc-solutions.fr">laurent.gobinet@aplc-solutions.fr</a></p><p>⌖ Basé à Nantes<br />Interventions en France et à l'international</p><p>in <a href="https://www.linkedin.com/in/laurent-gobinet-21663930" target="_blank" rel="noopener">linkedin.com/in/laurent-gobinet</a></p></div><div className="qr"><img src="/qr-contact-laurent-gobinet.png" alt="QR code contact Laurent Gobinet" /><span>Ajouter à vos contacts</span></div></div></section>
      </main>

      <footer><div className="container footer-grid"><img src="/logo-aplc-chrome-small.png" alt="APLC" /><p>Anticiper aujourd'hui,<br />créer de la valeur demain.</p><p>© APLC Solutions – Tous droits réservés</p></div></footer>
    </>
  );
}
