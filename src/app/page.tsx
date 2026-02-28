'use client'

import { useState } from 'react'
import { LoadingScreen } from '@/components/animations/LoadingScreen'
import { Navigation } from '@/components/ui/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { InsolvencyServices } from '@/components/sections/InsolvencyServices'
import { AreasSection } from '@/components/sections/AreasSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { Footer } from '@/components/sections/Footer'
import { content, type Locale } from '@/lib/content'

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>('pt')
  const c = content[locale]

  return (
    <>
      <LoadingScreen />

      <Navigation c={c.nav} locale={locale} onLocale={setLocale} />

      <main className="pb-16 md:pb-0">
        <HeroSection c={c.hero} />
        <AreasSection c={c.areas} />
        <InsolvencyServices c={c.insolvency_section} />
        <AboutSection c={c.about} />
        <FAQSection c={c.faq} />
        <Footer c={c.contact} footerC={c.footer} />
      </main>
    </>
  )
}
