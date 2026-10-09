import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/business'

// Bump when a page's content meaningfully changes.
const lastModified = '2026-10-09'

const languages = { 'en-US': `${siteUrl}/`, 'es-US': `${siteUrl}/es`, 'x-default': `${siteUrl}/` }

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'monthly', priority: 1, alternates: { languages } },
    { url: `${siteUrl}/wash-and-fold`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/es`, lastModified, changeFrequency: 'monthly', priority: 0.8, alternates: { languages } },
  ]
}
