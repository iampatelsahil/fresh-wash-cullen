import Image from 'next/image'
import { MapPin, Navigation, Phone, Shirt, Tag } from 'lucide-react'
import { business, photos } from '@/lib/business'

const ctaBase =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-base font-bold transition-opacity hover:opacity-90'

export function Hero() {
  return (
    <section id="home" className="bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-safe py-8 sm:py-12 md:py-20 lg:grid-cols-2 lg:gap-10 short-landscape:grid-cols-2 short-landscape:items-start short-landscape:gap-6 short-landscape:py-6">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full bg-background px-3.5 py-1.5 text-[0.8125rem] font-bold text-primary shadow-sm min-[360px]:px-4 min-[360px]:text-sm">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            Serving the Cullen & Pearland Areas
          </p>
          <h1 className="mt-4 text-balance text-[2.125rem] font-extrabold leading-[1.1] tracking-tight min-[375px]:text-[2.25rem] sm:text-5xl md:mt-5 md:text-6xl short-landscape:text-4xl">
            Clean Clothes. <span className="text-primary">Easy Laundry.</span>
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-5">
            Your convenient local washateria serving the Cullen & Pearland areas. Stop in for self-service laundry or
            let us handle it with our Wash, Dry & Fold service.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 md:mt-8 short-landscape:mt-5">
            <a href="#self-service" className={`${ctaBase} bg-primary text-primary-foreground shadow-md`}>
              <Tag className="size-5" aria-hidden="true" />
              View Prices
            </a>
            <a
              href="#wash-fold"
              className={`${ctaBase} border-2 border-primary bg-background text-primary hover:bg-secondary hover:opacity-100`}
            >
              <Shirt className="size-5" aria-hidden="true" />
              Wash, Dry & Fold
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} border-2 border-primary bg-background text-primary hover:bg-secondary hover:opacity-100`}
            >
              <Navigation className="size-5" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href={business.phoneHref}
              className={`${ctaBase} border-2 border-primary bg-background text-primary hover:bg-secondary hover:opacity-100`}
            >
              <Phone className="size-5" aria-hidden="true" />
              Call Us
            </a>
          </div>

          <p className="mt-5 text-sm font-semibold text-muted-foreground">
            {business.street}, {business.cityStateZip}
            <span aria-hidden="true">{' · '}</span>
            <a
              href={business.phoneHref}
              className="whitespace-nowrap font-bold text-primary underline decoration-2 underline-offset-4"
            >
              {business.phone}
            </a>
          </p>
        </div>

        <div className="relative min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-4 ring-background sm:aspect-[16/10] lg:aspect-[1250/718]">
            <Image
              src={photos.exterior.src || '/placeholder.svg'}
              alt={photos.exterior.alt}
              fill
              preload
              quality={85}
              sizes="(min-width: 1152px) 560px, (min-width: 1024px) 50vw, (orientation: landscape) and (max-height: 500px) 50vw, 100vw"
              className="object-cover object-[50%_35%]"
            />
          </div>
          <div className="absolute -bottom-6 left-4 hidden w-40 overflow-hidden rounded-2xl shadow-lg ring-4 ring-background sm:block md:w-52 short-landscape:hidden">
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
