import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Kara – Femmes',
  description:
    'Kara, le groupe des femmes d’Ephphatha : communion, formation et service. Découvrez les rencontres et activités pour les femmes de l’église.',
  openGraph: {
    title: 'Kara – Femmes',
    description: 'Groupe des femmes d’Ephphatha : communion, formation et service.',
    url: `${getBaseUrl()}/kara`,
  },
};

export default function KaraLayout({ children }: { children: React.ReactNode }) {
  return children;
}
