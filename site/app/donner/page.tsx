'use client';

import { FadeIn } from '@/components/FadeIn';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    title: 'Donner',
    subtitle: 'Construire la maison de Dieu, ensemble.',
    whyGive: 'Pourquoi donner ?',
    whyP1:
      "Donner n'est pas une obligation religieuse, mais une réponse d'amour et de reconnaissance envers Dieu. Les dîmes et offrandes soutiennent l'œuvre de l'Évangile et bâtissent des lieux où la présence de Dieu est manifeste.",
    whyP2:
      "Comme au temps de Moïse, l'ouvrage n'a pas été réalisé par un seul homme, mais par tout le peuple qui a participé volontairement.",
    projectTitle: 'Le projet bâtiment Ramonville',
    projectDesc: 'Un lieu stratégique au',
    projectAddress: '14 rue Sirven, 31100 Toulouse',
    projectEnd: ', actuellement en travaux. Ce bâtiment deviendra un centre spirituel pour la prière, la formation et l\'envoi.',
    bankTransfer: 'Virement bancaire',
    beneficiary: 'Bénéficiaire',
    label: 'Libellé',
    forBuilding: 'Pour le bâtiment',
    forBuildingValue: 'DON – Projet bâtiment Ramonville',
    otherWays: 'Autres façons de donner',
    cash: 'En espèces',
    cashDesc: 'paniers et enveloppes lors de chaque culte.',
    specificProjects: 'Projets spécifiques',
    specificProjectsDesc: 'il est possible de flécher un don vers un projet particulier.',
    thanks: 'Merci pour votre engagement.',
    thanksDesc: 'Que le Seigneur se souvienne de chaque semence semée dans Sa maison.',
  },
  en: {
    title: 'Give',
    subtitle: "Building God's house, together.",
    whyGive: 'Why give?',
    whyP1:
      'Giving is not a religious obligation, but a response of love and gratitude towards God. Tithes and offerings support the work of the Gospel and build places where the presence of God is manifest.',
    whyP2:
      'As in the time of Moses, the work was not accomplished by one person alone, but by all the people who contributed willingly.',
    projectTitle: 'The Ramonville building project',
    projectDesc: 'A strategic location at',
    projectAddress: '14 Sirven Street, 31100 Toulouse',
    projectEnd: ', currently under construction. This building will become a spiritual centre for prayer, training and sending.',
    bankTransfer: 'Bank transfer',
    beneficiary: 'Beneficiary',
    label: 'Reference',
    forBuilding: 'For the building',
    forBuildingValue: 'DON – Ramonville building project',
    otherWays: 'Other ways to give',
    cash: 'Cash',
    cashDesc: 'baskets and envelopes during each service.',
    specificProjects: 'Specific projects',
    specificProjectsDesc: 'you can earmark a gift for a particular project.',
    thanks: 'Thank you for your commitment.',
    thanksDesc: 'May the Lord remember every seed sown in His house.',
  },
};

export default function DonnerPage() {
  const { locale } = useI18n();
  const t = T[locale];

  return (
    <div>
      <section className="hero-page min-h-[45vh] bg-brand-primary">
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">{t.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{t.subtitle}</p>
        </div>
      </section>

      <section className="section-spacing bg-linear-to-b from-brand-primary/5 to-white">
        <div className="container-page flex flex-col gap-14">
          <FadeIn className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
            <div className="flex flex-wrap items-start gap-6 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-8 md:px-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/20">
                <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-2xl italic text-brand-primary sm:text-3xl">{t.whyGive}</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-gray-600">{t.whyP1}</p>
                <p className="mt-4 text-[17px] leading-relaxed text-gray-600">{t.whyP2}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="overflow-hidden rounded-3xl border-2 border-brand-primary/10 bg-white shadow-lg">
            <div className="flex flex-wrap items-start gap-6 p-8 md:p-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10">
                <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-semibold text-brand-primary">{t.projectTitle}</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
                  {t.projectDesc} <span className="font-semibold text-gray-800">{t.projectAddress}</span>
                  {t.projectEnd}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <div className="flex items-center gap-4 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-transparent px-8 py-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h6.21c.968 0 1.815-.726 2.165-1.724l.375-1.124c.2-.576.665-.976 1.275-.976h1.94c.61 0 1.075.4 1.275.976l.375 1.124c.35.998 1.197 1.724 2.165 1.724h6.21c.968 0 1.815-.726 2.165-1.724l.375-1.124c.2-.576.665-.976 1.275-.976h1.94c.61 0 1.075.4 1.275.976l.375 1.124c.35.998 1.197 1.724 2.165 1.724H21" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{t.bankTransfer}</h3>
              </div>
              <div className="space-y-3 p-8">
                <p className="text-[16px] text-gray-600"><span className="font-semibold text-gray-800">{t.beneficiary} :</span> Mission Évangélique Ephphatha</p>
                <p className="text-[16px] text-gray-600"><span className="font-semibold text-gray-800">IBAN :</span> FR76 1005 7192 1300 0210 5630 154</p>
                <p className="text-[16px] text-gray-600"><span className="font-semibold text-gray-800">BIC :</span> CMCIFRPP</p>
                <p className="text-[16px] text-gray-600"><span className="font-semibold text-gray-800">{t.label} :</span> DON</p>
                <p className="mt-4 text-[14px] text-gray-500">{t.forBuilding} : <span className="font-semibold text-gray-700">{t.forBuildingValue}</span>.</p>
              </div>
            </FadeIn>

            <FadeIn delay={100} className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <div className="flex items-center gap-4 border-b border-gray-100 bg-linear-to-r from-brand-accent/5 to-transparent px-8 py-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.879 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{t.otherWays}</h3>
              </div>
              <div className="space-y-4 p-8">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.879 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800">{t.cash}</p>
                    <p className="text-[15px] text-gray-600">{t.cashDesc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800">{t.specificProjects}</p>
                    <p className="text-[15px] text-gray-600">{t.specificProjectsDesc}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="overflow-hidden rounded-3xl bg-brand-primary text-white shadow-xl">
            <div className="flex flex-col items-center justify-center gap-6 px-8 py-12 text-center md:flex-row md:gap-10 md:py-14">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <svg className="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{t.thanks}</h2>
                <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-white/80">{t.thanksDesc}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
