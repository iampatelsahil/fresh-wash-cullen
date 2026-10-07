import Image from 'next/image'
import { photos } from '@/lib/business'
import { Reveal, SectionHeading } from '@/components/reveal'

const items = [
  { ...photos.interior, label: 'Washer floor & folding tables', className: 'md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto' },
  { ...photos.washers, label: 'Front-load washers', className: 'md:row-span-2 aspect-[3/4] md:aspect-auto' },
  { ...photos.exterior, label: 'Our storefront', className: 'aspect-[4/3] md:aspect-auto' },
  { ...photos.folded, label: 'Folding area', className: 'aspect-[4/3] md:aspect-auto' },
  { ...photos.staff, label: 'Wash, Dry & Fold team', className: 'aspect-[4/3] md:aspect-auto' },
  { ...photos.care, label: 'Value Add Center', className: 'md:col-span-2 aspect-[16/9] md:aspect-auto' },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-28 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading eyebrow="Take a look" title="Inside Fresh Wash Washateria" />
        </Reveal>
        <div className="mt-12 grid gap-4 md:auto-rows-[220px] md:grid-cols-3">
          {items.map((item) => (
            <figure key={item.label} className={`group relative overflow-hidden rounded-3xl ${item.className}`}>
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-sm font-bold">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
