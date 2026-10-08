import { business, hours, photos, seo, siteUrl } from '@/lib/business'

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

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Laundromat',
  '@id': `${siteUrl}/#business`,
  name: seo.siteName,
  alternateName: business.name,
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
  hasMap: business.mapsUrl,
  areaServed: business.areas.map((name) => ({ '@type': 'Place', name })),
  openingHoursSpecification: openingHoursSpecification(),
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  )
}
