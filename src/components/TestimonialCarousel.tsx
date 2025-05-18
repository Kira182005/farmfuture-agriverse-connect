
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  result: string;
  image: string;
}

export const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Organic Farmer, California",
      quote: "FarmFuture has transformed how I approach seasonal planning. The AI recommendations are spot-on!",
      result: "Increased yield by 32% year-over-year",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2574&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Tech-Forward Farmer, Oregon",
      quote: "The irrigation management system has revolutionized our water usage. Incredibly precise and easy to use.",
      result: "Reduced water consumption by 45%",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2574&auto=format&fit=crop"
    },
    {
      name: "Elena Martinez",
      role: "Agricultural Engineer",
      quote: "As someone who works with many farmers, I've seen firsthand how FarmFuture's analytics create real change.",
      result: "Helped clients achieve 28% better resource utilization",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2582&auto=format&fit=crop"
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="farm-section bg-white">
      <div className="farm-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-farm-darkgreen mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our community of farmers who have transformed their operations using FarmFuture's technology.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div 
                        className="w-full md:w-2/5 h-64 md:h-auto bg-cover bg-center"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      ></div>
                      <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                        <div className="mb-6">
                          <svg className="w-12 h-12 text-farm-lightgreen opacity-20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-lg italic mb-6">{testimonial.quote}</p>
                        <div className="mt-auto">
                          <p className="font-semibold text-farm-darkgreen text-xl mb-1">{testimonial.name}</p>
                          <p className="text-gray-500 mb-3">{testimonial.role}</p>
                          <div className="bg-farm-lightgreen bg-opacity-10 px-4 py-2 rounded-full inline-block">
                            <p className="text-farm-green font-medium">
                              Result: {testimonial.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-farm-darkgreen scale-125" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={handlePrev}
                className="border-farm-darkgreen text-farm-darkgreen hover:bg-farm-darkgreen hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleNext}
                className="border-farm-darkgreen text-farm-darkgreen hover:bg-farm-darkgreen hover:text-white"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
