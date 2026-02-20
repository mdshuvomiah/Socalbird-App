import { MessageSquare, Code, Smartphone, Clock, Shield, Users, TrendingUp, Star, Zap, CircleCheckBig, ArrowRight, Sparkles, Award, Target } from 'lucide-react';

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
      className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Accent Border Top */}
      <div className={`h-0.5 ${accentColor}`} />
      
      <div className="p-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-6">
          {/* Icon & Badge */}
          <div className="flex items-center justify-between">
            <div className={`w-14 h-14 ${accentColor} bg-opacity-10 rounded-xl flex items-center justify-center`}>
              {problem.icon}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">Problem</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white leading-tight">
            {problem.title}
          </h3>

          {/* Stat */}
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
            <div className={`text-5xl font-bold mb-2 ${accentColor.replace('bg-', 'text-')}`}>
              {problem.stat}
            </div>
            <p className="text-sm text-gray-400">{problem.statLabel}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-[#0A0E27] flex items-center gap-2">
              <CircleCheckBig className="w-4 h-4 text-emerald-400" strokeWidth={2} />
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Solution</span>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="space-y-6">
          {/* Solution Title & Description */}
          <div>
            <h4 className={`text-xl font-bold mb-2 ${accentColor.replace('bg-', 'text-')}`}>
              {solution.title}
            </h4>
            <p className="text-gray-400 leading-relaxed">
              {solution.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            {solution.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <div className={`w-1 h-1 rounded-full ${accentColor}`} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className={`flex items-center justify-between p-4 ${accentColor} bg-opacity-5 border border-white/10 rounded-lg`}>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Typical Result</p>
              <p className="text-lg font-bold text-white">{solution.result.value}</p>
            </div>
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProfessionalWhyChooseSectionProps {
  onNavigate?: (page: string) => void;
}

export function ProfessionalWhyChooseSection({ onNavigate }: ProfessionalWhyChooseSectionProps) {
  const problems = [
    {
      problem: {
        title: 'Missing Customer Messages',
        stat: '67%',
        statLabel: 'of messages go unanswered',
        icon: <MessageSquare className="w-7 h-7 text-cyan-400" strokeWidth={2} />
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
        icon: <Code className="w-7 h-7 text-purple-400" strokeWidth={2} />
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
        icon: <Smartphone className="w-7 h-7 text-orange-400" strokeWidth={2} />
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
    <section className="relative py-24 px-4 border-t border-white/10">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
            <Target className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">Why Choose SocalBird</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            The Complete Digital Partner
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We solve the 3 biggest challenges growing businesses face in 2025
          </p>
        </div>

        {/* Problem-Solution Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {problems.map((item, index) => (
            <ProblemSolutionCard
              key={index}
              problem={item.problem}
              solution={item.solution}
              accentColor={item.accentColor}
              index={index}
            />
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-3">
              Why Small & Mid-Sized Businesses Choose SocalBird
            </h3>
            <p className="text-gray-400">
              We understand your budget, timeline, and growth goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: '7-14 Days', label: 'Fast Delivery', color: 'text-cyan-400' },
              { icon: Shield, value: '100% Safe', label: 'Money-Back Guarantee', color: 'text-emerald-400' },
              { icon: Users, value: 'Lifetime', label: 'Always Here', color: 'text-purple-400' },
              { icon: TrendingUp, value: 'Scalable', label: 'Growth Focused', color: 'text-orange-400' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded-xl mb-4 ${item.color}`}>
                  <item.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className={`text-2xl font-bold mb-1 ${item.color}`}>{item.value}</div>
                <div className="text-sm font-medium text-white mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">
                  {i === 0 && 'Most projects live in 2 weeks'}
                  {i === 1 && 'Full refund if not satisfied'}
                  {i === 2 && "We don't disappear after launch"}
                  {i === 3 && 'Built to scale as you grow'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* Industries */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Trusted Across Industries</h4>
                <p className="text-sm text-gray-500">6+ industries served</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {[
                { emoji: '🛒', name: 'E-commerce', count: '25+' },
                { emoji: '🍽️', name: 'Restaurants', count: '15+' },
                { emoji: '🏥', name: 'Healthcare', count: '10+' },
                { emoji: '🎯', name: 'Agencies', count: '20+' },
                { emoji: '🚀', name: 'Startups', count: '30+' },
                { emoji: '⚙️', name: 'Services', count: '18+' },
              ].map((industry, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">{industry.emoji}</div>
                  <div className="text-xs font-medium text-white mb-1">{industry.name}</div>
                  <div className="text-xs text-cyan-400">{industry.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Track Record */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Numbers That Speak</h4>
                <p className="text-sm text-gray-500">Proven results since 2020</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: 'Projects', sublabel: 'Completed', color: 'text-cyan-400' },
                { value: '50+', label: 'Clients', sublabel: 'Active', color: 'text-purple-400' },
                { value: '4.9/5', label: 'Rating', sublabel: 'Average', color: 'text-orange-400' },
                { value: '98%', label: 'Retention', sublabel: 'Client', color: 'text-emerald-400' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                  <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm font-medium text-white">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white/[0.02] border border-cyan-500/20 rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Solve Your Business Challenges?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 50+ successful businesses who chose SocalBird
          </p>
          
          {onNavigate && (
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-semibold text-white transition-all duration-300"
            >
              Get Started - Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}