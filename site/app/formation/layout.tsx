import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Formation',
  description:
    'Pôle formation Ephphatha : trois écoles pour poser des bases solides et préparer au service. Découvrez nos parcours de formation biblique et pratique.',
  openGraph: {
    title: 'Formation',
    description:
      'Pôle formation Ephphatha : trois écoles pour poser des bases solides et préparer au service.',
    url: `${getBaseUrl()}/formation`,
  },
};

export default function FormationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
