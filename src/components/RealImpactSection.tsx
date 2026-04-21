import { TrendingUp, Award, Target, Zap, CheckCircle, Star, Code, Smartphone, Bot, Layers, Users, MessageSquare, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { useContent } from '../admin/ContentContext';

interface RealImpactSectionProps {
  onNavigate: (page: string) => void;
}

export function RealImpactSection({ onNavigate }: RealImpactSectionProps) {
  const { getSectionContent } = useContent();
  const rawContent = getSectionContent('home', 'realImpact');

  // Hardened local helper
  const __s = (val: any) => (val === null || val === undefined || typeof val === 'object') ? '' : String(val);

  const content = rawContent || {
    badge: 'Real Results, Real Growth',
    title: 'See What\'s Possible When',
    titleHighlight: 'Technology Meets Strategy',
    subtitle: 'From startups to growing businesses - we\'ve helped companies 3X their revenue, automate support, and scale faster'
  };

  const ICON_MAP: any = { TrendingUp, Award, Target, Zap, CheckCircle, Star, Code, Smartphone, Bot, Layers, Users, MessageSquare, MessageCircle, ArrowRight, ExternalLink };

  const defaultStats = [
    { value: '100+', label: 'Projects Delivered', sublabel: 'Across 6 industries' },
    { value: '50+', label: 'Active Clients', sublabel: 'Still working with us' },
    { value: '98%', label: 'Client Retention', sublabel: 'They come back' },
    { value: '4.9★', label: 'Average Rating', sublabel: 'Client satisfaction' }
  ];

  const stats = Array.isArray(content.stats) ? content.stats : defaultStats;

  const caseStudies = [
    {
      badge: __s(content.caseStudy1?.badge || 'Case Study #1'),
      title: __s(content.caseStudy1?.title || 'How an E-commerce Store Got'),
      titleHighlight: __s(content.caseStudy1?.titleHighlight || '3.5X More Revenue in 6 Months'),
      image: content.caseStudy1?.imageUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      challenge: __s(content.caseStudy1?.challenge || 'A growing fashion e-commerce brand was losing 67% of customer inquiries because they couldn\'t respond fast enough.'),
      solution: __s(content.caseStudy1?.solution || 'We deployed a Facebook Messenger + Instagram DM chatbot that handled inquiries and captured leads automatically.'),
      results: content.caseStudy1?.results || { main: '+385%', mainLabel: 'Growth Guaranteed' },
      icon: 'TrendingUp'
    },
    {
      badge: __s(content.caseStudy2?.badge || 'Case Study #2'),
      title: __s(content.caseStudy2?.title || 'Automating Customer Support'),
      titleHighlight: __s(content.caseStudy2?.titleHighlight || 'for a Scaling SaaS Platform'),
      image: content.caseStudy2?.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      challenge: __s(content.caseStudy2?.challenge || 'A technical platform was spending 40+ hours weekly on repetitive tickets, slowing down their development team.'),
      solution: __s(content.caseStudy2?.solution || 'We integrated an AI support agent that resolved 70% of common issues instantly and triaged complex ones.'),
      results: content.caseStudy2?.results || { main: '70%', mainLabel: 'Auto-Resolved' },
      icon: 'Zap'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0A0E27] via-[#0D1233] to-[#0A0E27] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <TrendingUp className="text-cyan-400" size={16} />
              <span className="text-sm font-medium text-gray-300">{__s(content.badge)}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
              {__s(content.title)} <br />
              <span className="text-cyan-400 italic">
                {__s(content.titleHighlight)}
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {__s(content.subtitle)}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {stats.map((stat: any, idx: number) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{__s(stat.value)}</div>
                <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-1">{__s(stat.label)}</div>
                <div className="text-xs text-gray-500">{__s(stat.sublabel)}</div>
              </div>
            ))}
          </div>

          {/* Featured Case Studies */}
          <div className="space-y-20">
            {caseStudies.map((study, idx) => {
              const Icon = ICON_MAP[study.icon] || TrendingUp;
              return (
                <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  {/* Image Part */}
                  <div className="lg:w-1/2 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video bg-white/5 flex items-center justify-center group-hover:border-white/20 transition-all">
                      {study.image ? (
                        <>
                          <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-transparent to-transparent opacity-60"></div>
                        </>
                      ) : (
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl">
                          <Icon size={48} className="text-white" />
                        </div>
                      )}
                      
                      {/* Floating Result Badge */}
                      <div className="absolute bottom-6 right-6 p-4 px-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                        <div className="text-2xl font-bold text-cyan-400">
                          {__s(study.results?.main || study.resultValue || study.mainResult || '+385%')}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">
                          {__s(study.results?.mainLabel || study.resultLabel || study.mainLabel || 'Growth Guaranteed')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Part */}
                  <div className="lg:w-1/2 space-y-8 lg:pl-6">
                    <div className="space-y-4">
                      {study.badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 text-xs font-bold uppercase tracking-wider">
                          {study.badge}
                        </div>
                      )}

                      <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        {study.title}
                        {study.titleHighlight && (
                          <>
                            <br />
                            <span className="text-cyan-400">{study.titleHighlight}</span>
                          </>
                        )}
                      </h3>

                      <p className="text-gray-400 text-lg leading-relaxed">
                        {study.challenge || study.description || "We partnered with leading innovators to build a high-performance platform that handles millions of monthly active users with sub-second latency."}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        <span className="text-gray-300 font-medium">Performance Optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        <span className="text-gray-300 font-medium">Auto-Scaling Infrastructure</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                      <button 
                        onClick={() => onNavigate('/portfolio')}
                        className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-2xl font-bold transition-all"
                      >
                        Read Case Study
                      </button>
                      <button 
                        onClick={() => onNavigate('/portfolio')}
                        className="text-white hover:text-cyan-400 font-bold flex items-center gap-2 bg-transparent border-none cursor-pointer"
                      >
                        View Project Details 
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Center */}
          <div className="mt-32 text-center">
            <div className="max-w-3xl mx-auto p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {__s(content.ctaTitle) || 'Your Success Story Starts Here'}
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                {__s(content.ctaSubtext) || "We've helped 50+ businesses grow. Let's write your chapter next."}
              </p>
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <button 
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-4 text-lg"
                >
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button 
                  onClick={() => onNavigate('/portfolio')}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 px-10 py-4 text-lg"
                >
                  View All Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}