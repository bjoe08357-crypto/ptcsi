import { Button } from '@/components/ui/button'
import { Container } from './Container'

interface CTAProps {
  title: string
  subtitle?: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  className?: string
}

export function CTA({ 
  title, 
  subtitle, 
  primaryAction, 
  secondaryAction, 
  className = '' 
}: CTAProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-16 lg:py-24 ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-300/20 rounded-full blur-md animate-pulse delay-2000"></div>

      <Container>
        <div className="relative text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href={primaryAction.href}>
                {primaryAction.label}
              </a>
            </Button>
            {secondaryAction && (
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a href={secondaryAction.href}>
                  {secondaryAction.label}
                </a>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}



