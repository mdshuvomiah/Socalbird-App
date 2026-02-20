import { Linkedin, Twitter, Github, Mail, Award, Code, Zap, Users, ArrowUpRight, Star, Sparkles, ExternalLink, MessageCircle, Heart } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  skills: string[];
  stats: {
    projects: string;
    rating: string;
    experience: string;
  };
  gradient: {
    from: string;
    to: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  imageUrl: string;
  index: number;
}

function ModernTeamMemberCard({ name, role, expertise, bio, skills, stats, gradient, social, imageUrl, index }: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      style={{ 
        animationDelay: `${index * 150}ms`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Glow */}
      <div 
        className={`absolute -inset-4 opacity-0 blur-3xl transition-all duration-700 rounded-3xl ${isHovered ? 'opacity-40' : 'opacity-0'}`}
        style={{
          background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`
        }}
      />

      {/* Main Card */}
      <div className={`relative bg-gradient-to-br from-[#0D1128]/90 to-[#0A0E27]/90 backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 ${isExpanded ? 'border-white/30 shadow-2xl' : 'border-white/10 group-hover:border-white/20'}`}>
        
        {/* Top Gradient Strip */}
        <div 
          className="h-1.5"
          style={{
            background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`
          }}
        />

        {/* Compact View */}
        <div className="relative">
          {/* Profile Image Section */}
          <div className="relative p-8">
            <div className="relative w-full aspect-square mb-6">
              {/* Animated Border Ring */}
              <div 
                className={`absolute -inset-2 rounded-3xl transition-all duration-700 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                style={{
                  background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                  filter: 'blur(20px)'
                }}
              />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[#0A0E27] shadow-2xl">
                <ImageWithFallback
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${gradient.from}40, ${gradient.to}40)`
                  }}
                />

                {/* Floating Status Badge */}
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-emerald-500/90 backdrop-blur-sm rounded-full flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-white">Available</span>
                </div>

                {/* Hover Overlay Actions */}
                <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      href={social.twitter}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="w-5 h-5 text-sky-500" />
                    </a>
                  )}
                  {social.email && (
                    <a
                      href={`mailto:${social.email}`}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-5 h-5" style={{ color: gradient.from }} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-4">
              {/* Name & Role */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{name}</h3>
                <p 
                  className="text-lg font-semibold mb-1"
                  style={{
                    background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {role}
                </p>
                <p className="text-sm text-gray-400">{expertise}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-white mb-0.5">{stats.projects}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Projects</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-white mb-0.5">{stats.rating}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Rating</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-white mb-0.5">{stats.experience}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Years</div>
                </div>
              </div>

              {/* Expand Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-between transition-all group/btn"
              >
                <span className="text-sm font-semibold text-gray-300 group-hover/btn:text-white">
                  {isExpanded ? 'Show Less' : 'View Details'}
                </span>
                <ArrowUpRight className={`w-4 h-4 text-cyan-400 transition-transform ${isExpanded ? 'rotate-180' : 'group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1'}`} />
              </button>
            </div>
          </div>

          {/* Expanded Details Section */}
          <div 
            className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            {/* Gradient Separator */}
            <div className="px-8 mb-6">
              <div 
                className="h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${gradient.from}, ${gradient.to}, transparent)`
                }}
              />
            </div>

            <div className="px-8 pb-8 space-y-6">
              {/* Bio */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${gradient.from}20` }}>
                    <MessageCircle className="w-3.5 h-3.5" style={{ color: gradient.from }} />
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">About</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{bio}</p>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${gradient.to}20` }}>
                    <Code className="w-3.5 h-3.5" style={{ color: gradient.to }} />
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Expertise</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-white border transition-all hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${gradient.from}15, ${gradient.to}15)`,
                        borderColor: `${gradient.from}30`
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${gradient.from}20` }}>
                    <ExternalLink className="w-3.5 h-3.5" style={{ color: gradient.from }} />
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Connect</span>
                </div>
                <div className="flex gap-2">
                  {social.linkedin && (
                    <a 
                      href={social.linkedin}
                      className="flex-1 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium text-gray-400 hover:text-blue-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                  )}
                  {social.twitter && (
                    <a 
                      href={social.twitter}
                      className="flex-1 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium text-gray-400 hover:text-sky-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="w-4 h-4" />
                      <span className="hidden sm:inline">Twitter</span>
                    </a>
                  )}
                  {social.github && (
                    <a 
                      href={social.github}
                      className="flex-1 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium text-gray-400 hover:text-purple-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div 
          className={`h-1 transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`
          }}
        />
      </div>
    </div>
  );
}

interface ModernTeamSectionProps {
  onNavigate?: (page: string) => void;
}

export function ModernTeamSection({ onNavigate }: ModernTeamSectionProps) {
  const teamMembers = [
    {
      name: 'Arif Rahman',
      role: 'Lead Developer',
      expertise: 'Full-Stack & AI Integration',
      bio: '8+ years of experience building scalable web applications and AI-powered solutions. Passionate about clean code and exceptional user experiences.',
      skills: ['React', 'Node.js', 'Python', 'AI/ML', 'Cloud', 'DevOps'],
      stats: {
        projects: '150+',
        rating: '4.9★',
        experience: '8+'
      },
      gradient: {
        from: '#06b6d4',
        to: '#3b82f6'
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
      bio: '6+ years creating beautiful, intuitive interfaces that users love. Specialized in conversion-focused design and brand identity systems.',
      skills: ['Figma', 'Webflow', 'Framer', 'Branding', 'UI/UX', 'Design Systems'],
      stats: {
        projects: '120+',
        rating: '5.0★',
        experience: '6+'
      },
      gradient: {
        from: '#a855f7',
        to: '#ec4899'
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
      bio: '7+ years building high-performance mobile apps with millions of downloads. Expert in native and cross-platform development with focus on UX.',
      skills: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'App Store'],
      stats: {
        projects: '100+',
        rating: '4.8★',
        experience: '7+'
      },
      gradient: {
        from: '#f97316',
        to: '#ef4444'
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
      bio: '5+ years developing intelligent chatbot solutions and automation systems. Helping businesses automate customer engagement and support.',
      skills: ['Python', 'NLP', 'TensorFlow', 'Chatbots', 'API', 'Automation'],
      stats: {
        projects: '80+',
        rating: '4.9★',
        experience: '5+'
      },
      gradient: {
        from: '#10b981',
        to: '#06b6d4'
      },
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sabrina@socalbird.com'
      },
      imageUrl: 'https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2glMjBzcGVjaWFsaXN0fGVufDF8fHx8MTc2OTg4MDYxMHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="relative py-24 px-4 border-t border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] animate-float-delayed" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Floating Badge */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-[#0D1128] border border-cyan-500/30 rounded-full backdrop-blur-xl">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Meet The Dream Team
              </span>
              <div className="flex gap-0.5">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white mb-2">Passionate Experts</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Driving Your Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            A team of dedicated professionals with cutting-edge expertise and proven track records
          </p>

          {/* Team Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Award, label: 'Combined Experience', value: '25+ Years', color: 'cyan' },
              { icon: Code, label: 'Projects Delivered', value: '450+', color: 'purple' },
              { icon: Heart, label: 'Happy Clients', value: '200+', color: 'pink' },
            ].map((stat, i) => (
              <div key={i} className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 hover:scale-105 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                <div className="text-left">
                  <div className={`text-2xl font-black text-${stat.color}-400`}>{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <ModernTeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-10 lg:p-16 text-center overflow-hidden">
            {/* Floating Orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full mb-8">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-spin-slow" />
                <span className="text-sm font-bold text-cyan-400">We're Hiring Talented People!</span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-4">
                Join Our Amazing Team
              </h3>
              
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                We're always looking for passionate developers, designers, and innovators to help us build the future
              </p>
              
              {onNavigate && (
                <button
                  onClick={() => onNavigate('/contact')}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30"
                >
                  <span>View Open Positions</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, 30px);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}