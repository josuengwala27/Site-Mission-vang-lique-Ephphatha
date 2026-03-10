'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    heroTitle: 'Cultes & temps forts',
    heroSub: 'Tout au long de la semaine, nous nous rassemblons pour rechercher la présence de Dieu et voir des vies transformées.',
    weekdays: 'En semaine',
    tuesdayLabel: 'Mardi – 19h ·',
    tuesdayText: 'Mardi de la décision – soirée pour poser des choix spirituels clairs.',
    wednesdayLabel: 'Mercredi – 19h ·',
    wednesdayText: "Culte d'affermissement – enseignements pour être enraciné dans la Parole.",
    fridayLabel: 'Vendredi – 19h (1/2) ·',
    fridayText: 'Vendredi de toutes les possibilités – soirée de foi et de percée.',
    sundayTitle: 'Dimanche – 3 cultes',
    sundayTimes: '7h30 · 9h00 · 11h00',
    sundayTime1: '7h30',
    sundayTime2: '9h00',
    sundayTime3: '11h00',
    nationsLabel: 'Culte des nations',
    nationsText: "– une nation mise à l'honneur.",
    greatInvLabel: 'Culte de la grande invitation',
    greatInvText: '– culte orienté vers ceux qui ne connaissent pas encore Christ.',
    familyLabel: 'Culte des familles',
    familyText: '– un temps pour les couples, les enfants et les générations.',
    celebrationLabel: 'Culte de célébration',
    celebrationText: '– pour témoigner et remercier Dieu.',
    addressTitle: 'Adresse des cultes',
    addressText1: 'Tous nos cultes ont lieu au',
    addressPlace1: '14 rue Sirven, 31100 Toulouse',
    addressText2: 'Le siège se trouve au',
    addressPlace2: '14 rue Sirven, 31100 Toulouse',
    kidsTitle: 'Enfants & nouveaux',
    kidsText1: 'Les enfants à partir de 5 ans sont accueillis dans le programme',
    kidsProgram: '« Jésus pour les tout-petits »',
    kidsText1End: ', dans un cadre sécurisé.',
    kidsText2: 'Tous les trois mois, un temps spécial',
    kidsWelcome: '« Welcome to Ephphatha »',
    kidsText2End: 'est organisé pour les nouveaux.',
    prayerSupra: 'Chaque jour, chaque nuit',
    prayerTitle: 'Temps de prière',
    morningPrayerTitle: 'Matinale de prière',
    morningPrayerSchedule: 'Lundi – Samedi · 5h – 7h',
    morningPrayerDesc: 'Sur Zoom, chaque matin, pour commencer la journée dans la présence de Dieu.',
    denomWatchTitle: 'Veillée de la dénomination',
    denomWatchSchedule: 'Mardi · 0h – 3h',
    denomWatchDesc: "Un temps de veillée consacré à l'intercession pour l'ensemble de la dénomination.",
    familyWatchTitle: "Veillée des familles d'églises",
    familyWatchSchedule: 'Mercredi & Jeudi · 0h – 3h',
    familyWatchDesc: "Prière pour les familles, les foyers et les cellules de l'église.",
    staffWatchTitle: 'Veillée du staff',
    staffWatchSchedule: 'Samedi · 22h – 0h',
    staffWatchDesc: "L'équipe dirigeante se réunit pour prier et chercher la direction du Seigneur.",
    prayerFooter: 'Contactez-nous pour recevoir le lien Zoom de la matinale de prière.',
    patrolSupra: 'Aller vers ceux qui ne connaissent pas encore Jésus',
    patrolTitle: "Patrouilles d'évangélisation",
    morningPatrol: 'Matinale',
    morningPatrolTime: '7h30 – 8h30',
    morningPatrolDesc: 'Sortie matinale pour toucher les passants avant le début de leur journée.',
    dayPatrol: 'De jour',
    dayPatrolTime: '10h – 19h',
    dayPatrolDesc: 'Dans les rues, les parcs, les marchés : aller à la rencontre de la ville.',
    nightPatrol: 'De nuit',
    nightPatrolTime: '19h – 0h',
    nightPatrolDesc: "Jeudi & vendredi jusqu'à 3h. Jours de culte : 22h – 0h.",
  },
  en: {
    heroTitle: 'Services & highlights',
    heroSub: 'Throughout the week, we gather to seek the presence of God and see lives transformed.',
    weekdays: 'Weekdays',
    tuesdayLabel: 'Tuesday – 7 PM ·',
    tuesdayText: 'Tuesday of Decision – an evening to make clear spiritual choices.',
    wednesdayLabel: 'Wednesday – 7 PM ·',
    wednesdayText: 'Strengthening Service – teachings to be rooted in the Word.',
    fridayLabel: 'Friday – 7 PM (bi-weekly) ·',
    fridayText: 'Friday of All Possibilities – an evening of faith and breakthrough.',
    sundayTitle: 'Sunday – 3 services',
    sundayTimes: '7:30 AM · 9:00 AM · 11:00 AM',
    sundayTime1: '7:30 AM',
    sundayTime2: '9:00 AM',
    sundayTime3: '11:00 AM',
    nationsLabel: 'Nations Service',
    nationsText: '– a nation is honoured.',
    greatInvLabel: 'Great Invitation Service',
    greatInvText: '– a service geared towards those who do not yet know Christ.',
    familyLabel: 'Family Service',
    familyText: '– a time for couples, children and generations.',
    celebrationLabel: 'Celebration Service',
    celebrationText: '– to testify and give thanks to God.',
    addressTitle: 'Service address',
    addressText1: 'All our services take place at',
    addressPlace1: '14 Sirven Street, 31100 Toulouse',
    addressText2: 'Our headquarters are located at',
    addressPlace2: '14 Sirven Street, 31100 Toulouse',
    kidsTitle: 'Children & newcomers',
    kidsText1: 'Children aged 5 and above are welcomed in the',
    kidsProgram: '"Jesus for Little Ones"',
    kidsText1End: ' programme, in a safe environment.',
    kidsText2: 'Every three months, a special',
    kidsWelcome: '"Welcome to Ephphatha"',
    kidsText2End: 'event is organised for newcomers.',
    prayerSupra: 'Every day, every night',
    prayerTitle: 'Prayer times',
    morningPrayerTitle: 'Morning prayer',
    morningPrayerSchedule: 'Monday – Saturday · 5 AM – 7 AM',
    morningPrayerDesc: 'On Zoom, every morning, to start the day in the presence of God.',
    denomWatchTitle: 'Denomination night watch',
    denomWatchSchedule: 'Tuesday · 12 AM – 3 AM',
    denomWatchDesc: 'A night watch dedicated to intercession for the entire denomination.',
    familyWatchTitle: 'Church families night watch',
    familyWatchSchedule: 'Wednesday & Thursday · 12 AM – 3 AM',
    familyWatchDesc: 'Prayer for families, households and church cells.',
    staffWatchTitle: 'Staff night watch',
    staffWatchSchedule: 'Saturday · 10 PM – 12 AM',
    staffWatchDesc: "The leadership team gathers to pray and seek the Lord's direction.",
    prayerFooter: 'Contact us to receive the Zoom link for morning prayer.',
    patrolSupra: "Reaching those who don't yet know Jesus",
    patrolTitle: 'Evangelism patrols',
    morningPatrol: 'Morning',
    morningPatrolTime: '7:30 AM – 8:30 AM',
    morningPatrolDesc: 'Morning outing to reach passers-by before their day begins.',
    dayPatrol: 'Daytime',
    dayPatrolTime: '10 AM – 7 PM',
    dayPatrolDesc: 'In the streets, parks, markets: going out to meet the city.',
    nightPatrol: 'Night-time',
    nightPatrolTime: '7 PM – 12 AM',
    nightPatrolDesc: 'Thursday & Friday until 3 AM. Service days: 10 PM – 12 AM.',
  },
};

export default function CultesPage() {
  const { locale } = useI18n();
  const t = T[locale];

  return (
    <div>
      <section className="hero-page min-h-[55vh]">
        <Image src="/carousel/b.jpg" alt="Louange et adoration – Ephphatha" fill className="object-cover" priority />
        <div className="hero-overlay" />
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {t.heroSub}
          </p>
        </div>
      </section>

      <section className="section-spacing bg-linear-to-b from-brand-primary/5 to-white">
        <div className="container-page flex flex-col gap-14">
          {/* Ligne 1 – DIMANCHE sur toute la largeur */}
          <FadeIn>
            <div className="overflow-hidden rounded-3xl bg-brand-primary text-white shadow-xl">
              <div className="bg-brand-primary/90 px-8 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">{t.sundayTitle}</p>
                <div className="mt-4 flex flex-wrap items-baseline gap-3 gap-y-1">
                  <span className="font-display text-4xl italic sm:text-5xl">{t.sundayTime1}</span>
                  <span className="text-2xl text-white/60">·</span>
                  <span className="font-display text-4xl italic sm:text-5xl">{t.sundayTime2}</span>
                  <span className="text-2xl text-white/60">·</span>
                  <span className="font-display text-4xl italic sm:text-5xl">{t.sundayTime3}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
                <div className="flex gap-4 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/20">
                    <svg className="h-5 w-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.nationsLabel}</p>
                    <p className="mt-0.5 text-sm text-white/70">{t.nationsText}</p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/20">
                    <svg className="h-5 w-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-6-1.572m0-2.57a9.063 9.063 0 01-2.347-3.769 9.094 9.094 0 00-2.347 3.769M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21m0-2.57a9.063 9.063 0 01-2.347-3.769 9.094 9.094 0 00-2.347 3.769" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.greatInvLabel}</p>
                    <p className="mt-0.5 text-sm text-white/70">{t.greatInvText}</p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/20">
                    <svg className="h-5 w-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-6-1.572M3 9.75a9.094 9.094 0 003.741.479 3 3 0 004.682-2.72m-.94 3.198l-.001.031A9.094 9.094 0 0112 15.75M3 9.75a9.063 9.063 0 012.347-3.769 9.094 9.094 0 00-2.347 3.769M21 9.75a9.063 9.063 0 01-2.347 3.769 9.094 9.094 0 00-2.347-3.769M21 9.75a9.094 9.094 0 01-3.741.479 3 3 0 00-4.682 2.72m.94 3.198l.001.031c0 .225.012.447.037.666A11.944 11.944 0 0112 15.75" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.familyLabel}</p>
                    <p className="mt-0.5 text-sm text-white/70">{t.familyText}</p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/20">
                    <svg className="h-5 w-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.celebrationLabel}</p>
                    <p className="mt-0.5 text-sm text-white/70">{t.celebrationText}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>{t.addressText1} <strong className="text-gray-700">{t.addressPlace1}</strong></span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
                <span>{t.addressText2} <strong className="text-gray-700">{t.addressPlace2}</strong></span>
              </span>
            </p>
          </FadeIn>

          {/* Ligne 2 – EN SEMAINE sur toute la largeur, 3 blocs centrés */}
          <FadeIn delay={100}>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/80">{t.weekdays}</p>
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-accent/30 bg-linear-to-br from-amber-50 to-white p-6 shadow-md transition hover:border-brand-accent/60 hover:shadow-lg">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-accent/10" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/20">
                  <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                </div>
                <p className="mt-4 text-xl font-bold text-brand-primary">19h</p>
                <p className="mt-1 font-semibold text-gray-800">{locale === 'fr' ? 'Mardi' : 'Tuesday'}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{t.tuesdayText}</p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-primary/20 bg-linear-to-br from-brand-light to-white p-6 shadow-md transition hover:border-brand-primary/40 hover:shadow-lg">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-primary/5" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                  <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                </div>
                <p className="mt-4 text-xl font-bold text-brand-primary">19h</p>
                <p className="mt-1 font-semibold text-gray-800">{locale === 'fr' ? 'Mercredi' : 'Wednesday'}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{t.wednesdayText}</p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-accent/30 bg-linear-to-br from-amber-50 to-white p-6 shadow-md transition hover:border-brand-accent/60 hover:shadow-lg">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-accent/10" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/20">
                  <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.643 8.07 8.25 8.25 0 0112 3z" /></svg>
                </div>
                <p className="mt-4 text-xl font-bold text-brand-primary">19h <span className="text-sm font-normal text-gray-500">(1/2)</span></p>
                <p className="mt-1 font-semibold text-gray-800">{locale === 'fr' ? 'Vendredi' : 'Friday'}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{t.fridayText}</p>
              </div>
            </div>
          </FadeIn>

          {/* Ligne 3 – ENFANTS & NOUVEAUX sur toute la largeur, design pro + icônes */}
          <FadeIn delay={150}>
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <div className="border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-5">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-brand-primary">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/20">
                    <svg className="h-5 w-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                  </span>
                  {t.kidsTitle}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-px bg-gray-100 md:grid-cols-2">
                <div className="flex gap-5 bg-white p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100">
                    <svg className="h-7 w-7 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-7.5v.75" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      <span className="text-brand-primary">{t.kidsProgram}</span>
                    </p>
                    <p className="mt-2 text-[16px] leading-relaxed text-gray-600">
                      {t.kidsText1}{t.kidsText1End}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 bg-white p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10">
                    <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      <span className="text-brand-primary">{t.kidsWelcome}</span>
                    </p>
                    <p className="mt-2 text-[16px] leading-relaxed text-gray-600">
                      {t.kidsText2} <span className="font-semibold text-brand-primary">{t.kidsWelcome}</span> {t.kidsText2End}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2l2 3.5-2 3zm0-18V0h20v2H20v2l-2-3.5L20 2.5z\' fill=\'%23fff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
        <div className="container-page section-spacing relative">
          <FadeIn className="space-y-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
                {t.prayerSupra}
              </p>
              <h2 className="font-display mt-3 text-3xl italic text-white sm:text-4xl lg:text-5xl">
                {t.prayerTitle}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/20">
                    <svg className="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t.morningPrayerTitle}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-accent">{t.morningPrayerSchedule}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/60">{t.morningPrayerDesc}</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/20">
                    <svg className="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t.denomWatchTitle}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-accent">{t.denomWatchSchedule}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/60">{t.denomWatchDesc}</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/20">
                    <svg className="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t.familyWatchTitle}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-accent">{t.familyWatchSchedule}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/60">{t.familyWatchDesc}</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/20">
                    <svg className="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t.staffWatchTitle}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-accent">{t.staffWatchSchedule}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/60">{t.staffWatchDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-[15px] text-white/40">
              {t.prayerFooter}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <FadeIn className="space-y-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
                {t.patrolSupra}
              </p>
              <h2 className="font-display mt-3 text-3xl italic text-brand-primary sm:text-4xl lg:text-5xl">
                {t.patrolTitle}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-amber-50 to-white p-8">
                <div className="absolute -right-4 -top-4 text-[80px] leading-none text-brand-accent/10">
                  &#9728;
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">{t.morningPatrol}</p>
                <p className="mt-2 text-2xl font-bold text-gray-800">{t.morningPatrolTime}</p>
                <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
                  {t.morningPatrolDesc}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-brand-light to-white p-8">
                <div className="absolute -right-4 -top-4 text-[80px] leading-none text-brand-primary/10">
                  &#9788;
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">{t.dayPatrol}</p>
                <p className="mt-2 text-2xl font-bold text-gray-800">{t.dayPatrolTime}</p>
                <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
                  {t.dayPatrolDesc}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-purple-50 to-white p-8">
                <div className="absolute -right-4 -top-4 text-[80px] leading-none text-purple-200">
                  &#9790;
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">{t.nightPatrol}</p>
                <p className="mt-2 text-2xl font-bold text-gray-800">{t.nightPatrolTime}</p>
                <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
                  {t.nightPatrolDesc}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
