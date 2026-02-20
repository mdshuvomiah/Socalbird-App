import { ArrowRight, Zap, Bot, Code, Smartphone, Star, TrendingUp, Target, Shield, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

interface BrutalistHomePageProps {
  onNavigate: (page: string) => void;
}

export function BrutalistHomePage({ onNavigate }: BrutalistHomePageProps) {
  return (
    <div className="dark bg-black text-white overflow-hidden">
      {/* Hero Section - Asymmetric Bold */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 noise-texture scanlines">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFEB3B] opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#FF006E] opacity-20 blur-3xl" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Rotating Badge */}
          <div className="absolute top-0 right-10 w-32 h-32 retro-gradient-sunset rounded-full flex items-center justify-center rotate-badge border-4 border-black">
            <div className="text-center font-black text-xs">
              <div>SINCE</div>
              <div className="text-2xl">2020</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Side - Text */}
            <div className="lg:col-span-7 space-y-10 slide-in-bottom">
              {/* Label */}
              <div className="inline-block brutalist-border bg-[#FFEB3B] px-6 py-3 pop">
                <span className="font-black text-black text-sm tracking-wider">
                  ⚡ PREMIUM DEVELOPMENT AGENCY
                </span>
              </div>

              {/* Headline - Stacked Bold */}
              <div className="space-y-2">
                <h1 className="text-8xl md:text-9xl font-black leading-none">
                  <div className="text-[#FFEB3B] text-brutalist slide-in-top">BUILD</div>
                  <div className="text-white italic skew-right slide-in-top delay-200">AUTOMATE</div>
                  <div className="retro-gradient-cyber bg-clip-text text-transparent slide-in-top delay-400">SCALE</div>
                </h1>
              </div>

              {/* Description */}
              <div className="bg-white text-black p-8 brutalist-border-orange max-w-2xl slide-in-bottom delay-300">
                <p className="text-2xl font-bold leading-relaxed">
                  We build <span className="bg-[#FFEB3B] px-2">KILLER</span> websites, 
                  <span className="bg-[#FF006E] text-white px-2 mx-1">AI CHATBOTS</span>, 
                  and <span className="bg-[#00F5FF] px-2">MOBILE APPS</span> that make money.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-6 slide-in-bottom delay-500">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="retro-gradient-sunset text-black font-black text-xl px-12 py-8 brutalist-border hover:translate-x-2 hover:translate-y-2 transition-transform shake-hover"
                >
                  GET STARTED NOW →
                </Button>
                
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  size="lg"
                  className="bg-black text-[#00F5FF] border-4 border-[#00F5FF] font-black text-xl px-12 py-8 hover:bg-[#00F5FF] hover:text-black transition-all"
                >
                  SEE OUR WORK
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl slide-in-bottom delay-700">
                {[
                  { num: '100+', label: 'PROJECTS' },
                  { num: '50+', label: 'CLIENTS' },
                  { num: '4.9★', label: 'RATING' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#FF006E] p-4 brutalist-border text-center pop" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
                    <div className="text-4xl font-black text-white">{stat.num}</div>
                    <div className="text-xs font-bold text-black mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Service Cards - Stacked */}
              <div className="bg-[#00F5FF] p-8 brutalist-border-cyan skew-left pop delay-300">
                <div className="unskew">
                  <Bot className="text-black mb-4" size={48} />
                  <h3 className="text-3xl font-black text-black mb-2">AI CHATBOTS</h3>
                  <p className="text-black font-bold">24/7 automation across all platforms</p>
                  <div className="mt-4 inline-block bg-[#FF006E] text-white px-4 py-2 font-black text-sm">
                    MOST POPULAR →
                  </div>
                </div>
              </div>

              <div className="bg-[#C1FF72] p-8 brutalist-border skew-right pop delay-400">
                <div className="unskew">
                  <Code className="text-black mb-4" size={48} />
                  <h3 className="text-3xl font-black text-black mb-2">WEB DEV</h3>
                  <p className="text-black font-bold">Fast, SEO-ready, conversion-focused</p>
                </div>
              </div>

              <div className="bg-[#FF6B35] p-8 brutalist-border-red pop delay-500">
                <div className="">
                  <Smartphone className="text-white mb-4" size={48} />
                  <h3 className="text-3xl font-black text-white mb-2">MOBILE APPS</h3>
                  <p className="text-white font-bold">iOS & Android, native speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zigzag Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#FFEB3B]" style={{
          clipPath: 'polygon(0 100%, 5% 0, 10% 100%, 15% 0, 20% 100%, 25% 0, 30% 100%, 35% 0, 40% 100%, 45% 0, 50% 100%, 55% 0, 60% 100%, 65% 0, 70% 100%, 75% 0, 80% 100%, 85% 0, 90% 100%, 95% 0, 100% 100%)'
        }} />
      </section>

      {/* Services Grid - Bold Layout */}
      <section className="py-32 px-4 relative bg-[#FFEB3B] diagonal-cut-both">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20 slide-in-top">
            <div className="inline-block bg-black text-[#FFEB3B] px-8 py-4 brutalist-border-orange mb-6">
              <h2 className="text-6xl md:text-7xl font-black">
                WHAT WE DO
              </h2>
            </div>
            <p className="text-3xl font-black text-black max-w-3xl mx-auto">
              PREMIUM SOLUTIONS THAT <span className="bg-[#FF006E] text-white px-3">DOMINATE</span> THE MARKET
            </p>
          </div>

          {/* Services - Asymmetric Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Chatbot - Large */}
            <div 
              className="md:col-span-2 bg-black p-12 brutalist-border-red cursor-pointer hover:translate-x-3 hover:translate-y-3 transition-transform noise-texture slide-in-bottom"
              onClick={() => onNavigate('/ai-chatbot-solutions')}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="inline-block bg-[#FF006E] text-white px-4 py-2 font-black text-sm mb-6">
                    🔥 HOT
                  </div>
                  <h3 className="text-5xl font-black text-[#FFEB3B] mb-4 bold-underline">
                    AI CHATBOT AUTOMATION
                  </h3>
                  <p className="text-2xl text-white font-bold mb-8">
                    Automate customer support on Facebook, WhatsApp, Instagram & your website. 
                    <span className="text-[#00F5FF]"> 24/7 engagement</span>, 
                    <span className="text-[#C1FF72]"> instant responses</span>, 
                    <span className="text-[#FFEB3B]"> 3X conversions</span>.
                  </p>

                  <Button className="retro-gradient-cyber text-white font-black text-lg px-8 py-6 brutalist-border">
                    VIEW PACKAGES →
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, label: 'LEAD CAPTURE', color: '#FFEB3B' },
                    { icon: Zap, label: 'INSTANT', color: '#00F5FF' },
                    { icon: TrendingUp, label: '3X ROI', color: '#C1FF72' },
                    { icon: Shield, label: 'SECURE', color: '#FF6B35' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-6 brutalist-border text-center pop" style={{ animationDelay: `${i * 0.1}s` }}>
                      <item.icon className="mx-auto mb-2" size={32} style={{ color: item.color }} />
                      <div className="text-black font-black text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Web Dev */}
            <div 
              className="bg-white p-10 brutalist-border cursor-pointer hover:translate-x-3 hover:translate-y-3 transition-transform slide-in-bottom delay-200"
              onClick={() => onNavigate('/web-development')}
            >
              <Code className="mb-6" size={64} />
              <h3 className="text-4xl font-black mb-4">WEB DEVELOPMENT</h3>
              <p className="text-xl font-bold mb-6 text-gray-800">
                WordPress • Laravel • Next.js • MERN Stack
              </p>
              <div className="space-y-2 mb-6">
                {['⚡ Lightning Fast', '🔍 SEO Optimized', '📱 Responsive'].map((item, i) => (
                  <div key={i} className="bg-[#FFEB3B] px-4 py-2 font-black inline-block mr-2">
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-2xl font-black">LEARN MORE →</div>
            </div>

            {/* App Dev */}
            <div 
              className="bg-[#FF006E] p-10 brutalist-border-cyan cursor-pointer hover:translate-x-3 hover:translate-y-3 transition-transform slide-in-bottom delay-300"
              onClick={() => onNavigate('/app-development')}
            >
              <Smartphone className="text-white mb-6" size={64} />
              <h3 className="text-4xl font-black text-white mb-4">MOBILE APPS</h3>
              <p className="text-xl font-bold text-white mb-6">
                Native iOS & Android with killer UX
              </p>
              <div className="space-y-2 mb-6">
                {['📱 Native', '🔐 Secure', '🚀 Fast'].map((item, i) => (
                  <div key={i} className="bg-white text-black px-4 py-2 font-black inline-block mr-2">
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-2xl font-black text-white">LEARN MORE →</div>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="mt-16 bg-black p-10 brutalist-border-orange slide-in-bottom delay-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '300%', label: 'AVG ROI' },
                { value: '10K+', label: 'USERS' },
                { value: '99.9%', label: 'UPTIME' },
                { value: '<100ms', label: 'SPEED' },
              ].map((stat, i) => (
                <div key={i} className="pop" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                  <div className="text-6xl font-black text-[#FFEB3B]">{stat.value}</div>
                  <div className="text-white font-bold mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Overlapping */}
      <section className="py-32 px-4 relative bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 slide-in-top">
            <h2 className="text-7xl font-black text-white mb-6">
              CLIENT <span className="retro-gradient-sunset bg-clip-text text-transparent">WINS</span>
            </h2>
            <p className="text-2xl font-bold text-gray-400">REAL RESULTS, REAL MONEY</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'SARAH M.',
                role: 'CEO, StyleHub',
                text: '300% increase in response rate. The chatbot is a GAME CHANGER!',
                color: '#FFEB3B',
                stat: '+300%',
              },
              {
                name: 'JAMES P.',
                role: 'Founder, TechConsult',
                text: '10K+ concurrent users, ZERO downtime. Absolutely solid engineering.',
                color: '#00F5FF',
                stat: '10K+ USERS',
              },
              {
                name: 'LISA R.',
                role: 'CTO, HealthConnect',
                text: '4.9★ rating on both stores. The UX is PHENOMENAL!',
                color: '#FF006E',
                stat: '4.9★',
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 brutalist-border slide-in-bottom noise-texture"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  borderColor: testimonial.color 
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current" size={20} style={{ color: testimonial.color }} />
                  ))}
                </div>
                
                <p className="text-xl font-bold text-black mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between border-t-4 border-black pt-4">
                  <div>
                    <div className="font-black text-black text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 font-bold text-sm">{testimonial.role}</div>
                  </div>
                  
                  <div className="text-4xl font-black" style={{ color: testimonial.color }}>
                    {testimonial.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Bold */}
      <section className="py-40 px-4 relative retro-gradient-sunset noise-texture vhs-effect">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-12 slide-in-bottom">
            {/* Blinking Badge */}
            <div className="inline-block bg-black text-[#FFEB3B] px-8 py-4 brutalist-border-red">
              <span className="font-black text-xl">
                ⚡ LIMITED SLOTS AVAILABLE <span className="blink">●</span>
              </span>
            </div>

            <h2 className="text-7xl md:text-8xl font-black text-black leading-tight">
              READY TO <br />
              <span className="text-white text-brutalist">DOMINATE</span><br />
              YOUR MARKET?
            </h2>
            
            <p className="text-3xl font-black text-black max-w-4xl mx-auto leading-relaxed">
              Join <span className="bg-black text-[#FFEB3B] px-3">100+</span> successful companies. 
              Free consultation • Fast delivery • Guaranteed results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Button
                onClick={() => onNavigate('/contact')}
                size="lg"
                className="bg-black text-[#FFEB3B] font-black text-3xl px-16 py-12 brutalist-border-cyan hover:translate-x-4 hover:translate-y-4 transition-transform shake-hover"
              >
                START NOW →
                <br />
                <span className="text-sm">বিনামূল্যে শুরু করুন</span>
              </Button>
              
              <Button
                onClick={() => onNavigate('/portfolio')}
                size="lg"
                className="bg-white text-black font-black text-3xl px-16 py-12 brutalist-border hover:bg-black hover:text-white transition-all"
              >
                SEE WORK
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {['✓ NO BS', '✓ FAST DELIVERY', '✓ 100% SATISFACTION'].map((text, i) => (
                <div key={i} className="bg-black text-white px-6 py-3 brutalist-border font-black pop" style={{ animationDelay: `${i * 0.1}s` }}>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
