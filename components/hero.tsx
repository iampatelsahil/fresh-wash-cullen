import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { business } from '@/lib/business'

export function Hero() {
  return (
    <section id="top" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div className="flex flex-col gap-6">
          <p className="w-fit rounded-full bg-background px-3 py-1 text-sm font-bold text-primary">
            Washateria in {business.location} &middot; Houston, TX
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-5xl">
            Fresh, clean laundry at <span className="text-primary">{business.name}</span>
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Do it yourself at our self service washateria, or drop it off for our wash, dry &amp;
            fold service.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MapPin className="size-5" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border-2 border-primary bg-background px-6 py-3 font-bold text-primary transition-colors hover:bg-accent"
            >
              Our Services
            </a>
          </div>
          <address className="not-italic text-sm text-muted-foreground">
            {business.street}, {business.cityStateZip}
          </address>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/laundry-hero.png"
            alt="Bright laundromat with rows of washing machines and stacks of freshly folded towels"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
