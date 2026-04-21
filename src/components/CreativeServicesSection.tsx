import { MessageSquare, Code, Smartphone, ArrowRight, Sparkles, Zap, TrendingUp, Circle } from 'lucide-react';
import { useState } from 'react';
import { useContent } from '../admin/ContentContext';

interface CreativeServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
  index: number;
  onLearnMore: () => void;
}

function CreativeServiceCard({ icon, title, subtitle, description, features, popular, index, onLearnMore }: CreativeServiceCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="group relative h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      {/* Popular Badge - Above Card */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 rounded-full blur-lg opacity-60 animate-pulse" />
            
            {/* Badge Container */}
            <div className="relative flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 rounded-full shadow-2xl">
              <Sparkles className="w-3.5 h-3.5 text-white animate-spin-slow" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Most Popular</span>
            </div>
          </div>
        </div>
      )}

      {/* Magnetic Card Container */}
      <div 
        className="relative h-full transition-transform duration-300 ease-out"
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${-mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(20px)` 
            : 'none'
        }}
      >
        {/* Outer Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-[2rem] opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />

        {/* Main Card */}
        <div className="relative h-full bg-gradient-to-br from-[#0D1425] via-[#0A0E27] to-[#070B1F] border border-white/10 rounded-[2rem] overflow-hidden">
          
          {/* Animated Mesh Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)] animate-mesh-1" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)] animate-mesh-2" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)] animate-mesh-3" />
          </div>

          <div className="relative p-8 lg:p-10">
            {/* Header Section with Icon */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl mb-4">
                  <span className="text-lg font-bold text-cyan-400">0{index + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                  <span className="bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h3>

                {/* Subtitle with Animated Underline */}
                <div className="relative inline-block mb-4">
                  <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
                    {subtitle}
                  </p>
                  <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </div>

              {/* Floating Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-150" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {icon}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
              {description}
            </p>

            {/* Features Grid - 2 Columns */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {Array.isArray(features) && features.filter(Boolean).map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2 opacity-0 animate-slide-in-left"
                  style={{ 
                    animationDelay: `${idx * 80}ms`, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  {/* Dot Indicator */}
                  <div className="relative mt-1.5 flex-shrink-0">
                    <Circle className="w-2 h-2 text-cyan-400 fill-cyan-400" />
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider Line */}
            <div className="relative h-px mb-8 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>

            {/* CTA Button - Unique Design */}
            <button 
              onClick={onLearnMore}
              className="group/btn relative w-full overflow-hidden rounded-2xl"
            >
              {/* Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-all duration-300" />
              
              {/* Sliding Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

              {/* Button Content */}
              <div className="relative flex items-center justify-between px-6 py-4 border border-cyan-500/30 rounded-2xl group-hover/btn:border-cyan-400/50 transition-all">
                <span className="font-bold text-sm text-gray-300 group-hover/btn:text-white transition-colors">
                  Explore Service
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover/btn:bg-cyan-500/30 transition-all">
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
}

interface CreativeServicesSectionProps {
  onNavigate: (page: string) => void;
}

export function CreativeServicesSection({ onNavigate }: CreativeServicesSectionProps) {
  const { getSectionContent } = useContent();
  const content = getSectionContent('home', 'services') || {};
  
  const iconMap = [
    <MessageSquare className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />,
    <Code className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />,
    <Smartphone className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
  ];

  const defaultServices = [
    {
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />,
      title: "AI Chatbot Solutions",
      subtitle: "Monthly Subscriptions",
      description: "24/7 automated customer support and engagement across all major platforms with intelligent AI responses",
      features: [
        "Messenger Auto",
        "WhatsApp Business",
        "Instagram DMs",
        "Comment Replies",
        "Website Plugin",
        "CRM Integration"
      ],
      popular: true,
      path: "/ai-chatbot-solutions"
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />,
      title: "Web Development",
      subtitle: "Custom & CMS",
      description: "Professional websites that drive conversions, rank on Google, and deliver exceptional user experiences",
      features: [
        "WordPress Sites",
        "Laravel Apps",
        "Next.js / React",
        "MERN Stack",
        "SEO Optimized",
        "Mobile Ready"
      ],
      path: "/web-development"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />,
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description: "Native and cross-platform mobile applications designed for performance, scalability, and user engagement",
      features: [
        "Native iOS",
        "Native Android",
        "React Native",
        "UI/UX Design",
        "App Store Ready",
        "Full Support"
      ],
      path: "/app-development"
    }
  ];

  const cmsServices = content?.items;
  const paths = ["/ai-chatbot-solutions", "/web-development", "/app-development"];
  
  const services = (Array.isArray(cmsServices) && cmsServices.length > 0)
    ? cmsServices.filter(Boolean).map((item: any, i: number) => ({
        ...item,
        features: Array.isArray(item.features) ? item.features : [],
        icon: iconMap[i % iconMap.length],
        popular: i === 0,
        path: paths[i % paths.length] || '/contact'
      }))
    : defaultServices;

  return (
    <section className="relative py-32 px-4 border-t border-white/10 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Radial Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-float-delayed" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-8 group hover:border-cyan-500/40 transition-all">
            <div className="relative">
              <Zap className="w-5 h-5 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-semibold text-gray-300">{content.badge || 'Our Digital Services'}</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          {/* Title with Split Design */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block mb-2">{content.title || 'Complete Digital Solutions'}</span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500" />
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {content.titleHighlight || 'For Every Business'}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500" />
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            {content.subtitle || 'Serving small businesses, e-commerce stores, restaurants, service providers, agencies, and startups'}
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            {[
              { label: 'Projects Delivered', value: '500+', icon: TrendingUp },
              { label: 'Active Clients', value: '200+', icon: Sparkles },
              { label: 'Success Rate', value: '99%', icon: Zap },
            ].filter(Boolean).map((stat, idx) => (
              <div key={idx} className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {services.map((service, index) => (
            <CreativeServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              features={service.features}
              popular={service.popular}
              onLearnMore={() => onNavigate(service.path)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-12 text-center overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-400">Free Consultation Available</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Not Sure Which Service Fits Your Needs?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                Schedule a free consultation with our experts. We'll analyze your business and recommend the perfect solution.
              </p>
              
              <button
                onClick={() => onNavigate('/contact')}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl font-bold shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Talk to an Expert</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }

        @keyframes mesh-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, 10%) scale(1.1); }
        }
        .animate-mesh-1 {
          animation: mesh-1 8s ease-in-out infinite;
        }

        @keyframes mesh-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10%, 10%) scale(1.1); }
        }
        .animate-mesh-2 {
          animation: mesh-2 10s ease-in-out infinite;
        }

        @keyframes mesh-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, -10%) scale(1.1); }
        }
        .animate-mesh-3 {
          animation: mesh-3 12s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
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
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}