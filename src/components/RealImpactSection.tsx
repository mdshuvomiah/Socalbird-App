import { Button } from './ui/button';
import { TrendingUp, Award, Users, Star, MessageSquare, ChevronRight, Code, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
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
    ctaTitle: 'Your Success Story Starts Here',
    ctaSubtext: "We've helped 50+ businesses grow. Let's write your chapter next."
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0A0E27] via-[#0D1233] to-[#0A0E27] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <TrendingUp size={16} className="text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">{__ensureString(content.badge)}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {__ensureString(content.title)} <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {__ensureString(content.titleHighlight)}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {__ensureString(content.subtitle)}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {(Array.isArray(content.stats) && content.stats.length > 0 ? content.stats : [
              { label: 'Revenue Growth', value: '300%', icon: 'TrendingUp', color: 'cyan' },
              { label: 'Support Automated', value: '85%', icon: 'MessageSquare', color: 'blue' },
              { label: 'Active Users', value: '1M+', icon: 'Users', color: 'purple' },
              { label: 'Client Satisfaction', value: '4.9/5', icon: 'Star', color: 'amber' }
            ]).map((stat: any, index: number) => {
              const StatIcon = __getIconComponent(stat.icon);
              return (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl group-hover:bg-cyan-500/10 transition-all duration-500" />
                  <div className="relative p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <StatIcon size={24} className="text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{__ensureString(stat.value)}</div>
                      <div className="text-sm text-gray-400">{__ensureString(stat.label)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {[content.caseStudy1, content.caseStudy2].filter(Boolean).map((study: any, index: number) => {
              const isEven = index % 2 === 0;
              const Icon = __getIconComponent(study.icon || (index === 0 ? 'Code' : 'MessageCircle'));
              
              return (
                <div 
                  key={index} 
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Visual Side */}
                  <div className="flex-1 w-full">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video bg-white/5 flex items-center justify-center group-hover:border-white/20 transition-all">
                        {study.imageUrl ? (
                          <img 
                            src={study.imageUrl} 
                            alt={study.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl">
                            <Icon size={48} className="text-white" />
                          </div>
                        )}
                        
                        {/* Floating Metric */}
                        <div className="absolute bottom-6 right-6 p-4 px-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                          <div className="text-2xl font-bold text-cyan-400">{__ensureString(study.resultValue || '95%')}</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">{__ensureString(study.resultLabel || 'Efficiency Increase')}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 text-xs font-bold uppercase tracking-wider">
                        {__ensureString(study.category || (index === 0 ? 'Enterprise Web' : 'SaaS Platform'))}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        {__ensureString(study.title || (index === 0 ? 'Scaling a Global E-commerce Powerhouse' : 'Revitalizing Customer Support with AI'))}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {__ensureString(study.description || "We partnered with leading innovators to build a high-performance platform that handles millions of monthly active users with sub-second latency.")}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pb-4">
                      {(__ensureString(study.highlights) || (index === 0 ? "Performance,Scale" : "Automation,24/7 Support")).split(',').map((highlight: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-500" />
                          <span className="text-gray-300 font-medium">{highlight.trim()}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        onClick={() => onNavigate('/portfolio')}
                        className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-2xl font-bold transition-all"
                      >
                        Read Case Study
                      </Button>
                      <Button
                        onClick={() => onNavigate('/contact')}
                        variant="link"
                        className="text-white hover:text-cyan-400 font-bold flex items-center gap-2"
                      >
                        View Project Details <ChevronRight size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Footer */}
          <div className="mt-32 text-center">
            <div className="max-w-3xl mx-auto p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {__ensureString(content.ctaTitle) || 'Your Success Story Starts Here'}
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                {__ensureString(content.ctaSubtext) || "We've helped 50+ businesses grow. Let's write your chapter next."}
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

function __ensureString(val: any): string {
  if (val === null || val === undefined) return '';
  if (typeof val === 'object') return '';
  return String(val);
}

function __getIconComponent(iconName: any) {
  const icons: any = { 
    TrendingUp, Award, Users, Star, MessageSquare, Code, MessageCircle, ArrowRight, ExternalLink 
  };
  
  if (typeof iconName !== 'string') return iconName || Award;
  return icons[iconName] || Award;
}