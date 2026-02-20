import { MessageSquare, Code, Smartphone, Clock, Shield, Users, TrendingUp, Star, Zap, CircleCheckBig, ArrowRight, Target, Award, Sparkles, CheckCircle2, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface InteractiveCardProps {
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
  gradient: {
    from: string;
    to: string;
  };
  index: number;
}

function InteractiveCard({ problem, solution, gradient, index }: InteractiveCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div 
        className={`absolute inset-0 rounded-3xl transition-all duration-700 ${isExpanded || isHovered ? 'opacity-20 scale-105' : 'opacity-0 scale-100'}`}
        style={{
          background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
          filter: 'blur(40px)'
        }}
      />

      {/* Main Card */}
      <div className={`relative bg-gradient-to-br from-[#0D1128] to-[#0A0E27] border rounded-3xl overflow-hidden transition-all duration-500 ${isExpanded ? 'border-white/30 shadow-2xl' : 'border-white/10 hover:border-white/20'}`}>
        
        {/* Compact View (Always Visible) */}
        <div 
          className="p-8 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between mb-6">
            {/* Icon with Animated Gradient */}
            <div 
              className="relative w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-500"
              style={{
                background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                transform: isExpanded ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
              }}
            >
              <div className="absolute inset-0 opacity-50 blur-2xl" style={{ background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})` }} />
              <div className="relative z-10">
                {problem.icon}
              </div>
            </div>

            {/* Toggle Button */}
            <button 
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-white/20 rotate-180' : 'bg-white/5 hover:bg-white/10'}`}
            >
              <ChevronDown className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Title & Stat Row */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              {problem.title}
            </h3>
            
            {/* Inline Stat Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
              <div 
                className="text-3xl font-black"
                style={{
                  background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {problem.stat}
              </div>
              <div className="text-sm text-gray-400">{problem.statLabel}</div>
            </div>
          </div>

          {/* Quick Preview */}
          <p className="text-gray-400 text-sm">
            {solution.description}
          </p>
        </div>

        {/* Expanded View (Slides Down) */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {/* Gradient Divider with Animation */}
          <div className="px-8 mb-6">
            <div className="relative h-px overflow-hidden">
              <div className="absolute inset-0 bg-white/5" />
              <div 
                className="absolute inset-0 transition-transform duration-700"
                style={{
                  background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
                  transform: isExpanded ? 'translateX(0)' : 'translateX(-100%)'
                }}
              />
            </div>
          </div>

          <div className="px-8 pb-8 space-y-6">
            {/* Solution Header */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <CircleCheckBig className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-400 uppercase">Solution</span>
              </div>
              <h4 
                className="text-xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {solution.title}
              </h4>
            </div>

            {/* Features Grid with Stagger Animation */}
            <div className="grid grid-cols-2 gap-3">
              {solution.features.map((feature, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2.5 p-3 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10"
                  style={{
                    animationDelay: `${i * 50}ms`,
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? 'translateY(0)' : 'translateY(10px)',
                    transition: `all 0.3s ease-out ${i * 50}ms`
                  }}
                >
                  <CheckCircle2 className="w-4 h-4" style={{ color: gradient.from }} />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Result Card with Highlight */}
            <div 
              className="relative p-5 rounded-2xl border-2 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${gradient.from}15, ${gradient.to}15)`,
                borderColor: `${gradient.from}40`
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-2xl" style={{ background: gradient.to }} />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Typical Result</p>
                  <p className="text-2xl font-bold text-white">{solution.result.value}</p>
                </div>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-yellow-400" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div 
          className="h-1 transition-all duration-500"
          style={{
            background: isExpanded ? `linear-gradient(90deg, ${gradient.from}, ${gradient.to})` : 'transparent'
          }}
        />
      </div>
    </div>
  );
}

interface UniqueModernWhyChooseSectionProps {
  onNavigate?: (page: string) => void;
}

export function UniqueModernWhyChooseSection({ onNavigate }: UniqueModernWhyChooseSectionProps) {
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
      gradient: {
        from: '#06b6d4',
        to: '#3b82f6'
      }
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
      gradient: {
        from: '#a855f7',
        to: '#ec4899'
      }
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
      gradient: {
        from: '#f97316',
        to: '#ef4444'
      }
    }
  ];

  return (
    <section className="relative py-24 px-4 border-t border-white/10 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Header with Floating Badge */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            {/* Floating Badge with Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-[#0D1128] border border-cyan-500/30 rounded-full backdrop-blur-xl">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-spin-slow" />
              <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose SocalBird
              </span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white mb-2">Digital Solutions That</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Actually Solve Problems
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Click each card to explore how we solve the 3 biggest challenges businesses face
          </p>
        </div>

        {/* Interactive Expandable Cards */}
        <div className="space-y-6 mb-24">
          {problems.map((item, index) => (
            <InteractiveCard
              key={index}
              problem={item.problem}
              solution={item.solution}
              gradient={item.gradient}
              index={index}
            />
          ))}
        </div>

        {/* Floating Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Card 1 */}
          <div className="group relative bg-gradient-to-br from-[#0D1128] to-[#0A0E27] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-3xl font-black text-cyan-400 mb-2">7-14 Days</div>
              <div className="text-lg font-bold text-white mb-1">Lightning Fast</div>
              <p className="text-sm text-gray-500">Most projects live in 2 weeks</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gradient-to-br from-[#0D1128] to-[#0A0E27] border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-3xl font-black text-purple-400 mb-2">100% Safe</div>
              <div className="text-lg font-bold text-white mb-1">Risk-Free</div>
              <p className="text-sm text-gray-500">Money-back guarantee</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gradient-to-br from-[#0D1128] to-[#0A0E27] border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-3xl font-black text-orange-400 mb-2">Scalable</div>
              <div className="text-lg font-bold text-white mb-1">Future-Proof</div>
              <p className="text-sm text-gray-500">Built to grow with you</p>
            </div>
          </div>
        </div>

        {/* Horizontal Stats Bar */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { value: '100+', label: 'Projects Completed', gradient: 'from-cyan-400 to-blue-500' },
            { value: '50+', label: 'Active Clients', gradient: 'from-purple-400 to-pink-500' },
            { value: '4.9/5', label: 'Average Rating', gradient: 'from-orange-400 to-red-500' },
            { value: '98%', label: 'Client Retention', gradient: 'from-emerald-400 to-green-500' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA with Magnetic Effect */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity" />
          
          <div className="relative bg-gradient-to-br from-[#0D1128] to-[#0A0E27] border border-cyan-500/30 rounded-3xl p-12 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
            </div>
            
            <div className="relative">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join 50+ successful businesses who chose SocalBird
              </p>
              
              {onNavigate && (
                <button
                  onClick={() => onNavigate('/contact')}
                  className="group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <span className="relative">Get Started - Free Consultation</span>
                  <ArrowRight className="relative w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        
        .animate-blob {
          animation: blob 20s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
