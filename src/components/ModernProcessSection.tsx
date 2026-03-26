import { Users, Code, Shield, TrendingUp, ArrowRight, CheckCircle, Zap, Clock, Calendar, Target, Rocket, Sparkles, ChevronRight, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { useContent } from '../admin/ContentContext';

const defaultSteps = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    subtitle: 'Understanding Your Vision',
    description: 'We deep-dive into your business goals, target audience, and competition. A free 30-minute consultation to map out exactly what you need.',
    duration: '1-2 Days',
    timeline: 'Day 1-2',
    deliverables: [
      { name: 'Project brief', detail: 'Detailed scope document' },
      { name: 'Timeline & milestones', detail: 'Clear project roadmap' },
      { name: 'Tech stack proposal', detail: 'Best technologies for you' },
      { name: 'Pricing breakdown', detail: 'Transparent cost structure' }
    ]
  },
  {
    step: 2,
    title: 'Design & Development',
    subtitle: 'Building Your Solution',
    description: 'Our expert team designs and codes your solution using modern technologies. You get regular updates and preview links to track progress.',
    duration: '7-21 Days',
    timeline: 'Day 3-23',
    deliverables: [
      { name: 'UI/UX design mockups', detail: 'Pixel-perfect designs' },
      { name: 'Functional prototypes', detail: 'Interactive previews' },
      { name: 'Weekly progress reports', detail: 'Stay in the loop' },
      { name: 'Preview environment', detail: 'Test before launch' }
    ]
  },
  {
    step: 3,
    title: 'Testing & Quality Assurance',
    subtitle: 'Ensuring Perfection',
    description: 'Rigorous testing across devices, browsers, and real-world scenarios. We fix bugs, optimize performance, and ensure everything works flawlessly.',
    duration: '3-5 Days',
    timeline: 'Day 24-28',
    deliverables: [
      { name: 'Bug-free code', detail: 'Zero critical issues' },
      { name: 'Performance optimization', detail: 'Lightning-fast loading' },
      { name: 'Security hardening', detail: 'Protected from threats' },
      { name: 'Cross-device testing', detail: 'Works everywhere' }
    ]
  },
  {
    step: 4,
    title: 'Launch & Growth Support',
    subtitle: 'Going Live & Beyond',
    description: 'We handle deployment, DNS setup, and provide training. Plus, lifetime support to ensure your solution grows with your business.',
    duration: '1-2 Days + Ongoing',
    timeline: 'Day 29+ Forever',
    deliverables: [
      { name: 'Live deployment', detail: 'Smooth go-live process' },
      { name: 'Training videos', detail: 'Easy-to-follow tutorials' },
      { name: 'Documentation', detail: 'Complete user guides' },
      { name: 'Lifetime support access', detail: '24/7 help available' }
    ]
  }
];

interface ModernProcessSectionProps {
  onNavigate: (page: string) => void;
}

export function ModernProcessSection({ onNavigate }: ModernProcessSectionProps) {
  const { getSectionContent } = useContent();
  const content = getSectionContent('home', 'process') || {};

  const icons = [Users, Code, Shield, TrendingUp];
  const styles = [
    { gradient: 'from-cyan-500 to-blue-500', glowColor: 'cyan-500', borderColor: 'border-cyan-500', bgColor: 'bg-cyan-500', stickyTop: 'top-24' },
    { gradient: 'from-purple-500 to-pink-500', glowColor: 'purple-500', borderColor: 'border-purple-500', bgColor: 'bg-purple-500', stickyTop: 'top-32' },
    { gradient: 'from-emerald-500 to-green-500', glowColor: 'emerald-500', borderColor: 'border-emerald-500', bgColor: 'bg-emerald-500', stickyTop: 'top-40' },
    { gradient: 'from-orange-500 to-red-500', glowColor: 'orange-500', borderColor: 'border-orange-500', bgColor: 'bg-orange-500', stickyTop: 'top-48' }
  ];

  return (
    <section className="py-24 px-4 border-t border-white/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Diagonal Lines */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" style={{ transform: 'translateX(-30vw) rotate(15deg)' }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" style={{ transform: 'translateX(30vw) rotate(-15deg)' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6 hover:border-cyan-500/50 transition-all group">
            <Sparkles className="text-cyan-400 group-hover:scale-110 transition-transform" size={16} />
            <span className="text-sm font-semibold text-cyan-300">{content.badge || 'AI-Powered Process'}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {content.title || 'From Idea to Launch'}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block mt-2">
              {content.titleHighlight || 'In Just 4 Smart Steps'}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {content.subtitle || 'Our AI-enhanced workflow delivers enterprise-grade solutions at startup speed'}
          </p>

          {/* Interactive Timeline Preview */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 overflow-hidden group hover:border-cyan-500/50 transition-all duration-500">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Activity className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-gray-400">Project Timeline</div>
                      <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">12-29 Days Average</div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-full">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-emerald-300">98% On-Time</span>
                  </div>
                </div>

                {/* Modern Progress Bar with Segments */}
                <div className="relative">
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { color: 'from-cyan-500 to-blue-500', label: 'Discover', days: '1-2d' },
                      { color: 'from-purple-500 to-pink-500', label: 'Build', days: '7-21d' },
                      { color: 'from-emerald-500 to-green-500', label: 'Test', days: '3-5d' },
                      { color: 'from-orange-500 to-red-500', label: 'Launch', days: '1-2d' },
                    ].map((segment, i) => (
                      <div key={i} className="group/seg cursor-pointer">
                        <div className={`h-4 bg-gradient-to-r ${segment.color} rounded-full relative overflow-hidden hover:h-5 transition-all duration-300`}>
                          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/seg:translate-x-[100%] transition-transform duration-1000" />
                        </div>
                        <div className="mt-3 text-center">
                          <div className="text-xs font-bold text-white">{segment.label}</div>
                          <div className="text-xs text-gray-500 mt-1">{segment.days}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps - Enhanced Sticky Cards */}
        <div className="max-w-6xl mx-auto">
          {(Array.isArray(content.steps) && content.steps.length > 0 ? content.steps : defaultSteps).map((item: any, i: number) => {
            const phase = {
              ...item,
              icon: icons[i % icons.length],
              ...styles[i % styles.length],
              metrics: item.metrics || [
                { accuracy: '99%', satisfaction: '5/5' },
                { speed: '3x faster', quality: 'A+' },
                { uptime: '99.9%', speed: '<2s load' },
                { support: '24/7', response: '<1 hour' }
              ][i % 4],
              deliverables: Array.isArray(item.deliverables) ? item.deliverables.map((d: any, di: number) => ({
                ...d,
                icon: ['📋', '🗓️', '⚙️', '💰', '🎨', '🔧', '📊', '👀'][di % 8] || '✨'
              })) : []
            };
            return (
            <div 
              key={i} 
              className={`relative mb-[20vh] last:mb-12 lg:sticky ${phase.stickyTop} transition-all duration-500`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Floating Info Cards */}
                <div className="lg:w-72 flex-shrink-0 flex flex-col items-start gap-4">
                  {/* Main Icon with Hexagon Style */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className={`relative w-36 h-36 bg-gradient-to-br ${phase.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 hover:rotate-3`}>
                      <div className="absolute inset-2 border-2 border-white/20 rounded-3xl" />
                      <phase.icon size={56} className="text-white relative z-10" />
                      
                      {/* Floating Step Badge */}
                      <div className="absolute -top-3 -right-3 w-14 h-14 bg-[#0A0E27] border-2 border-white/20 rounded-2xl flex items-center justify-center shadow-xl">
                        <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-50 rounded-2xl blur`} />
                        <span className="text-2xl font-black text-white relative z-10">{phase.step}</span>
                      </div>
                    </div>
                  </div>

                  {/* Info Cards with Modern Design */}
                  <div className="w-full space-y-3">
                    {/* Duration */}
                    <div className="group/card relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${phase.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity`} />
                      <div className="relative flex items-start gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${phase.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Clock className="text-white" size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-gray-400 uppercase mb-1">Duration</div>
                          <div className="text-lg font-black text-white">{phase.duration}</div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="group/card relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${phase.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity`} />
                      <div className="relative flex items-start gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${phase.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Calendar className="text-white" size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-gray-400 uppercase mb-1">Timeline</div>
                          <div className="text-lg font-black text-white">{phase.timeline}</div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics with Animated Progress */}
                    <div className="group/card relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${phase.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity`} />
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className={`text-${phase.glowColor}`} size={18} />
                          <span className="text-xs font-bold text-gray-400 uppercase">Key Metrics</span>
                        </div>
                        <div className="space-y-2">
                          {Object.entries(phase.metrics).map(([key, value]) => (
                            <div key={key} className="group/metric">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-400 capitalize">{key}</span>
                                <span className={`text-sm font-black bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent`}>
                                  {String(value)}
                                </span>
                              </div>
                              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className={`h-full bg-gradient-to-r ${phase.gradient} rounded-full group-hover/metric:w-full transition-all duration-1000`} style={{ width: '85%' }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Main Content Card with Creative Design */}
                <div className="flex-1 min-w-0">
                  <div className="group/main relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20">
                    {/* Animated Top Accent */}
                    <div className="relative h-2 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${phase.gradient}`} />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent translate-x-[-100%] group-hover/main:translate-x-[100%] transition-transform duration-1000" />
                    </div>

                    {/* Corner Decorations */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${phase.gradient} opacity-5 rounded-bl-[100px]`} />
                    <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${phase.gradient} opacity-5 rounded-tr-[100px]`} />

                    {/* Content */}
                    <div className="p-8 relative">
                      {/* Header with Step Badge */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                              {phase.title}
                            </h3>
                          </div>
                          <p className={`text-base md:text-lg font-semibold bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent mb-4`}>
                            {phase.subtitle}
                          </p>
                        </div>
                        <div className={`px-4 py-2 bg-gradient-to-r ${phase.gradient} rounded-xl shadow-lg hover:scale-110 transition-transform cursor-pointer`}>
                          <span className="text-xs font-black text-white">STEP {phase.step}/4</span>
                        </div>
                      </div>

                      {/* Description with Icon */}
                      <div className="flex gap-4 mb-8">
                        <div className={`w-1 bg-gradient-to-b ${phase.gradient} rounded-full flex-shrink-0`} />
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>

                      {/* Deliverables with Emoji Icons */}
                      <div className="border-t border-white/10 pt-8">
                        <div className="flex items-center gap-2 mb-6">
                          <CheckCircle className="text-cyan-400 flex-shrink-0" size={20} />
                          <span className="text-sm font-bold text-white uppercase tracking-wider">Deliverables</span>
                          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          {phase.deliverables.map((item, i) => (
                            <div 
                              key={i} 
                              className="group/item relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
                            >
                              {/* Hover Glow Effect */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-0 group-hover/item:opacity-10 transition-opacity`} />
                              
                              <div className="relative flex items-start gap-4">
                                {/* Emoji Icon */}
                                <div className="text-3xl group-hover/item:scale-125 transition-transform duration-300">
                                  {item.icon}
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold text-white mb-1 leading-tight group-hover/item:text-cyan-300 transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-gray-500 leading-relaxed">{item.detail}</div>
                                </div>

                                {/* Hover Arrow */}
                                <ChevronRight className="text-cyan-400 opacity-0 group-hover/item:opacity-100 transition-all flex-shrink-0 group-hover/item:translate-x-1" size={18} />
                              </div>

                              {/* Bottom Accent Line */}
                              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${phase.gradient} group-hover/item:w-full transition-all duration-500`} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Large Step Number Watermark */}
                    <div className="absolute bottom-4 right-8 opacity-5 pointer-events-none">
                      <div className="text-9xl font-black text-white">
                        {phase.step}
                      </div>
                    </div>

                    {/* Floating Action Button */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover/main:opacity-100 transition-all duration-300 transform group-hover/main:scale-100 scale-75">
                      <div className={`w-12 h-12 bg-gradient-to-br ${phase.gradient} rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:rotate-90 transition-transform duration-300`}>
                        <ArrowRight className="text-white" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Bottom Premium Stats Section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-orange-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6 group hover:border-cyan-500/50 transition-all">
                  <Rocket className="text-cyan-400 group-hover:translate-y-[-2px] transition-transform" size={16} />
                  <span className="text-sm font-semibold text-cyan-300">Proven Excellence</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-4">
                  Why <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Thousands</span> Choose Us
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                  Real numbers from real projects
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
                {[
                  {
                    stat: '2-4',
                    unit: 'Weeks',
                    label: 'Average Delivery',
                    description: 'Start to launch',
                    icon: Zap,
                    color: 'from-cyan-400 to-blue-500'
                  },
                  {
                    stat: '100',
                    unit: '+',
                    label: 'Projects Done',
                    description: 'Happy clients',
                    icon: CheckCircle,
                    color: 'from-purple-400 to-pink-500'
                  },
                  {
                    stat: '98',
                    unit: '%',
                    label: 'On-Time Rate',
                    description: 'We deliver',
                    icon: Shield,
                    color: 'from-emerald-400 to-green-500'
                  },
                  {
                    stat: '24',
                    unit: '/7',
                    label: 'Support',
                    description: 'Always here',
                    icon: TrendingUp,
                    color: 'from-orange-400 to-red-500'
                  },
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="text-center relative z-10">
                      {/* Icon */}
                      <div className="relative mb-6 inline-block">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <item.icon className="text-cyan-400 group-hover:scale-110 transition-transform" size={28} />
                        </div>
                        {/* Animated Ring */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
                      </div>

                      {/* Stat */}
                      <div className="mb-2">
                        <span className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.stat}
                        </span>
                        <span className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.unit}
                        </span>
                      </div>

                      {/* Label */}
                      <div className="text-sm md:text-base font-bold text-white mb-1">{item.label}</div>
                      <div className="text-xs md:text-sm text-gray-500">{item.description}</div>
                    </div>

                    {/* Bottom Line Accent */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500 rounded-full`} />
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 md:px-16 py-7 text-base md:text-xl font-bold shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 rounded-2xl"
                >
                  <Rocket className="mr-3 group-hover:translate-y-[-2px] transition-transform" size={22} />
                  Start Your Project Today
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={22} />
                </Button>
                <div className="mt-6 flex items-center justify-center gap-6 text-xs md:text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-emerald-500" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-emerald-500" />
                    <span>No obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-emerald-500" />
                    <span>Quote in 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}