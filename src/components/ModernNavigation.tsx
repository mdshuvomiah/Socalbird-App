import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useContent } from '../admin/ContentContext';

interface ModernNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function ModernNavigation({ currentPage, onNavigate }: ModernNavigationProps) {
  const { getPageContent } = useContent();
  const brandData = getPageContent('brand');
  const logoText = brandData?.logo?.text || 'SocalBird';
  const logoType = brandData?.logo?.type || 'text';
  const logoImageUrl = brandData?.logo?.imageUrl || '';
  const logoGradient = brandData?.logo?.gradient || 'from-blue-500 to-cyan-400';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update indicator position when currentPage changes
    const updateIndicator = () => {
      const activeButton = buttonRefs.current[currentPage];
      const navContainer = navRef.current;

      if (activeButton && navContainer) {
        const navRect = navContainer.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();

        setIndicatorStyle({
          left: buttonRect.left - navRect.left,
          width: buttonRect.width,
          opacity: 1,
        });
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateIndicator, 50);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Chatbots', path: '/ai-chatbot-solutions' },
    { name: 'Web Dev', path: '/web-development' },
    { name: 'App Dev', path: '/app-development' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#0A0E27]/80 backdrop-blur-xl shadow-2xl'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('/')}
            className="relative group flex items-center gap-2"
          >
            {logoType === 'image' && logoImageUrl ? (
              <img src={logoImageUrl} alt={logoText} className="h-10 object-contain" />
            ) : logoType === 'both' && logoImageUrl ? (
              <>
                <img src={logoImageUrl} alt={logoText} className="h-9 object-contain drop-shadow-lg" />
                <span className={`text-2xl font-bold bg-gradient-to-r ${logoGradient} bg-clip-text text-transparent ml-1`}>
                  {logoText}
                </span>
              </>
            ) : (
              <>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-lg">
                    <Sparkles className="text-white" size={20} />
                  </div>
                </div>
                <span className={`text-2xl font-bold bg-gradient-to-r ${logoGradient} bg-clip-text text-transparent`}>
                  {logoText}
                </span>
              </>
            )}
          </button>

          {/* Desktop Navigation with Animated Indicator */}
          <div className="hidden lg:block relative" ref={navRef}>
            {/* Animated Background Indicator */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-10 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl will-change-transform"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateZ(0)',
              }}
            >
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-xl blur-lg animate-pulse" />
            </div>

            {/* Navigation Links */}
            <div className="relative flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  ref={(el) => { if (el) buttonRefs.current[link.path] = el; }}
                  onClick={() => onNavigate(link.path)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${currentPage === link.path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/admin')}
                className="group relative p-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-500/50 rounded-xl transition-all duration-300"
                title="Admin Login"
              >
                <Shield className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </button>

              <Button
                onClick={() => onNavigate('/contact')}
                className="relative group overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg glass"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-dark border-t border-white/10 backdrop-blur-2xl">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${currentPage === link.path
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white'
                  : 'text-gray-300 hover:bg-white/5'
                  }`}
              >
                {link.name}
              </button>
            ))}

            {/* Admin Login Button - Mobile */}
            <button
              onClick={() => {
                onNavigate('/admin');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/50 transition-all"
            >
              <Shield className="w-5 h-5" />
              <span className="font-medium">Admin Login</span>
            </button>

            <Button
              onClick={() => {
                onNavigate('/contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mt-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}