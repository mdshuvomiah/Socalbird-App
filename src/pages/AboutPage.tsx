import { Target, Zap, Heart, Shield, Users, Code, Smartphone, Bot, ArrowRight, Sparkles, Award, TrendingUp, Clock, Star, CheckCircle, Rocket, Globe, Brain, Layers, Lightbulb, Trophy, Zap as Lightning, ChevronRight, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on code quality, design excellence, or user experience. Every project receives our full attention.',
      color: 'from-cyan-500 to-blue-500',
      stat: '100%',
      badge: 'Excellence'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Fast turnaround times without sacrificing quality. We respect your time and deliver on schedule.',
      color: 'from-blue-500 to-purple-500',
      stat: '7-14d',
      badge: 'Delivery'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear communication, honest estimates, and regular updates. You always know where your project stands.',
      color: 'from-purple-500 to-pink-500',
      stat: '24/7',
      badge: 'Support'
    },
    {
      icon: Heart,
      title: 'Dedicated Support',
      description: "We're here for the long haul. From launch to growth, we support your success every step of the way.",
      color: 'from-pink-500 to-rose-500',
      stat: 'Lifetime',
      badge: 'Partnership'
    },
  ];

  const techStacks = [
    { 
      category: 'Frontend',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      techs: ['React', 'Next.js', 'Vue.js', 'Tailwind']
    },
    { 
      category: 'Backend',
      icon: '⚙️',
      color: 'from-blue-500 to-purple-500',
      techs: ['Node.js', 'Laravel', 'Python', 'Go']
    },
    { 
      category: 'Mobile',
      icon: '📱',
      color: 'from-purple-500 to-pink-500',
      techs: ['Swift', 'Kotlin', 'React Native', 'Flutter']
    },
    { 
      category: 'Database',
      icon: '🗄️',
      color: 'from-pink-500 to-rose-500',
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    { 
      category: 'Cloud',
      icon: '☁️',
      color: 'from-rose-500 to-orange-500',
      techs: ['AWS', 'Firebase', 'Vercel', 'Railway']
    },
    { 
      category: 'AI/ML',
      icon: '🧠',
      color: 'from-orange-500 to-amber-500',
      techs: ['OpenAI', 'TensorFlow', 'LangChain', 'Pinecone']
    }
  ];

  const achievements = [
    { icon: Trophy, label: '100+ Projects', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, label: '50+ Clients', color: 'from-cyan-500 to-blue-500' },
    { icon: Star, label: '4.9★ Rating', color: 'from-purple-500 to-pink-500' },
    { icon: Award, label: '5+ Years', color: 'from-green-500 to-teal-500' }
  ];

  return (
    <div className="bg-[#0A0E27] text-white">
      {/* Hero Section - Asymmetric Bento Style */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div 
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 1.5px, transparent 1.5px)',
                backgroundSize: '40px 40px',
                animation: 'gridMove 20s linear infinite'
              }}
              className="absolute inset-0"
            />
          </div>

          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: 'float 3s ease-in-out infinite',
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 40px 40px; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0; }
            50% { transform: translateY(-30px) scale(1.5); opacity: 1; }
          }
        `}} />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Large Hero Card - 8 columns */}
            <div className="col-span-12 lg:col-span-8">
              <div className="relative rounded-3xl p-10 lg:p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 overflow-hidden group">
                {/* Animated Border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                </div>

                <div className="relative space-y-8">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                    <div className="relative">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                    </div>
                    <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About SocalBird</span>
                  </div>
                  
                  <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                      <span className="text-white">Digital Innovation</span>
                      <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Meets Excellence
                      </span>
                    </h1>
                    
                    <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
                      We're not just developers—we're <span className="text-cyan-400 font-semibold">digital architects</span>, <span className="text-blue-400 font-semibold">creative problem solvers</span>, and <span className="text-purple-400 font-semibold">your growth partners</span>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => onNavigate('/contact')}
                      className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-center gap-3">
                        <Rocket className="w-5 h-5" />
                        <span>Start Your Project</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                    
                    <button
                      onClick={() => onNavigate('/portfolio')}
                      className="group px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-3"
                    >
                      <Play className="w-5 h-5" />
                      <span>View Portfolio</span>
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
              </div>
            </div>

            {/* Stats Cards - 4 columns */}
            <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-6">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5`} />
                  </div>
                  
                  <div className="relative space-y-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Story Section - Split Design */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual Timeline */}
            <div className="relative">
              {/* Circular Progress Design */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2024</div>
                    <div className="text-xs text-cyan-100">Today</div>
                  </div>
                </div>

                {/* Milestone Circles */}
                {[
                  { year: '2020', angle: 0, title: 'Founded', color: 'from-cyan-500 to-blue-500' },
                  { year: '2021', angle: 90, title: '50 Clients', color: 'from-blue-500 to-purple-500' },
                  { year: '2022', angle: 180, title: 'AI Launch', color: 'from-purple-500 to-pink-500' },
                  { year: '2023', angle: 270, title: '100 Projects', color: 'from-pink-500 to-rose-500' }
                ].map((milestone, i) => {
                  const radius = 180;
                  const x = Math.cos((milestone.angle - 90) * Math.PI / 180) * radius;
                  const y = Math.sin((milestone.angle - 90) * Math.PI / 180) * radius;
                  
                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      <div className={`group relative w-24 h-24 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg`}>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{milestone.year}</div>
                          <div className="text-xs text-white/80">{milestone.title}</div>
                        </div>
                        
                        {/* Connecting Line */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] -z-10 pointer-events-none">
                          <line 
                            x1="100" 
                            y1="100" 
                            x2={100 - x} 
                            y2={100 - y} 
                            stroke="url(#lineGrad)" 
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            opacity="0.3"
                          />
                          <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#06b6d4" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  );
                })}

                {/* Orbital Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/20" />
              </div>
            </div>

            {/* Right - Story Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-gray-300">Our Journey</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white">From Vision to</span>
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h2>

              <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                <p>
                  <span className="text-white font-semibold">SocalBird</span> emerged in 2020 from a simple belief: 
                  cutting-edge technology should be accessible to <span className="text-cyan-400 font-semibold">every business</span>, 
                  not just Fortune 500 companies.
                </p>
                <p>
                  What started as a passionate two-person web development team has evolved into a 
                  <span className="text-blue-400 font-semibold"> full-service digital agency</span> with expertise spanning 
                  modern web development, native mobile apps, and AI-powered automation.
                </p>
                <p>
                  Today, we've delivered <span className="text-white font-semibold">100+ successful projects</span> across 
                  ecommerce, healthcare, SaaS, hospitality, and beyond. Our clients don't just get code—they get a 
                  <span className="text-purple-400 font-semibold"> strategic technology partner</span> invested in their growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { icon: CheckCircle, text: 'Quality Over Quantity' },
                  { icon: Lightbulb, text: 'Innovation Driven' },
                  { icon: Heart, text: 'Client Success First' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
                    <item.icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-white font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Interactive Tabs */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Core Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Drives <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Work</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Value Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setActiveValue(index)}
                  className={`w-full text-left rounded-2xl p-6 transition-all duration-300 ${
                    activeValue === index
                      ? 'bg-gradient-to-br from-white/10 to-white/5 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  } border backdrop-blur-xl`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center ${activeValue === index ? 'scale-110' : ''} transition-transform`}>
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{value.title}</h3>
                      <div className="text-xs text-cyan-400 font-semibold">{value.badge}</div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-400 ${activeValue === index ? 'rotate-90' : ''} transition-transform`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Active Value Detail */}
            <div className="lg:col-span-8">
              <div className="relative rounded-3xl p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${values[activeValue].color}`} />
                </div>

                <div className="relative space-y-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className={`text-6xl font-bold bg-gradient-to-r ${values[activeValue].color} bg-clip-text text-transparent mb-4`}>
                        {values[activeValue].stat}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{values[activeValue].title}</h3>
                    </div>
                    <div className={`w-20 h-20 bg-gradient-to-br ${values[activeValue].color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      {(() => {
                        const IconComponent = values[activeValue].icon;
                        return <IconComponent className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                  </div>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    {values[activeValue].description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">100%</div>
                      <div className="text-xs text-gray-500">Commitment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">50+</div>
                      <div className="text-xs text-gray-500">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">4.9★</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Magnetic Cards */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Pillars of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Web Development',
                desc: 'WordPress, Laravel, Next.js, React. From simple sites to complex web applications.',
                features: ['SEO Optimized', 'Lightning Fast', 'Fully Responsive', 'Scalable Architecture'],
                color: 'from-purple-500 to-pink-500',
                page: '/web-development'
              },
              {
                icon: Smartphone,
                title: 'Mobile Apps',
                desc: 'Native iOS & Android apps that users love. Beautiful design meets powerful functionality.',
                features: ['Native Performance', 'Intuitive UX', 'Push Notifications', 'Offline Support'],
                color: 'from-green-500 to-teal-500',
                page: '/app-development'
              },
              {
                icon: Bot,
                title: 'AI Chatbots',
                desc: '24/7 automated customer engagement across Messenger, WhatsApp, Instagram & web.',
                features: ['Smart Responses', 'Lead Capture', 'Multi-Platform', 'CRM Integration'],
                color: 'from-cyan-500 to-blue-500',
                page: '/ai-chatbot-solutions'
              }
            ].map((service, i) => (
              <button
                key={i}
                onClick={() => onNavigate(service.page)}
                className="group relative rounded-3xl p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-left overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                </div>

                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span className="text-xs text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Advanced Masonry Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Technology Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Modern Tech</span>
            </h2>
            <p className="text-xl text-gray-400">The tools we master to build your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-5`} />
                </div>

                <div className="relative space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-3xl`}>
                      {stack.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{stack.category}</h3>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, i) => (
                      <div
                        key={i}
                        className={`px-4 py-2 bg-gradient-to-r ${stack.color} bg-opacity-10 border border-white/20 rounded-lg text-sm font-medium text-white hover:scale-105 transition-transform`}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Immersive */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          
          {/* Animated Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[600px] h-[600px] border border-cyan-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[700px] h-[700px] border border-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
          </div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full shadow-2xl">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Ready to Transform Your Business?</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Let's Create Something</span>
              <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h2>

            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Your vision, our expertise. Let's build digital solutions that drive real growth.
            </p>

            <div className="flex flex-wrap gap-6 justify-center pt-6">
              <button
                onClick={() => onNavigate('/contact')}
                className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-xl rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3">
                  <Lightning className="w-6 h-6" />
                  <span>Start Your Project</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button
                onClick={() => onNavigate('/portfolio')}
                className="px-12 py-6 bg-white/5 hover:bg-white/10 text-white font-bold text-xl rounded-2xl border-2 border-white/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                View Case Studies
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-12 pt-8">
              {[
                { icon: CheckCircle, text: 'Free Consultation' },
                { icon: Lightning, text: 'Fast Response' },
                { icon: Award, text: 'Expert Team' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}