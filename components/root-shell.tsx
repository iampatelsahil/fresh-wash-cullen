import { Analytics } from '@vercel/analytics/next'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito', display: 'swap' })

// <html>/<body> shared by the English and Spanish root layouts, which differ only in `lang`.
export function RootShell({ lang, children }: { lang: 'en' | 'es'; children: React.ReactNode }) {
  return (
    <html lang={lang} className={nunito.variable}>
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
