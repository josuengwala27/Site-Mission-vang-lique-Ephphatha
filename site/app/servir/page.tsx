'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';
import { useI18n } from '@/components/I18nProvider';
import { useFormSubmit } from '@/components/useFormSubmit';
import { useRef, useState } from 'react';

const T = {
  fr: {
    heroTitle: "S'impliquer",
    heroSub: 'Tes dons et tes talents sont précieux pour le Royaume de Dieu.',
    sectionTitle: 'Domaines de service',
    sectionP: "Que tu aies de l'expérience ou que tu débutes, il y a une place pour toi.",
    area1: 'Accueil & protocole',
    area2: 'Louange & musique',
    area3: 'Son, médias & réseaux sociaux',
    area4: 'Jésus pour les tout-petits',
    area5: 'Jeunesse – BJA',
    area6: 'Évangélisation & patrouilles',
    area7: 'Intercession & prière',
    area8: 'Pôle formation',
    area9: 'Logistique & intendance',
    area10: 'Groupe musical Trompettes',
    area11: 'Garderie',
    area12: 'Restauration',
    area13: 'Comité d\'accueil',
    area14: 'Hôtesses',
    area15: 'Arts',
    area16: 'Sécurité',
    area17: 'Hygiène',
    area18: 'Interprétation',
    formTitle: 'Formulaire « Je veux servir »',
    labelNom: 'Nom',
    labelPrenom: 'Prénom',
    labelEmail: 'Email',
    labelTel: 'Téléphone',
    labelDomaines: 'Domaines souhaités',
    placeholder: 'Ex. accueil, BJA, évangélisation...',
    consent: "J'accepte que mes données soient utilisées pour me contacter.",
    send: 'Envoyer',
  },
  en: {
    heroTitle: 'Get involved',
    heroSub: 'Your gifts and talents are precious for the Kingdom of God.',
    sectionTitle: 'Areas of service',
    sectionP: 'Whether you have experience or are just starting out, there is a place for you.',
    area1: 'Welcome & hospitality',
    area2: 'Worship & music',
    area3: 'Sound, media & social networks',
    area4: 'Jesus for little ones',
    area5: 'Youth – BJA',
    area6: 'Evangelism & outreach',
    area7: 'Intercession & prayer',
    area8: 'Training department',
    area9: 'Logistics & stewardship',
    area10: 'Trumpets music group',
    area11: 'Nursery / childcare',
    area12: 'Catering',
    area13: 'Welcome committee',
    area14: 'Hostesses',
    area15: 'Arts',
    area16: 'Security',
    area17: 'Hygiene',
    area18: 'Interpretation',
    formTitle: '"I want to serve" form',
    labelNom: 'Last name',
    labelPrenom: 'First name',
    labelEmail: 'Email',
    labelTel: 'Phone',
    labelDomaines: 'Preferred areas',
    placeholder: 'E.g. welcome, BJA, evangelism...',
    consent: 'I agree that my data may be used to contact me.',
    send: 'Send',
  },
} as const;

const areaIcons: Record<number, React.ReactNode> = {
  1: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  2: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  3: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 3 3 0 005.78-1.128zm2.94-2.94a3 3 0 00-5.78 1.128 3 3 0 005.78-1.128zm3.44 3.44a3 3 0 00-5.78 1.128 3 3 0 005.78-1.128z" /></svg>,
  4: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-7.5v.75" /></svg>,
  5: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.643 8.07 8.25 8.25 0 0112 3z" /></svg>,
  6: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  7: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  8: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
  9: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
  10: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.262a2.25 2.25 0 01-1.336 0l-1.32-.262a2.25 2.25 0 01-1.632-2.163v-3.75m0 0V9m0 3.75v3.75a2.25 2.25 0 001.632 2.163l1.32.262a2.25 2.25 0 001.336 0l1.32-.262A2.25 2.25 0 0021 16.303v-3.75" /></svg>,
  11: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
  12: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9l-3 3m0 0l-3-3m3 3V8.25m0 0v-1.5M3 12l3 3m0 0l3-3m-3 3v-1.5m0-9.75v1.5" /></svg>,
  13: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  14: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-6-1.572m0-2.57a9.063 9.063 0 01-2.347-3.769 9.094 9.094 0 00-2.347 3.769M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21" /></svg>,
  15: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 3 3 0 005.78-1.128zm2.94-2.94a3 3 0 00-5.78 1.128 3 3 0 005.78-1.128zM15.75 8.25a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  16: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  17: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  18: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371M3 5.621A47.78 47.78 0 0112 5.75m0 0a47.78 47.78 0 019 5.621M12 5.75c-2.967 0-5.895.5-8.625 1.371m0 0l-.375.75m.375-.75l.375.75" /></svg>,
};

export default function ServirPage() {
  const { locale } = useI18n();
  const t = T[locale];
  const formRef = useRef<HTMLFormElement>(null);
  const [consentError, setConsentError] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const { status, mailto, submit, reset } = useFormSubmit();

  const inputCls = "mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

  const areas = [t.area1, t.area2, t.area3, t.area4, t.area5, t.area6, t.area7, t.area8, t.area9, t.area10, t.area11, t.area12, t.area13, t.area14, t.area15, t.area16, t.area17, t.area18];

  async function handleSubmit() {
    const f = formRef.current;
    if (!f) return;
    const fd = new FormData(f);
    if (!fd.get('consent')) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    await submit({
      form: 'servir',
      nom: fd.get('nom') as string,
      prenom: fd.get('prenom') as string,
      email: fd.get('email') as string,
      telephone: fd.get('telephone') as string,
      domaines: fd.get('domaines') as string,
    });
  }

  return (
    <div>
      <section className="hero-page min-h-[55vh]">
        <Image src="/carousel/f.jpg" alt="Service – Ephphatha" fill className="object-cover" priority />
        <div className="hero-overlay" />
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{t.heroSub}</p>
        </div>
      </section>

      <section className="section-spacing bg-linear-to-b from-brand-primary/5 to-white">
        <div className="container-page flex flex-col gap-12 lg:flex-row">
          <FadeIn className="flex-1">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/20">
                  <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>
                </div>
                <div>
                  <h2 className="font-display text-xl italic text-brand-primary sm:text-2xl">{t.sectionTitle}</h2>
                  <p className="mt-2 text-[16px] text-gray-600">{t.sectionP}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2 lg:grid-cols-3">
                {areas.map((label, i) => (
                  <div key={i} className="flex gap-3 bg-white p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                      {areaIcons[i + 1]}
                    </span>
                    <p className="text-[15px] font-medium text-gray-700">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100} className="lg:max-w-[28rem]">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <div className="border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-5">
                <h2 className="text-lg font-semibold text-brand-primary">{t.formTitle}</h2>
              </div>
              <div className="p-8">
                {status === 'success' ? (
                  <div className="space-y-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">{locale === 'fr' ? 'Inscription envoyée !' : 'Registration sent!'}</p>
                    <p className="text-[15px] text-gray-500">{locale === 'fr' ? 'Nous vous contacterons bientôt.' : 'We will contact you soon.'}</p>
                    {mailto && <a href={mailto} className="inline-block text-[14px] text-brand-primary underline">{locale === 'fr' ? 'Envoyer aussi par email' : 'Also send by email'}</a>}
                    <button onClick={() => { reset(); setConsentChecked(false); }} className="mt-2 block mx-auto text-[14px] text-gray-400 underline">{locale === 'fr' ? 'Nouvelle inscription' : 'New registration'}</button>
                  </div>
                ) : (
                  <form ref={formRef} className="mt-6 space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><label className="block text-sm font-medium text-gray-500">{t.labelNom}</label><input name="nom" type="text" required className={inputCls} /></div>
                      <div><label className="block text-sm font-medium text-gray-500">{t.labelPrenom}</label><input name="prenom" type="text" required className={inputCls} /></div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><label className="block text-sm font-medium text-gray-500">{t.labelEmail}</label><input name="email" type="email" required className={inputCls} /></div>
                      <div><label className="block text-sm font-medium text-gray-500">{t.labelTel}</label><input name="telephone" type="tel" className={inputCls} /></div>
                    </div>
                    <div><label className="block text-sm font-medium text-gray-500">{t.labelDomaines}</label><textarea name="domaines" rows={3} placeholder={t.placeholder} className={inputCls} /></div>
                    <div className="flex items-start gap-3 text-[14px] text-gray-500">
                      <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 accent-brand-primary" onChange={(e) => { setConsentChecked(e.target.checked); setConsentError(false); }} />
                      <span>{t.consent}</span>
                    </div>
                    {consentError && <p className="text-[14px] text-red-500">{locale === 'fr' ? 'Veuillez accepter l\'utilisation de vos données pour envoyer le formulaire.' : 'Please accept the use of your data to send the form.'}</p>}
                    {status === 'error' && <p className="text-[14px] text-red-500">{locale === 'fr' ? 'Une erreur est survenue.' : 'An error occurred.'}</p>}
                    <button type="button" onClick={handleSubmit} disabled={status === 'sending' || !consentChecked} className="rounded-full bg-brand-primary px-8 py-3 text-[15px] font-semibold text-white transition hover:bg-brand-primary/90 disabled:opacity-50">
                      {status === 'sending' ? (locale === 'fr' ? 'Envoi...' : 'Sending...') : t.send}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
