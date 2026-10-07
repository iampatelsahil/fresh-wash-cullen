import { Shirt, WashingMachine } from 'lucide-react'

const services = [
  {
    icon: WashingMachine,
    title: 'Self Service Washateria',
    description: 'Come in and wash and dry your own laundry on your schedule.',
  },
  {
    icon: Shirt,
    title: 'Wash, Dry & Fold Service',
    description: 'Drop off your laundry and we will wash, dry, and fold it for you.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold md:text-4xl">What We Do</h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Two easy ways to get your laundry done.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex flex-col gap-4 rounded-3xl border bg-card p-8 shadow-sm"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-extrabold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
