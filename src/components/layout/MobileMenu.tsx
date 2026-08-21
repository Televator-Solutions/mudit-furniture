import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, X, MessageSquare, Clock, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { getWhatsAppUrl, getPhoneCallUrl, GOOGLE_MAPS_DIRECTIONS_URL } from '../../lib/contact';
import { Button } from '../common/Button';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; path: string }[];
  activePath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
  activePath,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-sand-50 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-sand-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-sand-200">
            <div>
              <div className="font-serif text-lg font-bold text-charcoal-900">
                Mudit Furnitures
              </div>
              <div className="text-xs text-wood-700 font-medium">मुदित फर्नीचर्स &bull; Agra</div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-sand-200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Rating tag */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>4.6/5 (93+ Reviews in Agra)</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {links.map((link) => {
              const active =
                link.path === '/'
                  ? activePath === '/'
                  : activePath.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? 'bg-wood-700 text-white font-semibold shadow-soft'
                      : 'text-charcoal-800 hover:bg-sand-200'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Contact actions at bottom */}
        <div className="pt-6 mt-6 border-t border-sand-200 space-y-3">
          <div className="text-xs text-charcoal-500 flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5 text-wood-600" />
            <span>{BUSINESS_INFO.timings.hours} ({BUSINESS_INFO.timings.openDays})</span>
          </div>
          <Button
            href={getPhoneCallUrl()}
            variant="primary"
            size="md"
            leftIcon={<Phone className="w-4 h-4" />}
            className="w-full text-sm font-semibold"
          >
            Call {BUSINESS_INFO.contact.phoneDisplay}
          </Button>
          <Button
            href={getWhatsAppUrl()}
            isExternal
            variant="whatsapp"
            size="md"
            leftIcon={<MessageSquare className="w-4 h-4" />}
            className="w-full text-sm font-semibold"
          >
            WhatsApp Store
          </Button>
          <Button
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            isExternal
            variant="outline"
            size="sm"
            leftIcon={<MapPin className="w-4 h-4" />}
            className="w-full text-xs"
          >
            Get Google Directions
          </Button>
        </div>
      </div>
    </div>
  );
};
