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
      title: 'Telepon',
      description: '+62 21 1234 5678',
      href: 'tel:+622112345678',
    },
    {
      icon: MapPin,
      title: 'Alamat',
      description: 'Jakarta, Indonesia',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Jam Kerja',
      description: 'Sen - Jum: 09:00 - 18:00',
      href: '#',
    },
  ]

  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Siap memulai proyek Anda? Hubungi tim kami dan mari diskusikan bagaimana kami dapat membantu Anda mencapai tujuan Anda."
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
                  Hubungi Kami
                </h2>
                <p className="text-gray-600 mb-8">
                  Kami di sini untuk membantu Anda mewujudkan ide-ide Anda. Baik Anda memiliki pertanyaan tentang layanan kami atau ingin mendiskusikan proyek potensial, kami ingin mendengar dari Anda.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-sm group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <info.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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

              <Card className="border-0 shadow-sm bg-blue-50 group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900 group-hover:text-blue-800 transition-colors duration-300">
                    Mengapa Memilih PT CSI?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-800">
                    <li>• 12+ tahun pengalaman</li>
                    <li>• 150+ proyek berhasil</li>
                    <li>• Tim developer ahli</li>
                    <li>• Komunikasi transparan</li>
                    <li>• Harga kompetitif</li>
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
