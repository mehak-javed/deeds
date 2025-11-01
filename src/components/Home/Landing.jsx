import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router';


const VisaHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Animate content on load
    setTimeout(() => setIsVisible(true), 300);

    // Show scroll to top button handler
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2684&q=80"
          alt="Professional consultation"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-white-800/60 to-transparent"></div>
        {/* Additional Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Easy & Simple
                <br />
                <span className="text-themeClr2">Visa Processing</span>
                <br />
                Agency
              </h1>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 text-themeClr2 leading-relaxed max-w-2xl">
                Transmds is the world's driving worldwide coordinations supplier we uphold 
                industry and exchange the worldwide trade of merchandi
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Primary Button */}
              <Link to="/pathway" className="group bg-themeClr text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                <span className="mr-2">Learn More</span>
                <ChevronRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </Link>

              {/* Secondary Button */}
              <Link to="/services" className="group  bg-themeClr text-gray-800 font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                <span className="mr-2 text-white">Explore Services</span>
                <ChevronRight 
                  size={20} 
                  className="group-hover:translate-x-1 text-white transition-transform duration-300" 
                />
              </Link>
            </div>

            {/* Stats or Features (Optional Enhancement) */}
            
          </div>
        </div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Dots */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-30"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-32 left-1/4 w-8 h-8 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-6 h-6 border-2 border-blue-300/30 rounded-full animate-pulse"></div>
      </div>
      
    </div>
  );
};

export default VisaHeroSection;