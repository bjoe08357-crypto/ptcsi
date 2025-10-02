import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { ContactForm } from '@/components/ContactForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'info@ptcreativesolution.com',
      href: 'mailto:info@ptcreativesolution.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+62 21 1234 5678',
      href: 'tel:+622112345678',
    },
    {
      icon: MapPin,
      title: 'Address',
      description: 'Jakarta, Indonesia',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Mon - Fri: 9:00 AM - 6:00 PM',
      href: '#',
    },
  ]

  return (
    <>
      {/* Header */}
      <PageHeader
        title="Contact Us"
        subtitle="Ready to start your project? Get in touch with our team and let's discuss how we can help you achieve your goals."
      />

      {/* Contact Form & Info */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help you bring your ideas to life. Whether you have a question about our services or want to discuss a potential project, we&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <info.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {info.title}
                          </h3>
                          <a
                            href={info.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {info.description}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-0 shadow-sm bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">
                    Why Choose PT CSI?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-800">
                    <li>• 12+ years of experience</li>
                    <li>• 100+ successful projects</li>
                    <li>• Expert team of developers</li>
                    <li>• Transparent communication</li>
                    <li>• Competitive pricing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
