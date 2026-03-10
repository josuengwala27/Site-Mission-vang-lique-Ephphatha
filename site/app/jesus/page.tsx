'use client';

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    title: 'En savoir plus sur Jésus',
    subtitle: 'La décision la plus importante de ta vie.',
    whoIsJesus: 'Qui est Jésus ?',
    verse:
      '« Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle. » (Jean 3.16)',
    whoP1:
      'Jésus-Christ est le Fils de Dieu venu sur la terre pour réconcilier l\'humanité avec son Créateur. Par sa mort et sa résurrection, il a porté nos péchés et nos condamnations.',
    whoP2Before:
      'Dieu n\'est pas intéressé par une pratique religieuse, mais par une ',
    whoP2Bold: 'relation vivante',
    whoP2After: ' avec toi.',
    whyNeedTitle: 'Pourquoi ai-je besoin de lui ?',
    whyNeedP1:
      'Le péché a séparé l\'homme de Dieu, mais Jésus a ouvert un chemin nouveau. Sans lui, nous restons enfermés dans la culpabilité et la mort spirituelle.',
    whyNeedP2:
      'Avec lui : le pardon, une nouvelle identité d\'enfant de Dieu, la présence du Saint-Esprit et une espérance éternelle.',
    howReceive: 'Comment recevoir Jésus ?',
    howReceiveP:
      'Si nous croyons dans notre cœur et confessons de notre bouche que Jésus est Seigneur, nous serons sauvés. Tu peux lui parler simplement :',
    prayer:
      '« Seigneur Jésus, je reconnais que j\'ai besoin de ton pardon. Merci d\'avoir donné ta vie pour moi. Aujourd\'hui, je t\'ouvre mon cœur. Deviens mon Seigneur et mon Sauveur. Change ma vie, guéris mon cœur et conduis ma destinée. Amen. »',
    whatNext: 'Et ensuite ?',
    whatNextP1:
      'Si tu as fait cette prière, ne reste pas seul. Parle-en à quelqu\'un de l\'église ou au corps pastoral.',
    whatNextP2:
      'Ephphatha est là pour t\'accompagner dans tes premiers pas avec Jésus.',
    ctaBtn: 'Nous contacter',
  },
  en: {
    title: 'Learn more about Jesus',
    subtitle: 'The most important decision of your life.',
    whoIsJesus: 'Who is Jesus?',
    verse:
      '"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." (John 3:16)',
    whoP1:
      'Jesus Christ is the Son of God who came to earth to reconcile humanity with its Creator. Through His death and resurrection, He bore our sins and our condemnation.',
    whoP2Before:
      'God is not interested in religious practice, but in a ',
    whoP2Bold: 'living relationship',
    whoP2After: ' with you.',
    whyNeedTitle: 'Why do I need Him?',
    whyNeedP1:
      'Sin has separated humanity from God, but Jesus opened a new way. Without Him, we remain trapped in guilt and spiritual death.',
    whyNeedP2:
      'With Him: forgiveness, a new identity as a child of God, the presence of the Holy Spirit and an eternal hope.',
    howReceive: 'How to receive Jesus?',
    howReceiveP:
      'If we believe in our heart and confess with our mouth that Jesus is Lord, we will be saved. You can simply speak to Him:',
    prayer:
      '"Lord Jesus, I acknowledge that I need Your forgiveness. Thank You for giving Your life for me. Today, I open my heart to You. Become my Lord and my Saviour. Change my life, heal my heart and lead my destiny. Amen."',
    whatNext: "What's next?",
    whatNextP1:
      "If you prayed this prayer, don't stay alone. Talk to someone at the church or the pastoral team.",
    whatNextP2:
      'Ephphatha is here to walk with you in your first steps with Jesus.',
    ctaBtn: 'Contact us',
  },
};

export default function JesusPage() {
  const { locale } = useI18n();
  const t = T[locale];

  return (
    <div>
      <section className="hero-page min-h-[45vh] bg-brand-primary">
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-4xl italic text-white sm:text-5xl lg:text-6xl">{t.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{t.subtitle}</p>
        </div>
      </section>

      <section className="section-spacing bg-linear-to-b from-brand-primary/5 to-white">
        <div className="container-page flex flex-col gap-14">
          <FadeIn className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
            <div className="flex flex-wrap items-start gap-6 border-b border-gray-100 bg-linear-to-r from-brand-primary/5 to-brand-accent/5 px-8 py-8 md:px-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/20">
                <svg className="h-7 w-7 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-2xl italic text-brand-primary sm:text-3xl">{t.whoIsJesus}</h2>
                <blockquote className="mt-5 rounded-xl border-l-4 border-brand-accent bg-amber-50/80 px-5 py-4 text-[16px] italic leading-relaxed text-gray-700">
                  {t.verse}
                </blockquote>
                <p className="mt-5 text-[17px] leading-relaxed text-gray-600">{t.whoP1}</p>
                <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
                  {t.whoP2Before}<span className="font-semibold text-gray-800">{t.whoP2Bold}</span>{t.whoP2After}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-brand-primary">{t.whyNeedTitle}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-600">{t.whyNeedP1}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-600">{t.whyNeedP2}</p>
            </div>

            <div className="overflow-hidden rounded-3xl border-2 border-brand-accent/20 bg-white p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/20">
                <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-brand-primary">{t.howReceive}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-600">{t.howReceiveP}</p>
              <div className="mt-6 rounded-xl bg-brand-primary/5 p-6">
                <p className="text-[16px] italic leading-relaxed text-gray-700">{t.prayer}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="overflow-hidden rounded-3xl bg-brand-primary text-white shadow-xl">
            <div className="flex flex-col gap-6 px-8 py-12 md:flex-row md:items-center md:gap-10 md:py-14">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <svg className="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-6-1.572m0-2.57a9.063 9.063 0 01-2.347-3.769 9.094 9.094 0 00-2.347 3.769M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21" /></svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{t.whatNext}</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-white/90">{t.whatNextP1}</p>
                <p className="mt-2 text-[16px] leading-relaxed text-white/90">{t.whatNextP2}</p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-primary"
              >
                {t.ctaBtn}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
