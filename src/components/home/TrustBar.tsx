import React from 'react';
import { Star, MessageSquareQuote, Home, Truck } from 'lucide-react';
import { Container } from '../common/Container';
import { BUSINESS_INFO } from '../../data/business';

export const TrustBar: React.FC = () => {
  const items = [
    {
      icon: Star,
      iconColor: 'text-amber-500 bg-amber-50 border-amber-200',
      title: `${BUSINESS_INFO.rating} / 5 Rating`,
      subtitle: 'Google Customer Score',
    },
    {
      icon: MessageSquareQuote,
      iconColor: 'text-wood-700 bg-wood-50 border-wood-200',
      title: `${BUSINESS_INFO.totalReviews}+ Verified Reviews`,
      subtitle: 'Loved Across Agra',
    },
    {
      icon: Home,
      iconColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      title: 'Home & Office Furniture',
      subtitle: 'Complete Range & Custom',
    },
    {
      icon: Truck,
      iconColor: 'text-blue-700 bg-blue-50 border-blue-200',
      title: 'Pickup & Delivery',
      subtitle: 'Store Pickup & Safe Transit',
    },
  ];

  return (
    <section className="relative -mt-6 z-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-sand-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center gap-3.5"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border ${item.iconColor}`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-charcoal-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-charcoal-500 mt-0.5 font-medium">
                    {item.subtitle}
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
