import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'BJA – Jeunesse',
  description:
    'BJA, la jeunesse d’Ephphatha : rencontres, formation et mission. Un espace pour les jeunes pour grandir dans la foi et servir ensemble.',
  openGraph: {
    title: 'BJA – Jeunesse',
    description: 'Jeunesse d’Ephphatha : rencontres, formation et mission.',
    url: `${getBaseUrl()}/bja`,
  },
};

export default function BjaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
