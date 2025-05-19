
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { FeatureSection } from '@/components/FeaturePanel';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <AboutUs />
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
