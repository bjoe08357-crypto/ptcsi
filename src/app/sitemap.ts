import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ptcreativesolution.com'
  const locales = ['en', 'id']
  const paths = [
    '',
    '/services',
    '/web3',
    '/about-us',
    '/career',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    paths.forEach((path) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: path === '' ? 1.0 : 0.8,
      })
    })
  })

  return sitemap
}



