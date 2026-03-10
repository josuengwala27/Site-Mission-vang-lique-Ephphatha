'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    heroAlt: 'BJA – Bulldozer Jeunes en Action',
    heroTitle: 'Bulldozer Jeunes en Action',
    heroSub: "Le mouvement jeunesse d'Ephphatha, levé pour préparer un réveil puissant.",
    visionTitle: 'Vision',
    visionP1Start: 'Le mouvement ',
    visionP1Bold: 'BULLDOZER JEUNES EN ACTION',
    visionP1Mid: ' est le bras armé de la Mission Évangélique Ephphatha pour la nouvelle génération. Il puise sa source dans ',
    visionP1Ref: 'Luc 1.16',
    visionP1End: '.',
    visionP2:
      "Tout comme Jean a été suscité pour ramener les cœurs et préparer le chemin du Seigneur, ce mouvement se lève avec une mission claire : être le précurseur d'un réveil sans précédent au sein de la jeunesse de France.",
    visionP3Start:
      "La forme change, mais l'huile reste la même. Pour toucher cette génération, l'Église a besoin d'un instrument de force : le ",
    visionP3Bold: 'bulldozer',
    visionP3End: '.',
    propheticTitle: 'Le bulldozer, une image prophétique',
    propheticP1:
      'Un puissant engin qui aplanit le sol, démolit des structures et prépare le terrain avant une construction.',
    propheticP2Bold: 'Jean était un bulldozer en son temps.',
    propheticP2:
      ' Le BJA se lève comme une force de rupture : non pas pour subir la réalité, mais pour la transformer.',
    roleTitle: 'Rôle du bulldozer',
    roles: [
      { label: 'Aplanissement', text: 'former des jeunes solides dans la Parole.' },
      { label: 'Nettoyage', text: 'retirer les couches de culture mondaine.' },
      { label: 'Démolition', text: 'renverser les forteresses qui emprisonnent notre génération.' },
    ],
    roles2: [
      { label: 'Défrichement', text: 'une présence chrétienne impactante.' },
      { label: 'Découverte minière', text: 'déterrer les dons et talents cachés.' },
      { label: 'Génie militaire', text: 'conquérir de nouveaux territoires.' },
    ],
    valuesTitle: 'Valeurs',
    values: [
      { label: 'Sacrifice', text: 'mourir à nos envies pour porter du fruit.' },
      { label: 'Sanctification', text: 'une radicalité totale face au péché.' },
      { label: 'Honneur & obéissance', text: 'alignement derrière notre autorité spirituelle.' },
      { label: 'Prière & jeûne', text: 'source de notre puissance.' },
    ],
    valuesQuote:
      '« Un jeune bulldozer ne se mélange pas ; il impacte son milieu sans se laisser influencer. »',
    forWhoTitle: 'Pour qui ?',
    forWhoP1Start: 'La cible : ',
    forWhoP1Bold: '17 à 30 ans',
    forWhoP1End: " – ados, étudiants, jeunes professionnels en quête de sens et d'identité.",
    forWhoP2:
      "Rapproche-toi de l'équipe jeunesse lors d'un culte pour en savoir plus.",
  },
  en: {
    heroAlt: 'BJA – Bulldozer Youth in Action',
    heroTitle: 'Bulldozer Youth in Action',
    heroSub: 'The youth movement of Ephphatha, raised to prepare a powerful revival.',
    visionTitle: 'Vision',
    visionP1Start: 'The ',
    visionP1Bold: 'BULLDOZER YOUTH IN ACTION',
    visionP1Mid: ' movement is the striking arm of the Ephphatha Evangelical Mission for the new generation. It draws its source from ',
    visionP1Ref: 'Luke 1:16',
    visionP1End: '.',
    visionP2:
      'Just as John was raised to turn hearts back and prepare the way of the Lord, this movement rises with a clear mission: to be the forerunner of an unprecedented revival among the youth of France.',
    visionP3Start:
      'The form changes, but the anointing remains the same. To reach this generation, the Church needs an instrument of strength: the ',
    visionP3Bold: 'bulldozer',
    visionP3End: '.',
    propheticTitle: 'The bulldozer, a prophetic image',
    propheticP1:
      'A powerful machine that levels the ground, demolishes structures, and prepares the terrain before construction.',
    propheticP2Bold: 'John was a bulldozer in his time.',
    propheticP2:
      ' The BJA rises as a breaking force: not to endure reality, but to transform it.',
    roleTitle: 'Role of the bulldozer',
    roles: [
      { label: 'Levelling', text: 'training solid young people in the Word.' },
      { label: 'Cleansing', text: 'stripping away the layers of worldly culture.' },
      { label: 'Demolition', text: 'tearing down the strongholds that imprison our generation.' },
    ],
    roles2: [
      { label: 'Clearing', text: 'an impactful Christian presence.' },
      { label: 'Mining discovery', text: 'unearthing hidden gifts and talents.' },
      { label: 'Military engineering', text: 'conquering new territories.' },
    ],
    valuesTitle: 'Values',
    values: [
      { label: 'Sacrifice', text: 'dying to our desires to bear fruit.' },
      { label: 'Sanctification', text: 'total radicality in the face of sin.' },
      { label: 'Honour & obedience', text: 'alignment under our spiritual authority.' },
      { label: 'Prayer & fasting', text: 'the source of our power.' },
    ],
    valuesQuote:
      '"A young bulldozer does not blend in; they impact their environment without being influenced."',
    forWhoTitle: 'Who is it for?',
    forWhoP1Start: 'Target audience: ',
    forWhoP1Bold: 'ages 17 to 30',
    forWhoP1End: ' – teens, students, and young professionals seeking meaning and identity.',
    forWhoP2:
      'Reach out to the youth team during a service to find out more.',
  },
} as const;

export default function BjaPage() {
  const { locale } = useI18n();
  const t = T[locale];

  const allRoles = [...t.roles, ...t.roles2];

  return (
    <div>
      <section className="hero-page min-h-[55vh]">
        <Image src="/bja-hero.jpg" alt={t.heroAlt} fill className="object-cover" priority />
        <div className="hero-overlay" />
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
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
                  {t.visionP1Start}<span className="font-semibold text-gray-800">{t.visionP1Bold}</span>
                  {t.visionP1Mid}<span className="font-semibold text-gray-800">{t.visionP1Ref}</span>{t.visionP1End}
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-gray-600">{t.visionP2}</p>
                <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
                  {t.visionP3Start}<span className="font-semibold text-gray-800">{t.visionP3Bold}</span>{t.visionP3End}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="overflow-hidden rounded-3xl border-2 border-brand-primary/10 bg-white p-8 shadow-lg md:p-10">
            <div className="flex flex-wrap items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10">
                <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-semibold text-brand-primary">{t.propheticTitle}</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-gray-600">{t.propheticP1}</p>
                <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
                  <span className="font-semibold text-gray-800">{t.propheticP2Bold}</span>{t.propheticP2}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/80">{t.roleTitle}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allRoles.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm transition hover:border-brand-accent/30 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/20">
                    <span className="text-lg font-bold text-brand-primary">{r.label.charAt(0)}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-800">{r.label}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{r.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <div className="border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-transparent px-8 py-5">
                <h2 className="font-display text-xl italic text-brand-primary sm:text-2xl">{t.valuesTitle}</h2>
              </div>
              <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2">
                {t.values.map((v) => (
                  <div key={v.label} className="flex gap-4 bg-white p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10">
                      <svg className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{v.label}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-gray-600">{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="border-t border-gray-100 px-8 py-5 italic text-gray-500">{t.valuesQuote}</p>
            </div>
            <div className="overflow-hidden rounded-3xl border-2 border-brand-accent/20 bg-linear-to-br from-amber-50 to-white p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/20">
                <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-6-1.572m0-2.57a9.063 9.063 0 01-2.347-3.769 9.094 9.094 0 00-2.347 3.769M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21" /></svg>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-brand-primary">{t.forWhoTitle}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
                {t.forWhoP1Start}<span className="font-semibold text-gray-800">{t.forWhoP1Bold}</span>{t.forWhoP1End}
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-600">{t.forWhoP2}</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
