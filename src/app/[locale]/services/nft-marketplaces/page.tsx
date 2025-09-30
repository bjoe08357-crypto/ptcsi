import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { StepList } from '@/components/StepList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Image, Users, Zap, Shield, DollarSign, Globe } from 'lucide-react'

export default function NFTMarketplacesPage() {
  const features = [
    {
      title: 'NFT Minting Platform',
      description: 'Create and deploy NFT collections with custom metadata and rarity systems.',
    },
    {
      title: 'Marketplace Development',
      description: 'Build secure NFT marketplaces with bidding, auctions, and instant sales.',
    },
    {
      title: 'Royalty Management',
      description: 'Implement automatic royalty distribution for creators and artists.',
    },
    {
      title: 'Cross-Chain Support',
      description: 'Enable NFT trading across multiple blockchain networks.',
    },
    {
      title: 'Metadata Management',
      description: 'Secure storage and management of NFT metadata and media files.',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics for sales, trends, and user behavior.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Platform Design',
      description: 'Designing the NFT marketplace architecture and user experience.',
    },
    {
      step: '02',
      title: 'Smart Contract Development',
      description: 'Building ERC-721/ERC-1155 contracts and marketplace logic.',
    },
    {
      step: '03',
      title: 'Frontend Development',
      description: 'Creating intuitive interfaces for minting, trading, and managing NFTs.',
    },
    {
      step: '04',
      title: 'Testing & Security',
      description: 'Comprehensive testing and security auditing of the platform.',
    },
    {
      step: '05',
      title: 'Launch & Marketing',
      description: 'Platform deployment and marketing strategy implementation.',
    },
  ]

  const nftTypes = [
    { 
      icon: Image, 
      name: 'Digital Art', 
      items: ['Art NFTs', 'Photography', 'Digital Collectibles', 'Generative Art'] 
    },
    { 
      icon: Users, 
      name: 'Gaming', 
      items: ['Game Assets', 'Characters', 'Weapons', 'Virtual Land'] 
    },
    { 
      icon: Globe, 
      name: 'Real Estate', 
      items: ['Virtual Properties', 'Land Parcels', 'Buildings', 'Metaverse Assets'] 
    },
    { 
      icon: DollarSign, 
      name: 'Utility', 
      items: ['Membership Tokens', 'Access Passes', 'Reward Points', 'Loyalty Programs'] 
    },
  ]

  return (
    <>
      <PageHeader
        title="NFT & Marketplaces"
        subtitle="NFT creation, marketplace development, and tokenization services"
      />

      <Section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Create, Trade, and Monetize NFTs
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Launch your NFT marketplace and tap into the growing digital asset economy. From art collections 
                to gaming assets, we build comprehensive NFT platforms that enable creators to monetize their 
                digital content and connect with collectors worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Custom NFT minting and metadata</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Automated royalty distribution</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Secure marketplace transactions</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our NFT Solutions?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Expert NFT developers with marketplace experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Support for multiple NFT standards and blockchains</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Scalable infrastructure for high-volume trading</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Ongoing platform maintenance and updates</span>
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
              NFT Categories We Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We develop NFT platforms for various industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nftTypes.map((type, index) => (
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
              A systematic approach ensuring quality, security, and successful marketplace launch
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
              Everything you need for a successful NFT marketplace
            </p>
          </div>
          <FeatureList features={features} />
        </Container>
      </Section>

      <CTA
        title="Ready to Launch Your NFT Marketplace?"
        subtitle="Let's discuss your NFT project and create a platform that connects creators with collectors worldwide."
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



