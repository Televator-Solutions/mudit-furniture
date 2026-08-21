import React from 'react';
import { Award, Tag, LayoutGrid, Sliders, HeartHandshake, Truck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Quality Furniture',
      desc: 'Selected solid hardwoods, high-density foam, durable hinges, and immaculate polish finishes that stand the test of time.',
    },
    {
      icon: Tag,
      title: 'Reasonable Pricing',
      desc: 'Direct showroom value without hidden distributor markups. Genuine, honest pricing for families and businesses in Agra.',
    },
    {
      icon: LayoutGrid,
      title: 'Wide Product Range',
      desc: 'From regal living room suites and luxury king beds to heavy-gauge steel almirahs and ergonomic corporate chairs.',
    },
    {
      icon: Sliders,
      title: 'Customized Furniture',
      desc: 'Tailored dimensions, custom finishes, storage configurations, and fabrics matched precisely to your room layout.',
    },
    {
      icon: HeartHandshake,
      title: 'Good Service',
      desc: 'Warm, consultative assistance helping you choose the perfect pieces with transparent guidance on wood & care.',
    },
    {
      icon: Truck,
      title: 'On-Time Delivery',
      desc: 'Punctual dispatch, safe packaging, and professional doorstep delivery throughout Agra and surrounding localities.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-sand-100/40 border-b border-sand-200">
      <Container>
        <SectionHeading
          badge="The Mudit Standard"
          title="Why Agra Chooses Mudit Furnitures"
          subtitle="Customer satisfaction built on honest materials, sensible pricing, and courteous service."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-sand-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-wood-50 text-wood-700 flex items-center justify-center mb-4 border border-wood-200 group-hover:bg-wood-700 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
