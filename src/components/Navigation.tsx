
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/#about-us' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-farm-darkgreen text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Text-only logo */}
          <div className="flex items-center">
            <span className="text-xl font-poppins font-semibold">FarmFuture</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-white hover:text-farm-cream transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-farm-green"
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 transform bg-farm-darkgreen w-64 p-6 transition-all duration-300 ease-in-out z-50",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mt-16 flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-white hover:text-farm-cream transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
