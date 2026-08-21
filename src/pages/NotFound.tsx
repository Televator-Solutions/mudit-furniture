import React from 'react';
import { Home, ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found (404) | Mudit Furnitures Agra"
        description="The page you were looking for cannot be found. Return to Mudit Furnitures Agra collections or contact us directly."
      />

      <section className="py-24 sm:py-32 bg-sand-50 flex items-center justify-center min-h-[70vh]">
        <Container size="narrow">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-sand-200 shadow-card text-center max-w-lg mx-auto">
            <span className="font-serif text-7xl sm:text-8xl font-bold text-wood-700 block mb-3">
              404
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 mb-2">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-8">
              The furniture page or link you are looking for may have been moved or is no longer available.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                to="/"
                variant="primary"
                size="md"
                leftIcon={<Home className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Back to Home
              </Button>
              <Button
                to="/collections"
                variant="secondary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Browse Collections
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
