import { business } from '@/lib/business'
import { type Locale, hoursFor, ui } from '@/lib/i18n'
import { BrandMark, Wordmark } from '@/components/brand-mark'

export function SiteFooter({ locale = 'en' }: { locale?: Locale }) {
  const t = ui[locale]
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-safe py-10 sm:grid-cols-2 sm:gap-10 md:py-14 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <BrandMark id="footer" className="size-10 rounded-xl" />
            <Wordmark inverted />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-background/75">{t.serving}</p>
          <address className="mt-3 text-sm not-italic leading-relaxed text-background/75">
            {business.street}
            <br />
            {business.cityStateZip}
          </address>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex min-h-11 items-center rounded-full border border-background/40 px-4 text-sm font-bold text-background hover:bg-background/10"
            >
              {`${t.call} ${business.phone}`}
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground hover:opacity-90"
            >
              {t.directions}
            </a>
          </div>
        </div>

        <nav aria-label={t.quickLinks}>
          <p className="font-extrabold">{t.quickLinks}</p>
          <ul className="mt-3 space-y-1 text-sm text-background/75">
            {t.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-10 items-center hover:text-background">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-extrabold">{t.services}</p>
          <ul className="mt-3 space-y-1 text-sm text-background/75">
            {t.serviceLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-10 items-center hover:text-background">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-extrabold">{t.storeHours}</p>
          <dl className="mt-3 space-y-1 text-sm text-background/75">
            {hoursFor(locale).map((h) => (
              <div key={h.day} className="flex justify-between gap-3">
                <dt>{h.day}</dt>
                <dd className="whitespace-nowrap tabular-nums">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-background/15 pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
        <p className="mx-auto max-w-6xl px-safe py-5 text-xs text-background/70">
          {`© ${new Date().getFullYear()} ${business.fullName}`}
        </p>
      </div>
    </footer>
  )
}
