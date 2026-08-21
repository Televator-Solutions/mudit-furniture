import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { CategoryCard } from '../products/CategoryCard';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';

export const CollectionCategories: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-sand-50">
      <Container>
        <SectionHeading
          badge="Curated Spaces"
          title="Find Furniture for Every Space"
          subtitle="Explore handpicked collections designed for modern Indian homes, executive offices, and tailored spaces in Agra."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};
