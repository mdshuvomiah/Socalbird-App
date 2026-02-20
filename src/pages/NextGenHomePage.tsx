import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Sparkles, Zap, Bot, Code, Smartphone, Star, 
  CheckCircle2, Rocket, Target, Users, TrendingUp, Award, 
  Shield, Clock, Globe, Layers, Cpu, Database 
} from 'lucide-react';
import { Button } from '../components/ui/button';

interface NextGenHomePageProps {
  onNavigate: (page: string) => void;
}

export function NextGenHomePage({ onNavigate }: NextGenHomePageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="dark overflow-hidden cyber-grid">
      {/* Animated Particles Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full floating-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Magnetic Effect */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Spotlight Effect */}
        <div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out',
          }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-12">
            {/* Animated Badge with Neumorphism */}
            <div className="inline-flex items-center gap-4 neumorphic px-8 py-4 bounce-in">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <span className="text-sm text-gray-200 font-semibold tracking-wide">
                NEXT-GEN DEVELOPMENT PLATFORM
              </span>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-6 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Main Headline - Ultra Modern */}
            <div className="space-y-6 reveal-up">
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none">
                <div className="text-stroke mb-6 zoom-in">BUILD</div>
                <div className="relative inline-block">
                  <span className="gradient-text-animated text-glow-animated bounce-in stagger-1">
                    AUTOMATE
                  </span>
                  <div className="absolute -inset-4 bg-purple-500/20 blur-3xl -z-10 animate-pulse" />
                </div>
                <div className="holographic bg-clip-text text-transparent mt-6 rotate-in">
                  SCALE
                </div>
              </h1>
            </div>

            {/* Subheadline with Shimmer */}
            <div className="max-w-5xl mx-auto fade-in-left stagger-3">
              <p className="text-3xl md:text-4xl text-gray-300 leading-relaxed shimmer">
                Transform your business with{' '}
                <span className="text-gradient-animated font-bold">AI-powered automation</span>,{' '}
                <span className="holographic bg-clip-text text-transparent font-bold">cutting-edge web apps</span>, and{' '}
                <span className="text-shine font-bold">stunning mobile experiences</span>
              </p>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-12 fade-in-right stagger-4">
              <Button
                onClick={() => onNavigate('/contact')}
                size="lg"
                className="group relative overflow-hidden liquid-bg text-white text-2xl px-16 py-10 rounded-3xl glow-pulse magnetic-glow elastic-hover"
              >
                <span className="relative z-10 flex items-center gap-4">
                  <Rocket size={32} className="group-hover:rotate-45 transition-transform duration-500" />
                  Launch Your Project
                  <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button
                onClick={() => onNavigate('/portfolio')}
                size="lg"
                variant="outline"
                className="neumorphic text-white text-2xl px-16 py-10 rounded-3xl group hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Explore Magic
                  <Sparkles size={24} className="group-hover:rotate-180 transition-transform duration-700" />
                </span>
              </Button>
            </div>

            {/* Floating Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20 max-w-5xl mx-auto">
              {[
                { icon: Award, label: '100+', sublabel: 'Projects', gradient: 'from-blue-500 to-cyan-500', delay: '0.5s' },
                { icon: Users, label: '50+', sublabel: 'Happy Clients', gradient: 'from-purple-500 to-pink-500', delay: '0.6s' },
                { icon: Star, label: '4.9★', sublabel: 'Avg Rating', gradient: 'from-yellow-500 to-orange-500', delay: '0.7s' },
                { icon: TrendingUp, label: '300%', sublabel: 'ROI Growth', gradient: 'from-green-500 to-teal-500', delay: '0.8s' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass-morphism-ultra rounded-3xl p-8 zoom-in group hover:scale-110 transition-all duration-500"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500`}>
                    <stat.icon className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern-dots opacity-30 pointer-events-none" />
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-40 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-24 reveal-up">
            <div className="inline-flex items-center gap-3 glass-morphism-ultra px-6 py-3 rounded-full mb-8">
              <Layers className="text-blue-400" size={20} />
              <span className="text-gray-300 text-sm font-semibold">OUR CAPABILITIES</span>
            </div>
            <h2 className="text-7xl md:text-8xl font-black text-white mb-8">
              <span className="gradient-text-animated">Revolutionary</span> Solutions
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Industry-leading technology meets exceptional design
            </p>
          </div>

          {/* Neumorphic Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Chatbot - Featured Large Card */}
            <div 
              className="lg:col-span-2 neumorphic p-12 relative overflow-hidden group cursor-pointer spotlight"
              onClick={() => onNavigate('/ai-chatbot-solutions')}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-24 h-24 holographic rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-700">
                      <Bot className="text-white" size={48} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-semibold">LIVE AI</span>
                      </div>
                      <div className="text-white/60 text-sm">24/7 Active</div>
                    </div>
                  </div>

                  <h3 className="text-5xl font-black text-white mb-6 group-hover:text-glow-animated">
                    AI Chatbot Solutions
                  </h3>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Revolutionize customer engagement with intelligent automation across 
                    <span className="text-blue-400 font-semibold"> all platforms</span>. 
                    Facebook, WhatsApp, Instagram, and web - all unified.
                  </p>

                  <Button className="holographic text-white text-lg px-10 py-6 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    Explore AI Packages
                    <ArrowRight className="ml-3" size={20} />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, label: 'Smart Lead Capture', color: 'blue' },
                    { icon: Zap, label: 'Instant Response', color: 'yellow' },
                    { icon: Globe, label: 'Multi-Channel', color: 'purple' },
                    { icon: TrendingUp, label: '3x Conversion', color: 'green' },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="neumorphic-inset p-6 hover:scale-105 transition-transform duration-300 group/card"
                    >
                      <item.icon className={`text-${item.color}-400 mb-3 group-hover/card:scale-110 transition-transform`} size={28} />
                      <div className="text-white font-semibold text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 glass-morphism-ultra px-5 py-2 rounded-full text-sm text-white font-semibold rotate-slow">
                🔥 Most Popular
              </div>
            </div>

            {/* Web Development */}
            <div 
              className="neumorphic p-10 relative overflow-hidden group cursor-pointer spotlight"
              onClick={() => onNavigate('/web-development')}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-180 transition-transform duration-700">
                  <Code className="text-white" size={36} />
                </div>
                
                <h3 className="text-4xl font-black text-white mb-4">Web Development</h3>
                
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Lightning-fast, SEO-optimized websites with WordPress, Laravel, Next.js & MERN stack.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Cpu, text: 'Cutting-Edge Tech' },
                    { icon: Zap, text: 'Blazing Performance' },
                    { icon: Shield, text: 'Enterprise Security' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="neumorphic-inset p-2 rounded-lg">
                        <item.icon className="text-purple-400" size={18} />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="text-purple-400 font-semibold group-hover:translate-x-3 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight size={20} />
                </div>
              </div>
            </div>

            {/* App Development */}
            <div 
              className="neumorphic p-10 relative overflow-hidden group cursor-pointer spotlight"
              onClick={() => onNavigate('/app-development')}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mb-8 group-hover:-rotate-180 transition-transform duration-700">
                  <Smartphone className="text-white" size={36} />
                </div>
                
                <h3 className="text-4xl font-black text-white mb-4">App Development</h3>
                
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Native iOS & Android apps with stunning UX and powerful backend integration.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Smartphone, text: 'Native Performance' },
                    { icon: Shield, text: 'Secure Payments' },
                    { icon: Database, text: 'Real-time Sync' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="neumorphic-inset p-2 rounded-lg">
                        <item.icon className="text-green-400" size={18} />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="text-green-400 font-semibold group-hover:translate-x-3 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 neumorphic p-10 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '300%', label: 'Average ROI' },
                { value: '10K+', label: 'Active Users' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '<100ms', label: 'Response Time' },
              ].map((stat, i) => (
                <div key={i} className="bounce-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-5xl font-black gradient-text-animated mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-7xl font-black text-white mb-6">
              Client <span className="gradient-text-animated">Success</span> Stories
            </h2>
            <p className="text-2xl text-gray-400">Real results, real impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'CEO, StyleHub',
                avatar: 'SM',
                text: 'Their AI chatbot increased our response rate by 300%. Absolutely transformative!',
                gradient: 'from-blue-500 to-cyan-500',
                stat: '+300%',
              },
              {
                name: 'James Parker',
                role: 'Founder, TechConsult',
                avatar: 'JP',
                text: 'The web platform handles 10K+ concurrent users flawlessly. Outstanding engineering.',
                gradient: 'from-purple-500 to-pink-500',
                stat: '10K+ Users',
              },
              {
                name: 'Lisa Rodriguez',
                role: 'CTO, HealthConnect',
                avatar: 'LR',
                text: 'Our mobile app has 4.9★ rating on both stores. The UX is simply phenomenal.',
                gradient: 'from-green-500 to-teal-500',
                stat: '4.9★',
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="neumorphic p-8 hover:scale-105 transition-all duration-500 group spotlight"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400 group-hover:scale-125 transition-transform" size={20} style={{ transitionDelay: `${i * 0.05}s` }} />
                  ))}
                </div>
                
                <p className="text-xl text-white mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-bold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className={`text-3xl font-black bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-transparent`}>
                    {testimonial.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Immersive */}
      <section className="py-40 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="neumorphic p-20 relative overflow-hidden rounded-[3rem]">
            <div className="absolute inset-0 liquid-bg opacity-10" />
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl morph-blob" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl morph-blob" style={{ animationDelay: '4s' }} />
            
            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-4 glass-morphism-ultra px-8 py-4 rounded-full mb-10 bounce-in">
                <Sparkles className="text-yellow-400" size={24} />
                <span className="text-white font-bold text-lg">LIMITED TIME OFFER</span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-bold">
                  Free Consultation
                </span>
              </div>

              <h2 className="text-7xl md:text-8xl font-black text-white mb-10">
                Ready to <span className="gradient-text-animated">Dominate</span> Your Market?
              </h2>
              
              <p className="text-2xl text-gray-300 mb-16 leading-relaxed">
                Join 100+ industry leaders who transformed their business with our solutions.<br />
                <span className="text-gradient-animated font-semibold">Free consultation • Lightning-fast delivery • 24/7 support • Guaranteed results</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="holographic text-white text-2xl px-20 py-12 rounded-3xl group glow-pulse elastic-hover"
                >
                  <Rocket className="mr-4 group-hover:rotate-45 transition-transform duration-500" size={32} />
                  Launch Your Project
                  <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={32} />
                </Button>
                
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  size="lg"
                  variant="outline"
                  className="neumorphic text-white text-2xl px-20 py-12 rounded-3xl hover:scale-105 transition-all"
                >
                  View Portfolio
                  <Sparkles className="ml-4" size={28} />
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
                {[
                  'No Credit Card Required',
                  '24-Hour Response',
                  '100% Satisfaction Guarantee',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-400" size={20} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
