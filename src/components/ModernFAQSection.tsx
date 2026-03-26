import { Plus, Minus, Clock, CreditCard, MessageSquare, Headphones, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useContent } from '../admin/ContentContext';

interface FAQItemProps {
  question: string;
  answer: string;
  icon: React.ReactNode;
  index: number;
}

function FAQItem({ question, answer, icon, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="group relative"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Animated Glow on Hover */}
      <div className={`absolute -inset-px bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 blur-xl transition-all duration-500 ${isOpen ? 'opacity-30' : 'group-hover:opacity-20'}`} />
      
      {/* Main Container */}
      <div className={`relative bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-500 ${isOpen ? 'border-cyan-400/60 shadow-xl shadow-cyan-500/10' : 'border-white/10 group-hover:border-cyan-500/30'}`}>
        
        {/* Question Header - Clickable */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-start gap-5 p-7 text-left transition-all duration-300"
        >
          {/* Icon Container */}
          <div className={`relative flex-shrink-0 transition-all duration-500 ${isOpen ? 'scale-110' : 'group-hover:scale-105'}`}>
            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-md opacity-0 transition-opacity duration-500 ${isOpen ? 'opacity-50' : 'group-hover:opacity-30'}`} />
            <div className={`relative w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'border-cyan-400/60 bg-cyan-500/10' : 'border-cyan-500/30'}`}>
              <div className={`transition-all duration-300 ${isOpen ? 'scale-110' : ''}`}>
                {icon}
              </div>
            </div>
          </div>

          {/* Question Text */}
          <div className="flex-1 min-w-0 pr-4">
            {/* Q Label */}
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-cyan-500/20 border border-cyan-400/40' : 'bg-white/5 border border-white/10'}`}>
                <span className={`text-xs font-bold transition-colors ${isOpen ? 'text-cyan-400' : 'text-gray-500'}`}>Q</span>
              </div>
              <span className={`text-xs font-semibold uppercase tracking-wider transition-colors ${isOpen ? 'text-cyan-400' : 'text-gray-500'}`}>Question</span>
            </div>

            {/* Question */}
            <h3 className={`text-xl font-bold leading-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
              {question}
            </h3>
          </div>

          {/* Toggle Icon */}
          <div className={`flex-shrink-0 transition-all duration-500 ${isOpen ? 'rotate-180' : ''}`}>
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-cyan-500/30'}`}>
              {isOpen ? (
                <Minus className="w-5 h-5 text-cyan-400" strokeWidth={2.5} />
              ) : (
                <Plus className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" strokeWidth={2.5} />
              )}
            </div>
          </div>
        </button>

        {/* Answer - Expandable */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {/* Gradient Divider */}
          <div className="px-7">
            <div className="relative h-px overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-transform duration-700 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} />
            </div>
          </div>

          {/* Answer Content */}
          <div className="px-7 pb-7">
            <div className="flex gap-5">
              {/* Spacer for alignment */}
              <div className="w-14 flex-shrink-0" />
              
              {/* Answer Box */}
              <div className="flex-1">
                {/* A Label */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 flex items-center justify-center">
                    <span className="text-xs font-bold text-cyan-400">A</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Answer</span>
                </div>

                {/* Answer Text */}
                <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-5">
                  <p className="text-base text-gray-300 leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div className={`h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  );
}

interface ModernFAQSectionProps {
  onNavigate?: (page: string) => void;
}

export function ModernFAQSection({ onNavigate }: ModernFAQSectionProps) {
  const { getSectionContent } = useContent();
  const faqContent = getSectionContent('home', 'faq');

  const defaultFaqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Most projects take 2-8 weeks depending on complexity. AI chatbot setup can be done in 1-2 weeks, while custom web/app development takes 4-8 weeks.',
      icon: <Clock className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
    },
    {
      question: 'Do you offer monthly payment plans?',
      answer: 'Yes! Our AI Chatbot solutions come with flexible monthly subscription packages. For web and app development, we offer milestone-based payments.',
      icon: <CreditCard className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
    },
    {
      question: 'What platforms do your chatbots support?',
      answer: 'We provide chatbot automation for Facebook Messenger, WhatsApp Business, Instagram DM, Facebook Comments, and website chat plugins.',
      icon: <MessageSquare className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Absolutely! All our projects include a warranty period, and we offer ongoing maintenance and support packages to ensure your solution stays up-to-date.',
      icon: <Headphones className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
    }
  ];

  const iconMap = [
    <Clock className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />,
    <CreditCard className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />,
    <MessageSquare className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />,
    <Headphones className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />,
    <Sparkles className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />,
  ];

  const cmsItems = faqContent?.items;
  const faqs = (cmsItems && cmsItems.length > 0)
    ? cmsItems.map((item: { question: string; answer: string }, i: number) => ({
        question: item.question,
        answer: item.answer,
        icon: iconMap[i % iconMap.length],
      }))
    : defaultFaqs;

  return (
    <section className="relative py-32 px-4 border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-5xl relative">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-sm border border-cyan-500/30 rounded-full mb-8 group hover:border-cyan-500/50 transition-all">
            <div className="relative">
              <HelpCircle className="w-5 h-5 text-cyan-400" strokeWidth={2} />
              <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-semibold text-white">Frequently Asked Questions</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block mb-3 text-white">Got Questions?</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              We've Got Clear Answers
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, pricing, and development process
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5 mb-16">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="relative mt-20">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-2xl mb-6 shadow-lg shadow-cyan-500/20">
                <MessageSquare className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Still Have Questions?
              </h3>
              
              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our team is here to help. Get in touch and we'll respond within 24 hours with personalized answers.
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {[
                  { icon: CheckCircle2, text: 'Free Consultation' },
                  { icon: Clock, text: '24-Hour Response' },
                  { icon: Headphones, text: 'Expert Support' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <item.icon size={14} className="text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              {onNavigate && (
                <button
                  onClick={() => onNavigate('/contact')}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative text-white">Contact Us Now</span>
                  <MessageSquare className="relative w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}