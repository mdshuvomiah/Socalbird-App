import { MessageSquare, Code, Smartphone, Clock, Shield, Users, TrendingUp, Star, CheckCircle, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface ModernWhyChooseSectionProps {
  onNavigate: (page: string) => void;
}

export function ModernWhyChooseSection({ onNavigate }: ModernWhyChooseSectionProps) {
  return (
    <section className="py-24 px-4 border-t border-white/10 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Sparkles className="text-cyan-400" size={18} />
            <span className="text-sm font-semibold text-cyan-300">Why Choose SocalBird</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Complete Digital Partner
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block mt-2">
              Your Business Deserves
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We solve the 3 biggest challenges growing businesses face in 2025
          </p>
        </div>

        {/* Problem-Solution Cards - Modern Bento Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              problem: 'Missing Customer Messages',
              icon: MessageSquare,
              stat: '67%',
              statLabel: 'of messages go unanswered',
              solution: 'AI Chatbot Automation',
              description: '24/7 automated responses on Facebook, WhatsApp, Instagram',
              features: ['Instant replies', 'Lead capture', 'Order tracking', 'Multi-platform'],
              gradient: 'from-cyan-500 via-cyan-400 to-blue-500',
              glowColor: 'cyan',
              result: '300% more leads',
            },
            {
              problem: 'Slow, Outdated Website',
              icon: Code,
              stat: '53%',
              statLabel: 'leave if load time > 3s',
              solution: 'Modern Web Development',
              description: 'Lightning-fast, SEO-optimized websites that rank on Google',
              features: ['<100ms load', 'Mobile-first', 'SEO optimized', 'CMS control'],
              gradient: 'from-purple-500 via-purple-400 to-pink-500',
              glowColor: 'purple',
              result: '2X better ranking',
            },
            {
              problem: 'No Mobile Presence',
              icon: Smartphone,
              stat: '85%',
              statLabel: 'prefer mobile apps',
              solution: 'Native Mobile Apps',
              description: 'Professional iOS & Android apps with seamless UX',
              features: ['iOS + Android', 'Push notifications', 'Offline mode', 'Payment ready'],
              gradient: 'from-orange-500 via-orange-400 to-red-500',
              glowColor: 'orange',
              result: '4.9★ rating',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
            >
              {/* Animated gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />
              
              {/* Top Gradient Strip */}
              <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />

              <div className="p-8">
                {/* Problem Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Problem</span>
                  </div>
                  
                  {/* Floating Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg`}>
                    <item.icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Problem Title */}
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{item.problem}</h3>
                
                {/* Stat Box */}
                <div className="relative mb-6 p-5 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5`} />
                  <div className={`text-5xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                    {item.stat}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{item.statLabel}</div>
                </div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center">
                    <div className="px-3 bg-[#0A0E27] flex items-center gap-2">
                      <CheckCircle className="text-emerald-400" size={16} />
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Solution</span>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className={`text-xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}>
                    {item.solution}
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.gradient}`} />
                      <span className="text-xs text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Result Badge */}
                <div className={`relative p-4 bg-gradient-to-r ${item.gradient} bg-opacity-10 rounded-xl border-2 border-opacity-30`} style={{ borderColor: `rgba(6, 182, 212, 0.3)` }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 font-semibold mb-1">Typical Result</div>
                      <div className="text-base font-bold text-white">{item.result}</div>
                    </div>
                    <Zap className="text-yellow-400" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why SocalBird - Feature Highlights */}
        <div className="bg-gradient-to-br from-cyan-500/5 via-white/5 to-blue-500/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden mb-20">
          <div className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Why Small & Mid-Sized Businesses Choose{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  SocalBird
                </span>
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We understand your budget, timeline, and growth goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Clock,
                  stat: '7-14 Days',
                  title: 'Fast Delivery',
                  description: 'Most projects live in 2 weeks',
                  gradient: 'from-cyan-500 to-blue-500',
                },
                {
                  icon: Shield,
                  stat: '100% Safe',
                  title: 'Money-Back Guarantee',
                  description: 'Full refund if not satisfied',
                  gradient: 'from-emerald-500 to-green-500',
                },
                {
                  icon: Users,
                  stat: 'Lifetime',
                  title: 'Always Here',
                  description: "We don't disappear after launch",
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: TrendingUp,
                  stat: 'Scalable',
                  title: 'Growth Focused',
                  description: 'Built to scale as you grow',
                  gradient: 'from-orange-500 to-red-500',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-500/40 transition-all hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform`}>
                    <feature.icon size={32} className="text-cyan-400" />
                  </div>
                  <div className={`text-2xl font-black bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-2`}>
                    {feature.stat}
                  </div>
                  <div className="text-lg font-bold text-white mb-2">{feature.title}</div>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries + Stats - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Industries Section */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 overflow-hidden">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
                <Star className="text-cyan-400" size={16} />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">6+ Industries</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Trusted Across Industries
              </h3>
              <p className="text-gray-400 text-sm">
                From restaurants to e-commerce, we understand your needs
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'E-commerce', icon: '🛒', clients: '25+', color: 'cyan' },
                { name: 'Restaurants', icon: '🍽️', clients: '15+', color: 'purple' },
                { name: 'Healthcare', icon: '🏥', clients: '10+', color: 'emerald' },
                { name: 'Agencies', icon: '🎯', clients: '20+', color: 'orange' },
                { name: 'Startups', icon: '🚀', clients: '30+', color: 'pink' },
                { name: 'Services', icon: '⚙️', clients: '18+', color: 'blue' },
              ].map((industry, i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 border border-white/10 hover:border-cyan-500/40 p-5 rounded-2xl text-center transition-all hover:scale-105 cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{industry.icon}</div>
                  <div className="text-sm font-bold text-white mb-1">{industry.name}</div>
                  <div className="text-xs font-semibold text-cyan-400">{industry.clients} clients</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 overflow-hidden">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
                <TrendingUp className="text-purple-400" size={16} />
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Our Track Record</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Numbers That Speak
              </h3>
              <p className="text-gray-400 text-sm">
                Proven results since 2020
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: '🏆',
                  value: '100+',
                  label: 'Projects',
                  sublabel: 'Completed',
                  gradient: 'from-cyan-400 to-blue-500',
                },
                {
                  icon: '👥',
                  value: '50+',
                  label: 'Clients',
                  sublabel: 'Active',
                  gradient: 'from-purple-400 to-pink-500',
                },
                {
                  icon: '⭐',
                  value: '4.9/5',
                  label: 'Rating',
                  sublabel: 'Average',
                  gradient: 'from-orange-400 to-red-500',
                },
                {
                  icon: '📈',
                  value: '98%',
                  label: 'Retention',
                  sublabel: 'Client',
                  gradient: 'from-emerald-400 to-green-500',
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group bg-white/5 border border-white/10 hover:border-cyan-500/40 p-6 rounded-2xl text-center transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-white">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-cyan-500/10 via-white/5 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Solve Your Business Challenges?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 50+ successful businesses who chose SocalBird
          </p>
          <Button
            onClick={() => onNavigate('/contact')}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-12 py-6 text-lg"
          >
            Get Started - Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
