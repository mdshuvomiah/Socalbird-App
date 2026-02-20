import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useContent } from '../admin/ContentContext';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getSectionContent } = useContent();
  
  // Get logo from brand settings
  const logoData = getSectionContent('brand', 'logo') || {
    text: 'SocalBird',
    type: 'text',
    imageUrl: '',
    gradient: 'from-blue-500 to-cyan-400'
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Chatbot Solutions', path: '/ai-chatbot-solutions' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'App Development', path: '/app-development' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('/')}
            className={`text-2xl font-bold bg-gradient-to-r ${logoData.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
          >
            {logoData.type === 'image' && logoData.imageUrl ? (
              <img src={logoData.imageUrl} alt="Logo" className="h-10 object-contain" />
            ) : (
              logoData.text
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`text-sm transition-colors hover:text-blue-400 ${
                  currentPage === link.path ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => onNavigate('/contact')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#111827] border-t border-white/10">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  currentPage === link.path
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => {
                onNavigate('/contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}