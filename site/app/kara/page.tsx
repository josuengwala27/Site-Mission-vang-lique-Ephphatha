'use client';

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    badge: 'Femmes 30+',
    heroTitle: 'Kara',
    heroSub: 'Des femmes enracinées, courageuses et porteuses de destinée.',
    visionTitle: 'Vision',
    visionP1Start: 'Kara',
    visionP1:
      " est le ministère des femmes de la Mission Évangélique Ephphatha, destiné à celles de 30 ans et plus. Kara est un espace de sororité, de guérison et d'édification où chaque femme est encouragée à marcher dans sa pleine identité en Christ.",
    visionP2Start: 'Kara',
    visionP2:
      " (קָרָא) signifie « appelée » en hébreu. Chaque femme porte un appel divin, et Kara est là pour l'aider à le découvrir et à le vivre pleinement.",
    pillarTitle: 'Nos piliers',
    pillar1Label: 'Identité',
    pillar1: 'redécouvrir notre valeur aux yeux de Dieu.',
    pillar2Label: 'Guérison',
    pillar2: 'libérer les cœurs blessés par la puissance de la Parole.',
    pillar3Label: 'Sororité',
    pillar3: 'bâtir des amitiés profondes et sincères.',
    pillar4Label: 'Influence',
    pillar4: 'être sel et lumière dans nos familles et nos milieux.',
    card1Title: 'Parole & louange',
    card1Desc: "Des temps d'adoration et d'enseignement qui touchent le cœur et renouvellent la pensée.",
    card2Title: 'Partage & prière',
    card2Desc: 'Un cercle de confiance pour prier les unes pour les autres et porter ensemble les fardeaux.',
    card3Title: 'Événements',
    card3Desc: 'Retraites, brunches et ateliers pour grandir ensemble dans la joie et la grâce.',
    ctaTitle: 'Rejoins Kara',
    ctaDesc: "Rapproche-toi d'une responsable lors d'un culte ou contacte-nous pour faire partie du groupe.",
    ctaBtn: 'Nous contacter',
  },
  en: {
    badge: 'Women 30+',
    heroTitle: 'Kara',
    heroSub: 'Rooted, courageous women who carry destiny.',
    visionTitle: 'Vision',
    visionP1Start: 'Kara',
    visionP1:
      " is the women's ministry of the Ephphatha Evangelical Mission, for those aged 30 and over. Kara is a space of sisterhood, healing and edification where every woman is encouraged to walk in her full identity in Christ.",
    visionP2Start: 'Kara',
    visionP2:
      ' (קָרָא) means "called" in Hebrew. Every woman carries a divine calling, and Kara is there to help her discover it and live it out fully.',
    pillarTitle: 'Our pillars',
    pillar1Label: 'Identity',
    pillar1: 'rediscovering our worth in the eyes of God.',
    pillar2Label: 'Healing',
    pillar2: 'setting wounded hearts free through the power of the Word.',
    pillar3Label: 'Sisterhood',
    pillar3: 'building deep and sincere friendships.',
    pillar4Label: 'Influence',
    pillar4: 'being salt and light in our families and communities.',
    card1Title: 'Word & worship',
    card1Desc: 'Worship and teaching times that touch the heart and renew the mind.',
    card2Title: 'Sharing & prayer',
    card2Desc: 'A circle of trust to pray for one another and carry burdens together.',
    card3Title: 'Events',
    card3Desc: 'Retreats, brunches and workshops to grow together in joy and grace.',
    ctaTitle: 'Join Kara',
    ctaDesc: 'Reach out to a leader during a service or contact us to join the group.',
    ctaBtn: 'Contact us',
  },
} as const;

export default function KaraPage() {
  const { locale } = useI18n();
  const t = T[locale];

  const pillars = [
    { label: t.pillar1Label, text: t.pillar1, icon: 'heart' },
    { label: t.pillar2Label, text: t.pillar2, icon: 'heal' },
    { label: t.pillar3Label, text: t.pillar3, icon: 'people' },
    { label: t.pillar4Label, text: t.pillar4, icon: 'light' },
  ];

  const cards = [
    { title: t.card1Title, desc: t.card1Desc, icon: 'worship' },
    { title: t.card2Title, desc: t.card2Desc, icon: 'prayer' },
    { title: t.card3Title, desc: t.card3Desc, icon: 'events' },
  ];

  const iconSvg = (name: string) => {
    const cls = 'h-6 w-6';
    switch (name) {
      case 'heart':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
      case 'heal':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>;
      case 'people':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-6-1.572m0-2.57a9.063 9.063 0 01-2.347-3.769 9.094 9.094 0 00-2.347 3.769M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21" /></svg>;
      case 'light':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>;
      case 'worship':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>;
      case 'prayer':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>;
      case 'events':
        return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>;
      default:
        return null;
    }
  };

  return (
    <div>
      <section className="hero-page min-h-[45vh] bg-brand-primary">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'1\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
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
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm transition hover:border-brand-accent/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-primary">
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
