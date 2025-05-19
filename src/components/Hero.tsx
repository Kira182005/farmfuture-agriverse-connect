
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/aa902b68-aac4-4200-b8d6-c94c15f42c38.png")',
          backgroundPosition: 'center',
          filter: 'brightness(0.95)'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-10 rounded-xl border border-white/20 shadow-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins animate-fade-in">
            Your Farm's Quiet Partner – Better Decisions Start Here
          </h1>
          <div className="w-32 h-1 bg-farm-orange mx-auto my-8"></div>
          <p className="text-xl md:text-2xl text-white mb-8">
            Combining cutting-edge technology with traditional farming wisdom to create the future of agriculture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button 
              className="bg-farm-orange hover:bg-opacity-90 text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = '/products'}
            >
              Explore Our Products
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/90 text-farm-darkgreen hover:bg-white border-white/90 px-8 py-6 text-lg backdrop-blur-sm"
              onClick={scrollToFeatures}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with glassmorphism effect */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer bg-white/30 backdrop-blur-sm p-3 rounded-full border border-white/30 shadow-lg" 
        onClick={scrollToFeatures}
      >
        <ArrowDown className="text-white h-8 w-8" />
      </div>
    </div>
  );
};

export default Hero;
