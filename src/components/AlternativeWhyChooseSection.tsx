import { MessageSquare, Code, Smartphone, Clock, Shield, Users, TrendingUp, Star, Zap, CircleCheckBig, ArrowRight, Target, Award, CheckCircle, ArrowUpRight } from 'lucide-react';

interface ProblemSolutionCardProps {
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
  index: number;
}

function ProblemSolutionCard({ problem, solution, accentColor, index }: ProblemSolutionCardProps) {
  return (
    <div 
      className="group relative bg-[#0D1128] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-cyan-500/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
        <div className={`absolute top-0 right-0 w-64 h-64 ${accentColor} opacity-20 blur-3xl`} />
      </div>

      <div className="relative p-8">
        {/* Split Layout: Problem | Solution */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Problem */}
          <div className="space-y-6">
            {/* Problem Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold text-red-400 uppercase">Problem</span>
              </div>
              <div className={`w-12 h-12 ${accentColor} bg-opacity-20 rounded-xl flex items-center justify-center`}>
                {problem.icon}
              </div>
            </div>

            {/* Problem Title */}
            <h3 className="text-2xl font-bold text-white leading-tight">
              {problem.title}
            </h3>

            {/* Stat - Large Display */}
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 text-center">
              <div className={`text-6xl font-black mb-2 ${accentColor.replace('bg-', 'text-')}`}>
                {problem.stat}
              </div>
              <p className="text-sm text-gray-400 font-medium">{problem.statLabel}</p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* Right: Solution */}
          <div className="space-y-6">
            {/* Solution Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg w-fit">
              <CircleCheckBig className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase">Solution</span>
            </div>

            {/* Solution Title */}
            <h4 className={`text-2xl font-bold ${accentColor.replace('bg-', 'text-')}`}>
              {solution.title}
            </h4>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              {solution.description}
            </p>

            {/* Features - Compact List */}
            <div className="space-y-2.5">
              {solution.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className={`w-4 h-4 ${accentColor.replace('bg-', 'text-')}`} />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Result Badge */}
            <div className={`inline-flex items-center gap-3 px-5 py-3 ${accentColor} bg-opacity-10 border border-white/10 rounded-xl`}>
              <Zap className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Typical Result</p>
                <p className="text-lg font-bold text-white">{solution.result.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className={`h-1 ${accentColor} opacity-50 group-hover:opacity-100 transition-opacity`} />
    </div>
  );
}

interface AlternativeWhyChooseSectionProps {
  onNavigate?: (page: string) => void;
}

export function AlternativeWhyChooseSection({ onNavigate }: AlternativeWhyChooseSectionProps) {
  const problems = [
    {
      problem: {
        title: 'Missing Customer Messages',
        stat: '67%',
        statLabel: 'of messages go unanswered',
        icon: <MessageSquare className="w-6 h-6 text-cyan-400" strokeWidth={2} />
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
      accentColor: 'bg-cyan-500'
    },
    {
      problem: {
        title: 'Slow, Outdated Website',
        stat: '53%',
        statLabel: 'leave if load time > 3s',
        icon: <Code className="w-6 h-6 text-purple-400" strokeWidth={2} />
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
      accentColor: 'bg-purple-500'
    },
    {
      problem: {
        title: 'No Mobile Presence',
        stat: '85%',
        statLabel: 'prefer mobile apps',
        icon: <Smartphone className="w-6 h-6 text-orange-400" strokeWidth={2} />
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
      accentColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="relative py-24 px-4 border-t border-white/10 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-cyan-500/30 rounded-full mb-6">
            <Target className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">Why Choose SocalBird</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">The Complete</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Partner
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We solve the 3 biggest challenges growing businesses face in 2025
          </p>
        </div>

        {/* Problem-Solution Cards - Stacked */}
        <div className="space-y-8 mb-24">
          {problems.map((item, index) => (
            <ProblemSolutionCard
              key={index}
              problem={item.problem}
              solution={{
                ...item.solution,
                features: Array.isArray(item.solution?.features) ? item.solution.features : [],
                result: {
                  label: item.solution?.result?.label || 'Typical Result',
                  value: item.solution?.result?.value || 'High Impact'
                }
              }}
              accentColor={item.accentColor}
              index={index}
            />
          ))}
        </div>

        {/* Why SMBs - Horizontal Scroll Cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Why Small Businesses Choose Us
            </h3>
            <p className="text-lg text-gray-400">
              Built specifically for growing companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: '7-14 Days', label: 'Fast Delivery', desc: 'Live in 2 weeks', color: 'cyan' },
              { icon: Shield, value: '100% Safe', label: 'Money-Back', desc: 'Full refund guarantee', color: 'emerald' },
              { icon: Users, value: 'Lifetime', label: 'Always Here', desc: "We don't vanish", color: 'purple' },
              { icon: TrendingUp, value: 'Scalable', label: 'Growth Ready', desc: 'Built to scale', color: 'orange' },
            ].map((item, i) => (
              <div key={i} className="group bg-[#0D1128] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-${item.color}-500/10 rounded-xl mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-400`} strokeWidth={2} />
                </div>
                <div className={`text-3xl font-black text-${item.color}-400 mb-2`}>{item.value}</div>
                <div className="text-lg font-bold text-white mb-1">{item.label}</div>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - Side by Side */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {/* Industries - Compact */}
          <div className="lg:col-span-2 bg-[#0D1128] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">Trusted Across Industries</h4>
                <p className="text-sm text-gray-500">6+ sectors served since 2020</p>
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
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors">
                  <div className="text-4xl mb-3">{industry.emoji}</div>
                  <div className="text-sm font-bold text-white mb-1">{industry.name}</div>
                  <div className="text-xs text-cyan-400 font-semibold">{industry.count} clients</div>
                </div>
              ))}
            </div>
          </div>

          {/* Track Record - Vertical */}
          <div className="bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">By The Numbers</h4>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { value: '100+', label: 'Projects Completed', color: 'text-cyan-400' },
                { value: '50+', label: 'Active Clients', color: 'text-purple-400' },
                { value: '4.9/5', label: 'Average Rating', color: 'text-orange-400' },
                { value: '98%', label: 'Client Retention', color: 'text-emerald-400' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between pb-6 border-b border-white/10 last:border-0">
                  <div>
                    <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 ${stat.color}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA - Full Width */}
        <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 blur-3xl" />
          </div>
          
          <div className="relative">
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to Solve Your Business Challenges?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 50+ successful businesses who chose SocalBird
            </p>
            
            {onNavigate && (
              <button
                onClick={() => onNavigate('/contact')}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-bold text-lg text-white transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                Get Started - Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
