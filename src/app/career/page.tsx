import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { PageHeader } from '@/components/PageHeader'
import { FeatureList } from '@/components/FeatureList'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Globe,
  Heart,
  Briefcase,
  MapPin,
  Calendar
} from 'lucide-react'

export default function CareerPage() {
  const benefits = [
    {
      icon: Target,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and professional development programs.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Work with cutting-edge technologies and innovative projects.',
    },
    {
      icon: Users,
      title: 'Team Spirit',
      description: 'Collaborative environment with supportive team members.',
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible remote work options and work-life balance.',
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based rewards and career advancement opportunities.',
    },
    {
      icon: Heart,
      title: 'Wellness',
      description: 'Health and wellness programs for all team members.',
    },
  ]

  const openPositions = [
    {
      title: 'Project Manager',
      department: 'Project Management',
      location: 'Remote',
      type: 'Full Time',
      description: 'Lead and manage software development projects from conception to delivery.',
      requirements: [
        '3+ years of project management experience',
        'Experience with agile methodologies',
        'Strong communication and leadership skills',
        'Technical background preferred',
      ],
    },
    {
      title: 'Web Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full Time',
      description: 'Create beautiful and functional user interfaces for web and mobile applications.',
      requirements: [
        '2+ years of web design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Understanding of UX/UI principles',
        'Portfolio of previous work',
      ],
    },
    {
      title: 'HR Coordinator',
      department: 'Human Resources',
      location: 'Remote',
      type: 'Full Time',
      description: 'Support HR operations and help build a positive company culture.',
      requirements: [
        '1+ years of HR experience',
        'Knowledge of HR best practices',
        'Excellent organizational skills',
        'Bachelor&apos;s degree in HR or related field',
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Careers"
        subtitle="Join our team and help us build innovative digital solutions. We're looking for talented individuals who share our passion for technology and excellence."
      >
        <div className="flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="#positions">
              Open Roles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
            <Link href="#benefits">
              Benefits
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* Benefits Section */}
      <Section id="benefits" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive work environment
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Positions Section */}
      <Section id="positions" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Roles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find your next opportunity
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-2xl">{position.title}</CardTitle>
                      <p className="text-gray-600 mt-1">{position.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                      <Badge variant="secondary" className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {position.location}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {position.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild>
                    <Link href="/en/contact">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Culture Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating a positive and inclusive work environment
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative</h3>
              <p className="text-gray-600 text-sm">We work together to achieve common goals</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovative</h3>
              <p className="text-gray-600 text-sm">We embrace new technologies and ideas</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable</h3>
              <p className="text-gray-600 text-sm">We deliver on our promises and commitments</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Caring</h3>
              <p className="text-gray-600 text-sm">We care about our team members and clients</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to join our team?"
        subtitle="We're always looking for talented individuals to join our growing team."
        primaryAction={{
          label: 'Apply Now',
          href: '/en/contact',
        }}
        secondaryAction={{
          label: 'Learn More About Us',
          href: '/en/about-us',
        }}
      />
    </>
  )
}
