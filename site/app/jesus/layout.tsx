import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Jésus',
  description:
    'Découvrir Jésus et le message de l’Évangile. Qui est Jésus, pourquoi croire ? Premiers pas dans la foi avec la Mission Évangélique Ephphatha.',
  openGraph: {
    title: 'Jésus',
    description: 'Découvrir Jésus et le message de l’Évangile.',
    url: `${getBaseUrl()}/jesus`,
  },
};

export default function JesusLayout({ children }: { children: React.ReactNode }) {
  return children;
}
