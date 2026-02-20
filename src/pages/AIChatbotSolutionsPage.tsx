import { ArrowRight, Check, MessageSquare, Facebook, Instagram, Phone, Globe, Bot, Zap, TrendingUp, Shield, X, Sparkles, Users, Clock, Target, BarChart3, CircuitBoard, Brain, Workflow, MessageCircle, Star, Award } from 'lucide-react';
import { Button } from '../components/ui/button';

interface AIChatbotSolutionsPageProps {
  onNavigate: (page: string) => void;
}

export function AIChatbotSolutionsPage({ onNavigate }: AIChatbotSolutionsPageProps) {
  return (
    <div className="bg-[#0A0E27] text-white">
      {/* Hero Section - Ultra Modern */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          
          {/* Animated Dot Grid */}
          <div className="absolute inset-0 opacity-20">
            <div 
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 1.5px, transparent 1.5px)',
                backgroundSize: '40px 40px',
                animation: 'dotMove 20s linear infinite'
              }}
              className="absolute inset-0"
            />
          </div>

          {/* Floating Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <path d="M0,100 L200,100 L200,200 L400,200" stroke="url(#circuit1)" strokeWidth="2" fill="none" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M800,150 L600,150 L600,250 L400,250" stroke="url(#circuit2)" strokeWidth="2" fill="none" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.2s" repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="circuit1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="circuit2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes dotMove {
            0% { background-position: 0 0; }
            100% { background-position: 40px 40px; }
          }
        `}} />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                <div className="relative">
                  <Bot size={20} className="text-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                </div>
                <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI-Powered Automation</span>
              </div>

              {/* Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Transform Customer</span>
                  <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Engagement 24/7
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Automate conversations on <span className="text-cyan-400 font-semibold">Facebook</span>, <span className="text-blue-400 font-semibold">WhatsApp</span>, <span className="text-purple-400 font-semibold">Instagram</span> & your website. 
                  Capture leads, answer questions, and boost sales while you sleep.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    <span>Get Free Demo</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  View Pricing
                </button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { value: '<1s', label: 'Response Time', icon: Zap },
                  { value: '24/7', label: 'Availability', icon: Clock },
                  { value: '+300%', label: 'Conversions', icon: TrendingUp }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Interactive Preview Card */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl overflow-hidden group">
                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Chat Bubbles */}
                  <div className="space-y-4">
                    {/* Customer Message */}
                    <div className="flex justify-end">
                      <div className="max-w-xs bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl rounded-tr-sm px-4 py-3">
                        <p className="text-sm text-white">Hello! Is your store open today?</p>
                        <div className="text-xs text-gray-400 mt-1">2:30 PM</div>
                      </div>
                    </div>

                    {/* Bot Typing Indicator */}
                    <div className="flex justify-start">
                      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex justify-start">
                      <div className="max-w-xs bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl rounded-tl-sm px-4 py-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-semibold text-cyan-400">AI Assistant</span>
                        </div>
                        <p className="text-sm text-white">Yes! We're open from 9 AM to 8 PM today. How can I help you?</p>
                        <div className="flex gap-2 mt-3">
                          <button className="px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-xs transition-colors">
                            View Menu
                          </button>
                          <button className="px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-xs transition-colors">
                            Book Table
                          </button>
                        </div>
                        <div className="text-xs text-gray-400 mt-2">2:30 PM • Instant Reply</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-xl font-bold text-cyan-400">100%</div>
                      <div className="text-xs text-gray-500">Automated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-400">Instant</div>
                      <div className="text-xs text-gray-500">Response</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-cyan-500/90 to-blue-500/90 backdrop-blur-xl px-6 py-3 rounded-xl shadow-2xl border border-white/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white" />
                  <div>
                    <div className="text-sm font-bold text-white">AI-Powered</div>
                    <div className="text-xs text-cyan-100">Smart Responses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Cards - Bento Grid Style */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Multi-Platform Support</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Connect <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">All Channels</span>
            </h2>
            <p className="text-gray-400 text-lg">One powerful AI chatbot across every platform your customers use</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: Facebook, name: 'Facebook Messenger', color: 'from-blue-500 to-blue-600', users: '2.9B' },
              { icon: Phone, name: 'WhatsApp Business', color: 'from-green-500 to-emerald-600', users: '2B' },
              { icon: Instagram, name: 'Instagram DM', color: 'from-pink-500 to-purple-600', users: '2B' },
              { icon: MessageSquare, name: 'Facebook Comments', color: 'from-blue-600 to-indigo-600', users: '2.9B' },
              { icon: Globe, name: 'Website Chatbot', color: 'from-cyan-500 to-blue-500', users: 'Custom' }
            ].map((platform, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-10`} />
                </div>

                <div className="relative text-center space-y-3">
                  <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{platform.name}</div>
                    <div className="text-xs text-gray-500">{platform.users} users</div>
                  </div>
                </div>

                {/* Connected Indicator */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Advanced Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <Target className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Why Choose AI Chatbots</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Business Growth</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Instant Response',
                desc: 'Reply to every customer inquiry in under 1 second. Never miss a lead, even at 3 AM.',
                stat: '<1sec',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: TrendingUp,
                title: '3X More Conversions',
                desc: 'Engage customers when they\'re most interested. Convert browsers into buyers automatically.',
                stat: '+300%',
                color: 'from-blue-500 to-purple-500'
              },
              {
                icon: Users,
                title: 'Unlimited Scale',
                desc: 'Handle thousands of conversations simultaneously without hiring more staff.',
                stat: '∞',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((benefit, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5`} />
                </div>

                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                  </div>

                  {/* Stat */}
                  <div className={`text-5xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Automate</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: 'Multi-Channel Sync', desc: 'One chatbot, all platforms synchronized', color: 'cyan' },
              { icon: Brain, title: 'Custom AI Training', desc: 'Trained on your unique business data', color: 'blue' },
              { icon: Target, title: 'Smart Lead Capture', desc: 'Automatically collect contact information', color: 'purple' },
              { icon: Zap, title: 'Instant Auto-Reply', desc: 'Sub-second response times', color: 'cyan' },
              { icon: Globe, title: 'Multi-Language', desc: 'Communicate in 50+ languages', color: 'blue' },
              { icon: Workflow, title: 'CRM Integration', desc: 'Sync with your existing tools', color: 'purple' }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-500/20 to-${feature.color}-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Premium Cards */}
      <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Transparent Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Monthly Plans</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No hidden fees • Cancel anytime • 14-day money-back guarantee
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '৳5,000',
                period: '/month',
                description: 'Perfect for small businesses getting started',
                features: [
                  '1 Platform (Facebook OR WhatsApp)',
                  '500 conversations/month',
                  'Basic auto-replies',
                  'Lead capture forms',
                  'Email support',
                  'Setup included'
                ],
                notIncluded: [
                  'Multi-platform',
                  'Advanced AI training',
                  'CRM integration'
                ],
                popular: false,
                gradient: 'from-cyan-500/10 to-blue-500/10'
              },
              {
                name: 'Professional',
                price: '৳12,000',
                period: '/month',
                description: 'Most popular for growing businesses',
                features: [
                  'Up to 3 Platforms',
                  '2,000 conversations/month',
                  'Advanced auto-replies',
                  'Custom AI training',
                  'Lead capture & routing',
                  'CRM integration (basic)',
                  'Analytics dashboard',
                  'Priority support',
                  'Setup & training included'
                ],
                notIncluded: [
                  'Dedicated account manager'
                ],
                popular: true,
                gradient: 'from-blue-500/20 to-purple-500/20'
              },
              {
                name: 'Enterprise',
                price: '৳25,000',
                period: '/month',
                description: 'For businesses needing maximum automation',
                features: [
                  'All 5 Platforms',
                  'Unlimited conversations',
                  'Advanced AI with custom logic',
                  'Full CRM integration',
                  'Multi-language support',
                  'Advanced analytics',
                  'API access',
                  'Dedicated account manager',
                  'White-label option',
                  '24/7 priority support'
                ],
                notIncluded: [],
                popular: false,
                gradient: 'from-purple-500/10 to-pink-500/10'
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 bg-gradient-to-br ${plan.gradient} backdrop-blur-xl border ${plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-white/10'} transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-bold text-white shadow-lg">
                    🔥 MOST POPULAR
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-400">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => onNavigate('/contact')}
                    className={`w-full py-6 text-base font-semibold ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' : 'bg-white/5 hover:bg-white/10 border border-white/20'}`}
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={18} />
                  </Button>

                  {/* Features */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <X size={18} className="text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Need a custom solution tailored to your business?</p>
            <Button
              onClick={() => onNavigate('/contact')}
              className="bg-white/5 hover:bg-white/10 border border-white/20"
            >
              Contact for Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases - Modern Bento Grid */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Industry Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perfect For <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Every Business</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: 'E-commerce Stores',
                icon: '🛒',
                uses: ['Product recommendations', 'Order tracking', 'Cart recovery', 'Customer support'],
                color: 'from-cyan-500 to-blue-500'
              },
              {
                industry: 'Restaurants',
                icon: '🍽️',
                uses: ['Menu inquiries', 'Reservations', 'Delivery updates', 'Feedback collection'],
                color: 'from-blue-500 to-purple-500'
              },
              {
                industry: 'Service Businesses',
                icon: '⚙️',
                uses: ['Appointment booking', 'Service inquiries', 'Quote requests', 'FAQs'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                industry: 'Real Estate',
                icon: '🏠',
                uses: ['Property inquiries', 'Showing schedules', 'Lead qualification', 'Virtual tours'],
                color: 'from-pink-500 to-rose-500'
              },
              {
                industry: 'Healthcare',
                icon: '🏥',
                uses: ['Appointment booking', 'Patient inquiries', 'Prescription reminders', 'Health tips'],
                color: 'from-cyan-500 to-teal-500'
              },
              {
                industry: 'Education',
                icon: '📚',
                uses: ['Course information', 'Enrollment', 'Student support', 'Event registration'],
                color: 'from-blue-500 to-indigo-500'
              }
            ].map((useCase, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-5`} />
                </div>

                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="text-5xl">{useCase.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>

                  {/* Use Cases */}
                  <ul className="space-y-3">
                    {useCase.uses.map((use, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Ultra Modern */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold text-cyan-400">🎉 Free Setup for New Customers</span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Start Automating</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                In Just 7 Days
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join 100+ successful businesses using AI chatbots to transform their customer engagement
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center pt-4">
              <button
                onClick={() => onNavigate('/contact')}
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  <span>Get Started Now</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-gray-400">
              {['✓ No Long-term Contracts', '✓ 14-Day Money-Back', '✓ Free Setup & Training'].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
