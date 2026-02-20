import { MessageCircle, Send } from 'lucide-react';

export function ModernFloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <button
        onClick={() => window.open('https://wa.me/1234567890', '_blank')}
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

      {/* Messenger Button */}
      <button
        onClick={() => window.open('https://m.me/yourpage', '_blank')}
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
    </div>
  );
}
