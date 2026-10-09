import Image from 'next/image'
import { Navigation, Phone, Scale, ShoppingBag, Shirt, Store } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { WashFoldPricing } from '@/components/wash-fold-pricing'
import { Faq } from '@/components/faq'
import { Reveal, SectionHeading } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'
import {
  breadcrumbSchema,
  businessSchema,
  faqSchema,
  JsonLd,
  washFoldServiceSchema,
} from '@/components/local-business-schema'
import { business, photos, siteUrl } from '@/lib/business'
import { washFoldFaqs } from '@/lib/faqs'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  path: '/wash-and-fold',
  title: 'Wash and Fold Laundry Service in Houston 77048 | FreshWash Washateria',
  description:
    'Drop-off Wash, Dry & Fold at FreshWash Washateria: $1.39/lb (10 lb minimum), comforters, blankets and rugs. 14450 Old Chocolate Bayou Rd, near Pearland.',
  shareDescription: 'Drop off your laundry and pick it up clean and folded. $1.39 per pound, 10 lb minimum.',
})

const steps = [
  { icon: Store, title: 'Drop it off', body: 'Bring your laundry in any time during store hours, 7 days a week.' },
  { icon: Scale, title: 'Priced by weight', body: 'Regular laundry is $1.39 per pound with a 10 lb minimum.' },
  { icon: Shirt, title: 'Washed, dried & folded', body: 'Our team washes, dries and neatly folds everything for you.' },
  { icon: ShoppingBag, title: 'Pick it up', body: 'Come back and pick up your clean, neatly folded laundry.' },
]

export default function WashAndFold() {
  return (
    <>
      <JsonLd
        graph={[
          businessSchema,
          washFoldServiceSchema,
          faqSchema(washFoldFaqs, `${siteUrl}/wash-and-fold`),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Wash, Dry & Fold', path: '/wash-and-fold' },
          ]),
        ]}
      />
      <SkipLink />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <section className="bg-secondary/60">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-safe py-8 sm:py-12 md:py-16 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0">
              <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li>
                    <a href="/" className="hover:text-primary hover:underline">
                      Home
                    </a>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-foreground">
                    Wash, Dry & Fold
                  </li>
                </ol>
              </nav>
              <h1 className="mt-4 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight min-[375px]:text-[2.25rem] sm:text-5xl">
                Wash and Fold Laundry Service <span className="text-primary">in Houston 77048</span>
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Skip the laundry day. Drop off your clothes, towels and bedding at FreshWash Washateria on Old Chocolate
                Bayou Rd and our team will wash, dry and fold them for you. Convenient for the Cullen area of south
                Houston and nearby Pearland.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 font-bold text-primary-foreground shadow-md hover:opacity-90"
                >
                  <Navigation className="size-5" aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={business.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-5 font-bold text-primary hover:bg-secondary"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {business.phone}
                </a>
              </div>
            </div>
            <div className="relative aspect-[1091/590] overflow-hidden rounded-3xl shadow-xl ring-4 ring-background">
              <Image
                src={photos.staff.src}
                alt={photos.staff.alt}
                fill
                preload
                fetchPriority="high"
                sizes="(min-width: 1152px) 560px, (min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-safe">
            <Reveal>
              <SectionHeading eyebrow="How it works" title="Drop-off laundry in four simple steps" />
            </Reveal>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <li key={title} className="flex h-full flex-col gap-3 rounded-3xl border bg-card p-6 shadow-sm">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-extrabold">
                    <span className="text-primary">{i + 1}.</span> {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-center leading-relaxed text-muted-foreground">
              Prefer to do it yourself? See our{' '}
              <a href="/#self-service" className="font-bold text-primary underline underline-offset-4">
                self-service washer and dryer prices
              </a>
              .
            </p>
          </div>
        </section>

        <div className="bg-secondary/60">
          <WashFoldPricing />
        </div>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-safe md:grid-cols-2">
            <div className="relative aspect-[1100/430] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={photos.folded.src}
                alt={photos.folded.alt}
                fill
                sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-balance text-3xl font-extrabold md:text-4xl">Local wash and fold near Pearland</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                FreshWash Washateria is at {business.street}, {business.cityStateZip}. If you are searching for wash
                and fold near you in south Houston, the Cullen area or Pearland, you can drop off during our regular
                store hours, every day from 7:00 AM.
              </p>
              <p className="mt-4">
                <a href="/#hours" className="font-bold text-primary underline underline-offset-4">
                  See full store hours
                </a>
              </p>
            </div>
          </div>
        </section>

        <Faq id="faq" eyebrow="Questions" title="Wash and fold FAQ" items={washFoldFaqs} />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
