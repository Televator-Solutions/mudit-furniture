import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageCircle } from 'lucide-react';
import { enquirySchema, EnquiryFormData } from '../../types/contact';
import { submitEnquiryService, getWhatsAppUrl } from '../../lib/contact';
import { Button } from '../common/Button';

export interface ContactFormProps {
  isModal?: boolean;
  productName?: string;
  defaultRequirement?: string;
  onSuccessComplete?: () => void;
}

const REQUIREMENTS_OPTIONS = [
  'Living Room Sofas & Centre Tables',
  'Sofa Cum Beds (Space Saver)',
  'Bedroom Beds & Mattresses',
  'Wardrobes, Closets & Steel Almirahs',
  'Executive Office Chairs & Work Desks',
  'Dining Table Sets (4/6 Seater)',
  'Customized / Made-to-Order Furniture',
  'Complete Home / Office Renovation',
  'Other Furniture Requirement',
];

export const ContactForm: React.FC<ContactFormProps> = ({
  isModal = false,
  productName,
  defaultRequirement,
  onSuccessComplete,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string; enquiryId?: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      requirement: defaultRequirement || (productName ? `Enquiry for: ${productName}` : ''),
      message: '',
      productName: productName || '',
      honeypot: '',
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitResult(null);
    try {
      const res = await submitEnquiryService(data);
      setSubmitResult(res);
      if (res.success) {
        reset();
      }
    } catch {
      setSubmitResult({
        success: false,
        message: 'Something went wrong while sending your enquiry. Please call us directly or use WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitResult?.success) {
    return (
      <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-1">
          Enquiry Received Successfully!
        </h3>
        <p className="text-sm text-charcoal-700 mb-4 leading-relaxed">
          {submitResult.message}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={getWhatsAppUrl(undefined, productName)}
            isExternal
            variant="whatsapp"
            size="sm"
            leftIcon={<MessageCircle className="w-4 h-4" />}
          >
            Chat on WhatsApp
          </Button>
          {onSuccessComplete ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={onSuccessComplete}
            >
              Done
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSubmitResult(null)}
            >
              Submit Another Enquiry
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left" noValidate>
      {/* Anti-spam honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot_field">Leave this empty</label>
        <input
          id="honeypot_field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('honeypot')}
        />
      </div>

      {submitResult && !submitResult.success && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{submitResult.message}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="form_name" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
          Your Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="form_name"
          type="text"
          placeholder="e.g. Rahul Sharma"
          className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all placeholder:text-charcoal-400"
          {...register('name')}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="form_phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
          Mobile Number (WhatsApp) <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs font-semibold text-charcoal-500">
            +91
          </div>
          <input
            id="form_phone"
            type="tel"
            maxLength={10}
            placeholder="98765 43210"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all placeholder:text-charcoal-400 font-mono"
            {...register('phone')}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Requirement */}
      <div>
        <label htmlFor="form_req" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
          Furniture Requirement <span className="text-red-500">*</span>
        </label>
        <select
          id="form_req"
          className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all"
          {...register('requirement')}
        >
          <option value="">-- Select Category / Requirement --</option>
          {defaultRequirement && (
            <option value={defaultRequirement}>{defaultRequirement}</option>
          )}
          {REQUIREMENTS_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.requirement && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            {errors.requirement.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="form_message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
          Specific Dimensions, Preferences or Notes <span className="text-charcoal-400 font-normal lowercase">(optional)</span>
        </label>
        <textarea
          id="form_message"
          rows={isModal ? 2 : 3}
          placeholder="e.g. Looking for a 6x6 king bed with teak finish, or 5 executive chairs for Agra Cantt office..."
          className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all placeholder:text-charcoal-400 resize-none"
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        leftIcon={<Send className="w-4 h-4" />}
        className="w-full shadow-card hover:shadow-card-hover"
      >
        Send Requirement & Get Best Price
      </Button>

      <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-charcoal-500 text-center">
        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
        <span>No spam. Instant quote & consultation from Mudit Furnitures.</span>
      </div>
    </form>
  );
};
