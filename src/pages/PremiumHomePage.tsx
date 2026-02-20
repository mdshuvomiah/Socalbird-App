import { ArrowRight, Check, Star, MessageSquare, Code, Smartphone, TrendingUp, Shield, Zap, Users, Award, Clock, ChevronRight, Facebook, Instagram, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

interface PremiumHomePageProps {
  onNavigate: (page: string) => void;
}

export function PremiumHomePage({ onNavigate }: PremiumHomePageProps) {
  return (
    <div className="bg-dark text-white">
      {/* Hero Section - PERFECTED HEIGHT */}
      <section className="relative pt-24 pb-12 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute inset-0 grid-pattern" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left - Main Content */}
            <div className="space-y-6 fade-in-view">
              {/* Badge - PERFECTED */}
              <div className="badge-modern fade-in-view delay-100">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Premium Development Agency Since 2020</span>
              </div>

              {/* Main Headline - OPTIMIZED SIZE */}
              <div className="space-y-3 fade-in-view delay-200">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Build, Automate &
                  <span className="text-gradient-primary block">Scale Your Business</span>
                </h1>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Expert <span className="text-primary font-semibold">Web Development</span>, 
                  <span className="text-primary font-semibold"> AI Chatbot Solutions</span>, and 
                  <span className="text-primary font-semibold"> Mobile Apps</span> for small to mid-sized businesses, e-commerce, restaurants, and scaling startups.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 fade-in-view delay-300">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="btn-primary text-sm px-6 py-5"
                >
                  Get Started - Free Consultation
                  <ArrowRight className="ml-2" size={18} />
                </Button>
                
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  size="lg"
                  className="btn-outline-primary text-sm px-6 py-5"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Trust Elements - Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 fade-in-view delay-400">
                {[
                  { number: '100+', label: 'Projects Completed', icon: Award },
                  { number: '50+', label: 'Happy Clients', icon: Users },
                  { number: '4.9★', label: 'Client Rating', icon: Star },
                ].map((stat, i) => (
                  <div key={i} className="stat-card zoom-in" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
                    <stat.icon className="mx-auto mb-2 text-primary" size={18} />
                    <div className="text-xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Service Guarantees */}
              <div className="flex flex-wrap gap-3 pt-2 fade-in-view delay-500">
                {[
                  { icon: Check, text: 'Money-Back Guarantee' },
                  { icon: Clock, text: 'Fast Delivery' },
                  { icon: Shield, text: '100% Secure' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <item.icon size={12} className="text-primary" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual Element */}
            <div className="relative fade-in-view delay-600">
              <div className="relative">
                {/* Main Card */}
                <div className="glass-card-elevated rounded-3xl p-6 border-gradient-animated">
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="text-xl font-bold text-white mb-1">Complete Tech Stack</h3>
                      <p className="text-xs text-gray-400">Modern technologies for scalable solutions</p>
                    </div>

                    {/* Tech Stack Icons */}
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Frameworks & Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {['WordPress', 'Laravel', 'Next.js', 'React', 'Node.js', 'MongoDB'].map((tech, i) => (
                          <div key={i} className="px-3 py-1.5 bg-dark-elevated rounded-lg text-xs font-medium border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all zoom-in" style={{ animationDelay: `${0.7 + i * 0.08}s` }}>
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Features with More Details */}
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Core Services</div>
                      <div className="space-y-3">
                        {[
                          { 
                            icon: MessageSquare, 
                            title: 'AI Chatbot Automation', 
                            desc: 'Facebook • WhatsApp • Instagram • Web',
                            details: 'Starting ৳5,000/month',
                            stat: '24/7 Support',
                            color: 'text-cyan-400'
                          },
                          { 
                            icon: Code, 
                            title: 'Web Development', 
                            desc: 'SEO-Optimized • Responsive • Fast',
                            details: 'Custom & CMS Solutions',
                            stat: '<100ms Load',
                            color: 'text-purple-400'
                          },
                          { 
                            icon: Smartphone, 
                            title: 'Mobile Apps', 
                            desc: 'iOS • Android • Cross-Platform',
                            details: 'Native & React Native',
                            stat: '4.9★ Rating',
                            color: 'text-pink-400'
                          },
                        ].map((feature, i) => (
                          <div key={i} className="group slide-in-right hover:bg-dark-elevated/50 p-3 rounded-xl transition-all border border-transparent hover:border-primary/20" style={{ animationDelay: `${1 + i * 0.12}s` }}>
                            <div className="flex gap-3 items-start">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                                <feature.icon size={20} className="text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-1">
                                  <div className="font-semibold text-white text-sm">{feature.title}</div>
                                  <div className={`text-xs font-bold ${feature.color} px-2 py-0.5 bg-dark rounded flex-shrink-0 ml-2`}>
                                    {feature.stat}
                                  </div>
                                </div>
                                <div className="text-xs text-gray-400 mb-1">{feature.desc}</div>
                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                  <Check size={10} className="text-primary flex-shrink-0" />
                                  <span>{feature.details}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="border-t border-white/10 pt-4">
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: 'Delivery', value: '7-14 Days' },
                          { label: 'Support', value: 'Lifetime' },
                          { label: 'Warranty', value: '90 Days' },
                        ].map((stat, i) => (
                          <div key={i} className="text-center zoom-in" style={{ animationDelay: `${1.4 + i * 0.1}s` }}>
                            <div className="text-base font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button Inside Card */}
                    <div className="border-t border-white/10 pt-4 fade-in-view delay-500">
                      <Button
                        onClick={() => onNavigate('/contact')}
                        className="w-full btn-primary py-3 text-sm"
                      >
                        Request a Quote
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating Info Cards - RIGHT SIDE */}
                <div className="absolute -bottom-6 -right-6 glass-card px-4 py-3 rounded-xl border border-primary/30 zoom-in delay-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Shield className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">100% Secure</div>
                      <div className="text-xs text-gray-400">Money-Back Guarantee</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 glass-card px-4 py-3 rounded-xl border border-purple-500/30 zoom-in delay-800 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Users className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">100+ Clients</div>
                      <div className="text-xs text-gray-400">Trusted Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Trust Element */}
      <section className="py-24 px-4 border-t border-b border-white/10 relative overflow-hidden">
        {/* Modern Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 229, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Modern Header with Stats */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8 fade-in-view">
            <div>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-4 border border-primary/20">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 rounded-full border-2 border-dark bg-gradient-to-br from-cyan-500 to-blue-500" />
                  <div className="w-6 h-6 rounded-full border-2 border-dark bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div className="w-6 h-6 rounded-full border-2 border-dark bg-gradient-to-br from-orange-500 to-red-500" />
                </div>
                <span className="text-xs font-semibold text-gray-300">100+ Happy Clients</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Delivering exceptional digital solutions across multiple industries
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">98%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Client Retention</div>
              </div>
              <div className="h-16 w-px bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">4.9</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Featured Client Results - Bento Grid Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                company: 'StyleHub',
                industry: 'E-commerce Fashion',
                logo: 'SH',
                gradient: 'from-cyan-500 via-blue-500 to-cyan-600',
                metric: '+385%',
                metricLabel: 'Revenue Growth',
                period: '6 months',
                services: ['AI Chatbot', 'Web Platform'],
                testimonial: 'Customer engagement increased dramatically',
                featured: true
              },
              {
                company: 'TechConsult',
                industry: 'SaaS Platform',
                logo: 'TC',
                gradient: 'from-purple-500 via-pink-500 to-purple-600',
                metric: '12K+',
                metricLabel: 'Active Users',
                period: '3 months',
                services: ['Web App', 'Mobile App'],
                testimonial: 'Seamless user experience on all platforms'
              },
              {
                company: 'FreshBites',
                industry: 'Food Delivery',
                logo: 'FB',
                gradient: 'from-orange-500 via-red-500 to-orange-600',
                metric: '24/7',
                metricLabel: 'AI Automation',
                period: 'Ongoing',
                services: ['WhatsApp Bot', 'Website'],
                testimonial: 'Never miss an order, even at 3 AM'
              },
              {
                company: 'HealthConnect',
                industry: 'Healthcare Tech',
                logo: 'HC',
                gradient: 'from-emerald-500 via-green-500 to-emerald-600',
                metric: '15K',
                metricLabel: 'Appointments',
                period: 'Monthly',
                services: ['Mobile App', 'AI Support'],
                testimonial: 'Patient satisfaction at all-time high'
              },
              {
                company: 'ShopFlow',
                industry: 'E-commerce Platform',
                logo: 'SF',
                gradient: 'from-blue-500 via-indigo-500 to-blue-600',
                metric: '99.9%',
                metricLabel: 'Uptime',
                period: '12 months',
                services: ['Web Platform', 'API'],
                testimonial: 'Rock-solid infrastructure'
              },
              {
                company: 'AgencyPro',
                industry: 'Digital Marketing',
                logo: 'AP',
                gradient: 'from-pink-500 via-rose-500 to-pink-600',
                metric: '2.4X',
                metricLabel: 'Lead Generation',
                period: '4 months',
                services: ['Chatbot', 'Landing Pages'],
                testimonial: 'Automated lead capture that converts'
              },
            ].map((client, i) => (
              <div
                key={i}
                className={`group relative glass-card-elevated rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer fade-in-view ${
                  client.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${client.gradient}`} />

                <div className="p-6">
                  {/* Header with Logo */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Modern Logo */}
                      <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${client.gradient} p-[2px] group-hover:scale-110 transition-transform`}>
                        <div className="w-full h-full bg-dark rounded-[10px] flex items-center justify-center">
                          <span className="text-lg font-bold text-white">{client.logo}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                          {client.company}
                        </h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {client.industry}
                        </p>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {client.featured && (
                      <div className="glass-card px-3 py-1 rounded-full border border-primary/30">
                        <span className="text-xs font-semibold text-primary">Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Metric Display */}
                  <div className="mb-6">
                    <div className="flex items-end gap-3 mb-2">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${client.gradient} bg-clip-text text-transparent`}>
                        {client.metric}
                      </div>
                      <div className="text-sm text-gray-400 mb-1">{client.metricLabel}</div>
                    </div>
                    <div className="text-xs text-gray-500">in {client.period}</div>
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {client.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10"
                      >
                        {service}
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-sm text-gray-400 italic">"{client.testimonial}"</p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <ChevronRight className="text-primary" size={16} />
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
              </div>
            ))}
          </div>

          {/* Modern Stats Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-view delay-600">
            {[
              { 
                icon: Award, 
                value: '100+', 
                label: 'Projects Delivered',
                color: 'from-cyan-500 to-blue-500',
                iconColor: 'text-cyan-400'
              },
              { 
                icon: Users, 
                value: '50+', 
                label: 'Active Clients',
                color: 'from-purple-500 to-pink-500',
                iconColor: 'text-purple-400'
              },
              { 
                icon: TrendingUp, 
                value: '15+', 
                label: 'Industries',
                color: 'from-orange-500 to-red-500',
                iconColor: 'text-orange-400'
              },
              { 
                icon: Star, 
                value: '4.9/5', 
                label: 'Client Rating',
                color: 'from-emerald-500 to-green-500',
                iconColor: 'text-emerald-400'
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="relative group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={stat.iconColor} size={24} />
                </div>

                {/* Value */}
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>

                {/* Subtle corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`} />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center fade-in-view delay-800">
            <div className="glass-card-elevated rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to Join Our Success Stories?
                  </h3>
                  <p className="text-gray-400">
                    Let's discuss how we can help grow your business
                  </p>
                </div>
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  className="btn-primary px-8 py-4 whitespace-nowrap"
                >
                  View Full Portfolio
                  <ChevronRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Detailed */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-view">
            <div className="badge-modern mx-auto mb-6">Our Services</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Digital Solutions for
              <span className="text-gradient-primary block">Every Business Need</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Serving small businesses, e-commerce stores, restaurants, service providers, agencies, and startups
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MessageSquare,
                title: 'AI Chatbot Solutions',
                subtitle: 'Monthly Subscription Packages',
                description: '24/7 automated customer support and engagement across all major platforms',
                features: [
                  'Facebook Messenger Automation',
                  'WhatsApp Business Integration',
                  'Instagram DM Automation',
                  'Facebook Comment Auto-Reply',
                  'Website Chatbot Plugin',
                  'Lead Capture & CRM Integration',
                ],
                highlight: 'Most Popular',
                link: '/ai-chatbot-solutions',
              },
              {
                icon: Code,
                title: 'Web Development',
                subtitle: 'Custom & CMS Solutions',
                description: 'Professional websites that drive conversions and rank on Google',
                features: [
                  'WordPress Development',
                  'Laravel Applications',
                  'Next.js / React Apps',
                  'MERN Stack Development',
                  'SEO Optimization',
                  'Responsive Design',
                ],
                link: '/web-development',
              },
              {
                icon: Smartphone,
                title: 'Mobile App Development',
                subtitle: 'iOS & Android',
                description: 'Native and cross-platform mobile applications for your business',
                features: [
                  'Native iOS Development',
                  'Native Android Development',
                  'Cross-Platform (React Native)',
                  'UI/UX Design',
                  'App Store Optimization',
                  'Maintenance & Support',
                ],
                link: '/app-development',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="card-modern p-8 cursor-pointer fade-in-view"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => onNavigate(service.link)}
              >
                {service.highlight && (
                  <div className="badge-featured mb-4 text-xs px-3 py-1">
                    🔥 {service.highlight}
                  </div>
                )}

                <div className="feature-icon mb-6">
                  <service.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{service.subtitle}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 fade-in-view delay-600">
            {[
              { value: '300%', label: 'Average ROI', icon: TrendingUp },
              { value: '10K+', label: 'Active Users', icon: Users },
              { value: '99.9%', label: 'Uptime SLA', icon: Shield },
              { value: '<100ms', label: 'Response Time', icon: Zap },
            ].map((stat, i) => (
              <div key={i} className="stat-card zoom-in" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                <stat.icon className="mx-auto mb-3 text-primary" size={32} />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps - Trust Element */}
      <section className="py-32 px-4 bg-dark-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-in-view">
            <div className="badge-modern mx-auto mb-6">Our Process</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How We <span className="text-gradient-primary">Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven 4-step process that ensures your project's success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Discovery & Planning', 
                desc: 'We analyze your business goals, target audience, and competition to create a tailored strategy',
                icon: Users,
              },
              { 
                step: '02', 
                title: 'Design & Development', 
                desc: 'Our expert team builds your solution using the latest technologies and best practices',
                icon: Code,
              },
              { 
                step: '03', 
                title: 'Testing & Launch', 
                desc: 'Rigorous testing ensures everything works perfectly before going live',
                icon: Shield,
              },
              { 
                step: '04', 
                title: 'Support & Growth', 
                desc: 'Ongoing maintenance, updates, and optimization to ensure continued success',
                icon: TrendingUp,
              },
            ].map((phase, index) => (
              <div key={index} className="relative fade-in-view" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="text-6xl font-bold text-primary/20 mb-4">{phase.step}</div>
                
                <div className="feature-icon mb-6">
                  <phase.icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{phase.desc}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-primary">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Trust Element */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-in-view">
            <div className="badge-modern mx-auto mb-6">Client Success Stories</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What Our <span className="text-gradient-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from real businesses across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'The AI chatbot increased our response rate by 300% and we\'re capturing 3X more leads. Best investment we\'ve made!',
                author: 'Sarah Mitchell',
                role: 'CEO, StyleHub',
                industry: 'E-commerce',
                rating: 5,
                result: '+300% Response Rate',
              },
              {
                quote: 'Our website now handles 10K+ concurrent users with zero downtime. The performance improvement is phenomenal.',
                author: 'James Parker',
                role: 'Founder, TechConsult',
                industry: 'SaaS Startup',
                rating: 5,
                result: '10K+ Users',
              },
              {
                quote: 'The mobile app has a 4.9★ rating on both stores. The user experience and code quality are outstanding.',
                author: 'Lisa Rodriguez',
                role: 'CTO, HealthConnect',
                industry: 'Healthcare',
                rating: 5,
                result: '4.9★ Rating',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card fade-in-view"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-primary mt-1">{testimonial.industry}</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More testimonials link */}
          <div className="text-center mt-12 fade-in-view delay-600">
            <Button
              onClick={() => onNavigate('/portfolio')}
              variant="outline"
              className="btn-outline-primary"
            >
              View More Case Studies
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-32 px-4 bg-dark-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-in-view">
            <div className="badge-modern mx-auto mb-6">Who We Serve</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Perfect Solutions for <span className="text-gradient-primary">Your Industry</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Small Businesses', icon: '🏪' },
              { name: 'E-commerce', icon: '🛒' },
              { name: 'Restaurants', icon: '🍽️' },
              { name: 'Service Businesses', icon: '⚙️' },
              { name: 'Agencies', icon: '🎯' },
              { name: 'Startups', icon: '🚀' },
            ].map((audience, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl text-center hover:border-primary transition-all cursor-pointer zoom-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{audience.icon}</div>
                <div className="text-sm font-semibold">{audience.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Trust Element */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20 fade-in-view">
            <div className="badge-modern mx-auto mb-6">FAQ</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Most projects take 2-8 weeks depending on complexity. AI chatbot setup can be done in 1-2 weeks, while custom web/app development takes 4-8 weeks.',
              },
              {
                q: 'Do you offer monthly payment plans?',
                a: 'Yes! Our AI Chatbot solutions come with flexible monthly subscription packages. For web and app development, we offer milestone-based payments.',
              },
              {
                q: 'What platforms do your chatbots support?',
                a: 'We provide chatbot automation for Facebook Messenger, WhatsApp Business, Instagram DM, Facebook Comments, and website chat plugins.',
              },
              {
                q: 'Do you provide ongoing support and maintenance?',
                a: 'Absolutely! All our projects include a warranty period, and we offer ongoing maintenance and support packages to ensure your solution stays up-to-date.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl fade-in-view"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary opacity-20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="fade-in-view">
            <div className="badge-featured mx-auto mb-8 px-6 py-3">
              🎉 Limited Slots Available This Month
            </div>

            <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              Ready to Transform
              <span className="text-gradient-primary block">Your Business?</span>
            </h2>

            <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 100+ successful businesses. Free consultation • Expert guidance • Money-back guarantee
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                onClick={() => onNavigate('/contact')}
                size="lg"
                className="btn-primary text-xl px-12 py-8 glow-primary-strong"
              >
                Start Your Project Now
                <ArrowRight className="ml-3" size={24} />
              </Button>

              <Button
                onClick={() => onNavigate('/ai-chatbot-solutions')}
                size="lg"
                className="btn-outline-primary text-xl px-12 py-8"
              >
                View Pricing Packages
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              {[
                '✓ No Long-term Contracts',
                '✓ 100% Satisfaction Guaranteed',
                '✓ Fast Turnaround Time',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-glow" />
    </div>
  );
}