import { Clock, MapPin } from 'lucide-react'
import { business, hours } from '@/lib/business'
import { Reveal } from '@/components/reveal'

export function HoursArea() {
  return (
    <section className="bg-primary py-14 text-primary-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
        <Reveal>
          <div id="hours" className="scroll-mt-28 h-full rounded-3xl bg-background p-5 text-foreground shadow-xl sm:p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Clock className="size-7 text-primary" aria-hidden="true" />
              <h2 className="text-3xl font-extrabold">Store Hours</h2>
            </div>
            <dl className="mt-6 divide-y">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between gap-3 py-3">
                  <dt className="text-base font-bold sm:text-lg">{h.day}</dt>
                  <dd className="whitespace-nowrap text-base font-semibold tabular-nums text-primary sm:text-lg">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal>
          <div id="location" className="flex h-full scroll-mt-28 flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/80">Local & close by</p>
            <h2 className="mt-2 text-balance text-3xl font-extrabold md:text-4xl">Serving the Cullen & Pearland Areas</h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/90">
              Fresh Wash Washateria is your neighborhood laundry spot on Old Chocolate Bayou Rd. Whether you live near
              Cullen or are coming over from Pearland, you can stop in to wash and dry on your own or drop off your
              laundry for our Wash, Dry & Fold service.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-primary-foreground/10 p-4">
              <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <address className="not-italic font-semibold">
                {business.street}
                <br />
                {business.cityStateZip}
              </address>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
