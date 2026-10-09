import type { Metadata, Viewport } from 'next'
import { seo, siteUrl } from '@/lib/business'

// Shared by both root layouts ((en) and (es)); pages set their own title, description,
// canonical, hreflang and Open Graph text via pageMetadata().
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: seo.siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Phone numbers and the address are already explicit links; stop iOS from auto-linking prices or machine counts.
  formatDetection: { telephone: false, address: false, email: false },
  // Home-screen title only — the site keeps opening in the normal browser.
  appleWebApp: { capable: false, title: 'FreshWash', statusBarStyle: 'default' },
  // ?v= forces browsers and Google to re-download icons that were cached under the same URL.
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: '16x16 32x32 48x48' },
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon-48x48.png?v=2', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png?v=2', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
  themeColor: seo.themeColor,
}

type PageMeta = {
  path: string
  title: string
  description: string
  shareDescription?: string
  locale?: 'en' | 'es'
  // Equivalent page in the other language, if one exists.
  alternates?: { en: string; es: string }
  image?: { url: string; width: number; height: number; alt: string }
}

export function pageMetadata({
  path,
  title,
  description,
  shareDescription = description,
  locale = 'en',
  alternates,
  image = seo.ogImage,
}: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: alternates && { 'en-US': alternates.en, 'es-US': alternates.es, 'x-default': alternates.en },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
      alternateLocale: alternates ? (locale === 'es' ? 'en_US' : 'es_US') : undefined,
      url: path,
      siteName: seo.siteName,
      title,
      description: shareDescription,
      images: [{ ...image, type: 'image/jpeg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: shareDescription,
      images: [{ url: image.url, alt: image.alt }],
    },
  }
}
