import { ArrowRight, Check, Star, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';

interface LuxuryHomePageProps {
  onNavigate: (page: string) => void;
}

export function LuxuryHomePage({ onNavigate }: LuxuryHomePageProps) {
  return (
    <div className="bg-white text-charcoal">
      {/* Hero Section - Minimal Elegance */}
      <section className="min-h-screen flex items-center px-4 pt-32 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Typography */}
            <div className="space-y-10 fade-in-up">
              {/* Badge */}
              <div className="badge-minimal badge-gold fade-in delay-1">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span>Premium Development Agency</span>
              </div>

              {/* Headline */}
              <div className="space-y-6 fade-in-up delay-2">
                <h1 className="text-7xl md:text-8xl font-light tracking-tight leading-none">
                  Build <span className="luxury-serif italic text-gold">Exceptional</span>
                  <br />
                  Digital
                  <br />
                  Experiences
                </h1>
              </div>

              {/* Description */}
              <div className="fade-in-up delay-3">
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  We craft bespoke web applications, intelligent chatbots, and mobile solutions 
                  that elevate your brand and drive measurable results.
                </p>
              </div>

              {/* CTA */}
              <div className="flex gap-6 fade-in-up delay-4">
                <Button
                  onClick={() => onNavigate('/contact')}
                  size="lg"
                  className="bg-charcoal text-white hover:bg-gold hover:text-charcoal px-10 py-6 rounded-none transition-smooth"
                >
                  <span className="tracking-wide uppercase text-sm font-medium">Begin Your Journey</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                
                <Button
                  onClick={() => onNavigate('/portfolio')}
                  size="lg"
                  variant="outline"
                  className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-10 py-6 rounded-none transition-smooth"
                >
                  <span className="tracking-wide uppercase text-sm font-medium">View Portfolio</span>
                </Button>
              </div>

              {/* Stats - Minimal */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 fade-in-up delay-5">
                {[
                  { number: '100+', label: 'Projects' },
                  { number: '50+', label: 'Clients' },
                  { number: '4.9', label: 'Rating' },
                ].map((stat, i) => (
                  <div key={i} className="counter-gold">
                    <div className="text-4xl font-light text-charcoal mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image Placeholder */}
            <div className="relative fade-in-up delay-6">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-40 h-40 border border-gold opacity-30" />
                <div className="absolute bottom-10 left-10 w-60 h-60 border border-charcoal opacity-10" />
                
                {/* Content Box */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-8 border-t border-gold">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold flex items-center justify-center">
                      <Star className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal">Premium Quality</div>
                      <div className="text-sm text-gray-600">Guaranteed Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Magazine Layout */}
      <section className="py-32 px-4 bg-cream">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-6">
              <div className="text-sm uppercase tracking-widest text-gold mb-4">Our Services</div>
              <div className="separator-gold mx-auto" style={{ width: '60px' }} />
            </div>
            <h2 className="text-6xl font-light tracking-tight mb-6">
              What We <span className="luxury-serif italic text-gold">Create</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions that blend innovation with timeless design principles
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'AI Chatbot Solutions',
                desc: 'Intelligent automation across Facebook, WhatsApp, Instagram, and web platforms.',
                features: ['24/7 Engagement', 'Multi-Channel', 'Lead Capture', 'Custom Training'],
                link: '/ai-chatbot-solutions',
              },
              {
                number: '02',
                title: 'Web Development',
                desc: 'Premium websites built with WordPress, Laravel, Next.js, and MERN stack.',
                features: ['SEO Optimized', 'Lightning Fast', 'Responsive', 'Secure'],
                link: '/web-development',
              },
              {
                number: '03',
                title: 'Mobile Applications',
                desc: 'Native iOS and Android apps with exceptional user experiences.',
                features: ['Native Speed', 'Beautiful UX', 'Secure', 'Cloud Integration'],
                link: '/app-development',
              },
            ].map((service, index) => (
              <div
                key={index}
                onClick={() => onNavigate(service.link)}
                className="card-luxury p-10 cursor-pointer fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="accent-number text-6xl mb-6">{service.number}</div>
                <h3 className="text-2xl font-light mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-gold" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-sm uppercase tracking-wider text-charcoal hover-underline inline-block">
                  Learn More
                </div>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="mt-20 border-t border-b border-gray-300 py-12 fade-in-up delay-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '300%', label: 'Average ROI' },
                { value: '10K+', label: 'Active Users' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '<100ms', label: 'Response Time' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="large-number text-gold mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wider text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process - Timeline */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-6">
              <div className="text-sm uppercase tracking-widest text-gold mb-4">Our Process</div>
              <div className="separator-gold mx-auto" style={{ width: '60px' }} />
            </div>
            <h2 className="text-6xl font-light tracking-tight">
              How We <span className="luxury-serif italic text-gold">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your business goals and requirements' },
              { step: '02', title: 'Strategy', desc: 'Craft a tailored roadmap for success' },
              { step: '03', title: 'Development', desc: 'Build with precision and attention to detail' },
              { step: '04', title: 'Launch', desc: 'Deploy, optimize, and support your growth' },
            ].map((phase, index) => (
              <div key={index} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="accent-number text-5xl mb-4">{phase.step}</div>
                <div className="w-12 h-px bg-gold mx-auto mb-4" />
                <h3 className="text-xl font-light mb-3 tracking-tight">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant */}
      <section className="py-32 px-4 bg-charcoal text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-6">
              <div className="text-sm uppercase tracking-widest text-gold mb-4">Client Success</div>
              <div className="separator-gold mx-auto" style={{ width: '60px' }} />
            </div>
            <h2 className="text-6xl font-light tracking-tight">
              Trusted by <span className="luxury-serif italic text-gold">Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'The AI chatbot transformed our customer engagement. Response rates increased 300% within the first month.',
                author: 'Sarah Mitchell',
                role: 'CEO, StyleHub',
                rating: 5,
              },
              {
                quote: 'Exceptional engineering. Our platform handles 10K+ concurrent users with zero downtime. Simply outstanding.',
                author: 'James Parker',
                role: 'Founder, TechConsult',
                rating: 5,
              },
              {
                quote: 'The mobile app has a 4.9★ rating on both stores. The user experience is phenomenal and the code is rock-solid.',
                author: 'Lisa Rodriguez',
                role: 'CTO, HealthConnect',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="border border-gray-700 p-8 hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className="quote-elegant text-lg leading-relaxed mb-8 text-gray-300">
                  {testimonial.quote}
                </p>

                <div className="border-t border-gray-700 pt-6">
                  <div className="font-light text-white mb-1">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal Elegance */}
      <section className="py-40 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="fade-in-up">
            <div className="inline-block mb-8">
              <div className="badge-minimal badge-gold">
                <span>Limited Availability</span>
              </div>
            </div>

            <h2 className="text-7xl md:text-8xl font-light tracking-tight leading-tight mb-8">
              Ready to Create
              <br />
              <span className="luxury-serif italic text-gold">Something Extraordinary?</span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with us to build digital solutions that stand the test of time. 
              Free consultation • Expert guidance • Guaranteed excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                onClick={() => onNavigate('/contact')}
                size="lg"
                className="bg-charcoal text-white hover:bg-gold hover:text-charcoal px-12 py-7 rounded-none transition-smooth"
              >
                <span className="tracking-wide uppercase font-medium">Start Your Project</span>
                <ArrowRight size={20} className="ml-3" />
              </Button>

              <Button
                onClick={() => onNavigate('/portfolio')}
                size="lg"
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-12 py-7 rounded-none transition-smooth"
              >
                <span className="tracking-wide uppercase font-medium">View Our Work</span>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              {[
                { icon: Check, text: 'No Obligation Consultation' },
                { icon: Shield, text: '100% Satisfaction Guaranteed' },
                { icon: Zap, text: 'Fast Turnaround' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon size={16} className="text-gold" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Divider */}
      <div className="separator-gold" />
    </div>
  );
}
