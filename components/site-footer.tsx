import { business } from '@/lib/business'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-6">
        <p className="font-bold">{business.fullName}</p>
        <p className="opacity-90">
          {business.street}, {business.cityStateZip}
        </p>
      </div>
    </footer>
  )
}
