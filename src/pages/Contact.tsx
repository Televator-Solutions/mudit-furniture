import React, { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { MapPreview } from '../components/contact/MapPreview';
import { FAQS, FAQ } from '../data/faqs';
import { CTASection } from '../components/home/CTASection';

export const Contact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title="Contact Us & Showroom Location | Mudit Furnitures Agra"
        description="Visit Mudit Furnitures at 13/A, Gwalior Rd, Naulakha, Agra Cantt, UP 282001. Call 096397 53121 or submit an enquiry for home, office & custom furniture."
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-sand-100/80 to-sand-50 border-b border-sand-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-wood-100 text-wood-800 text-xs font-semibold uppercase tracking-wider mb-3.5 border border-wood-200">
              <Phone className="w-3.5 h-3.5" /> Direct Contact & Visit
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              Get in Touch with Mudit Furnitures
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Have questions about wood types, dimensions, pricing, or delivery in Agra? Call us, chat on WhatsApp, or send an enquiry below.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="py-14 sm:py-20 bg-sand-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-sand-200 shadow-card">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-wood-700 block mb-1">
                  Send Your Requirement
                </span>
                <h2 className="font-serif text-2xl font-bold text-charcoal-900">
                  Request Best Price Quotation
                </h2>
                <p className="text-xs text-charcoal-500 mt-1">
                  Fill in your requirements. Our Agra team responds promptly with pricing and options.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right: Showroom info */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-sand-100/50 border-t border-sand-200">
        <Container>
          <SectionHeading
            badge="Location Map"
            title="Find Our Showroom on Gwalior Road"
            subtitle="Convenient parking and central location near Agra Cantt."
            align="center"
          />
          <div className="max-w-4xl mx-auto">
            <MapPreview />
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-sand-50 border-t border-sand-200">
        <Container size="narrow">
          <SectionHeading
            badge="Help & Advice"
            title="Frequently Asked Questions"
            subtitle="Clear answers regarding furniture buying, custom dimensions, and delivery in Agra."
            align="center"
          />

          <div className="space-y-3.5">
            {FAQS.map((faq: FAQ, idx: number) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-sand-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-charcoal-900 hover:text-wood-800 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-wood-700 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-sand-100 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
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
