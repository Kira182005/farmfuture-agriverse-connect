
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeaturePanelProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturePanel = ({ icon, title, description }: FeaturePanelProps) => {
  return (
    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="flex items-center pb-2">
        <div className="text-farm-darkgreen w-20 h-20 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-farm-darkgreen font-poppins">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export const FeatureSection = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
          <path d="M12 8v4l3 3"></path>
        </svg>
      ),
      title: "Seasonal Planning",
      description: "Upload images of your fields and receive AI-powered recommendations for optimal crop rotation and seasonal planning strategies."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V8"></path>
          <path d="M5 12H2a10 10 0 0020 0h-3"></path>
          <path d="M8 16H4a10 10 0 0020 0M22 12h-9"></path>
        </svg>
      ),
      title: "Irrigation Management",
      description: "Smart irrigation systems with real-time monitoring. Save water while improving crop yield through precision watering techniques."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      ),
      title: "Social Network",
      description: "Connect with fellow farmers and agricultural experts. Share experiences, ask questions, and collaborate in our dedicated farming community."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v19"></path>
          <path d="M5 8l7-5 7 5"></path>
          <path d="M5 16l7 5 7-5"></path>
        </svg>
      ),
      title: "AI Analytics",
      description: "Advanced analytics platform that transforms raw data into actionable insights, helping you make informed decisions for your farm."
    }
  ];

  return (
    <section id="features" className="farm-section bg-gray-50">
      <div className="farm-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-farm-darkgreen mb-4">
            Our Core Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how FarmFuture is revolutionizing agriculture through cutting-edge technology and community-driven insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeaturePanel
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePanel;
