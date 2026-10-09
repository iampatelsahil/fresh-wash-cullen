import { business, hours, photos, seo, siteUrl, washers, washFoldMain } from '@/lib/business'

// Everything here comes from data already shown on the site (lib/business.ts). No ratings, reviews or
// attributes that the business has not confirmed.

// "7:00 AM" -> "07:00", "10:00 PM" -> "22:00"
function to24h(time: string) {
  const [, h, m, period] = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i) ?? []
  let hour = Number(h) % 12
  if (period?.toUpperCase() === 'PM') hour += 12
  return `${String(hour).padStart(2, '0')}:${m}`
}

// Group days that share the same hours into one OpeningHoursSpecification each.
function openingHoursSpecification() {
  const groups = new Map<string, string[]>()
  for (const { day, time } of hours) {
    groups.set(time, [...(groups.get(time) ?? []), `https://schema.org/${day}`])
  }
  return [...groups].map(([time, days]) => {
    const [opens, closes] = time.split('–').map(to24h)
    return { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens, closes }
  })
}

const [addressLocality, regionZip] = business.cityStateZip.split(',').map((s) => s.trim())
const [addressRegion, postalCode] = regionZip.split(' ')

export const businessId = `${siteUrl}/#business`
const usd = (price: string) => price.replace('$', '')

export const businessSchema = {
  // schema.org has no Laundromat type; DryCleaningOrLaundry is the LocalBusiness subtype for laundromats.
  '@type': 'DryCleaningOrLaundry',
  '@id': businessId,
  name: seo.siteName,
  alternateName: business.fullName,
  description: seo.description,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/icon-512.png`,
  image: [`${siteUrl}${seo.ogImage.url}`, `${siteUrl}${photos.exterior.src}`, `${siteUrl}${photos.interior.src}`],
  telephone: business.phoneHref.replace('tel:', ''),
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.street,
    addressLocality,
    addressRegion,
    postalCode,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', ...business.geo },
  hasMap: business.mapsUrl,
  areaServed: [
    { '@type': 'City', name: 'Houston, TX' },
    { '@type': 'City', name: 'Pearland, TX' },
  ],
  currenciesAccepted: 'USD',
  openingHoursSpecification: openingHoursSpecification(),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Laundry services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Self-service laundry (washers 20–80 lb, dryers 30–75 lb)' },
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: usd(washers[0].price),
          maxPrice: usd(washers[washers.length - 1].price),
          priceCurrency: 'USD',
          description: 'Price per wash cycle, by washer size',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@id': `${siteUrl}/wash-and-fold#service` },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: usd(washFoldMain[0].price),
          priceCurrency: 'USD',
          referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'LBR' },
          description: `${washFoldMain[0].note}; mini load (${washFoldMain[1].note}) ${washFoldMain[1].price}. Plus service charge and tax.`,
        },
      },
    ],
  },
}

export const washFoldServiceSchema = {
  '@type': 'Service',
  '@id': `${siteUrl}/wash-and-fold#service`,
  name: 'Wash, Dry & Fold laundry service',
  serviceType: 'Wash and fold laundry service',
  url: `${siteUrl}/wash-and-fold`,
  provider: { '@id': businessId },
  areaServed: businessSchema.areaServed,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: usd(washFoldMain[0].price),
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: usd(washFoldMain[0].price),
      priceCurrency: 'USD',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'LBR' },
    },
  },
}

export function faqSchema(faqs: { q: string; a: string }[], url: string, inLanguage = 'en-US') {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage,
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${siteUrl}${path}`,
    })),
  }
}

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: seo.siteName,
  url: `${siteUrl}/`,
  inLanguage: ['en-US', 'es-US'],
  publisher: { '@id': businessId },
}

export function JsonLd({ graph }: { graph: object[] }) {
  const data = { '@context': 'https://schema.org', '@graph': graph }
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
