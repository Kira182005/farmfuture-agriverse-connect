
import React from 'react';

interface PublicationLogo {
  name: string;
  logo: React.ReactNode;
}

const FeaturedPublications = () => {
  const publications: PublicationLogo[] = [
    {
      name: "Modern Farmer",
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <rect x="10" y="10" width="80" height="20" rx="2" />
          <text x="50" y="25" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Modern Farmer</text>
        </svg>
      )
    },
    {
      name: "AgTech Today",
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <circle cx="50" cy="20" r="15" />
          <text x="50" y="25" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">AgTech</text>
        </svg>
      )
    },
    {
      name: "Farm Journal",
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <polygon points="50,5 95,20 50,35 5,20" />
          <text x="50" y="25" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Farm Journal</text>
        </svg>
      )
    },
    {
      name: "The Cultivator",
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <rect x="10" y="5" width="80" height="30" />
          <text x="50" y="25" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">The Cultivator</text>
        </svg>
      )
    },
    {
      name: "Tech & Plants",
      logo: (
        <svg viewBox="0 0 100 40" fill="currentColor">
          <ellipse cx="50" cy="20" rx="40" ry="15" />
          <text x="50" y="25" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Tech & Plants</text>
        </svg>
      )
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="farm-container">
        <div className="text-center mb-10">
          <h3 className="text-xl font-medium text-gray-500 uppercase tracking-wider">
            As Featured In
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="flex justify-center"
            >
              <div className="w-40 h-20 text-gray-400 hover:text-farm-darkgreen transition-colors duration-300">
                {pub.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPublications;
