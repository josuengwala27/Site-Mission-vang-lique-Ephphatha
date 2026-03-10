import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez la Mission Évangélique Ephphatha : 14 rue Sirven, 31100 Toulouse. Téléphone, email et formulaire de contact. Une question, un besoin de prière ?',
  openGraph: {
    title: 'Contact',
    description: 'Contactez Ephphatha : adresse, téléphone, formulaire. Toulouse.',
    url: `${getBaseUrl()}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
