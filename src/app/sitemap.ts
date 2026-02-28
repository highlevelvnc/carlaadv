import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.carlaguerreiromarques.pt'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1, alternates: { languages: { 'pt-PT': `${base}/`, en: `${base}/en/` } } },
  ]
}
