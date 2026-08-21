import React from 'react';
import { ArrowRight, Phone, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { getPhoneCallUrl } from '../../lib/contact';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { TrustBadge } from '../common/TrustBadge';
import { OptimizedImage } from '../common/OptimizedImage';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-sand-50 via-sand-100/50 to-sand-50">
      {/* Decorative ambient background blur elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-wood-200/20 blur-[100px] pointer-events-none rounded-full" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sand-300 shadow-soft text-charcoal-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-wood-800 font-bold">मुदित फर्नीचर्स</span>
              <span className="text-sand-400">&bull;</span>
              <span className="flex items-center gap-1 text-charcoal-600 font-medium">
                <MapPin className="w-3 h-3 text-wood-700" /> Agra, Uttar Pradesh
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-charcoal-950 tracking-tight leading-[1.15] text-balance">
              Furniture That Makes Your Space Feel Like Home.
            </h1>

            {/* Supporting text */}
            <p className="mt-5 text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-normal">
              Quality furniture for your home and office, crafted with style, comfort and value in mind. Explore genuine sofas, solid wood beds, ergonomic office chairs, steel almirahs & customized furniture in Agra.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                to="/collections"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-card hover:shadow-card-hover text-sm sm:text-base font-semibold"
              >
                Explore Collection
              </Button>
              <Button
                href={getPhoneCallUrl()}
                variant="secondary"
                size="lg"
                leftIcon={<Phone className="w-4 h-4 text-wood-700" />}
                className="w-full sm:w-auto text-sm sm:text-base font-semibold"
              >
                Call Store ({BUSINESS_INFO.contact.phoneDisplay})
              </Button>
            </div>

            {/* Trust badge */}
            <div className="mt-8 w-full max-w-lg">
              <TrustBadge variant="hero" />
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-sand-100">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
                alt="Mudit Furnitures Premium Living Room Collection Agra"
                priority
                aspectRatio="portrait"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover"
              />

              {/* Floating Showroom Quality Pill */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-sand-200 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-wood-100 text-wood-800 flex items-center justify-center font-serif font-bold text-sm">
                    MF
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block">
                      Direct Showroom
                    </span>
                    <span className="text-xs font-bold text-charcoal-900">
                      Agra Cantt &bull; Gwalior Rd
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 inset-x-4 bg-charcoal-950/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-modal">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] text-amber-300 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Bespoke Craftsmanship
                    </span>
                    <h2 className="font-serif text-sm font-semibold text-white">
                      Home, Office & Custom Made
                    </h2>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-800/40">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Best Price</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
