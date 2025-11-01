import React from 'react';
import UpdatesBanners from '../Home/UpdatedBanner';
import MainBreadCrumb from '../MainBreadCrumb';
const OurServices = () => {
  return (
    <div className="bg-gray-50 ">
      <MainBreadCrumb/>
      <div className="container py-20 mx-auto px-4 max-w-7xl">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {/* Counselling Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"  data-aos="fade-up">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6" >
              <svg className="w-8 h-8 text-themeClr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Counselling</h3>
            <p className="text-gray-600 leading-relaxed">
              Applying to study abroad is a big decision, so our counseling goes beyond university 
              selection; we guide you through applications, visas, scholarships, and more for your journey.
            </p>
          </div>

          {/* Admission Guidance Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-themeClr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Admission Guidance</h3>
            <p className="text-gray-600 leading-relaxed">
              We give special attention to your application, highlighting key areas to enhance your profile, 
              ensuring a strong impression on universities and increasing your chances of admissions.
            </p>
          </div>

          {/* University Selection Card - Without Blue Background */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"  data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-themeClr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">University Selection</h3>
            <p className="text-gray-600 leading-relaxed">
              University selection is a crucial stage in the application process. It involves careful 
              evaluation of your career goals and budget to ensure the best possible match.
            </p>
          </div>

          {/* Visa Application Assistance Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-themeClr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Visa Application Assistance</h3>
            <p className="text-gray-600 leading-relaxed">
              We assist filing your application process, including filling out applications, gathering 
              required documents, and conducting mock interviews for a successful visa journey.
            </p>
          </div>

          {/* Pre-Departure Orientation Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"  data-aos="fade-up" data-aos-delay="500">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-themeClr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pre-Departure Orientation</h3>
            <p className="text-gray-600 leading-relaxed">
              Prior to landing in your chosen country, we provide essential guidance on 
              accommodation, culture, lifestyle, banking, and local regulations.
            </p>
          </div>

          {/* Travel Assistance Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"  data-aos="fade-up" data-aos-delay="600">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-themeClr" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Travel Assistance</h3>
            <p className="text-gray-600 leading-relaxed">
              We book flights in advance, ensuring ideal departure dates, the best routes, and 
              affordable fares so you can travel smoothly without last-minute concerns.
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default OurServices;