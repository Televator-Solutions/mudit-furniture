import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Category } from '../../types/category';
import { OptimizedImage } from '../common/OptimizedImage';

export interface CategoryCardProps {
  category: Category;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, className }) => {
  return (
    <Link
      to={`/collections?category=${category.slug}`}
      className={`group relative rounded-2xl bg-white border border-sand-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col ${className || ''}`}
    >
      {/* Category Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        <OptimizedImage
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/20 to-transparent" />

        {/* Category Item Count Pill */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 text-charcoal-900 text-[11px] font-semibold backdrop-blur-sm shadow-sm border border-sand-200">
          {category.itemCountText}
        </div>

        {/* Title over image for mobile aesthetic */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center justify-between">
            <span>{category.name}</span>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center group-hover:bg-wood-700 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </h3>
        </div>
      </div>

      {/* Description & Tagline */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-sand-50/50">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-wood-700 mb-1">
            {category.tagline}
          </p>
          <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-sand-200 flex items-center text-xs font-semibold text-charcoal-800 group-hover:text-wood-800 transition-colors">
          <span>Explore {category.name}</span>
        </div>
      </div>
    </Link>
  );
};
