'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useI18n } from './I18nProvider';

const SCROLL_THRESHOLD = 80;

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const close = () => { setOpen(false); setMobileExpanded(false); };

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY >= SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const communityLinks = [
    { href: '/bja', label: t.nav.bja_label },
    { href: '/kabowd', label: t.nav.kabowd_label },
    { href: '/kara', label: t.nav.kara_label },
  ];

  const mainLinks = [
    { href: '/cultes', label: t.nav.cultes },
    { href: '/formation', label: t.nav.formation },
    { href: '/calendrier', label: t.nav.calendrier },
    { href: '/contact', label: t.nav.contact },
    { href: '/donner', label: t.nav.donner },
    { href: '/servir', label: t.nav.impliquer },
  ];

  const secondaryLinks = [
    { href: '/priere-entretien', label: t.nav.priere },
    { href: '/jesus', label: t.nav.jesus },
  ];

  const headerTransparent = isHome && !scrolled;
  const headerClassName = headerTransparent
    ? 'header-transparent sticky top-0 z-50 border-b border-transparent bg-transparent backdrop-blur-0 transition-colors duration-300'
    : 'sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md transition-colors duration-300';

  return (
    <header className={headerClassName}>
      <div className="container-page flex h-28 items-center justify-between gap-8">
        <Link href="/" className="shrink-0" onClick={close}>
          <Image src="/logo-ephphatha.png" alt="Mission Évangélique Ephphatha" width={360} height={104} className="h-[88px] w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/cultes" className={`nav-link-underline text-[13px] font-medium uppercase tracking-[0.14em] transition ${headerTransparent ? 'text-white/90 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
            {t.nav.cultes}
          </Link>

          {/* Communauté dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`nav-link-underline flex items-center gap-1 text-[13px] font-medium uppercase tracking-[0.14em] transition ${headerTransparent ? 'text-white/90 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              {t.nav.communaute}
              <svg className={`h-3 w-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                {communityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block whitespace-nowrap px-6 py-3 text-[13px] font-medium text-gray-600 transition hover:bg-brand-light hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link-underline text-[13px] font-medium uppercase tracking-[0.14em] transition ${headerTransparent ? 'text-white/90 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
              {link.label}
            </Link>
          ))}

          <span className={`mx-1 h-4 w-px ${headerTransparent ? 'bg-white/40' : 'bg-gray-200'}`} />

          {secondaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link-underline text-[12px] font-normal uppercase tracking-[0.14em] transition ${headerTransparent ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
              {link.label}
            </Link>
          ))}

          <span className={`mx-1 h-4 w-px ${headerTransparent ? 'bg-white/40' : 'bg-gray-200'}`} />

          {/* Language toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLocale('fr')}
              className={`text-[12px] font-medium uppercase tracking-[0.14em] transition ${headerTransparent ? (locale === 'fr' ? 'text-white' : 'text-white/60 hover:text-white') : (locale === 'fr' ? 'text-brand-primary' : 'text-gray-400 hover:text-gray-700')}`}
            >
              Fr
            </button>
            <span className={`text-[12px] ${headerTransparent ? 'text-white/50' : 'text-gray-300'}`}>/</span>
            <button
              onClick={() => setLocale('en')}
              className={`text-[12px] font-medium uppercase tracking-[0.14em] transition ${headerTransparent ? (locale === 'en' ? 'text-white' : 'text-white/60 hover:text-white') : (locale === 'en' ? 'text-brand-primary' : 'text-gray-400 hover:text-gray-700')}`}
            >
              En
            </button>
          </div>
        </nav>

        {/* Mobile burger */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center gap-1">
            <button onClick={() => setLocale('fr')} className={`text-[11px] font-medium uppercase ${locale === 'fr' ? 'text-brand-primary' : 'text-gray-400'}`}>Fr</button>
            <span className="text-[11px] text-gray-300">/</span>
            <button onClick={() => setLocale('en')} className={`text-[11px] font-medium uppercase ${locale === 'en' ? 'text-brand-primary' : 'text-gray-400'}`}>En</button>
          </div>
          <button type="button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5" onClick={() => setOpen(v => !v)}>
            <span className={`block h-[2px] w-5 rounded-full bg-gray-800 transition-all duration-300 ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-5 rounded-full bg-gray-800 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-5 rounded-full bg-gray-800 transition-all duration-300 ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white py-6 shadow-lg lg:hidden">
          <nav className="container-page flex flex-col gap-4">
            <Link href="/cultes" onClick={close} className="text-[15px] font-medium uppercase tracking-widest text-gray-700">{t.nav.cultes}</Link>

            <div>
              <button
                onClick={() => setMobileExpanded(!mobileExpanded)}
                className="flex w-full items-center justify-between text-[15px] font-medium uppercase tracking-widest text-gray-700"
              >
                {t.nav.communaute}
                <svg className={`h-4 w-4 transition-transform ${mobileExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {mobileExpanded && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {communityLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={close} className="text-[14px] text-gray-500 transition hover:text-gray-900">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} onClick={close} className="text-[15px] font-medium uppercase tracking-widest text-gray-700">
                {link.label}
              </Link>
            ))}

            <div className="mt-2 border-t border-gray-100 pt-4">
              {secondaryLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={close} className="block py-1 text-[14px] text-gray-500 transition hover:text-gray-900">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
