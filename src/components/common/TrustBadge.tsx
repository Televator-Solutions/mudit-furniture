import React from 'react';
import { Star, MapPin, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';
import { BUSINESS_INFO } from '../../data/business';

export interface TrustBadgeProps {
  variant?: 'hero' | 'compact' | 'pill' | 'rating-only';
  className?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ variant = 'hero', className }) => {
  if (variant === 'pill') {
    return (
      <div className={cn('inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand-100/90 border border-sand-300 text-charcoal-800 text-xs font-medium backdrop-blur-sm', className)}>
        <div className="flex items-center text-amber-500">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
        </div>
        <span className="font-semibold text-charcoal-900">{BUSINESS_INFO.rating}/5</span>
        <span className="text-charcoal-500">({BUSINESS_INFO.totalReviews}+ Reviews)</span>
        <span className="w-1 h-1 rounded-full bg-sand-400" />
        <span className="text-wood-800 font-semibold">Agra, UP</span>
      </div>
    );
  }

  if (variant === 'rating-only') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <div className="flex items-center gap-0.5 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-4 h-4',
                i < 4 || (i === 4 && BUSINESS_INFO.rating >= 4.5) ? 'fill-amber-400 text-amber-500' : 'text-sand-300'
              )}
            />
          ))}
        </div>
        <span className="text-sm font-bold text-charcoal-900">{BUSINESS_INFO.rating} / 5.0</span>
        <span className="text-xs text-charcoal-500">({BUSINESS_INFO.totalReviews} reviews)</span>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-wrap items-center gap-3 p-3.5 rounded-xl bg-white/95 border border-sand-200 shadow-soft backdrop-blur-sm', className)}>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200">
        <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
        <span className="text-sm font-bold text-amber-950">{BUSINESS_INFO.rating} / 5</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-charcoal-900">
          {BUSINESS_INFO.totalReviews}+ Verified Customer Reviews
        </span>
        <span className="text-[11px] text-charcoal-500 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-wood-600" /> Trusted Furniture Store in Agra
        </span>
      </div>
      <div className="hidden sm:flex items-center ml-auto gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
        <ShieldCheck className="w-3.5 h-3.5" /> Verified Store
      </div>
    </div>
  );
};
