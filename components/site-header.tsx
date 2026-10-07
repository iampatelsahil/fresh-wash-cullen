'use client'

import { useState } from 'react'
import { Clock, Menu, Navigation, Phone, WashingMachine, X } from 'lucide-react'
import { business, navLinks } from '@/lib/business'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground">
        <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold md:text-sm">
          <Clock className="size-4 shrink-0" aria-hidden="true" />
          {'Open 7 days: 7:00 AM – 10:00 PM · Sat & Sun until 11:00 PM'}
        </p>
      </div>
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <WashingMachine className="size-6" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-extrabold">{business.name}</span>
              <span className="block text-xs font-semibold text-muted-foreground">Cullen · Wash & Fold</span>
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

          <div className="flex items-center gap-2">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-3 py-2 text-sm font-bold text-primary transition-colors hover:bg-secondary sm:px-4"
            >
              <Phone className="size-4" aria-hidden="true" />
              <span className="sr-only sm:not-sr-only">{business.phone}</span>
              <span className="sm:hidden" aria-hidden="true">Call</span>
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Get Directions
            </a>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </nav>

        {open && (
          <div id="mobile-menu" className="border-t lg:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-semibold hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={business.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-primary px-4 py-3 font-bold text-primary"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {`Call ${business.phone}`}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-bold text-primary-foreground"
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
