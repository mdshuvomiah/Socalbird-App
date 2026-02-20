import { Code, Server, Shield, Zap, CheckCircle2, ArrowRight, Globe, Smartphone as Mobile, ShoppingCart, Calendar, BarChart3, FileCode } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

interface WebDevelopmentPageProps {
  onNavigate: (page: string) => void;
}

export function WebDevelopmentPage({ onNavigate }: WebDevelopmentPageProps) {
  const techStacks = [
    {
      name: 'WordPress',
      icon: Globe,
      color: 'from-blue-600 to-blue-400',
      description: 'Perfect for blogs, corporate sites, and content-heavy websites',
      features: ['Custom theme development', 'Plugin integration', 'WooCommerce setup', 'SEO optimization'],
      bestFor: ['Blogs & news sites', 'Corporate websites', 'Small business sites', 'Portfolio websites'],
    },
    {
      name: 'Laravel',
      icon: Server,
      color: 'from-red-600 to-red-400',
      description: 'Robust backend for complex web applications and SaaS platforms',
      features: ['RESTful API development', 'Database architecture', 'Authentication systems', 'Admin panels'],
      bestFor: ['SaaS applications', 'B2B platforms', 'Booking systems', 'Custom dashboards'],
    },
    {
      name: 'Next.js / React',
      icon: Code,
      color: 'from-cyan-600 to-cyan-400',
      description: 'Modern, fast, and SEO-friendly single-page applications',
      features: ['Server-side rendering', 'Static site generation', 'API routes', 'Optimized performance'],
      bestFor: ['Ecommerce stores', 'Landing pages', 'Web apps', 'Marketing sites'],
    },
    {
      name: 'MERN Stack',
      icon: FileCode,
      color: 'from-green-600 to-green-400',
      description: 'Full-stack JavaScript solution for scalable applications',
      features: ['MongoDB database', 'Express.js backend', 'React frontend', 'Node.js runtime'],
      bestFor: ['Social platforms', 'Real-time apps', 'Marketplaces', 'Complex SPAs'],
    },
  ];

  const whatWeBuild = [
    {
      title: 'Ecommerce Stores',
      icon: ShoppingCart,
      description: 'Full-featured online stores with payment gateways, inventory management, and order tracking.',
      color: 'text-blue-400',
    },
    {
      title: 'Corporate Websites',
      icon: Globe,
      description: 'Professional websites that establish credibility and showcase your brand effectively.',
      color: 'text-purple-400',
    },
    {
      title: 'Landing Pages',
      icon: FileCode,
      description: 'High-converting landing pages optimized for marketing campaigns and lead generation.',
      color: 'text-green-400',
    },
    {
      title: 'Booking Systems',
      icon: Calendar,
      description: 'Appointment scheduling, reservation management, and automated confirmation systems.',
      color: 'text-cyan-400',
    },
    {
      title: 'Dashboards & Portals',
      icon: BarChart3,
      description: 'Custom admin panels, user portals, and analytics dashboards with real-time data.',
      color: 'text-orange-400',
    },
    {
      title: 'Web Applications',
      icon: Code,
      description: 'Complex web applications with custom features tailored to your business needs.',
      color: 'text-pink-400',
    },
  ];

  const deliverables = [
    { phase: 'Discovery & Planning', duration: '1 week', items: ['Requirements analysis', 'Wireframes & mockups', 'Technical specification', 'Project timeline'] },
    { phase: 'Design', duration: '1-2 weeks', items: ['UI/UX design', 'Brand integration', 'Responsive layouts', 'Design system'] },
    { phase: 'Development', duration: '4-8 weeks', items: ['Frontend development', 'Backend development', 'Database setup', 'API integration'] },
    { phase: 'Testing & QA', duration: '1 week', items: ['Functionality testing', 'Cross-browser testing', 'Performance optimization', 'Security audit'] },
    { phase: 'Deployment', duration: '3-5 days', items: ['Server setup', 'Domain configuration', 'SSL certificate', 'Go-live support'] },
  ];

  return (
    <div className="dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-500/20 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-4">
              💻 Modern Web Development
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Build Websites That <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Drive Results</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Fast, secure, and scalable web development with WordPress, Laravel, Next.js, and MERN stack. From landing pages to complex applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={() => onNavigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-lg px-8 py-6"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => onNavigate('/portfolio')}
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-600/10 text-lg px-8 py-6"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="bg-[#111827] border-gray-800 p-6 text-center">
              <Zap className="text-yellow-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">
                Optimized for speed and performance
              </p>
            </Card>

            <Card className="bg-[#111827] border-gray-800 p-6 text-center">
              <Shield className="text-green-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Secure</h3>
              <p className="text-gray-400">
                Enterprise-grade security measures
              </p>
            </Card>

            <Card className="bg-[#111827] border-gray-800 p-6 text-center">
              <Server className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Scalable</h3>
              <p className="text-gray-400">
                Built to grow with your business
              </p>
            </Card>

            <Card className="bg-[#111827] border-gray-800 p-6 text-center">
              <Mobile className="text-purple-400 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Responsive</h3>
              <p className="text-gray-400">
                Perfect on all devices & screens
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111827]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-400">
              We choose the right technology for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStacks.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="bg-[#111827] border-gray-800 p-8 hover:border-purple-500/50 transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{tech.name}</h3>
                  <p className="text-gray-400 mb-6">{tech.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {tech.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle2 className="text-purple-400 flex-shrink-0" size={18} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Best For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.bestFor.map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-800 border border-purple-500/30 rounded-full text-sm text-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Build
            </h2>
            <p className="text-xl text-gray-400">
              From simple websites to complex web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeBuild.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-[#111827] border-gray-800 p-6 hover:border-purple-500/50 transition-all">
                  <Icon className={`${item.color} mb-4`} size={40} />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111827]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-400">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="space-y-6">
            {deliverables.map((phase, index) => (
              <Card key={index} className="bg-[#111827] border-gray-800 p-6 hover:border-purple-500/50 transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                      <span className="text-purple-400 font-semibold">{phase.duration}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle2 className="text-purple-400 flex-shrink-0" size={18} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Support */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Maintenance & Support Plans
            </h2>
            <p className="text-xl text-gray-400">
              Keep your website secure, fast, and up-to-date
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#111827] border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="text-3xl font-bold text-purple-400 mb-6">$99<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {[
                  'Security updates',
                  'Daily backups',
                  'Uptime monitoring',
                  'Basic support (email)',
                  'Monthly reports',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => onNavigate('/contact')} className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Get Started
              </Button>
            </Card>

            <Card className="bg-[#111827] border-purple-500 p-8 scale-105 ring-2 ring-purple-500">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-2 text-sm font-semibold rounded -mt-8 mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-purple-400 mb-6">$249<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Basic',
                  'Performance optimization',
                  'Content updates (5 hrs/mo)',
                  'Priority support',
                  'SEO monitoring',
                  'Analytics reports',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => onNavigate('/contact')} className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white">
                Get Started
              </Button>
            </Card>

            <Card className="bg-[#111827] border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-purple-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Professional',
                  'Unlimited updates',
                  '24/7 support',
                  'Dedicated account manager',
                  'Custom integrations',
                  'SLA guarantee',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => onNavigate('/contact')} className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Contact Us
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#111827]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Web Development FAQ
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-purple-400">
                Do you provide hosting services?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes! We offer managed hosting with all our web development projects. This includes server setup, SSL certificates, daily backups, security monitoring, and technical support. You can also choose to host with your preferred provider.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-purple-400">
                Will my website be mobile-friendly?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Absolutely! All websites we build are fully responsive and optimized for mobile, tablet, and desktop. We follow mobile-first design principles and test on real devices to ensure a perfect experience across all screen sizes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-purple-400">
                How do you handle SEO?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                SEO is built into every website we create. This includes proper HTML structure, meta tags, schema markup, fast loading times, mobile optimization, and SEO-friendly URLs. We can also provide ongoing SEO services if needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-purple-400">
                What about website security?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Security is a top priority. We implement SSL certificates, regular security updates, firewall protection, secure authentication, data encryption, and protection against common vulnerabilities. All our hosting plans include security monitoring.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-purple-400">
                Can I update the website myself?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes! We build user-friendly content management systems (WordPress, custom CMS) that allow you to update content, images, and pages without technical knowledge. We also provide training and documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-[#111827] border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-purple-400">
                What's included in ongoing support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our support plans include bug fixes, security updates, performance monitoring, backups, technical support, and content updates (depending on your plan). We're here to ensure your website runs smoothly 24/7.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-purple-50 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <Button
            onClick={() => onNavigate('/contact')}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            Get Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
