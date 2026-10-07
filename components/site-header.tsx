'use client'

import { useEffect, useState } from 'react'
import { Clock, Menu, Navigation, Phone, WashingMachine, X } from 'lucide-react'
import { business, navLinks } from '@/lib/business'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="bg-primary text-primary-foreground">
        <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-1.5 text-center text-xs font-semibold md:py-2 md:text-sm">
          <Clock className="size-4 shrink-0" aria-hidden="true" />
          <span className="sm:hidden">{'Open 7 days · 7 AM – 10 PM (Sat–Sun 11 PM)'}</span>
          <span className="hidden sm:inline">{'Open 7 days: 7:00 AM – 10:00 PM · Sat & Sun until 11:00 PM'}</span>
        </p>
      </div>
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <a href="#home" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <WashingMachine className="size-6" aria-hidden="true" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-base font-extrabold">{business.name}</span>
              <span className="block truncate text-xs font-semibold text-muted-foreground">
                Cullen · Pearland · Wash & Fold
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={business.phoneHref}
              className="hidden min-h-11 items-center gap-2 rounded-full border-2 border-primary px-4 text-sm font-bold text-primary transition-colors hover:bg-secondary md:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              {business.phone}
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Get Directions
            </a>
            <button
              type="button"
              className="inline-flex size-12 items-center justify-center rounded-full border-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </nav>

        {open && (
          <div
            id="mobile-menu"
            className="max-h-[calc(100dvh-6.5rem)] overflow-y-auto overscroll-contain border-t lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="grid gap-3 pt-3 sm:grid-cols-2">
                <a
                  href={business.phoneHref}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-primary px-4 font-bold text-primary"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {`Call ${business.phone}`}
                </a>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 font-bold text-primary-foreground"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
