import { ArrowRight, Check, Star, MessageSquare, Code, Smartphone, TrendingUp, Shield, Zap, Users, Award, Clock, ChevronRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { RealImpactSection } from '../components/RealImpactSection';
import { ModernProcessSection } from '../components/ModernProcessSection';
import { ModernWhyChooseSection } from '../components/ModernWhyChooseSection';
import { CreativeServicesSection } from '../components/CreativeServicesSection';
import { ModernFAQSection } from '../components/ModernFAQSection';
import { ProfessionalWhyChooseSection } from '../components/ProfessionalWhyChooseSection';
import { UniqueModernWhyChooseSection } from '../components/UniqueModernWhyChooseSection';
import { UniqueTeamSection } from '../components/UniqueTeamSection';
import { ModernTeamSection } from '../components/ModernTeamSection';
import { ProfessionalTeamSection } from '../components/ProfessionalTeamSection';
import { useContent } from '../admin/ContentContext';

interface ProfessionalHomePageProps {
  onNavigate: (page: string) => void;
}

export function ProfessionalHomePage({ onNavigate }: ProfessionalHomePageProps) {
  const { getSectionContent } = useContent();

  const __s = (val: any) => (val === null || val === undefined || typeof val === 'object') ? '' : String(val);
  const ensureString = __s;
  
  // Get content from context
  const heroContent = getSectionContent('home', 'hero') || {
    badge: 'Premium Development Agency',
    title: 'Build & Scale With',
    titleHighlight: 'AI Automation',
    subtitle: 'Expert Web Development, AI Chatbot Solutions, and Mobile Apps for small to mid-sized businesses, e-commerce, restaurants, and scaling startups.',
    cta1Text: 'Get Started - Free Consultation',
    cta2Text: 'View Portfolio',
    rightCard: {
      badge: 'Complete Tech Stack',
      frameworks: ['React', 'Next.js', 'Node.js', 'Tailwind', 'Supabase'],
      stats: [
        { value: '100+', label: 'Projects' },
        { value: '99%', label: 'Success' },
        { value: '24/7', label: 'Support' }
      ]
    }
  };

  const coreServicesContent = getSectionContent('home', 'coreServices') || {
    badge: 'Core Services',
    title: 'Solutions Designed for',
    titleHighlight: 'Exponential Growth',
    subtitle: 'We mix cutting-edge technology with proven business strategies to deliver results that actually matter.'
  };

  const defaultCoreServices = [
    {
      title: 'AI Chatbot Solutions',
      description: '24/7 automated sales and support agents that talk to your customers on Messenger, WhatsApp, and Instagram.',
      icon: MessageSquare,
      color: 'from-cyan-400 to-blue-500',
      features: ['Lead Generation', 'Order Tracking', 'Instant Support']
    },
    {
      title: 'Web App Development',
      description: 'High-performance, scalable web applications built with the latest frameworks like React and Next.js.',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      features: ['Next.js Speed', 'SEO Optimized', 'Custom Dashboard']
    },
    {
      title: 'Mobile App Solutions',
      description: 'Native-feel iOS and Android mobile apps that keep your business in your customers\' pockets.',
      icon: Smartphone,
      color: 'from-emerald-400 to-green-500',
      features: ['Cross-platform', 'Push Notifications', 'Smooth UX']
    }
  ];

  const testimonialsContent = getSectionContent('home', 'testimonials') || {
    badge: 'Wall of Love',
    sectionTitle: 'What Our',
    sectionTitleHighlight: 'Clients Say',
    sectionSubtitle: 'Join 50+ successful businesses who have transformed their digital presence with us.',
    items: [
      {
        quote: 'The AI chatbot SocalBird built for my restaurant has been a game-changer. It handles 80% of our bookings automatically!',
        author: 'Sarah Jenkins',
        role: 'Restaurant Owner',
        industry: 'Hospitality',
        result: '80% Automation'
      },
      {
        quote: 'Our new e-commerce site is lightning fast. We saw a 40% increase in conversions within the first month of launching.',
        author: 'Michael Chen',
        role: 'Marketing Director',
        industry: 'E-commerce',
        result: '+40% Conversions'
      },
      {
        quote: 'Professional, responsive, and technical experts. They understood our SaaS needs perfectly and delivered ahead of schedule.',
        author: 'David Rodriguez',
        role: 'Tech Lead',
        industry: 'SaaS Startup',
        result: '2 Weeks Ahead'
      }
    ]
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section - The First Impression */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#0A0E27]">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.15)_0%,_rgba(10,14,39,0)_50%)]" />
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 text-left space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-sm font-semibold tracking-wide text-cyan-400 uppercase">{ensureString(heroContent.badge)}</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
                {ensureString(heroContent.title)} <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent italic">
                  {ensureString(heroContent.titleHighlight)}
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                {ensureString(heroContent.subtitle)}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button 
                  onClick={() => onNavigate('/contact')}
                  className="group relative h-16 px-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-cyan-500/20 transition-all hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {ensureString(heroContent.cta1Text)} <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
                <Button 
                  onClick={() => onNavigate('/portfolio')}
                  variant="outline" 
                  className="h-16 px-10 border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-lg rounded-2xl backdrop-blur-md transition-all hover:border-cyan-500/30"
                >
                  {ensureString(heroContent.cta2Text)}
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="flex flex-wrap items-center gap-10 pt-8 border-t border-white/10">
                {heroContent.rightCard?.stats.map((stat: any, i: number) => (
                  <div key={i} className="space-y-1">
                    <div className="text-3xl font-black text-white">{ensureString(stat.value)}</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{ensureString(stat.label)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Column - Premium Tech Stack Card */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                {/* Glow behind card */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 shadow-2xl overflow-hidden group-hover:border-cyan-500/30 transition-all duration-500">
                  {/* Internal Card Decor */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-[4rem]" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/10 rounded-tr-[4rem]" />
                  
                  <div className="space-y-10 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                      <Zap size={18} className="text-cyan-400" />
                      <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">{ensureString(heroContent.rightCard?.badge)}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {heroContent.rightCard?.frameworks.map((framework: string, i: number) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-[1.5rem] hover:bg-white/10 transition-all group/item">
                          <CheckCircle className="text-cyan-400 group-hover/item:scale-110 transition-transform" />
                          <span className="text-white font-bold text-lg">{framework}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-8 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl border border-white/10">
                      <p className="text-gray-400 leading-relaxed italic text-lg">
                        "Empowering your business with high-performance digital solutions that drive results."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-32 bg-[#0A0E27] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-24 max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">{ensureString(coreServicesContent.badge)}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {ensureString(coreServicesContent.title)} <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {ensureString(coreServicesContent.titleHighlight)}
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              {ensureString(coreServicesContent.subtitle)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {defaultCoreServices.map((service, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] transition-all group-hover:scale-[1.02]" />
                <div className="relative bg-white/5 border border-white/10 p-10 rounded-[2.5rem] h-full flex flex-col items-start gap-8 transition-all group-hover:border-white/20">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white leading-tight">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-normal">{service.description}</p>
                  </div>
                  <div className="space-y-3 w-full mt-auto">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <Check size={16} className="text-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="link" 
                    className="p-0 text-cyan-400 font-bold uppercase tracking-widest text-xs h-auto group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={14} className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Sections */}
      <RealImpactSection onNavigate={onNavigate} />
      <ModernProcessSection onNavigate={onNavigate} />
      <UniqueModernWhyChooseSection onNavigate={onNavigate} />
      
      {/* Testimonials - Specialized Premium Layout */}
      <section className="py-32 bg-[#0A0E27] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{ensureString(testimonialsContent.badge)}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              {ensureString(testimonialsContent.sectionTitle)} <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{ensureString(testimonialsContent.sectionTitleHighlight)}</span>
            </h2>
            <p className="text-xl text-gray-400">
              {ensureString(testimonialsContent.sectionSubtitle)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsContent.items.map((testimonial: any, i: number) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all flex flex-col gap-8 group">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "{ensureString(testimonial.quote)}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white">
                    {ensureString(testimonial.author)[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{ensureString(testimonial.author)}</div>
                    <div className="text-sm text-gray-400">{ensureString(testimonial.role)}</div>
                    <div className="text-xs text-cyan-400 mt-1">{ensureString(testimonial.industry)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase font-black mb-1">Result</div>
                    <div className="text-2xl font-bold text-cyan-400">{ensureString(testimonial.result)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModernFAQSection onNavigate={onNavigate} />
    </div>
  );
}