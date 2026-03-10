import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Cultes & horaires',
  description:
    'Horaires des cultes à Toulouse : dimanche 7h30, 9h et 11h. Mardi Heure De la Décision (HDD), culte d’affermissement, Vendredi de Toutes les Possibilités (VTP). Lieu : 14 rue Sirven.',
  openGraph: {
    title: 'Cultes & horaires',
    description:
      'Horaires des cultes à Toulouse : dimanche 7h30, 9h et 11h. Mardi Heure De la Décision (HDD), culte d’affermissement, Vendredi de Toutes les Possibilités (VTP).',
    url: `${getBaseUrl()}/cultes`,
  },
};

export default function CultesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
