import { Wind, WashingMachine } from 'lucide-react'
import { dryers, washers } from '@/lib/business'
import { Reveal, SectionHeading } from '@/components/reveal'

export function SelfServicePricing() {
  return (
    <section id="self-service" className="scroll-mt-28 bg-secondary/60 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading eyebrow="Self-Service" title="Washer & dryer prices">
            Pick the machine size that fits your load. Same price for every wash setting and every dryer temperature.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border bg-card p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <WashingMachine className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold">Washers</h3>
                  <p className="text-sm text-muted-foreground">Normal, Perm Press & Delicate · Hot, Warm or Cold</p>
                </div>
              </div>
              <ul className="mt-6 divide-y">
                {washers.map((w) => (
                  <li key={w.size} className="flex items-center justify-between gap-4 py-4">
                    <div>
                      <p className="text-lg font-extrabold">{w.size} Washer</p>
                      <p className="text-sm text-muted-foreground">
                        {w.count} machines · Extra options {w.extra} each
                      </p>
                    </div>
                    <p className="text-3xl font-extrabold text-primary">{w.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-3xl border bg-card p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Wind className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold">Dryers</h3>
                  <p className="text-sm text-muted-foreground">High, Medium, Low, Delicate or No Heat</p>
                </div>
              </div>
              <ul className="mt-6 divide-y">
                {dryers.map((d) => (
                  <li key={d.size} className="flex items-center justify-between gap-4 py-4">
                    <div>
                      <p className="text-lg font-extrabold">{d.size} Dryer</p>
                      <p className="text-sm text-muted-foreground">
                        {d.count} machines · Top-off {d.topoff} for {d.minutes} min
                      </p>
                    </div>
                    <p className="text-3xl font-extrabold text-primary">{d.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
