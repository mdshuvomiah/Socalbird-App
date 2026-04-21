import { ArrowRight, ExternalLink, Code, Smartphone, Bot, Sparkles, TrendingUp, Award, Target, Zap, CheckCircle, Filter, X, Eye, ChevronRight, Play, Star, Layers } from 'lucide-react';
import { useState } from 'react';
import { useContent } from '../admin/ContentContext';

const ICON_MAP: any = { 
  TrendingUp, Award, Target, Zap, CheckCircle, Star, 
  Code, Smartphone, Bot, Layers, Filter, X, Eye, 
  ChevronRight, Play, ArrowRight, ExternalLink 
};

interface PortfolioProject {
  id: string | number;
  category: string;
  industry: string;
  title: string;
  problem?: string;
  solution?: string;
  description?: string;
  highlights?: string[];
  techStack?: string[];
  technologies?: string[];
  imageUrl?: string;
  visitUrl?: string;
  icon?: string;
  accentColor?: string;
  color?: string;
  results?: Array<{
    icon?: string;
    metric?: string;
    value?: string;
    label: string;
  }>;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  color: string;
}

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { getSectionContent } = useContent();

  const portfolioContent = getSectionContent('portfolio', '');
  
  const dynamicProjects: PortfolioProject[] = (Array.isArray(portfolioContent?.projects) ? portfolioContent.projects : []).filter(Boolean);
  const filters = ['All', 'Web Development', 'App Development', 'AI Chatbot'];
  
  const filteredProjects = (activeFilter === 'All' 
    ? dynamicProjects 
    : dynamicProjects.filter((project: PortfolioProject) => (typeof project.category === 'string' ? project.category : '') === activeFilter)).filter(Boolean);

  return (
    <div className="bg-[#0A0E27] text-white">
      {/* Hero Section - Ultra Modern */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          
          <div className="absolute inset-0 opacity-20">
            <div 
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 1.5px, transparent 1.5px)',
                backgroundSize: '40px 40px'
              }}
              className="absolute inset-0"
            />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Projects That Drive</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Real stories, real impact. See how we've helped businesses <span className="text-cyan-400 font-semibold">grow</span>, <span className="text-blue-400 font-semibold">automate</span>, and <span className="text-purple-400 font-semibold">scale</span>.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
              {[
                { value: '100+', label: 'Projects', color: 'from-cyan-500 to-blue-500' },
                { value: '50+', label: 'Clients', color: 'from-blue-500 to-purple-500' },
                { value: '4.9★', label: 'Rating', color: 'from-purple-500 to-pink-500' },
                { value: '5+', label: 'Years', color: 'from-pink-500 to-rose-500' }
              ].map((stat, i) => (
                <div key={i} className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Section */}
      <section className="py-12 px-4 border-t border-white/10 sticky top-0 z-40 bg-[#0A0E27]/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-gray-400">Filter by:</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="text-sm text-gray-500">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Bento Grid Style */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            {filteredProjects.map((study: PortfolioProject, index: number) => {
              const currentCategory = typeof study.category === 'string' ? study.category : '';
              const currentIndustry = typeof study.industry === 'string' ? study.industry : '';
              const Icon = ICON_MAP[study.icon || (currentCategory === 'AI Chatbot' ? 'Bot' : currentCategory === 'Web Development' ? 'Code' : 'Smartphone')] || Award;
              const isEven = index % 2 === 0;
              const accentColorClass = typeof study.accentColor === 'string' ? study.accentColor : (currentCategory === 'AI Chatbot' ? 'cyan' : currentCategory === 'Web Development' ? 'purple' : 'teal');
              const gradientColorClass = typeof study.color === 'string' ? study.color : (currentCategory === 'AI Chatbot' ? 'from-blue-600 to-cyan-500' : currentCategory === 'Web Development' ? 'from-purple-600 to-pink-500' : 'from-green-600 to-teal-500');
              
              return (
                <div
                  key={typeof study.id === 'string' || typeof study.id === 'number' ? study.id : index}
                  className="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
                  onMouseEnter={() => setHoveredProject(Number(study.id) || index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Top Accent Line */}
                  <div className={`h-1 bg-gradient-to-r ${gradientColorClass}`} />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientColorClass} opacity-5`} />
                  </div>

                  <div className="relative p-8 lg:p-12">
                    <div className={`grid lg:grid-cols-12 gap-12 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                      {/* Left: Content (7 cols) */}
                      <div className={`lg:col-span-7 space-y-8 ${isEven ? '' : 'lg:col-start-6'}`}>
                        {/* Header */}
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            <div className={`px-4 py-1.5 bg-gradient-to-r ${gradientColorClass} bg-opacity-20 border border-${accentColorClass}-500/30 rounded-full text-${accentColorClass}-400 text-xs font-bold`}>
                              {typeof study.category === 'string' ? study.category : ''}
                            </div>
                            <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs font-medium">
                              {typeof study.industry === 'string' ? study.industry : ''}
                            </div>
                          </div>

                          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            {typeof study.title === 'string' ? study.title : ''}
                          </h2>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2">
                            {Array.isArray(study.highlights) && study.highlights.filter(Boolean).map((highlight: string, i: number) => (
                              <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
                                <CheckCircle className="w-3 h-3 text-cyan-400" />
                                <span className="text-xs text-gray-400">{typeof highlight === 'string' ? highlight : ''}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Challenge & Solution */}
                        <div className="space-y-6">
                          <div className="relative pl-6 border-l-2 border-cyan-500/30">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full" />
                            <h3 className="text-lg font-bold text-white mb-2">The Challenge</h3>
                            <p className="text-gray-400 leading-relaxed">{typeof study.problem === 'string' ? study.problem : typeof study.description === 'string' ? study.description : ''}</p>
                          </div>
                          
                          <div className="relative pl-6 border-l-2 border-blue-500/30">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
                            <h3 className="text-lg font-bold text-white mb-2">Our Solution</h3>
                            <p className="text-gray-400 leading-relaxed">{typeof study.solution === 'string' ? study.solution : typeof study.description === 'string' ? study.description : ''}</p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Code className="w-5 h-5 text-cyan-400" />
                            Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {(Array.isArray(study.techStack) ? study.techStack : Array.isArray(study.technologies) ? study.technologies : []).filter(Boolean).map((tech: any, i: number) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/20 rounded-xl text-sm text-gray-300 hover:border-cyan-500/30 transition-colors"
                              >
                                {typeof tech === 'string' ? tech : ''}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                          <button
                            onClick={() => onNavigate('/contact')}
                            className={`group/btn relative px-8 py-4 bg-gradient-to-r ${gradientColorClass} text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                          >
                            <div className="relative flex items-center gap-3">
                              <span>Start Similar Project</span>
                              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </div>
                          </button>

                          {study.visitUrl && (typeof study.visitUrl === 'string') && study.visitUrl !== '' && (
                            <a
                              href={typeof study.visitUrl === 'string' ? study.visitUrl : '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/visit px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl font-bold text-white transition-all flex items-center gap-3 hover:border-cyan-500/50"
                            >
                              <span>Visit URL</span>
                              <ExternalLink className="w-5 h-5 group-hover/visit:translate-y-[-2px] group-hover/visit:translate-x-[2px] transition-transform text-cyan-400" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: Visual + Results (5 cols) */}
                      <div className={`lg:col-span-5 space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                        {/* Icon Display */}
                        <div className="relative rounded-2xl p-1 px-1 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden group/visual aspect-square flex items-center justify-center">
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradientColorClass} opacity-10`} />
                          
                          <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                            {study.imageUrl ? (
                              <img 
                                src={study.imageUrl} 
                                alt={study.title} 
                                className="w-full h-full object-cover transform group-hover/visual:scale-110 transition-transform duration-700"
                                style={{ aspectRatio: '1/1' }}
                              />
                            ) : (
                              <div className={`w-32 h-32 bg-gradient-to-br ${gradientColorClass} rounded-3xl flex items-center justify-center shadow-2xl transform group-hover/visual:scale-110 group-hover/visual:rotate-6 transition-all duration-500`}>
                                <Icon className="w-16 h-16 text-white" />
                              </div>
                            )}
                          </div>

                          {/* Floating Elements */}
                          <div className="absolute top-4 right-4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl" />
                          <div className="absolute bottom-4 left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
                        </div>

                        {/* Results Grid */}
                        <div>
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-cyan-400" />
                            Key Results
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {Array.isArray(study.results) && study.results.filter(Boolean).map((result: any, i: number) => {
                              const ResultIcon = ICON_MAP[result.icon] || Award;
                              return (
                                <div
                                  key={i}
                                  className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all group/result"
                                >
                                  <div className="space-y-3">
                                    <div className={`w-10 h-10 bg-gradient-to-br ${gradientColorClass} rounded-xl flex items-center justify-center group-hover/result:scale-110 transition-transform`}>
                                      <ResultIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                      <div className={`text-2xl font-bold bg-gradient-to-r ${gradientColorClass} bg-clip-text text-transparent`}>
                                        {typeof result.metric === 'string' ? result.metric : typeof result.value === 'string' ? result.value : ''}
                                      </div>
                                      <div className="text-xs text-gray-500 mt-1">{typeof result.label === 'string' ? result.label : ''}</div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  {hoveredProject === study.id && (
                    <div className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded-full text-white text-sm font-semibold animate-pulse">
                      <Eye className="w-4 h-4" />
                      <span>Viewing</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
              <Star className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Client Feedback</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(Array.isArray(portfolioContent?.testimonials) ? portfolioContent.testimonials : [
              {
                quote: "SocalBird transformed our customer service. The AI chatbot handles 80% of inquiries automatically. Best investment we've made!",
                author: "Sarah Johnson",
                role: "CEO, Fashion Store",
                rating: 5,
                color: 'from-cyan-500 to-blue-500'
              },
              {
                quote: "The team delivered a world-class mobile app on time and within budget. Their attention to detail is unmatched.",
                author: "Dr. Michael Chen",
                role: "Founder, HealthTech",
                rating: 5,
                color: 'from-blue-500 to-purple-500'
              },
              {
                quote: "Our new website generates 3x more leads. The design is stunning and the performance is incredible. Highly recommend!",
                author: "David Martinez",
                role: "Director, Real Estate",
                rating: 5,
                color: 'from-purple-500 to-pink-500'
              }
            ]).filter(Boolean).map((testimonial: Testimonial, i: number) => (
              <div
                key={i}
                className="relative rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 bg-gradient-to-br ${typeof testimonial.color === 'string' ? testimonial.color : 'from-cyan-500 to-blue-500'} opacity-5`} />
                </div>

                <div className="relative space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(Number(testimonial.rating) || 5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    "{typeof testimonial.quote === 'string' ? testimonial.quote : ''}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="font-bold text-white">{typeof testimonial.author === 'string' ? testimonial.author : ''}</div>
                    <div className="text-sm text-gray-500">{typeof testimonial.role === 'string' ? testimonial.role : ''}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Immersive */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full shadow-2xl">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Let's Create Your Success Story</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Ready to Build</span>
              <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>

            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Schedule a free consultation and let's discuss how we can achieve similar results for your business.
            </p>

            <div className="flex flex-wrap gap-6 justify-center pt-6">
              <button
                onClick={() => onNavigate('/contact')}
                className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-xl rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  <span>Start Your Project</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-12 pt-8">
              {[
                { icon: CheckCircle, text: 'Free Consultation' },
                { icon: Zap, text: 'Fast Turnaround' },
                { icon: Award, text: 'Proven Results' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
