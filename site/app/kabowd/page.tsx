'use client';

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    badge: 'Hommes 30+',
    heroTitle: 'Kabowd',
    heroSub: 'Un espace fraternel pour bâtir des hommes selon le cœur de Dieu.',
    visionTitle: 'Vision',
    visionP1Start: 'Kabowd',
    visionP1:
      " est le ministère des hommes de la Mission Évangélique Ephphatha, destiné à ceux de 30 ans et plus. Dans un monde qui brouille les repères, Kabowd appelle les hommes à se lever en tant que pères, époux, leaders et serviteurs selon le modèle de Christ.",
    visionP2Start: 'Kabowd',
    visionP2:
      ' (כָּבוֹד) signifie « gloire » en hébreu. Notre désir : que chaque homme reflète la gloire de Dieu dans sa famille, son travail et sa communauté.',
    pillarTitle: 'Nos piliers',
    pillar1Label: 'Identité',
    pillar1: 'comprendre qui nous sommes en Christ.',
    pillar2Label: 'Responsabilité',
    pillar2: 'assumer notre rôle dans le foyer et la société.',
    pillar3Label: 'Fraternité',
    pillar3: 'marcher ensemble, se soutenir, se défier.',
    pillar4Label: 'Service',
    pillar4: 'impacter la cité par des actes concrets.',
    card1Title: 'Parole & prière',
    card1Desc: "Des temps d'étude biblique et d'intercession dédiés aux hommes, pour grandir dans la connaissance de Dieu.",
    card2Title: 'Mentorat',
    card2Desc: 'Un accompagnement fraternel pour avancer dans chaque saison de vie avec sagesse et maturité.',
    card3Title: 'Événements',
    card3Desc: 'Retraites, petits-déjeuners et sorties pour forger des liens authentiques entre frères.',
    ctaTitle: 'Rejoins Kabowd',
    ctaDesc: "Rapproche-toi d'un responsable lors d'un culte ou contacte-nous pour rejoindre le groupe.",
    ctaBtn: 'Nous contacter',
  },
  en: {
    badge: 'Men 30+',
    heroTitle: 'Kabowd',
    heroSub: 'A brotherhood space to build men after the heart of God.',
    visionTitle: 'Vision',
    visionP1Start: 'Kabowd',
    visionP1:
      " is the men's ministry of the Ephphatha Evangelical Mission, for those aged 30 and over. In a world that blurs landmarks, Kabowd calls men to rise as fathers, husbands, leaders and servants after the model of Christ.",
    visionP2Start: 'Kabowd',
    visionP2:
      ' (כָּבוֹד) means "glory" in Hebrew. Our desire: that every man reflects the glory of God in his family, his work and his community.',
    pillarTitle: 'Our pillars',
    pillar1Label: 'Identity',
    pillar1: 'understanding who we are in Christ.',
    pillar2Label: 'Responsibility',
    pillar2: 'embracing our role in the home and in society.',
    pillar3Label: 'Brotherhood',
    pillar3: 'walking together, supporting and challenging one another.',
    pillar4Label: 'Service',
    pillar4: 'impacting the city through concrete actions.',
    card1Title: 'Word & prayer',
    card1Desc: 'Bible study and intercession times dedicated to men, to grow in the knowledge of God.',
    card2Title: 'Mentoring',
    card2Desc: 'Brotherly support to move forward in every season of life with wisdom and maturity.',
    card3Title: 'Events',
    card3Desc: 'Retreats, breakfasts and outings to forge authentic bonds between brothers.',
    ctaTitle: 'Join Kabowd',
    ctaDesc: 'Reach out to a leader during a service or contact us to join the group.',
    ctaBtn: 'Contact us',
  },
} as const;

export default function KabowdPage() {
  const { locale } = useI18n();
  const t = T[locale];

  const pillars = [
    { label: t.pillar1Label, text: t.pillar1, icon: 'identity' },
    { label: t.pillar2Label, text: t.pillar2, icon: 'responsibility' },
    { label: t.pillar3Label, text: t.pillar3, icon: 'brotherhood' },
    { label: t.pillar4Label, text: t.pillar4, icon: 'service' },
  ];

  const cards = [
    { title: t.card1Title, desc: t.card1Desc, icon: 'word' },
    { title: t.card2Title, desc: t.card2Desc, icon: 'mentor' },
    { title: t.card3Title, desc: t.card3Desc, icon: 'events' },
  ];

  const iconSvg = (name: string) => {
    const cls = 'h-6 w-6';
    switch (name) {
      case 'identity':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
      case 'responsibility':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>;
      case 'brotherhood':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-6-1.572m0-2.57a9.063 9.063 0 01-2.347-3.769 9.094 9.094 0 00-2.347 3.769M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21" /></svg>;
      case 'service':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>;
      case 'word':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;
      case 'mentor':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.643 8.07 8.25 8.25 0 0112 3z" /></svg>;
      case 'events':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>;
      default:
        return null;
    }
  };

  return (
    <div>
      <section className="hero-page min-h-[45vh] bg-brand-primary">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative z-10 container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">{t.badge}</p>
          <h1 className="font-display mt-3 text-4xl italic text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{t.heroSub}</p>
        </div>
      </section>

      <section className="section-spacing bg-linear-to-b from-brand-primary/5 to-white">
        <div className="container-page flex flex-col gap-14">
          <FadeIn className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
            <div className="flex flex-wrap items-start gap-6 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-8 md:px-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/20">
                <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-2xl italic text-brand-primary sm:text-3xl">{t.visionTitle}</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
                  <span className="font-semibold text-gray-800">{t.visionP1Start}</span>{t.visionP1}
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
                  {locale === 'fr' ? 'Le nom ' : 'The name '}<span className="font-semibold text-gray-800">{t.visionP2Start}</span>{t.visionP2}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/80">{t.pillarTitle}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm transition hover:border-brand-primary/20 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    {iconSvg(p.icon)}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-800">{p.label}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{p.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="grid gap-8 md:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-md transition hover:border-brand-primary/20 hover:shadow-xl"
              >
                <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-primary/5" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  {iconSvg(c.icon)}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-primary">{c.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-gray-600">{c.desc}</p>
              </div>
            ))}
          </FadeIn>

          <FadeIn className="overflow-hidden rounded-3xl bg-brand-primary text-white shadow-xl">
            <div className="flex flex-col items-center gap-6 px-8 py-12 text-center md:flex-row md:gap-10 md:py-14 md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <svg className="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-6-1.572m0-2.57a9.063 9.063 0 01-2.347-3.769 9.094 9.094 0 00-2.347 3.769M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21" /></svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{t.ctaTitle}</h2>
                <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-white/80">{t.ctaDesc}</p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-primary"
              >
                {t.ctaBtn}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
