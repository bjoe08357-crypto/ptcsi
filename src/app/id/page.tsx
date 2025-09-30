import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Stats } from '@/components/Stats'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { ArrowRight, Code, Smartphone, Globe, Shield, Zap, Users } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const stats = [
    { value: '12+', label: 'Tahun Pengalaman' },
    { value: '150+', label: 'Proyek Selesai' },
    { value: '100+', label: 'Klien Puas' },
  ]

  const features = [
    {
      title: 'Pengembangan Web Modern',
      description: 'Kami membangun aplikasi web yang responsif, cepat, dan user-friendly menggunakan teknologi terbaru.'
    },
    {
      title: 'Pengembangan Mobile Apps',
      description: 'Aplikasi mobile native dan cross-platform yang memberikan pengalaman pengguna yang luar biasa.'
    },
    {
      title: 'Solusi E-commerce',
      description: 'Platform e-commerce yang aman, scalable, dan mudah digunakan untuk bisnis online Anda.'
    },
    {
      title: 'Konsultasi Teknologi',
      description: 'Konsultasi strategis untuk membantu Anda memilih teknologi yang tepat untuk kebutuhan bisnis.'
    },
    {
      title: 'Maintenance & Support',
      description: 'Layanan maintenance dan support 24/7 untuk memastikan aplikasi Anda berjalan optimal.'
    },
    {
      title: 'UI/UX Design',
      description: 'Desain antarmuka yang intuitif dan menarik untuk meningkatkan engagement pengguna.'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Konsultasi & Analisis',
      description: 'Kami menganalisis kebutuhan bisnis Anda dan memberikan rekomendasi solusi terbaik.'
    },
    {
      step: '2',
      title: 'Perencanaan & Desain',
      description: 'Membuat wireframe, mockup, dan rencana pengembangan yang detail sesuai kebutuhan Anda.'
    },
    {
      step: '3',
      title: 'Pengembangan',
      description: 'Proses pengembangan dengan metodologi agile, memastikan kualitas dan timeline yang tepat.'
    },
    {
      step: '4',
      title: 'Testing & Quality Assurance',
      description: 'Testing menyeluruh untuk memastikan aplikasi berfungsi sempurna di semua platform.'
    },
    {
      step: '5',
      title: 'Deployment & Launch',
      description: 'Deployment aplikasi dan peluncuran dengan monitoring untuk memastikan performa optimal.'
    }
  ]

  const services = [
    {
      icon: Code,
      title: 'Pengembangan Web',
      description: 'Aplikasi web modern dan responsif',
      href: '/id/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'Pengembangan Mobile',
      description: 'Aplikasi mobile untuk iOS dan Android',
      href: '/id/services/mobile-development'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Platform e-commerce yang powerful',
      href: '/id/services/ecommerce'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Keamanan siber untuk bisnis Anda',
      href: '/id/services/cybersecurity'
    },
    {
      icon: Zap,
      title: 'Cloud Services',
      description: 'Solusi cloud yang scalable',
      href: '/id/services/cloud-services'
    },
    {
      icon: Users,
      title: 'IT Consultancy',
      description: 'Konsultasi teknologi strategis',
      href: '/id/services/it-consultancy'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-200/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-200/20 rounded-full blur-md animate-pulse delay-2000"></div>

        <Container>
          <div className="relative text-center">
            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up">
              Mengubah Ide Menjadi
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pengalaman Digital
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              PT Creative Solution International adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif. Kami membantu bisnis berkembang melalui teknologi yang tepat dan desain yang memukau.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up delay-300">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/id/contact">
                  Mulai Proyek Anda
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
                <Link href="/id/services">
                  Lihat Layanan Kami
                </Link>
              </Button>
            </div>

            {/* Bottom Decorative Line */}
            <div className="flex items-center justify-center mt-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              <div className="mx-4 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            </div>
          </div>
        </Container>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dipercaya oleh Banyak Klien
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Angka-angka yang membuktikan kualitas dan kepercayaan klien terhadap layanan kami
            </p>
          </div>
          <Stats stats={stats} />
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Layanan Kami
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Solusi teknologi lengkap untuk membantu bisnis Anda berkembang di era digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 border border-gray-200 hover:border-blue-200"
              >
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6">
                    {service.description}
                  </p>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>

                  {/* Decorative line */}
                  <div className="mt-6 flex">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mengapa Memilih Kami?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk proyek digital Anda
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Proses Kerja Kami
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Metodologi yang terstruktur untuk memastikan proyek berjalan lancar dan sesuai ekspektasi
            </p>
          </div>
          <StepList steps={process} />
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Siap mewujudkan ide Anda menjadi kenyataan?"
        subtitle="Mari diskusikan proyek Anda dan ciptakan sesuatu yang luar biasa bersama-sama."
        primaryAction={{
          label: 'Mulai Proyek',
          href: '/id/contact',
        }}
        secondaryAction={{
          label: 'Pelajari Lebih Lanjut',
          href: '/id/about-us',
        }}
      />
    </>
  )
}
