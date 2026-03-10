'use client';

import { useState, useMemo } from 'react';
import {
  CALENDAR_YEAR,
  dateKey,
  calendarThemes as defaultThemes,
  specialEvents as defaultSpecialEvents,
  specialSundays as defaultSpecialSundays,
  type CalendarThemes,
  type SpecialEventsByDate,
  type SpecialSundaysByDate,
  type CalendarCategory,
} from '@/lib/calendarData';

const JOURS_FR = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const JOURS_EN = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MOIS_FR = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
];
const MOIS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

type Category = CalendarCategory;

interface CalEvent {
  title: string;
  time: string;
  category: Category;
  isSpecial?: boolean;
}

const CAT_STYLES: Record<Category, { bg: string; text: string; dot: string }> = {
  culte: { bg: 'bg-brand-primary/10', text: 'text-brand-primary', dot: 'bg-brand-primary' },
  priere: { bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-500' },
  evangelisation: { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-brand-accent' },
  autre: { bg: 'bg-gray-100', text: 'text-gray-700', dot: 'bg-gray-400' },
};

const RECURRING_FR: Record<string, CalEvent[]> = {};
const RECURRING_EN: Record<string, CalEvent[]> = {};

function buildRecurring(locale: 'fr' | 'en'): Record<string, CalEvent[]> {
  const L = locale === 'fr';
  const ev = (title: string, time: string, category: Category): CalEvent => ({ title, time, category });
  const out: Record<string, CalEvent[]> = {};
  for (let dow = 0; dow <= 6; dow++) {
    const events: CalEvent[] = [];
    if (dow >= 1 && dow <= 6) {
      events.push(ev(L ? 'Matinale de prière' : 'Morning prayer', L ? '5h – 7h (Zoom)' : '5 – 7 AM (Zoom)', 'priere'));
    }
    if (dow === 0) {
      events.push(ev(L ? 'Cultes du dimanche' : 'Sunday services', L ? '7h30 · 9h · 11h' : '7:30 · 9 · 11 AM', 'culte'));
    }
    if (dow === 2) {
      events.push(ev(L ? 'Mardi Heure De la Décision (HDD)' : 'Tuesday Hour of Decision (HDD)', '19h', 'culte'));
      events.push(ev(L ? 'Veillée dénomination' : 'Denomination watch', L ? '0h – 3h' : '12 – 3 AM', 'priere'));
    }
    if (dow === 3) {
      events.push(ev(L ? "Culte d'affermissement" : 'Strengthening Service', '19h', 'culte'));
      events.push(ev(L ? 'Veillée des familles' : 'Families watch', L ? '0h – 3h' : '12 – 3 AM', 'priere'));
    }
    if (dow === 4) {
      events.push(ev(L ? 'Veillée des familles' : 'Families watch', L ? '0h – 3h' : '12 – 3 AM', 'priere'));
    }
    if (dow === 5) {
      events.push(ev(L ? 'Vendredi de Toutes les Possibilités (VTP)' : 'Friday of All Possibilities (VTP)', L ? '19h (1×/2 sem.)' : '7 PM (bi-weekly)', 'culte'));
    }
    if (dow === 6) {
      events.push(ev(L ? 'Samedi d\'alliance' : 'Saturday of Alliance', L ? '12h – 16h' : '12 PM – 4 PM', 'evangelisation'));
      events.push(ev(L ? 'Veillée du staff' : 'Staff watch', L ? '22h – 0h' : '10 PM – 12 AM', 'priere'));
    }
    out[dow] = events;
  }
  return out;
}

function getEventsForDay(dow: number, locale: 'fr' | 'en'): CalEvent[] {
  const cache = locale === 'fr' ? RECURRING_FR : RECURRING_EN;
  if (!cache[0]) {
    const built = buildRecurring(locale);
    for (let i = 0; i <= 6; i++) cache[i] = built[i];
  }
  return cache[dow] ?? [];
}

interface CalendarViewProps {
  locale?: 'fr' | 'en';
  calendarThemes?: CalendarThemes | null;
  specialEvents?: SpecialEventsByDate | null;
  specialSundays?: SpecialSundaysByDate | null;
  calendarYear?: number;
}

const LEGEND = {
  fr: { selectDay: 'Sélectionnez un jour', noEvent: 'Aucun événement ce jour.', legend: 'Légende', cultes: 'Cultes', priere: 'Prière & veillées', evang: 'Évangélisation', autre: 'Autre', special: 'Événement spécial' },
  en: { selectDay: 'Select a day', noEvent: 'No events this day.', legend: 'Legend', cultes: 'Services', priere: 'Prayer & watches', evang: 'Evangelism', autre: 'Other', special: 'Special event' },
};

export default function CalendarView(props: CalendarViewProps = {}) {
  const {
    locale = 'fr',
    calendarThemes = defaultThemes,
    specialEvents = defaultSpecialEvents,
    specialSundays = defaultSpecialSundays,
    calendarYear = CALENDAR_YEAR,
  } = props;

  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(now.getDate());

  const daysInMonth = useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month]);
  const firstDayOffset = useMemo(() => {
    const d = new Date(year, month, 1).getDay();
    return d === 0 ? 6 : d - 1;
  }, [year, month]);
  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth();

  const monthTheme = useMemo(() => {
    if (year !== calendarYear || !calendarThemes) return null;
    return calendarThemes[locale][month] ?? null;
  }, [year, month, calendarYear, calendarThemes, locale]);

  const selectedEvents = useMemo(() => {
    if (selectedDay === null) return [];
    const key = dateKey(year, month, selectedDay);
    const dow = new Date(year, month, selectedDay).getDay();
    let events: CalEvent[] = [...getEventsForDay(dow, locale)];

    const specialSun = specialSundays?.[key];
    if (dow === 0 && specialSun) {
      events = events.filter(e => e.title !== (locale === 'fr' ? 'Cultes du dimanche' : 'Sunday services'));
      events.unshift({
        title: locale === 'fr' ? specialSun.titleFr : specialSun.titleEn,
        time: specialSun.time,
        category: 'culte',
        isSpecial: true,
      });
    }

    const daySpecials = specialEvents?.[key] ?? [];
    for (const s of daySpecials) {
      events.push({
        title: locale === 'fr' ? s.titleFr : s.titleEn,
        time: s.time ?? '',
        category: s.category,
        isSpecial: true,
      });
    }
    return events;
  }, [year, month, selectedDay, locale, specialEvents, specialSundays]);

  function prev() {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelectedDay(null);
  }

  function next() {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelectedDay(null);
  }

  const JOURS = locale === 'fr' ? JOURS_FR : JOURS_EN;
  const MOIS = locale === 'fr' ? MOIS_FR : MOIS_EN;
  const legendLabels: { label: string; dotClass: string }[] = [
    { label: LEGEND[locale].cultes, dotClass: CAT_STYLES.culte.dot },
    { label: LEGEND[locale].priere, dotClass: CAT_STYLES.priere.dot },
    { label: LEGEND[locale].evang, dotClass: CAT_STYLES.evangelisation.dot },
    { label: LEGEND[locale].autre, dotClass: CAT_STYLES.autre.dot },
    { label: LEGEND[locale].special, dotClass: 'bg-brand-accent' },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
      <div className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6">
        {monthTheme && (
          <div className="mb-6 overflow-hidden rounded-xl border border-brand-accent/20 bg-linear-to-r from-amber-50 to-brand-primary/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">{locale === 'fr' ? 'Thème du mois' : 'Theme of the month'}</p>
            <p className="mt-2 text-lg font-semibold text-gray-800">{monthTheme.theme}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-white/80 p-3">
                <p className="text-xs font-semibold text-brand-primary">{monthTheme.verseRef1}</p>
                <p className="mt-1 text-[13px] italic text-gray-600">{monthTheme.verseText1}</p>
              </div>
              <div className="rounded-lg bg-white/80 p-3">
                <p className="text-xs font-semibold text-brand-primary">{monthTheme.verseRef2}</p>
                <p className="mt-1 text-[13px] italic text-gray-600">{monthTheme.verseText2}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-6 flex items-center justify-between">
          <button onClick={prev} className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 sm:px-4">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h3 className="text-lg font-semibold text-gray-800">{MOIS[month]} {year}</h3>
          <button onClick={next} className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 sm:px-4">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {JOURS.map(j => (
            <div key={j} className="py-2 text-center text-[11px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
              {j}
            </div>
          ))}
          {Array.from({ length: firstDayOffset }).map((_, i) => (
            <div key={`e-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const date = new Date(year, month, day);
            const dow = date.getDay();
            const events = getEventsForDay(dow, locale);
            const key = year === calendarYear ? dateKey(year, month, day) : '';
            const hasSpecial = !!(specialEvents?.[key]?.length || specialSundays?.[key]);
            const isToday = isCurrentMonth && day === now.getDate();
            const isSelected = day === selectedDay;

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`relative flex flex-col items-center rounded-xl py-2 text-sm transition-all sm:py-3 ${
                  isSelected
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                    : isToday
                    ? 'bg-brand-accent/20 font-bold text-brand-primary ring-2 ring-brand-accent/40'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{day}</span>
                {(events.length > 0 || hasSpecial) && (
                  <div className="mt-1 flex flex-wrap justify-center gap-0.5">
                    {[...new Set(events.map(e => e.category))].map(cat => (
                      <span
                        key={cat}
                        className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-white/70' : CAT_STYLES[cat].dot}`}
                      />
                    ))}
                    {hasSpecial && (
                      <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-brand-accent'}`} title={locale === 'fr' ? 'Événement spécial' : 'Special event'} />
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-gray-100 bg-brand-light p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
            {selectedDay ? `${selectedDay} ${MOIS[month]} ${year}` : LEGEND[locale].selectDay}
          </p>
          {selectedDay && selectedEvents.length > 0 ? (
            <div className="mt-4 space-y-3">
              {selectedEvents.map((e, i) => (
                <div key={i} className={`rounded-xl ${CAT_STYLES[e.category].bg} p-4 ${e.isSpecial ? 'ring-1 ring-brand-accent/30' : ''}`}>
                  {e.isSpecial && (
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-brand-accent">
                      {locale === 'fr' ? 'Spécial' : 'Special'}
                    </span>
                  )}
                  <p className={`text-sm font-semibold ${CAT_STYLES[e.category].text}`}>{e.title}</p>
                  {e.time && <p className="mt-0.5 text-xs text-gray-500">{e.time}</p>}
                </div>
              ))}
            </div>
          ) : selectedDay ? (
            <p className="mt-4 text-sm text-gray-400">{LEGEND[locale].noEvent}</p>
          ) : null}
        </div>

        <div className="rounded-2xl border border-gray-100 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">{LEGEND[locale].legend}</p>
          <div className="space-y-2">
            {legendLabels.map((l, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-600">
                <span className={`h-2.5 w-2.5 rounded-full ${l.dotClass}`} />
                {l.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
