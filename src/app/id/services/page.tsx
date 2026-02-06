import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Code, 
  Shield, 
  Zap, 
  Users, 
  Target, 
  Award,
  ArrowRight,
  Smartphone,
  Globe,
  Database,
  TestTube
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Pengembangan Web',
      description: 'Aplikasi web modern dan responsif yang dibangun dengan teknologi terbaru dan praktik terbaik.',
      href: '/id/services/web-development',
    },
    {
      icon: Smartphone,
      title: 'Pengembangan Mobile',
      description: 'Aplikasi mobile native dan cross-platform yang memberikan pengalaman pengguna yang luar biasa.',
      href: '/id/services/mobile-development',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Solusi keamanan komprehensif untuk melindungi aset digital Anda dari ancaman siber.',
      href: '/id/services/cybersecurity',
    },
    {
      icon: Zap,
      title: 'Cloud Services',
      description: 'Infrastruktur cloud yang scalable dan layanan migrasi untuk bisnis modern.',
      href: '/id/services/cloud-services',
    },
    {
      icon: Users,
      title: 'IT Consultancy',
      description: 'Konsultasi IT strategis untuk mengoptimalkan stack teknologi Anda.',
      href: '/id/services/it-consultancy',
    },
    {
      icon: Target,
      title: 'Data Analytics',
      description: 'Wawasan berbasis data untuk mendorong pertumbuhan bisnis Anda.',
      href: '/id/services/data-analytics',
    },
    {
      icon: TestTube,
      title: 'QA Testing',
      description: 'Layanan quality assurance dan testing untuk perangkat lunak yang andal.',
      href: '/id/services/qa-testing',
    },
    {
      icon: Code,
      title: 'Smart Contract Development',
      description: 'Smart contract yang aman dan teraudit untuk aplikasi blockchain.',
      href: '/id/services/smart-contract-development',
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Platform e-commerce yang powerful dan mudah digunakan untuk bisnis online Anda.',
      href: '/id/services/ecommerce',
    },
  ]

  return (
    <>
      <PageHeader
        title="Layanan Kami"
        subtitle="Solusi teknologi lengkap untuk membantu bisnis Anda berkembang di era digital. Dari pengembangan web hingga konsultasi strategis, kami menyediakan layanan yang Anda butuhkan."
      />

      {/* Services Grid */}
      <Section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/20 hover:to-purple-50/20">
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6">
                    {service.description}
                  </p>
                  <Button asChild className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <Link href={service.href}>
                      Pelajari Lebih Lanjut
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  {/* Decorative line */}
                  <div className="mt-6 flex">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mengapa Memilih Kami?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk proyek digital Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">12+ Tahun Pengalaman</h3>
              <p className="text-gray-600 text-sm">Tim berpengalaman dengan track record yang terbukti</p>
            </div>
            
            <div className="text-center group">
              <div className="h-16 w-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Solusi Kustom</h3>
              <p className="text-gray-600 text-sm">Disesuaikan dengan kebutuhan unik bisnis Anda</p>
            </div>
            
            <div className="text-center group">
              <div className="h-16 w-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teknologi Terkini</h3>
              <p className="text-gray-600 text-sm">Menggunakan teknologi dan framework terbaru</p>
            </div>
            
            <div className="text-center group">
              <div className="h-16 w-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tim Ahli</h3>
              <p className="text-gray-600 text-sm">Developer dan designer berpengalaman</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Mari diskusikan kebutuhan Anda dan temukan solusi terbaik untuk bisnis Anda
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/id/contact">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
                <Link href="/id/about-us">
                  Pelajari Lebih Lanjut
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}





