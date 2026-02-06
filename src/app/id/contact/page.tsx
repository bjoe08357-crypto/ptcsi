import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle, Award, Users, Briefcase, Shield } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Kami',
      description: 'info@ptcreativesolution.com',
      href: 'mailto:info@ptcreativesolution.com',
      color: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
    },
    {
      icon: Phone,
      title: 'Telepon Kami',
      description: '+62 881 5480 836',
      href: 'tel:+628815480836',
      color: 'from-emerald-500 to-emerald-600',
      bgLight: 'bg-emerald-50',
    },
    {
      icon: MapPin,
      title: 'Kunjungi Kami',
      description: 'Jakarta, Indonesia',
      href: '#',
      color: 'from-purple-500 to-purple-600',
      bgLight: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: 'Jam Kerja',
      description: 'Sen - Jum: 09:00 - 18:00',
      href: '#',
      color: 'from-amber-500 to-amber-600',
      bgLight: 'bg-amber-50',
    },
  ]

  const stats = [
    { icon: Award, value: '12+', label: 'Tahun Pengalaman' },
    { icon: Briefcase, value: '150+', label: 'Proyek Selesai' },
    { icon: Users, value: '50+', label: 'Klien Puas' },
    { icon: Shield, value: '99%', label: 'Kepuasan Klien' },
  ]

  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Siap memulai proyek Anda? Hubungi tim kami dan mari diskusikan bagaimana kami dapat membantu Anda mencapai tujuan Anda."
      />

      {/* Main Contact Section */}
      <Section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - CTA & Description */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                  Hubungi Kami
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Mari Bangun Sesuatu yang{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Luar Biasa Bersama
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Apakah Anda memiliki pertanyaan tentang layanan kami, ingin mendiskusikan proyek potensial, atau sekadar ingin menyapa — kami ingin mendengar dari Anda. Tim kami biasanya merespons dalam 24 jam.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <a href="mailto:info@ptcreativesolution.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Kirim Email
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all duration-300 group">
                  <a href="https://wa.me/628815480836" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Kami
                  </a>
                </Button>
              </div>
            </div>

            {/* Right - Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group block"
                >
                  <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats / Why Choose Us */}
      <Section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-900 dark:to-blue-950/30">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              Mengapa Memilih Kami
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Dipercaya oleh Bisnis di Seluruh Dunia
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-md mb-4 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section className="py-16 bg-white dark:bg-gray-950">
        <Container size="md">
          <div className="text-center bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-10 lg:p-16 shadow-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Mari wujudkan ide Anda menjadi kenyataan. Hubungi kami hari ini dan dapatkan konsultasi gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg font-semibold">
                <a href="mailto:info@ptcreativesolution.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Kami Sekarang
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold">
                <Link href="/id/services">
                  Jelajahi Layanan Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
