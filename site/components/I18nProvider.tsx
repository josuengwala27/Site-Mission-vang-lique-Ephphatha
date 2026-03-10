'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Locale = 'fr' | 'en';

const dictionaries = {
  fr: {
    nav: {
      cultes: 'Cultes',
      communaute: 'Communauté',
      bja_label: 'BJA – Jeunesse',
      kabowd_label: 'Kabowd – Hommes',
      kara_label: 'Kara – Femmes',
      formation: 'Formation',
      calendrier: 'Calendrier',
      contact: 'Contact',
      donner: 'Donner',
      impliquer: "S'impliquer",
      priere: 'Prière',
      jesus: 'Jésus',
    },
    footer: {
      tagline: "Une église de la destinée, enracinée dans la prière, la Parole et la puissance de Dieu.",
      coordonnees: 'Coordonnées',
      address: '14 rue Sirven, 31100 Toulouse',
      liens: 'Liens',
      suivez: 'Suivez-nous',
      priere: 'Besoin de prière ?',
      jesus: 'En savoir plus sur Jésus',
      donner: 'Donner en ligne',
      confidentialite: 'Politique de confidentialité',
    },
    floating: {
      priere: 'Besoin de prière ?',
      jesus: 'En savoir plus sur Jésus',
      donner: 'Donner en ligne',
      contact: 'Contact',
    },
  },
  en: {
    nav: {
      cultes: 'Services',
      communaute: 'Community',
      bja_label: 'BJA – Youth',
      kabowd_label: 'Kabowd – Men',
      kara_label: 'Kara – Women',
      formation: 'Training',
      calendrier: 'Calendar',
      contact: 'Contact',
      donner: 'Give',
      impliquer: 'Get involved',
      priere: 'Prayer',
      jesus: 'Jesus',
    },
    footer: {
      tagline: "A church of destiny, rooted in prayer, the Word and the power of God.",
      coordonnees: 'Contact info',
      address: '14 Sirven Street, 31100 Toulouse',
      liens: 'Links',
      suivez: 'Follow us',
      priere: 'Need prayer?',
      jesus: 'Learn about Jesus',
      donner: 'Give online',
      confidentialite: 'Privacy policy',
    },
    floating: {
      priere: 'Need prayer?',
      jesus: 'Learn about Jesus',
      donner: 'Give online',
      contact: 'Contact',
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'fr',
  setLocale: () => {},
  t: dictionaries.fr,
});

export function useI18n() {
  return useContext(I18nContext);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('ephphatha-locale') as Locale;
    if (saved === 'fr' || saved === 'en') setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem('ephphatha-locale', l);
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}
