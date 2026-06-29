import './globals.css';
import type { Metadata } from 'next';

const siteUrl = 'https://aplc-solutions.fr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'APLC Solutions | Conseil aux dirigeants, M&A et croissance externe',
    template: '%s | APLC Solutions',
  },
  description: "APLC Solutions accompagne les dirigeants de PME et d'ETI dans leurs décisions stratégiques : croissance externe, acquisition, cession, levée de fonds, financement, transformation et déploiement opérationnel.",
  keywords: ['APLC Solutions','Laurent Gobinet','conseil dirigeants','conseil PME ETI','M&A','croissance externe','cession entreprise','acquisition entreprise','levée de fonds','transformation opérationnelle','conseil industriel','Nantes'],
  alternates: { canonical: siteUrl },
  icons: { icon: '/favicon.svg' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    title: 'APLC Solutions | Conseil aux dirigeants, M&A et croissance externe',
    description: "Conseil confidentiel et opérationnel auprès des dirigeants de PME et d'ETI : croissance externe, acquisition, cession, financement, transformation et exécution.",
    url: siteUrl,
    siteName: 'APLC Solutions',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/photo-hero-industrie.jpg', width: 1200, height: 630, alt: 'APLC Solutions' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'APLC Solutions',
    url: siteUrl,
    logo: `${siteUrl}/logo-aplc-original-header.png`,
    image: `${siteUrl}/photo-hero-industrie.jpg`,
    founder: { '@type': 'Person', name: 'Laurent Gobinet' },
    address: { '@type': 'PostalAddress', addressLocality: 'Nantes', addressCountry: 'FR' },
    areaServed: ['France', 'International'],
    serviceType: ['Conseil aux dirigeants','M&A','Croissance externe','Cession','Levée de fonds','Transformation opérationnelle'],
  };
  return <html lang="fr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}
