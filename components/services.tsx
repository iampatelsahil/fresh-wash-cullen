import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { photos } from '@/lib/business'
import { Reveal, SectionHeading } from '@/components/reveal'

const services = [
  {
    title: 'Self-Service Laundry',
    body: 'Convenient washers and dryers for your everyday laundry needs.',
    photo: photos.washers,
    w: 710,
    h: 943,
    href: '#self-service',
    cta: 'Washer & dryer prices',
  },
  {
    title: 'Wash, Dry & Fold',
    body: 'Drop off your laundry and let us take care of the washing, drying, and folding.',
    photo: photos.staff,
    w: 1091,
    h: 590,
    href: '#wash-fold',
    cta: 'Wash, Dry & Fold prices',
  },
  {
    title: 'Large-Capacity Machines',
    body: 'Washers up to 80 lb and dryers up to 75 lb, great for comforters, blankets, and big family loads.',
    photo: photos.interior,
    w: 1488,
    h: 665,
    href: '#self-service',
    cta: 'See machine sizes',
  },
]

export function Services() {
  return (
    <section id="services" className="py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-safe">
        <Reveal>
          <SectionHeading eyebrow="What we do" title="Two easy ways to get laundry done">
            Do it yourself on our machines, or drop it off and pick it up clean and folded.
          </SectionHeading>
        </Reveal>
        <div className="mt-8 md:mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Reveal key={s.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.photo.src || '/placeholder.svg'}
                    alt={s.photo.alt}
                    fill
                    sizes="(min-width: 1152px) 360px, (min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{s.body}</p>
                  <a
                    href={s.href}
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 self-start font-bold text-primary hover:underline"
                  >
                    {s.cta}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
