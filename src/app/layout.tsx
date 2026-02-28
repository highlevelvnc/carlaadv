import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Carla Guerreiro Marques — Advogada em Setúbal | Direito Comercial, Imigração, Imobiliário, Insolvência',
  description: 'Escritório de advocacia em Setúbal. Especializada em Direito Comercial, Imigração e Vistos, Imobiliário e Insolvência Pessoal. Agende a sua consulta pelo WhatsApp.',
  keywords: ['advogada Setúbal', 'advogada imigração Portugal', 'direito imobiliário Setúbal', 'insolvência pessoal Setúbal', 'direito comercial Setúbal', 'Golden Visa Portugal', 'PER insolvência', 'visto Portugal', 'Carla Guerreiro Marques'],
  authors: [{ name: 'Carla Guerreiro Marques' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
  openGraph: {
    title: 'Carla Guerreiro Marques — Advogada em Setúbal',
    description: 'Acompanhamento jurídico estruturado em Direito Comercial, Imigração, Imobiliário e Insolvência. Setúbal, Portugal.',
    type: 'website',
    locale: 'pt_PT',
    siteName: 'Carla Guerreiro Marques — Advogada',
    url: 'https://www.carlaguerreiromarques.pt',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Carla Guerreiro Marques — Advogada em Setúbal', images: ['/og-image.jpg'] },
  alternates: {
    canonical: 'https://www.carlaguerreiromarques.pt',
    languages: { 'pt-PT': '/', 'en': '/en' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LegalService', 'LocalBusiness'],
      '@id': 'https://www.carlaguerreiromarques.pt/#legalservice',
      name: 'Carla Guerreiro Marques — Advogada',
      description: 'Escritório de advocacia em Setúbal especializado em Direito Comercial e Societário, Imigração e Vistos, Direito Imobiliário e Urbanismo, e Insolvência Pessoal.',
      url: 'https://www.carlaguerreiromarques.pt',
      telephone: '+351962993794',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Praceta Amadeu de Sousa Cardoso 4',
        postalCode: '2900-164',
        addressLocality: 'Setúbal',
        addressRegion: 'Setúbal',
        addressCountry: 'PT',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 38.5244, longitude: -8.8914 },
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' }],
      areaServed: [{ '@type': 'City', name: 'Setúbal' }, { '@type': 'Country', name: 'Portugal' }],
      serviceType: ['Direito Comercial e Societário', 'Estrangeiros, Imigração e Vistos', 'Direito Imobiliário e Urbanismo', 'Insolvência Pessoal e Reestruturação de Dívidas'],
      knowsAbout: ['Constituição de Sociedades', 'Golden Visa Portugal', 'Visto D7', 'Compra e Venda de Imóveis', 'Insolvência Pessoal', 'PER', 'PEAP'],
      memberOf: { '@type': 'Organization', name: 'Ordem dos Advogados Portugueses' },
      image: 'https://www.carlaguerreiromarques.pt/images/carla-marques.webp',
      priceRange: '$$',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Como posso constituir uma empresa em Portugal sendo estrangeiro?', acceptedAnswer: { '@type': 'Answer', text: 'É possível constituir uma sociedade em Portugal independentemente da nacionalidade. O processo envolve a escolha do tipo societário, elaboração dos estatutos, registo na Conservatória e obtenção de NIF.' } },
        { '@type': 'Question', name: 'Quais os documentos necessários para um visto de residência em Portugal?', acceptedAnswer: { '@type': 'Answer', text: 'Os requisitos variam consoante o tipo de visto. Em regra incluem passaporte válido, comprovativo de meios de subsistência, seguro de saúde e ausência de antecedentes criminais.' } },
        { '@type': 'Question', name: 'O que é a insolvência pessoal?', acceptedAnswer: { '@type': 'Answer', text: 'A insolvência pessoal é um processo judicial que permite a pessoas singulares proceder à liquidação do seu patrimônio para pagamento de dívidas, com a possibilidade de exoneração do passivo restante.' } },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="alternate" hrefLang="pt-PT" href="https://www.carlaguerreiromarques.pt/" />
        <link rel="alternate" hrefLang="en" href="https://www.carlaguerreiromarques.pt/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.carlaguerreiromarques.pt/" />
        <meta name="theme-color" content="#0B0F1A" />
      </head>
      <body className="font-sans bg-night text-glacier">{children}</body>
    </html>
  )
}
