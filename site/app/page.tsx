'use client';

import HomeCarousel from '@/components/HomeCarousel';
import { TypingEffect } from '@/components/TypingEffect';
import { FadeIn } from '@/components/FadeIn';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    hero1: "Tu es au bon endroit",
    heroSub: "Un lieu de prière, de guérison et de transformation.",
    discoverTitle: "Découvrir Ephphatha",
    discoverP1: "La Mission Évangélique Ephphatha est une église de la destinée fondée en 2019, membre de l\u2019Union Protestante Centre Chrétien de Réveil. Aujourd\u2019hui, elle rassemble trois églises locales\u00a0: Toulouse, Limoges et Castres.",
    discoverP2: "Portée par une identité spirituelle forte, Ephphatha accompagne chaque personne pour qu\u2019elle entre dans l\u2019appel que Dieu a placé sur sa vie.",
    visionVerse: "Il ramènera plusieurs des fils d\u2019Israël au Seigneur, leur Dieu.",
    visionRef: "Luc 1.16",
    videoTitle: "Un mot de nos pasteurs",
    videoSub: "Découvrez la vision de l\u2019église à travers un message de bienvenue de nos pasteurs.",
    stat1: "Églises locales", stat2: "Année de fondation", stat3: "Cultes chaque dimanche", stat4: "Écoles de formation",
    axe1: "Prière", axe1t: "Veillées, prière matinale et intercession pour les familles, la ville et les nations.",
    axe2: "Évangélisation", axe2t: "Patrouilles matinales, de jour et de nuit pour aller à la rencontre de ceux qui ont besoin de Jésus.",
    axe3: "Formation", axe3t: "Un Pôle formation structuré en trois écoles pour poser des bases solides et préparer chacun au service.",
    cultesTitle: "Cultes & temps forts",
    weekday: "En semaine", sunday: "Dimanche – 3 cultes",
    w1: "Mardi de la décision", w2: "Culte d\u2019affermissement", w3: "Vendredi de toutes les possibilités",
    s1: "Culte des nations", s2: "Culte de la grande invitation", s3: "Culte des familles", s4: "Culte de célébration",
    temoTag: "Témoignages", temoTitle: "Des vies transformées",
    t1: "Ephphatha a transformé ma vie. J\u2019ai découvert ma destinée et une famille spirituelle qui m\u2019accompagne au quotidien.",
    t2: "La puissance de la prière dans cette église est réelle. J\u2019ai vu Dieu agir dans ma famille d\u2019une manière que je n\u2019aurais jamais imaginée.",
    t3: "Grâce au Pôle formation, j\u2019ai posé des fondations solides dans ma foi. Aujourd\u2019hui, je sers avec joie et assurance.",
    visitTitle: "Première visite\u00a0?",
    visitP: "Pas besoin de s\u2019inscrire, viens comme tu es. Que ce soit ton premier pas dans une église ou que tu cherches une nouvelle communauté, nous serions ravis de t\u2019accueillir un prochain dimanche.",
    visitBtn1: "Voir les horaires", visitBtn2: "Nous contacter",
    bar1: "Donner", bar2: "S\u2019impliquer", bar3: "Calendrier",
    statsTitle: "Ephphatha en quelques chiffres",
    address: "14 rue Sirven, 31100 Toulouse",
  },
  en: {
    hero1: "You're in the right place",
    heroSub: "A place of prayer, healing and transformation.",
    discoverTitle: "Discover Ephphatha",
    discoverP1: "The Ephphatha Evangelical Mission is a church of destiny founded in 2019, a member of the Union Protestante Centre Chrétien de Réveil. Today it brings together three local churches: Toulouse, Limoges and Castres.",
    discoverP2: "Driven by a strong spiritual identity, Ephphatha walks with every person so they step into the calling God has placed on their life.",
    visionVerse: "He will bring back many of the people of Israel to the Lord their God.",
    visionRef: "Luke 1:16",
    videoTitle: "A word from our pastors",
    videoSub: "Discover the vision of the church through a welcome message from our pastors.",
    stat1: "Local churches", stat2: "Year founded", stat3: "Sunday services", stat4: "Training schools",
    axe1: "Prayer", axe1t: "Night watches, morning prayer and intercession for families, the city and the nations.",
    axe2: "Evangelism", axe2t: "Morning, daytime and night-time outreach patrols to meet those who need Jesus.",
    axe3: "Training", axe3t: "A structured Training Centre with three schools to lay solid foundations and prepare everyone for service.",
    cultesTitle: "Services & highlights",
    weekday: "Weekdays", sunday: "Sunday – 3 services",
    w1: "Tuesday of Decision", w2: "Strengthening Service", w3: "Friday of All Possibilities",
    s1: "Nations Service", s2: "Great Invitation Service", s3: "Family Service", s4: "Celebration Service",
    temoTag: "Testimonies", temoTitle: "Lives transformed",
    t1: "Ephphatha transformed my life. I discovered my destiny and a spiritual family that walks with me every day.",
    t2: "The power of prayer in this church is real. I saw God move in my family in ways I never could have imagined.",
    t3: "Thanks to the Training Centre, I built solid foundations in my faith. Today I serve with joy and confidence.",
    visitTitle: "First visit?",
    visitP: "No need to register, just come as you are. Whether it\u2019s your first step into a church or you\u2019re looking for a new community, we\u2019d love to welcome you next Sunday.",
    visitBtn1: "See the schedule", visitBtn2: "Contact us",
    bar1: "Give", bar2: "Get involved", bar3: "Calendar",
    statsTitle: "Ephphatha in numbers",
    address: "14 Sirven Street, 31100 Toulouse",
  },
};

export default function Home() {
  const { locale } = useI18n();
  const t = T[locale];

  return (
    <div>
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <HomeCarousel />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="font-display text-5xl italic leading-[1.2] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            <TypingEffect text={t.hero1} speed={200} pauseAtEnd={3000} />
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-white/80">{t.heroSub}</p>
        </div>
        <a href="#decouvrir" className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-bounce text-white/50 transition hover:text-white" aria-label="Scroll down">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
        </a>
      </section>

      <section id="decouvrir" className="relative overflow-hidden bg-gradient-to-b from-brand-primary/5 to-white py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%233c2252\' fill-opacity=\'1\'%3E%3Cpath d=\'M0 0h40v40H0V0zm40 40h40v40H40V40z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        <FadeIn className="container-page relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">{locale === 'fr' ? 'Notre histoire' : 'Our story'}</p>
            <h2 className="font-display mt-4 text-4xl italic text-brand-primary sm:text-5xl lg:text-6xl xl:text-7xl">{t.discoverTitle}</h2>
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6 text-[18px] leading-relaxed text-gray-600 lg:text-[19px]">
              <p>{t.discoverP1}</p>
              <p>{t.discoverP2}</p>
            </div>
            <div className="relative flex flex-col items-center justify-center rounded-3xl border-2 border-brand-accent/30 bg-brand-primary/5 px-8 py-12 text-center lg:py-16">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-accent px-6 py-1.5 text-sm font-bold uppercase tracking-widest text-brand-primary">Vision</span>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">{t.visionRef}</p>
              <p className="mt-4 font-display text-xl italic leading-snug text-brand-primary sm:text-2xl lg:text-3xl">&laquo;&nbsp;{t.visionVerse}&nbsp;&raquo;</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-gray-100 bg-brand-light py-24 sm:py-32">
        <div className="container-page">
          <FadeIn className="mx-auto max-w-4xl space-y-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">{locale === 'fr' ? 'Vidéo' : 'Video'}</p>
            <h2 className="font-display text-3xl italic text-brand-primary sm:text-4xl lg:text-5xl">{t.videoTitle}</h2>
            <p className="text-[17px] leading-relaxed text-gray-500">{t.videoSub}</p>
            <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border-2 border-gray-200 shadow-xl ring-4 ring-white">
              <iframe src="https://www.youtube.com/embed/18aoYJDpPwE" title="Welcome – Ephphatha" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-display text-3xl italic text-brand-primary sm:text-4xl lg:text-5xl">{t.statsTitle}</h2>
          </FadeIn>
          <FadeIn className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"><AnimatedCounter target={3} label={t.stat1} /></div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"><AnimatedCounter target={2019} label={t.stat2} duration={2500} /></div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"><AnimatedCounter target={3} label={t.stat3} /></div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"><AnimatedCounter target={3} label={t.stat4} /></div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-brand-light py-24 sm:py-32">
        <div className="container-page">
          <FadeIn className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">{locale === 'fr' ? 'Nos priorités' : 'Our priorities'}</p>
            <h2 className="font-display mt-3 text-3xl italic text-brand-primary sm:text-4xl lg:text-5xl">{locale === 'fr' ? 'Prière, évangélisation, formation' : 'Prayer, evangelism, training'}</h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: t.axe1, text: t.axe1t, icon: 'M12 21v-2.25M15.09 17.25c.54-.36 1.12-.68 1.75-.96M8.25 17.25c1.12.36 2.23.67 3.36.96M3.75 12h16.5M12 3v2.25M3.75 12v7.5m13.5-7.5v7.5M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z' },
              { title: t.axe2, text: t.axe2t, icon: 'M12 21c3.75-3.75 7.5-9 7.5-13.5A7.5 7.5 0 0012 3c-3.75 0-7.5 3.375-7.5 7.5S8.25 17.25 12 21z' },
              { title: t.axe3, text: t.axe3t, icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/5">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-accent/10 transition-transform duration-300 group-hover:scale-110" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-brand-primary">{item.title}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-gray-600">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="container-page">
          <FadeIn className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">{locale === 'fr' ? 'Rendez-vous' : 'Schedule'}</p>
            <h2 className="font-display mt-3 text-3xl italic text-brand-primary sm:text-4xl lg:text-5xl">{t.cultesTitle}</h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl border border-gray-100 bg-brand-light p-8 transition hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                    <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">{t.weekday}</p>
                </div>
                <ul className="mt-6 space-y-4 text-[17px] text-gray-600">
                  <li><span className="font-semibold text-gray-800">Mardi – 19h</span> · {t.w1}</li>
                  <li><span className="font-semibold text-gray-800">Mercredi – 19h</span> · {t.w2}</li>
                  <li><span className="font-semibold text-gray-800">Vendredi – 19h</span> (1/2) · {t.w3}</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="rounded-3xl border border-gray-100 bg-brand-light p-8 transition hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                    <svg className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">{t.sunday}</p>
                </div>
                <p className="mt-4 text-2xl font-bold text-gray-800">7h30 · 9h00 · 11h00</p>
                <ul className="mt-4 space-y-2 text-[17px] text-gray-600">
                  <li>{t.s1}</li><li>{t.s2}</li><li>{t.s3}</li><li>{t.s4}</li>
                </ul>
              </div>
            </FadeIn>
          </div>
          <FadeIn className="mt-10 flex flex-wrap items-center justify-center gap-4 text-[15px] text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {t.address}
            </span>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-primary py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="container-page relative">
          <FadeIn className="space-y-16 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">{t.temoTag}</p>
              <h2 className="font-display mt-3 text-3xl italic text-white sm:text-4xl lg:text-5xl">{t.temoTitle}</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { quote: t.t1, author: "Dorcas", photo: "/temoignages/dorcas-portrait.jpg" },
                { quote: t.t2, author: "Filda", photo: "/temoignages/filda.jpg" },
                { quote: t.t3, author: "Marie", photo: "/temoignages/marie.jpg" },
              ].map((item) => (
                <FadeIn key={item.author} delay={item.author === "Filda" ? 150 : item.author === "Marie" ? 300 : 0}>
                  <div className="group relative rounded-3xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/15 hover:shadow-2xl hover:shadow-brand-accent/10">
                    <svg className="absolute right-6 top-6 h-10 w-10 text-brand-accent/30" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                    <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full ring-4 ring-brand-accent/40 transition-all duration-500 group-hover:ring-brand-accent/70">
                      <Image src={item.photo} alt={item.author} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <p className="text-[16px] italic leading-relaxed text-white/80">&laquo;&nbsp;{item.quote}&nbsp;&raquo;</p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <span className="h-px w-6 bg-brand-accent/50" />
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">{item.author}</p>
                      <span className="h-px w-6 bg-brand-accent/50" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary/8 via-white to-brand-accent/5 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233c2252\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <FadeIn className="container-page relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">{locale === 'fr' ? 'Bienvenue' : 'Welcome'}</p>
          <h2 className="font-display mt-3 text-4xl italic text-brand-primary sm:text-5xl lg:text-6xl">{t.visitTitle}</h2>
          <p className="mx-auto mt-8 max-w-2xl text-[18px] leading-relaxed text-gray-600 sm:text-[19px]">{t.visitP}</p>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link href="/cultes" className="group inline-flex items-center gap-2 rounded-full bg-brand-primary px-10 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-primary/25 transition hover:bg-brand-primary/90 hover:shadow-xl hover:shadow-brand-primary/30">
              {t.visitBtn1}
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-brand-primary px-10 py-4 text-[16px] font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white">
              {t.visitBtn2}
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-gray-100 bg-brand-primary">
        <div className="container-page grid gap-px md:grid-cols-3">
          {[
            { href: "/donner", label: t.bar1 },
            { href: "/servir", label: t.bar2 },
            { href: "/calendrier", label: t.bar3 },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center justify-center py-6 text-[14px] font-medium uppercase tracking-[0.18em] text-white/70 transition hover:text-white">{item.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
