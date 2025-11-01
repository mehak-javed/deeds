import React from 'react';
import TeamSection from '../Team/Team';

export default function AboutUsSection() {
  return (
    <div className="h-aauto bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative" data-aos="fade-right">
            {/* Background conference image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg" >
              <img
                src="https://images.pexels.com/photos/7234416/pexels-photo-7234416.jpeg?_gl=1*1oe8ki5*_ga*NzYwNDkzNTI5LjE3NTUyMDU1NzY.*_ga_8JE65Q40S6*czE3NTkyNDE5NzgkbzEkZzEkdDE3NTkyNDIyOTckajU5JGwwJGgw"
                alt="Students in conference"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            
            {/* Overlapping counselor image */}
            <div className="absolute bottom-0 right-0 lg:right-[-60px] w-64 h-80 lg:w-80 lg:h-96 overflow-hidden rounded-lg shadow-2xl border-4 border-white">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-400 to-transparent rounded-t-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                alt="Education counselor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-8">
            <h2 className="text-themeClr text-lg font-semibold mb-4">About us</h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-themeClr2 mb-8 leading-tight">
              Welcome to your Gateway to Study Abroad
            </h1>
            
            <div className="text-gray-700 space-y-6 text-lg leading-relaxed"  data-aos="fade-left">
              <p>
                Our platform is designed to empower aspiring international students by providing comprehensive support throughout their study abroad journey. We understand that pursuing education overseas is a life-changing decision, and our goal is to make this process seamless, transparent, and successful for every student we serve.
              </p>
              
              <p>
                At our consultancy, we believe in 100% personalized counseling tailored to each student's unique academic background, career aspirations, and personal preferences. Our experienced counselors work closely with you to identify the perfect educational pathway that aligns with your goals and dreams.
              </p>
              
              <p>
                As official partners with top-ranked universities across the globe, we provide you with exclusive access to premier institutions and insider knowledge about admission requirements, scholarship opportunities, and campus life. Our established relationships ensure that you receive accurate, up-to-date information and guidance throughout your application process.
              </p>
              
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}