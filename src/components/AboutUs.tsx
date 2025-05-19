
import React from 'react';
import { Brain, Users, Leaf } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about-us" className="farm-section bg-gray-50 py-20">
      <div className="farm-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-farm-darkgreen mb-6">
            Grow Smarter, Connect Better – The Future of Farming is Here
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            FarmFuture combines AI-powered precision agriculture with a global farming community to maximize yields, sustainability, and knowledge sharing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <FeatureCard 
            icon={<Brain size={48} />}
            title="AI-Driven Insights"
            description="Real-time IoT analytics for crop optimization, pest detection, and resource management tailored to your farm's unique needs."
          />
          
          <FeatureCard 
            icon={<Users size={48} />}
            title="Farmer-First Social Network"
            description="A Quora-style platform where agronomists, smallholders, and tech innovators share knowledge through posts, videos, and live discussions."
          />
          
          <FeatureCard 
            icon={<Leaf size={48} />}
            title="Sustainable Future"
            description="Data-backed tools to reduce water waste, minimize chemical use, and improve soil health – verified by environmental scientists."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-farm-darkgreen mb-4 group transition-all duration-300 hover:scale-110 hover:text-farm-green">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-farm-darkgreen mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutUs;
