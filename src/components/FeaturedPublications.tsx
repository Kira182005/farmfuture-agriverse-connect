
import React from 'react';

interface Publication {
  name: string;
}

const FeaturedPublications = () => {
  const publications: Publication[] = [
    { name: "Modern Farmer" },
    { name: "AgTech Today" },
    { name: "Farm Journal" },
    { name: "The Cultivator" },
    { name: "Tech & Plants" },
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
              <div className="text-farm-darkgreen font-semibold text-lg hover:text-farm-green transition-colors duration-300">
                {pub.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPublications;
