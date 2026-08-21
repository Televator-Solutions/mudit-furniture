import React from 'react';
import { ArrowRight } from 'lucide-react';
import { REVIEWS } from '../../data/reviews';
import { ReviewCard } from '../reviews/ReviewCard';
import { ReviewStats } from '../reviews/ReviewStats';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const ReviewsSection: React.FC = () => {
  const featuredReviews = REVIEWS.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-sand-50">
      <Container>
        <SectionHeading
          badge="Google Customer Reviews"
          title="Loved by Customers Across Agra"
          subtitle="Real experiences from homeowners, doctors, and business owners in Agra Cantt, Idgah, and beyond."
          align="center"
        />

        {/* Big Review Stats Card */}
        <div className="mb-10 max-w-4xl mx-auto">
          <ReviewStats />
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredReviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        <div className="text-center">
          <Button
            to="/reviews"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            View More Reviews & Experiences
          </Button>
        </div>
      </Container>
    </section>
  );
};
