import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const FeaturedProducts: React.FC = () => {
  const featuredList = PRODUCTS.slice(0, 8);

  return (
    <section className="py-16 sm:py-20 bg-sand-100/60 border-y border-sand-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <SectionHeading
            badge="Popular in Agra"
            title="Featured Furniture Creations"
            subtitle="Top-rated beds, luxury sofa sets, ergonomic chairs, and steel almirahs crafted for daily comfort and enduring strength."
            align="left"
            className="mb-0"
          />

          <Button
            to="/collections"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-end whitespace-nowrap"
          >
            View All Collections
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};
