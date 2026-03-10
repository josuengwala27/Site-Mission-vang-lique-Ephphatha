import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et protection des données personnelles du site Mission Évangélique Ephphatha. RGPD, cookies, droits des utilisateurs.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Politique de confidentialité',
    description: 'Protection des données et RGPD – Mission Évangélique Ephphatha.',
    url: `${getBaseUrl()}/politique-confidentialite`,
  },
};

export default function PolitiqueConfidentialiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
