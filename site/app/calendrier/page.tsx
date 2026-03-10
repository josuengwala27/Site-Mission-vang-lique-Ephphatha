'use client';

import { FadeIn } from '@/components/FadeIn';
import CalendarView from '@/components/CalendarView';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    heroTitle: 'Calendrier',
    heroSub: 'Les grands rendez-vous de la Mission Évangélique Ephphatha.',
    weeklySupra: 'Chaque semaine',
    weeklyTitle: 'Programme hebdomadaire',
    calendarSupra: 'Mois par mois',
    calendarTitle: 'Calendrier interactif',
    calendarDesc: 'Cliquez sur un jour pour voir les événements récurrents et les événements spéciaux de l\'année.',
    days: [
      { day: 'Lundi – Samedi', events: [{ time: '5h – 7h', label: 'Matinale de prière', sub: 'Zoom' }] },
      { day: 'Mardi', events: [{ time: '19h', label: 'Mardi de la décision', sub: '' }, { time: '0h – 3h', label: 'Veillée dénomination', sub: '' }] },
      { day: 'Mercredi', events: [{ time: '19h', label: "Culte d'affermissement", sub: '' }, { time: '0h – 3h', label: 'Veillée des familles', sub: '' }] },
      { day: 'Jeudi', events: [{ time: '0h – 3h', label: 'Veillée des familles', sub: '' }] },
      { day: 'Vendredi', events: [{ time: '19h', label: 'Vendredi des possibilités', sub: '1×/2 semaines' }] },
      { day: 'Samedi d\'alliance', events: [{ time: '12h – 16h', label: 'Samedi d\'alliance', sub: 'Chaque samedi · Évangélisation pour tous' }], highlight: true },
      { day: 'Samedi', events: [{ time: '22h – 0h', label: 'Veillée du staff', sub: '' }] },
      { day: 'Dimanche', events: [{ time: '7h30 · 9h · 11h', label: 'Cultes du dimanche', sub: '14 rue Sirven, 31100 Toulouse' }] },
    ],
  },
  en: {
    heroTitle: 'Calendar',
    heroSub: 'Key dates of the Ephphatha Evangelical Mission.',
    weeklySupra: 'Every week',
    weeklyTitle: 'Weekly programme',
    calendarSupra: 'Month by month',
    calendarTitle: 'Interactive calendar',
    calendarDesc: 'Click on a day to see recurring and special events for the year.',
    days: [
      { day: 'Monday – Saturday', events: [{ time: '5 AM – 7 AM', label: 'Morning prayer', sub: 'Zoom' }] },
      { day: 'Tuesday', events: [{ time: '7 PM', label: 'Tuesday of Decision', sub: '' }, { time: '12 AM – 3 AM', label: 'Denomination watch', sub: '' }] },
      { day: 'Wednesday', events: [{ time: '7 PM', label: 'Strengthening Service', sub: '' }, { time: '12 AM – 3 AM', label: 'Families watch', sub: '' }] },
      { day: 'Thursday', events: [{ time: '12 AM – 3 AM', label: 'Families watch', sub: '' }] },
      { day: 'Friday', events: [{ time: '7 PM', label: 'Friday of Possibilities', sub: 'Bi-weekly' }] },
      { day: 'Saturday of Alliance', events: [{ time: '12 PM – 4 PM', label: 'Saturday of Alliance', sub: 'Every Saturday · Evangelism for everyone' }], highlight: true },
      { day: 'Saturday', events: [{ time: '10 PM – 12 AM', label: 'Staff watch', sub: '' }] },
      { day: 'Sunday', events: [{ time: '7:30 · 9 · 11 AM', label: 'Sunday services', sub: '14 Sirven Street, 31100 Toulouse' }] },
    ],
  },
} as const;

export default function CalendrierPage() {
  const { locale } = useI18n();
  const t = T[locale];

  return (
    <div>
      <section className="hero-page min-h-[45vh] bg-brand-primary">
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{t.heroSub}</p>
        </div>
      </section>

      <section className="section-spacing bg-linear-to-b from-brand-primary/5 to-white">
        <div className="container-page flex flex-col gap-14">
          <FadeIn className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
            <div className="flex flex-wrap items-center gap-6 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-6 md:px-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/20">
                <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">{t.weeklySupra}</p>
                <h2 className="font-display mt-1 text-2xl italic text-brand-primary sm:text-3xl">{t.weeklyTitle}</h2>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.days.map((d) => {
              const isHighlight = 'highlight' in d && d.highlight;
              return (
                <div
                  key={d.day}
                  className={`group relative overflow-hidden rounded-2xl border-2 p-6 shadow-sm transition ${
                    isHighlight
                      ? 'border-brand-accent bg-linear-to-br from-brand-accent/25 via-amber-50 to-brand-accent/10 shadow-lg shadow-brand-accent/20 ring-2 ring-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/25'
                      : 'border-gray-100 bg-white hover:border-brand-primary/20 hover:shadow-md'
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isHighlight ? 'bg-brand-accent/30' : 'bg-brand-primary/10'}`}>
                    {isHighlight ? (
                      <svg className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                    ) : (
                      <svg className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    )}
                  </div>
                  <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.12em] ${isHighlight ? 'text-brand-primary' : 'text-brand-primary'}`}>{d.day}</p>
                  <div className="mt-3 space-y-3">
                    {d.events.map((e, i) => (
                      <div key={i}>
                        <p className={`text-[15px] font-semibold ${isHighlight ? 'text-gray-900' : 'text-gray-800'}`}>{e.time}</p>
                        <p className={`text-[14px] ${isHighlight ? 'text-gray-700' : 'text-gray-600'}`}>{e.label}</p>
                        {e.sub && <p className={`text-[12px] ${isHighlight ? 'text-brand-primary/90 font-medium' : 'text-gray-400'}`}>{e.sub}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </FadeIn>

          <FadeIn className="space-y-8">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <div className="flex flex-wrap items-center gap-6 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-transparent px-8 py-6 md:px-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10">
                  <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.25v.75H4.5c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25h2.25v.75H3.75a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H9.75v-.75h2.25c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25h-2.25z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">{t.calendarSupra}</p>
                  <h2 className="font-display mt-1 text-2xl italic text-brand-primary sm:text-3xl">{t.calendarTitle}</h2>
                  <p className="mt-2 max-w-2xl text-[15px] text-gray-500">{t.calendarDesc}</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <CalendarView locale={locale} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
