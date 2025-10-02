import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, CheckCircle, Zap, Shield } from 'lucide-react'

export default function ITConsultancyPage() {
  const features = [
    {
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development aligned with your business goals and digital transformation objectives.',
    },
    {
      title: 'Technology Assessment & Audit',
      description: 'Thorough evaluation of your current technology stack with actionable recommendations for improvement.',
    },
    {
      title: 'Digital Transformation Guidance',
      description: 'Expert guidance through digital transformation initiatives and modern technology adoption.',
    },
    {
      title: 'Performance Optimization',
      description: 'Systematic optimization of IT processes and infrastructure for maximum efficiency and ROI.',
    },
    {
      title: 'Change Management',
      description: 'Structured approach to managing technology changes and ensuring smooth transitions.',
    },
    {
      title: 'Ongoing Advisory Services',
      description: 'Continuous strategic guidance and support to keep your technology aligned with business goals.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your business needs, current technology landscape, and challenges.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Creating a detailed IT strategy that aligns with your business objectives and growth plans.',
    },
    {
      step: '03',
      title: 'Technology Roadmap',
      description: 'Developing a comprehensive roadmap for technology implementation and digital transformation.',
    },
    {
      step: '04',
      title: 'Implementation Support',
      description: 'Guiding the implementation of recommended solutions with best practices and change management.',
    },
    {
      step: '05',
      title: 'Training & Knowledge Transfer',
      description: 'Comprehensive training programs and knowledge transfer to ensure successful adoption.',
    },
  ]

  const consultancyServices = [
    { 
      icon: Target, 
      name: 'Strategic Planning', 
      items: ['IT Strategy Development', 'Digital Roadmap Planning', 'Technology Assessment', 'Business Alignment'] 
    },
    { 
      icon: Lightbulb, 
      name: 'Digital Transformation', 
      items: ['Process Optimization', 'Technology Modernization', 'Change Management', 'Innovation Consulting'] 
    },
    { 
      icon: TrendingUp, 
      name: 'Performance Optimization', 
      items: ['System Optimization', 'Cost Reduction', 'Efficiency Improvement', 'ROI Analysis'] 
    },
    { 
      icon: Users, 
      name: 'Advisory Services', 
      items: ['Technology Advisory', 'Vendor Management', 'Risk Assessment', 'Compliance Consulting'] 
    },
  ]

  return (
    <>
      <PageHeader
        title="IT Consultancy"
        subtitle="Strategic IT consulting to optimize your technology stack and drive digital transformation"
      />

      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transform Your Business with Strategic IT Consulting
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our expert IT consultants help you navigate the complex world of technology, providing strategic 
                guidance to optimize your IT infrastructure, drive digital transformation, and achieve your business 
                objectives with confidence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Strategic technology planning</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Digital transformation expertise</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Risk assessment and mitigation</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Consulting?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Senior IT consultants with 15+ years experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Proven track record of successful digital transformations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Industry-specific expertise across multiple sectors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Ongoing support and strategic guidance</span>
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
              Our Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT consulting services to drive your digital transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultancyServices.map((service, index) => (
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
              Our Consulting Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring successful digital transformation
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
              Everything you need for strategic IT transformation
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      <CTA
        title="Ready to Transform Your IT Strategy?"
        subtitle="Let's discuss your technology challenges and create a strategic plan that drives your business forward."
        primaryAction={{
          label: 'Get IT Consultation',
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
