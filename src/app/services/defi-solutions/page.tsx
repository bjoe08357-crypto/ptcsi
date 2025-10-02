import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Zap, Users, DollarSign, Lock } from 'lucide-react'

export default function DeFiSolutionsPage() {
  const features = [
    {
      title: 'Decentralized Exchanges (DEX)',
      description: 'Build secure and efficient DEX platforms with automated market making.',
    },
    {
      title: 'Yield Farming Protocols',
      description: 'Create yield farming opportunities with automated reward distribution.',
    },
    {
      title: 'Liquidity Pools',
      description: 'Implement liquidity provision mechanisms for various token pairs.',
    },
    {
      title: 'Staking Mechanisms',
      description: 'Develop secure staking protocols with flexible reward structures.',
    },
    {
      title: 'Cross-Chain Solutions',
      description: 'Enable seamless asset transfers across different blockchain networks.',
    },
    {
      title: 'Governance Systems',
      description: 'Implement decentralized governance with voting mechanisms.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Protocol Design',
      description: 'Designing the DeFi protocol architecture and economic model.',
    },
    {
      step: '02',
      title: 'Smart Contract Development',
      description: 'Building secure and audited smart contracts for the protocol.',
    },
    {
      step: '03',
      title: 'Frontend Development',
      description: 'Creating intuitive user interfaces for protocol interaction.',
    },
    {
      step: '04',
      title: 'Testing & Auditing',
      description: 'Comprehensive testing and security auditing of the entire system.',
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Protocol deployment and ongoing technical support.',
    },
  ]

  const defiTypes = [
    { 
      icon: TrendingUp, 
      name: 'Trading Protocols', 
      items: ['DEX Development', 'AMM Algorithms', 'Order Books', 'Price Oracles'] 
    },
    { 
      icon: DollarSign, 
      name: 'Lending & Borrowing', 
      items: ['Money Markets', 'Collateral Systems', 'Interest Rate Models', 'Liquidation Mechanisms'] 
    },
    { 
      icon: Shield, 
      name: 'Insurance & Risk', 
      items: ['Protocol Insurance', 'Risk Assessment', 'Coverage Pools', 'Claims Processing'] 
    },
    { 
      icon: Zap, 
      name: 'Advanced Features', 
      items: ['Flash Loans', 'Synthetic Assets', 'Derivatives', 'Options Trading'] 
    },
  ]

  return (
    <>
      <PageHeader
        title="DeFi Solutions"
        subtitle="Decentralized finance protocols and liquidity management systems"
      />

      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Revolutionize Finance with DeFi
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Build the future of finance with our comprehensive DeFi solutions. From decentralized exchanges 
                to yield farming protocols, we create secure and innovative financial applications that operate 
                without traditional intermediaries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">High-yield investment opportunities</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Secure and audited protocols</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Community-driven governance</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our DeFi Solutions?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Expert DeFi developers with proven track record</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive security auditing and testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Support for multiple blockchain networks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Ongoing protocol maintenance and updates</span>
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
              DeFi Protocol Types
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We develop various DeFi protocols to meet your financial application needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {defiTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <type.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{type.name}</h3>
                <ul className="space-y-2">
                  {type.items.map((item, idx) => (
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
              A systematic approach ensuring security, efficiency, and successful protocol launch
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
              Everything you need for a successful DeFi protocol
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      <CTA
        title="Ready to Launch Your DeFi Protocol?"
        subtitle="Let's discuss your DeFi project and create innovative financial solutions that revolutionize the industry."
        primaryAction={{
          label: 'Start Your Project',
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



