import { Navigation, Phone, Tag } from 'lucide-react'
import { business } from '@/lib/business'
import { type Locale, ui } from '@/lib/i18n'

export function MobileActionBar({ locale = 'en' }: { locale?: Locale }) {
  const t = ui[locale]
  return (
    <nav
      aria-label={t.quickActions}
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 md:hidden"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
      <ul className="grid grid-cols-3 gap-2 px-3 py-2">
        <li>
          <a
            href={business.phoneHref}
            className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-primary text-xs font-bold text-primary active:bg-secondary"
          >
            <Phone className="size-5" aria-hidden="true" />
            {t.callUs}
          </a>
        </li>
        <li>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl bg-primary text-xs font-bold text-primary-foreground active:opacity-90"
          >
            <Navigation className="size-5" aria-hidden="true" />
            {t.directionsShort}
          </a>
        </li>
        <li>
          <a
            href={t.pricesHref}
            className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-primary text-xs font-bold text-primary active:bg-secondary"
          >
            <Tag className="size-5" aria-hidden="true" />
            {t.prices}
          </a>
        </li>
      </ul>
    </nav>
  )
}
