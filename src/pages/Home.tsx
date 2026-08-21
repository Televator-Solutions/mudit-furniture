import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { CollectionCategories } from '../components/home/CollectionCategories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { CustomFurnitureBanner } from '../components/home/CustomFurnitureBanner';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { StoreLocationSection } from '../components/home/StoreLocationSection';
import { CTASection } from '../components/home/CTASection';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Mudit Furnitures | Premium Furniture Store in Agra"
        description="Explore quality home and office furniture at Mudit Furnitures in Agra. Discover sofas, beds, sofa cum beds, chairs, tables, wardrobes, steel almirahs and customized furniture."
        canonicalPath="/"
      />
      <Hero />
      <TrustBar />
      <CollectionCategories />
      <FeaturedProducts />
      <CustomFurnitureBanner />
      <WhyChooseUs />
      <ReviewsSection />
      <StoreLocationSection />
      <CTASection />
    </>
  );
};
