import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

interface PriceCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: {
    label: string
    href: string
  }
  popular?: boolean
  className?: string
}

export function PriceCard({
  title,
  price,
  period,
  description,
  features,
  cta,
  popular = false,
  className = ''
}: PriceCardProps) {
  return (
    <Card className={`relative ${popular ? 'ring-2 ring-blue-600' : ''} ${className}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-gray-600 ml-2">{period}</span>}
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className="w-full" 
          variant={popular ? 'default' : 'outline'}
          asChild
        >
          <a href={cta.href}>{cta.label}</a>
        </Button>
      </CardContent>
    </Card>
  )
}



