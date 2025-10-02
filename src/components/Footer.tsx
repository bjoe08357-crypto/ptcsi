'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'
import { ChevronDown } from 'lucide-react'

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/en/services/web-development' },
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
        {/* Desktop Footer */}
        <div className="py-16 hidden md:block">
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

        {/* Mobile Footer */}
        <div className="py-8 md:hidden">
          {/* Company Info - Always Visible */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-6 w-6 rounded bg-blue-600"></div>
              <span className="text-lg font-bold">PT CSI</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Transforming ideas into inspiring experiences.
            </p>
            <p className="text-xs text-gray-400">
              info@ptcreativesolution.com
            </p>
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-2">
            {/* Services Accordion */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => toggleSection('services')}
                className="flex justify-between items-center w-full py-3 text-left"
              >
                <h3 className="font-semibold">Services</h3>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openSection === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openSection === 'services' && (
                <ul className="pb-3 space-y-2">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Company Accordion */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => toggleSection('company')}
                className="flex justify-between items-center w-full py-3 text-left"
              >
                <h3 className="font-semibold">Company</h3>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openSection === 'company' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openSection === 'company' && (
                <ul className="pb-3 space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Quick Links - Always Visible */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/en/about-us" className="hover:text-white">About</Link>
            <Link href="/en/career" className="hover:text-white">Careers</Link>
            <Link href="/en/contact" className="hover:text-white">Contact</Link>
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
