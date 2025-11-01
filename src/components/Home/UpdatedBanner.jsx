import React from 'react';
import { Link } from 'react-router';

const UpdatesBanners = () => {
  return (
    <div className="h-auto bg-gray-50">
      <div className="p-15">
        {/* Header */}
       

        {/* Single Horizontal Banner */}
        <div className="relative bg-themeClr2 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          
          {/* Decorative Elements */}
          
          <div className="relative z-10 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              
              {/* Left Section - Main Message */}
              <div className="lg:col-span-2">
                
                <h3 className="text-3xl lg:text-4xl font-bold text-themeClr mb-4">
                  2026 Opportunities
                </h3>
               
                <p className="text-white text-opacity-90 mb-6 text-lg">
                  Secure your future with upcoming intakes, new scholarships, live webinars, and updated requirements.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
          
                  <Link to= '/form' className="border-2 border-white text-themeClr hover:bg-white px-6 py-3 text-lg rounded-lg font-semibold transition-colors">
                    Get Consultation
                  </Link>
                </div>
              </div>
              
              {/* Right Section - Update Categories */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Upcoming Intakes */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4" data-aos="fade-up">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-themeClr font-semibold text-lg mb-2">Upcoming Intakes</h4>
                    <p className="text-themeClr2 text-opacity-80 text-lg">Fall, Winter & Summer 2025</p>
                  </div>
                  
                  {/* Entry Requirements */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4" data-aos="fade-up">
                    <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-themeClr font-semibold mb-2  text-lg">Entry Requirements</h4>
                    <p className="text-themeClr2 text-opacity-80 text-lg">Latest admission criteria</p>
                  </div>
                  
                  {/* New Scholarships */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4" data-aos="fade-up">
                    <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h4 className="text-themeClr font-semibold mb-2 text-lg">New Scholarships</h4>
                    <p className="text-themeClr2 text-opacity-80 text-lg">Funding opportunities</p>
                  </div>
                  
                  {/* Webinars */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4" data-aos="fade-up">
                    <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-themeClr font-semibold mb-2 text-lg">Live Webinars</h4>
                    <p className="text-themeClr2 text-opacity-80 text-lg">Spot admissions available</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default UpdatesBanners;