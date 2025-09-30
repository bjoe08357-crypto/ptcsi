import { ReactNode } from 'react'
import { Check } from 'lucide-react'

interface FeatureItem {
  title: string
  description?: string
}

interface FeatureListProps {
  features: FeatureItem[]
  className?: string
}

export function FeatureList({ features, className = '' }: FeatureListProps) {
  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${className}`}>
      {features.map((feature, index) => (
          <div key={index} className="group relative p-6 rounded-xl bg-gradient-to-br from-white to-blue-50/20 hover:to-purple-50/20 dark:from-gray-900 dark:to-blue-950/20 dark:hover:to-purple-950/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-100/50 hover:border-blue-200/50 dark:border-blue-900/50 dark:hover:border-blue-800/50">
          {/* Background decoration */}
          <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="mt-4 flex">
              <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-12 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}



