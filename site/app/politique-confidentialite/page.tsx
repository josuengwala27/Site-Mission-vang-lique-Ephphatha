'use client';

import { FadeIn } from '@/components/FadeIn';
import { useI18n } from '@/components/I18nProvider';

const T = {
  fr: {
    heroTitle: 'Politique de confidentialité',
    s1Title: '1. Responsable du traitement',
    s1Text: 'Le responsable du traitement des données personnelles est :',
    s1Org: 'Mission Évangélique Ephphatha',
    s1Addr: '14 rue Sirven, 31100 Toulouse',
    s1Email: 'Email : ephphatha.toulouse@gmail.com',
    s1Phone: 'Téléphone : +33 6 13 23 39 40',
    s2Title: '2. Données collectées',
    s2Text: 'Nous collectons les données suivantes via les formulaires du site :',
    s2L1: 'Nom et prénom',
    s2L2: 'Adresse email',
    s2L3: 'Numéro de téléphone',
    s2L4: 'Message ou demande',
    s2L5: "Domaines de service souhaités (formulaire « S'impliquer »)",
    s3Title: '3. Finalité du traitement',
    s3Text: 'Les données personnelles sont utilisées pour :',
    s3L1: 'Répondre à vos demandes de contact',
    s3L2: "Accompagner les demandes de prière et d'entretien pastoral",
    s3L3: "Organiser le service bénévole au sein de l'église",
    s3L4: "Vous informer des activités et événements de l'église (uniquement si vous y consentez)",
    s4Title: '4. Base légale',
    s4Text1: 'Le traitement est fondé sur votre ',
    s4Consent: 'consentement',
    s4Text2: ', matérialisé par la case à cocher présente sur chaque formulaire du site (article 6.1.a du RGPD).',
    s5Title: '5. Durée de conservation',
    s5Text1: 'Les données sont conservées pendant une durée maximale de ',
    s5Duration: '3 ans',
    s5Text2: ' à compter du dernier contact. Passé ce délai, elles sont supprimées.',
    s6Title: '6. Destinataires',
    s6Text: "Les données sont accessibles uniquement au corps pastoral et aux responsables de service de la Mission Évangélique Ephphatha. Elles ne sont jamais vendues, louées ou transmises à des tiers à des fins commerciales.",
    s7Title: '7. Vos droits',
    s7Text: 'Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :',
    s7R1Label: "Droit d'accès :",
    s7R1: ' obtenir une copie de vos données personnelles.',
    s7R2Label: 'Droit de rectification :',
    s7R2: ' corriger des données inexactes ou incomplètes.',
    s7R3Label: "Droit à l'effacement :",
    s7R3: ' demander la suppression de vos données.',
    s7R4Label: 'Droit à la limitation :',
    s7R4: ' limiter le traitement dans certains cas.',
    s7R5Label: "Droit d'opposition :",
    s7R5: " vous opposer au traitement de vos données.",
    s7R6Label: 'Droit à la portabilité :',
    s7R6: ' recevoir vos données dans un format structuré.',
    s7Contact: 'Pour exercer vos droits, contactez-nous à : ',
    s8Title: '8. Cookies',
    s8Text: "Ce site n'utilise pas de cookies de suivi publicitaire ni d'outils d'analyse comportementale. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.",
    s9Title: '9. Réclamation',
    s9Text1: 'Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l\'Informatique et des Libertés) : ',
    s9Link: 'www.cnil.fr',
    s9Text2: '.',
    lastUpdate: 'Dernière mise à jour : mars 2026',
  },
  en: {
    heroTitle: 'Privacy policy',
    s1Title: '1. Data controller',
    s1Text: 'The data controller for personal data is:',
    s1Org: 'Mission Évangélique Ephphatha',
    s1Addr: '14 Sirven Street, 31100 Toulouse',
    s1Email: 'Email: ephphatha.toulouse@gmail.com',
    s1Phone: 'Phone: +33 6 13 23 39 40',
    s2Title: '2. Data collected',
    s2Text: 'We collect the following data through the website forms:',
    s2L1: 'Last name and first name',
    s2L2: 'Email address',
    s2L3: 'Phone number',
    s2L4: 'Message or request',
    s2L5: 'Preferred areas of service ("Get involved" form)',
    s3Title: '3. Purpose of processing',
    s3Text: 'Personal data is used to:',
    s3L1: 'Respond to your contact requests',
    s3L2: 'Support prayer and pastoral counselling requests',
    s3L3: 'Organise volunteer service within the church',
    s3L4: 'Inform you of church activities and events (only with your consent)',
    s4Title: '4. Legal basis',
    s4Text1: 'Processing is based on your ',
    s4Consent: 'consent',
    s4Text2: ', evidenced by the checkbox on each form on the website (Article 6.1.a of the GDPR).',
    s5Title: '5. Data retention period',
    s5Text1: 'Data is retained for a maximum period of ',
    s5Duration: '3 years',
    s5Text2: ' from the last contact. After this period, it is deleted.',
    s6Title: '6. Recipients',
    s6Text: 'Data is accessible only to the pastoral team and service leaders of the Mission Évangélique Ephphatha. It is never sold, rented or shared with third parties for commercial purposes.',
    s7Title: '7. Your rights',
    s7Text: 'In accordance with the General Data Protection Regulation (GDPR), you have the following rights:',
    s7R1Label: 'Right of access:',
    s7R1: ' obtain a copy of your personal data.',
    s7R2Label: 'Right to rectification:',
    s7R2: ' correct inaccurate or incomplete data.',
    s7R3Label: 'Right to erasure:',
    s7R3: ' request the deletion of your data.',
    s7R4Label: 'Right to restriction:',
    s7R4: ' restrict processing in certain cases.',
    s7R5Label: 'Right to object:',
    s7R5: ' object to the processing of your data.',
    s7R6Label: 'Right to portability:',
    s7R6: ' receive your data in a structured format.',
    s7Contact: 'To exercise your rights, contact us at: ',
    s8Title: '8. Cookies',
    s8Text: 'This website does not use advertising tracking cookies or behavioural analytics tools. Only strictly necessary technical cookies for the operation of the site may be used.',
    s9Title: '9. Complaint',
    s9Text1: 'If you believe that the processing of your data does not comply with the regulations, you may file a complaint with the CNIL (Commission Nationale de l\'Informatique et des Libertés): ',
    s9Link: 'www.cnil.fr',
    s9Text2: '.',
    lastUpdate: 'Last updated: March 2026',
  },
} as const;

export default function PolitiqueConfidentialitePage() {
  const { locale } = useI18n();
  const t = T[locale];

  return (
    <div>
      <section className="hero-page min-h-[35vh] bg-brand-primary">
        <div className="relative z-10 container-page text-center">
          <h1 className="font-display text-3xl italic text-white sm:text-4xl lg:text-5xl">
            {t.heroTitle}
          </h1>
        </div>
      </section>

      <section className="section-spacing">
        <FadeIn className="container-page mx-auto max-w-3xl">
          <div className="prose prose-gray max-w-none space-y-8 text-[16px] leading-relaxed text-gray-600">
            <div>
              <h2 className="font-display text-xl italic text-brand-primary">{t.s1Title}</h2>
              <p>
                {t.s1Text}<br />
                <strong>{t.s1Org}</strong><br />
                {t.s1Addr}<br />
                {t.s1Email}<br />
                {t.s1Phone}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl italic text-brand-primary">{t.s2Title}</h2>
              <p>{t.s2Text}</p>
              <ul className="ml-5 list-disc space-y-1 text-gray-600">
                <li>{t.s2L1}</li>
                <li>{t.s2L2}</li>
                <li>{t.s2L3}</li>
                <li>{t.s2L4}</li>
                <li>{t.s2L5}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl italic text-brand-primary">{t.s3Title}</h2>
              <p>{t.s3Text}</p>
              <ul className="ml-5 list-disc space-y-1 text-gray-600">
                <li>{t.s3L1}</li>
                <li>{t.s3L2}</li>
                <li>{t.s3L3}</li>
                <li>{t.s3L4}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl italic text-brand-primary">{t.s4Title}</h2>
              <p>
                {t.s4Text1}<strong>{t.s4Consent}</strong>{t.s4Text2}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl italic text-brand-primary">{t.s5Title}</h2>
              <p>
                {t.s5Text1}<strong>{t.s5Duration}</strong>{t.s5Text2}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl italic text-brand-primary">{t.s6Title}</h2>
              <p>{t.s6Text}</p>
            </div>

            <div>
              <h2 className="font-display text-xl italic text-brand-primary">{t.s7Title}</h2>
              <p>{t.s7Text}</p>
              <ul className="ml-5 list-disc space-y-1 text-gray-600">
                <li><strong>{t.s7R1Label}</strong>{t.s7R1}</li>
                <li><strong>{t.s7R2Label}</strong>{t.s7R2}</li>
                <li><strong>{t.s7R3Label}</strong>{t.s7R3}</li>
                <li><strong>{t.s7R4Label}</strong>{t.s7R4}</li>
                <li><strong>{t.s7R5Label}</strong>{t.s7R5}</li>
                <li><strong>{t.s7R6Label}</strong>{t.s7R6}</li>
              </ul>
              <p className="mt-3">
                {t.s7Contact}<strong>ephphatha.toulouse@gmail.com</strong>
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl italic text-brand-primary">{t.s8Title}</h2>
              <p>{t.s8Text}</p>
            </div>

            <div>
              <h2 className="font-display text-xl italic text-brand-primary">{t.s9Title}</h2>
              <p>
                {t.s9Text1}<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">{t.s9Link}</a>{t.s9Text2}
              </p>
            </div>

            <p className="text-sm text-gray-400">{t.lastUpdate}</p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
