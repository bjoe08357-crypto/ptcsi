import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Code, Globe, Smartphone, Zap, Shield, Users } from 'lucide-react'

export default function WebDevelopmentPage() {
  const features = [
    {
      title: 'Modern Technology Stack',
      description: 'Built with React, Next.js, TypeScript, and the latest web technologies.',
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect experience across all devices.',
    },
    {
      title: 'Performance Optimized',
      description: 'Fast loading times and optimized user experience for better conversions.',
    },
    {
      title: 'SEO Ready',
      description: 'Search engine optimized with proper meta tags and structured data.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business needs and handle increased traffic.',
    },
    {
      title: 'Security First',
      description: 'Implementing best security practices to protect your data and users.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and interactive prototypes for user experience validation.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your application with clean, maintainable code and best practices.',
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing to ensure functionality, performance, and security.',
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Deploying to production with monitoring and ongoing support setup.',
    },
  ]

  const technologies = [
    { icon: Code, name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { icon: Globe, name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { icon: Smartphone, name: 'Mobile', items: ['React Native', 'Flutter', 'PWA', 'Responsive Design'] },
    { icon: Zap, name: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'CI/CD'] },
  ]

  return (
    <>
      <PageHeader
        title="Web Development"
        description="Custom web applications built with modern technologies and best practices"
      />

      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transform Your Ideas Into Digital Reality
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We create custom web applications that are fast, secure, and scalable. Our team of expert developers 
                uses the latest technologies to build solutions that drive your business forward.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Enterprise-grade security</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Lightning-fast performance</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">User-centered design</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Web Development?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">12+ years of experience in web development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">100+ successful projects delivered</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Modern tech stack and best practices</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Ongoing support and maintenance</span>
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
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust and scalable web applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <tech.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tech.name}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
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
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
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
              Everything you need for a successful web application
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      <CTA
        title="Ready to Build Your Web Application?"
        subtitle="Let's discuss your project requirements and create a solution that drives your business forward."
        primaryAction={{
          label: 'Start Your Project',
          href: '/en/contact',
        }}
        secondaryAction={{
          label: 'View Our Portfolio',
          href: '/en/about-us',
        }}
      />
    </>
  )
}



