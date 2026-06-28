const photo = (query: string, w = 1400, h = 900) =>
  `https://source.unsplash.com/featured/${w}x${h}/?${encodeURIComponent(query)}`;

const projects = [
  { img: photo('satellite dish antenna telescope industrial', 1000, 700), title: 'ANCHOR', text: 'Transformer des innovations en réussite industrielle.', tags: 'Innovation industrielle · Spatial · Défense · Composites' },
  { img: photo('ship propeller shaft dry dock marine industry', 1000, 700), title: 'ADOUR', text: 'Structurer une acquisition créatrice de valeur.', tags: 'Industrie navale · Croissance externe' },
  { img: photo('investment committee business meeting modern office', 1000, 700), title: 'CAP200', text: "Construire une plateforme d'investissement régional.", tags: 'Investisseurs · PME · Territoires' },
  { img: photo('luxury fashion runway show', 1000, 700), title: 'GIDDY UP FASHION NIGHT', text: "Créer une marque internationale d'événementiel et de média.", tags: 'Mode · Luxe · Média · Événementiel' },
  { img: photo('modern industrial workshop robotics manufacturing', 1000, 700), title: 'NEOPOLIA', text: "Développer un écosystème industriel créateur d'opportunités.", tags: 'Industrie · Innovation · Réseau' },
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
          <nav className="desktop-nav">
            <a href="#approche">Notre approche</a><a href="#projets">Vos projets</a><a href="#realisations">Nos réalisations</a><a href="#parcours">Qui sommes-nous ?</a><a href="#contact" className="nav-cta">Nous contacter</a>
          </nav>
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-photo" />
          <div className="hero-portrait"><img src="/laurent-gobinet-portrait.jpg" alt="Laurent Gobinet" /></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Anticiper aujourd'hui,<br />créer de la valeur demain.</h1>
              <div className="accent" />
              <p>Nous accompagnons les dirigeants de PME et d'ETI dans leurs décisions stratégiques, de la préparation jusqu'au déploiement opérationnel de leurs projets.</p>
              <div className="hero-buttons"><a className="btn primary" href="#approche">Découvrir notre approche <span>→</span></a><a className="btn secondary" href="#contact">Échanger avec nous <span>→</span></a></div>
            </div>
          </div>
        </section>
        <section id="approche" className="approach section-dark">
          <div className="container">
            <p className="section-kicker">Notre approche</p><h2>Anticiper. Structurer. Décider. Déployer.</h2>
            <div className="approach-grid">
              <article><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="8"/><path d="M32 12v8M32 44v8M12 32h8M44 32h8M40 24l12-12"/></svg><h3>Anticiper</h3><p>Préparer les décisions qui engagent l'avenir.</p></article>
              <article><svg viewBox="0 0 64 64"><path d="M32 8l16 9v18l-16 9-16-9V17z"/><path d="M32 26l16-9M32 26L16 17M32 26v18"/><path d="M16 35l16 9 16-9"/></svg><h3>Structurer</h3><p>Construire une stratégie, un financement ou une opération créatrice de valeur.</p></article>
              <article><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22"/><path d="M38 18l-8 18-4 10 10-4 18-8z"/></svg><h3>Décider</h3><p>Sécuriser chaque étape grâce à une vision indépendante et expérimentée.</p></article>
              <article><svg viewBox="0 0 64 64"><path d="M10 32h38M34 18l14 14-14 14"/><path d="M42 18l14 14-14 14"/></svg><h3>Déployer</h3><p>Transformer les décisions en résultats concrets et durables.</p></article>
            </div>
          </div>
        </section>
        <section id="projets" className="why">
          <div className="container why-grid">
            <div className="why-copy"><h2>Pourquoi APLC ?</h2><div className="accent" /><div className="why-items">
              <article><h3>Plus de 30 ans d'expérience industrielle</h3><p>La connaissance du terrain et des enjeux réels.</p></article>
              <article><h3>Une vision de dirigeant</h3><p>Nous avons occupé votre place. Nous comprenons vos enjeux et vos responsabilités.</p></article>
              <article><h3>Une approche sur mesure</h3><p>Chaque entreprise est différente. Chaque projet mérite une réponse adaptée.</p></article>
              <article><h3>De la stratégie au déploiement</h3><p>Nous restons à vos côtés jusqu'à la mise en œuvre et la création de valeur.</p></article>
              <article><h3>Un engagement total</h3><p>Confidentialité, loyauté et implication dans la réussite de vos projets.</p></article>
            </div></div>
            <div className="why-photo"><img src={photo('business meeting executives industrial office', 1200, 800)} alt="Réunion de travail stratégique" /></div>
          </div>
        </section>
        <section className="quote-band"><div className="container"><p>Créer de la valeur est une ambition.<br />La concrétiser est une méthode.</p></div></section>
        <section id="realisations" className="projects">
          <div className="container"><div className="section-title-row"><h2>Nos réalisations</h2><a href="#contact">Voir toutes les réalisations →</a></div>
            <div className="project-grid">{projects.map((p) => <article className="project-card" key={p.title}><img src={p.img} alt={p.title} /><div><h3>{p.title}</h3><p>{p.text}</p><span>{p.tags}</span></div></article>)}</div>
          </div>
        </section>
        <section id="parcours" className="career"><div className="container"><h2>Mon parcours de dirigeant</h2><div className="accent" /><div className="timeline">{timeline.map(([company, role]) => <div key={company}><strong>{company}</strong><span>{role}</span></div>)}</div><p className="career-quote">Parce que les meilleures décisions sont prises par ceux qui ont déjà vécu les enjeux de l'entreprise.</p></div></section>
        <section id="contact" className="contact-section">
          <div className="contact-photo"><img src={photo('outdoor business meeting landscape', 1200, 800)} alt="Rencontre professionnelle en extérieur" /></div>
          <div className="container contact-grid">
            <div className="contact-card"><h2>Échangeons.</h2><div className="accent" /><p>Les décisions stratégiques commencent toujours par une rencontre.</p></div>
            <div className="contact-details"><p>☎ <a href="tel:+33630255807">06 30 25 58 07</a></p><p>✉ <a href="mailto:laurent.gobinet@aplc-solutions.fr">laurent.gobinet@aplc-solutions.fr</a></p><p>⌖ Basé à Nantes<br />Interventions en France et à l'international</p><p>in <a href="https://www.linkedin.com/in/laurent-gobinet-21663930" target="_blank" rel="noopener">linkedin.com/in/laurent-gobinet</a></p></div>
            <div className="qr"><img src="/qr-contact-laurent-gobinet.png" alt="QR code contact Laurent Gobinet" /><span>Ajouter à vos contacts</span></div>
          </div>
        </section>
      </main>
      <footer><div className="container footer-grid"><img src="/logo-aplc-chrome-small.png" alt="APLC" /><p>Anticiper aujourd'hui,<br />créer de la valeur demain.</p><p>© APLC Solutions – Tous droits réservés</p></div></footer>
    </>
  );
}
