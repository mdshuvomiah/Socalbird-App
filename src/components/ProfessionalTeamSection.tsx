import { Linkedin, Twitter, Github, Mail, ArrowLeft, Award, Code, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { useContent } from '../admin/ContentContext';

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  achievements: string[];
  skills: string[];
  stats: {
    projects: string;
    rating: string;
    experience: string;
  };
  gradient: {
    from: string;
    to: string;
    accent: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  imageUrl: string;
}

function CleanTeamCard({ name, role, expertise, bio, achievements, skills, stats, gradient, social, imageUrl }: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative" style={{ perspective: '1000px' }}>
      {/* Front Side - Basic Info with Image */}
      <div 
        className={`transition-all duration-700 ${
          isExpanded 
            ? 'opacity-0 scale-95 pointer-events-none absolute inset-0' 
            : 'opacity-100 scale-100 relative'
        }`}
        style={{
          transform: isExpanded ? 'rotateY(90deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Image Container */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <div className="aspect-[3/4] w-full">
            <ImageWithFallback
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top, ${gradient.from}90, transparent 50%)`
            }}
          />
        </div>

        {/* Basic Info */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="font-semibold mb-1" style={{ color: gradient.accent }}>
            {role}
          </p>
          <p className="text-sm text-gray-400">
            {expertise}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mb-4">
          {social.linkedin && (
            <a
              href={social.linkedin}
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4 text-gray-400" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors"
            >
              <Twitter className="w-4 h-4 text-gray-400" />
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors"
            >
              <Github className="w-4 h-4 text-gray-400" />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4 text-gray-400" />
            </a>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 border hover:scale-[1.02]"
          style={{
            background: 'transparent',
            borderColor: `${gradient.from}40`,
            color: gradient.accent
          }}
        >
          View Details
        </button>
      </div>

      {/* Back Side - Detailed Info with Modern Background */}
      <div 
        className={`transition-all duration-700 ${
          isExpanded 
            ? 'opacity-100 scale-100 relative' 
            : 'opacity-0 scale-95 pointer-events-none absolute inset-0'
        }`}
        style={{
          transform: isExpanded ? 'rotateY(0deg)' : 'rotateY(-90deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Modern Glass Card */}
        <div 
          className="relative rounded-2xl p-6 border overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${gradient.from}15, ${gradient.to}10)`,
            borderColor: `${gradient.from}30`,
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Decorative Elements */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
            style={{ background: gradient.from }}
          />
          <div 
            className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-3xl opacity-20"
            style={{ background: gradient.to }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Header with Back Button */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
                <p className="text-sm font-semibold" style={{ color: gradient.accent }}>
                  {role}
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all hover:scale-105"
                style={{
                  background: `${gradient.from}20`,
                  borderColor: `${gradient.from}40`,
                  color: gradient.accent
                }}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div 
                className="text-center p-3 rounded-xl border backdrop-blur-sm"
                style={{
                  background: `${gradient.from}10`,
                  borderColor: `${gradient.from}30`
                }}
              >
                <div className="text-xl font-bold text-white mb-1">{stats.projects}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div 
                className="text-center p-3 rounded-xl border backdrop-blur-sm"
                style={{
                  background: `${gradient.from}10`,
                  borderColor: `${gradient.from}30`
                }}
              >
                <div className="text-xl font-bold text-white mb-1">{stats.rating}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Rating</div>
              </div>
              <div 
                className="text-center p-3 rounded-xl border backdrop-blur-sm"
                style={{
                  background: `${gradient.from}10`,
                  borderColor: `${gradient.from}30`
                }}
              >
                <div className="text-xl font-bold text-white mb-1">{stats.experience}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Years</div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4" style={{ color: gradient.accent }} />
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  About
                </h4>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {bio}
              </p>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4" style={{ color: gradient.accent }} />
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Achievements
                </h4>
              </div>
              <div className="space-y-2.5">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: gradient.accent }}
                    />
                    <span className="text-sm text-gray-300 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4" style={{ color: gradient.accent }} />
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Skills
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold border backdrop-blur-sm"
                    style={{
                      background: `${gradient.from}15`,
                      borderColor: `${gradient.from}40`,
                      color: gradient.accent
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links at Bottom */}
            <div className="flex gap-2 mt-6 pt-6 border-t" style={{ borderColor: `${gradient.from}20` }}>
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  className="flex-1 h-10 border rounded-lg flex items-center justify-center transition-all hover:scale-105"
                  style={{
                    background: `${gradient.from}10`,
                    borderColor: `${gradient.from}30`
                  }}
                >
                  <Linkedin className="w-4 h-4 text-gray-400" />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  className="flex-1 h-10 border rounded-lg flex items-center justify-center transition-all hover:scale-105"
                  style={{
                    background: `${gradient.from}10`,
                    borderColor: `${gradient.from}30`
                  }}
                >
                  <Twitter className="w-4 h-4 text-gray-400" />
                </a>
              )}
              {social.github && (
                <a
                  href={social.github}
                  className="flex-1 h-10 border rounded-lg flex items-center justify-center transition-all hover:scale-105"
                  style={{
                    background: `${gradient.from}10`,
                    borderColor: `${gradient.from}30`
                  }}
                >
                  <Github className="w-4 h-4 text-gray-400" />
                </a>
              )}
              {social.email && (
                <a
                  href={`mailto:${social.email}`}
                  className="flex-1 h-10 border rounded-lg flex items-center justify-center transition-all hover:scale-105"
                  style={{
                    background: `${gradient.from}10`,
                    borderColor: `${gradient.from}30`
                  }}
                >
                  <Mail className="w-4 h-4 text-gray-400" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProfessionalTeamSectionProps {
  onNavigate?: (page: string) => void;
}

export function ProfessionalTeamSection({ onNavigate }: ProfessionalTeamSectionProps) {
  const { getSectionContent } = useContent();
  const content = getSectionContent('home', 'team') || {};

  const defaultTeamMembers = [
    {
      name: 'Arif Rahman',
      role: 'Lead Developer',
      expertise: 'Full-Stack & AI Integration',
      bio: 'Leading digital transformation initiatives with 8+ years of experience in building scalable web applications and AI-powered solutions that drive business growth.',
      achievements: [
        'Led 150+ successful projects with 98% client satisfaction',
        'Architected AI solutions serving 50,000+ daily users',
        'Published 3 technical papers on modern web architecture'
      ],
      skills: [
        'React', 'Node.js', 'Python', 'AI/ML', 'AWS', 'DevOps'
      ],
      stats: {
        projects: '150+',
        rating: '4.9★',
        experience: '8+'
      },
      gradient: {
        from: '#06b6d4',
        to: '#3b82f6',
        accent: '#22d3ee'
      },
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'arif@socalbird.com'
      },
      imageUrl: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTgzMjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Nadia Islam',
      role: 'UI/UX Designer',
      expertise: 'Product Design & Branding',
      bio: 'Creating award-winning designs with 6+ years of experience. Specialized in conversion-focused interfaces and comprehensive brand identity systems.',
      achievements: [
        'Designed 120+ high-converting landing pages',
        'Increased average client conversions by 250%',
        'Featured in Dribbble Top 100 Designers 2023'
      ],
      skills: [
        'Figma', 'Webflow', 'Framer', 'Branding', 'UI/UX', 'Design Systems'
      ],
      stats: {
        projects: '120+',
        rating: '5.0★',
        experience: '6+'
      },
      gradient: {
        from: '#a855f7',
        to: '#ec4899',
        accent: '#c084fc'
      },
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'nadia@socalbird.com'
      },
      imageUrl: 'https://images.unsplash.com/photo-1753162657177-528258aac0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzY5ODgwNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Kamal Hossain',
      role: 'Mobile Developer',
      expertise: 'iOS & Android Apps',
      bio: 'Building high-performance mobile experiences with 7+ years expertise. Apps developed have reached millions of downloads globally with exceptional ratings.',
      achievements: [
        'Built 100+ mobile apps with 5M+ downloads',
        'Achieved 4.8+ average App Store rating',
        'Expert in React Native and Native development'
      ],
      skills: [
        'Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'CI/CD'
      ],
      stats: {
        projects: '100+',
        rating: '4.8★',
        experience: '7+'
      },
      gradient: {
        from: '#f97316',
        to: '#ef4444',
        accent: '#fb923c'
      },
      social: {
        linkedin: '#',
        github: '#',
        email: 'kamal@socalbird.com'
      },
      imageUrl: 'https://images.unsplash.com/photo-1631624220291-8f191fbdb543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBtYW4lMjBjb2Rpbmd8ZW58MXx8fHwxNzY5ODgwNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Sabrina Khan',
      role: 'AI Specialist',
      expertise: 'Chatbot & Automation',
      bio: 'Pioneering AI automation with 5+ years experience. Helping businesses scale customer engagement through intelligent solutions and cutting-edge technology.',
      achievements: [
        'Deployed 80+ AI chatbot solutions',
        'Automated 100,000+ customer interactions monthly',
        'Reduced client support costs by average 60%'
      ],
      skills: [
        'Python', 'NLP', 'TensorFlow', 'GPT', 'API', 'Automation'
      ],
      stats: {
        projects: '80+',
        rating: '4.9★',
        experience: '5+'
      },
      gradient: {
        from: '#10b981',
        to: '#06b6d4',
        accent: '#34d399'
      },
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sabrina@socalbird.com'
      },
      imageUrl: 'https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2glMjBzcGVjaWFsaXN0fGVufDF8fHx8MTc2OTg4MDYxMHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const teamMembers = content?.members?.length > 0 
    ? content.members.map((member: any, i: number) => ({
        ...member,
        gradient: [
          { from: '#06b6d4', to: '#3b82f6', accent: '#22d3ee' },
          { from: '#a855f7', to: '#ec4899', accent: '#c084fc' },
          { from: '#f97316', to: '#ef4444', accent: '#fb923c' },
          { from: '#10b981', to: '#06b6d4', accent: '#34d399' }
        ][i % 4],
        social: member.social || {},
        stats: {
          projects: Array.isArray(member.stats) ? member.stats[0]?.value || '-' : (member.stats?.projects || '-'),
          rating: Array.isArray(member.stats) ? member.stats[1]?.value || '-' : (member.stats?.rating || '-'),
          experience: Array.isArray(member.stats) ? member.stats[2]?.value || '-' : (member.stats?.experience || '-')
        },
        skills: member.skills || [],
        achievements: member.achievements || [],
        imageUrl: member.imageUrl || member.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
      }))
    : defaultTeamMembers;

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '7s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Radial Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 14, 39, 0.6) 100%)'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-full mb-4">
            <span className="text-sm font-medium text-gray-300">{content.badge || 'Meet the Team'}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {content.title || 'Our Team'} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{content.titleHighlight || ''}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            {content.subtitle || 'Meet the talented professionals behind our success'}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <CleanTeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}