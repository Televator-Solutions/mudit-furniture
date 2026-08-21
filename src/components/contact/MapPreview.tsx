import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, PhoneCall } from 'lucide-react';
import { GOOGLE_MAPS_DIRECTIONS_URL, getPhoneCallUrl } from '../../lib/contact';
import { BUSINESS_INFO } from '../../data/business';
import { Button } from '../common/Button';

export const MapPreview: React.FC = () => {
  const [loadInteractiveMap, setLoadInteractiveMap] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-sand-300 shadow-card bg-sand-100">
      {loadInteractiveMap ? (
        <iframe
          title="Mudit Furnitures Location in Agra"
          src="https://maps.google.com/maps?q=13/A,%20Gwalior%20Rd,%20Naulakha,%20Agra%20Cantt,%20Idgah%20Colony,%20Agra,%20Uttar%20Pradesh%20282001&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-80 sm:h-96 border-0"
          loading="lazy"
          allowFullScreen
        />
      ) : (
        <div className="relative h-80 sm:h-96 w-full bg-gradient-to-br from-sand-100 via-sand-200 to-sand-300 flex flex-col items-center justify-center p-6 text-center">
          {/* Subtle stylized map background graphic */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#7E4921_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 max-w-md">
            <div className="w-12 h-12 rounded-full bg-wood-700 text-white flex items-center justify-center mx-auto mb-3 shadow-card animate-bounce">
              <MapPin className="w-6 h-6" />
            </div>

            <h4 className="font-serif text-lg font-semibold text-charcoal-900 mb-1">
              Mudit Furnitures Showroom
            </h4>
            <p className="text-xs text-charcoal-700 leading-relaxed mb-5">
              {BUSINESS_INFO.address.full}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <Button
                variant="primary"
                size="sm"
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                isExternal
                leftIcon={<Navigation className="w-3.5 h-3.5" />}
              >
                Get Google Directions
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setLoadInteractiveMap(true)}
                leftIcon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Load Live Map
              </Button>
              <Button
                variant="call"
                size="sm"
                href={getPhoneCallUrl()}
                leftIcon={<PhoneCall className="w-3.5 h-3.5" />}
              >
                Call Store
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
