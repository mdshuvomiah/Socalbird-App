import { ArrowRight, Sparkles, Zap, Shield, TrendingUp, Bot, Code, Smartphone, Star, CheckCircle2, Clock, Users, Target, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

interface ModernHomePageProps {
  onNavigate: (page: string) => void;
}

export function ModernHomePage({ onNavigate }: ModernHomePageProps) {
  return (
    <div className="dark">
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 gradient-mesh opacity-50 pointer-events-none" />
      
      {/* Split Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Sparkles className="text-yellow-400" size={18} />
                <span className="text-sm text-gray-300">Premium Development & AI Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Build.</span>
                <br />
                <span className="text-gradient-rainbow">Automate.</span>
                <br />
                <span className="text-white">Scale.</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Transform your business with cutting-edge web apps, mobile solutions, and AI chatbots. 
                We build the future, <span className="text-blue-400 font-semibold">today</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="relative group overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50 text-lg px-8 py-6"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Rocket size={20} />
                    Get Started Free
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  size="lg"
                  variant="outline"
                  className="glass border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6"
                >
                  View Our Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span className="text-gray-300">100+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span className="text-gray-300">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span className="text-gray-300">4.9★ Rating</span>
                </div>
              </div>
            </div>

            {/* Right Bento Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large Card */}
              <div className="col-span-2 glass rounded-3xl p-8 hover:scale-105 transition-transform duration-300 card-3d">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Bot className="text-white" size={28} />
                  </div>
                  <span className="text-green-400 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Chatbots</h3>
                <p className="text-gray-400">24/7 automated customer engagement across all channels</p>
              </div>

              {/* Small Card 1 */}
              <div className="glass rounded-3xl p-6 hover:scale-105 transition-transform duration-300 card-3d">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Web Dev</h3>
                <p className="text-gray-400 text-sm">Modern & Fast</p>
              </div>

              {/* Small Card 2 */}
              <div className="glass rounded-3xl p-6 hover:scale-105 transition-transform duration-300 card-3d">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Mobile Apps</h3>
                <p className="text-gray-400 text-sm">iOS & Android</p>
              </div>

              {/* Stats Card */}
              <div className="col-span-2 glass rounded-3xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gradient-rainbow">300%</div>
                    <div className="text-gray-400 text-sm">ROI Average</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-rainbow">10K+</div>
                    <div className="text-gray-400 text-sm">Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-rainbow">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Layout */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What We <span className="text-gradient-rainbow">Create</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cutting-edge solutions designed to accelerate your business growth
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Chatbot - Large */}
            <div 
              className="lg:col-span-2 lg:row-span-2 glass rounded-3xl p-10 hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden"
              onClick={() => onNavigate('/ai-chatbot-solutions')}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="text-white" size={40} />
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-4">AI Chatbot Solutions</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-xl">
                  Automate customer engagement on Facebook Messenger, WhatsApp, Instagram, and your website. 
                  Monthly subscriptions with full support.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Target, label: 'Lead Capture' },
                    { icon: Clock, label: '24/7 Available' },
                    { icon: Users, label: 'Multi-Channel' },
                    { icon: Zap, label: 'Instant Response' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 glass p-3 rounded-xl">
                      <item.icon className="text-blue-400" size={20} />
                      <span className="text-white">{item.label}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  Explore Packages
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>

            {/* Web Development */}
            <div 
              className="glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden"
              onClick={() => onNavigate('/web-development')}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Code className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-gray-400 mb-6">
                  WordPress, Laravel, Next.js & MERN stack. Fast, secure, scalable.
                </p>

                <div className="space-y-2 mb-6">
                  {['SEO Optimized', 'Responsive Design', 'Lightning Fast'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="text-purple-400" size={16} />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                  Learn More →
                </Button>
              </div>
            </div>

            {/* App Development */}
            <div 
              className="glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden"
              onClick={() => onNavigate('/app-development')}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform">
                  <Smartphone className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">App Development</h3>
                <p className="text-gray-400 mb-6">
                  Native iOS & Android apps with beautiful UX and powerful features.
                </p>

                <div className="space-y-2 mb-6">
                  {['Native Performance', 'Secure Payments', 'Push Notifications'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-400" size={16} />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="text-green-400 hover:text-green-300 p-0">
                  Learn More →
                </Button>
              </div>
            </div>

            {/* CTA Card */}
            <div className="lg:col-span-3 glass rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Get a free consultation and discover how we can help you grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => onNavigate('/contact')}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                  <Button
                    onClick={() => onNavigate('/ai-chatbot-solutions')}
                    size="lg"
                    variant="outline"
                    className="glass border-white/20 hover:bg-white/10 text-white"
                  >
                    View Chatbot Packages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline - Modern Cards */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient-rainbow">Process</span>
            </h2>
            <p className="text-xl text-gray-400">
              From idea to launch in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We dive deep into your business goals and requirements',
                gradient: 'from-blue-500 to-cyan-500',
                icon: Target,
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create beautiful interfaces and seamless experiences',
                gradient: 'from-purple-500 to-pink-500',
                icon: Sparkles,
              },
              {
                step: '03',
                title: 'Develop',
                description: 'Build with cutting-edge technology and best practices',
                gradient: 'from-green-500 to-teal-500',
                icon: Code,
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploy, optimize, and support your success',
                gradient: 'from-orange-500 to-red-500',
                icon: Rocket,
              },
            ].map((item, index) => (
              <div key={index} className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  
                  <div className={`text-6xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent opacity-50 mb-4`}>
                    {item.step}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Horizontal Scroll */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Client <span className="text-gradient-rainbow">Love</span>
            </h2>
            <p className="text-xl text-gray-400">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'CEO, StyleHub',
                avatar: 'SM',
                text: 'The AI chatbot transformed our customer service. 300% increase in response rate!',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                name: 'James Parker',
                role: 'Founder, TechConsult',
                avatar: 'JP',
                text: 'Delivered ahead of schedule. The code quality and performance are exceptional.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                name: 'Lisa Rodriguez',
                role: 'CTO, HealthConnect',
                avatar: 'LR',
                text: 'Our app has 4.8★ on both stores. Beautiful UX and rock-solid backend.',
                gradient: 'from-green-500 to-teal-500',
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="glass rounded-[3rem] p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Start Your Project <span className="text-gradient-rainbow">Today</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Join 100+ satisfied clients who transformed their business with our solutions. 
                Free consultation • Fast delivery • 24/7 support
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50 text-lg px-10 py-7"
                >
                  <Rocket className="mr-2" size={24} />
                  Get Started Free | বিনামূল্যে শুরু করুন
                </Button>
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  size="lg"
                  variant="outline"
                  className="glass border-white/20 hover:bg-white/10 text-white text-lg px-10 py-7"
                >
                  View Portfolio
                  <ArrowRight className="ml-2" size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
