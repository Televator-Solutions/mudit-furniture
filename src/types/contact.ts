import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your full name (minimum 2 characters)'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  requirement: z.string().min(1, 'Please select your furniture requirement'),
  message: z.string().max(500, 'Message cannot exceed 500 characters').optional(),
  productName: z.string().optional(),
  honeypot: z.string().max(0, 'Spam detected').optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export type EnquirySubmissionResult = {
  success: boolean;
  message: string;
  enquiryId?: string;
};
