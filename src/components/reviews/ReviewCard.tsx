import React from 'react';
import { Star, MapPin, CheckCircle2, Quote } from 'lucide-react';
import { Review } from '../../types/review';

export interface ReviewCardProps {
  review: Review;
  className?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, className }) => {
  return (
    <div
      className={`relative rounded-2xl bg-white border border-sand-200 p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${className || ''}`}
    >
      <div>
        {/* Quote symbol subtle */}
        <Quote className="w-8 h-8 text-sand-300 mb-3 rotate-180" />

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating ? 'fill-amber-400 text-amber-500' : 'text-sand-300'
              }`}
            />
          ))}
          {review.highlightTopic && (
            <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-wood-50 text-wood-800 border border-wood-200">
              {review.highlightTopic}
            </span>
          )}
        </div>

        {/* Review Content */}
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal italic">
          "{review.text}"
        </p>
      </div>

      {/* Author & Verification Footer */}
      <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-xs">
        <div>
          <h4 className="font-semibold text-charcoal-900">
            {review.author}
          </h4>
          {review.location && (
            <span className="text-[11px] text-charcoal-500 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-wood-600" />
              {review.location}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  );
};
