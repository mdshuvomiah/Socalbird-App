import { ArrowRight, Check, Star, MessageSquare, Code, Smartphone, TrendingUp, Shield, Zap, Users, Award, Clock, ChevronRight, CheckCircle, Facebook, Instagram, Globe, MessageCircle, X, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeTab, setActiveTab] = useState('messenger');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#0A0E27] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-300">Premium Development Agency</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Build, Automate & Scale
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block">
                    Your Business with AI
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                  Expert <span className="text-cyan-400 font-semibold">Web Development</span>, {' '}
                  <span className="text-cyan-400 font-semibold">Mobile Apps</span> & {' '}
                  <span className="text-cyan-400 font-semibold">AI Chatbot Automation</span> with Monthly Subscription Packages for Businesses That Want to Grow Fast
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                
                <Button
                  onClick={() => onNavigate('/ai-chatbot-solutions')}
                  size="lg"
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  View Our Packages
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '100+', label: 'Projects Completed', icon: Award },
                  { number: '50+', label: 'Happy Clients', icon: Users },
                  { number: '4.9★', label: 'Client Rating', icon: Star },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <stat.icon className="mx-auto mb-2 text-cyan-400" size={24} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { icon: Check, text: '100% Money-Back Guarantee' },
                  { icon: Clock, text: '7-14 Days Delivery' },
                  { icon: Shield, text: 'Lifetime Support' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <item.icon size={12} className="text-cyan-400" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Tech Stack Showcase */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Complete Tech Stack</h3>
                    <p className="text-sm text-gray-400">Modern technologies for scalable solutions</p>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">
                      Technologies We Use
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['WordPress', 'Laravel', 'Next.js', 'React', 'Node.js', 'MongoDB'].map((tech, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-sm font-medium text-cyan-300"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Delivery', value: '7-14 Days' },
                        { label: 'Support', value: 'Lifetime' },
                        { label: 'Warranty', value: '90 Days' },
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-base font-bold text-cyan-400">{stat.value}</div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-24 px-4 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 229, 255, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <Star className="text-cyan-400" size={16} />
              <span className="text-sm font-medium text-gray-300">Solutions That Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              3 Biggest Challenges
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                We Solve for Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Real problems. Proven solutions. Measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Missing Customer Messages',
                icon: MessageSquare,
                stat: '67%',
                statLabel: 'of messages go unanswered',
                solution: 'AI Chatbot Automation',
                description: '24/7 automated responses on Facebook, WhatsApp, Instagram - never miss a lead again',
                features: ['Instant replies', 'Lead capture', 'Order tracking', 'Multi-platform'],
                gradient: 'from-cyan-500 to-blue-500',
                result: '300% more leads captured',
              },
              {
                problem: 'Slow, Outdated Website',
                icon: Code,
                stat: '53%',
                statLabel: 'leave if load time > 3s',
                solution: 'Modern Web Development',
                description: 'Lightning-fast, SEO-optimized websites that rank on Google and convert visitors',
                features: ['<100ms load', 'Mobile-first', 'SEO optimized', 'CMS control'],
                gradient: 'from-purple-500 to-pink-500',
                result: '2X better Google ranking',
              },
              {
                problem: 'No Mobile Presence',
                icon: Smartphone,
                stat: '85%',
                statLabel: 'prefer mobile apps',
                solution: 'Native Mobile Apps',
                description: 'Professional iOS & Android apps with seamless UX that customers love',
                features: ['iOS + Android', 'Push notifications', 'Offline mode', 'Payment ready'],
                gradient: 'from-orange-500 to-red-500',
                result: '4.9★ average rating',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-2xl overflow-hidden transition-all hover:scale-[1.02]"
              >
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-semibold text-red-400">Common Problem</span>
                  </div>

                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon size={32} className="text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">{item.problem}</h3>
                  
                  <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-1`}>
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-500">{item.statLabel}</div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="text-emerald-400" size={20} />
                      <span className="text-lg font-bold text-emerald-400">Our Solution</span>
                    </div>
                    <div className="text-xl font-bold text-white mb-2">{item.solution}</div>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`p-4 bg-gradient-to-r ${item.gradient} bg-opacity-10 rounded-xl border border-cyan-500/30`}>
                    <div className="text-sm text-gray-400 mb-1">Typical Result:</div>
                    <div className="font-bold text-white">{item.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbot Packages Preview */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <MessageSquare className="text-cyan-400" size={16} />
              <span className="text-sm font-medium text-gray-300">Most Popular Service</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Chatbot Solutions
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                Choose Your Platform
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Never miss a customer message. Automate support on the platform your customers use most.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'messenger', icon: Facebook, label: 'Messenger' },
              { id: 'whatsapp', icon: MessageCircle, label: 'WhatsApp' },
              { id: 'instagram', icon: Instagram, label: 'Instagram' },
              { id: 'comment', icon: MessageSquare, label: 'Comment Auto' },
              { id: 'website', icon: Globe, label: 'Website Chat' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
            {activeTab === 'messenger' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                    <span className="text-xs font-bold text-cyan-400">🔥 MOST POPULAR</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Facebook Messenger Chatbot</h3>
                  <p className="text-lg text-gray-400 mb-6">
                    Automate customer support and lead capture on the world's #1 messaging platform
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {[
                      'Automated greetings & FAQ responses',
                      'Lead capture & qualification',
                      'Product/Service catalog integration',
                      'Appointment booking system',
                      'Order status updates',
                      'Human handoff when needed',
                      'Bangla + English support',
                      'Analytics dashboard',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => onNavigate('/ai-chatbot-solutions')}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    >
                      View Details & Pricing
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                    <Button
                      onClick={() => onNavigate('/contact')}
                      className="bg-white/5 hover:bg-white/10 border border-white/20"
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-cyan-400 mb-2">৳5,000</div>
                      <div className="text-gray-400">per month</div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Setup Time:</span>
                        <span className="font-semibold text-white">5-7 days</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Messages/month:</span>
                        <span className="font-semibold text-white">Unlimited</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Integrations:</span>
                        <span className="font-semibold text-white">CRM, Sheets</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Support:</span>
                        <span className="font-semibold text-white">24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'whatsapp' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
                    <span className="text-xs font-bold text-emerald-400">FOR RESTAURANTS & SERVICES</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">WhatsApp Business Chatbot</h3>
                  <p className="text-lg text-gray-400 mb-6">
                    Automate orders, bookings, and customer support on WhatsApp Business API
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {[
                      'WhatsApp Business API integration',
                      'Catalog sharing & menu display',
                      'Automated ordering system',
                      'Appointment booking & reminders',
                      'Order confirmations & tracking',
                      'Broadcast messages (promotional)',
                      'Multi-agent support',
                      'Rich media (images, PDFs)',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => onNavigate('/ai-chatbot-solutions')}
                      className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                    >
                      View Details & Pricing
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                    <Button
                      onClick={() => onNavigate('/contact')}
                      className="bg-white/5 hover:bg-white/10 border border-white/20"
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl p-8 border border-emerald-500/30">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-emerald-400 mb-2">Custom</div>
                      <div className="text-gray-400">Contact for pricing</div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Setup Time:</span>
                        <span className="font-semibold text-white">7-10 days</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Messages/month:</span>
                        <span className="font-semibold text-white">Based on plan</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>API:</span>
                        <span className="font-semibold text-white">WhatsApp Business</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Broadcasts:</span>
                        <span className="font-semibold text-white">Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'instagram' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6">
                    <span className="text-xs font-bold text-pink-400">FOR FASHION & LIFESTYLE</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Instagram DM Automation</h3>
                  <p className="text-lg text-gray-400 mb-6">
                    Auto-respond to story mentions, DMs, and product inquiries on Instagram
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {[
                      'Auto-respond to story mentions & DMs',
                      'Product inquiry handling',
                      'Link & catalog sharing',
                      'Lead capture forms',
                      'Comment keyword triggers',
                      'Multiple response flows',
                      'Analytics & insights',
                      'Human handoff option',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-pink-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => onNavigate('/ai-chatbot-solutions')}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                    >
                      View Details & Pricing
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                    <Button
                      onClick={() => onNavigate('/contact')}
                      className="bg-white/5 hover:bg-white/10 border border-white/20"
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-8 border border-pink-500/30">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-pink-400 mb-2">৳6,000</div>
                      <div className="text-gray-400">per month</div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Setup Time:</span>
                        <span className="font-semibold text-white">5-7 days</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Auto-replies:</span>
                        <span className="font-semibold text-white">Unlimited</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Story mentions:</span>
                        <span className="font-semibold text-white">Included</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Support:</span>
                        <span className="font-semibold text-white">Priority</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'comment' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                    <span className="text-xs font-bold text-blue-400">HIGH ENGAGEMENT PAGES</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Facebook Comment Automation</h3>
                  <p className="text-lg text-gray-400 mb-6">
                    Auto-reply to post comments and convert engagement into leads
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {[
                      'Auto-reply to post comments',
                      'Keyword-based smart responses',
                      'Send to Messenger for details',
                      'Lead capture from comments',
                      'Comment moderation & filtering',
                      'Track comment performance',
                      'Multiple page support',
                      'Custom response templates',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => onNavigate('/ai-chatbot-solutions')}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    >
                      View Details & Pricing
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                    <Button
                      onClick={() => onNavigate('/contact')}
                      className="bg-white/5 hover:bg-white/10 border border-white/20"
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-500/30">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-blue-400 mb-2">৳4,500</div>
                      <div className="text-gray-400">per month</div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Setup Time:</span>
                        <span className="font-semibold text-white">3-5 days</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Comments:</span>
                        <span className="font-semibold text-white">Unlimited</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Pages:</span>
                        <span className="font-semibold text-white">Up to 3</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Keywords:</span>
                        <span className="font-semibold text-white">Custom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'website' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
                    <span className="text-xs font-bold text-purple-400">CORPORATE & SAAS</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Website Chatbot Plugin</h3>
                  <p className="text-lg text-gray-400 mb-6">
                    Embed smart chatbot on any website with custom branding
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {[
                      'Embed on any website',
                      'Smart FAQ engine',
                      'Lead forms & contact routing',
                      'Live chat escalation',
                      'Custom branding & colors',
                      'Multi-language support',
                      'Analytics dashboard',
                      'Mobile responsive',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => onNavigate('/ai-chatbot-solutions')}
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                    >
                      View Details & Pricing
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                    <Button
                      onClick={() => onNavigate('/contact')}
                      className="bg-white/5 hover:bg-white/10 border border-white/20"
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-purple-400 mb-2">৳7,000</div>
                      <div className="text-gray-400">per month</div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Setup Time:</span>
                        <span className="font-semibold text-white">5-7 days</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Conversations:</span>
                        <span className="font-semibold text-white">Unlimited</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span>Websites:</span>
                        <span className="font-semibold text-white">1 domain</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Customization:</span>
                        <span className="font-semibold text-white">Full branding</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('/ai-chatbot-solutions')}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-12 py-6 text-lg"
            >
              View All Packages & Pricing
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-300">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Digital Solutions
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                for Every Business Need
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'AI Chatbot Solutions',
                subtitle: 'Monthly Subscription Packages',
                description: '24/7 automated customer support and engagement across all major platforms',
                features: [
                  'Facebook Messenger Automation',
                  'WhatsApp Business Integration',
                  'Instagram DM Automation',
                  'Facebook Comment Auto-Reply',
                  'Website Chatbot Plugin',
                  'Lead Capture & CRM Integration',
                ],
                link: '/ai-chatbot-solutions',
                badge: 'Most Popular',
              },
              {
                icon: Code,
                title: 'Web Development',
                subtitle: 'Custom & CMS Solutions',
                description: 'Professional websites that drive conversions and rank on Google',
                features: [
                  'WordPress Development',
                  'Laravel Applications',
                  'Next.js / React Apps',
                  'MERN Stack Development',
                  'SEO Optimization',
                  'Responsive Design',
                ],
                link: '/web-development',
              },
              {
                icon: Smartphone,
                title: 'Mobile App Development',
                subtitle: 'iOS & Android',
                description: 'Native and cross-platform mobile applications for your business',
                features: [
                  'Native iOS Development',
                  'Native Android Development',
                  'Cross-Platform (React Native)',
                  'UI/UX Design',
                  'App Store Optimization',
                  'Maintenance & Support',
                ],
                link: '/app-development',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-2xl p-8 cursor-pointer transition-all hover:scale-[1.02]"
                onClick={() => onNavigate(service.link)}
              >
                {service.badge && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-4 text-xs font-semibold text-cyan-400">
                    🔥 {service.badge}
                  </div>
                )}

                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} className="text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-cyan-400 font-semibold mb-3">{service.subtitle}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Process Timeline */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-300">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven 4-step process that ensures your project's success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                desc: 'We analyze your business goals, target audience, and competition to create a tailored strategy',
                icon: Users,
              },
              {
                step: '02',
                title: 'Design & Development',
                desc: 'Our expert team builds your solution using the latest technologies and best practices',
                icon: Code,
              },
              {
                step: '03',
                title: 'Testing & Launch',
                desc: 'Rigorous testing ensures everything works perfectly before going live',
                icon: Shield,
              },
              {
                step: '04',
                title: 'Support & Growth',
                desc: 'Ongoing maintenance, updates, and optimization to ensure continued success',
                icon: TrendingUp,
              },
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all h-full">
                  <div className="text-6xl font-bold text-cyan-500/20 mb-4">{phase.step}</div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <phase.icon size={24} className="text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{phase.desc}</p>
                </div>

                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-cyan-400">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <Star className="text-cyan-400" size={16} />
              <span className="text-sm font-medium text-gray-300">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results from
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                Real Businesses
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                company: 'StyleHub',
                industry: 'E-commerce Fashion',
                logo: 'SH',
                gradient: 'from-cyan-500 to-blue-500',
                metric: '+385%',
                metricLabel: 'Revenue Growth',
                period: '6 months',
                solution: 'AI Chatbot + Web Platform',
                testimonial: 'Customer engagement increased dramatically',
              },
              {
                company: 'TechConsult',
                industry: 'SaaS Platform',
                logo: 'TC',
                gradient: 'from-purple-500 to-pink-500',
                metric: '12K+',
                metricLabel: 'Active Users',
                period: '3 months',
                solution: 'Web App + Mobile App',
                testimonial: 'Seamless user experience on all platforms',
              },
              {
                company: 'FreshBites',
                industry: 'Food Delivery',
                logo: 'FB',
                gradient: 'from-orange-500 to-red-500',
                metric: '24/7',
                metricLabel: 'AI Automation',
                period: 'Ongoing',
                solution: 'WhatsApp Bot + Website',
                testimonial: 'Never miss an order, even at 3 AM',
              },
            ].map((client, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                onClick={() => onNavigate('/portfolio')}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${client.gradient}`} />

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${client.gradient} p-[2px] group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-[#0A0E27] rounded-[10px] flex items-center justify-center">
                        <span className="text-lg font-bold text-white">{client.logo}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {client.company}
                      </h3>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {client.industry}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-end gap-3 mb-2">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${client.gradient} bg-clip-text text-transparent`}>
                        {client.metric}
                      </div>
                      <div className="text-sm text-gray-400 mb-1">{client.metricLabel}</div>
                    </div>
                    <div className="text-xs text-gray-500">in {client.period}</div>
                  </div>

                  <div className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10 inline-block mb-4">
                    {client.solution}
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="text-sm text-gray-400 italic">"{client.testimonial}"</p>
                  </div>

                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <ChevronRight className="text-cyan-400" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => onNavigate('/portfolio')}
              size="lg"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-6"
            >
              View Full Portfolio
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-300">Client Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'The AI chatbot increased our response rate by 300% and we\'re capturing 3X more leads. Best investment we\'ve made!',
                author: 'Sarah Mitchell',
                role: 'CEO, StyleHub',
                industry: 'E-commerce',
                rating: 5,
                result: '+300% Response Rate',
              },
              {
                quote: 'Our website now handles 10K+ concurrent users with zero downtime. The performance improvement is phenomenal.',
                author: 'James Parker',
                role: 'Founder, TechConsult',
                industry: 'SaaS Startup',
                rating: 5,
                result: '10K+ Users',
              },
              {
                quote: 'The mobile app has a 4.9★ rating on both stores. The user experience and code quality are outstanding.',
                author: 'Lisa Rodriguez',
                role: 'CTO, HealthConnect',
                industry: 'Healthcare',
                rating: 5,
                result: '4.9★ Rating',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-cyan-400 mt-1">{testimonial.industry}</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect Solutions for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Your Industry</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Small Businesses', icon: '🏪' },
              { name: 'E-commerce', icon: '🛒' },
              { name: 'Restaurants', icon: '🍽️' },
              { name: 'Service Businesses', icon: '⚙️' },
              { name: 'Agencies', icon: '🎯' },
              { name: 'Startups', icon: '🚀' },
            ].map((audience, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 p-6 rounded-2xl text-center transition-all cursor-pointer hover:scale-105"
              >
                <div className="text-4xl mb-3">{audience.icon}</div>
                <div className="text-sm font-semibold">{audience.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-300">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Most AI chatbot setups are completed within 5-7 days. Web development projects take 4-8 weeks depending on complexity. Mobile apps typically require 8-12 weeks from design to app store launch.',
              },
              {
                q: 'Do you offer monthly payment plans?',
                a: 'Yes! Our AI Chatbot solutions come with flexible monthly subscription packages starting at ৳5,000/month. For web and app development, we offer milestone-based payments with 30% upfront, 40% mid-project, and 30% upon completion.',
              },
              {
                q: 'What platforms do your chatbots support?',
                a: 'We provide chatbot automation for Facebook Messenger, WhatsApp Business, Instagram DM, Facebook Comments, and website chat plugins. Each platform is available as a separate package or combined.',
              },
              {
                q: 'Do you provide ongoing support after launch?',
                a: 'Absolutely! All projects include a 90-day warranty period. We also offer ongoing maintenance packages (Basic/Standard/Premium) that include monthly updates, security monitoring, backups, and priority support.',
              },
              {
                q: 'Can the chatbot handle both Bangla and English?',
                a: 'Yes! Our chatbots are fully bilingual and can respond in both Bangla and English based on customer preference or automatic language detection.',
              },
              {
                q: 'What if the chatbot can\'t answer a question?',
                a: 'Our chatbots include intelligent human handoff. If the bot doesn\'t know the answer or detects a complex query, it automatically escalates to your team via notification or live chat.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-2xl transition-all overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <h3 className="text-xl font-bold text-cyan-400 pr-4">{faq.q}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-cyan-400 flex-shrink-0 transition-transform ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 opacity-20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-8">
            <span className="text-sm font-semibold text-cyan-400">🎉 Limited Slots Available This Month</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Ready to Transform
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
              Your Business?
            </span>
          </h2>

          <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 100+ successful businesses. Free consultation • Expert guidance • Money-back guarantee
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              onClick={() => onNavigate('/contact')}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-xl px-12 py-8 shadow-lg shadow-cyan-500/25"
            >
              Start Your Project Now
              <ArrowRight className="ml-3" size={24} />
            </Button>

            <Button
              onClick={() => onNavigate('/ai-chatbot-solutions')}
              size="lg"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xl px-12 py-8"
            >
              View Pricing Packages
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            {[
              '✓ No Long-term Contracts',
              '✓ 100% Satisfaction Guaranteed',
              '✓ Fast Turnaround Time',
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
