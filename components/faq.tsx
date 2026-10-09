import { ChevronDown } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

// Native <details> keeps every answer in the HTML for crawlers and works without JavaScript.
export function Faq({
  id,
  eyebrow,
  title,
  items,
}: {
  id: string
  eyebrow: string
  title: string
  items: { q: string; a: string }[]
}) {
  return (
    <section id={id} className="py-14 md:py-24">
      <div className="mx-auto max-w-3xl px-safe">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </Reveal>
        <div className="mt-8 divide-y rounded-3xl border bg-card shadow-sm md:mt-12">
          {items.map(({ q, a }) => (
            <details key={q} className="group px-5 sm:px-6">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold [&::-webkit-details-marker]:hidden">
                <h3 className="text-base sm:text-lg">{q}</h3>
                <ChevronDown
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
