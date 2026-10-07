import { WashingMachine } from 'lucide-react'
import { business, hours, navLinks } from '@/lib/business'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 md:py-14 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <WashingMachine className="size-6" aria-hidden="true" />
            </span>
            <p className="font-extrabold">{business.name}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-background/75">Serving the Cullen & Pearland Areas</p>
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
              {`Call ${business.phone}`}
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground hover:opacity-90"
            >
              Get Directions
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="font-extrabold">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-background/75">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-8 items-center hover:text-background">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-extrabold">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-background/75">
            <li>Self-Service Washers</li>
            <li>Self-Service Dryers</li>
            <li>Wash, Dry & Fold</li>
            <li>Comforters, Blankets & Rugs</li>
          </ul>
        </div>

        <div>
          <p className="font-extrabold">Store Hours</p>
          <dl className="mt-3 space-y-1 text-sm text-background/75">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-3">
                <dt>{h.day}</dt>
                <dd className="whitespace-nowrap tabular-nums">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-background/15 pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-background/70">
          {`© ${new Date().getFullYear()} ${business.fullName}`}
        </p>
      </div>
    </footer>
  )
}
