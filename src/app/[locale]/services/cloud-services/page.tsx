import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Cloud, Server, Database, Zap, CheckCircle, Users, Shield } from 'lucide-react'

export default function CloudServicesPage() {
  const features = [
    {
      title: 'Seamless Cloud Migration',
      description: 'Zero-downtime migration of your applications and data to leading cloud platforms.',
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling cloud infrastructure that grows with your business needs.',
    },
    {
      title: 'High Availability & Disaster Recovery',
      description: '99.9% uptime guarantee with comprehensive backup and disaster recovery solutions.',
    },
    {
      title: 'Cost Optimization',
      description: 'Intelligent resource management to reduce cloud costs by up to 40%.',
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance for SOC 2, ISO 27001, and GDPR.',
    },
    {
      title: '24/7 Monitoring & Support',
      description: 'Round-the-clock monitoring and expert support for your cloud infrastructure.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Cloud Strategy & Assessment',
      description: 'Comprehensive analysis of your current infrastructure and cloud readiness assessment.',
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design of secure, scalable cloud architecture optimized for your business requirements.',
    },
    {
      step: '03',
      title: 'Migration Planning',
      description: 'Detailed migration roadmap with risk mitigation and minimal business disruption.',
    },
    {
      step: '04',
      title: 'Implementation & Deployment',
      description: 'Seamless execution of cloud migration with continuous monitoring and support.',
    },
    {
      step: '05',
      title: 'Optimization & Management',
      description: 'Performance tuning, cost optimization, and ongoing infrastructure management.',
    },
  ]

  const cloudServices = [
    { 
      icon: Cloud, 
      name: 'Cloud Platforms', 
      items: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Multi-Cloud Strategy'] 
    },
    { 
      icon: Server, 
      name: 'Infrastructure', 
      items: ['Container Orchestration', 'Serverless Architecture', 'Auto Scaling', 'Load Balancing'] 
    },
    { 
      icon: Database, 
      name: 'Data Services', 
      items: ['Database Migration', 'Data Warehousing', 'Backup Solutions', 'Data Analytics'] 
    },
    { 
      icon: Zap, 
      name: 'DevOps & Automation', 
      items: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Performance Optimization'] 
    },
  ]

  return (
    <>
      <PageHeader
        title="Cloud Services"
        description="Accelerate your digital transformation with scalable cloud solutions and expert migration services"
      />

      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Accelerate Your Digital Transformation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your business with our comprehensive cloud services. From seamless migration to 
                ongoing optimization, we help you leverage the power of cloud computing to scale efficiently, 
                reduce costs, and improve performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Cloud className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Zero-downtime cloud migration</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Auto-scaling infrastructure</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Enterprise-grade security</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Cloud Services?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Certified cloud architects with 8+ years experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Proven track record of successful cloud migrations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Cost optimization reducing expenses by up to 40%</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">24/7 monitoring and support for your cloud infrastructure</span>
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
              Our Cloud Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud services to meet all your infrastructure needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServices.map((service, index) => (
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
              Our Cloud Migration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology ensuring seamless transition to the cloud
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
              Everything you need for successful cloud transformation
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      <CTA
        title="Ready to Transform Your Infrastructure?"
        subtitle="Let's discuss your cloud migration needs and create a strategy that accelerates your digital transformation."
        primaryAction={{
          label: 'Start Cloud Migration',
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
