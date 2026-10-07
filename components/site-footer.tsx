import { WashingMachine } from 'lucide-react'
import { business, hours, navLinks } from '@/lib/business'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
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
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-bold text-background underline-offset-4 hover:underline"
          >
            Get Directions
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="font-extrabold">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-background/75">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-background">
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
              <div key={h.day} className="flex justify-between gap-4">
                <dt>{h.day}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-background/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-background/60">
          {`© ${new Date().getFullYear()} ${business.fullName}`}
        </p>
      </div>
    </footer>
  )
}
