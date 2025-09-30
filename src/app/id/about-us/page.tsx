import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { Stats } from '@/components/Stats'
import { FeatureList } from '@/components/FeatureList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Globe,
  Heart
} from 'lucide-react'

export default function AboutUsPage() {
  const stats = [
    { value: '12+', label: 'Tahun Pengalaman' },
    { value: '150+', label: 'Proyek Selesai' },
    { value: '100+', label: 'Klien Puas' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Keunggulan',
      description: 'Kami berusaha untuk keunggulan dalam setiap proyek, memberikan solusi berkualitas tinggi yang melampaui ekspektasi.',
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description: 'Kami percaya pada kekuatan kolaborasi dan bekerja erat dengan klien untuk mencapai tujuan mereka.',
    },
    {
      icon: Shield,
      title: 'Integritas',
      description: 'Kami mempertahankan standar integritas dan transparansi tertinggi dalam semua transaksi bisnis kami.',
    },
    {
      icon: Zap,
      title: 'Inovasi',
      description: 'Kami merangkul inovasi dan teknologi canggih untuk memecahkan tantangan bisnis yang kompleks.',
    },
  ]

  const features = [
    {
      title: 'Solusi Kustom',
      description: 'Disesuaikan dengan kebutuhan unik dan tujuan bisnis Anda.',
    },
    {
      title: 'Tim Ahli',
      description: 'Profesional berpengalaman dengan keahlian teknis yang mendalam.',
    },
    {
      title: 'Komunikasi Transparan',
      description: 'Update proyek yang jelas dan pendekatan kolaboratif.',
    },
    {
      title: 'Track Record Terbukti',
      description: '12+ tahun pengiriman proyek yang berhasil.',
    },
  ]

  return (
    <>
      <PageHeader
        title="Tentang Pengalaman Kami"
        subtitle="Kami adalah tim profesional berpengalaman yang berdedikasi untuk memberikan solusi digital inovatif yang membantu bisnis tumbuh dan sukses di era digital."
      >
        <div className="flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="/id/contact">
              Hubungi Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
            <Link href="/id/services">
              Pelajari Lebih Lanjut
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* Stats Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Pencapaian Kami</h2>
          </div>
          <Stats stats={stats} />
        </Container>
      </Section>

      {/* Mission Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mengapa Memilih Kami
              </h2>
              <FeatureList features={features} />
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Misi Kami
              </h3>
              <p className="text-gray-600 mb-6">
                Kami adalah tim profesional berpengalaman yang berdedikasi untuk memberikan solusi digital inovatif yang membantu bisnis tumbuh dan sukses di era digital.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Pengembangan berfokus kualitas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Pendekatan berpusat pada klien</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Solusi yang didorong inovasi</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu semua yang kami lakukan
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Siap bekerja dengan kami?"
        subtitle="Mari diskusikan proyek Anda dan lihat bagaimana kami dapat membantu Anda mencapai tujuan Anda."
        primaryAction={{
          label: 'Hubungi Kami',
          href: '/id/contact',
        }}
        secondaryAction={{
          label: 'Lihat Layanan Kami',
          href: '/id/services',
        }}
      />
    </>
  )
}
