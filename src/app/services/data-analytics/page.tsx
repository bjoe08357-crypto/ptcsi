import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, BarChart3, Database, TrendingUp, PieChart, CheckCircle, Zap, Users } from 'lucide-react'

export default function DataAnalyticsPage() {
  const features = [
    {
      title: 'Advanced Business Intelligence',
      description: 'Transform raw data into actionable insights with powerful BI dashboards and real-time reporting.',
    },
    {
      title: 'Predictive Analytics & Machine Learning',
      description: 'Leverage AI and ML algorithms to predict trends, behaviors, and business outcomes.',
    },
    {
      title: 'Data Management & Governance',
      description: 'Comprehensive data collection, storage, and governance solutions with quality assurance.',
    },
    {
      title: 'Interactive Data Visualization',
      description: 'Create compelling visualizations and interactive dashboards for better decision-making.',
    },
    {
      title: 'Real-time Analytics',
      description: 'Stream processing and real-time analytics for immediate insights and faster responses.',
    },
    {
      title: 'Custom Analytics Solutions',
      description: 'Tailored analytics platforms designed specifically for your business needs and industry.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Data Assessment & Strategy',
      description: 'Comprehensive evaluation of your data sources, quality, and analytics requirements.',
    },
    {
      step: '02',
      title: 'Data Architecture Design',
      description: 'Designing scalable data architecture and infrastructure for optimal performance.',
    },
    {
      step: '03',
      title: 'Data Pipeline Development',
      description: 'Building robust ETL pipelines for data collection, processing, and storage.',
    },
    {
      step: '04',
      title: 'Analytics Implementation',
      description: 'Developing custom analytics solutions, ML models, and visualization dashboards.',
    },
    {
      step: '05',
      title: 'Training & Optimization',
      description: 'Training your team and continuous optimization of analytics performance.',
    },
  ]

  const analyticsServices = [
    { 
      icon: BarChart3, 
      name: 'Business Intelligence', 
      items: ['Dashboard Development', 'KPI Tracking', 'Performance Analytics', 'Executive Reporting'] 
    },
    { 
      icon: TrendingUp, 
      name: 'Predictive Analytics', 
      items: ['Machine Learning Models', 'Forecasting', 'Risk Analysis', 'Customer Analytics'] 
    },
    { 
      icon: Database, 
      name: 'Data Management', 
      items: ['Data Warehousing', 'ETL Pipelines', 'Data Quality', 'Master Data Management'] 
    },
    { 
      icon: PieChart, 
      name: 'Data Visualization', 
      items: ['Interactive Dashboards', 'Custom Reports', 'Data Storytelling', 'Visual Analytics'] 
    },
  ]

  return (
    <>
      <PageHeader
        title="Data Analytics"
        subtitle="Transform your data into actionable insights with advanced analytics and machine learning solutions"
      />

      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Unlock the Power of Your Data
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your raw data into strategic insights that drive business growth. Our advanced analytics 
                solutions combine cutting-edge technology with deep industry expertise to help you make data-driven 
                decisions and stay ahead of the competition.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Advanced business intelligence</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Real-time analytics and insights</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Expert data scientists and analysts</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Data Analytics?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Certified data scientists with 10+ years experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Advanced ML and AI capabilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Custom analytics solutions for your industry</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Real-time insights and predictive analytics</span>
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
              Our Analytics Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive data analytics solutions to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsServices.map((service, index) => (
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
              Our Analytics Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring successful data transformation and insights
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
              Everything you need for powerful data analytics and insights
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      <CTA
        title="Ready to Transform Your Data?"
        subtitle="Let's discuss your analytics needs and create a solution that unlocks the full potential of your data."
        primaryAction={{
          label: 'Start Analytics Project',
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
