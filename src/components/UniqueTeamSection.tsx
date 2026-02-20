import { Linkedin, Twitter, Github, Mail, Award, Code, Zap, Users, ArrowUpRight, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  skills: string[];
  stats: {
    projects: string;
    rating: string;
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
  index: number;
}

function TeamMemberCard({ name, role, expertise, bio, skills, stats, gradient, social, index }: TeamMemberProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative h-[500px] perspective-1000"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Animated Glow */}
      <div 
        className={`absolute -inset-2 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 rounded-3xl`}
        style={{
          background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`
        }}
      />

      {/* Card Container - Flip Effect */}
      <div 
        className="relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div 
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full bg-gradient-to-br from-[#0D1128] to-[#0A0E27] border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/20 transition-all">
            {/* Top Gradient Bar */}
            <div 
              className="h-2"
              style={{
                background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`
              }}
            />

            <div className="p-8 flex flex-col h-full">
              {/* Avatar Section */}
              <div className="relative mb-6">
                <div className="relative w-32 h-32 mx-auto">
                  {/* Animated Border */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
                    style={{
                      background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                      padding: '3px'
                    }}
                  />
                  
                  {/* Avatar Circle */}
                  <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center border-4 border-[#0A0E27]">
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-emerald-400">Available</span>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                <p 
                  className="text-lg font-semibold mb-2"
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

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stats.projects}</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stats.rating}</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </div>

              {/* Click to Flip Indicator */}
              <div className="mt-auto">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                  <span>Click to see more</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute w-full h-full backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="relative h-full bg-gradient-to-br from-[#0D1128] to-[#0A0E27] border border-white/10 rounded-3xl overflow-hidden">
            {/* Top Gradient Bar */}
            <div 
              className="h-2"
              style={{
                background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`
              }}
            />

            <div className="p-8 flex flex-col h-full">
              {/* Header */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-2">{name}</h4>
                <p className="text-sm text-gray-400">{role}</p>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <p className="text-sm text-gray-400 leading-relaxed">{bio}</p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Core Skills</div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-auto">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Connect</div>
                <div className="flex gap-3">
                  {social.linkedin && (
                    <a 
                      href={social.linkedin}
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/30 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                    </a>
                  )}
                  {social.twitter && (
                    <a 
                      href={social.twitter}
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/30 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="w-4 h-4 text-cyan-400" />
                    </a>
                  )}
                  {social.github && (
                    <a 
                      href={social.github}
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/30 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                    </a>
                  )}
                  {social.email && (
                    <a 
                      href={`mailto:${social.email}`}
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/30 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Click to Flip Back */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                <span>Click to flip back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface UniqueTeamSectionProps {
  onNavigate?: (page: string) => void;
}

export function UniqueTeamSection({ onNavigate }: UniqueTeamSectionProps) {
  const teamMembers = [
    {
      name: 'Arif Rahman',
      role: 'Lead Developer',
      expertise: 'Full-Stack & AI Integration',
      bio: '8+ years of experience building scalable web applications and AI-powered solutions. Passionate about clean code and user experience.',
      skills: ['React', 'Node.js', 'AI/ML', 'Cloud'],
      stats: {
        projects: '150+',
        rating: '4.9★'
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
      }
    },
    {
      name: 'Nadia Islam',
      role: 'UI/UX Designer',
      expertise: 'Product Design & Branding',
      bio: '6+ years creating beautiful, intuitive interfaces that users love. Specialized in conversion-focused design and brand identity.',
      skills: ['Figma', 'Webflow', 'Branding', 'UI/UX'],
      stats: {
        projects: '120+',
        rating: '5.0★'
      },
      gradient: {
        from: '#a855f7',
        to: '#ec4899'
      },
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'nadia@socalbird.com'
      }
    },
    {
      name: 'Kamal Hossain',
      role: 'Mobile Developer',
      expertise: 'iOS & Android Apps',
      bio: '7+ years building high-performance mobile apps with millions of downloads. Expert in native and cross-platform development.',
      skills: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
      stats: {
        projects: '100+',
        rating: '4.8★'
      },
      gradient: {
        from: '#f97316',
        to: '#ef4444'
      },
      social: {
        linkedin: '#',
        github: '#',
        email: 'kamal@socalbird.com'
      }
    },
    {
      name: 'Sabrina Khan',
      role: 'AI Specialist',
      expertise: 'Chatbot & Automation',
      bio: '5+ years developing intelligent chatbot solutions and automation systems. Helping businesses automate customer engagement.',
      skills: ['Python', 'NLP', 'Chatbots', 'API'],
      stats: {
        projects: '80+',
        rating: '4.9★'
      },
      gradient: {
        from: '#10b981',
        to: '#06b6d4'
      },
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sabrina@socalbird.com'
      }
    }
  ];

  return (
    <section className="relative py-24 px-4 border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Expert Team
            </span>
            <div className="flex gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white mb-2">The Minds Behind</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Your Digital Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            A team of passionate experts dedicated to transforming your business with cutting-edge technology
          </p>

          {/* Team Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Award, label: 'Combined Experience', value: '25+ Years' },
              { icon: Code, label: 'Technologies Mastered', value: '50+' },
              { icon: Zap, label: 'Happy Clients', value: '200+' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
          
          <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-10 lg:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">We're Hiring!</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented developers, designers, and innovators to join our mission
            </p>
            
            {onNavigate && (
              <button
                onClick={() => onNavigate('/contact')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/20"
              >
                <span>View Open Positions</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
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
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
