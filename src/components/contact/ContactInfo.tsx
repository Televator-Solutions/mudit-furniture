import React from 'react';
import { MapPin, Phone, Clock, Truck, Store, ExternalLink, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { GOOGLE_MAPS_DIRECTIONS_URL, getWhatsAppUrl, getPhoneCallUrl } from '../../lib/contact';
import { Button } from '../common/Button';

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Card: Address & Timings */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-sand-200 shadow-card">
        <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-6 flex items-center gap-2">
          <Store className="w-5 h-5 text-wood-700" /> Showroom Information
        </h3>

        <div className="space-y-5">
          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-wood-50 text-wood-700 flex items-center justify-center shrink-0 mt-0.5 border border-wood-200">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-1">
                Showroom Address
              </p>
              <p className="text-sm font-medium text-charcoal-900 leading-relaxed">
                {BUSINESS_INFO.address.full}
              </p>
              <p className="text-xs text-wood-800 mt-1 font-medium">
                {BUSINESS_INFO.address.landmark}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-wood-50 text-wood-700 flex items-center justify-center shrink-0 mt-0.5 border border-wood-200">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-1">
                Direct Call / Phone
              </p>
              <a
                href={getPhoneCallUrl()}
                className="text-base font-bold text-charcoal-900 hover:text-wood-700 transition-colors font-mono"
              >
                {BUSINESS_INFO.contact.phoneDisplay}
              </a>
              <p className="text-xs text-charcoal-500 mt-0.5">
                Available for quotations and queries
              </p>
            </div>
          </div>

          {/* Timings */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-wood-50 text-wood-700 flex items-center justify-center shrink-0 mt-0.5 border border-wood-200">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-1">
                Opening Hours
              </p>
              <p className="text-sm font-medium text-charcoal-900">
                {BUSINESS_INFO.timings.hours}
              </p>
              <p className="text-xs text-emerald-700 font-medium mt-0.5">
                {BUSINESS_INFO.timings.openDays}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-sand-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            isExternal
            variant="outline"
            size="sm"
            leftIcon={<ExternalLink className="w-4 h-4" />}
            className="w-full text-xs"
          >
            Get Directions
          </Button>
          <Button
            href={getWhatsAppUrl()}
            isExternal
            variant="whatsapp"
            size="sm"
            leftIcon={<MessageSquare className="w-4 h-4" />}
            className="w-full text-xs"
          >
            WhatsApp Store
          </Button>
        </div>
      </div>

      {/* Available Services Highlight */}
      <div className="p-6 rounded-2xl bg-sand-100/70 border border-sand-300">
        <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-3 flex items-center gap-2">
          <Truck className="w-4 h-4 text-wood-700" /> Fulfilment Services
        </h4>
        <div className="grid grid-cols-2 gap-2 text-xs text-charcoal-800 font-medium">
          <div className="p-2.5 rounded-lg bg-white border border-sand-200">
            ✓ In-Store Pickup
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-sand-200">
            ✓ Doorstep Delivery
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-sand-200">
            ✓ Custom Fabrication
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-sand-200">
            ✓ On-Site Assembly
          </div>
        </div>
      </div>
    </div>
  );
};
