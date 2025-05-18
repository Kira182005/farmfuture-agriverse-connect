
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductCategory {
  name: string;
  image: string;
  path: string;
}

const ProductCategories = () => {
  const categories: ProductCategory[] = [
    {
      name: 'Pears',
      image: 'https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=2940&auto=format&fit=crop',
      path: '/products/pears'
    },
    {
      name: 'Grapes',
      image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=2832&auto=format&fit=crop',
      path: '/products/grapes'
    },
    {
      name: 'Peaches',
      image: 'https://images.unsplash.com/photo-1629326131549-9416a5bc05a2?q=80&w=2787&auto=format&fit=crop',
      path: '/products/peaches'
    },
    {
      name: 'Apples',
      image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=2940&auto=format&fit=crop',
      path: '/products/apples'
    }
  ];

  return (
    <section className="bg-farm-pattern py-24">
      <div className="farm-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-farm-darkgreen font-poppins mb-8">
            Discover Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Our naturally grown, sustainable products bring the authentic taste of nature to your table.
            Each one is carefully cultivated using our innovative farming techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.path} 
              className="group transition-all duration-300 block"
            >
              <div className="relative overflow-hidden rounded-lg h-72">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div className="absolute inset-0 bg-farm-darkgreen bg-opacity-60 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-farm-orange hover:bg-opacity-90 text-white px-8 py-6 text-lg" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
