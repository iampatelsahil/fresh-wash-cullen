import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { seo, siteUrl } from '@/lib/business'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: seo.siteName,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Phone numbers and the address are already explicit links; stop iOS from auto-linking prices or machine counts.
  formatDetection: { telephone: false, address: false, email: false },
  // Home-screen title only — the site keeps opening in the normal browser.
  appleWebApp: { capable: false, title: 'FreshWash', statusBarStyle: 'default' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: seo.siteName,
    title: seo.title,
    description: seo.shareDescription,
    images: [{ ...seo.ogImage, type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.shareDescription,
    images: [{ url: seo.ogImage.url, alt: seo.ogImage.alt }],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
  themeColor: seo.themeColor,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="antialiased">
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
