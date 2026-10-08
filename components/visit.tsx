import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { business } from '@/lib/business'
import { Reveal } from '@/components/reveal'

export function Visit() {
  return (
    <section id="contact" className="py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-safe md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="flex h-full flex-col gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Contact & Location</p>
              <h2 className="mt-2 text-balance text-3xl font-extrabold md:text-4xl">Come see us</h2>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                <span className="block font-bold">{business.fullName}</span>
                <span className="block">{business.street}</span>
                <span className="block">{business.cityStateZip}</span>
              </address>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="leading-relaxed">
                <span className="block text-sm font-semibold text-muted-foreground">Call the store</span>
                <a href={business.phoneHref} className="text-lg font-bold text-primary hover:underline">
                  {business.phone}
                </a>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="leading-relaxed">
                <span className="block font-bold">Mon – Fri: 7:00 AM – 10:00 PM</span>
                <span className="block font-bold">Sat – Sun: 7:00 AM – 11:00 PM</span>
                <a href="#hours" className="text-sm font-semibold text-primary hover:underline">
                  See full store hours
                </a>
              </p>
            </div>
            <div className="mt-auto flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Navigation className="size-5" aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3.5 font-bold text-primary transition-colors hover:bg-secondary"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal className="md:col-span-3">
          <div className="h-full overflow-hidden rounded-3xl border bg-card shadow-sm">
            <iframe
              title={`Map showing ${business.name} location`}
              src={business.mapsEmbedUrl}
              className="h-80 w-full md:h-full md:min-h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
