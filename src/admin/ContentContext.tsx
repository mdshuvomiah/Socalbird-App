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
    },
    chatWidgets: {
      whatsapp: '8801234567890',
      messenger: 'yourpage'
    }
  },
  home: {
    hero: {
      badge: 'Premium Development Agency',
      title: 'Build & Scale With',
      titleHighlight: 'AI Automation',
      subtitle: 'Expert Web Development, AI Chatbot Solutions, and Mobile Apps for small to mid-sized businesses, e-commerce, restaurants, and scaling startups.',
      cta1Text: 'Get Started - Free Consultation',
      cta2Text: 'View Portfolio',
      rightCard: {
        badge: 'Complete Tech Stack',
        frameworks: ['React', 'Next.js', 'Node.js', 'Tailwind', 'Supabase'],
        stats: [
          { value: '100+', label: 'Projects' },
          { value: '99%', label: 'Success' },
          { value: '24/7', label: 'Support' }
        ]
      }
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
        imageUrl: '',
        visitUrl: '',
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
      solutionLabel: 'Solution',
      resultLabel: 'Guaranteed Result',
      problems: [
        {
          icon: 'MessageSquare',
          problemTitle: 'Missing Customer Messages',
          problemStat: '67%',
          problemStatLabel: 'of messages go unanswered',
          solutionLabel: 'Solution',
          solutionTitle: 'AI Chatbot Automation',
          solutionDescription: '24/7 automated responses on Facebook, WhatsApp, Instagram. Every missed lead is a missed opportunity for growth.',
          solutionFeatures: ['Instant replies', 'Lead capture', 'Order tracking', 'Multi-platform'],
          resultLabel: 'Guaranteed Result',
          resultValue: '300% more leads'
        },
        {
          icon: 'Code',
          problemTitle: 'Slow, Outdated Website',
          problemStat: '53%',
          problemStatLabel: 'leave if load time > 3s',
          solutionLabel: 'Solution',
          solutionTitle: 'Modern Web Development',
          solutionDescription: 'Lightning-fast, SEO-optimized websites that rank on Google. We build websites that connect instantly.',
          solutionFeatures: ['<100ms load', 'Mobile-first', 'SEO optimized', 'CMS control'],
          resultLabel: 'Guaranteed Result',
          resultValue: '2X better ranking'
        },
        {
          icon: 'Smartphone',
          problemTitle: 'No Mobile Presence',
          problemStat: '85%',
          problemStatLabel: 'prefer mobile apps',
          solutionLabel: 'Solution',
          solutionTitle: 'Native Mobile Apps',
          solutionDescription: 'Professional iOS & Android apps with seamless UX. In a mobile-first world, your business needs to be in your pockets.',
          solutionFeatures: ['iOS + Android', 'Push notifications', 'Offline mode', 'Payment ready'],
          resultLabel: 'Guaranteed Result',
          resultValue: '4.9★ rating'
        }
      ],
      floatingStats: [
        { value: '7-14 Days', label: 'Lightning Fast', sublabel: 'Most projects live in 2 weeks', icon: 'Clock' },
        { value: '100% Safe', label: 'Risk-Free', sublabel: 'Money-back guarantee', icon: 'Shield' },
        { value: 'Scalable', label: 'Future-Proof', sublabel: 'Built to grow with you', icon: 'TrendingUp' }
      ],
      horizontalStats: [
        { value: '100+', label: 'Projects Completed', gradient: 'from-cyan-400 to-blue-500' },
        { value: '50+', label: 'Active Clients', gradient: 'from-purple-400 to-pink-500' },
        { value: '4.9/5', label: 'Average Rating', gradient: 'from-orange-400 to-red-500' },
        { value: '98%', label: 'Client Retention', gradient: 'from-emerald-400 to-green-500' }
      ],
      cta: {
        title: 'Ready to Transform Your Business?',
        subtitle: 'Join 50+ successful businesses who chose SocalBird',
        buttonText: 'Get Started - Free Consultation'
      }
    },
    services: {
      badge: 'Our Digital Services',
      title: 'Complete Digital Solutions',
      titleHighlight: 'For Every Business',
      subtitle: 'Serving small businesses, e-commerce stores, restaurants, service providers, agencies, and startups',
      items: [
        {
          title: 'AI Chatbot Solutions',
          subtitle: 'Monthly Subscriptions',
          description: '24/7 automated customer support and engagement across all major platforms with intelligent AI responses',
          features: ['Messenger Auto', 'WhatsApp Business', 'Instagram DMs', 'Comment Replies', 'Website Plugin', 'CRM Integration']
        },
        {
          title: 'Web Development',
          subtitle: 'Custom & CMS',
          description: 'Professional websites that drive conversions, rank on Google, and deliver exceptional user experiences',
          features: ['WordPress Sites', 'Laravel Apps', 'Next.js / React', 'MERN Stack', 'SEO Optimized', 'Mobile Ready']
        },
        {
          title: 'Mobile App Development',
          subtitle: 'iOS & Android',
          description: 'Native and cross-platform mobile applications designed for performance, scalability, and user engagement',
          features: ['Native iOS', 'Native Android', 'React Native', 'UI/UX Design', 'App Store Ready', 'Full Support']
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
          bio: '10+ years engineering scalable web applications. MERN stack expert.',
          imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
          stats: [
            { label: 'Projects Done', value: '150+' },
            { label: 'Lines of Code', value: '2M+' }
          ],
          skills: ['React', 'Node.js', 'AWS', 'System Design'],
          achievements: ['AWS Certified', 'Open Source Contributor', 'Tech Speaker']
        },
        {
          name: 'Sarah Chen',
          role: 'AI Specialist',
          expertise: 'Chatbot Development',
          bio: 'Pioneer in conversational AI and NLP. Built chatbots handling 1M+ messages.',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
          stats: [
            { label: 'Bots Deployed', value: '50+' },
            { label: 'User Interactions', value: '1M+' }
          ],
          skills: ['Python', 'TensorFlow', 'Dialogflow', 'NLP'],
          achievements: ['AI Research Paper', 'Hackathon Winner', 'Bot Dev Award']
        },
        {
          name: 'Michael Torres',
          role: 'Mobile Expert',
          expertise: 'iOS & Android',
          bio: 'Creating pixel-perfect, high-performance mobile experiences for 8 years.',
          imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
          stats: [
            { label: 'Apps Published', value: '30+' },
            { label: 'App Installs', value: '5M+' }
          ],
          skills: ['Swift', 'Kotlin', 'React Native', 'UI/UX'],
          achievements: ['Featured on App Store', 'Design Award', 'Top Developer']
        },
        {
          name: 'Emily Davis',
          role: 'UI/UX Lead',
          expertise: 'Product Design',
          bio: 'Crafting intuitive and beautiful interfaces that drive user engagement and conversion.',
          imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
          stats: [
            { label: 'Designs Live', value: '200+' },
            { label: 'Conversion Lift', value: '45%' }
          ],
          skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
          achievements: ['Awwwards Winner', 'Design Mentor', 'UX Speaker']
        }
      ]
    },
    process: {
      badge: 'AI-Powered Process',
      title: 'From Idea to Launch',
      titleHighlight: 'In Just 4 Smart Steps',
      subtitle: 'Our AI-enhanced workflow delivers enterprise-grade solutions at startup speed',
      steps: [
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
        id: 1,
        title: 'Fashion Store Automation',
        category: 'AI Chatbot',
        industry: 'Ecommerce',
        imageUrl: '',
        visitUrl: '',
        description: 'Implemented AI chatbots across Facebook and Instagram, handling FAQs and order tracking.',
        problem: 'An online fashion retailer was struggling to handle customer inquiries across Facebook Messenger and Instagram. Response times were slow, and many potential customers were being lost due to delayed responses.',
        solution: 'Implemented AI chatbots on both Facebook Messenger and Instagram DM. The bots handled FAQs, product inquiries, size recommendations, and order tracking. Integrated with their inventory system for real-time product availability.',
        result: '+300% Response Rate',
        technologies: ['Facebook API', 'WhatsApp Business', 'AI/ML', 'CRM Integration'],
        techStack: ['Facebook Messenger API', 'Instagram Graph API', 'AI/NLP', 'Google Sheets', 'Zapier'],
        results: [
          { metric: '300%', label: 'Increase in response rate', icon: 'TrendingUp' },
          { metric: '24/7', label: 'Customer support coverage', icon: 'Zap' },
          { metric: '45%', label: 'Reduction in support costs', icon: 'Target' },
          { metric: '2.5x', label: 'More qualified leads', icon: 'Award' }
        ],
        highlights: ['Real-time Inventory Sync', 'Multi-language Support', 'Lead Qualification']
      },
      {
        id: 2,
        title: 'Project Management SaaS',
        category: 'Web Development',
        industry: 'SaaS',
        imageUrl: '',
        visitUrl: '',
        description: 'Built scalable project management platform with real-time collaboration features.',
        problem: 'A startup needed a scalable project management platform to compete with existing solutions. They required real-time collaboration, task management, and team communication features.',
        solution: 'Built a full-stack web application using Next.js and Node.js with real-time websocket connections. Implemented drag-and-drop task boards, team chat, file sharing, and comprehensive analytics.',
        result: '10K+ Active Users',
        technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
        techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'AWS'],
        results: [
          { metric: '10,000+', label: 'Active users', icon: 'TrendingUp' },
          { metric: '99.9%', label: 'Uptime', icon: 'CheckCircle' },
          { metric: '<100ms', label: 'Average response time', icon: 'Zap' },
          { metric: '$500K', label: 'ARR in year 1', icon: 'Award' }
        ],
        highlights: ['Real-time Collaboration', 'Drag & Drop Interface', 'Advanced Analytics']
      },
      {
        id: 3,
        title: 'Healthcare Mobile App',
        category: 'Mobile App',
        industry: 'Healthcare',
        imageUrl: '',
        visitUrl: '',
        description: 'iOS & Android app for patient management and telemedicine consultations.',
        problem: 'A healthcare provider needed a HIPAA-compliant mobile app for virtual consultations. The app needed to support video calls, prescription management, and secure medical records.',
        solution: 'Developed native iOS and Android apps with video consultation, appointment booking, secure messaging, prescription tracking, and payment processing. Implemented end-to-end encryption for all communications.',
        result: '4.9★ Rating',
        technologies: ['React Native', 'Firebase', 'Video SDK', 'Push Notifications'],
        techStack: ['Swift', 'Kotlin', 'WebRTC', 'Firebase', 'Stripe', 'AWS'],
        results: [
          { metric: '4.8★', label: 'Average app rating', icon: 'Star' },
          { metric: '50,000+', label: 'Downloads', icon: 'TrendingUp' },
          { metric: '5,000+', label: 'Monthly consultations', icon: 'Target' },
          { metric: 'HIPAA', label: 'Compliant', icon: 'CheckCircle' }
        ],
        highlights: ['End-to-End Encryption', 'Video Consultations', 'HIPAA Compliant']
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

  const saveToDatabase = async (manualContent?: any) => {
    try {
      // Upsert the content to the database
      // We assume a singleton row or a specific ID = 1 for simplicity of this CMS
      const { error } = await supabase
        .from('site_content')
        .upsert({ id: 1, content: manualContent || content });

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

  const deepMerge = (target: any, source: any) => {
    const output = { ...target };
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] });
          } else {
            output[key] = deepMerge(target[key], source[key]);
          }
        } else {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] });
          }
        }
      });
    }
    return output;
  };

  const isObject = (item: any) => {
    return (item && typeof item === 'object' && !Array.isArray(item));
  };

  const ensureString = (val: any) => {
    if (val === null || val === undefined) return '';
    if (typeof val === 'object') return '';
    return String(val);
  };

  const loadFromDatabase = async (force = false) => {
    // Prevent double loading or loops
    if (isLoading && !force && Object.keys(content || {}).length > Object.keys(defaultContent || {}).length) {
      return false;
    }

    try {
      if (!force) setIsLoading(true);
      const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .eq('id', 1)
        .single();

      if (error) {
        console.warn('Database content not found or error. Using default content:', error.message);
        setIsLoading(false);
        return false;
      }

      if (data && data.content) {
        // Merge database content with defaultContent so new sections appear
        const mergedContent = deepMerge(data.content, defaultContent);

        // Perform migrations for Why Choose problems to ensure all fields are visible in the admin panel
        if (mergedContent.home?.whyChoose?.problems && Array.isArray(mergedContent.home.whyChoose.problems)) {
          mergedContent.home.whyChoose.problems = mergedContent.home.whyChoose.problems
            .filter((p: any) => p !== null && typeof p === 'object')
            .map((p: any) => {
              // Already flat format? return as is
              if (p.problemTitle && typeof p.problemTitle === 'string') return p;

              // Otherwise, migrate from various old structures
              const problem = p.problem || {};
              const solution = p.solution || {};
              const result = solution.result || {};

              return {
                icon: ensureString(p.icon || 'MessageSquare'),
                problemTitle: ensureString(problem.title || p.title || p.problem || ''),
                problemStat: ensureString(problem.stat || ''),
                problemStatLabel: ensureString(problem.statLabel || ''),
                solutionLabel: ensureString(p.solutionLabel || mergedContent.home?.whyChoose?.solutionLabel || 'Solution'),
                solutionTitle: ensureString(solution.title || p.solution || ''),
                solutionDescription: ensureString(solution.description || p.description || ''),
                solutionFeatures: Array.isArray(solution.features) ? solution.features : (Array.isArray(p.features) ? p.features : []),
                resultLabel: ensureString(p.resultLabel || result.label || mergedContent.home?.whyChoose?.resultLabel || 'Guaranteed Result'),
                resultValue: ensureString(result.value || result || '')
              };
            });
        }

        // Migrate Portfolio Projects to ensure new fields (imageUrl, visitUrl) are visible
        if (mergedContent.portfolio?.projects && Array.isArray(mergedContent.portfolio.projects)) {
          mergedContent.portfolio.projects = mergedContent.portfolio.projects.map((p: any) => {
            const defaults = defaultContent.portfolio?.projects?.[0] || {}; // Use first project as template for defaults
            return {
              ...p,
              imageUrl: ensureString(p.imageUrl || ''),
              visitUrl: ensureString(p.visitUrl || p.liveUrl || ''),
              problem: ensureString(p.problem || p.description || ''),
              solution: ensureString(p.solution || p.description || ''),
              techStack: Array.isArray(p.techStack) ? p.techStack : (Array.isArray(p.technologies) ? p.technologies : []),
              results: Array.isArray(p.results) ? p.results : [
                { metric: ensureString(p.result || ''), label: 'Outcome', icon: 'TrendingUp' }
              ],
              highlights: Array.isArray(p.highlights) ? p.highlights : []
            };
          });
        }

        // Migrate Home Real Impact Case Studies
        if (mergedContent.home?.realImpact) {
          ['caseStudy1', 'caseStudy2', 'caseStudy3'].forEach(key => {
            if (mergedContent.home.realImpact[key]) {
              mergedContent.home.realImpact[key].imageUrl = ensureString(mergedContent.home.realImpact[key].imageUrl || '');
              mergedContent.home.realImpact[key].visitUrl = ensureString(mergedContent.home.realImpact[key].visitUrl || '');
            }
          });
        }

        setContent(mergedContent);
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

  // Auto-save removed: Saving is now strictly manual via the ContentEditorPage "Save Changes" button.

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