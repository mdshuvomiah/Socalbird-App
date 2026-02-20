import { useState, useEffect } from 'react';
import { ModernNavigation } from './components/ModernNavigation';
import { Footer } from './components/Footer';
import { ModernFloatingContact } from './components/ModernFloatingContact';
import { ProfessionalHomePage } from './pages/ProfessionalHomePage';
import { AIChatbotSolutionsPage } from './pages/AIChatbotSolutionsPage';
import { WebDevelopmentPage } from './pages/WebDevelopmentPage';
import { AppDevelopmentPage } from './pages/AppDevelopmentPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLoginPage } from './admin/AdminLoginPage';
import { AdminDashboardPage } from './admin/AdminDashboardPage';
import { ContentEditorPage } from './admin/ContentEditorPage';
import { ContentProvider } from './admin/ContentContext';
import { supabase } from './lib/supabase';

export default function App() {
  const [currentPage, setCurrentPage] = useState('/');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminView, setAdminView] = useState<'login' | 'dashboard' | 'editor'>('login');
  const [editingPage, setEditingPage] = useState<{ id: string; name: string } | null>(null);

  // Check admin authentication on mount and listen for changes
  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsAdminAuthenticated(true);
        // Only switch to dashboard if we were on the admin login page
        // or if we are navigating to /admin
        setAdminView(prev => (currentPage === '/admin' && prev === 'login') ? 'dashboard' : prev);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setIsAdminAuthenticated(true);
        setAdminView(prev => (currentPage === '/admin' && prev === 'login') ? 'dashboard' : prev);
      } else {
        setIsAdminAuthenticated(false);
        setAdminView('login');
      }
    });

    return () => subscription.unsubscribe();
  }, [currentPage]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    // Check if navigating to admin
    if (page === '/admin') {
      if (isAdminAuthenticated) {
        setAdminView('dashboard');
      } else {
        setAdminView('login');
      }
      setCurrentPage(page);
    } else {
      setCurrentPage(page);
    }
  };

  const handleAdminLogin = (token: string) => {
    // Auth state listener will handle the state update
    setIsAdminAuthenticated(true);
    setAdminView('dashboard');
  };

  const handleAdminLogout = async () => {
    await supabase.auth.signOut();
    setIsAdminAuthenticated(false);
    setAdminView('login');
    setCurrentPage('/');
  };

  const handleNavigateToEditor = (pageId: string) => {
    const pageNames: { [key: string]: string } = {
      'home': 'Home Page',
      'about': 'About Page',
      'web-development': 'Web Development',
      'app-development': 'App Development',
      'ai-chatbot': 'AI Chatbot Solutions',
      'portfolio': 'Portfolio',
      'contact': 'Contact Page',
      'footer': 'Footer Content'
    };
    setEditingPage({ id: pageId, name: pageNames[pageId] || pageId });
    setAdminView('editor');
  };

  const handleBackToDashboard = () => {
    setAdminView('dashboard');
    setEditingPage(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <ProfessionalHomePage onNavigate={handleNavigate} />;
      case '/ai-chatbot-solutions':
        return <AIChatbotSolutionsPage onNavigate={handleNavigate} />;
      case '/web-development':
        return <WebDevelopmentPage onNavigate={handleNavigate} />;
      case '/app-development':
        return <AppDevelopmentPage onNavigate={handleNavigate} />;
      case '/portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <ProfessionalHomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ContentProvider>
      {/* Admin Routes */}
      {currentPage === '/admin' ? (
        <>
          {!isAdminAuthenticated && adminView === 'login' && (
            <AdminLoginPage onLogin={handleAdminLogin} />
          )}

          {isAdminAuthenticated && adminView === 'dashboard' ? (
            <AdminDashboardPage
              onLogout={handleAdminLogout}
              onNavigateToEditor={handleNavigateToEditor}
            />
          ) : null}

          {isAdminAuthenticated && adminView === 'editor' && editingPage ? (
            <ContentEditorPage
              pageId={editingPage.id}
              pageName={editingPage.name}
              onBack={handleBackToDashboard}
            />
          ) : null}
        </>
      ) : (
        <div className="dark min-h-screen bg-[#0A0E27]">
          <ModernNavigation currentPage={currentPage} onNavigate={handleNavigate} />

          <main className="pt-0">
            {renderPage()}
          </main>

          <Footer onNavigate={handleNavigate} />
          <ModernFloatingContact />
        </div>
      )}
    </ContentProvider>
  );
}