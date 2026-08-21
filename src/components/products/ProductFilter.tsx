import React from 'react';
import { Search, X } from 'lucide-react';

export interface ProductFilterProps {
  categories: { slug: string; name: string }[];
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
      {/* Category Pills (horizontal scrollable on mobile) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-wood-700 text-white shadow-soft font-semibold'
              : 'bg-white text-charcoal-700 hover:bg-sand-200 border border-sand-200'
          }`}
        >
          All Furniture
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onSelectCategory(cat.slug)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeCategory === cat.slug
                ? 'bg-wood-700 text-white shadow-soft font-semibold'
                : 'bg-white text-charcoal-700 hover:bg-sand-200 border border-sand-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative min-w-[240px] sm:min-w-[280px]">
        <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search sofa, bed, chair, almirah..."
          className="w-full pl-10 pr-9 py-2 rounded-xl border border-sand-300 bg-white text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent transition-all shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
