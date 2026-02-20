// Content Management Context - Stores all editable content
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';

interface ContentData {
  [pageId: string]: {
    [sectionId: string]: any;
  };
}

interface ContentContextType {
  content: ContentData;
  isLoading: boolean;
  updateContent: (pageId: string, sectionId: string, data: any) => void;
  getPageContent: (pageId: string) => any;
  getSectionContent: (pageId: string, sectionId: string) => any;
  saveToDatabase: () => Promise<boolean>;
  loadFromDatabase: () => Promise<boolean>;
  exportContent: () => string;
  importContent: (jsonString: string) => void;
  resetToDefaults: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Default content for all pages - COMPLETE VERSION WITH ALL SECTIONS
const defaultContent: ContentData = {
  // Global brand settings - applies to all pages
  brand: {
    logo: {
      text: 'SocalBird',
      type: 'text', // 'text' or 'image'
      imageUrl: '', // Optional: URL for logo image
      gradient: 'from-blue-500 to-cyan-400' // Gradient for text logo
    }
  },
  home: {
    hero: {
      badge: 'Premium Development Agency',
      title: 'Build & Scale With',
      titleHighlight: 'AI Automation',
      subtitle: 'Expert Web Development, AI Chatbot Solutions, and Mobile Apps for small to mid-sized businesses, e-commerce, restaurants, and scaling startups.',
      cta1Text: 'Get Started - Free Consultation',
      cta2Text: 'View Portfolio'
    },
    realImpact: {
      badge: 'Real Results, Real Growth',
      title: 'See What\'s Possible When',
      titleHighlight: 'Technology Meets Strategy',
      subtitle: 'From startups to growing businesses - we\'ve helped companies 3X their revenue, automate support, and scale faster',
      stats: [
        { value: '100+', label: 'Projects Delivered', sublabel: 'Across 6 industries' },
        { value: '50+', label: 'Active Clients', sublabel: 'Still working with us' },
        { value: '98%', label: 'Client Retention', sublabel: 'They come back' },
        { value: '4.9★', label: 'Average Rating', sublabel: 'Client satisfaction' }
      ],
      caseStudy1: {
        badge: 'Case Study #1',
        title: 'How an E-commerce Store Got',
        titleHighlight: '3.5X More Revenue in 6 Months',
        challenge: 'A growing fashion e-commerce brand was losing 67% of customer inquiries because they couldn\'t respond fast enough. Abandoned carts were at an all-time high.',
        solution: 'We deployed a Facebook Messenger + Instagram DM chatbot that handled product inquiries, captured leads, and sent abandoned cart reminders - all automatically.',
        results: {
          main: '+385%',
          mainLabel: 'Increase in 6 months',
          metrics: [
            { value: '95%', label: 'Response rate' },
            { value: '3X', label: 'More leads' },
            { value: '<2min', label: 'Avg response' },
            { value: '24/7', label: 'Automated' }
          ]
        },
        testimonial: {
          quote: 'Game changer. The chatbot handles 80% of customer questions automatically. Our team can finally focus on growth instead of answering the same questions all day.',
          author: 'Sarah M.',
          role: 'Founder, Fashion E-commerce'
        }
      }
    },
    whyChoose: {
      badge: 'Why Choose SocalBird',
      title: 'We Solve',
      titleHighlight: 'Real Problems',
      subtitle: 'Most agencies sell features. We solve the problems keeping you up at night.',
      problems: [
        {
          title: 'Losing Leads Overnight?',
          description: 'Stop missing inquiries when you\'re closed. Our AI chatbots work 24/7.',
          solution: 'AI Chatbot Solutions',
          icon: '💬'
        },
        {
          title: 'Website Too Slow?',
          description: 'A 1-second delay costs 7% conversion. We build lightning-fast sites.',
          solution: 'Web Development',
          icon: '⚡'
        },
        {
          title: 'Need a Mobile App?',
          description: 'Reach your customers on iOS & Android with beautiful native apps.',
          solution: 'Mobile App Development',
          icon: '📱'
        }
      ]
    },
    services: {
      badge: 'Our Services',
      title: 'Complete Digital',
      titleHighlight: 'Solutions',
      subtitle: 'From concept to launch, we handle everything',
      items: [
        {
          title: 'AI Chatbot Automation',
          description: 'Automate customer engagement on Facebook, WhatsApp, Instagram & your website',
          price: 'Starting ৳5,000/month',
          features: ['24/7 Auto-Reply', 'Lead Capture', 'Multi-Platform', 'CRM Integration'],
          icon: '🤖'
        },
        {
          title: 'Web Development',
          description: 'Fast, SEO-optimized websites that convert visitors into customers',
          price: 'Starting ৳25,000',
          features: ['WordPress/Custom', 'Mobile Responsive', 'SEO Optimized', 'CMS Integration'],
          icon: '🌐'
        },
        {
          title: 'Mobile App Development',
          description: 'Native iOS & Android apps that users love',
          price: 'Starting ৳100,000',
          features: ['iOS & Android', 'Native Code', 'App Store Launch', 'Push Notifications'],
          icon: '📱'
        }
      ]
    },
    team: {
      badge: 'Meet the Team',
      title: 'Expert Developers,',
      titleHighlight: 'Creative Minds',
      subtitle: 'A passionate team dedicated to your success',
      members: [
        {
          name: 'Alex Johnson',
          role: 'Lead Developer',
          expertise: 'Full-Stack Development',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
        },
        {
          name: 'Sarah Chen',
          role: 'AI Specialist',
          expertise: 'Chatbot Development',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
        },
        {
          name: 'Michael Torres',
          role: 'Mobile Expert',
          expertise: 'iOS & Android',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
        }
      ]
    },
    process: {
      badge: 'How We Work',
      title: 'Simple, Transparent',
      titleHighlight: 'Process',
      subtitle: 'From first call to final launch - here\'s exactly what happens',
      steps: [
        {
          number: '01',
          title: 'Discovery Call',
          description: 'We learn about your business, challenges, and goals',
          duration: '30 minutes'
        },
        {
          number: '02',
          title: 'Strategy & Quote',
          description: 'Custom proposal with timeline and transparent pricing',
          duration: '1-2 days'
        },
        {
          number: '03',
          title: 'Design & Development',
          description: 'We build your solution with regular updates',
          duration: '2-6 weeks'
        },
        {
          number: '04',
          title: 'Launch & Support',
          description: 'Go live with ongoing support and training',
          duration: 'Ongoing'
        }
      ]
    },
    faq: {
      badge: 'FAQ',
      title: 'Common',
      titleHighlight: 'Questions',
      subtitle: 'Everything you need to know',
      items: [
        {
          question: 'How long does it take to build a website?',
          answer: 'Most websites take 2-4 weeks. Complex projects may take 6-8 weeks. We provide a detailed timeline in your proposal.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes! We offer flexible payment plans for projects over ৳50,000. Typically 50% upfront, 50% on completion.'
        },
        {
          question: 'What if I need changes after launch?',
          answer: 'All projects include free support for the first month. After that, we offer affordable maintenance packages or pay-per-change options.'
        },
        {
          question: 'Can you help with existing projects?',
          answer: 'Absolutely! We can improve, fix, or expand existing websites, apps, or chatbots - even if we didn\'t build them.'
        },
        {
          question: 'Do AI chatbots really work?',
          answer: 'Yes! Our clients see 3X more leads on average. The chatbot handles FAQs automatically while you focus on closing deals.'
        }
      ]
    },
    testimonials: {
      sectionBadge: 'Client Success Stories',
      sectionTitle: 'What Our',
      sectionTitleHighlight: 'Clients Say',
      sectionSubtitle: 'Real results from real businesses across industries',
      items: [
        {
          quote: 'The AI chatbot increased our response rate by 300% and we\'re capturing 3X more leads. Best investment we\'ve made!',
          author: 'Sarah Mitchell',
          role: 'CEO, StyleHub',
          industry: 'E-commerce',
          rating: 5,
          result: '+300% Response Rate'
        },
        {
          quote: 'Our website now handles 10K+ concurrent users with zero downtime. The performance improvement is phenomenal.',
          author: 'James Parker',
          role: 'Founder, TechConsult',
          industry: 'SaaS Startup',
          rating: 5,
          result: '10K+ Users'
        },
        {
          quote: 'The mobile app has a 4.9★ rating on both stores. The user experience and code quality are outstanding.',
          author: 'Lisa Rodriguez',
          role: 'CTO, HealthConnect',
          industry: 'Healthcare',
          rating: 5,
          result: '4.9★ Rating'
        }
      ]
    },
    targetAudience: {
      sectionBadge: 'Who We Serve',
      sectionTitle: 'Perfect Solutions for',
      sectionTitleHighlight: 'Your Industry',
      industries: [
        { name: 'Small Businesses', icon: '🏪' },
        { name: 'E-commerce', icon: '🛒' },
        { name: 'Restaurants', icon: '🍽️' },
        { name: 'Service Businesses', icon: '⚙️' },
        { name: 'Agencies', icon: '🎯' },
        { name: 'Startups', icon: '🚀' }
      ]
    },
    finalCta: {
      badge: '🎉 Limited Slots Available This Month',
      title: 'Ready to Transform',
      titleHighlight: 'Your Business?',
      subtitle: 'Join 100+ successful businesses. Free consultation • Expert guidance • Money-back guarantee',
      cta1Text: 'Start Your Project Now',
      cta2Text: 'View Pricing Packages',
      features: [
        '✓ No Long-term Contracts',
        '✓ 100% Satisfaction Guaranteed',
        '✓ Fast Turnaround Time'
      ]
    }
  },
  about: {
    hero: {
      badge: 'About SocalBird',
      title: 'Digital Innovation',
      titleHighlight: 'Meets Excellence',
      subtitle: 'We\'re not just developers—we\'re digital architects, creative problem solvers, and your growth partners.'
    },
    story: {
      year: '2020',
      title: 'From Vision to Digital Reality',
      paragraphs: [
        'SocalBird emerged in 2020 from a simple belief: cutting-edge technology should be accessible to every business, not just Fortune 500 companies.',
        'What started as a passionate two-person web development team has evolved into a full-service digital agency with expertise spanning modern web development, native mobile apps, and AI-powered automation.',
        'Today, we\'ve delivered 100+ successful projects across ecommerce, healthcare, SaaS, hospitality, and beyond.'
      ]
    },
    mission: {
      title: 'Our Mission',
      titleHighlight: '& Values',
      description: 'To empower businesses with technology that drives real growth and measurable results.',
      values: [
        {
          title: 'Innovation First',
          description: 'Using cutting-edge technology to solve real business problems'
        },
        {
          title: 'Quality Obsessed',
          description: 'Every line of code, every pixel matters to us'
        },
        {
          title: 'Growth Partners',
          description: 'Your success is our success - we grow together'
        }
      ]
    }
  },
  'web-development': {
    hero: {
      badge: 'Web Development Services',
      title: 'Custom Websites That',
      titleHighlight: 'Drive Results',
      subtitle: 'From startups to enterprises, we build scalable web solutions that grow with your business.'
    },
    packages: [
      {
        name: 'Starter Website',
        price: '৳25,000',
        period: '',
        description: 'Perfect for small businesses and startups',
        features: ['5 Pages', 'Responsive Design', 'Contact Form', 'SEO Basics', '1 Month Support'],
        popular: false
      },
      {
        name: 'Professional Website',
        price: '৳50,000',
        period: '',
        description: 'Ideal for growing businesses',
        features: ['10 Pages', 'Custom Design', 'CMS Integration', 'Advanced SEO', '3 Months Support'],
        popular: true
      },
      {
        name: 'Enterprise Solution',
        price: 'Custom',
        period: '',
        description: 'For complex business needs',
        features: ['Unlimited Pages', 'Custom Features', 'E-commerce', 'API Integration', '6 Months Support'],
        popular: false
      }
    ],
    technologies: {
      title: 'Technologies We Use',
      items: ['WordPress', 'Laravel', 'Next.js', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS']
    }
  },
  'app-development': {
    hero: {
      badge: 'Mobile App Development',
      title: 'Native Apps for',
      titleHighlight: 'iOS & Android',
      subtitle: 'Beautiful, high-performance mobile applications that users love.'
    },
    packages: [
      {
        name: 'Single Platform',
        price: '৳100,000',
        period: '',
        description: 'iOS or Android',
        features: ['Native Development', 'UI/UX Design', 'API Integration', 'App Store Submission', '3 Months Support'],
        popular: false
      },
      {
        name: 'Cross-Platform',
        price: '৳150,000',
        period: '',
        description: 'iOS & Android',
        features: ['Both Platforms', 'Unified Codebase', 'Push Notifications', 'Analytics', '6 Months Support'],
        popular: true
      }
    ],
    features: {
      title: 'App Features',
      items: [
        'Native Performance',
        'Offline Support',
        'Push Notifications',
        'In-App Purchases',
        'Social Integration',
        'Analytics Dashboard'
      ]
    }
  },
  'ai-chatbot': {
    hero: {
      badge: 'AI-Powered Automation',
      title: 'Transform Customer',
      titleHighlight: 'Engagement 24/7',
      subtitle: 'Automate conversations on Facebook, WhatsApp, Instagram & your website.'
    },
    packages: [
      {
        name: 'Starter',
        price: '৳5,000',
        period: '/month',
        description: 'Perfect for small businesses getting started',
        features: ['1 Platform', '500 conversations/month', 'Basic auto-replies', 'Lead capture', 'Email support'],
        popular: false
      },
      {
        name: 'Professional',
        price: '৳12,000',
        period: '/month',
        description: 'Most popular for growing businesses',
        features: ['3 Platforms', '2,000 conversations/month', 'Custom AI training', 'CRM integration', 'Priority support'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '৳25,000',
        period: '/month',
        description: 'For maximum automation',
        features: ['All 5 Platforms', 'Unlimited conversations', 'Advanced AI', 'Multi-language', '24/7 support'],
        popular: false
      }
    ],
    platforms: {
      title: 'Supported Platforms',
      items: [
        { name: 'Facebook Messenger', icon: '💬' },
        { name: 'WhatsApp Business', icon: '📱' },
        { name: 'Instagram DM', icon: '📷' },
        { name: 'Website Chat', icon: '🌐' },
        { name: 'Telegram', icon: '✈️' }
      ]
    },
    benefits: {
      title: 'Why AI Chatbots?',
      items: [
        {
          title: '24/7 Availability',
          description: 'Never miss a customer inquiry, even at 3 AM'
        },
        {
          title: 'Instant Responses',
          description: 'Answer questions in seconds, not hours'
        },
        {
          title: '3X More Leads',
          description: 'Capture and qualify leads automatically'
        },
        {
          title: 'Cost Savings',
          description: 'Reduce customer support costs by 60%'
        }
      ]
    }
  },
  portfolio: {
    hero: {
      badge: 'Portfolio Showcase',
      title: 'Projects That Drive',
      titleHighlight: 'Real Results',
      subtitle: 'Real stories, real impact. See how we\'ve helped businesses grow, automate, and scale.'
    },
    projects: [
      {
        title: 'Fashion Store Automation',
        category: 'AI Chatbot',
        industry: 'Ecommerce',
        description: 'Implemented AI chatbots across Facebook and Instagram, handling FAQs and order tracking.',
        result: '+300% Response Rate',
        technologies: ['Facebook API', 'WhatsApp Business', 'AI/ML', 'CRM Integration']
      },
      {
        title: 'Project Management SaaS',
        category: 'Web Development',
        industry: 'SaaS',
        description: 'Built scalable project management platform with real-time collaboration features.',
        result: '10K+ Active Users',
        technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket']
      },
      {
        title: 'Healthcare Mobile App',
        category: 'Mobile App',
        industry: 'Healthcare',
        description: 'iOS & Android app for patient management and telemedicine consultations.',
        result: '4.9★ Rating',
        technologies: ['React Native', 'Firebase', 'Video SDK', 'Push Notifications']
      },
      {
        title: 'Restaurant Ordering System',
        category: 'Web + Mobile',
        industry: 'Food & Beverage',
        description: 'Complete ordering system with web dashboard and customer mobile apps.',
        result: '+250% Orders',
        technologies: ['Next.js', 'Flutter', 'Stripe', 'Real-time Orders']
      },
      {
        title: 'E-learning Platform',
        category: 'Web Development',
        industry: 'Education',
        description: 'Online course platform with video streaming and progress tracking.',
        result: '5K+ Students',
        technologies: ['Laravel', 'Vue.js', 'Vimeo API', 'Payment Gateway']
      },
      {
        title: 'Real Estate Portal',
        category: 'Web Development',
        industry: 'Real Estate',
        description: 'Property listing platform with advanced search and virtual tours.',
        result: '2K+ Properties',
        technologies: ['WordPress', 'Custom Plugin', 'Google Maps', '360° View']
      }
    ],
    stats: {
      title: 'Our Impact',
      items: [
        { number: '100+', label: 'Projects Delivered' },
        { number: '50+', label: 'Happy Clients' },
        { number: '4.9★', label: 'Average Rating' },
        { number: '98%', label: 'Client Retention' }
      ]
    }
  },
  contact: {
    hero: {
      badge: 'Get in Touch',
      title: 'Let\'s Build Something',
      titleHighlight: 'Amazing Together',
      subtitle: 'Have a project in mind? We\'d love to hear from you.'
    },
    info: {
      email: 'hello@socalbird.com',
      phone: '+880 123 456 7890',
      address: 'Dhaka, Bangladesh',
      hours: 'Mon-Sat: 9 AM - 6 PM'
    },
    form: {
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      phonePlaceholder: 'Your Phone',
      servicePlaceholder: 'Select Service',
      messagePlaceholder: 'Tell us about your project',
      submitText: 'Send Message',
      services: [
        'Web Development',
        'Mobile App Development',
        'AI Chatbot Solutions',
        'Custom Project'
      ]
    }
  },
  footer: {
    tagline: 'Building digital solutions that scale',
    description: 'Professional web development, mobile apps, and AI chatbot solutions.',
    copyright: '© 2024 SocalBird. All rights reserved.',
    social: {
      facebook: 'https://facebook.com/socalbird',
      twitter: 'https://twitter.com/socalbird',
      instagram: 'https://instagram.com/socalbird',
      linkedin: 'https://linkedin.com/company/socalbird'
    },
    links: {
      services: [
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Apps', path: '/app-development' },
        { name: 'AI Chatbots', path: '/ai-chatbot-solutions' },
        { name: 'Portfolio', path: '/portfolio' }
      ],
      company: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' }
      ]
    }
  }
};

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContent);
  const [isLoading, setIsLoading] = useState(true);

  // Load from Supabase on mount
  useEffect(() => {
    loadFromDatabase();
  }, []);

  const updateContent = (pageId: string, sectionId: string, data: any) => {
    setContent((prev) => ({
      ...prev,
      [pageId]: {
        ...prev[pageId],
        [sectionId]: data
      }
    }));
  };

  const getPageContent = (pageId: string) => {
    return content[pageId] || defaultContent[pageId] || {};
  };

  const getSectionContent = (pageId: string, sectionId: string) => {
    return content[pageId]?.[sectionId] || defaultContent[pageId]?.[sectionId] || {};
  };

  const saveToDatabase = async () => {
    try {
      // Upsert the content to the database
      // We assume a singleton row or a specific ID = 1 for simplicity of this CMS
      const { error } = await supabase
        .from('site_content')
        .upsert({ id: 1, content: content });

      if (error) {
        console.error('Error saving to Supabase:', error);
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error calling Supabase:', error);
      return false;
    }
  };

  const loadFromDatabase = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .eq('id', 1)
        .single();

      if (error) {
        // If error or no data found (e.g. first run), we keep default content
        console.log('Using default content (Supabase load failed or empty):', error.message);
        setIsLoading(false);
        return false;
      }

      if (data && data.content) {
        setContent(data.content);
        setIsLoading(false);
        return true;
      }

      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Error loading from Supabase:', error);
      setIsLoading(false);
      return false;
    }
  };

  const exportContent = () => {
    return JSON.stringify(content, null, 2);
  };

  const importContent = (jsonString: string) => {
    try {
      const imported = JSON.parse(jsonString);
      setContent(imported);
      // Auto-save imported content
      // Note: This won't automatically trigger the saveToDatabase due to debouncing logic below
      // needing to be triggered by state change, which this does.
      return true;
    } catch (error) {
      console.error('Error importing content:', error);
      return false;
    }
  };

  const resetToDefaults = () => {
    setContent(defaultContent);
  };

  // Auto-save to Database whenever content changes
  // Debounced to avoid too many requests
  useEffect(() => {
    if (isLoading) return; // Don't save if we are still loading initial state

    const timeoutId = setTimeout(() => {
      saveToDatabase();
    }, 2000); // Debounce 2 seconds for network requests

    return () => clearTimeout(timeoutId);
  }, [content, isLoading]);

  return (
    <ContentContext.Provider
      value={{
        content,
        isLoading,
        updateContent,
        getPageContent,
        getSectionContent,
        saveToDatabase,
        loadFromDatabase,
        exportContent,
        importContent,
        resetToDefaults
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}