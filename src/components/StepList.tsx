import { ReactNode } from 'react'

interface Step {
  step: string
  title: string
  description: string
}

interface StepListProps {
  steps: Step[]
  className?: string
}

export function StepList({ steps, className = '' }: StepListProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-br from-white to-blue-50/20 hover:to-purple-50/20 dark:from-gray-900 dark:to-blue-950/20 dark:hover:to-purple-950/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-100/50 hover:border-blue-200/50 dark:border-blue-900/50 dark:hover:border-blue-800/50"
            >
          {/* Background decoration */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          
          {/* Connecting line */}
          {index < steps.length - 1 && (
            <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-300 to-transparent group-hover:from-purple-300 transition-colors duration-300"></div>
          )}
          
          <div className="relative z-10 flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
              {step.step}
            </div>
          </div>
          
          <div className="relative z-10 flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {step.title}
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              {step.description}
            </p>
            
            {/* Decorative line */}
            <div className="mt-4 flex">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
