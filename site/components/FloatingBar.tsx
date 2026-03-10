'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useI18n } from './I18nProvider';

const ITEMS = [
  { href: '/priere-entretien', key: 'priere' as const },
  { href: '/jesus', key: 'jesus' as const },
  { href: '/donner', key: 'donner' as const },
  { href: '/contact', key: 'contact' as const },
];

export function FloatingBar() {
  const [dismissed, setDismissed] = useState(false);
  const { t } = useI18n();

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-brand-primary/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <div className="flex flex-1 items-center justify-center gap-1 overflow-x-auto sm:gap-0">
          {ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap px-3 py-3.5 text-[12px] font-medium text-white/70 transition hover:text-white sm:px-5 sm:py-4 sm:text-[13px] ${
                i < ITEMS.length - 1 ? 'border-r border-white/10' : ''
              }`}
            >
              {t.floating[item.key]}
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="ml-2 shrink-0 p-2 text-white/40 transition hover:text-white"
          aria-label="Fermer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
