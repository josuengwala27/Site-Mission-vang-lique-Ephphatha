'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    heroAlt: 'Assemblée – Pôle formation',
    heroTitle: 'Pôle formation',
    heroSub: 'Des fondations solides pour une vie solide.',
    intro:
      "Le Pôle formation d'Ephphatha accompagne chaque croyant dans un parcours structuré, de la découverte des bases de la foi jusqu'à l'engagement dans le service et le baptême.",
    steps: [
      {
        step: 'Étape 1',
        title: "L'École des fondamentaux",
        desc: 'Accueille les nouveaux membres pour établir les fondements essentiels de la marche chrétienne.',
        details: ['Durée : 4 semaines', 'Piliers de la foi et plan du salut', 'Mémorisation de 2 versets par séance'],
        icon: 'book',
      },
      {
        step: 'Étape 2',
        title: "L'École de la Parole",
        desc: 'Immersion dans les grandes doctrines chrétiennes pour une foi inébranlable.',
        details: ['Durée : 4 semaines', 'Théologie, christologie, etc.', 'Travaux de recherche'],
        icon: 'word',
      },
      {
        step: 'Étape 3',
        title: "L'École de Baptême",
        desc: "Préparation spécifique pour sceller sa foi par l'acte solennel du baptême.",
        details: ['Durée : 4 semaines', 'Définition et importance du baptême', 'Mémorisation de 2 versets par séance'],
        icon: 'baptism',
      },
    ],
    joinTitle: 'Comment rejoindre le Pôle formation ?',
    joinDesc:
      "Les écoles sont organisées par sessions. Parles-en à ton responsable de groupe ou prends contact avec le Pôle formation lors d'un culte.",
    joinBtn: 'Nous contacter',
  },
  en: {
    heroAlt: 'Assembly – Training Centre',
    heroTitle: 'Training Centre',
    heroSub: 'Solid foundations for a solid life.',
    intro:
      'The Ephphatha Training Centre supports every believer through a structured pathway, from discovering the basics of faith to committing to service and baptism.',
    steps: [
      {
        step: 'Step 1',
        title: 'School of Fundamentals',
        desc: 'Welcomes new members to establish the essential foundations of the Christian walk.',
        details: ['Duration: 4 weeks', 'Pillars of faith and plan of salvation', 'Memorisation of 2 verses per session'],
        icon: 'book',
      },
      {
        step: 'Step 2',
        title: 'School of the Word',
        desc: 'Immersion in the great Christian doctrines for an unshakable faith.',
        details: ['Duration: 4 weeks', 'Theology, Christology, etc.', 'Research assignments'],
        icon: 'word',
      },
      {
        step: 'Step 3',
        title: 'School of Baptism',
        desc: 'Specific preparation to seal your faith through the solemn act of baptism.',
        details: ['Duration: 4 weeks', 'Definition and importance of baptism', 'Memorisation of 2 verses per session'],
        icon: 'baptism',
      },
    ],
    joinTitle: 'How to join the Training Centre?',
    joinDesc:
      'Schools are organised by sessions. Speak to your group leader or get in touch with the Training Centre during a service.',
    joinBtn: 'Contact us',
  },
} as const;

const stepIcons = {
  book: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  word: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  baptism: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0115.414-2.86c.752.565 1.406 1.24 1.943 2.018M18 18v-5.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 12.75V18" />
    </svg>
  ),
};

export default function FormationPage() {
  const { locale } = useI18n();
  const t = T[locale];

  return (
    <div>
      <section className="hero-page min-h-[55vh]">
        <Image src="/carousel/d.jpg" alt={t.heroAlt} fill className="object-cover" priority />
        <div className="hero-overlay" />
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{t.heroSub}</p>
        </div>
      </section>

      <section className="section-spacing bg-linear-to-b from-brand-primary/5 to-white">
        <div className="container-page flex flex-col gap-14">
          <FadeIn className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
            <div className="flex flex-wrap items-center gap-6 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-8 md:px-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10">
                <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <p className="text-[17px] leading-relaxed text-gray-600 md:max-w-2xl">{t.intro}</p>
            </div>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-3">
            {t.steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 80}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-md transition hover:border-brand-primary/20 hover:shadow-xl">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-accent/10" />
                  <div className="relative flex flex-1 flex-col p-8">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-lg font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary/80">{s.step}</span>
                    </div>
                    <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-primary">
                      {stepIcons[s.icon as keyof typeof stepIcons]}
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-gray-800">{s.title}</h2>
                    <p className="mt-3 flex-1 text-[16px] leading-relaxed text-gray-600">{s.desc}</p>
                    <ul className="mt-6 space-y-2 border-t border-gray-100 pt-5">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-[15px] text-gray-600">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="overflow-hidden rounded-3xl bg-brand-primary text-white shadow-xl">
              <div className="flex flex-col items-center gap-6 px-8 py-12 text-center md:flex-row md:gap-10 md:py-14 md:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <svg className="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-6-1.572m0-2.57a9.063 9.063 0 01-2.347-3.769 9.094 9.094 0 00-2.347 3.769M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{t.joinTitle}</h2>
                  <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-white/80">{t.joinDesc}</p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-primary"
                >
                  {t.joinBtn}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
