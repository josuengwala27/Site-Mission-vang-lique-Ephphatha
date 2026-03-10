/**
 * Constantes et helpers pour les métadonnées et le SEO.
 */

export const SITE_NAME = 'Mission Évangélique Ephphatha';
export const SITE_NAME_SHORT = 'Ephphatha';

export const DEFAULT_DESCRIPTION_FR =
  'Mission Évangélique Ephphatha, une église de la destinée à Toulouse – lieu de prière, de guérison et de transformation.';

export const DEFAULT_DESCRIPTION_EN =
  'Ephphatha Evangelical Mission, a church of destiny in Toulouse – a place of prayer, healing and transformation.';

/** URL de base du site (pour Open Graph, canonical). À définir dans NEXT_PUBLIC_SITE_URL en production. */
export function getBaseUrl(): string {
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  return 'https://www.ephphatha.fr';
}
