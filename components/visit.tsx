import { MapPin, Navigation } from 'lucide-react'
import { business } from '@/lib/business'

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-5 md:px-6 md:py-20">
        <div className="flex flex-col gap-5 md:col-span-2">
          <h2 className="text-balance text-3xl font-extrabold md:text-4xl">Visit Us</h2>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
            <address className="not-italic leading-relaxed">
              <span className="block font-bold">{business.fullName}</span>
              <span className="block">{business.street}</span>
              <span className="block">{business.cityStateZip}</span>
            </address>
          </div>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Navigation className="size-5" aria-hidden="true" />
            Open in Google Maps
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border bg-card shadow-sm md:col-span-3">
          <iframe
            title={`Map showing ${business.name} location`}
            src={business.mapsEmbedUrl}
            className="h-80 w-full md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
