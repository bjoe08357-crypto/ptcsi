import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { Stats } from '@/components/Stats'
import { FeatureList } from '@/components/FeatureList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Code, Shield, Zap, Users, Target, Award } from 'lucide-react'

export default function HomePage() {

  const stats = [
    { value: '12+', label: 'Years of Experience' },
    { value: '150+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
  ]

      const services = [
        {
          icon: Code,
          title: 'Web Development',
          description: 'Custom web applications built with modern technologies and best practices.',
          href: '/en/services/web-development',
        },
        {
          icon: Shield,
          title: 'Cybersecurity',
          description: 'Comprehensive security solutions to protect your digital assets.',
          href: '/en/services/cybersecurity',
        },
        {
          icon: Zap,
          title: 'Cloud Services',
          description: 'Scalable cloud infrastructure and migration services.',
          href: '/en/services/cloud-services',
        },
        {
          icon: Users,
          title: 'IT Consultancy',
          description: 'Strategic IT consulting to optimize your technology stack.',
          href: '/en/services/it-consultancy',
        },
        {
          icon: Target,
          title: 'Data Analytics',
          description: 'Data-driven insights to fuel your business growth.',
          href: '/en/services/data-analytics',
        },
        {
          icon: Award,
          title: 'QA Testing',
          description: 'Quality assurance and testing services for reliable software.',
          href: '/en/services/qa-testing',
        },
        {
          icon: Code,
          title: 'Smart Contract Development',
          description: 'Secure and audited smart contracts for blockchain applications.',
          href: '/en/services/smart-contract-development',
        },
        {
          icon: Shield,
          title: 'DeFi Solutions',
          description: 'Decentralized finance protocols and liquidity management systems.',
          href: '/en/services/defi-solutions',
        },
        {
          icon: Users,
          title: 'NFT & Marketplaces',
          description: 'NFT creation, marketplace development, and tokenization services.',
          href: '/en/services/nft-marketplaces',
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
        title="Transforming ideas into inspiring experiences"
        subtitle="Your one‑stop digital software partner. We turn your ideas into cutting‑edge digital realities."
      >
        <div className="flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="/en/contact">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
            <Link href="/en/about-us">
              Learn More
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* Stats Section */}
      <Section className="py-16 bg-white dark:bg-gray-950">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Trusted by Industry Leaders</h2>
          </div>
          <Stats stats={stats} />
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How we help you
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT solutions to transform your business
            </p>
          </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col border border-transparent dark:border-blue-900/50"
                  >
                    <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Button asChild className="w-full mt-auto">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="py-20 bg-white dark:bg-gray-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Why choose us
              </h2>
              <FeatureList features={features} />
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-8 rounded-2xl border border-transparent dark:border-blue-900/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We provide a wide range of IT services from strategy to engineering, 
                helping businesses transform their digital presence with innovative solutions.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to transform your ideas into reality?"
        subtitle="Let's discuss your project and create something amazing together."
        primaryAction={{
          label: 'Start a Project',
          href: '/en/contact',
        }}
        secondaryAction={{
          label: 'Learn More',
          href: '/en/about-us',
        }}
      />
    </>
  )
}
