import type { MetadataRoute } from 'next'
import { seo } from '@/lib/business'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.siteName,
    short_name: 'FreshWash',
    description: seo.description,
    lang: 'en-US',
    start_url: '/',
    scope: '/',
    // Home-screen shortcut with FreshWash branding; the site still opens in the browser.
    display: 'browser',
    theme_color: seo.themeColor,
    background_color: '#ffffff',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
