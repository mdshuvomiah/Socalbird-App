import { MessageSquare, Code, Smartphone, ChevronRight, Sparkles, Zap, Shield } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
  onLearnMore: () => void;
}

function ServiceCard({ icon, badge, title, subtitle, description, features, popular, onLearnMore }: ServiceCardProps) {
  return (
    <div className="group relative">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Card Container */}
      <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10">
        
        {/* Popular Badge */}
        {popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/90 to-pink-500/90 backdrop-blur-sm border border-orange-400/30 rounded-full shadow-lg shadow-orange-500/20">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white">Most Popular</span>
          </div>
        )}

        {/* Icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {icon}
          </div>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-sm font-semibold text-cyan-400 mb-3">
            {subtitle}
          </p>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Features List */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 group/item opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative mt-0.5 flex-shrink-0">
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur-sm opacity-0 group-hover/item:opacity-60 transition-opacity" />
                <div className="relative w-5 h-5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
              </div>
              <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button 
          onClick={onLearnMore}
          className="group/btn relative w-full overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover/btn:opacity-100 blur-lg transition-opacity duration-300" />
          
          {/* Button Content */}
          <div className="relative flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-cyan-500/30 rounded-xl group-hover/btn:border-transparent transition-all duration-300">
            <span className="font-semibold text-cyan-400 group-hover/btn:text-white transition-colors">
              Explore Service
            </span>
            <ChevronRight className="w-5 h-5 text-cyan-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
}

interface ModernServicesSectionProps {
  onNavigate: (page: string) => void;
}

export function ModernServicesSection({ onNavigate }: ModernServicesSectionProps) {
  const services = [
    {
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      title: "AI Chatbot Solutions",
      subtitle: "Monthly Subscription Packages",
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
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Web Development",
      subtitle: "Custom & CMS Solutions",
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
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
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
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6 group hover:border-cyan-500/40 transition-all">
            <Zap className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Our Services</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block mb-2">Complete Digital Solutions for</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Every Business Need
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Serving small businesses, e-commerce stores, restaurants, service providers, agencies, and startups
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
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
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Not sure which service is right for you?
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            <span>Get Free Consultation</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
