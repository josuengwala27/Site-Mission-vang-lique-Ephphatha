import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: "S'impliquer",
  description:
    'Rejoignez les équipes de service Ephphatha : trompettes, garderie, restauration, accueil, arts, sécurité, interprétation… Proposez votre engagement.',
  openGraph: {
    title: "S'impliquer",
    description: 'Rejoignez les équipes de service : accueil, garderie, arts, etc.',
    url: `${getBaseUrl()}/servir`,
  },
};

export default function ServirLayout({ children }: { children: React.ReactNode }) {
  return children;
}
