import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { SelfServicePricing } from '@/components/self-service-pricing'
import { WashFoldPricing } from '@/components/wash-fold-pricing'
import { WhyUs } from '@/components/why-us'
import { Gallery } from '@/components/gallery'
import { HoursArea } from '@/components/hours-area'
import { Faq } from '@/components/faq'
import { Visit } from '@/components/visit'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'
import { businessSchema, faqSchema, JsonLd, websiteSchema } from '@/components/local-business-schema'
import { seo, siteUrl } from '@/lib/business'
import { homeFaqs } from '@/lib/faqs'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  path: '/',
  title: seo.title,
  description: seo.description,
  shareDescription: seo.shareDescription,
  alternates: { en: '/', es: '/es' },
})

export default function Home() {
  return (
    <>
      <JsonLd graph={[businessSchema, websiteSchema, faqSchema(homeFaqs, `${siteUrl}/`)]} />
      <SkipLink />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <SelfServicePricing />
        <WashFoldPricing />
        <WhyUs />
        <Gallery />
        <HoursArea />
        <Faq id="faq" eyebrow="Questions" title="Laundromat FAQ" items={homeFaqs} />
        <Visit />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
