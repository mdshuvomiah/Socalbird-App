import { MessageCircle, Send } from 'lucide-react';
import { useContent } from '../admin/ContentContext';

export function ModernFloatingContact() {
  const { getPageContent } = useContent();
  const brandData = getPageContent('brand');
  const chatWidgets = brandData?.chatWidgets || { whatsapp: '', messenger: '' };

  const formatWhatsappLink = (number: string) => {
    if (!number) return '';
    // Remove all non-numeric characters for WhatsApp link
    const cleanNumber = number.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}`;
  };

  const formatMessengerLink = (id: string) => {
    if (!id) return '';
    if (id.startsWith('http')) return id;
    if (id.includes('facebook.com') || id.includes('fb.me')) return id;
    return `https://m.me/${id.replace('@', '')}`;
  };

  const waLink = formatWhatsappLink(chatWidgets.whatsapp);
  const msLink = formatMessengerLink(chatWidgets.messenger);

  if (!chatWidgets.whatsapp && !chatWidgets.messenger) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      {chatWidgets.whatsapp && (
        <button
          onClick={() => window.open(waLink, '_blank')}
          className="group relative"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
            <MessageCircle size={24} className="text-white" />
          </div>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            WhatsApp Chat
          </span>
        </button>
      )}

      {/* Messenger Button */}
      {chatWidgets.messenger && (
        <button
          onClick={() => window.open(msLink, '_blank')}
          className="group relative"
        >
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
            <Send size={24} className="text-white" />
          </div>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            Messenger Chat
          </span>
        </button>
      )}
    </div>
  );
}
