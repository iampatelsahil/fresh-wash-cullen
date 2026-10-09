import Image from 'next/image'
import { Clock, MapPin, Navigation, Phone, Shirt, Tag, WashingMachine, Wind } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { Faq } from '@/components/faq'
import { Reveal, SectionHeading } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'
import { businessSchema, faqSchema, JsonLd } from '@/components/local-business-schema'
import { business, dryers, photos, siteUrl, washers, washFoldBags, washFoldItems, washFoldMain } from '@/lib/business'
import { homeFaqsEs } from '@/lib/faqs'
import { hoursFor } from '@/lib/i18n'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  path: '/es',
  locale: 'es',
  title: 'Lavandería de autoservicio y lavado y doblado en Houston | FreshWash',
  description:
    'Lavandería de autoservicio con 39 lavadoras y 50 secadoras, y servicio de lavado, secado y doblado a $1.39 la libra. 14450 Old Chocolate Bayou Rd, Houston 77048.',
  shareDescription:
    'Lavandería de autoservicio y servicio de lavado, secado y doblado en Houston 77048, cerca de Pearland. Abierto los 7 días.',
  alternates: { en: '/', es: '/es' },
  image: {
    url: '/og-image-es.jpg',
    width: 1200,
    height: 630,
    alt: 'Fachada de FreshWash Washateria, lavandería de autoservicio en Houston',
  },
})

const itemNamesEs: Record<string, { name: string; note: string | null; unit: string | null }> = {
  'Queen / King Size': { name: 'Tamaño queen / king', note: 'Edredones y cobijas', unit: 'por pieza' },
  'Twin / Full Size': { name: 'Tamaño twin / matrimonial', note: 'Edredones y cobijas', unit: 'por pieza' },
  Pillows: { name: 'Almohadas', note: null, unit: 'por pieza' },
  'Large Rug': { name: 'Tapete grande', note: null, unit: 'por pieza' },
  'Small Rug': { name: 'Tapete pequeño', note: null, unit: null },
}
const bagNamesEs: Record<string, string> = {
  'Large Trash Bag': 'Bolsa de basura grande',
  'Medium Trash Bag': 'Bolsa de basura mediana',
}
const [perPound, miniLoad] = washFoldMain

const card = 'h-full rounded-3xl border bg-card p-5 shadow-sm sm:p-6 md:p-8'

export default function Espanol() {
  return (
    <>
      <JsonLd
        graph={[
          businessSchema,
          {
            '@type': 'WebPage',
            '@id': `${siteUrl}/es#webpage`,
            url: `${siteUrl}/es`,
            name: 'Lavandería de autoservicio y lavado y doblado en Houston',
            inLanguage: 'es-US',
            about: { '@id': businessSchema['@id'] },
          },
          faqSchema(homeFaqsEs, `${siteUrl}/es`, 'es-US'),
        ]}
      />
      <SkipLink label="Saltar al contenido" />
      <SiteHeader locale="es" />
      <main id="main" tabIndex={-1} className="outline-none">
        <section id="inicio" className="bg-secondary/60">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-safe py-8 sm:py-12 md:py-20 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full bg-background px-3.5 py-1.5 text-[0.8125rem] font-bold text-primary shadow-sm min-[360px]:px-4 min-[360px]:text-sm">
                <MapPin className="size-4 shrink-0" aria-hidden="true" />
                Áreas de Cullen y Pearland
              </p>
              <h1 className="mt-4 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight min-[375px]:text-[2.25rem] sm:text-5xl">
                Lavandería de autoservicio y <span className="text-primary">lavado y doblado</span> en Houston
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                FreshWash Washateria es una lavandería de autoservicio en Old Chocolate Bayou Rd (77048), cerca del área
                de Cullen y de Pearland. Lave y seque usted mismo en nuestras 89 máquinas, o deje su ropa con nuestro
                servicio de lavado, secado y doblado.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2">
                <a
                  href="#autoservicio"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 font-bold text-primary-foreground shadow-md hover:opacity-90"
                >
                  <Tag className="size-5" aria-hidden="true" />
                  Ver precios
                </a>
                <a
                  href="#lavado-y-doblado"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-5 font-bold text-primary hover:bg-secondary"
                >
                  <Shirt className="size-5" aria-hidden="true" />
                  Lavado y doblado
                </a>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-5 font-bold text-primary hover:bg-secondary"
                >
                  <Navigation className="size-5" aria-hidden="true" />
                  Cómo llegar
                </a>
                <a
                  href={business.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-5 font-bold text-primary hover:bg-secondary"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  Llamar
                </a>
              </div>
              <p className="mt-5 text-sm font-semibold text-muted-foreground">
                {business.street}, {business.cityStateZip}
                <span aria-hidden="true">{' · '}</span>
                <a href={business.phoneHref} className="whitespace-nowrap font-bold text-primary underline underline-offset-4">
                  {business.phone}
                </a>
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-4 ring-background sm:aspect-[16/10] lg:aspect-[1250/718]">
              <Image
                src={photos.exterior.src}
                alt="Fachada de FreshWash Washateria con el letrero de la lavandería y anuncios de Wash, Dry & Fold"
                fill
                preload
                fetchPriority="high"
                quality={85}
                sizes="(min-width: 1152px) 560px, (min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
          </div>
        </section>

        <section id="autoservicio" className="py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-safe">
            <Reveal>
              <SectionHeading eyebrow="Autoservicio" title="Precios de lavadoras y secadoras">
                Elija el tamaño de máquina según su carga. El precio es el mismo para cualquier ciclo de lavado y
                cualquier temperatura de secado.
              </SectionHeading>
            </Reveal>
            <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-2">
              <div className={card}>
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <WashingMachine className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold">Lavadoras</h3>
                    <p className="text-sm text-muted-foreground">
                      Normal, planchado permanente y delicado · Agua caliente, tibia o fría
                    </p>
                  </div>
                </div>
                <ul className="mt-6 divide-y">
                  {washers.map((w) => (
                    <li key={w.size} className="flex items-center justify-between gap-4 py-4">
                      <div>
                        <p className="text-lg font-extrabold">Lavadora de {w.size}</p>
                        <p className="text-sm text-muted-foreground">
                          {w.count} máquinas · Opciones extra {w.extra} c/u
                        </p>
                      </div>
                      <p className="shrink-0 text-2xl font-extrabold tabular-nums text-primary sm:text-3xl">{w.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={card}>
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Wind className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold">Secadoras</h3>
                    <p className="text-sm text-muted-foreground">Calor alto, medio, bajo, delicado o sin calor</p>
                  </div>
                </div>
                <ul className="mt-6 divide-y">
                  {dryers.map((d) => (
                    <li key={d.size} className="flex items-center justify-between gap-4 py-4">
                      <div>
                        <p className="text-lg font-extrabold">Secadora de {d.size}</p>
                        <p className="text-sm text-muted-foreground">
                          {d.count} máquinas · Tiempo adicional {d.topoff} por {d.minutes} min
                        </p>
                      </div>
                      <p className="shrink-0 text-2xl font-extrabold tabular-nums text-primary sm:text-3xl">{d.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="lavado-y-doblado" className="bg-secondary/60 py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-safe">
            <Reveal>
              <SectionHeading eyebrow="Lavado, secado y doblado" title="Servicio de lavado y doblado de ropa">
                Deje su ropa con nuestro equipo durante el horario de la tienda. Nosotros la lavamos, la secamos y la
                doblamos, y usted la recoge limpia y bien doblada.
              </SectionHeading>
            </Reveal>
            <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2">
              <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-lg sm:p-8">
                <p className="text-lg font-extrabold">Por libra</p>
                <p>Mínimo 10 libras</p>
                <p className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">{perPound.price}</p>
                <p className="mt-1 font-semibold">por libra</p>
              </div>
              <div className="rounded-3xl border-2 border-primary bg-card p-6 shadow-sm sm:p-8">
                <p className="text-lg font-extrabold">Carga pequeña</p>
                <p className="text-muted-foreground">De 1 a 10 libras</p>
                <p className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">{miniLoad.price}</p>
                <p className="mt-1 font-semibold text-primary">cargo mínimo</p>
              </div>
            </div>
            <div className={`mt-6 ${card}`}>
              <h3 className="text-xl font-extrabold">Ropa de cama y tapetes</h3>
              <ul className="mt-4 divide-y">
                {washFoldItems.map((item) => {
                  const es = itemNamesEs[item.name]
                  return (
                    <li key={item.name} className="flex items-center justify-between gap-4 py-3.5">
                      <div>
                        <p className="font-bold">{es.name}</p>
                        {es.note && <p className="text-sm text-muted-foreground">{es.note}</p>}
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-2xl font-extrabold text-primary">{item.price}</p>
                        {es.unit && <p className="text-xs font-semibold text-muted-foreground">{es.unit}</p>}
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-4 rounded-2xl bg-secondary p-4">
                <p className="font-bold">Bolsas</p>
                <div className="mt-2 flex flex-wrap gap-x-8 gap-y-1">
                  {washFoldBags.map((b) => (
                    <p key={b.name} className="text-sm">
                      {bagNamesEs[b.name]}: <span className="font-extrabold text-primary">{b.price}</span>
                    </p>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">Más cargo por servicio e impuesto.</p>
            </div>
          </div>
        </section>

        <section className="bg-primary py-14 text-primary-foreground md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 px-safe lg:grid-cols-2">
            <div id="horario" className="rounded-3xl bg-background p-5 text-foreground shadow-xl sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Clock className="size-7 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-extrabold">Horario</h2>
              </div>
              <dl className="mt-6 divide-y">
                {hoursFor('es').map((h) => (
                  <div key={h.day} className="flex flex-wrap items-center justify-between gap-x-3 py-3">
                    <dt className="font-bold sm:text-lg">{h.day}</dt>
                    <dd className="whitespace-nowrap font-semibold tabular-nums text-primary sm:text-lg">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div id="contacto" className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-widest">Ubicación</p>
              <h2 className="mt-2 text-balance text-3xl font-extrabold md:text-4xl">Su lavandería en el sur de Houston</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed">
                Estamos en Old Chocolate Bayou Rd, en el código postal 77048. Si vive en el área de Cullen o viene desde
                Pearland, puede lavar usted mismo o dejar su ropa para el servicio de lavado, secado y doblado.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-foreground/20 p-4">
                <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <address className="not-italic font-semibold">
                  {business.fullName}
                  <br />
                  {business.street}
                  <br />
                  {business.cityStateZip}
                </address>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-background px-6 font-bold text-primary hover:opacity-90"
                >
                  <Navigation className="size-5" aria-hidden="true" />
                  Cómo llegar
                </a>
                <a
                  href={business.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-background px-6 font-bold hover:bg-background/10"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {business.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Faq id="preguntas" eyebrow="Preguntas frecuentes" title="Preguntas sobre la lavandería" items={homeFaqsEs} />
      </main>
      <SiteFooter locale="es" />
      <MobileActionBar locale="es" />
    </>
  )
}
