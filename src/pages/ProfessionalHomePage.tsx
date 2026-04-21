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

  const ensureString = (val: any) => {
    if (val === null || val === undefined) return '';
    if (typeof val === 'object') return '';
    return String(val);
  };
  
  // Get content from context
  const heroContent = getSectionContent('home', 'hero') || {
    badge: 'Premium Development Agency',
    title: 'Build & Scale With',
    titleHighlight: 'AI Automation',
    subtitle: 'Expert Web Development, AI Chatbot Solutions, and Mobile Apps for small to mid-sized businesses, e-commerce, restaurants, and scaling startups.',
    cta1Text: 'Get Started - Free Consultation',
    cta2Text: 'View Portfolio'
  };

  const testimonialsContent = getSectionContent('home', 'testimonials') || {
    sectionBadge: 'Client Success Stories',
    sectionTitle: 'What Our',
    sectionTitleHighlight: 'Clients Say',
    sectionSubtitle: 'Real results from real businesses across industries',
    items: []
  };

  const targetAudienceContent = getSectionContent('home', 'targetAudience') || {
    sectionBadge: 'Who We Serve',
    sectionTitle: 'Perfect Solutions for',
    sectionTitleHighlight: 'Your Industry',
    industries: []
  };

  const finalCtaContent = getSectionContent('home', 'finalCta') || {
    badge: '🎉 Limited Slots Available This Month',
    title: 'Ready to Transform',
    titleHighlight: 'Your Business?',
    subtitle: 'Join 100+ successful businesses. Free consultation • Expert guidance • Money-back guarantee',
    cta1Text: 'Start Your Project Now',
    cta2Text: 'View Pricing Packages',
    features: []
  };

  const servicesContent = getSectionContent('home', 'services') || { items: [] };

  const defaultCoreServices = [
    {
      icon: MessageSquare,
      title: 'AI Chatbot Automation',
      desc: 'Facebook • WhatsApp • Instagram • Web',
      price: 'Starting ৳5,000/month',
      stat: '24/7 Support',
      page: '/ai-chatbot-solutions'
    },
    {
      icon: Code,
      title: 'Web Development',
      desc: 'SEO-Optimized • Responsive • Fast',
      price: 'Custom & CMS Solutions',
      stat: '<100ms Load',
      page: '/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      desc: 'iOS • Android • Cross-Platform',
      price: 'Native & React Native',
      stat: '4.9★ Rating',
      page: '/app-development'
    }
  ];

  const coreServices = Array.isArray(servicesContent.items) && servicesContent.items.length > 0 
    ? servicesContent.items
        .filter(Boolean)
        .slice(0, 3)
        .map((s: any, i: number) => ({
        icon: [MessageSquare, Code, Smartphone][i] || Code,
        title: s.title,
        desc: s.description ? s.description.substring(0, 40) + '...' : (s.subtitle || ''),
        price: s.price || s.subtitle || '',
        stat: Array.isArray(s.features) && s.features.length > 0 ? s.features[0] : 'Feature-Rich',
        page: ['/ai-chatbot-solutions', '/web-development', '/app-development'][i] || '/contact'
      }))
    : defaultCoreServices;

  return (
    <div className="bg-[#0A0E27] text-white">
      {/* Hero Section - Premium & Clean */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          
          {/* Animated Dot Grid Pattern - Smooth Diagonal Movement */}
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.4) 1.5px, transparent 1.5px)`,
                backgroundSize: '40px 40px',
                animation: 'dotMove 20s linear infinite'
              }}
            />
          </div>

          {/* Modern Glowing Pulse Dots - Strategic Positions */}
          <div className="absolute top-[20%] left-[15%]">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 rounded-full bg-cyan-400 animate-pulse" style={{ animationDuration: '2s' }} />
              <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-50 animate-ping" style={{ animationDuration: '2s' }} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>
          </div>

          <div className="absolute top-[35%] right-[20%]">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 rounded-full bg-blue-400 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-50 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
            </div>
          </div>

          <div className="absolute bottom-[30%] left-[25%]">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 rounded-full bg-purple-400 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.6s' }} />
              <div className="absolute inset-0 rounded-full bg-purple-400 opacity-50 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.6s' }} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
            </div>
          </div>

          <div className="absolute top-[60%] right-[30%]">
            <div className="relative w-2.5 h-2.5">
              <div className="absolute inset-0 rounded-full bg-cyan-400 animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '0.9s' }} />
              <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-50 animate-ping" style={{ animationDuration: '2.2s', animationDelay: '0.9s' }} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
            </div>
          </div>

          <div className="absolute bottom-[45%] right-[15%]">
            <div className="relative w-2.5 h-2.5">
              <div className="absolute inset-0 rounded-full bg-blue-400 animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '1.2s' }} />
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-50 animate-ping" style={{ animationDuration: '2.8s', animationDelay: '1.2s' }} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-purple-400" />
            </div>
          </div>

          {/* Connecting Lines Animation - More Dynamic */}
          <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
            <line x1="15%" y1="20%" x2="25%" y2="30%" stroke="url(#lineGradient1)" strokeWidth="1.5" className="animate-pulse" />
            <line x1="25%" y1="30%" x2="70%" y2="45%" stroke="url(#lineGradient2)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="70%" y1="45%" x2="80%" y2="35%" stroke="url(#lineGradient3)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="15%" y1="20%" x2="80%" y2="35%" stroke="url(#lineGradient4)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Elegant Floating Dots - Wave Pattern */}
          <div className="absolute top-0 left-[10%] w-px h-full opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                style={{
                  top: `${i * 15}%`,
                  animation: 'dotFloat 6s ease-in-out infinite',
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>

          <div className="absolute top-0 right-[12%] w-px h-full opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg shadow-blue-400/50"
                style={{
                  top: `${i * 15 + 5}%`,
                  animation: 'dotFloat 7s ease-in-out infinite',
                  animationDelay: `${i * 0.4}s`
                }}
              />
            ))}
          </div>

          <div className="absolute top-0 left-[50%] w-px h-full opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg shadow-purple-400/50"
                style={{
                  top: `${i * 15 + 10}%`,
                  animation: 'dotFloat 8s ease-in-out infinite',
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>

          {/* Pulsing Rings - Enhanced */}
          <div className="absolute top-[25%] right-[18%]">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" style={{ animationDuration: '4s' }} />
              <div className="absolute inset-4 rounded-full border border-blue-400/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.7s' }} />
              <div className="absolute inset-8 rounded-full border border-purple-400/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1.4s' }} />
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-400/10 to-purple-400/10 blur-xl" />
            </div>
          </div>

          {/* Scattered Particle Dots */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: 'particleTwinkle 3s ease-in-out infinite',
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Custom Animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes dotMove {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 40px 40px;
            }
          }

          @keyframes dotFloat {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0.3;
            }
            25% {
              transform: translateY(-20px) translateX(10px);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-10px) translateX(-5px);
              opacity: 1;
            }
            75% {
              transform: translateY(-25px) translateX(5px);
              opacity: 0.5;
            }
          }

          @keyframes particleTwinkle {
            0%, 100% {
              opacity: 0;
              transform: scale(0.5);
            }
            50% {
              opacity: 1;
              transform: scale(1.5);
            }
          }
        `}} />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-300">{heroContent.badge}</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {heroContent.title}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block">
                    {heroContent.titleHighlight}
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                  {heroContent.subtitle}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25"
                >
                  {heroContent.cta1Text}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  size="lg"
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  {heroContent.cta2Text}
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '100+', label: 'Projects Completed', icon: Award },
                  { number: '50+', label: 'Happy Clients', icon: Users },
                  { number: '4.9★', label: 'Client Rating', icon: Star },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <stat.icon className="mx-auto mb-2 text-cyan-400" size={24} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { icon: Check, text: 'Money-Back Guarantee' },
                  { icon: Clock, text: 'Fast Delivery' },
                  { icon: Shield, text: '100% Secure' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <item.icon size={12} className="text-cyan-400" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Service Card */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="space-y-5">
                  {/* Header */}
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-white mb-1">Complete Tech Stack</h3>
                    <p className="text-xs text-gray-400">Modern technologies for scalable solutions</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                      Frameworks & Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['WordPress', 'Laravel', 'Next.js', 'React', 'Node.js', 'MongoDB'].map((tech, i) => (
                        <div
                          key={i}
                          className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-xs font-medium text-cyan-300"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Services */}
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-3 font-semibold">
                      Core Services
                    </div>
                    <div className="space-y-3">
                      {coreServices.map((service: any, i: number) => (
                        <button
                          key={i}
                          onClick={() => onNavigate(service.page)}
                          className="w-full group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl p-3 transition-all cursor-pointer"
                        >
                          <div className="flex gap-3 items-start">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <service.icon size={20} className="text-cyan-400" />
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <div className="flex items-start justify-between mb-1">
                                <div className="font-semibold text-white text-sm">{service.title}</div>
                                <div className="text-[10px] font-bold text-cyan-400 px-2 py-0.5 bg-cyan-500/10 rounded overflow-hidden text-ellipsis whitespace-nowrap max-w-[80px]">
                                  {service.stat}
                                </div>
                              </div>
                              <div className="text-[11px] text-gray-400 mb-0.5">{service.desc}</div>
                              <div className="text-[10px] text-gray-500">{service.price}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="grid grid-cols-3 gap-3">
                      {(Array.isArray(heroContent.rightCard?.stats) ? heroContent.rightCard.stats : [
                        { label: 'Delivery', value: '7-14 Days' },
                        { label: 'Support', value: 'Lifetime' },
                        { label: 'Warranty', value: '90 Days' },
                      ]).map((stat: any, i: number) => (
                        <div key={i} className="text-center">
                          <div className="text-sm font-bold text-cyan-400">{stat.value}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => onNavigate('/contact')}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-5 text-sm font-semibold"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-5 -right-5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Shield className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">100% Secure</div>
                    <div className="text-[10px] text-gray-400">Money-Back Guarantee</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 bg-white/10 backdrop-blur-md border border-purple-500/30 px-4 py-2.5 rounded-xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Users className="text-purple-400" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">100+ Clients</div>
                    <div className="text-[10px] text-gray-400">Trusted Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Impact Section - NEW MODERN DESIGN */}
      <RealImpactSection onNavigate={onNavigate} />

      {/* Why Choose SocalBird Section - UNIQUE INTERACTIVE DESIGN */}
      <UniqueModernWhyChooseSection onNavigate={onNavigate} />

      {/* Services Section - NEW CREATIVE DESIGN */}
      <CreativeServicesSection onNavigate={onNavigate} />

      {/* Team Section - ULTRA-PROFESSIONAL DESIGN */}
      <ProfessionalTeamSection onNavigate={onNavigate} />

      {/* Process Section - NEW MODERN DESIGN */}
      <ModernProcessSection onNavigate={onNavigate} />

      {/* Testimonials Section - Clean & Professional */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-300">{ensureString(testimonialsContent.sectionBadge)}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {ensureString(testimonialsContent.sectionTitle)}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{ensureString(testimonialsContent.sectionTitleHighlight)}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {ensureString(testimonialsContent.sectionSubtitle)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {(Array.isArray(testimonialsContent.items) && testimonialsContent.items.length > 0 ? testimonialsContent.items : [
              {
                quote: 'The AI chatbot increased our response rate by 300% and we\'re capturing 3X more leads. Best investment we\'ve made!',
                author: 'Sarah Mitchell',
                role: 'CEO, StyleHub',
                industry: 'E-commerce',
                rating: 5,
                result: '+300% Response Rate',
              },
              {
                quote: 'Our website now handles 10K+ concurrent users with zero downtime. The performance improvement is phenomenal.',
                author: 'James Parker',
                role: 'Founder, TechConsult',
                industry: 'SaaS Startup',
                rating: 5,
                result: '10K+ Users',
              },
              {
                quote: 'The mobile app has a 4.9★ rating on both stores. The user experience and code quality are outstanding.',
                author: 'Lisa Rodriguez',
                role: 'CTO, HealthConnect',
                industry: 'Healthcare',
                rating: 5,
                result: '4.9★ Rating',
              },
            ]).filter(Boolean).map((testimonial: any, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(typeof testimonial.rating === 'number' ? testimonial.rating : 5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  "{ensureString(testimonial.quote)}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="font-semibold text-white">{ensureString(testimonial.author)}</div>
                    <div className="text-sm text-gray-400">{ensureString(testimonial.role)}</div>
                    <div className="text-xs text-cyan-400 mt-1">{ensureString(testimonial.industry)}</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{ensureString(testimonial.result)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More testimonials link */}
          <div className="text-center">
            <Button
              onClick={() => onNavigate('/portfolio')}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-6"
            >
              {testimonialsContent.ctaText || 'View More Case Studies'}
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-300">{targetAudienceContent.sectionBadge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {targetAudienceContent.sectionTitle}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{targetAudienceContent.sectionTitleHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {(Array.isArray(targetAudienceContent.industries) && targetAudienceContent.industries.length > 0 ? targetAudienceContent.industries : [
              { name: 'Small Businesses', icon: '🏪' },
              { name: 'E-commerce', icon: '🛒' },
              { name: 'Restaurants', icon: '🍽️' },
              { name: 'Service Businesses', icon: '⚙️' },
              { name: 'Agencies', icon: '🎯' },
              { name: 'Startups', icon: '🚀' },
            ]).filter(Boolean).map((audience, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 p-6 rounded-2xl text-center transition-all cursor-pointer hover:scale-105"
              >
                <div className="text-4xl mb-3">{audience.icon}</div>
                <div className="text-sm font-semibold">{audience.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ModernFAQSection onNavigate={onNavigate} />

      {/* Final CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 opacity-20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-8">
            <span className="text-sm font-semibold text-cyan-400">{finalCtaContent.badge}</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            {finalCtaContent.title}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
              {finalCtaContent.titleHighlight}
            </span>
          </h2>

          <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {finalCtaContent.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              onClick={() => onNavigate('/contact')}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-xl px-12 py-8 shadow-lg shadow-cyan-500/25"
            >
              {finalCtaContent.cta1Text}
              <ArrowRight className="ml-3" size={24} />
            </Button>

            <Button
              onClick={() => onNavigate('/ai-chatbot-solutions')}
              size="lg"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xl px-12 py-8"
            >
              {finalCtaContent.cta2Text}
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            {(Array.isArray(finalCtaContent.features) && finalCtaContent.features.length > 0 ? finalCtaContent.features : [
              '✓ No Long-term Contracts',
              '✓ 100% Satisfaction Guaranteed',
              '✓ Fast Turnaround Time',
            ]).filter(Boolean).map((text: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}