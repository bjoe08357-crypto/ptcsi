'use client'

import Image from 'next/image'

interface LogoWallProps {
  logos: Array<{
    name: string
    src: string
    alt: string
  }>
  className?: string
}

export function LogoWall({ logos, className = '' }: LogoWallProps) {
  return (
    <div className={`py-16 ${className}`}>
      <div className="overflow-hidden relative">
        <div className="flex space-x-16 animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-12 w-auto grayscale opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



