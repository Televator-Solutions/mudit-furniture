import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { getPhoneCallUrl, getWhatsAppUrl, GOOGLE_MAPS_DIRECTIONS_URL } from '../../lib/contact';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-sand-200 shadow-modal px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={getPhoneCallUrl()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-wood-700 text-white font-medium text-[11px] shadow-sm active:scale-95 transition-transform"
          aria-label="Call Mudit Furnitures"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white font-medium text-[11px] shadow-sm active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={GOOGLE_MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sand-100 text-charcoal-900 border border-sand-300 font-medium text-[11px] shadow-sm active:scale-95 transition-transform"
          aria-label="Get Directions on Google Maps"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-wood-700" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
};
