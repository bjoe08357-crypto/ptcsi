import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'

export function Footer() {
  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/en/services/web-development' },
      { name: 'Cybersecurity', href: '/en/services/cybersecurity' },
      { name: 'Cloud Services', href: '/en/services/cloud-services' },
      { name: 'IT Consultancy', href: '/en/services/it-consultancy' },
      { name: 'Data Analytics', href: '/en/services/data-analytics' },
      { name: 'QA Testing', href: '/en/services/qa-testing' },
    ],
    web3: [
      { name: 'Smart Contract Development', href: '/en/services/smart-contract-development' },
      { name: 'DeFi Solutions', href: '/en/services/defi-solutions' },
      { name: 'NFT & Marketplaces', href: '/en/services/nft-marketplaces' },
    ],
    company: [
      { name: 'About Us', href: '/en/about-us' },
      { name: 'Careers', href: '/en/career' },
      { name: 'Contact', href: '/en/contact' },
    ],
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800 dark:border-gray-900">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <Image
                  src="/csi logo.png"
                  alt="CSI Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">PT CSI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming ideas into inspiring experiences through innovative digital solutions.
              </p>
              <p className="text-sm text-gray-400">
                Email: info@ptcreativesolution.com
              </p>
            </div>

            {/* Traditional Services */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web3 Services */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-4">Web3 Services</h3>
              <ul className="space-y-2">
                {footerLinks.web3.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Legal */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                  </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 PT Creative Solution International. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
