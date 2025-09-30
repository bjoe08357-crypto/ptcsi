'use client'

import { useRef, useEffect, useState } from 'react'

interface StatItem {
  value: string
  label: string
}

interface StatsProps {
  stats: StatItem[]
  className?: string
}

export function Stats({ stats, className = '' }: StatsProps) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [counts, setCounts] = useState<number[]>(new Array(stats.length).fill(0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const numericValue = parseInt(stat.value.replace(/\D/g, ''))
        if (numericValue > 0) {
          const duration = 2000
          const increment = numericValue / (duration / 16)
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              current = numericValue
              clearInterval(timer)
            }
            setCounts(prev => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(current)
              return newCounts
            })
          }, 16)
        }
      })
    }
  }, [isInView, stats])

  return (
    <div ref={ref} className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {stats.map((stat, index) => {
        const numericValue = parseInt(stat.value.replace(/\D/g, ''))
        const suffix = stat.value.replace(/\d/g, '')
        const displayValue = numericValue > 0 ? `${counts[index]}${suffix}` : stat.value

        return (
            <div
              key={index}
              className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50/30 hover:to-purple-50/30 dark:from-gray-900 dark:to-blue-950/30 dark:hover:to-purple-950/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 border border-blue-100/50 hover:border-blue-200/50 dark:border-blue-900/50 dark:hover:border-blue-800/50"
            >
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent sm:text-6xl lg:text-7xl group-hover:scale-110 transition-transform duration-500">
                {displayValue}
              </div>
              <div className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Decorative line */}
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
