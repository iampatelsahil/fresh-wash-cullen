import Image from 'next/image'
import { MapPin, Navigation, Tag } from 'lucide-react'
import { business, photos } from '@/lib/business'

export function Hero() {
  return (
    <section id="home" className="scroll-mt-28 bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:py-20 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm font-bold text-primary shadow-sm">
            <MapPin className="size-4" aria-hidden="true" />
            Serving the Cullen & Pearland Areas
          </p>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Clean Clothes. <span className="text-primary">Easy Laundry.</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Your convenient local washateria serving the Cullen & Pearland areas. Stop in for self-service laundry or
            let us handle it with our Wash, Dry & Fold service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
            >
              <Navigation className="size-5" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href="#self-service"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-6 py-3.5 font-bold text-primary transition-colors hover:bg-secondary"
            >
              <Tag className="size-5" aria-hidden="true" />
              View Prices
            </a>
          </div>
          <p className="mt-6 text-sm font-semibold text-muted-foreground">
            {business.street}, {business.cityStateZip}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-4 ring-background">
            <Image
              src={photos.exterior.src || '/placeholder.svg'}
              alt={photos.exterior.alt}
              width={1250}
              height={718}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 hidden w-40 overflow-hidden rounded-2xl shadow-lg ring-4 ring-background sm:block md:w-52">
            <Image
              src={photos.staff.src || '/placeholder.svg'}
              alt={photos.staff.alt}
              width={1091}
              height={590}
              sizes="208px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
