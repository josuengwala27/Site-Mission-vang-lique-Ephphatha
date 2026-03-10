import type { Metadata } from 'next';
import { getBaseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Prière & entretien',
  description:
    'Demande de prière ou entretien pastoral à Ephphatha. L’équipe se tient à vos côtés pour prier, écouter et accompagner avec la Parole de Dieu.',
  openGraph: {
    title: 'Prière & entretien',
    description: 'Demande de prière ou entretien pastoral. Nous sommes là pour vous.',
    url: `${getBaseUrl()}/priere-entretien`,
  },
};

export default function PriereEntretienLayout({ children }: { children: React.ReactNode }) {
  return children;
}
