'use client'

import { useEffect, useRef, useState } from 'react'
import { Clock, Languages, Menu, Navigation, Phone, X } from 'lucide-react'
import { business } from '@/lib/business'
import { type Locale, ui } from '@/lib/i18n'
import { BrandMark, Wordmark } from '@/components/brand-mark'

export function SiteHeader({ locale = 'en' }: { locale?: Locale }) {
  const t = ui[locale]
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false)
    }
    // Tapping anywhere outside the header closes the menu.
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        // Paint only the status-bar / notch strip blue so it continues the top bar.
        backgroundImage: 'linear-gradient(var(--primary), var(--primary))',
        backgroundSize: '100% env(safe-area-inset-top)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-primary text-primary-foreground short-landscape:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-safe text-xs font-semibold md:text-sm">
          <p className="flex min-w-0 items-center gap-2 py-1.5 md:py-2">
            <Clock className="size-4 shrink-0" aria-hidden="true" />
            <span className="sm:hidden">{t.hoursShort}</span>
            <span className="hidden sm:inline">{t.hoursLong}</span>
          </p>
          <a
            href={t.switchHref}
            hrefLang={t.switchLang}
            lang={t.switchLang}
            title={t.switchTitle}
            className="hidden shrink-0 items-center gap-1.5 rounded-full px-2 py-1 font-bold underline-offset-4 hover:underline sm:inline-flex"
          >
            <Languages className="size-4" aria-hidden="true" />
            {t.switchLabel}
          </a>
        </div>
      </div>
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <nav aria-label={t.mainNav} className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-safe">
          <a href={t.home} className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
            <BrandMark id="header" className="size-10 rounded-xl" />
            <span className="min-w-0 leading-tight">
              <Wordmark className="block truncate text-[0.9375rem] min-[360px]:text-base" />
              <span className="block truncate text-xs font-semibold text-muted-foreground">{t.tagline}</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {t.nav.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-3 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={business.phoneHref}
              className="hidden min-h-11 items-center gap-2 whitespace-nowrap rounded-full border-2 border-primary px-4 text-sm font-bold text-primary transition-colors hover:bg-secondary md:inline-flex lg:hidden xl:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              {business.phone}
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
            >
              <Navigation className="size-4" aria-hidden="true" />
              {t.directions}
            </a>
            <button
              type="button"
              ref={toggleRef}
              className="inline-flex size-12 items-center justify-center rounded-full border-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
              <span className="sr-only">{open ? t.closeMenu : t.openMenu}</span>
            </button>
          </div>
        </nav>

        {open && (
          <div
            id="mobile-menu"
            className="mobile-menu overflow-y-auto overscroll-contain border-t lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-safe pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
              {t.nav.map((link) => (
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
              <li>
                <a
                  href={t.switchHref}
                  hrefLang={t.switchLang}
                  lang={t.switchLang}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center gap-2 rounded-xl px-3 text-base font-bold text-primary hover:bg-secondary"
                >
                  <Languages className="size-5" aria-hidden="true" />
                  {t.switchLabel}
                </a>
              </li>
              <li className="grid gap-3 pt-3 sm:grid-cols-2">
                <a
                  href={business.phoneHref}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-primary px-4 font-bold text-primary"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {`${t.call} ${business.phone}`}
                </a>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 font-bold text-primary-foreground"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  {t.directions}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
