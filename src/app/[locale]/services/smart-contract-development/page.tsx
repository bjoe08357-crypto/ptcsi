import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Code, Shield, Zap, Users, Lock, CheckCircle } from 'lucide-react'

export default function SmartContractDevelopmentPage() {
  const features = [
    {
      title: 'Secure & Audited Code',
      description: 'Smart contracts built with security-first approach and comprehensive auditing.',
    },
    {
      title: 'Gas Optimization',
      description: 'Efficient code that minimizes gas costs and maximizes transaction throughput.',
    },
    {
      title: 'Multiple Blockchain Support',
      description: 'Compatible with Ethereum, Polygon, BSC, and other major blockchain networks.',
    },
    {
      title: 'Standard Compliance',
      description: 'ERC-20, ERC-721, ERC-1155, and other token standards implementation.',
    },
    {
      title: 'DeFi Integration',
      description: 'DEX, yield farming, staking, and other DeFi protocol development.',
    },
    {
      title: 'Ongoing Support',
      description: 'Maintenance, updates, and technical support for your smart contracts.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your project needs and defining smart contract specifications.',
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Designing the contract structure and interaction patterns for optimal performance.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Writing secure code and comprehensive testing on testnets.',
    },
    {
      step: '04',
      title: 'Security Audit',
      description: 'Professional security review and vulnerability assessment.',
    },
    {
      step: '05',
      title: 'Deployment & Integration',
      description: 'Mainnet deployment and integration with your application.',
    },
  ]

  const contractTypes = [
    { 
      icon: Code, 
      name: 'Token Contracts', 
      items: ['ERC-20 Tokens', 'ERC-721 NFTs', 'ERC-1155 Multi-Token', 'Custom Token Logic'] 
    },
    { 
      icon: Shield, 
      name: 'DeFi Protocols', 
      items: ['DEX Contracts', 'Yield Farming', 'Liquidity Pools', 'Staking Mechanisms'] 
    },
    { 
      icon: Lock, 
      name: 'Security Features', 
      items: ['Access Control', 'Multi-Signature', 'Time Locks', 'Emergency Pauses'] 
    },
    { 
      icon: Zap, 
      name: 'Advanced Features', 
      items: ['Cross-Chain', 'Oracle Integration', 'Automated Execution', 'Governance'] 
    },
  ]

  return (
    <>
      <PageHeader
        title="Smart Contract Development"
        description="Secure and audited smart contracts for blockchain applications"
      />

      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Build Trust with Secure Smart Contracts
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our expert developers create secure, efficient, and audited smart contracts that power your 
                blockchain applications. From simple tokens to complex DeFi protocols, we deliver solutions 
                that are both innovative and reliable.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Security-first development approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Professional security auditing</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Gas-optimized for efficiency</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Smart Contract Development?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Expert Solidity developers with 5+ years experience</span>
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
                  <span className="text-gray-700">Ongoing maintenance and support</span>
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
              Smart Contract Types
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We develop various types of smart contracts to meet your blockchain needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contractTypes.map((type, index) => (
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
              A systematic approach ensuring security, quality, and successful deployment
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
              Everything you need for secure and efficient smart contracts
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      <CTA
        title="Ready to Deploy Your Smart Contracts?"
        subtitle="Let's discuss your blockchain project and create secure, efficient smart contracts for your application."
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



