import React, { useEffect, useRef } from 'react';
import { X, Sparkles, PhoneCall, MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { getWhatsAppUrl, getPhoneCallUrl } from '../../lib/contact';
import { ContactForm } from '../contact/ContactForm';

export interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  defaultRequirement?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  productName,
  defaultRequirement,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog Body */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-modal border border-sand-200 my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-charcoal-400 hover:text-charcoal-800 hover:bg-sand-100 transition-colors focus:outline-none focus:ring-2 focus:ring-wood-500"
          aria-label="Close enquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wood-100 text-wood-800 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" /> Best Price Guarantee
          </div>
          <h2 id="enquiry-modal-title" className="font-serif text-2xl font-semibold text-charcoal-900">
            {productName ? `Enquire for ${productName}` : 'Get Custom Quote & Best Price'}
          </h2>
          <p className="text-sm text-charcoal-600 mt-1.5">
            Direct showroom quotation for genuine furniture in Agra. We respond promptly.
          </p>
        </div>

        {/* Quick Instant CTAs */}
        <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-xl bg-sand-50 border border-sand-200">
          <Button
            href={getWhatsAppUrl(undefined, productName)}
            isExternal
            variant="whatsapp"
            size="sm"
            leftIcon={<MessageSquare className="w-4 h-4" />}
            className="w-full text-xs"
          >
            Quick WhatsApp
          </Button>
          <Button
            href={getPhoneCallUrl()}
            variant="secondary"
            size="sm"
            leftIcon={<PhoneCall className="w-4 h-4 text-wood-700" />}
            className="w-full text-xs"
          >
            Call 096397 53121
          </Button>
        </div>

        {/* Form */}
        <ContactForm
          isModal
          productName={productName}
          defaultRequirement={defaultRequirement || (productName ? 'Specific Product Enquiry' : undefined)}
          onSuccessComplete={onClose}
        />
      </div>
    </div>
  );
};
