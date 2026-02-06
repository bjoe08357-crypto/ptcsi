/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ptcreativesolution.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  additionalPaths: async (config) => {
    const result = []

    // Add localized paths
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

    locales.forEach((locale) => {
      paths.forEach((path) => {
        result.push({
          loc: `/${locale}${path}`,
          changefreq: 'daily',
          priority: path === '' ? 1.0 : 0.8,
          lastmod: new Date().toISOString(),
        })
      })
    })

    return result
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
    ],
  },
}








