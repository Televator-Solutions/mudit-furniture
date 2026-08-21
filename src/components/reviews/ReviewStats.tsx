import React from 'react';
import { Star, Award, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';

export const ReviewStats: React.FC = () => {
  const breakdown = [
    { stars: 5, percentage: 88, count: 82 },
    { stars: 4, percentage: 10, count: 9 },
    { stars: 3, percentage: 2, count: 2 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-sand-200 shadow-card">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Big score */}
        <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-sand-200 pb-6 md:pb-0 md:pr-8">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-amber-600" /> Google Verified Rating
          </div>
          <div className="flex items-baseline justify-center md:justify-start gap-2">
            <span className="font-serif text-5xl font-bold text-charcoal-900">
              {BUSINESS_INFO.rating}
            </span>
            <span className="text-lg text-charcoal-500 font-medium">/ 5.0</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500 my-2.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-amber-400 text-amber-500"
              />
            ))}
          </div>

          <p className="text-xs text-charcoal-600">
            Based on <strong className="text-charcoal-900 font-semibold">{BUSINESS_INFO.totalReviews} verified customer reviews</strong> across Agra
          </p>

          <div className="mt-4 flex items-center justify-center md:justify-start gap-1.5 text-xs text-emerald-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">100% Authentic Store Feedback</span>
          </div>
        </div>

        {/* Star Rating Breakdown Bars */}
        <div className="md:col-span-7 space-y-2.5">
          {breakdown.map((row) => (
            <div key={row.stars} className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1 w-12 font-medium text-charcoal-700">
                <span>{row.stars}</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
              </div>

              <div className="flex-1 h-2.5 bg-sand-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${row.percentage}%` }}
                />
              </div>

              <div className="w-12 text-right font-medium text-charcoal-500">
                {row.percentage}%
              </div>
            </div>
          ))}

          <div className="pt-2 text-[11px] text-charcoal-500 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-wood-700" />
            <span>Highest rated furniture destination in Agra Cantt & Naulakha area.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
