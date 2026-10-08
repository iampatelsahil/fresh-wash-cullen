import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { SelfServicePricing } from '@/components/self-service-pricing'
import { WashFoldPricing } from '@/components/wash-fold-pricing'
import { WhyUs } from '@/components/why-us'
import { Gallery } from '@/components/gallery'
import { HoursArea } from '@/components/hours-area'
import { Visit } from '@/components/visit'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { LocalBusinessSchema } from '@/components/local-business-schema'

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-[calc(0.5rem+env(safe-area-inset-top))] focus:left-2 focus:z-[60] focus:rounded-full focus:bg-background focus:px-4 focus:py-3 focus:font-bold focus:text-primary focus:shadow-lg"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <SelfServicePricing />
        <WashFoldPricing />
        <WhyUs />
        <Gallery />
        <HoursArea />
        <Visit />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
