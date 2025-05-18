
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { FeatureSection } from '@/components/FeaturePanel';
import ProductCategories from '@/components/ProductCategories';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import FeaturedPublications from '@/components/FeaturedPublications';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <ProductCategories />
        <TestimonialCarousel />
        <FeaturedPublications />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
