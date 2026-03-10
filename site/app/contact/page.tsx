'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';
import { useI18n } from '@/components/I18nProvider';
import { useFormSubmit } from '@/components/useFormSubmit';
import { useRef, useState } from 'react';

const T = {
  fr: {
    heroTitle: 'Nous contacter',
    heroSub: 'Une question, un besoin, un témoignage ? Nous sommes là.',
    coordTitle: 'Coordonnées',
    serviceLocation: 'Lieu des cultes',
    serviceAddress: '14 rue Sirven, 31100 Toulouse',
    hqLabel: 'Siège & bureaux',
    hqAddress: '14 rue Sirven, 31100 Toulouse',
    phone: 'Téléphone',
    email: 'Email',
    formTitle: 'Formulaire de contact',
    lastName: 'Nom',
    firstName: 'Prénom',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone',
    subject: 'Sujet',
    optGeneral: 'Question générale',
    optServices: 'Informations sur les cultes',
    optTestimony: 'Témoignage',
    optOther: 'Autre',
    message: 'Message',
    consent: "J'accepte que mes données soient utilisées pour me répondre.",
    send: 'Envoyer',
    findUs: 'Nous trouver',
  },
  en: {
    heroTitle: 'Contact us',
    heroSub: 'A question, a need, a testimony? We are here.',
    coordTitle: 'Contact info',
    serviceLocation: 'Service location',
    serviceAddress: '14 Sirven Street, 31100 Toulouse',
    hqLabel: 'Headquarters',
    hqAddress: '14 Sirven Street, 31100 Toulouse',
    phone: 'Phone',
    email: 'Email',
    formTitle: 'Contact form',
    lastName: 'Last name',
    firstName: 'First name',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    subject: 'Subject',
    optGeneral: 'General question',
    optServices: 'Service information',
    optTestimony: 'Testimony',
    optOther: 'Other',
    message: 'Message',
    consent: 'I agree that my data may be used to respond to me.',
    send: 'Send',
    findUs: 'Find us',
  },
};

export default function ContactPage() {
  const { locale } = useI18n();
  const t = T[locale];
  const formRef = useRef<HTMLFormElement>(null);
  const [consentError, setConsentError] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const { status, mailto, submit, reset } = useFormSubmit();

  const inputCls = "mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

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
      form: 'contact',
      nom: fd.get('nom') as string,
      prenom: fd.get('prenom') as string,
      email: fd.get('email') as string,
      telephone: fd.get('telephone') as string,
      sujet: fd.get('sujet') as string,
      message: fd.get('message') as string,
    });
  }

  return (
    <div>
      <section className="hero-page min-h-[55vh]">
        <Image src="/carousel/h.jpg" alt="Assemblée – Ephphatha" fill className="object-cover" priority />
        <div className="hero-overlay" />
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{t.heroSub}</p>
        </div>
      </section>

      <section className="section-spacing bg-linear-to-b from-brand-primary/5 to-white">
        <div className="container-page flex flex-col gap-12">
          {/* Ligne 1 – Coordonnées sur toute la largeur */}
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/20">
                  <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </div>
                <h2 className="font-display text-xl italic text-brand-primary sm:text-2xl">{t.coordTitle}</h2>
              </div>
              <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex gap-4 bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-gray-500">{t.serviceLocation}</p>
                    <p className="mt-1 text-[16px] text-gray-700">{t.serviceAddress}</p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-gray-500">{t.hqLabel}</p>
                    <p className="mt-1 text-[16px] text-gray-700">{t.hqAddress}</p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-gray-500">{t.phone}</p>
                    <a href="tel:+33613233940" className="mt-1 block text-[16px] font-medium text-gray-800 hover:text-brand-primary">+33 6 13 23 39 40</a>
                  </div>
                </div>
                <div className="flex gap-4 bg-white p-6 min-w-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-gray-500">{t.email}</p>
                    <a href="mailto:ephphatha.toulouse@gmail.com" className="mt-1 block break-all text-[16px] font-medium text-gray-800 hover:text-brand-primary" title="ephphatha.toulouse@gmail.com">ephphatha.toulouse@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Ligne 2 – Formulaire sur toute la largeur */}
          <FadeIn delay={100}>
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
            <div className="border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-5">
              <h2 className="text-lg font-semibold text-brand-primary">{t.formTitle}</h2>
            </div>
            <div className="p-8">
            {status === 'success' ? (
              <div className="mt-6 space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-lg font-semibold text-gray-800">{locale === 'fr' ? 'Message envoyé !' : 'Message sent!'}</p>
                <p className="text-[15px] text-gray-500">{locale === 'fr' ? 'Nous reviendrons vers vous rapidement.' : 'We will get back to you soon.'}</p>
                {mailto && <a href={mailto} className="inline-block text-[14px] text-brand-primary underline">{locale === 'fr' ? 'Envoyer aussi par email' : 'Also send by email'}</a>}
                <button onClick={() => { reset(); setConsentChecked(false); }} className="mt-2 block mx-auto text-[14px] text-gray-400 underline">{locale === 'fr' ? 'Nouveau message' : 'New message'}</button>
              </div>
            ) : (
              <form ref={formRef} className="mt-6 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="block text-sm font-medium text-gray-500">{t.lastName}</label><input name="nom" type="text" required className={inputCls} /></div>
                  <div><label className="block text-sm font-medium text-gray-500">{t.firstName}</label><input name="prenom" type="text" required className={inputCls} /></div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="block text-sm font-medium text-gray-500">{t.emailLabel}</label><input name="email" type="email" required className={inputCls} /></div>
                  <div><label className="block text-sm font-medium text-gray-500">{t.phoneLabel}</label><input name="telephone" type="tel" className={inputCls} /></div>
                </div>
                <div><label className="block text-sm font-medium text-gray-500">{t.subject}</label>
                  <select name="sujet" className={inputCls}><option>{t.optGeneral}</option><option>{t.optServices}</option><option>{t.optTestimony}</option><option>{t.optOther}</option></select>
                </div>
                <div><label className="block text-sm font-medium text-gray-500">{t.message}</label><textarea name="message" rows={4} className={inputCls} /></div>
                <div className="flex items-start gap-3 text-[14px] text-gray-500">
                  <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 accent-brand-primary" onChange={(e) => { setConsentChecked(e.target.checked); setConsentError(false); }} />
                  <span>{t.consent}</span>
                </div>
                {consentError && <p className="text-[14px] text-red-500">{locale === 'fr' ? 'Veuillez accepter l’utilisation de vos données pour envoyer le formulaire.' : 'Please accept the use of your data to send the form.'}</p>}
                {status === 'error' && <p className="text-[14px] text-red-500">{locale === 'fr' ? 'Une erreur est survenue. Réessayez.' : 'An error occurred. Please try again.'}</p>}
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

      <section className="border-t border-gray-100 bg-brand-light">
        <div className="container-page section-spacing">
          <FadeIn className="space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-4 border-b border-gray-200 pb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              </div>
              <h2 className="font-display text-2xl italic text-brand-primary sm:text-3xl">{t.findUs}</h2>
            </div>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.2!2d1.444!3d43.6045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6f3e8e0f3b%3A0x0!2s14%20Rue%20Sirven%2C%2031100%20Toulouse!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.findUs + " – " + t.serviceAddress}
              />
            </div>
            <p className="text-[15px] text-gray-400">
              {t.serviceAddress}
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
