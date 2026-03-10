import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Donner',
  description:
    'Soutenez la Mission Évangélique Ephphatha : dons, projet bâtiment Ramonville, virement bancaire. Construire la maison de Dieu, ensemble.',
  openGraph: {
    title: 'Donner',
    description: 'Soutenez Ephphatha : dons, projet bâtiment Ramonville.',
    url: `${getBaseUrl()}/donner`,
  },
};

export default function DonnerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
