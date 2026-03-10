/**
 * Données du calendrier annuel de l'église : thèmes mensuels, événements spéciaux, cultes spéciaux du dimanche.
 * Année de référence affichée dans le calendrier interactif.
 */

export const CALENDAR_YEAR = 2026;

export type CalendarCategory = 'culte' | 'priere' | 'evangelisation' | 'autre';

export interface MonthTheme {
  theme: string;
  verseRef1: string;
  verseText1: string;
  verseRef2: string;
  verseText2: string;
}

export interface SpecialEventItem {
  titleFr: string;
  titleEn: string;
  time?: string;
  category: CalendarCategory;
}

/** Remplace le culte du dimanche pour cette date. */
export interface SpecialSunday {
  titleFr: string;
  titleEn: string;
  time: string;
}

/** Événements spéciaux par date (clé YYYY-MM-DD). */
export type SpecialEventsByDate = Record<string, SpecialEventItem[]>;

/** Cultes spéciaux du dimanche par date (clé YYYY-MM-DD). */
export type SpecialSundaysByDate = Record<string, SpecialSunday>;

/** Thèmes des 12 mois [0]=janvier … [11]=décembre. */
export interface CalendarThemes {
  fr: (MonthTheme | null)[];
  en: (MonthTheme | null)[];
}

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export function dateKey(year: number, month: number, day: number): string {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

// ——— Janvier 2025 ———
const THEME_JANUARY_FR: MonthTheme = {
  theme: 'LE MOIS DE LA RESTITUTION : SANTÉ, TRAVAIL, FOYER…',
  verseRef1: 'Proverbes 6:31',
  verseText1: "Si on le trouve, il fera une restitution au septuple, Il donnera tout ce qu'il a dans sa maison.",
  verseRef2: 'Job 20:18',
  verseText2: "Il rendra ce qu'il a gagné, et n'en profitera plus ; Il restituera tout ce qu'il a pris, et n'en jouira plus.",
};

const THEME_JANUARY_EN: MonthTheme = {
  theme: 'THE MONTH OF RESTITUTION: HEALTH, WORK, HOME…',
  verseRef1: 'Proverbs 6:31',
  verseText1: 'If caught, he must pay back sevenfold; he must give up all the wealth of his house.',
  verseRef2: 'Job 20:18',
  verseText2: 'He will give back what he toiled for and not swallow it; he will not enjoy the profit from his trading.',
};

// ——— Février ———
const THEME_FEBRUARY_FR: MonthTheme = {
  theme: "L'ESPRIT ENTRE EN EUX",
  verseRef1: 'Ézéchiel 2:2',
  verseText1: "Dès qu'il m'eut adressé ces mots, l'esprit entra en moi et me fit tenir sur mes pieds ; et j'entendis celui qui me parlait.",
  verseRef2: 'Ézéchiel 3:24',
  verseText2: "L'esprit entra en moi, et me fit tenir sur mes pieds. Et l'Éternel me parla et me dit : Va t'enfermer dans ta maison.",
};

const THEME_FEBRUARY_EN: MonthTheme = {
  theme: 'THE SPIRIT ENTERS INTO THEM',
  verseRef1: 'Ezekiel 2:2',
  verseText1: 'And as he spoke to me, the Spirit entered into me and set me on my feet; and I heard him speaking to me.',
  verseRef2: 'Ezekiel 3:24',
  verseText2: 'But the Spirit entered into me and set me on my feet; and he spoke with me and said to me: Go, shut yourself within your house.',
};

// ——— Mars ———
const THEME_MARCH_FR: MonthTheme = {
  theme: 'FLEURISSEMENT : TON DOSSIER EST CHOISI, TU FLEURIS',
  verseRef1: 'Nombres 17:8',
  verseText1: "Le lendemain, lorsque Moïse entra dans la tente du témoignage, voici, la verge d'Aaron, pour la maison de Lévi, avait fleuri, elle avait poussé des boutons, produit des fleurs, et mûri des amandes.",
  verseRef2: 'Nombres 17:8',
  verseText2: "Le lendemain, lorsque Moïse entra dans la tente du témoignage, voici, la verge d'Aaron, pour la maison de Lévi, avait fleuri, elle avait poussé des boutons, produit des fleurs, et mûri des amandes.",
};
const THEME_MARCH_EN: MonthTheme = {
  theme: 'FLOURISHING: YOUR FILE IS CHOSEN, YOU FLOURISH',
  verseRef1: 'Numbers 17:8',
  verseText1: 'On the next day Moses went into the tent of the testimony, and behold, the staff of Aaron for the house of Levi had sprouted and put forth buds and produced blossoms, and it bore ripe almonds.',
  verseRef2: 'Numbers 17:8',
  verseText2: 'On the next day Moses went into the tent of the testimony, and behold, the staff of Aaron for the house of Levi had sprouted and put forth buds and produced blossoms, and it bore ripe almonds.',
};

// ——— Avril ———
const THEME_APRIL_FR: MonthTheme = {
  theme: 'LE JUGEMENT DES IMPIES',
  verseRef1: 'Jude 1:15',
  verseText1: "pour exercer un jugement contre tous, et pour faire rendre compte à tous les impies parmi eux de tous les actes d'impiété qu'ils ont commis et de toutes les paroles injurieuses qu'ont proférées contre lui des pécheurs impies.",
  verseRef2: 'Job 34:30',
  verseText2: "Afin que l'impie ne domine plus, Et qu'il ne soit plus un piège pour le peuple.",
};
const THEME_APRIL_EN: MonthTheme = {
  theme: 'THE JUDGMENT OF THE UNGODLY',
  verseRef1: 'Jude 1:15',
  verseText1: 'To execute judgment upon all, and to convict all the ungodly of all their ungodly deeds which they have done in an ungodly way, and of all the harsh things which ungodly sinners have spoken against Him.',
  verseRef2: 'Job 34:30',
  verseText2: 'So that the ungodly may not rule and may no longer be a snare to the people.',
};

// ——— Mai ———
const THEME_MAY_FR: MonthTheme = {
  theme: 'LA RÉJOUISSANCE',
  verseRef1: 'Ésaïe 60:5',
  verseText1: "Tu tressailliras alors et tu te réjouiras, Et ton cœur bondira et se dilatera, Quand les richesses de la mer se tourneront vers toi, Quand les trésors des nations viendront à toi.",
  verseRef2: 'Ésaïe 60:5',
  verseText2: "Tu tressailliras alors et tu te réjouiras, Et ton cœur bondira et se dilatera, Quand les richesses de la mer se tourneront vers toi, Quand les trésors des nations viendront à toi.",
};
const THEME_MAY_EN: MonthTheme = {
  theme: 'THE REJOICING',
  verseRef1: 'Isaiah 60:5',
  verseText1: 'Then you will look and be radiant, and your heart will thrill and swell with joy; the wealth on the seas will be brought to you, to you the riches of the nations will come.',
  verseRef2: 'Isaiah 60:5',
  verseText2: 'Then you will look and be radiant, and your heart will thrill and swell with joy; the wealth on the seas will be brought to you, to you the riches of the nations will come.',
};

// ——— Juin ———
const THEME_JUNE_FR: MonthTheme = {
  theme: 'LES GRANDS ACCOMPLISSEMENTS',
  verseRef1: 'Ézéchiel 12:27-28',
  verseText1: "Fils de l'homme, voici, la maison d'Israël dit : Les visions qu'il a ne sont pas près de s'accomplir ; Il prophétise pour des temps éloignés.",
  verseRef2: 'Ézéchiel 12:28',
  verseText2: "C'est pourquoi dis-leur : Ainsi parle le Seigneur, l'Éternel : Il n'y aura plus de délai dans l'accomplissement de mes paroles ; La parole que je prononcerai s'accomplira, Dit le Seigneur, l'Éternel.",
};
const THEME_JUNE_EN: MonthTheme = {
  theme: 'THE GREAT ACHIEVEMENTS',
  verseRef1: 'Ezekiel 12:27-28',
  verseText1: 'Son of man, behold, the house of Israel is saying: The vision that he sees is for many years from now, and he prophesies of times far off.',
  verseRef2: 'Ezekiel 12:28',
  verseText2: 'Therefore say to them: Thus says the Lord God: None of my words will be delayed any longer. Whatever word I speak will be performed, declares the Lord God.',
};

// ——— Juillet ———
const THEME_JULY_FR: MonthTheme = {
  theme: 'LE RENOUVELLEMENT',
  verseRef1: 'Ésaïe 40:31',
  verseText1: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles ; Ils courent, et ne se lassent point, Ils marchent, et ne se fatiguent point.",
  verseRef2: 'Colossiens 3:10',
  verseText2: "et ayant revêtu l'homme nouveau, qui se renouvelle, dans la connaissance, selon l'image de celui qui l'a créé.",
};
const THEME_JULY_EN: MonthTheme = {
  theme: 'THE RENEWAL',
  verseRef1: 'Isaiah 40:31',
  verseText1: 'Yet those who wait for the Lord will gain new strength; they will mount up with wings like eagles, they will run and not get tired, they will walk and not become weary.',
  verseRef2: 'Colossians 3:10',
  verseText2: 'and have put on the new self, which is being renewed in knowledge in the image of its Creator.',
};

// ——— Août ———
const THEME_AUGUST_FR: MonthTheme = {
  theme: 'BONNES NOUVELLES',
  verseRef1: 'Luc 2:10-11',
  verseText1: "Mais l'ange leur dit : Ne craignez point ; car je vous annonce une bonne nouvelle, qui sera pour tout le peuple le sujet d'une grande joie : c'est qu'aujourd'hui, dans la ville de David, il vous est né un Sauveur, qui est le Christ, le Seigneur.",
  verseRef2: 'Luc 2:31-32',
  verseText2: "Salut que tu as préparé devant tous les peuples, Lumière pour éclairer les nations, Et gloire d'Israël, ton peuple.",
};
const THEME_AUGUST_EN: MonthTheme = {
  theme: 'GOOD NEWS',
  verseRef1: 'Luke 2:10-11',
  verseText1: 'But the angel said to them, "Do not be afraid; for behold, I bring you good news of great joy which will be for all the people; for today in the city of David there has been born for you a Savior, who is Christ the Lord."',
  verseRef2: 'Luke 2:31-32',
  verseText2: 'A salvation which You have prepared in the presence of all peoples; A Light of revelation to the Gentiles, And the glory of Your people Israel.',
};

// ——— Septembre ———
const THEME_SEPTEMBER_FR: MonthTheme = {
  theme: "ÉTABLISSEMENT",
  verseRef1: 'Ésaïe 49:6',
  verseText1: "Il dit : C'est peu que tu sois mon serviteur Pour relever les tribus de Jacob Et pour ramener les restes d'Israël : Je t'établis pour être la lumière des nations, Pour porter mon salut jusqu'aux extrémités de la terre.",
  verseRef2: 'Ésaïe 49:6',
  verseText2: "Il dit : C'est peu que tu sois mon serviteur Pour relever les tribus de Jacob Et pour ramener les restes d'Israël : Je t'établis pour être la lumière des nations, Pour porter mon salut jusqu'aux extrémités de la terre.",
};
const THEME_SEPTEMBER_EN: MonthTheme = {
  theme: 'ESTABLISHMENT',
  verseRef1: 'Isaiah 49:6',
  verseText1: 'He says: It is too small a thing that You should be My Servant to raise up the tribes of Jacob and to restore the preserved ones of Israel; I will also make You a light of the nations so that My salvation may reach to the end of the earth.',
  verseRef2: 'Isaiah 49:6',
  verseText2: 'He says: It is too small a thing that You should be My Servant to raise up the tribes of Jacob and to restore the preserved ones of Israel; I will also make You a light of the nations so that My salvation may reach to the end of the earth.',
};

// ——— Octobre ———
const THEME_OCTOBER_FR: MonthTheme = {
  theme: 'LES PORTES OUVERTES',
  verseRef1: 'Ésaïe 60:11',
  verseText1: "Tes portes seront toujours ouvertes, Elles ne seront fermées ni jour ni nuit, Afin de laisser entrer chez toi les trésors des nations, Et leurs rois avec leur suite.",
  verseRef2: 'Ésaïe 60:11',
  verseText2: "Tes portes seront toujours ouvertes, Elles ne seront fermées ni jour ni nuit, Afin de laisser entrer chez toi les trésors des nations, Et leurs rois avec leur suite.",
};
const THEME_OCTOBER_EN: MonthTheme = {
  theme: 'THE OPEN DOORS',
  verseRef1: 'Isaiah 60:11',
  verseText1: 'Your gates will be open continually; they will not be closed day or night, so that men may bring to you the wealth of the nations, with their kings led in procession.',
  verseRef2: 'Isaiah 60:11',
  verseText2: 'Your gates will be open continually; they will not be closed day or night, so that men may bring to you the wealth of the nations, with their kings led in procession.',
};

// ——— Novembre ———
const THEME_NOVEMBER_FR: MonthTheme = {
  theme: "TU NE VERRAS PLUS L'ASSYRIEN",
  verseRef1: 'Ésaïe 41:12',
  verseText1: "Tu les chercheras, et ne les trouveras plus, Ceux qui te suscitaient querelle ; Ils seront réduits à rien, réduits au néant, Ceux qui te faisaient la guerre.",
  verseRef2: 'Ésaïe 41:12',
  verseText2: "Tu les chercheras, et ne les trouveras plus, Ceux qui te suscitaient querelle ; Ils seront réduits à rien, réduits au néant, Ceux qui te faisaient la guerre.",
};
const THEME_NOVEMBER_EN: MonthTheme = {
  theme: 'YOU WILL NO LONGER SEE THE ASSYRIAN',
  verseRef1: 'Isaiah 41:12',
  verseText1: 'You will seek those who quarrel with you, but will not find them; those who war against you will be as nothing and non-existent.',
  verseRef2: 'Isaiah 41:12',
  verseText2: 'You will seek those who quarrel with you, but will not find them; those who war against you will be as nothing and non-existent.',
};

// ——— Décembre ———
const THEME_DECEMBER_FR: MonthTheme = {
  theme: "L'AUGMENTATION",
  verseRef1: 'Daniel 6:25',
  verseText1: "Le roi Darius écrivit à tous les peuples, à toutes les nations, aux hommes de toutes langues : Que la paix vous soit donnée avec abondance !",
  verseRef2: 'Genèse 2:11',
  verseText2: "Le nom du premier est Pischon ; c'est celui qui entoure tout le pays de Havila, où se trouve l'or.",
};
const THEME_DECEMBER_EN: MonthTheme = {
  theme: 'THE INCREASE',
  verseRef1: 'Daniel 6:25',
  verseText1: 'Then King Darius wrote to all the peoples, nations, and men of every language: May peace abound to you.',
  verseRef2: 'Genesis 2:11',
  verseText2: 'The name of the first is Pishon; it flows around the whole land of Havilah, where there is gold.',
};

export const calendarThemes: CalendarThemes = {
  fr: [
    THEME_JANUARY_FR,
    THEME_FEBRUARY_FR,
    THEME_MARCH_FR,
    THEME_APRIL_FR,
    THEME_MAY_FR,
    THEME_JUNE_FR,
    THEME_JULY_FR,
    THEME_AUGUST_FR,
    THEME_SEPTEMBER_FR,
    THEME_OCTOBER_FR,
    THEME_NOVEMBER_FR,
    THEME_DECEMBER_FR,
  ],
  en: [
    THEME_JANUARY_EN,
    THEME_FEBRUARY_EN,
    THEME_MARCH_EN,
    THEME_APRIL_EN,
    THEME_MAY_EN,
    THEME_JUNE_EN,
    THEME_JULY_EN,
    THEME_AUGUST_EN,
    THEME_SEPTEMBER_EN,
    THEME_OCTOBER_EN,
    THEME_NOVEMBER_EN,
    THEME_DECEMBER_EN,
  ],
};

const JAN_SPECIAL_SUNDAYS: SpecialSundaysByDate = {
  '2025-01-04': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-01-25': { titleFr: 'Culte des 1000', titleEn: 'Service of 1000', time: '7h30 · 9h · 11h' },
  '2026-01-04': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-01-25': { titleFr: 'Culte des 1000', titleEn: 'Service of 1000', time: '7h30 · 9h · 11h' },
};

const FEB_SPECIAL_SUNDAYS: SpecialSundaysByDate = {
  '2025-02-02': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-02-23': { titleFr: 'Culte des 1000 & Culte des nations', titleEn: 'Service of 1000 & Nations Service', time: '7h30 · 9h · 11h' },
  '2026-02-01': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-02-22': { titleFr: 'Culte des 1000 & Culte des nations', titleEn: 'Service of 1000 & Nations Service', time: '7h30 · 9h · 11h' },
};

const MAR_TO_DEC_SPECIAL_SUNDAYS: SpecialSundaysByDate = {
  '2025-03-02': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-03-30': { titleFr: 'Grande Invitation', titleEn: 'Great Invitation', time: '7h30 · 9h · 11h' },
  '2026-03-01': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-03-29': { titleFr: 'Grande Invitation', titleEn: 'Great Invitation', time: '7h30 · 9h · 11h' },
  '2025-04-05': { titleFr: 'Pâques – Culte de Célébration', titleEn: 'Easter – Celebration Service', time: '7h30 · 9h · 11h' },
  '2025-04-26': { titleFr: 'Culte des nations', titleEn: 'Nations Service', time: '7h30 · 9h · 11h' },
  '2026-04-05': { titleFr: 'Pâques – Culte de Célébration', titleEn: 'Easter – Celebration Service', time: '7h30 · 9h · 11h' },
  '2026-04-26': { titleFr: 'Culte des nations', titleEn: 'Nations Service', time: '7h30 · 9h · 11h' },
  '2025-05-03': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-05-17': { titleFr: 'CCR Lausanne', titleEn: 'CCR Lausanne', time: '7h30 · 9h · 11h' },
  '2025-05-24': { titleFr: 'Pentecôte', titleEn: 'Pentecost', time: '7h30 · 9h · 11h' },
  '2025-05-31': { titleFr: 'Fête des mères : Ma mère, Ma vie !', titleEn: "Mother's Day: My Mother, My Life!", time: '7h30 · 9h · 11h' },
  '2026-05-03': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-05-17': { titleFr: 'CCR Lausanne', titleEn: 'CCR Lausanne', time: '7h30 · 9h · 11h' },
  '2026-05-24': { titleFr: 'Pentecôte', titleEn: 'Pentecost', time: '7h30 · 9h · 11h' },
  '2026-05-31': { titleFr: 'Fête des mères : Ma mère, Ma vie !', titleEn: "Mother's Day: My Mother, My Life!", time: '7h30 · 9h · 11h' },
  '2025-06-07': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-06-14': { titleFr: 'Inauguration Ephphatha', titleEn: 'Ephphatha Inauguration', time: '7h30 · 9h · 11h' },
  '2026-06-07': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-06-14': { titleFr: 'Inauguration Ephphatha', titleEn: 'Ephphatha Inauguration', time: '7h30 · 9h · 11h' },
  '2025-07-05': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-07-26': { titleFr: 'Culte des nations', titleEn: 'Nations Service', time: '7h30 · 9h · 11h' },
  '2026-07-05': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-07-26': { titleFr: 'Culte des nations', titleEn: 'Nations Service', time: '7h30 · 9h · 11h' },
  '2025-08-02': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-08-17': { titleFr: 'Convention Shiny', titleEn: 'Shiny Convention', time: '7h30 · 9h · 11h' },
  '2026-08-02': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-08-17': { titleFr: 'Convention Shiny', titleEn: 'Shiny Convention', time: '7h30 · 9h · 11h' },
  '2025-09-06': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-09-27': { titleFr: 'Culte des nations', titleEn: 'Nations Service', time: '7h30 · 9h · 11h' },
  '2026-09-06': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-09-27': { titleFr: 'Culte des nations', titleEn: 'Nations Service', time: '7h30 · 9h · 11h' },
  '2025-10-04': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-10-04': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-11-08': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-11-29': { titleFr: 'Grande Invitation', titleEn: 'Great Invitation', time: '7h30 · 9h · 11h' },
  '2026-11-08': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-11-29': { titleFr: 'Grande Invitation', titleEn: 'Great Invitation', time: '7h30 · 9h · 11h' },
  '2025-12-06': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2025-12-13': { titleFr: "Founder's Day", titleEn: "Founder's Day", time: '7h30 · 9h · 11h' },
  '2025-12-20': { titleFr: 'CCR Rodez', titleEn: 'CCR Rodez', time: '7h30 · 9h · 11h' },
  '2025-12-27': { titleFr: 'Culte des nations', titleEn: 'Nations Service', time: '7h30 · 9h · 11h' },
  '2026-12-06': { titleFr: 'Culte des familles', titleEn: 'Family Service', time: '7h30 · 9h · 11h' },
  '2026-12-13': { titleFr: "Founder's Day", titleEn: "Founder's Day", time: '7h30 · 9h · 11h' },
  '2026-12-20': { titleFr: 'CCR Rodez', titleEn: 'CCR Rodez', time: '7h30 · 9h · 11h' },
  '2026-12-27': { titleFr: 'Culte des nations', titleEn: 'Nations Service', time: '7h30 · 9h · 11h' },
};

export const specialSundays: SpecialSundaysByDate = {
  ...JAN_SPECIAL_SUNDAYS,
  ...FEB_SPECIAL_SUNDAYS,
  ...MAR_TO_DEC_SPECIAL_SUNDAYS,
};

const janEventsForYear = (Y: number): SpecialEventsByDate => {
  const jan = (d: number) => dateKey(Y, 0, d);
  return {
  [jan(1)]: [
    { titleFr: "Jour de l'an", titleEn: "New Year's Day", category: 'autre' },
  ],
  [jan(4)]: [],
  [jan(5)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(6)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(7)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
    { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
    { titleFr: 'Femmes engagées', titleEn: 'Committed Women', category: 'culte' },
  ],
  [jan(8)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
    { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
  ],
  [jan(9)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
    { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
  ],
  [jan(10)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(11)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(12)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(13)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(14)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(15)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(16)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(17)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(18)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(19)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(20)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(21)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(22)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(23)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(24)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
  [jan(25)]: [
    { titleFr: '21 Jours de Jeûne et Prières', titleEn: '21 Days of Fasting and Prayer', category: 'priere' },
  ],
};
};

const febEventsForYear = (Y: number): SpecialEventsByDate => {
  const feb = (d: number) => dateKey(Y, 1, d);
  return {
    [feb(1)]: [],
    [feb(6)]: [{ titleFr: 'Camp Paris', titleEn: 'Paris Camp', category: 'autre' }],
    [feb(7)]: [{ titleFr: 'Camp Paris', titleEn: 'Paris Camp', category: 'autre' }],
    [feb(10)]: [{ titleFr: 'Camp Île de la Réunion', titleEn: 'Réunion Island Camp', category: 'autre' }],
    [feb(11)]: [
      { titleFr: 'Camp Île de la Réunion', titleEn: 'Réunion Island Camp', category: 'autre' },
      { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
    ],
    [feb(12)]: [
      { titleFr: 'Camp Île de la Réunion', titleEn: 'Réunion Island Camp', category: 'autre' },
      { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
    ],
    [feb(13)]: [
      { titleFr: 'Camp Île de la Réunion', titleEn: 'Réunion Island Camp', category: 'autre' },
      { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
    ],
    [feb(14)]: [{ titleFr: 'Camp Île de la Réunion', titleEn: 'Réunion Island Camp', category: 'autre' }],
    [feb(15)]: [{ titleFr: 'Camp Île de la Réunion', titleEn: 'Réunion Island Camp', category: 'autre' }],
    [feb(18)]: [{ titleFr: 'Convention Foursquare France Bordeaux', titleEn: 'Foursquare France Convention Bordeaux', category: 'culte' }],
    [feb(19)]: [{ titleFr: 'Convention Foursquare France Bordeaux', titleEn: 'Foursquare France Convention Bordeaux', category: 'culte' }],
    [feb(20)]: [{ titleFr: 'Convention Foursquare France Bordeaux', titleEn: 'Foursquare France Convention Bordeaux', category: 'culte' }],
    [feb(21)]: [{ titleFr: 'Convention Foursquare France Bordeaux', titleEn: 'Foursquare France Convention Bordeaux', category: 'culte' }],
    [feb(22)]: [],
    [feb(27)]: [{ titleFr: 'Programme spécial', titleEn: 'Special program', category: 'culte' }],
  };
};

const marEventsForYear = (Y: number): SpecialEventsByDate => {
  const mar = (d: number) => dateKey(Y, 2, d);
  return {
    [mar(1)]: [],
    [mar(3)]: [{ titleFr: 'Camp Guadeloupe', titleEn: 'Guadeloupe Camp', category: 'autre' }],
    [mar(4)]: [{ titleFr: 'Camp Guadeloupe', titleEn: 'Guadeloupe Camp', category: 'autre' }],
    [mar(5)]: [{ titleFr: 'Camp Guadeloupe', titleEn: 'Guadeloupe Camp', category: 'autre' }],
    [mar(6)]: [{ titleFr: 'Camp Guadeloupe', titleEn: 'Guadeloupe Camp', category: 'autre' }],
    [mar(7)]: [{ titleFr: 'Camp Guadeloupe', titleEn: 'Guadeloupe Camp', category: 'autre' }],
    [mar(11)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [mar(12)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [mar(13)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [mar(20)]: [{ titleFr: 'Camp Clermont-Ferrand', titleEn: 'Clermont-Ferrand Camp', category: 'autre' }],
    [mar(21)]: [{ titleFr: 'Camp Clermont-Ferrand', titleEn: 'Clermont-Ferrand Camp', category: 'autre' }],
    [mar(22)]: [{ titleFr: 'Camp Clermont-Ferrand', titleEn: 'Clermont-Ferrand Camp', category: 'autre' }],
    [mar(29)]: [],
  };
};

const aprEventsForYear = (Y: number): SpecialEventsByDate => {
  const apr = (d: number) => dateKey(Y, 3, d);
  return {
    [apr(3)]: [{ titleFr: 'Vendredi de Pâques Occitanie', titleEn: 'Good Friday Occitanie', category: 'culte' }],
    [apr(5)]: [],
    [apr(6)]: [{ titleFr: 'Lundi de Pâques', titleEn: 'Easter Monday', category: 'autre' }],
    [apr(7)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [apr(8)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [apr(9)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [apr(17)]: [{ titleFr: 'Camp Lyon', titleEn: 'Lyon Camp', category: 'autre' }],
    [apr(18)]: [{ titleFr: 'Camp Lyon', titleEn: 'Lyon Camp', category: 'autre' }],
    [apr(19)]: [{ titleFr: 'Camp Lyon', titleEn: 'Lyon Camp', category: 'autre' }],
    [apr(24)]: [{ titleFr: 'Amazone 24', titleEn: 'Amazone 24', category: 'culte' }],
    [apr(25)]: [{ titleFr: 'Grand R.O.C.', titleEn: 'Grand R.O.C.', category: 'culte' }],
    [apr(26)]: [],
  };
};

const mayEventsForYear = (Y: number): SpecialEventsByDate => {
  const may = (d: number) => dateKey(Y, 4, d);
  return {
    [may(1)]: [
      { titleFr: 'Fête du travail', titleEn: 'Labor Day', category: 'autre' },
      { titleFr: 'Camp des laïcs', titleEn: "Laymen's Camp", category: 'autre' },
    ],
    [may(3)]: [],
    [may(8)]: [{ titleFr: 'Victoire 1945', titleEn: 'Victory 1945 (VE Day)', category: 'autre' }],
    [may(9)]: [{ titleFr: 'Camp Montpellier', titleEn: 'Montpellier Camp', category: 'autre' }],
    [may(10)]: [{ titleFr: 'Camp Montpellier', titleEn: 'Montpellier Camp', category: 'autre' }],
    [may(13)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [may(14)]: [
      { titleFr: "L'Ascension", titleEn: 'Ascension Day', category: 'culte' },
      { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
    ],
    [may(15)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [may(17)]: [],
    [may(24)]: [],
    [may(25)]: [{ titleFr: 'Lundi de Pentecôte', titleEn: 'Pentecost Monday', category: 'autre' }],
    [may(31)]: [],
  };
};

const junEventsForYear = (Y: number): SpecialEventsByDate => {
  const jun = (d: number) => dateKey(Y, 5, d);
  return {
    [jun(6)]: [
      { titleFr: 'CCR Muret', titleEn: 'CCR Muret', category: 'culte' },
      { titleFr: 'Culte des familles', titleEn: 'Family Service', category: 'culte' },
    ],
    [jun(7)]: [],
    [jun(9)]: [{ titleFr: 'Camp Ephphatha Ramonville', titleEn: 'Ephphatha Ramonville Camp', category: 'autre' }],
    [jun(10)]: [{ titleFr: 'Camp Ephphatha Ramonville', titleEn: 'Ephphatha Ramonville Camp', category: 'autre' }],
    [jun(11)]: [{ titleFr: 'Camp Ephphatha Ramonville', titleEn: 'Ephphatha Ramonville Camp', category: 'autre' }],
    [jun(12)]: [{ titleFr: 'Camp Ephphatha Ramonville', titleEn: 'Ephphatha Ramonville Camp', category: 'autre' }],
    [jun(14)]: [],
    [jun(17)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [jun(18)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [jun(19)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [jun(22)]: [{ titleFr: 'Convention Annuelle Kara – Une grâce t\'a été faite', titleEn: 'Annual Kara Convention – A Grace Has Been Given to You', category: 'culte' }],
    [jun(23)]: [{ titleFr: 'Convention Annuelle Kara – Une grâce t\'a été faite', titleEn: 'Annual Kara Convention – A Grace Has Been Given to You', category: 'culte' }],
    [jun(24)]: [{ titleFr: 'Convention Annuelle Kara – Une grâce t\'a été faite', titleEn: 'Annual Kara Convention – A Grace Has Been Given to You', category: 'culte' }],
    [jun(25)]: [{ titleFr: 'Convention Annuelle Kara – Une grâce t\'a été faite', titleEn: 'Annual Kara Convention – A Grace Has Been Given to You', category: 'culte' }],
    [jun(26)]: [{ titleFr: 'Convention Annuelle Kara – Une grâce t\'a été faite', titleEn: 'Annual Kara Convention – A Grace Has Been Given to You', category: 'culte' }],
    [jun(27)]: [{ titleFr: 'Convention Annuelle Kara – Une grâce t\'a été faite', titleEn: 'Annual Kara Convention – A Grace Has Been Given to You', category: 'culte' }],
    [jun(28)]: [{ titleFr: 'Convention Annuelle Kara – Une grâce t\'a été faite', titleEn: 'Annual Kara Convention – A Grace Has Been Given to You', category: 'culte' }],
  };
};

const julEventsForYear = (Y: number): SpecialEventsByDate => {
  const jul = (d: number) => dateKey(Y, 6, d);
  return {
    [jul(4)]: [{ titleFr: 'Grand R.O.C.', titleEn: 'Grand R.O.C.', category: 'culte' }],
    [jul(5)]: [],
    [jul(10)]: [{ titleFr: 'Camp Normandie', titleEn: 'Normandy Camp', category: 'autre' }],
    [jul(11)]: [{ titleFr: 'Camp Normandie', titleEn: 'Normandy Camp', category: 'autre' }],
    [jul(12)]: [{ titleFr: 'Camp Normandie', titleEn: 'Normandy Camp', category: 'autre' }],
    [jul(14)]: [
      { titleFr: 'Fête Nationale', titleEn: 'National Holiday', category: 'autre' },
      { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
    ],
    [jul(15)]: [
      { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
      { titleFr: 'Camp Sainte-Lucie', titleEn: 'Saint Lucia Camp', category: 'autre' },
    ],
    [jul(16)]: [
      { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
      { titleFr: 'Camp Sainte-Lucie', titleEn: 'Saint Lucia Camp', category: 'autre' },
    ],
    [jul(17)]: [
      { titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' },
      { titleFr: 'Camp Sainte-Lucie', titleEn: 'Saint Lucia Camp', category: 'autre' },
    ],
    [jul(18)]: [{ titleFr: 'Camp Sainte-Lucie', titleEn: 'Saint Lucia Camp', category: 'autre' }],
    [jul(19)]: [{ titleFr: 'Camp Sainte-Lucie', titleEn: 'Saint Lucia Camp', category: 'autre' }],
    [jul(20)]: [{ titleFr: 'Camp Martinique', titleEn: 'Martinique Camp', category: 'autre' }],
    [jul(21)]: [{ titleFr: 'Camp Martinique', titleEn: 'Martinique Camp', category: 'autre' }],
    [jul(22)]: [{ titleFr: 'Camp Martinique', titleEn: 'Martinique Camp', category: 'autre' }],
    [jul(23)]: [{ titleFr: 'Camp Martinique', titleEn: 'Martinique Camp', category: 'autre' }],
    [jul(24)]: [{ titleFr: 'Camp Martinique', titleEn: 'Martinique Camp', category: 'autre' }],
    [jul(26)]: [],
  };
};

const augEventsForYear = (Y: number): SpecialEventsByDate => {
  const aug = (d: number) => dateKey(Y, 7, d);
  return {
    [aug(1)]: [],
    [aug(2)]: [],
    [aug(4)]: [{ titleFr: 'Donne-toi tout entier Ghana', titleEn: 'Give Yourself Wholly Ghana', category: 'culte' }],
    [aug(5)]: [{ titleFr: 'Donne-toi tout entier Ghana', titleEn: 'Give Yourself Wholly Ghana', category: 'culte' }],
    [aug(6)]: [{ titleFr: 'Donne-toi tout entier Ghana', titleEn: 'Give Yourself Wholly Ghana', category: 'culte' }],
    [aug(7)]: [{ titleFr: 'Donne-toi tout entier Ghana', titleEn: 'Give Yourself Wholly Ghana', category: 'culte' }],
    [aug(15)]: [{ titleFr: 'Assomption', titleEn: 'Assumption', category: 'culte' }],
    [aug(17)]: [],
    [aug(18)]: [{ titleFr: 'Douleuo Afrique Edition Gabon', titleEn: 'Douleuo Africa Edition Gabon', category: 'culte' }],
    [aug(19)]: [{ titleFr: 'Douleuo Afrique Edition Gabon', titleEn: 'Douleuo Africa Edition Gabon', category: 'culte' }],
    [aug(20)]: [{ titleFr: 'Douleuo Afrique Edition Gabon', titleEn: 'Douleuo Africa Edition Gabon', category: 'culte' }],
    [aug(21)]: [{ titleFr: 'Douleuo Afrique Edition Gabon', titleEn: 'Douleuo Africa Edition Gabon', category: 'culte' }],
    [aug(22)]: [{ titleFr: 'Douleuo Afrique Edition Gabon', titleEn: 'Douleuo Africa Edition Gabon', category: 'culte' }],
    [aug(25)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [aug(26)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [aug(27)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [aug(30)]: [{ titleFr: 'Grande Invitation', titleEn: 'Great Invitation', category: 'culte' }],
  };
};

const sepEventsForYear = (Y: number): SpecialEventsByDate => {
  const sep = (d: number) => dateKey(Y, 8, d);
  return {
    [sep(6)]: [],
    [sep(11)]: [{ titleFr: 'Femmes engagées', titleEn: 'Committed Women', category: 'culte' }],
    [sep(15)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [sep(16)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [sep(17)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [sep(18)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [sep(24)]: [{ titleFr: 'Camp Albi', titleEn: 'Albi Camp', category: 'autre' }],
    [sep(25)]: [{ titleFr: 'Camp Albi', titleEn: 'Albi Camp', category: 'autre' }],
    [sep(26)]: [{ titleFr: 'Camp Albi', titleEn: 'Albi Camp', category: 'autre' }],
    [sep(27)]: [],
  };
};

const octEventsForYear = (Y: number): SpecialEventsByDate => {
  const oct = (d: number) => dateKey(Y, 9, d);
  return {
    [oct(2)]: [{ titleFr: 'Camp Bordeaux', titleEn: 'Bordeaux Camp', category: 'autre' }],
    [oct(3)]: [{ titleFr: 'Camp Bordeaux', titleEn: 'Bordeaux Camp', category: 'autre' }],
    [oct(4)]: [],
    [oct(10)]: [{ titleFr: 'Grand R.O.C.', titleEn: 'Grand R.O.C.', category: 'culte' }],
    [oct(13)]: [{ titleFr: 'Camp Gabon & Inauguration', titleEn: 'Gabon Camp & Inauguration', category: 'culte' }],
    [oct(14)]: [{ titleFr: 'Camp Gabon & Inauguration', titleEn: 'Gabon Camp & Inauguration', category: 'culte' }],
    [oct(15)]: [{ titleFr: 'Camp Gabon & Inauguration', titleEn: 'Gabon Camp & Inauguration', category: 'culte' }],
    [oct(16)]: [{ titleFr: 'Camp Gabon & Inauguration', titleEn: 'Gabon Camp & Inauguration', category: 'culte' }],
    [oct(21)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [oct(22)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [oct(23)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [oct(26)]: [{ titleFr: 'Douleuo Europe Edition Toulouse', titleEn: 'Douleuo Europe Edition Toulouse', category: 'culte' }],
    [oct(27)]: [{ titleFr: 'Douleuo Europe Edition Toulouse', titleEn: 'Douleuo Europe Edition Toulouse', category: 'culte' }],
    [oct(28)]: [{ titleFr: 'Douleuo Europe Edition Toulouse', titleEn: 'Douleuo Europe Edition Toulouse', category: 'culte' }],
    [oct(29)]: [{ titleFr: 'Douleuo Europe Edition Toulouse', titleEn: 'Douleuo Europe Edition Toulouse', category: 'culte' }],
    [oct(30)]: [{ titleFr: 'Douleuo Europe Edition Toulouse', titleEn: 'Douleuo Europe Edition Toulouse', category: 'culte' }],
    [oct(31)]: [{ titleFr: 'Douleuo Europe Edition Toulouse', titleEn: 'Douleuo Europe Edition Toulouse', category: 'culte' }],
  };
};

const novEventsForYear = (Y: number): SpecialEventsByDate => {
  const nov = (d: number) => dateKey(Y, 10, d);
  return {
    [nov(1)]: [{ titleFr: 'Douleuo Europe Edition Toulouse', titleEn: 'Douleuo Europe Edition Toulouse', category: 'culte' }],
    [nov(8)]: [],
    [nov(11)]: [{ titleFr: 'Armistice', titleEn: 'Armistice Day', category: 'autre' }],
    [nov(13)]: [{ titleFr: 'Camp Pau', titleEn: 'Pau Camp', category: 'autre' }],
    [nov(14)]: [{ titleFr: 'Camp Pau', titleEn: 'Pau Camp', category: 'autre' }],
    [nov(24)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [nov(25)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [nov(26)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [nov(27)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [nov(29)]: [],
  };
};

const decEventsForYear = (Y: number): SpecialEventsByDate => {
  const dec = (d: number) => dateKey(Y, 11, d);
  return {
    [dec(4)]: [{ titleFr: 'Femmes engagées', titleEn: 'Committed Women', category: 'culte' }],
    [dec(6)]: [],
    [dec(10)]: [{ titleFr: "Founder's Day", titleEn: "Founder's Day", category: 'culte' }],
    [dec(13)]: [],
    [dec(15)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [dec(16)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [dec(17)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [dec(18)]: [{ titleFr: 'Retraite Pastorale', titleEn: 'Pastoral Retreat', category: 'priere' }],
    [dec(20)]: [],
    [dec(25)]: [{ titleFr: 'Noël', titleEn: 'Christmas', category: 'culte' }],
    [dec(27)]: [],
  };
};

export const specialEvents: SpecialEventsByDate = {
  ...janEventsForYear(2025),
  ...janEventsForYear(2026),
  ...febEventsForYear(2025),
  ...febEventsForYear(2026),
  ...marEventsForYear(2025),
  ...marEventsForYear(2026),
  ...aprEventsForYear(2025),
  ...aprEventsForYear(2026),
  ...mayEventsForYear(2025),
  ...mayEventsForYear(2026),
  ...junEventsForYear(2025),
  ...junEventsForYear(2026),
  ...julEventsForYear(2025),
  ...julEventsForYear(2026),
  ...augEventsForYear(2025),
  ...augEventsForYear(2026),
  ...sepEventsForYear(2025),
  ...sepEventsForYear(2026),
  ...octEventsForYear(2025),
  ...octEventsForYear(2026),
  ...novEventsForYear(2025),
  ...novEventsForYear(2026),
  ...decEventsForYear(2025),
  ...decEventsForYear(2026),
};
