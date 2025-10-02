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
    { value: '12+', label: 'Years of Experience' },
    { value: '150+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration and work closely with our clients to achieve their goals.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity and transparency in all our business dealings.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace innovation and cutting-edge technologies to solve complex business challenges.',
    },
  ]

  const features = [
    {
      title: 'Customized Solutions',
      description: 'Tailored to your unique business requirements and goals.',
    },
    {
      title: 'Expert Team',
      description: 'Experienced professionals with deep technical expertise.',
    },
    {
      title: 'Transparent Communication',
      description: 'Clear project updates and collaborative approach.',
    },
    {
      title: 'Proven Track Record',
      description: '12+ years of successful project delivery.',
    },
  ]


  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="About Our Experience"
        subtitle="We are a team of experienced professionals dedicated to delivering innovative digital solutions that help businesses grow and succeed in the digital age."
      >
        <div className="flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="/en/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
            <Link href="/en/services">
              Learn More
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* Stats Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Achievements</h2>
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
                Why Choose Us
              </h2>
              <FeatureList features={features} />
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                We are a team of experienced professionals dedicated to delivering innovative digital solutions that help businesses grow and succeed in the digital age.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Quality-focused development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Client-centric approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Innovation-driven solutions</span>
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
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
        title="Ready to work with us?"
        subtitle="Let's discuss your project and see how we can help you achieve your goals."
        primaryAction={{
          label: 'Get in Touch',
          href: '/en/contact',
        }}
        secondaryAction={{
          label: 'View Our Services',
          href: '/en/services',
        }}
      />
    </>
  )
}



