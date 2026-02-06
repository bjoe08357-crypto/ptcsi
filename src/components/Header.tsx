'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'
import { LanguageToggle } from './LanguageToggle'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  // Get current language from pathname
  const currentLang = pathname.startsWith('/id') ? 'id' : 'en'
  const langPrefix = currentLang === 'id' ? '/id' : '/en'

  const navigation = [
    { name: 'Home', href: `${langPrefix}` },
    { name: 'Services', href: `${langPrefix}/services` },
    { name: 'Careers', href: `${langPrefix}/career` },
    { name: 'About Us', href: `${langPrefix}/about-us` },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100/50 dark:border-blue-900/50 bg-gradient-to-r from-white via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-950/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
              <div className="flex items-center">
                <Link href={langPrefix} className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/csi logo.png"
                  alt="CSI Logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    PT CSI
                  </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-sm group"
                >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageToggle />
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href={`${langPrefix}/contact`}>
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300">
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-950 dark:to-blue-950/30">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-blue-100 dark:border-blue-900">
                    <div className="flex flex-col space-y-4">
                      <div className="flex space-x-2">
                        <LanguageToggle />
                      </div>
                      <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                        <Link href={`${langPrefix}/contact`}>
                          Get in Touch
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
