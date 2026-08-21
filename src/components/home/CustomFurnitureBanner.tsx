import React from 'react';
import { Sparkles, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { useEnquiryModal } from '../layout/Layout';
import { getWhatsAppUrl } from '../../lib/contact';
import { OptimizedImage } from '../common/OptimizedImage';

export const CustomFurnitureBanner: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();

  const customOfferings = [
    'Custom Beds (Storage & Headboard Options)',
    'Custom Wardrobes & Sliding Closets',
    'Custom Cabinets & Steel Almirahs',
    'Custom Office Tables & Workstations',
    'Other Bespoke Requirements',
  ];

  return (
    <section className="py-16 sm:py-20 bg-sand-50">
      <Container>
        <div className="relative rounded-3xl bg-charcoal-950 text-white overflow-hidden shadow-2xl border border-charcoal-800">
          {/* Subtle warm glow inside dark card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wood-700/20 blur-[120px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16 relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-white/10">
                <Sparkles className="w-3.5 h-3.5" /> Bespoke Manufacturing
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Have Something Specific in Mind?
              </h2>

              <p className="text-sm sm:text-base text-sand-200 leading-relaxed max-w-xl">
                Get furniture customized according to your space, style and requirements. Whether it's a specific room dimension, timber type, fabric color, or storage layout, we build it to perfection in Agra.
              </p>

              <div className="space-y-2.5 pt-2">
                {customOfferings.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-sand-100">
                    <div className="w-5 h-5 rounded-full bg-wood-700/80 text-amber-300 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => openEnquiryModal(undefined, 'Custom Furniture Consultation')}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-semibold text-sm sm:text-base"
                >
                  Discuss Your Requirement
                </Button>
                <Button
                  href={getWhatsAppUrl('Hello Mudit Furnitures, I want to discuss a custom furniture requirement.')}
                  isExternal
                  variant="whatsapp"
                  size="lg"
                  leftIcon={<MessageCircle className="w-4 h-4" />}
                  className="text-sm sm:text-base"
                >
                  WhatsApp Blueprints
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                  alt="Custom Furniture Craftsmanship Mudit Furnitures Agra"
                  aspectRatio="square"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs text-sand-200 italic font-serif">
                    "Crafted with precision measurements for homes and offices across Agra."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
