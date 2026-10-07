import Image from 'next/image'
import { photos } from '@/lib/business'
import { Reveal, SectionHeading } from '@/components/reveal'

const items = [
  { ...photos.interior, label: 'Washer floor & folding tables', className: 'sm:col-span-2 md:col-span-2' },
  { ...photos.washers, label: 'Front-load washers', className: 'md:row-span-2' },
  { ...photos.exterior, label: 'Our storefront', className: '' },
  { ...photos.folded, label: 'Folding area', className: '' },
  { ...photos.staff, label: 'Wash, Dry & Fold team', className: '' },
  { ...photos.care, label: 'Value Add Center', className: 'md:col-span-2' },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-28 py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading eyebrow="Take a look" title="Inside Fresh Wash Washateria" />
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:mt-12 md:auto-rows-[220px] md:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.label}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:rounded-3xl md:aspect-auto ${item.className}`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-background/90 px-3 py-1 text-sm font-bold">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
