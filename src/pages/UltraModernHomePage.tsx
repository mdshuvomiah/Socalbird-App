import { ArrowRight, Sparkles, Zap, Bot, Code, Smartphone, Star, CheckCircle2, Rocket, Target, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '../components/ui/button';

interface UltraModernHomePageProps {
  onNavigate: (page: string) => void;
}

export function UltraModernHomePage({ onNavigate }: UltraModernHomePageProps) {
  return (
    <div className="dark overflow-hidden">
      {/* Animated Morphing Background Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 morph-blob blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/20 morph-blob blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-pink-500/15 morph-blob blur-3xl" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 morph-blob blur-3xl" style={{ animationDelay: '6s' }} />
      </div>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 glass-dark px-6 py-3 rounded-full slide-up neon-border">
              <div className="relative">
                <Sparkles className="text-yellow-400" size={20} />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="text-yellow-400 opacity-50" size={20} />
                </div>
              </div>
              <span className="text-sm text-gray-200 font-medium">Next-Gen Development Solutions</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>

            {/* Main Heading with Shine Effect */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none scale-in">
              <div className="text-shine mb-4">Build.</div>
              <div className="gradient-text-animated mb-4">Automate.</div>
              <div className="holographic bg-clip-text text-transparent">Scale.</div>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed slide-up" style={{ animationDelay: '0.2s' }}>
              Transform your business with <span className="text-blue-400 font-semibold">AI-powered</span> solutions, 
              <span className="text-purple-400 font-semibold"> cutting-edge</span> web apps, and 
              <span className="text-pink-400 font-semibold"> stunning</span> mobile experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                onClick={() => onNavigate('/contact')}
                size="lg"
                className="group relative overflow-hidden liquid-bg text-white text-xl px-12 py-8 rounded-2xl pulse-glow"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                  Start Your Journey
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
              
              <Button
                onClick={() => onNavigate('/portfolio')}
                size="lg"
                variant="outline"
                className="glass-dark border-2 border-white/20 hover:border-white/40 text-white text-xl px-12 py-8 rounded-2xl group"
              >
                View Our Magic
                <Sparkles size={20} className="ml-2 group-hover:rotate-180 transition-transform duration-500" />
              </Button>
            </div>

            {/* Trust Indicators - Animated */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
              {[
                { icon: Award, label: '100+ Projects', color: 'text-blue-400' },
                { icon: Users, label: '50+ Clients', color: 'text-purple-400' },
                { icon: Star, label: '4.9★ Rating', color: 'text-yellow-400' },
                { icon: TrendingUp, label: '300% ROI', color: 'text-green-400' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="glass-dark rounded-2xl p-6 scale-in hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  <item.icon className={`${item.color} mx-auto mb-2`} size={32} />
                  <div className="text-white font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Unique Card Grid Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Our <span className="gradient-text-animated">Superpowers</span>
            </h2>
            <p className="text-2xl text-gray-400">Cutting-edge solutions for modern businesses</p>
          </div>

          {/* Advanced Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-fr">
            {/* AI Chatbot - Large Featured */}
            <div 
              className="lg:col-span-8 lg:row-span-2 glass-dark rounded-[2rem] p-12 relative overflow-hidden group cursor-pointer tilt-3d"
              onClick={() => onNavigate('/ai-chatbot-solutions')}
            >
              <div className="absolute inset-0 liquid-bg opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-24 h-24 holographic rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Bot className="text-white" size={48} />
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm flex items-center gap-2 justify-end mb-2">
                      <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span>Live AI</span>
                    </div>
                    <div className="text-white/60 text-sm">24/7 Active</div>
                  </div>
                </div>

                <h3 className="text-5xl font-bold text-white mb-6 group-hover:text-shine transition-all">
                  AI Chatbot Solutions
                </h3>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Automate customer engagement across <span className="text-blue-400 font-semibold">all channels</span>. 
                  Facebook, WhatsApp, Instagram, and your website. Monthly subscriptions, full support, unlimited possibilities.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Target, label: 'Lead Capture', color: 'blue' },
                    { icon: Zap, label: 'Instant Reply', color: 'yellow' },
                    { icon: Users, label: 'Multi-Channel', color: 'purple' },
                    { icon: TrendingUp, label: '3x ROI', color: 'green' },
                  ].map((item, i) => (
                    <div key={i} className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                      <item.icon className={`text-${item.color}-400 mb-2`} size={24} />
                      <div className="text-white text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>

                <Button className="holographic text-white text-lg px-8 py-6 group-hover:scale-110 transition-transform">
                  Explore AI Packages
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 glass px-4 py-2 rounded-full text-sm text-white rotate-slow">
                🔥 Most Popular
              </div>
            </div>

            {/* Web Development */}
            <div 
              className="lg:col-span-4 glass-dark rounded-[2rem] p-8 relative overflow-hidden group cursor-pointer skew-on-hover"
              onClick={() => onNavigate('/web-development')}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-180 transition-transform duration-700">
                  <Code className="text-white" size={36} />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-gray-400 mb-6">
                  Lightning-fast websites with WordPress, Laravel, Next.js & MERN stack.
                </p>

                <div className="space-y-2 mb-6">
                  {['SEO Optimized', 'Blazing Fast', 'Fully Responsive'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-purple-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight size={18} />
                </div>
              </div>
            </div>

            {/* App Development */}
            <div 
              className="lg:col-span-4 glass-dark rounded-[2rem] p-8 relative overflow-hidden group cursor-pointer skew-on-hover"
              onClick={() => onNavigate('/app-development')}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-180 transition-transform duration-700">
                  <Smartphone className="text-white" size={36} />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">App Development</h3>
                <p className="text-gray-400 mb-6">
                  Native iOS & Android apps with stunning UX and powerful features.
                </p>

                <div className="space-y-2 mb-6">
                  {['Native Speed', 'Secure Payments', 'Push Notifications'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-green-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight size={18} />
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="lg:col-span-8 glass-dark rounded-[2rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 aurora opacity-50" />
              
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '300%', label: 'Avg ROI', color: 'blue' },
                  { value: '10K+', label: 'Active Users', color: 'purple' },
                  { value: '99.9%', label: 'Uptime', color: 'green' },
                  { value: '<100ms', label: 'Response', color: 'cyan' },
                ].map((stat, i) => (
                  <div key={i} className="scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className={`text-5xl font-bold gradient-text-animated mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-6">
              Client <span className="gradient-text-animated">Success</span> Stories
            </h2>
            <p className="text-2xl text-gray-400">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'CEO, StyleHub',
                avatar: 'SM',
                text: 'Our customer response rate jumped 300% with their AI chatbot. Game changer!',
                gradient: 'from-blue-500 to-cyan-500',
                stat: '300% ↑',
              },
              {
                name: 'James Parker',
                role: 'Founder, TechConsult',
                avatar: 'JP',
                text: 'The web app they built handles 10K+ users with zero downtime. Incredible work.',
                gradient: 'from-purple-500 to-pink-500',
                stat: '10K+ Users',
              },
              {
                name: 'Lisa Rodriguez',
                role: 'CTO, HealthConnect',
                avatar: 'LR',
                text: 'Our mobile app has 4.8★ on both stores. Beautiful design, rock-solid code.',
                gradient: 'from-green-500 to-teal-500',
                stat: '4.8★ Rating',
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-dark rounded-[2rem] p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform`} />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
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
                        <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className={`text-3xl font-bold bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-transparent`}>
                      {testimonial.stat}
                    </div>
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
          <div className="glass-dark rounded-[3rem] p-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 liquid-bg opacity-20" />
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl morph-blob" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl morph-blob" style={{ animationDelay: '4s' }} />
            
            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full mb-8">
                <Sparkles className="text-yellow-400" size={20} />
                <span className="text-white">Limited Time Offer</span>
                <span className="px-3 py-1 bg-green-500 rounded-full text-white text-sm font-semibold">Free Consultation</span>
              </div>

              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
                Ready to <span className="gradient-text-animated">Transform</span> Your Business?
              </h2>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Join 100+ successful companies who scaled their business with our cutting-edge solutions. 
                Free consultation • Fast delivery • 24/7 support • Guaranteed results
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="holographic text-white text-2xl px-16 py-10 rounded-2xl group pulse-glow"
                >
                  <Rocket className="mr-3 group-hover:rotate-45 transition-transform duration-300" size={28} />
                  Get Started Free
                  <span className="ml-2 text-sm">বিনামূল্যে শুরু করুন</span>
                </Button>
                
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  size="lg"
                  variant="outline"
                  className="glass-dark border-2 border-white/30 hover:border-white/60 text-white text-2xl px-16 py-10 rounded-2xl"
                >
                  View Portfolio
                  <ArrowRight className="ml-3" size={28} />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 mt-12 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span>Response in 24 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
