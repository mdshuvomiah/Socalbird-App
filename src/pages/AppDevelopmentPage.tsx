import { Smartphone, CheckCircle2, ArrowRight, Bell, CreditCard, Lock, Cloud, Zap, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

interface AppDevelopmentPageProps {
  onNavigate: (page: string) => void;
}

export function AppDevelopmentPage({ onNavigate }: AppDevelopmentPageProps) {
  const features = [
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'User login, registration, social auth, biometric authentication, and password recovery.',
      color: 'text-blue-400',
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Stripe, PayPal, and local payment gateways with secure checkout flows.',
      color: 'text-green-400',
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Engage users with timely notifications for updates, promotions, and alerts.',
      color: 'text-orange-400',
    },
    {
      icon: Cloud,
      title: 'API Integrations',
      description: 'Connect with third-party services, CRMs, analytics, and custom APIs.',
      color: 'text-purple-400',
    },
    {
      icon: Zap,
      title: 'Real-time Features',
      description: 'Live chat, real-time updates, websockets, and instant synchronization.',
      color: 'text-yellow-400',
    },
    {
      icon: Users,
      title: 'Admin Panel',
      description: 'Comprehensive dashboard to manage users, content, analytics, and settings.',
      color: 'text-cyan-400',
    },
  ];

  const developmentPhases = [
    {
      phase: 'Discovery & Planning',
      duration: '1-2 weeks',
      activities: ['Requirement gathering', 'User research', 'Wireframes & prototypes', 'Technical architecture'],
    },
    {
      phase: 'UI/UX Design',
      duration: '2-3 weeks',
      activities: ['Design system creation', 'Screen designs', 'Interactive prototypes', 'Design feedback & iteration'],
    },
    {
      phase: 'Development',
      duration: '8-12 weeks',
      activities: ['iOS development', 'Android development', 'Backend API', 'Database implementation'],
    },
    {
      phase: 'Testing & QA',
      duration: '2 weeks',
      activities: ['Functionality testing', 'Device testing', 'Performance testing', 'Security audit'],
    },
    {
      phase: 'Launch & Support',
      duration: 'Ongoing',
      activities: ['App store submission', 'Launch support', 'Bug fixes', 'Feature updates'],
    },
  ];

  return (
    <div className="dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-transparent to-teal-500/20 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm mb-4">
              📱 Native Mobile Apps
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Build Apps Users <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">Love</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Native iOS and Android apps with beautiful UX, secure authentication, payments, and powerful features. From concept to App Store.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={() => onNavigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white text-lg px-8 py-6"
              >
                Start Your App
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => onNavigate('/portfolio')}
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-400 hover:bg-green-600/10 text-lg px-8 py-6"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-900 to-[#111827] border-gray-800 p-12 text-center hover:border-green-500/50 transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                <Smartphone className="text-white" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">iOS Development</h3>
              <p className="text-gray-400 mb-6">
                Native Swift apps for iPhone and iPad with seamless integration into the Apple ecosystem.
              </p>
              <ul className="space-y-3 text-left">
                {[
                  'Swift & SwiftUI',
                  'iOS 14+ support',
                  'App Store optimization',
                  'iCloud integration',
                  'Apple Pay support',
                  'TestFlight beta testing',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-[#111827] border-gray-800 p-12 text-center hover:border-green-500/50 transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-teal-500 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                <Smartphone className="text-white" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Android Development</h3>
              <p className="text-gray-400 mb-6">
                Native Kotlin apps for Android phones and tablets with Material Design principles.
              </p>
              <ul className="space-y-3 text-left">
                {[
                  'Kotlin & Jetpack Compose',
                  'Android 8+ support',
                  'Google Play optimization',
                  'Firebase integration',
                  'Google Pay support',
                  'Beta testing programs',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111827]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to build a world-class mobile app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-[#111827] border-gray-800 p-8 hover:border-green-500/50 transition-all">
                  <Icon className={`${feature.color} mb-4`} size={40} />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* UX-First Approach */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                UX-First Approach
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We prioritize user experience in every decision. Beautiful interfaces that users love to interact with.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: 'User Research',
                    description: 'Understanding your target audience and their needs',
                  },
                  {
                    title: 'Intuitive Design',
                    description: 'Clean, simple interfaces that feel natural',
                  },
                  {
                    title: 'Performance Optimization',
                    description: 'Fast loading times and smooth animations',
                  },
                  {
                    title: 'Accessibility',
                    description: 'Apps that everyone can use comfortably',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-teal-500/20 rounded-3xl p-12 flex items-center justify-center min-h-[400px]">
              <Smartphone className="text-green-400" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111827]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Development Timeline
            </h2>
            <p className="text-xl text-gray-400">
              Typical timeline for mobile app development
            </p>
          </div>

          <div className="space-y-6">
            {developmentPhases.map((phase, index) => (
              <Card key={index} className="bg-[#111827] border-gray-800 p-6 hover:border-green-500/50 transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                      <span className="text-green-400 font-semibold">{phase.duration}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.activities.map((activity, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              Timeline varies based on app complexity and feature set. Contact us for a detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance & Updates */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Maintenance & Updates
            </h2>
            <p className="text-xl text-gray-400">
              Keep your app running smoothly with ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#111827] border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Included (3 months)</h3>
              <ul className="space-y-3">
                {[
                  'Bug fixes',
                  'Performance monitoring',
                  'Crash reporting',
                  'Basic updates',
                  'Technical support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-[#111827] border-green-500 p-8 scale-105 ring-2 ring-green-500">
              <div className="bg-gradient-to-r from-green-600 to-teal-500 text-white text-center py-2 text-sm font-semibold rounded -mt-8 mb-4">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ongoing Support</h3>
              <div className="text-3xl font-bold text-green-400 mb-6">$499<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="space-y-3">
                {[
                  'Everything included',
                  'Feature updates',
                  'OS version updates',
                  'Priority support',
                  'Analytics monitoring',
                  'Monthly reports',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-[#111827] border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Pay As You Go</h3>
              <div className="text-3xl font-bold text-green-400 mb-6">$75<span className="text-lg text-gray-400">/hr</span></div>
              <ul className="space-y-3">
                {[
                  'Hourly rate for updates',
                  'No monthly commitment',
                  'Feature additions',
                  'Design changes',
                  'Custom work',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111827]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              App Development FAQ
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-green-400">
                Do I need separate apps for iOS and Android?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We build native apps for both platforms to ensure the best performance and user experience. While this requires separate development, it results in apps that feel natural to each platform's users and take full advantage of platform-specific features.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-green-400">
                How long does app development take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                A typical mobile app takes 10-16 weeks from start to launch. Simple apps may be faster (8-10 weeks), while complex apps with many features can take 16-24 weeks. We provide a detailed timeline after the discovery phase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-green-400">
                Will you help with App Store submission?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes! We handle the entire App Store and Google Play submission process, including app listing optimization, screenshots, descriptions, and compliance with all guidelines. We stay with you through the review process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-green-400">
                Can you integrate payment processing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Absolutely! We integrate payment gateways like Stripe, PayPal, Apple Pay, and Google Pay, along with subscription management. All payment processing is secure and PCI-compliant.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-green-400">
                What happens after the app launches?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We provide 3 months of free support after launch, including bug fixes and minor adjustments. After that, you can choose our ongoing support plan or pay-as-you-go for updates and new features.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-green-400">
                Do you provide the source code?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes, you own all the source code and assets we create for your app. We provide full documentation and can transfer everything to your development team if needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-teal-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your App
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Turn your app idea into reality. Schedule a free consultation today.
          </p>
          <Button
            onClick={() => onNavigate('/contact')}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
