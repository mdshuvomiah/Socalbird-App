import { MessageSquare, Code, Smartphone, ChevronRight, Sparkles, Zap, Shield, ArrowUpRight, Star } from 'lucide-react';
import { useState } from 'react';

interface AdvancedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
  index: number;
  onLearnMore: () => void;
}

function AdvancedServiceCard({ icon, title, subtitle, description, features, popular, index, onLearnMore }: AdvancedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative ${index === 1 ? 'lg:mt-12' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Border Gradient */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700 animate-gradient-flow" />
      
      {/* Glow Effect */}
      <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Main Card */}
      <div className="relative h-full bg-gradient-to-br from-[#0F1629] to-[#0A0E27] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Popular Badge - Floating Design */}
        {popular && (
          <div className="absolute -top-3 -right-3 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur-lg animate-pulse" />
              <div className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl shadow-2xl">
                <Sparkles className="w-4 h-4 text-white animate-spin-slow" />
                <span className="text-sm font-bold text-white">Hot</span>
              </div>
            </div>
          </div>
        )}

        <div className="relative p-8 lg:p-10">
          {/* Icon with Advanced Animation */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-150" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-2xl shadow-cyan-500/0 group-hover:shadow-cyan-500/50">
              <div className="relative">
                {icon}
                {/* Orbit Animation */}
                <div className="absolute -inset-4 border border-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -right-2 -top-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-green-500/50">
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
              {title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:w-20 transition-all duration-500" />
              <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Premium Divider */}
          <div className="relative h-px mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-transform duration-700 ${isHovered ? 'translate-x-0' : '-translate-x-full'}`} />
          </div>

          {/* Features with Unique Layout */}
          <div className="space-y-4 mb-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group/item flex items-start gap-3 opacity-0 animate-fade-in-up"
                style={{ 
                  animationDelay: `${idx * 100}ms`, 
                  animationFillMode: 'forwards' 
                }}
              >
                {/* Custom Checkbox Design */}
                <div className="relative mt-0.5 flex-shrink-0">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg blur-md opacity-0 group-hover/item:opacity-60 transition-opacity duration-300" />
                  
                  {/* Checkbox Container */}
                  <div className="relative w-6 h-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 rounded-lg flex items-center justify-center group-hover/item:border-cyan-400 group-hover/item:scale-110 transition-all duration-300">
                    {/* Checkmark */}
                    <svg 
                      className="w-4 h-4 text-cyan-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {/* Default Dot */}
                    <div className="absolute w-2 h-2 bg-cyan-400 rounded-full group-hover/item:opacity-0 transition-opacity duration-300" />
                  </div>
                </div>

                <span className="text-sm text-gray-400 group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Advanced CTA Button */}
          <button 
            onClick={onLearnMore}
            className="group/btn relative w-full overflow-hidden"
          >
            {/* Animated Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl opacity-50 blur-xl group-hover/btn:opacity-100 transition-opacity duration-500" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

            {/* Button Content */}
            <div className="relative flex items-center justify-between px-6 py-4">
              <span className="font-bold text-white">
                Explore Details
              </span>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          </button>
        </div>

        {/* Corner Accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
}

interface UniqueServicesSectionProps {
  onNavigate: (page: string) => void;
}

export function UniqueServicesSection({ onNavigate }: UniqueServicesSectionProps) {
  const services = [
    {
      icon: <MessageSquare className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />,
      title: "AI Chatbot Solutions",
      subtitle: "Monthly Subscriptions",
      description: "24/7 automated customer support and engagement across all major platforms with intelligent AI responses",
      features: [
        "Facebook Messenger Automation",
        "WhatsApp Business Integration",
        "Instagram DM Automation",
        "Facebook Comment Auto-Reply",
        "Website Chatbot Plugin",
        "Lead Capture & CRM Integration"
      ],
      popular: true,
      path: "/ai-chatbot-solutions"
    },
    {
      icon: <Code className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />,
      title: "Web Development",
      subtitle: "Custom & CMS",
      description: "Professional websites that drive conversions, rank on Google, and deliver exceptional user experiences",
      features: [
        "WordPress Development",
        "Laravel Applications",
        "Next.js / React Apps",
        "MERN Stack Development",
        "SEO Optimization",
        "Responsive Design"
      ],
      path: "/web-development"
    },
    {
      icon: <Smartphone className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />,
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description: "Native and cross-platform mobile applications designed for performance, scalability, and user engagement",
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-Platform (React Native)",
        "UI/UX Design",
        "App Store Optimization",
        "Maintenance & Support"
      ],
      path: "/app-development"
    }
  ];

  return (
    <section className="relative py-32 px-4 border-t border-white/10 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl relative">
        {/* Premium Header */}
        <div className="text-center mb-20">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-cyan-500/20 rounded-full mb-8 group hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
            <div className="relative">
              <Zap className="w-5 h-5 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-medium text-gray-300">Our Premium Services</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="block mb-3">Complete Digital Solutions</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                For Every Business Need
              </span>
              {/* Underline Animation */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full" />
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Serving small businesses, e-commerce stores, restaurants, service providers, agencies, and startups
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Shield, label: "Quality Guaranteed", color: "green" },
              { icon: Zap, label: "Fast Delivery", color: "yellow" },
              { icon: Sparkles, label: "24/7 Support", color: "purple" },
            ].map((badge, idx) => (
              <div 
                key={idx}
                className="group/badge flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <badge.icon className={`w-4 h-4 text-${badge.color}-400`} />
                <span className="text-sm text-gray-300 group-hover/badge:text-white transition-colors">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid - Staggered Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {services.map((service, index) => (
            <AdvancedServiceCard
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

        {/* Bottom CTA Section */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Not Sure Which Service Is Right For You?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our experts and we'll help you choose the perfect solution for your business
            </p>
            <button
              onClick={() => onNavigate('/contact')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 rounded-2xl font-bold shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              <span>Schedule Free Consultation</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        @keyframes gradient-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 3s ease infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
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
