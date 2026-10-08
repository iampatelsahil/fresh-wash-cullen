import { Clock, MapPin, Shirt, Sparkles, WashingMachine, Weight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const reasons = [
  { icon: MapPin, title: 'Convenient local location', body: 'Right on Old Chocolate Bayou Rd in Houston.' },
  { icon: Sparkles, title: 'Cullen & Pearland area service', body: 'A neighborhood washateria for both communities.' },
  { icon: WashingMachine, title: 'Self-service washers & dryers', body: '39 washers and 50 dryers on the floor.' },
  { icon: Weight, title: 'Machines for every load', body: 'Washers from 20 lb to 80 lb, dryers from 30 lb to 75 lb.' },
  { icon: Shirt, title: 'Wash, Dry & Fold service', body: 'Drop off and pick up clean, folded laundry.' },
  { icon: Clock, title: 'Convenient extended hours', body: 'Open 7 AM every day, until 11 PM on weekends.' },
]

export function WhyUs() {
  return (
    <section className="bg-secondary/60 py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-safe">
        <Reveal>
          <SectionHeading eyebrow="Why Fresh Wash" title="A clean, comfortable place to do laundry" />
        </Reveal>
        <div className="mt-8 md:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }) => (
            <Reveal key={title}>
              <div className="flex h-full gap-4 rounded-3xl border bg-card p-6 shadow-sm">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
