import React from 'react';
import { Phone, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { BUSINESS_INFO } from '../../data/business';
import { getPhoneCallUrl, getWhatsAppUrl } from '../../lib/contact';
import { useEnquiryModal } from '../layout/Layout';

export const CTASection: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section className="py-16 sm:py-20 bg-wood-900 text-white relative overflow-hidden">
      {/* Decorative wood grain ambiance */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5" /> Mudit Furnitures Agra
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Furnish Your Home or Office?
          </h2>

          <p className="text-sm sm:text-base text-sand-200 leading-relaxed font-normal">
            Visit our showroom at Naulakha, Agra Cantt or reach out for direct best price quotations and custom dimensions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              onClick={() => openEnquiryModal()}
              variant="gold"
              size="lg"
              className="w-full sm:w-auto font-semibold"
            >
              Get Best Price Quotation
            </Button>
            <Button
              href={getWhatsAppUrl()}
              isExternal
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              WhatsApp Direct
            </Button>
            <Button
              href={getPhoneCallUrl()}
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="w-4 h-4 text-wood-700" />}
              className="w-full sm:w-auto font-mono"
            >
              {BUSINESS_INFO.contact.phoneDisplay}
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-sand-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              13/A, Gwalior Rd, Naulakha, Agra Cantt
            </span>
            <span>&bull;</span>
            <span>Open All 7 Days (10:30 AM – 8:30 PM)</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
