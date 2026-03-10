import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Calendrier',
  description:
    'Calendrier des événements et programme hebdomadaire de la Mission Évangélique Ephphatha : cultes, temps forts, camps, conventions et rendez-vous de l’année.',
  openGraph: {
    title: 'Calendrier',
    description:
      'Calendrier des événements et programme hebdomadaire : cultes, temps forts, camps et conventions.',
    url: `${getBaseUrl()}/calendrier`,
  },
};

export default function CalendrierLayout({ children }: { children: React.ReactNode }) {
  return children;
}
