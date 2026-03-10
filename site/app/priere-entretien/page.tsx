'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';
import { useI18n } from '@/components/I18nProvider';
import { useFormSubmit } from '@/components/useFormSubmit';
import { useRef, useState } from 'react';

const T = {
  fr: {
    heroTitle: 'Prière & entretien',
    heroSub: "Tu n'as pas besoin de rester seul. L'équipe Ephphatha se tient à tes côtés.",
    sectionTitle: 'Marcher avec toi',
    sectionP1:
      "Que tu traverses une saison de combat, de maladie ou de questions intérieures, des pasteurs et serviteurs formés sont là pour prier avec toi, t'écouter et t'accompagner avec la Parole de Dieu.",
    sectionP2:
      'Utilise le formulaire ci-contre pour nous partager ta situation. Nous reviendrons vers toi pour prier ou planifier un entretien.',
    formTitle: 'Formulaire prière / entretien',
    labelNom: 'Nom',
    labelPrenom: 'Prénom',
    labelEmail: 'Email',
    labelTel: 'Téléphone',
    labelType: 'Type de demande',
    optionPriere: 'Demande de prière',
    optionEntretien: 'Entretien pastoral',
    optionAutre: 'Autre',
    labelMessage: 'Message',
    consent: "J'accepte que mes données soient utilisées pour m'accompagner.",
    send: 'Envoyer',
  },
  en: {
    heroTitle: 'Prayer & counselling',
    heroSub: "You don't have to walk alone. The Ephphatha team stands by your side.",
    sectionTitle: 'Walking with you',
    sectionP1:
      'Whether you are going through a season of struggle, illness or inner questioning, trained pastors and servants are here to pray with you, listen to you and walk alongside you with the Word of God.',
    sectionP2:
      'Use the form opposite to share your situation with us. We will get back to you to pray or schedule a counselling session.',
    formTitle: 'Prayer / counselling form',
    labelNom: 'Last name',
    labelPrenom: 'First name',
    labelEmail: 'Email',
    labelTel: 'Phone',
    labelType: 'Request type',
    optionPriere: 'Prayer request',
    optionEntretien: 'Pastoral counselling',
    optionAutre: 'Other',
    labelMessage: 'Message',
    consent: 'I agree that my data may be used to support me.',
    send: 'Send',
  },
} as const;

export default function PriereEntretienPage() {
  const { locale } = useI18n();
  const t = T[locale];
  const formRef = useRef<HTMLFormElement>(null);
  const [consentChecked, setConsentChecked] = useState(false);
  const { status, mailto, submit, reset } = useFormSubmit();

  const inputCls = "mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

  async function handleSubmit() {
    const f = formRef.current;
    if (!f) return;
    const fd = new FormData(f);
    await submit({
      form: 'priere',
      nom: fd.get('nom') as string,
      prenom: fd.get('prenom') as string,
      email: fd.get('email') as string,
      telephone: fd.get('telephone') as string,
      type_demande: fd.get('type_demande') as string,
      message: fd.get('message') as string,
    });
  }

  return (
    <div>
      <section className="hero-page min-h-[55vh]">
        <Image src="/carousel/i.jpg" alt="Prière – Ephphatha" fill className="object-cover" priority />
        <div className="hero-overlay" />
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{t.heroSub}</p>
        </div>
      </section>

      <section className="section-spacing bg-linear-to-b from-brand-primary/5 to-white">
        <div className="container-page grid grid-cols-1 gap-12">
          <FadeIn className="w-full">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <div className="flex flex-wrap items-start gap-6 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-8 md:px-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/20">
                  <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-2xl italic text-brand-primary sm:text-3xl">{t.sectionTitle}</h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-gray-600">{t.sectionP1}</p>
                  <p className="mt-4 text-[17px] leading-relaxed text-gray-600">{t.sectionP2}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100} className="w-full">
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
                    <p className="text-lg font-semibold text-gray-800">{locale === 'fr' ? 'Demande envoyée !' : 'Request sent!'}</p>
                    <p className="text-[15px] text-gray-500">{locale === 'fr' ? 'Nous reviendrons vers vous rapidement.' : 'We will get back to you soon.'}</p>
                    {mailto && <a href={mailto} className="inline-block text-[14px] text-brand-primary underline">{locale === 'fr' ? 'Envoyer aussi par email' : 'Also send by email'}</a>}
                    <button onClick={() => { reset(); setConsentChecked(false); }} className="mt-2 block mx-auto text-[14px] text-gray-400 underline">{locale === 'fr' ? 'Nouvelle demande' : 'New request'}</button>
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
                    <div><label className="block text-sm font-medium text-gray-500">{t.labelType}</label>
                      <select name="type_demande" className={inputCls}><option>{t.optionPriere}</option><option>{t.optionEntretien}</option><option>{t.optionAutre}</option></select>
                    </div>
                    <div><label className="block text-sm font-medium text-gray-500">{t.labelMessage}</label><textarea name="message" rows={4} className={inputCls} /></div>
                    <div className="flex items-start gap-3 text-[14px] text-gray-500"><input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 accent-brand-primary" onChange={(e) => setConsentChecked(e.target.checked)} /><span>{t.consent}</span></div>
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
