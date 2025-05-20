
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, LogIn } from "lucide-react";
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/#about-us', isScroll: true },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (e, item) => {
    if (item.isScroll) {
      e.preventDefault();
      const section = document.getElementById(item.path.substring(2)); // Remove '/#' from the path
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-farm-darkgreen to-farm-green text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Text-only logo with premium styling */}
          <div className="flex items-center">
            <span className="text-2xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-farm-cream">FarmFuture</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-white hover:text-farm-cream transition-colors text-lg font-medium"
                onClick={(e) => handleNavigation(e, item)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="outline" 
              className="bg-white/10 text-white hover:bg-white/20 border-white/30"
              onClick={handleLoginClick}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-farm-green/50 bg-farm-green/20 backdrop-blur-sm"
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 transform bg-gradient-to-b from-farm-darkgreen to-farm-green w-64 p-6 transition-all duration-300 ease-in-out z-50 backdrop-blur-md",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mt-16 flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-white hover:text-farm-cream transition-colors text-lg"
              onClick={(e) => {
                handleNavigation(e, item);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="outline" 
            className="bg-white/10 text-white hover:bg-white/20 border-white/30 w-full justify-start"
            onClick={handleLoginClick}
          >
            <LogIn className="mr-2 h-4 w-4" />
            Log In
          </Button>
        </div>
      </div>
      
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
