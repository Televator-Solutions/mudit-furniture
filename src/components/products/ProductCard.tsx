import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Layers } from 'lucide-react';
import { Product } from '../../types/product';
import { OptimizedImage } from '../common/OptimizedImage';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../lib/contact';
import { useEnquiryModal } from '../layout/Layout';

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <div
      className={`group rounded-2xl bg-white border border-sand-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden ${className || ''}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-sand-100">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category & Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-charcoal-900 shadow-sm backdrop-blur-sm border border-sand-200">
            {product.category}
          </span>
          {product.featured && (
            <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-wood-700 text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Popular
            </span>
          )}
        </div>

        {/* WhatsApp Quick Ask Floating on Hover */}
        <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
          <a
            href={getWhatsAppUrl(undefined, product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#25D366] text-white shadow-soft hover:bg-[#1EBE5D] flex items-center justify-center transition-transform hover:scale-110"
            aria-label={`Ask best price for ${product.name} on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-semibold text-charcoal-900 group-hover:text-wood-800 transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Details / Specs Pill */}
          {(product.material || product.dimensions) && (
            <div className="mt-3.5 pt-3 border-t border-sand-100 space-y-1 text-[11px] text-charcoal-500">
              {product.material && (
                <div className="flex items-center gap-1.5 truncate">
                  <Layers className="w-3.5 h-3.5 text-wood-600 shrink-0" />
                  <span className="truncate">{product.material}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pricing & CTA */}
        <div className="mt-5 pt-3.5 border-t border-sand-200 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-400 block">
              Pricing in Agra
            </span>
            <span className="text-xs font-bold text-wood-800 bg-wood-50 px-2 py-0.5 rounded border border-wood-200">
              Get Best Price
            </span>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => openEnquiryModal(product.name, `Enquiry for: ${product.name}`)}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            className="text-xs px-3 py-1.5"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
};
