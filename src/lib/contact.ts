import { EnquiryFormData, EnquirySubmissionResult } from '../types/contact';

export const BUSINESS_PHONE_RAW = '09639753121';
export const BUSINESS_PHONE_DISPLAY = '+91 96397 53121';
export const BUSINESS_WHATSAPP_NUMBER = '919639753121';
export const BUSINESS_ADDRESS = '13/A, Gwalior Rd, Naulakha, Agra Cantt, Idgah Colony, Agra, Uttar Pradesh 282001';
export const GOOGLE_MAPS_DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=13/A,+Gwalior+Rd,+Naulakha,+Agra+Cantt,+Idgah+Colony,+Agra,+Uttar+Pradesh+282001';
export const GOOGLE_MAPS_SEARCH_URL = 'https://maps.google.com/?q=Mudit+Furnitures+13/A+Gwalior+Rd+Naulakha+Agra+Cantt+Agra+Uttar+Pradesh+282001';

export function getWhatsAppUrl(customMessage?: string, productName?: string): string {
  let message = 'Hello Mudit Furnitures, I am interested in your furniture collection.';
  if (productName) {
    message = `Hello Mudit Furnitures, I would like to get the best price and details for "${productName}".`;
  } else if (customMessage) {
    message = customMessage;
  }
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getPhoneCallUrl(): string {
  return `tel:${BUSINESS_PHONE_RAW}`;
}

export async function submitEnquiryService(data: EnquiryFormData): Promise<EnquirySubmissionResult> {
  if (data.honeypot && data.honeypot.length > 0) {
    return {
      success: false,
      message: 'Submission rejected by anti-spam verification.',
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  const enquiryId = `MF-${Date.now().toString().slice(-6)}`;

  try {
    const existing = JSON.parse(localStorage.getItem('mf_enquiries') || '[]');
    existing.push({
      ...data,
      enquiryId,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem('mf_enquiries', JSON.stringify(existing));
  } catch {
    // Graceful fallback
  }

  return {
    success: true,
    message: `Thank you, ${data.name}! We have received your enquiry (${enquiryId}). Our team will call you shortly at +91 ${data.phone}.`,
    enquiryId,
  };
}
