import type { Metadata } from 'next'
import { RootShell } from '@/components/root-shell'
import { BrandMark, Wordmark } from '@/components/brand-mark'
import { business } from '@/lib/business'
import { baseMetadata } from '@/lib/metadata'
import './globals.css'

// The app has two root layouts ((en) and (es)), so unmatched URLs need this standalone 404.
export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Page not found | FreshWash Washateria',
  robots: { index: false, follow: true },
}

export default function GlobalNotFound() {
  return (
    <RootShell lang="en">
      <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-6 px-safe py-16 text-center">
        <a href="/" className="flex items-center gap-2 text-xl">
          <BrandMark id="404" className="size-12 rounded-xl" />
          <Wordmark />
        </a>
        <h1 className="text-3xl font-extrabold">Page not found</h1>
        <p className="leading-relaxed text-muted-foreground">
          This page doesn’t exist. Try one of these instead, or call us at{' '}
          <a href={business.phoneHref} className="font-bold text-primary underline underline-offset-4">
            {business.phone}
          </a>
          .
        </p>
        <ul className="flex flex-wrap justify-center gap-3 font-bold">
          {[
            { href: '/', label: 'Laundromat home' },
            { href: '/wash-and-fold', label: 'Wash, Dry & Fold' },
            { href: '/es', label: 'Español' },
          ].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-11 items-center rounded-full border-2 border-primary px-4 text-primary hover:bg-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </RootShell>
  )
}
