import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Sparkles, Send, Zap, Star, Award, Users } from 'lucide-react';
import { useContent } from '../admin/ContentContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { getPageContent } = useContent();
  const brandData = getPageContent('brand');
  const logoText = brandData?.logo?.text || 'SocalBird';
  const logoType = brandData?.logo?.type || 'text';
  const logoImageUrl = brandData?.logo?.imageUrl || '';
  const logoGradient = brandData?.logo?.gradient || 'from-cyan-400 via-blue-500 to-purple-500';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0E27] overflow-hidden">
      {/* Dramatic Wave Shape Top */}
      <div className="absolute top-0 left-0 right-0 h-40 -mt-40">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q360,20 720,80 T1440,80 L1440,160 L0,160 Z"
            fill="#0A0E27"
          />
          <path
            d="M0,90 Q360,30 720,90 T1440,90 L1440,160 L0,160 Z"
            fill="url(#waveGradient)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Advanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Animated Orbs */}
        <div className="absolute -top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />

        {/* Mesh Gradient Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0px, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.3) 0px, transparent 50%)
            `
          }}
        />

        {/* Dot Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-60 right-1/4 w-24 h-24 border-2 border-cyan-500/20 rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-60 left-1/3 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg rotate-45 animate-pulse" style={{ animationDuration: '7s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Hero CTA - Bento Box Style */}
        <div className="pt-24 pb-12">
          <div className="grid md:grid-cols-12 gap-6 max-w-7xl mx-auto">
            {/* Large CTA Card - Spans 8 columns */}
            <div className="md:col-span-8 relative group">
              <div
                className="relative h-full rounded-3xl p-10 md:p-12 overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(139, 92, 246, 0.08) 100%)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
                    <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                    <span className="text-sm font-bold text-cyan-400">Limited Time Offer</span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <span className="text-white">Launch Your </span>
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Dream Project
                      </span>
                      <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                        <path d="M0 8 Q50 2, 100 8 T200 8" stroke="url(#lineGradient)" strokeWidth="3" fill="none" />
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </h2>

                  <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                    Get 20% off your first project. Transform your business with our cutting-edge solutions.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => onNavigate('/contact')}
                      className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-center gap-3">
                        <Send className="w-5 h-5" />
                        <span>Claim Your Offer</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/portfolio')}
                      className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      View Our Work
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl opacity-50" />
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl opacity-50" />
              </div>
            </div>

            {/* Stats Cards - 4 columns */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Stat 1 */}
              <div
                className="relative rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div
                className="relative rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content - Asymmetric Bento Grid */}
        <div className="py-12">
          <div className="grid md:grid-cols-12 gap-6 max-w-7xl mx-auto">
            {/* Company Info - Large Card */}
            <div className="md:col-span-5">
              <div
                className="h-full rounded-2xl p-8 border border-white/10 hover:border-cyan-500/20 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="mb-6">
                  <h3 className="text-5xl font-bold mb-2">
                    {logoType === 'image' && logoImageUrl ? (
                      <img src={logoImageUrl} alt={logoText} className="h-16 object-contain" />
                    ) : (
                      <span className={`bg-gradient-to-r ${logoGradient} bg-clip-text text-transparent`}>
                        {logoText}
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-gray-500 ml-2">5.0 Rating</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  We craft exceptional digital experiences through innovative web development, mobile apps, and AI-powered solutions.
                  Your success is our mission.
                </p>

                {/* Social Links - Modern Pills */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook', color: 'from-blue-600 to-blue-500' },
                    { icon: Instagram, label: 'Instagram', color: 'from-pink-600 to-orange-500' },
                    { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-700 to-blue-600' },
                    { icon: Twitter, label: 'Twitter', color: 'from-sky-500 to-blue-500' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-9 h-9 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <social.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links - Compact Grid */}
            <div className="md:col-span-3 space-y-6">
              {/* Services */}
              <div
                className="rounded-2xl p-6 border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.02) 0%, transparent 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                  Services
                </h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'AI Chatbots', page: '/ai-chatbot-solutions' },
                    { label: 'Web Apps', page: '/web-development' },
                    { label: 'Mobile Apps', page: '/app-development' }
                  ].map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => onNavigate(item.page)}
                        className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all text-sm"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div
                className="rounded-2xl p-6 border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, transparent 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full" />
                  Company
                </h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'About', page: '/about' },
                    { label: 'Portfolio', page: '/portfolio' },
                    { label: 'Contact', page: '/contact' }
                  ].map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => onNavigate(item.page)}
                        className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all text-sm"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact - Vertical Cards */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>

              {/* Email */}
              <a
                href="mailto:info@socalbird.com"
                className="group block relative rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.03) 0%, transparent 100%)', backdropFilter: 'blur(10px)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 mb-1">Email Us</div>
                    <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors truncate font-medium">
                      info@socalbird.com
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+15551234567"
                className="group block relative rounded-2xl p-5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 100%)', backdropFilter: 'blur(10px)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">Call Us</div>
                    <div className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors font-medium">
                      +1 (555) 123-4567
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </a>

              {/* Location */}
              <div
                className="relative rounded-2xl p-5 border border-white/10"
                style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, transparent 100%)', backdropFilter: 'blur(10px)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">Location</div>
                    <div className="text-sm text-gray-300 font-medium">Southern California, USA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Ultra Modern */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <p className="text-gray-500 text-sm">
                © {currentYear} <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text font-bold">{logoText}</span> • Crafted with passion
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms', 'Cookies'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="group text-gray-500 hover:text-cyan-400 text-sm transition-all relative font-medium"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
