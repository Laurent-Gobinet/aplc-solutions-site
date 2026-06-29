import './globals.css';
import type { Metadata, Viewport } from 'next';

const siteUrl = 'https://aplc-solutions.fr';
const siteTitle = 'APLC Solutions | Conseil aux dirigeants, M&A et croissance externe';
const siteDescription = "APLC Solutions accompagne les dirigeants de PME et d'ETI dans leurs projets de croissance externe, acquisition, cession, levée de fonds, transformation et déploiement opérationnel.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | APLC Solutions',
  },
  description: siteDescription,
  applicationName: 'APLC Solutions',
  authors: [{ name: 'Laurent Gobinet' }],
  creator: 'APLC Solutions',
  publisher: 'APLC Solutions',
  category: 'Conseil aux dirigeants',
  keywords: [
    'APLC Solutions',
    'Laurent Gobinet',
    'conseil aux dirigeants',
    'conseil PME ETI',
    'M&A',
    'fusions acquisitions',
    'croissance externe',
    'cession entreprise',
    'transmission entreprise',
    'levée de fonds',
    'financement entreprise',
    'transformation opérationnelle',
    'conseil industriel',
    'Nantes',
    'Pays de la Loire',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo-aplc-chrome-small.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'APLC Solutions',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/logo-aplc-chrome.png',
        width: 1200,
        height: 630,
        alt: 'APLC Solutions - Conseil aux dirigeants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/logo-aplc-chrome.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#04162f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
