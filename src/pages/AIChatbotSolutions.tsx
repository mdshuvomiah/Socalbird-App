import { ArrowRight, Check, CheckCircle, MessageSquare, Facebook, MessageCircle, Instagram, Globe, Star, Zap, Clock, Shield, BarChart3, Users, Settings, ChevronDown, TrendingUp, Bell, Database, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';

interface AIChatbotSolutionsProps {
  onNavigate: (page: string) => void;
}

export function AIChatbotSolutions({ onNavigate }: AIChatbotSolutionsProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#0A0E27] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
              <MessageSquare className="text-cyan-400" size={16} />
              <span className="text-sm font-medium text-gray-300">24/7 Customer Support Automation</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              AI Chatbot Solutions
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block">
                Never Miss a Message Again
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Choose Your Platform, We Handle Everything Else. Monthly subscription packages with no long-term contracts.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button
                onClick={() => onNavigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-7 text-lg"
              >
                Get Free Demo
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-7 text-lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Pricing
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: MessageSquare, value: '24/7', label: 'Availability' },
                { icon: Zap, value: '<2s', label: 'Response Time' },
                { icon: TrendingUp, value: '300%', label: 'More Leads' },
                { icon: Users, value: '50+', label: 'Happy Clients' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-cyan-400" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Chatbots Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Chatbots?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The cost of missing customer messages is higher than you think
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: '67%',
                statLabel: 'of customer messages go unanswered after business hours',
                icon: MessageSquare,
                problem: 'Missing Messages = Lost Revenue',
                solution: '24/7 automated responses capture every lead',
                gradient: 'from-red-500 to-orange-500',
              },
              {
                stat: '90%',
                statLabel: 'of customers expect immediate responses',
                icon: Clock,
                problem: 'Slow Response = Customer Leaves',
                solution: 'Instant replies keep customers engaged',
                gradient: 'from-cyan-500 to-blue-500',
              },
              {
                stat: '3-5X',
                statLabel: 'more leads captured with automation',
                icon: TrendingUp,
                problem: 'Manual Support = Limited Scale',
                solution: 'Handle unlimited conversations simultaneously',
                gradient: 'from-emerald-500 to-green-500',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon size={32} className="text-cyan-400" />
                </div>

                <div className={`text-5xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                  {item.stat}
                </div>
                <p className="text-sm text-gray-500 mb-6">{item.statLabel}</p>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-red-400 mb-2">❌ Problem:</div>
                  <p className="text-gray-300">{item.problem}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-emerald-400 mb-2">✅ Solution:</div>
                  <p className="text-gray-300">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package 1: Facebook Messenger */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-white/10 p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Facebook size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full mb-2">
                      <span className="text-xs font-bold text-cyan-300">🔥 MOST POPULAR</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Facebook Messenger Chatbot</h2>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Starting at</div>
                  <div className="text-4xl font-bold text-cyan-400">৳5,000</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="text-cyan-400" size={24} />
                    Who It's For
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['E-commerce Stores', 'Service Businesses', 'Agencies', 'Restaurants', 'Healthcare'].map((tag, i) => (
                      <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="text-cyan-400" size={24} />
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Automated greetings & welcome messages',
                      'FAQ automation (unlimited questions)',
                      'Lead capture & qualification forms',
                      'Product/Service catalog integration',
                      'Appointment booking system',
                      'Order status updates & tracking',
                      'Human handoff when needed',
                      'Bangla + English language support',
                      'Analytics dashboard & reports',
                      'Persistent menu navigation',
                      'Quick reply buttons',
                      'Broadcast messages (promotional)',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-white/5 to-cyan-500/5 border border-white/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold mb-6">Onboarding Process</h3>
                    <div className="space-y-4">
                      {[
                        { step: '1', title: 'Consultation Call', time: 'Day 1', desc: 'Discuss your needs, goals, and bot flow' },
                        { step: '2', title: 'Bot Design & Setup', time: 'Days 2-4', desc: 'Create conversation flows and responses' },
                        { step: '3', title: 'Integration & Testing', time: 'Day 5', desc: 'Connect to your page and test everything' },
                        { step: '4', title: 'Launch & Training', time: 'Day 6-7', desc: 'Go live + team training session' },
                      ].map((phase, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                            {phase.step}
                          </div>
                          <div>
                            <div className="font-semibold text-white mb-1">{phase.title}</div>
                            <div className="text-xs text-cyan-400 mb-1">{phase.time}</div>
                            <div className="text-sm text-gray-400">{phase.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white/5 to-blue-500/5 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-6">Integrations Available</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Database, name: 'Google Sheets' },
                        { icon: Settings, name: 'CRM Systems' },
                        { icon: Globe, name: 'Webhook/API' },
                        { icon: BarChart3, name: 'Analytics' },
                      ].map((integration, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <integration.icon className="text-cyan-400" size={20} />
                          <span className="text-sm">{integration.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Lock className="text-emerald-400" size={16} />
                        <span className="font-semibold text-emerald-400">Privacy & Compliance</span>
                      </div>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Opt-in required (GDPR compliant)</li>
                        <li>• Encrypted data storage</li>
                        <li>• Facebook policy compliant</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-6"
                >
                  Request Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  className="bg-white/5 hover:bg-white/10 border border-white/20 px-10 py-6"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Pricing Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package 2: Facebook Comment Automation */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-b border-white/10 p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <MessageSquare size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full mb-2">
                      <span className="text-xs font-bold text-blue-300">HIGH ENGAGEMENT</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Facebook Comment Automation</h2>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Starting at</div>
                  <div className="text-4xl font-bold text-blue-400">৳4,500</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="text-blue-400" size={24} />
                    Who It's For
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Pages with High Engagement', 'E-commerce', 'Contests & Giveaways', 'Product Launches'].map((tag, i) => (
                      <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="text-blue-400" size={24} />
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Auto-reply to post comments instantly',
                      'Keyword-based smart responses',
                      'Send to Messenger for more details',
                      'Lead capture directly from comments',
                      'Comment moderation & filtering',
                      'Track comment performance & metrics',
                      'Multiple Facebook page support',
                      'Custom response templates',
                      'Emoji & GIF responses',
                      'Time-based auto-replies',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-white/5 to-blue-500/5 border border-white/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold mb-6">Setup Timeline</h3>
                    <div className="space-y-4">
                      {[
                        { step: '1', title: 'Keyword Planning', time: 'Day 1', desc: 'Define trigger keywords and responses' },
                        { step: '2', title: 'Bot Configuration', time: 'Days 2-3', desc: 'Set up automation rules and flows' },
                        { step: '3', title: 'Testing', time: 'Day 4', desc: 'Test on sample posts' },
                        { step: '4', title: 'Go Live', time: 'Day 5', desc: 'Activate on your pages' },
                      ].map((phase, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-blue-400">
                            {phase.step}
                          </div>
                          <div>
                            <div className="font-semibold text-white mb-1">{phase.title}</div>
                            <div className="text-xs text-blue-400 mb-1">{phase.time}</div>
                            <div className="text-sm text-gray-400">{phase.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white/5 to-indigo-500/5 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-4">Use Cases</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">💬 Product Inquiries</div>
                        <p className="text-sm text-gray-400">Auto-respond with product details and send full catalog via Messenger</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">🎉 Contest Entries</div>
                        <p className="text-sm text-gray-400">Capture entries, confirm participation, send rules automatically</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">📦 Order Status</div>
                        <p className="text-sm text-gray-400">Reply with order tracking link when customers ask</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-10 py-6"
                >
                  Request Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package 3: WhatsApp Chatbot */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-b border-white/10 p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <MessageCircle size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full mb-2">
                      <span className="text-xs font-bold text-emerald-300">RESTAURANTS & SERVICES</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">WhatsApp Business Chatbot</h2>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Custom Pricing</div>
                  <div className="text-4xl font-bold text-emerald-400">Contact Us</div>
                  <div className="text-sm text-gray-500">Based on usage</div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="text-emerald-400" size={24} />
                    Who It's For
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Restaurants', 'Booking Services', 'Healthcare', 'Delivery Services', 'Customer Support'].map((tag, i) => (
                      <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="text-emerald-400" size={24} />
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {[
                      'WhatsApp Business API integration',
                      'Product catalog sharing & display',
                      'Automated ordering system',
                      'Menu display with images & prices',
                      'Appointment booking & reminders',
                      'Order confirmations & tracking',
                      'Broadcast messages (promotional)',
                      'Multi-agent support (team inbox)',
                      'Rich media support (images, PDFs, videos)',
                      'Payment link sharing',
                      'Location sharing',
                      'Quick reply templates',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-white/5 to-emerald-500/5 border border-white/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold mb-6">Setup Process</h3>
                    <div className="space-y-4">
                      {[
                        { step: '1', title: 'WhatsApp Business API', time: 'Days 1-3', desc: 'Setup Business API account & verification' },
                        { step: '2', title: 'Bot Design', time: 'Days 4-6', desc: 'Create ordering/booking flow' },
                        { step: '3', title: 'Integration & Testing', time: 'Days 7-9', desc: 'Connect systems and test' },
                        { step: '4', title: 'Launch & Training', time: 'Day 10', desc: 'Go live + team training' },
                      ].map((phase, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-emerald-400">
                            {phase.step}
                          </div>
                          <div>
                            <div className="font-semibold text-white mb-1">{phase.title}</div>
                            <div className="text-xs text-emerald-400 mb-1">{phase.time}</div>
                            <div className="text-sm text-gray-400">{phase.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white/5 to-green-500/5 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-4">Perfect For</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">🍕 Restaurants</div>
                        <p className="text-sm text-gray-400">Menu sharing, order taking, delivery updates</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">📅 Booking Services</div>
                        <p className="text-sm text-gray-400">Appointment scheduling, confirmations, reminders</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">🏥 Healthcare</div>
                        <p className="text-sm text-gray-400">Patient communication, test results, prescriptions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-10 py-6"
                >
                  Request Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package 4: Instagram DM */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-b border-white/10 p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Instagram size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/20 border border-pink-500/40 rounded-full mb-2">
                      <span className="text-xs font-bold text-pink-300">FASHION & LIFESTYLE</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Instagram DM Automation</h2>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Starting at</div>
                  <div className="text-4xl font-bold text-pink-400">৳6,000</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="text-pink-400" size={24} />
                    Who It's For
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Fashion Brands', 'Beauty & Cosmetics', 'Lifestyle Products', 'Influencers', 'E-commerce'].map((tag, i) => (
                      <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="text-pink-400" size={24} />
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Auto-respond to story mentions & replies',
                      'DM automation for product inquiries',
                      'Link & catalog sharing',
                      'Lead capture forms in DM',
                      'Comment keyword triggers to DM',
                      'Multiple response flows',
                      'Analytics & engagement insights',
                      'Human handoff option',
                      'Media attachments (images, videos)',
                      'Quick reply buttons',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="text-pink-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-white/5 to-pink-500/5 border border-white/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold mb-6">Setup Timeline</h3>
                    <div className="space-y-4">
                      {[
                        { step: '1', title: 'Instagram Connection', time: 'Day 1', desc: 'Connect Instagram Business account' },
                        { step: '2', title: 'Flow Design', time: 'Days 2-4', desc: 'Create conversation flows' },
                        { step: '3', title: 'Testing', time: 'Day 5', desc: 'Test all automations' },
                        { step: '4', title: 'Go Live', time: 'Days 6-7', desc: 'Launch + training' },
                      ].map((phase, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-pink-400">
                            {phase.step}
                          </div>
                          <div>
                            <div className="font-semibold text-white mb-1">{phase.title}</div>
                            <div className="text-xs text-pink-400 mb-1">{phase.time}</div>
                            <div className="text-sm text-gray-400">{phase.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white/5 to-purple-500/5 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-4">Automation Types</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">📸 Story Replies</div>
                        <p className="text-sm text-gray-400">Auto-thank followers who reply to your stories</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">💬 Product Inquiries</div>
                        <p className="text-sm text-gray-400">Send product details, prices, and purchase links</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">🔗 Bio Link Clicks</div>
                        <p className="text-sm text-gray-400">Follow up with users who clicked your bio link</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-10 py-6"
                >
                  Request Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package 5: Website Chatbot */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-white/10 p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Globe size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full mb-2">
                      <span className="text-xs font-bold text-purple-300">CORPORATE & SAAS</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Website Chatbot Plugin</h2>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Starting at</div>
                  <div className="text-4xl font-bold text-purple-400">৳7,000</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="text-purple-400" size={24} />
                    Who It's For
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Corporate Websites', 'SaaS Products', 'Agencies', 'Service Providers', 'E-learning'].map((tag, i) => (
                      <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="text-purple-400" size={24} />
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Embed on any website (one line of code)',
                      'Smart FAQ engine with AI',
                      'Lead capture forms & routing',
                      'Live chat escalation to human agents',
                      'Custom branding (logo, colors, fonts)',
                      'Multi-language support',
                      'Conversation analytics dashboard',
                      'Mobile responsive design',
                      'Proactive chat triggers',
                      'Integration with CRM/helpdesk',
                      'Chat history & transcripts',
                      'File upload support',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-white/5 to-purple-500/5 border border-white/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold mb-6">Setup Process</h3>
                    <div className="space-y-4">
                      {[
                        { step: '1', title: 'Requirements & Design', time: 'Days 1-2', desc: 'Define FAQs, branding, and flows' },
                        { step: '2', title: 'Bot Development', time: 'Days 3-5', desc: 'Build chatbot with your brand' },
                        { step: '3', title: 'Testing', time: 'Day 6', desc: 'Test on staging environment' },
                        { step: '4', title: 'Launch', time: 'Day 7', desc: 'Embed on your website + training' },
                      ].map((phase, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-purple-400">
                            {phase.step}
                          </div>
                          <div>
                            <div className="font-semibold text-white mb-1">{phase.title}</div>
                            <div className="text-xs text-purple-400 mb-1">{phase.time}</div>
                            <div className="text-sm text-gray-400">{phase.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white/5 to-pink-500/5 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-4">Customization Options</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">🎨 Full Branding</div>
                        <p className="text-sm text-gray-400">Match your website colors, fonts, and style</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">📍 Smart Triggers</div>
                        <p className="text-sm text-gray-400">Show chat based on page, time, or behavior</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="font-semibold text-white mb-2">🔌 Integrations</div>
                        <p className="text-sm text-gray-400">Connect to Slack, email, CRM, helpdesk tools</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-10 py-6"
                >
                  Request Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section id="pricing" className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '৳5,000',
                description: 'Perfect for small businesses just getting started',
                features: [
                  '1 platform (Messenger OR Instagram OR Comments)',
                  'Up to 1,000 conversations/month',
                  'Basic FAQ automation',
                  'Lead capture forms',
                  'Email support',
                  'Monthly reports',
                ],
                cta: 'Get Started',
                popular: false,
              },
              {
                name: 'Growth',
                price: '৳12,000',
                description: 'Best for growing businesses with higher volume',
                features: [
                  '3 platforms (any combination)',
                  'Up to 5,000 conversations/month',
                  'Advanced automation & flows',
                  'CRM & Google Sheets integration',
                  'Human handoff',
                  'Priority support',
                  'Weekly reports',
                  'Custom branding',
                ],
                cta: 'Get Started',
                popular: true,
              },
              {
                name: 'Pro',
                price: 'Custom',
                description: 'Enterprise solution with unlimited everything',
                features: [
                  'All platforms included',
                  'Unlimited conversations',
                  'Custom integrations & API',
                  'Dedicated account manager',
                  '24/7 priority support',
                  'Daily reports & analytics',
                  'Multi-location support',
                  'White-label option',
                ],
                cta: 'Contact Sales',
                popular: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white/5 backdrop-blur-md border rounded-3xl p-8 ${
                  plan.popular ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  {plan.price !== 'Custom' && <div className="text-sm text-gray-500">per month</div>}
                  <p className="text-sm text-gray-400 mt-4">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => onNavigate('/contact')}
                  className={`w-full py-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/5 hover:bg-white/10 border border-white/20'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">All plans include setup, training, and 90-day warranty</p>
            <p className="text-sm text-gray-500">Need a custom solution? <span className="text-cyan-400 cursor-pointer hover:underline" onClick={() => onNavigate('/contact')}>Contact us</span> for enterprise pricing</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Chatbot <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Can the chatbot handle both Bangla and English?',
                a: 'Yes! Our chatbots are fully bilingual and can respond in both Bangla and English. The bot can automatically detect the language or you can set it manually based on your preference.',
              },
              {
                q: 'What happens if the bot can\'t answer a question?',
                a: 'Our chatbots include intelligent human handoff. If the bot doesn\'t know the answer or detects a complex query, it automatically escalates to your team via notification or live chat.',
              },
              {
                q: 'Can I update the bot responses myself?',
                a: 'Yes! We provide a user-friendly dashboard where you can update responses, add new FAQs, and modify conversation flows anytime. We also offer a managed service if you prefer us to handle updates.',
              },
              {
                q: 'Is there analytics and reporting?',
                a: 'Absolutely! You get access to a detailed analytics dashboard showing conversation metrics, popular questions, conversion rates, user demographics, and more. Reports are available daily, weekly, or monthly.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, all our plans are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. We also offer a 30-day money-back guarantee if you\'re not satisfied.',
              },
              {
                q: 'Do you provide 24/7 support for the chatbot?',
                a: 'Yes! The chatbot itself works 24/7 automatically. For technical support, we offer email support (all plans), priority support (Growth plan), and 24/7 dedicated support (Pro plan).',
              },
              {
                q: 'What integrations are available?',
                a: 'We support Google Sheets, most popular CRMs (Zoho, HubSpot, Salesforce), email marketing tools, webhooks for custom integrations, analytics platforms, and helpdesk software.',
              },
              {
                q: 'Is my customer data secure?',
                a: 'Yes, we take security very seriously. All data is encrypted in transit and at rest. We\'re GDPR compliant and follow Facebook/WhatsApp/Instagram data policies. We never sell or share your data.',
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

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 opacity-20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Start Automating
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
              Customer Support Today
            </span>
          </h2>

          <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Free demo • 5-7 day setup • No long-term contracts • Money-back guarantee
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => onNavigate('/contact')}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-xl px-12 py-8"
            >
              Get Free Demo Now
              <ArrowRight className="ml-3" size={24} />
            </Button>

            <Button
              onClick={() => onNavigate('/contact')}
              size="lg"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xl px-12 py-8"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
