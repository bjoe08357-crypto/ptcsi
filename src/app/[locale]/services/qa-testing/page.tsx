import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Bug, Zap, Shield, Users, Target } from 'lucide-react'

export default function QATestingPage() {
  const features = [
    {
      title: 'Comprehensive Quality Assurance',
      description: 'End-to-end testing strategies ensuring your software meets the highest quality standards and user expectations.',
    },
    {
      title: 'Automated Testing Solutions',
      description: 'Advanced test automation frameworks for faster, more reliable, and cost-effective testing processes.',
    },
    {
      title: 'Performance & Load Testing',
      description: 'Comprehensive performance testing to ensure your applications can handle real-world usage and scale effectively.',
    },
    {
      title: 'Security & Vulnerability Testing',
      description: 'Thorough security testing to identify and resolve vulnerabilities before they impact your users.',
    },
    {
      title: 'Cross-Platform Compatibility',
      description: 'Testing across multiple devices, browsers, and platforms to ensure consistent user experience.',
    },
    {
      title: 'Continuous Testing Integration',
      description: 'Seamless integration with CI/CD pipelines for continuous quality assurance throughout development.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Test Strategy & Planning',
      description: 'Comprehensive test planning and strategy development based on your requirements and risk assessment.',
    },
    {
      step: '02',
      title: 'Test Case Design & Development',
      description: 'Creation of detailed test cases covering functional, non-functional, and edge case scenarios.',
    },
    {
      step: '03',
      title: 'Test Execution & Automation',
      description: 'Systematic test execution with automated testing frameworks for efficiency and reliability.',
    },
    {
      step: '04',
      title: 'Bug Tracking & Reporting',
      description: 'Detailed bug reporting with reproduction steps, severity classification, and resolution tracking.',
    },
    {
      step: '05',
      title: 'Quality Assurance & Reporting',
      description: 'Comprehensive quality reports and recommendations for continuous improvement.',
    },
  ]

  const testingServices = [
    { 
      icon: CheckCircle, 
      name: 'Functional Testing', 
      items: ['Unit Testing', 'Integration Testing', 'System Testing', 'User Acceptance Testing'] 
    },
    { 
      icon: Zap, 
      name: 'Performance Testing', 
      items: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Scalability Testing'] 
    },
    { 
      icon: Shield, 
      name: 'Security Testing', 
      items: ['Vulnerability Assessment', 'Penetration Testing', 'Security Auditing', 'Compliance Testing'] 
    },
    { 
      icon: Bug, 
      name: 'Test Automation', 
      items: ['Test Framework Development', 'CI/CD Integration', 'Regression Testing', 'API Testing'] 
    },
  ]

  return (
    <>
      <PageHeader
        title="QA Testing"
        subtitle="Comprehensive quality assurance and testing services ensuring reliable, high-performance software"
      />

      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ensure Software Quality & Reliability
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Deliver flawless software that exceeds user expectations. Our comprehensive QA testing services 
                combine manual expertise with advanced automation to ensure your applications are reliable, 
                secure, and perform optimally across all platforms and devices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Comprehensive quality assurance</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Advanced test automation</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Security and performance testing</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our QA Testing?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Certified QA engineers with 8+ years experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Advanced test automation and CI/CD integration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive testing across all platforms and devices</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Detailed reporting and continuous improvement recommendations</span>
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
              Our Testing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive QA testing solutions to ensure software quality and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingServices.map((service, index) => (
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
              Our Testing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring comprehensive quality assurance
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
              Everything you need for comprehensive software quality assurance
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      <CTA
        title="Ready to Ensure Software Quality?"
        subtitle="Let's discuss your testing requirements and create a comprehensive QA strategy that delivers reliable, high-quality software."
        primaryAction={{
          label: 'Start QA Testing',
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