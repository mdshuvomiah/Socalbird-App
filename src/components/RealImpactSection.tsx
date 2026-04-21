import { Button } from './ui/button';
import { TrendingUp, Award, Users, Star, MessageSquare, ChevronRight, Code, MessageCircle, ArrowRight } from 'lucide-react';
import { useContent } from '../admin/ContentContext';

interface RealImpactSectionProps {
  onNavigate: (page: string) => void;
}

export function RealImpactSection({ onNavigate }: RealImpactSectionProps) {
  const { getSectionContent } = useContent();
  
  // Get content from context
  const content = getSectionContent('home', 'realImpact') || {
    badge: 'Real Results, Real Growth',
    title: 'See What\'s Possible When',
    titleHighlight: 'Technology Meets Strategy',
    subtitle: 'From startups to growing businesses - we\'ve helped companies 3X their revenue, automate support, and scale faster',
    stats: [],
    caseStudy1: {},
    caseStudy2: {},
    caseStudy3: {},
    ctaText: "Your Success Story Starts Here",
    ctaSubtext: "We've helped 50+ businesses grow. Let's write your chapter next."
  };

  const getIconComponent = (iconName: any) => {
    if (typeof iconName !== 'string') return iconName || Award;
    const icons: any = { TrendingUp, Award, Users, Star, MessageSquare, Code, MessageCircle };
    return icons[iconName] || Award;
  };

  return (
    <section className="py-24 px-4 border-t border-white/10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6">
            <TrendingUp className="text-cyan-400" size={18} />
            <span className="text-sm font-semibold text-cyan-300">{content.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {content.title}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block mt-2">
              {content.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Stats Counter - Animated */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {(Array.isArray(content.stats) && content.stats.length > 0 ? content.stats : [
            { value: '100+', label: 'Projects Delivered', sublabel: 'Across 6 industries', icon: Award, bgColor: 'from-cyan-500/20 to-blue-500/20', color: 'from-cyan-400 to-blue-500' },
            { value: '50+', label: 'Active Clients', sublabel: 'Still working with us', icon: Users, bgColor: 'from-blue-500/20 to-purple-500/20', color: 'from-blue-400 to-purple-500' },
            { value: '98%', label: 'Client Retention', sublabel: 'They come back', icon: Star, bgColor: 'from-purple-500/20 to-pink-500/20', color: 'from-purple-400 to-pink-500' },
            { value: '4.9★', label: 'Average Rating', sublabel: 'Client satisfaction', icon: TrendingUp, bgColor: 'from-pink-500/20 to-orange-500/20', color: 'from-pink-400 to-orange-500' }
          ]).filter(Boolean).map((stat: any, i: number) => {
            const IconComponent = getIconComponent(stat.icon);
            return (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:border-cyan-500/50"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor || 'from-cyan-500/20 to-blue-500/20'} opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity -z-10`} />
              
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.bgColor || 'from-cyan-500/20 to-blue-500/20'} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                <IconComponent className="text-white" size={28} />
              </div>

              <div className={`text-5xl font-black bg-gradient-to-r ${stat.color || 'from-cyan-400 to-blue-500'} bg-clip-text text-transparent mb-3 tracking-tight`}>
                {stat.value}
              </div>
              <div className="text-base font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.sublabel}</div>
            </div>
          );
          })}
        </div>

        {/* Impact Stories - Unique Layout */}
        <div className="space-y-8">
          {/* Story 1 - Large Featured */}
          <div className="group relative bg-gradient-to-br from-cyan-500/5 via-white/5 to-blue-500/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/40 transition-all">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-blue-600" />
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full mb-6">
                    <MessageSquare className="text-cyan-400" size={16} />
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">{content.caseStudy1?.badge || 'Case Study #1'}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {content.caseStudy1?.title || 'How an E-commerce Store Got'}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                      {content.caseStudy1?.titleHighlight || '3.5X More Revenue in 6 Months'}
                    </span>
                  </h3>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">The Challenge</div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {content.caseStudy1?.challenge || 'A growing fashion e-commerce brand was losing 67% of customer inquiries because they couldn\'t respond fast enough. Abandoned carts were at an all-time high.'}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Our Solution</div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {content.caseStudy1?.solution || 'We deployed a Facebook Messenger + Instagram DM chatbot that handled product inquiries, captured leads, and sent abandoned cart reminders - all automatically.'}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm font-medium text-cyan-300">
                      AI Chatbot
                    </div>
                    <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm font-medium text-blue-300">
                      Multi-Platform
                    </div>
                    <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm font-medium text-purple-300">
                      Lead Automation
                    </div>
                  </div>

                  <Button
                    onClick={() => onNavigate('/portfolio')}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Read Full Case Study
                    <ChevronRight className="ml-2" size={18} />
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Results Cards */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">Revenue Impact</div>
                      <TrendingUp className="text-cyan-400" size={20} />
                    </div>
                    <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {content.caseStudy1?.results?.main || '+385%'}
                    </div>
                    <p className="text-gray-400 text-sm">{content.caseStudy1?.results?.mainLabel || 'Increase in 6 months'}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="text-3xl font-bold text-emerald-400 mb-1">{content.caseStudy1?.results?.metrics?.[0]?.value || '95%'}</div>
                      <p className="text-xs text-gray-500">{content.caseStudy1?.results?.metrics?.[0]?.label || 'Response rate'}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="text-3xl font-bold text-purple-400 mb-1">{content.caseStudy1?.results?.metrics?.[1]?.value || '3X'}</div>
                      <p className="text-xs text-gray-500">{content.caseStudy1?.results?.metrics?.[1]?.label || 'More leads'}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="text-3xl font-bold text-orange-400 mb-1">{content.caseStudy1?.results?.metrics?.[2]?.value || '<2min'}</div>
                      <p className="text-xs text-gray-500">{content.caseStudy1?.results?.metrics?.[2]?.label || 'Avg response'}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="text-3xl font-bold text-pink-400 mb-1">{content.caseStudy1?.results?.metrics?.[3]?.value || '24/7'}</div>
                      <p className="text-xs text-gray-500">{content.caseStudy1?.results?.metrics?.[3]?.label || 'Automated'}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-6">
                    <div className="flex gap-3 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-cyan-400 text-cyan-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic leading-relaxed mb-3">
                      "{content.caseStudy1?.testimonial?.quote || 'Game changer. The chatbot handles 80% of customer questions automatically. Our team can finally focus on growth instead of answering the same questions all day.'}"
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-white">{content.caseStudy1?.testimonial?.author || 'Sarah M.'}</div>
                      <div className="text-xs text-gray-500">{content.caseStudy1?.testimonial?.role || 'Founder, Fashion E-commerce'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story 2 & 3 - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Story 2 */}
            <div className="group relative bg-gradient-to-br from-purple-500/5 via-white/5 to-pink-500/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-600" />
              
              <div className="p-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full mb-6">
                  <Code className="text-purple-400" size={16} />
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">{content.caseStudy2?.badge || 'Web Development'}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {content.caseStudy2?.title || 'SaaS Platform Scaled to'}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent block">
                    {content.caseStudy2?.titleHighlight || '12,000+ Active Users'}
                  </span>
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {content.caseStudy2?.description || 'Built a high-performance web app with real-time features using Next.js + Node.js that handles thousands of concurrent users with zero downtime.'}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1">{content.caseStudy2?.metrics?.[0]?.value || '12K+'}</div>
                    <p className="text-xs text-gray-500">{content.caseStudy2?.metrics?.[0]?.label || 'Active Users'}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-1">{content.caseStudy2?.metrics?.[1]?.value || '99.9%'}</div>
                    <p className="text-xs text-gray-500">{content.caseStudy2?.metrics?.[1]?.label || 'Uptime'}</p>
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                  {(Array.isArray(content.caseStudy2?.tags) ? content.caseStudy2.tags : ['Next.js', 'Node.js', 'MongoDB']).filter(Boolean).map((tech: string, i: number) => (
                    <div key={i} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-xs font-medium text-purple-300">
                      {tech}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => onNavigate('/portfolio')}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 w-full"
                >
                  View Case Study
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>

            {/* Story 3 */}
            <div className="group relative bg-gradient-to-br from-emerald-500/5 via-white/5 to-green-500/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-green-600" />
              
              <div className="p-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full mb-6">
                  <MessageCircle className="text-emerald-400" size={16} />
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">{content.caseStudy3?.badge || 'WhatsApp Automation'}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {content.caseStudy3?.title || 'Restaurant Automated'}
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent block">
                    {content.caseStudy3?.titleHighlight || '1,200+ Orders/Month'}
                  </span>
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {content.caseStudy3?.description || 'WhatsApp chatbot that takes orders, sends confirmations, and provides delivery updates automatically. Never misses a message, even at 3 AM.'}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">{content.caseStudy3?.metrics?.[0]?.value || '1.2K'}</div>
                    <p className="text-xs text-gray-500">{content.caseStudy3?.metrics?.[0]?.label || 'Orders/Month'}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">{content.caseStudy3?.metrics?.[1]?.value || '24/7'}</div>
                    <p className="text-xs text-gray-500">{content.caseStudy3?.metrics?.[1]?.label || 'Availability'}</p>
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                  {(Array.isArray(content.caseStudy3?.tags) ? content.caseStudy3.tags : ['WhatsApp API', 'Auto Orders', 'Delivery Track']).filter(Boolean).map((tech: string, i: number) => (
                    <div key={i} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs font-medium text-emerald-300">
                      {tech}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => onNavigate('/portfolio')}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 w-full"
                >
                  View Case Study
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white/5 to-cyan-500/5 backdrop-blur-lg border border-white/20 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {content.ctaTitle || 'Your Success Story Starts Here'}
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                {content.ctaSubtext || "We've helped 50+ businesses grow. Let's write your chapter next."}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-6 text-lg"
                >
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  size="lg"
                  className="bg-white/5 hover:bg-white/10 border border-white/20 px-10 py-6 text-lg"
                >
                  View All Success Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}