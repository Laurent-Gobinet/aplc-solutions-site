import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "APLC Solutions | Anticiper aujourd'hui, créer de la valeur demain",
  description: "APLC Solutions accompagne les dirigeants de PME et d'ETI dans leurs décisions stratégiques, de la préparation jusqu'au déploiement opérationnel.",
  metadataBase: new URL('https://aplc-solutions.fr')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
