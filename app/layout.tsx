import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'Fresh Wash Washateria | Laundromat & Wash Dry Fold Serving Cullen & Pearland',
  description:
    'Self-service laundry and Wash, Dry & Fold service at Fresh Wash Washateria, 14450 Old Chocolate Bayou Rd Ste A, Houston, TX 77048. Serving the Cullen & Pearland areas. Open 7 days from 7 AM.',
  keywords: [
    'washateria',
    'laundromat',
    'laundry',
    'wash dry fold',
    'self-service laundry',
    'Cullen laundromat',
    'Pearland laundromat',
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f7ac4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
