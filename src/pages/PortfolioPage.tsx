import { useState, useMemo } from 'react';
import { ArrowRight, ExternalLink, Code, Smartphone, Bot, Sparkles, TrendingUp, Award, Target, Zap, CheckCircle, Filter, X, Eye, ChevronRight, Play, Star, Layers } from 'lucide-react';
import { useContent } from '../admin/ContentContext';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { getPageContent } = useContent();
  const portfolioContent = getPageContent('portfolio') || {};
  
  // Ultimate Safe Helper
  const __s = (val: any) => (val === null || val === undefined || typeof val === 'object') ? '' : String(val);

  const projectsData = useMemo(() => {
    const defaultData = [
      {
        id: 1,
        title: 'Fashion Store Automation',
        category: 'AI Chatbot',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
        description: 'Complete sales automation for a high-growth fashion brand. Handled 3,000+ daily inquiries.',
        visitUrl: '#',
        results: [
          { metric: '300%', label: 'Lead Growth', icon: 'TrendingUp' },
          { metric: '24/7', label: 'Availability', icon: 'Zap' },
          { metric: '45%', label: 'Cost Save', icon: 'Target' }
        ],
        icon: 'Bot'
      },
      {
        id: 2,
        title: 'Modern E-commerce Platform',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
        description: 'Ultra-fast Next.js store with real-time inventory and automated order processing.',
        visitUrl: '#',
        results: [
          { metric: '100ms', label: 'Load Time', icon: 'Zap' },
          { metric: '2.5X', label: 'Conversion', icon: 'TrendingUp' },
          { metric: 'SEO', label: 'Rank #1', icon: 'Sparkles' }
        ],
        icon: 'Code'
      }
    ];

    const cmsProjects = portfolioContent?.projects;
    const validCmsProjects = (Array.isArray(cmsProjects) && cmsProjects.length > 0) 
      ? cmsProjects.filter((p: any) => p && typeof p === 'object') 
      : [];
    
    // Absolute force-fallback
    const finalProjects = validCmsProjects.length > 0 ? validCmsProjects : defaultData;
      
    return finalProjects.map((p: any) => ({
      ...p,
      category: __s(p.category || 'Uncategorized'),
      results: Array.isArray(p.results) ? p.results.filter(Boolean) : []
    }));
  }, [portfolioContent]);

  const ICON_MAP: any = { 
    Code, Smartphone, Bot, Sparkles, TrendingUp, Award, Target, Zap, CheckCircle, Eye, Play, Star, Layers
  };

  const filters = ['All', 'Web Development', 'App Development', 'AI Chatbot'];
  
  const filteredProjects = useMemo(() => {
    const s = (val: any) => (val === null || val === undefined || typeof val === 'object') ? '' : String(val);
    const currentFilter = s(activeFilter).toLowerCase();
    if (currentFilter === 'all') return projectsData;
    
    return projectsData.filter((project: any) => {
      const projectCat = s(project.category).toLowerCase();
      return projectCat === currentFilter;
    });
  }, [activeFilter, projectsData]);

  return (
    <div className="min-h-screen bg-[#0A0E27] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">Our Masterpieces</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 transition-all duration-700">
            Showcasing Our <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites and apps; we build revenue-generating assets. Explore our latest success stories.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 ${activeFilter === filter
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((study: any, index: number) => {
            const Icon = ICON_MAP[study.icon] || Code;
            return (
              <div
                key={study.id || index}
                className="group relative"
                onMouseEnter={() => setHoveredProject(study.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Main Card */}
                <div className="relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm group-hover:border-cyan-500/30 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-transparent to-transparent opacity-60" />
                    
                    {/* Hover Overlay Icons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        <button className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                          <Eye size={24} />
                        </button>
                        <a 
                          href={study.visitUrl || '#'} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 shadow-xl hover:scale-110 transition-transform"
                        >
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      {study.category}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed font-medium">
                          {study.description}
                        </p>
                      </div>
                      <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                        <Icon size={28} className="text-cyan-400" />
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Array.isArray(study.results) && study.results.map((res: any, idx: number) => {
                        const ResIcon = ICON_MAP[res.icon] || TrendingUp;
                        return (
                          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors">
                            <ResIcon size={20} className="text-cyan-400 mx-auto mb-2" />
                            <div className="text-xl font-bold text-white mb-1">{res.metric}</div>
                            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{res.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Button */}
                    <div className="flex gap-4">
                      <a 
                        href={study.visitUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative bg-gradient-to-r from-cyan-500 to-blue-600 p-5 rounded-2xl shadow-lg shadow-cyan-500/20 overflow-hidden text-center"
                      >
                        <div className="relative z-10 flex items-center justify-center gap-2 font-bold text-white uppercase tracking-widest text-sm">
                          Visit Website
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Counter */}
        <div className="mt-32 text-center">
          <div className="inline-block p-1 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
            <div className="px-10 py-8 text-center bg-[#0D1128] rounded-[2rem] border border-cyan-500/20">
              <div className="text-4xl font-black text-white mb-2">{filteredProjects.length}</div>
              <div className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">Projects Loaded</div>
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Each project represents a unique success story of digital transformation and measurable business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
