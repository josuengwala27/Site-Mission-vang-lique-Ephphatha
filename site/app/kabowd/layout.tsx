import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Kabowd – Hommes',
  description:
    'Kabowd, le groupe des hommes d’Ephphatha : fraternité, responsabilité et vision. Rencontres et activités pour les hommes de l’église.',
  openGraph: {
    title: 'Kabowd – Hommes',
    description: 'Groupe des hommes d’Ephphatha : fraternité et vision.',
    url: `${getBaseUrl()}/kabowd`,
  },
};

export default function KabowdLayout({ children }: { children: React.ReactNode }) {
  return children;
}
