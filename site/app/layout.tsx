import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "../components/I18nProvider";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { FloatingBar } from "../components/FloatingBar";
import { getBaseUrl, SITE_NAME, DEFAULT_DESCRIPTION_FR } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const baseUrl = getBaseUrl();

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/logo.png`,
    width: 512,
    height: 512,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: baseUrl,
  publisher: { "@id": `${baseUrl}/#organization` },
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE_NAME} – Ouvre-toi`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION_FR,
  keywords: [
    "église Toulouse",
    "Ephphatha",
    "Mission Évangélique",
    "culte Toulouse",
    "église Toulouse",
    "UEPCCR",
    "Centre Chrétien de Réveil",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Ouvre-toi`,
    description: DEFAULT_DESCRIPTION_FR,
    url: baseUrl,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: `${SITE_NAME} – Ouvre-toi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Ouvre-toi`,
    description: DEFAULT_DESCRIPTION_FR,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              { ...organizationJsonLd, "@id": `${baseUrl}/#organization` },
              websiteJsonLd,
            ]),
          }}
        />
        <I18nProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <FloatingBar />
        </I18nProvider>
      </body>
    </html>
  );
}
