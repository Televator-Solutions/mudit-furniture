import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Container } from '../common/Container';
import { ContactInfo } from '../contact/ContactInfo';
import { MapPreview } from '../contact/MapPreview';

export const StoreLocationSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-sand-100/50 border-t border-sand-200">
      <Container>
        <SectionHeading
          badge="Showroom & Visit"
          title="Visit Our Store in Agra"
          subtitle="Conveniently situated on Gwalior Road near Naulakha & Agra Cantt. Step inside to experience the finish and comfort in person."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <ContactInfo />
          </div>
          <div className="lg:col-span-6">
            <MapPreview />
          </div>
        </div>
      </Container>
    </section>
  );
};
