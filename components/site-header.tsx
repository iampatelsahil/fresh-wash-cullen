import { Droplets, MapPin } from 'lucide-react'
import { business } from '@/lib/business'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Droplets className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-extrabold">{business.name}</span>
            <span className="block text-xs text-muted-foreground">{business.location}</span>
          </span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <a href="#services" className="hover:text-primary">
            Services
          </a>
          <a href="#visit" className="hover:text-primary">
            Visit Us
          </a>
        </nav>
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <MapPin className="size-4" aria-hidden="true" />
          Directions
        </a>
      </div>
    </header>
  )
}
