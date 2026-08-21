import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layers, Sparkles } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { ProductCard } from '../components/products/ProductCard';
import { ProductFilter } from '../components/products/ProductFilter';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { Product } from '../types/product';
import { Category } from '../types/category';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/home/CTASection';

export const Collections: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSelectCategory = (slug: string) => {
    setActiveCategory(slug);
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product: Product) => {
      const matchesCategory =
        activeCategory === 'all' || product.categorySlug === activeCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tags && product.tags.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Furniture Collections | Mudit Furnitures Agra"
        description="Browse premium furniture collections at Mudit Furnitures Agra. Sofas, beds, sofa cum beds, office chairs, dining sets, steel almirahs and bespoke designs."
        canonicalPath="/collections"
      />

      {/* Hero Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-sand-100/70 to-sand-50 border-b border-sand-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-wood-100 text-wood-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-wood-200">
              <Layers className="w-3.5 h-3.5" /> Full Product Showroom
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              Furniture Collections
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Explore our diverse range of quality handcrafted furniture for living rooms, bedrooms, executive offices, and custom requirements in Agra.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Catalog Section */}
      <section className="py-12 sm:py-16 bg-sand-50">
        <Container>
          {/* Filters & Search */}
          <ProductFilter
            categories={CATEGORIES.map((c: Category) => ({ slug: c.slug, name: c.name }))}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6 text-xs text-charcoal-500 font-medium">
            <span>
              Showing <strong className="text-charcoal-900">{filteredProducts.length}</strong> products
              {activeCategory !== 'all' && ` in ${activeCategory.replace('-', ' ')}`}
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-wood-700 hover:underline"
              >
                Clear search filter
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-white rounded-2xl border border-sand-200 p-8 max-w-md mx-auto">
              <Sparkles className="w-10 h-10 text-sand-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-1">
                No items match your search
              </h3>
              <p className="text-xs text-charcoal-600 mb-6">
                We manufacture and source all types of furniture in Agra. Please contact us directly for custom models.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="sm"
                >
                  Ask for Custom Piece
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
};
