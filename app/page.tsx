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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
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
