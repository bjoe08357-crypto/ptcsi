import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap, Users } from 'lucide-react'

export default function CybersecurityPage() {
  const features = [
    {
      title: 'Comprehensive Security Assessment',
      description: 'Thorough evaluation of your security posture with detailed vulnerability analysis and risk assessment.',
    },
    {
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security solutions including firewalls, intrusion detection, and endpoint protection.',
    },
    {
      title: 'Data Encryption & Privacy',
      description: 'End-to-end encryption for data at rest and in transit, ensuring complete privacy protection.',
    },
    {
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock monitoring with real-time threat detection and automated response systems.',
    },
    {
      title: 'Incident Response & Recovery',
      description: 'Rapid response protocols and disaster recovery plans to minimize business disruption.',
    },
    {
      title: 'Compliance & Governance',
      description: 'Ensure compliance with industry standards like ISO 27001, GDPR, and SOC 2.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security infrastructure and threat landscape.',
    },
    {
      step: '02',
      title: 'Risk Analysis & Planning',
      description: 'Detailed risk assessment and development of customized security strategies.',
    },
    {
      step: '03',
      title: 'Solution Implementation',
      description: 'Deployment of security solutions with minimal disruption to business operations.',
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Penetration testing and security validation to ensure robust protection.',
    },
    {
      step: '05',
      title: 'Monitoring & Maintenance',
      description: 'Continuous monitoring, updates, and maintenance of security systems.',
    },
  ]

  const securityServices = [
    { 
      icon: Shield, 
      name: 'Network Security', 
      items: ['Firewall Configuration', 'VPN Setup', 'Network Monitoring', 'Intrusion Detection'] 
    },
    { 
      icon: Lock, 
      name: 'Data Protection', 
      items: ['Data Encryption', 'Backup Solutions', 'Access Control', 'Data Loss Prevention'] 
    },
    { 
      icon: Eye, 
      name: 'Threat Detection', 
      items: ['SIEM Implementation', 'Behavioral Analytics', 'Threat Intelligence', 'Security Monitoring'] 
    },
    { 
      icon: AlertTriangle, 
      name: 'Incident Response', 
      items: ['Response Planning', 'Forensic Analysis', 'Recovery Procedures', 'Crisis Management'] 
    },
  ]

  return (
    <>
      <PageHeader
        title="Cybersecurity"
        subtitle="Comprehensive security solutions to protect your digital assets and business operations"
      />

      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Protect Your Business from Cyber Threats
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                In today's digital landscape, cybersecurity is not optional—it's essential. Our expert team provides 
                comprehensive security solutions to protect your business from evolving cyber threats, ensuring your 
                data, systems, and reputation remain secure.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Enterprise-grade security solutions</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">24/7 threat monitoring and response</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Expert security professionals</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Cybersecurity Services?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Certified security experts with 10+ years experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive security assessment and planning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Proactive threat detection and prevention</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Compliance with industry standards and regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Security Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <service.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Security Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring comprehensive protection and compliance
            </p>
          </div>
          <StepList steps={process} />
        </Container>
      </Section>

      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for robust cybersecurity protection
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      <CTA
        title="Ready to Secure Your Business?"
        subtitle="Let's discuss your security needs and create a comprehensive protection strategy for your organization."
        primaryAction={{
          label: 'Get Security Assessment',
          href: '/en/contact',
        }}
        secondaryAction={{
          label: 'View All Services',
          href: '/en/services',
        }}
      />
    </>
  )
}
