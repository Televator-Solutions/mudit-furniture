import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { ReviewCard } from '../components/reviews/ReviewCard';
import { ReviewStats } from '../components/reviews/ReviewStats';
import { REVIEWS } from '../data/reviews';
import { Review } from '../types/review';
import { Button } from '../components/common/Button';
import { GOOGLE_MAPS_SEARCH_URL } from '../lib/contact';
import { CTASection } from '../components/home/CTASection';

export const Reviews: React.FC = () => {
  return (
    <>
      <SEO
        title="Customer Reviews (4.6★ from 93+ Reviews) | Mudit Furnitures Agra"
        description="Read genuine customer reviews for Mudit Furnitures Agra. Rated 4.6/5 across 93+ reviews highlighting quality furniture, reasonable pricing, good service & on-time delivery."
        canonicalPath="/reviews"
      />

      {/* Header */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-sand-100/80 to-sand-50 border-b border-sand-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" /> 4.6 / 5.0 Customer Rating
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              Customer Reviews & Experiences
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              We take pride in every piece we craft and deliver. Here is what customers across Agra Cantt, Idgah, Naulakha, and Sadar Bazar share about Mudit Furnitures.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Card */}
      <section className="py-12 bg-sand-50">
        <Container size="narrow">
          <ReviewStats />
        </Container>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 sm:py-16 bg-sand-50">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                Verified Feedback
              </h2>
              <p className="text-xs text-charcoal-500 mt-1">
                Real customer sentiments collected from Google Reviews & showroom purchases.
              </p>
            </div>

            <Button
              href={GOOGLE_MAPS_SEARCH_URL}
              isExternal
              variant="outline"
              size="sm"
              leftIcon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              View on Google Maps
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review: Review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};
