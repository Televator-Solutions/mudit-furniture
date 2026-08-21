import React from 'react';
import { Sparkles, MapPin, CheckCircle2, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { Button } from '../components/common/Button';
import { TrustBadge } from '../components/common/TrustBadge';
import { getWhatsAppUrl } from '../lib/contact';
import { CTASection } from '../components/home/CTASection';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Genuine Craftsmanship',
      desc: 'We select proven hardwoods, sturdy metal frames, high-density comfort foams, and premium laminates that withstand decades of everyday use.',
    },
    {
      icon: ShieldCheck,
      title: 'Honest & Reasonable Pricing',
      desc: 'No artificial price inflation or confusing discounts. We offer direct showroom pricing so every family and business in Agra gets maximum value.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-First Relationship',
      desc: 'Our 4.6/5 rating from 93+ reviews is built on trust, attentive guidance, respectful communication, and on-time doorstep delivery.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us | Mudit Furnitures Agra"
        description="Learn about Mudit Furnitures (मुदित फर्नीचर्स) in Agra. Discover our commitment to quality craftsmanship, reasonable pricing, home and office furniture, and bespoke customization."
        canonicalPath="/about"
      />

      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-sand-100/70 to-sand-50 border-b border-sand-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-wood-100 text-wood-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-wood-200">
              <Sparkles className="w-3.5 h-3.5" /> Our Agra Legacy
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              Furniture Crafted with Style, Comfort & Integrity
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal-600 leading-relaxed">
              Mudit Furnitures (मुदित फर्नीचर्स) is a trusted furniture showroom located at Gwalior Road, Naulakha, Agra Cantt — dedicated to transforming residential and commercial spaces into warm, functional environments.
            </p>
          </div>
        </Container>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 sm:py-20 bg-sand-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-card bg-sand-100">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
                  alt="Mudit Furnitures Showroom Agra"
                  aspectRatio="portrait"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-sand-200 shadow-card">
                  <TrustBadge variant="pill" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 text-charcoal-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-wood-700" /> Naulakha, Agra Cantt
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 leading-tight">
                A True Furniture Destination for Agra Families & Workspaces
              </h2>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                Whether you are setting up a newly built home, upgrading your master bedroom, outfitting an executive corporate suite, or needing specialized dimensions for tight alcoves, Mudit Furnitures provides comprehensive solutions under one roof.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Extensive collection of modern sofas, sofa cum beds, and centre tables',
                  'Hydraulic storage beds, orthopedic mattresses, and 3-door wooden wardrobes',
                  'High-back ergonomic office chairs and executive Director desks',
                  'Heavy-duty CRCA steel almirahs with multi-tier secure lockers',
                  'Customized furniture tailored to your exact floor plan and aesthetics',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800">
                    <CheckCircle2 className="w-4 h-4 text-wood-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button
                  to="/collections"
                  variant="primary"
                  size="md"
                >
                  Explore Collections
                </Button>
                <Button
                  href={getWhatsAppUrl()}
                  isExternal
                  variant="whatsapp"
                  size="md"
                >
                  Message on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Pillars */}
      <section className="py-16 sm:py-20 bg-sand-100/60 border-y border-sand-200">
        <Container>
          <SectionHeading
            badge="Our Standards"
            title="The Values That Guide Us"
            subtitle="Built on positive word-of-mouth and dependable service throughout Agra."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-sand-200 shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-wood-50 text-wood-700 flex items-center justify-center mb-5 border border-wood-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};
