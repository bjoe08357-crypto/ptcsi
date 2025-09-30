import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Code, Shield, Zap, Users, Target, Award } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      href: '/en/services/web-development',
      features: ['React/Next.js Development', 'Full-Stack Solutions', 'API Integration', 'Performance Optimization'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      href: '/en/services/cybersecurity',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Consulting', 'Incident Response'],
    },
    {
      icon: Zap,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services.',
      href: '/en/services/cloud-services',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps Automation', 'Cost Optimization'],
    },
    {
      icon: Users,
      title: 'IT Consultancy',
      description: 'Strategic IT consulting to optimize your technology stack.',
      href: '/en/services/it-consultancy',
      features: ['Technology Strategy', 'Digital Transformation', 'Architecture Design', 'Process Optimization'],
    },
    {
      icon: Target,
      title: 'Data Analytics',
      description: 'Data-driven insights to fuel your business growth.',
      href: '/en/services/data-analytics',
      features: ['Business Intelligence', 'Data Visualization', 'Machine Learning', 'Predictive Analytics'],
    },
    {
      icon: Award,
      title: 'QA Testing',
      description: 'Quality assurance and testing services for reliable software.',
      href: '/en/services/qa-testing',
      features: ['Automated Testing', 'Manual Testing', 'Performance Testing', 'Security Testing'],
    },
    {
      icon: Code,
      title: 'Smart Contract Development',
      description: 'Secure and audited smart contracts for blockchain applications.',
      href: '/en/services/smart-contract-development',
      features: ['Solidity Development', 'Smart Contract Audits', 'DeFi Protocols', 'Token Standards'],
    },
    {
      icon: Shield,
      title: 'DeFi Solutions',
      description: 'Decentralized finance protocols and liquidity management systems.',
      href: '/en/services/defi-solutions',
      features: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Cross-Chain Solutions'],
    },
    {
      icon: Users,
      title: 'NFT & Marketplaces',
      description: 'NFT creation, marketplace development, and tokenization services.',
      href: '/en/services/nft-marketplaces',
      features: ['NFT Minting', 'Marketplace Development', 'Metadata Management', 'Royalty Systems'],
    },
  ]

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive IT and Web3 solutions to transform your business"
      />

      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
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

      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/en/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/en/about-us">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}



