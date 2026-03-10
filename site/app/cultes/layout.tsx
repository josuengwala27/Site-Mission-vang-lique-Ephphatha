import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Cultes & horaires',
  description:
    'Horaires des cultes à Toulouse : dimanche 7h30, 9h et 11h. Mardi de la décision, culte d’affermissement, vendredi des possibilités. Lieu : 14 rue Sirven.',
  openGraph: {
    title: 'Cultes & horaires',
    description:
      'Horaires des cultes à Toulouse : dimanche 7h30, 9h et 11h. Mardi de la décision, culte d’affermissement, vendredi des possibilités.',
    url: `${getBaseUrl()}/cultes`,
  },
};

export default function CultesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
