'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState('en')
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Extract current language from pathname
    const lang = pathname.startsWith('/id') ? 'id' : 'en'
    setCurrentLang(lang)
  }, [pathname])

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'id' : 'en'
    const newPath = pathname.replace(/^\/(en|id)/, `/${newLang}`)
    router.push(newPath)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="h-9 px-3 hover:bg-white/60 transition-all duration-300"
    >
      <Globe className="h-4 w-4 mr-2" />
      <span className="text-sm font-medium">
        {currentLang === 'en' ? 'EN' : 'ID'}
      </span>
    </Button>
  )
}





