
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Droplet, Users, BarChart2 } from "lucide-react";

interface FeaturePanelProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeaturePanel = ({ icon, title, description, link }: FeaturePanelProps) => {
  return (
    <Link to={link} className="block h-full">
      <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer hover:scale-105 transition-transform">
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
    </Link>
  );
};

export const FeatureSection = () => {
  const features = [
    {
      icon: <Clock size={80} strokeWidth={1.5} />,
      title: "Seasonal Planning",
      description: "Upload images of your fields and receive AI-powered recommendations for optimal crop rotation and seasonal planning strategies.",
      link: "/seasonal-planning"
    },
    {
      icon: <Droplet size={80} strokeWidth={1.5} />,
      title: "Irrigation Management",
      description: "Smart irrigation systems with real-time monitoring. Save water while improving crop yield through precision watering techniques.",
      link: "/irrigation-management"
    },
    {
      icon: <Users size={80} strokeWidth={1.5} />,
      title: "Social Network",
      description: "Connect with fellow farmers and agricultural experts. Share experiences, ask questions, and collaborate in our dedicated farming community.",
      link: "/social-network"
    },
    {
      icon: <BarChart2 size={80} strokeWidth={1.5} />,
      title: "AI Analytics",
      description: "Advanced analytics platform that transforms raw data into actionable insights, helping you make informed decisions for your farm.",
      link: "/ai-analytics"
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
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePanel;
