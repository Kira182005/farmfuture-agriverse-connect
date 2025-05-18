
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-24">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-farm-darkgreen mb-6">404</h1>
          <p className="text-2xl text-gray-600 mb-8">
            Oops! Looks like this page is still growing.
          </p>
          <p className="text-gray-500 max-w-md mx-auto mb-10">
            We're constantly cultivating new features. Please check back soon or
            return to our homepage.
          </p>
          <Button className="bg-farm-orange hover:bg-opacity-90 text-white px-8 py-6 text-lg" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
