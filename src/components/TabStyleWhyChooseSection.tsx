import { MessageSquare, Code, Smartphone, Clock, Shield, Users, TrendingUp, Star, Zap, CircleCheckBig, ArrowRight, Target, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface TabCardProps {
  problem: {
    title: string;
    stat: string;
    statLabel: string;
    icon: React.ReactNode;
  };
  solution: {
    title: string;
    description: string;
    features: string[];
    result: {
      label: string;
      value: string;
    };
  };
  accentColor: string;
  accentGradient: string;
  index: number;
}

function TabCard({ problem, solution, accentColor, accentGradient, index }: TabCardProps) {
  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Card Background with Gradient Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur" style={{ background: accentGradient }} />
      
      <div className="relative bg-[#0A0E27] rounded-3xl overflow-hidden border border-white/10 group-hover:border-transparent transition-all duration-300">
        {/* Top Section: Problem */}
        <div className="p-8 border-b border-white/10">
          <div className="flex items-start justify-between mb-6">
            {/* Icon with Gradient Background */}
            <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center`} style={{ background: accentGradient }}>
              <div className="absolute inset-0 opacity-20 blur-xl" style={{ background: accentGradient }} />
              <div className="relative">
                {problem.icon}
              </div>
            </div>
            
            {/* Problem Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-red-400 uppercase">Problem</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4">
            {problem.title}
          </h3>

          {/* Stat Display - Horizontal */}
          <div className="flex items-end gap-4">
            <div className={`text-6xl font-black ${accentColor}`}>
              {problem.stat}
            </div>
            <div className="pb-2">
              <p className="text-sm text-gray-400 leading-tight">{problem.statLabel}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Solution */}
        <div className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent">
          {/* Solution Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg mb-6">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase">Solution</span>
          </div>

          {/* Solution Title */}
          <h4 className={`text-xl font-bold mb-3 ${accentColor}`}>
            {solution.title}
          </h4>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed">
            {solution.description}
          </p>

          {/* Features - 2 Column Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {solution.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <div className={`w-1.5 h-1.5 rounded-full ${accentColor.replace('text-', 'bg-')}`} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Result - Prominent Display */}
          <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Typical Result</p>
              <p className="text-xl font-bold text-white">{solution.result.value}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-yellow-400" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TabStyleWhyChooseSectionProps {
  onNavigate?: (page: string) => void;
}

export function TabStyleWhyChooseSection({ onNavigate }: TabStyleWhyChooseSectionProps) {
  const problems = [
    {
      problem: {
        title: 'Missing Customer Messages',
        stat: '67%',
        statLabel: 'of messages go unanswered',
        icon: <MessageSquare className="w-8 h-8 text-white" strokeWidth={2} />
      },
      solution: {
        title: 'AI Chatbot Automation',
        description: '24/7 automated responses on Facebook, WhatsApp, Instagram',
        features: ['Instant replies', 'Lead capture', 'Order tracking', 'Multi-platform'],
        result: {
          label: 'Typical Result',
          value: '300% more leads'
        }
      },
      accentColor: 'text-cyan-400',
      accentGradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    },
    {
      problem: {
        title: 'Slow, Outdated Website',
        stat: '53%',
        statLabel: 'leave if load time > 3s',
        icon: <Code className="w-8 h-8 text-white" strokeWidth={2} />
      },
      solution: {
        title: 'Modern Web Development',
        description: 'Lightning-fast, SEO-optimized websites that rank on Google',
        features: ['<100ms load', 'Mobile-first', 'SEO optimized', 'CMS control'],
        result: {
          label: 'Typical Result',
          value: '2X better ranking'
        }
      },
      accentColor: 'text-purple-400',
      accentGradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
    },
    {
      problem: {
        title: 'No Mobile Presence',
        stat: '85%',
        statLabel: 'prefer mobile apps',
        icon: <Smartphone className="w-8 h-8 text-white" strokeWidth={2} />
      },
      solution: {
        title: 'Native Mobile Apps',
        description: 'Professional iOS & Android apps with seamless UX',
        features: ['iOS + Android', 'Push notifications', 'Offline mode', 'Payment ready'],
        result: {
          label: 'Typical Result',
          value: '4.9★ rating'
        }
      },
      accentColor: 'text-orange-400',
      accentGradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)'
    }
  ];

  return (
    <section className="relative py-24 px-4 border-t border-white/10">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header with Gradient Text */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Why Choose SocalBird</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              The Complete Digital Partner
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We solve the 3 biggest challenges growing businesses face in 2025
          </p>
        </div>

        {/* Tab-Style Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {problems.map((item, index) => (
            <TabCard
              key={index}
              problem={item.problem}
              solution={item.solution}
              accentColor={item.accentColor}
              accentGradient={item.accentGradient}
              index={index}
            />
          ))}
        </div>

        {/* Benefits - Bento Box Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { 
              icon: Clock, 
              title: 'Lightning Fast', 
              value: '7-14 Days',
              description: 'Most projects live in 2 weeks',
              gradient: 'from-cyan-500/10 to-blue-500/10',
              iconColor: 'text-cyan-400'
            },
            { 
              icon: Shield, 
              title: 'Risk-Free', 
              value: '100% Safe',
              description: 'Full money-back guarantee',
              gradient: 'from-emerald-500/10 to-green-500/10',
              iconColor: 'text-emerald-400'
            },
            { 
              icon: Users, 
              title: 'Long-Term Partner', 
              value: 'Lifetime',
              description: "We don't disappear after launch",
              gradient: 'from-purple-500/10 to-pink-500/10',
              iconColor: 'text-purple-400'
            },
            { 
              icon: TrendingUp, 
              title: 'Future-Proof', 
              value: 'Scalable',
              description: 'Built to grow with your business',
              gradient: 'from-orange-500/10 to-red-500/10',
              iconColor: 'text-orange-400'
            },
          ].map((benefit, i) => (
            <div key={i} className={`group relative bg-gradient-to-br ${benefit.gradient} border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all`}>
              <div className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${benefit.iconColor}`}>
                <benefit.icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className={`text-2xl font-black mb-2 ${benefit.iconColor}`}>{benefit.value}</div>
              <div className="text-base font-bold text-white mb-2">{benefit.title}</div>
              <p className="text-xs text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Combined Stats Card */}
        <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-10 mb-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Track Record */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">By The Numbers</h4>
                  <p className="text-sm text-gray-500">Since 2020</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  { value: '100+', label: 'Projects', color: 'text-cyan-400' },
                  { value: '50+', label: 'Clients', color: 'text-purple-400' },
                  { value: '4.9/5', label: 'Rating', color: 'text-orange-400' },
                  { value: '98%', label: 'Retention', color: 'text-emerald-400' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Industries */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Trusted Across Industries</h4>
                  <p className="text-sm text-gray-500">Serving 6+ sectors</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { emoji: '🛒', name: 'E-commerce', count: '25+' },
                  { emoji: '🍽️', name: 'Restaurants', count: '15+' },
                  { emoji: '🏥', name: 'Healthcare', count: '10+' },
                  { emoji: '🎯', name: 'Agencies', count: '20+' },
                  { emoji: '🚀', name: 'Startups', count: '30+' },
                  { emoji: '⚙️', name: 'Services', count: '18+' },
                ].map((industry, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                    <div className="text-3xl mb-2">{industry.emoji}</div>
                    <div className="text-sm font-bold text-white">{industry.name}</div>
                    <div className="text-xs text-cyan-400 mt-1">{industry.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />
          
          <div className="relative bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 50+ successful businesses who chose SocalBird for their digital growth
            </p>
            
            {onNavigate && (
              <button
                onClick={() => onNavigate('/contact')}
                className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-bold text-lg text-white transition-all duration-300 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                Get Started - Free Consultation
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
