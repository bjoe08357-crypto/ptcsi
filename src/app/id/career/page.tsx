import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
  Heart,
  Briefcase,
  MapPin,
  Calendar
} from 'lucide-react'

export default function CareerPage() {
  const benefits = [
    {
      icon: Target,
      title: 'Pengembangan Profesional',
      description: 'Kesempatan belajar berkelanjutan dan program pengembangan profesional.',
    },
    {
      icon: Zap,
      title: 'Inovasi',
      description: 'Bekerja dengan teknologi canggih dan proyek inovatif.',
    },
    {
      icon: Users,
      title: 'Semangat Tim',
      description: 'Lingkungan kolaboratif dengan anggota tim yang mendukung.',
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Opsi kerja remote yang fleksibel dan keseimbangan kehidupan kerja.',
    },
    {
      icon: Award,
      title: 'Pengakuan',
      description: 'Penghargaan berbasis kinerja dan peluang kemajuan karir.',
    },
    {
      icon: Heart,
      title: 'Kesejahteraan',
      description: 'Program kesehatan dan kesejahteraan untuk semua anggota tim.',
    },
  ]

  const openPositions = [
    {
      title: 'Project Manager',
      department: 'Manajemen Proyek',
      location: 'Remote',
      type: 'Full Time',
      description: 'Memimpin dan mengelola proyek pengembangan perangkat lunak dari konsepsi hingga pengiriman.',
      requirements: [
        '3+ tahun pengalaman manajemen proyek',
        'Pengalaman dengan metodologi agile',
        'Keterampilan komunikasi dan kepemimpinan yang kuat',
        'Latar belakang teknis lebih disukai',
      ],
    },
    {
      title: 'Web Designer',
      department: 'Desain',
      location: 'Remote',
      type: 'Full Time',
      description: 'Membuat antarmuka pengguna yang indah dan fungsional untuk aplikasi web dan mobile.',
      requirements: [
        '2+ tahun pengalaman desain web',
        'Kemahiran dalam Figma, Adobe Creative Suite',
        'Pemahaman prinsip UX/UI',
        'Portfolio pekerjaan sebelumnya',
      ],
    },
    {
      title: 'HR Coordinator',
      department: 'Sumber Daya Manusia',
      location: 'Remote',
      type: 'Full Time',
      description: 'Mendukung operasi HR dan membantu membangun budaya perusahaan yang positif.',
      requirements: [
        '1+ tahun pengalaman HR',
        'Pengetahuan praktik terbaik HR',
        'Keterampilan organisasi yang sangat baik',
        'Gelar sarjana di bidang HR atau bidang terkait',
      ],
    },
  ]

  return (
    <>
      <PageHeader
        title="Karir"
        subtitle="Bergabunglah dengan tim kami dan bantu kami membangun solusi digital inovatif. Kami mencari individu berbakat yang berbagi semangat kami untuk teknologi dan keunggulan."
      >
        <div className="flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="#positions">
              Posisi Terbuka
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
            <Link href="#benefits">
              Benefit
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* Benefits Section */}
      <Section id="benefits" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefit
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menawarkan benefit kompetitif dan lingkungan kerja yang mendukung
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-sm group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Positions Section */}
      <Section id="positions" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Posisi Terbuka
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jelajahi lowongan kerja kami saat ini dan temukan peluang berikutnya
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-sm group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">{position.title}</CardTitle>
                      <p className="text-gray-600 mt-1">{position.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                      <Badge variant="secondary" className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {position.location}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {position.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Persyaratan:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/id/contact">
                      Lamar Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Culture Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Budaya Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami percaya dalam menciptakan lingkungan kerja yang positif dan inklusif
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group">
              <div className="h-16 w-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kolaboratif</h3>
              <p className="text-gray-600 text-sm">Kami bekerja sama untuk mencapai tujuan bersama</p>
            </div>
            <div className="text-center group">
              <div className="h-16 w-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inovatif</h3>
              <p className="text-gray-600 text-sm">Kami merangkul teknologi dan ide baru</p>
            </div>
            <div className="text-center group">
              <div className="h-16 w-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dapat Diandalkan</h3>
              <p className="text-gray-600 text-sm">Kami memenuhi janji dan komitmen kami</p>
            </div>
            <div className="text-center group">
              <div className="h-16 w-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Peduli</h3>
              <p className="text-gray-600 text-sm">Kami peduli dengan anggota tim dan klien kami</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Siap bergabung dengan tim kami?"
        subtitle="Kami selalu mencari individu berbakat untuk bergabung dengan tim yang berkembang."
        primaryAction={{
          label: 'Lamar Sekarang',
          href: '/id/contact',
        }}
        secondaryAction={{
          label: 'Pelajari Lebih Lanjut Tentang Kami',
          href: '/id/about-us',
        }}
      />
    </>
  )
}





