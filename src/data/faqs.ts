export type FAQ = {
  question: string;
  answer: string;
  category: 'general' | 'custom' | 'delivery' | 'pricing';
};

export const FAQS: FAQ[] = [
  {
    question: 'Where is Mudit Furnitures located in Agra?',
    answer: 'Our showroom is located at 13/A, Gwalior Rd, Naulakha, Agra Cantt, Idgah Colony, Agra, UP 282001. We are easily accessible from both Agra Cantt Railway Station and Sadar Bazar.',
    category: 'general',
  },
  {
    question: 'Do you provide delivery and in-store pickup?',
    answer: 'Yes! We offer both convenient in-store pickup from our Agra store and doorstep delivery across Agra Cantt, Idgah, Sadar, Dayalbagh, Fatehabad Rd, and surrounding regions.',
    category: 'delivery',
  },
  {
    question: 'Can I get customized furniture built for specific dimensions?',
    answer: 'Absolutely. We specialize in custom-built beds, modular wardrobes, office tables, and sofas tailored to your exact measurements, choice of wood polish, and upholstery fabric.',
    category: 'custom',
  },
  {
    question: 'What types of furniture do you offer for offices and businesses?',
    answer: 'We provide high-back ergonomic chairs, conference tables, director desks, modular workstations, heavy-duty steel almirahs, and lockable storage cabinets for commercial workspaces.',
    category: 'general',
  },
  {
    question: 'How do I get the best price or a custom quotation?',
    answer: 'You can simply tap the "Enquire Now" or "Get Best Price" button on any product, call us directly at 096397 53121, or message us on WhatsApp for an immediate quotation.',
    category: 'pricing',
  },
];
