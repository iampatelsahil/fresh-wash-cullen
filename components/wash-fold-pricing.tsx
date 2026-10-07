import Image from 'next/image'
import { Navigation } from 'lucide-react'
import { business, photos, washFoldBags, washFoldItems, washFoldMain } from '@/lib/business'
import { Reveal, SectionHeading } from '@/components/reveal'

export function WashFoldPricing() {
  return (
    <section id="wash-fold" className="scroll-mt-28 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading eyebrow="Wash, Dry & Fold" title="Drop it off. We wash, dry & fold it.">
            Leave your laundry with our team and pick it up clean and neatly folded.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {washFoldMain.map((item, i) => (
            <Reveal key={item.name}>
              <div
                className={
                  i === 0
                    ? 'h-full rounded-3xl bg-primary p-8 text-primary-foreground shadow-lg'
                    : 'h-full rounded-3xl border-2 border-primary bg-card p-8 shadow-sm'
                }
              >
                <p className="text-lg font-extrabold">{item.name}</p>
                <p className={i === 0 ? 'text-primary-foreground/85' : 'text-muted-foreground'}>{item.note}</p>
                <p className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">{item.price}</p>
                <p className={i === 0 ? 'mt-1 font-semibold text-primary-foreground/85' : 'mt-1 font-semibold text-primary'}>
                  {item.unit}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-3xl border bg-card p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-extrabold">Bedding & rugs</h3>
              <ul className="mt-4 divide-y">
                {washFoldItems.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-4 py-3.5">
                    <div>
                      <p className="font-bold">{item.name}</p>
                      {item.note && <p className="text-sm text-muted-foreground">{item.note}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-primary">{item.price}</p>
                      {item.unit && <p className="text-xs font-semibold text-muted-foreground">{item.unit}</p>}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-2xl bg-secondary p-4">
                <p className="font-bold">Bags</p>
                <div className="mt-2 flex flex-wrap gap-x-8 gap-y-1">
                  {washFoldBags.map((b) => (
                    <p key={b.name} className="text-sm">
                      {b.name}: <span className="font-extrabold text-primary">{b.price}</span>
                    </p>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">Plus service charge and tax.</p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-foreground text-background shadow-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src={photos.care.src || '/placeholder.svg'}
                  alt={photos.care.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <h3 className="text-2xl font-extrabold text-balance">Ready to get your laundry done?</h3>
                <p className="mt-2 leading-relaxed text-background/80">
                  Bring your laundry by during store hours and our team will take care of the rest.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground hover:opacity-90"
                  >
                    <Navigation className="size-4" aria-hidden="true" />
                    Get Directions
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-background/40 px-5 py-3 font-bold hover:bg-background/10"
                  >
                    Learn More / Contact Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
