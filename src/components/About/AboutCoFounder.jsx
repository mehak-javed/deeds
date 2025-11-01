import React from 'react';
import cofounder from '../../assets/team/faisalrasheedcofounder.png';

export default function AboutCoFounder() {

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8" data-aos="fade-right">
            <h2 className="text-themeClr text-lg font-semibold mb-4">About Co-Founder</h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-themeClr2 mb-8 leading-tight">
              Message from our Co-Founder
            </h1>
            <div>
              <h3 className="text-2xl font-bold text-themeClr2 mb-4">Faisal Rasheed</h3>
              <h4 className="text-lg text-gray-600 mb-6">Co-Founder, Deeds Consultancy</h4>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                My journey in international education consulting began with a simple realization:
                At Deeds Consultancy, we have built a culture where every student 
                 is treated as an individual with unique dreams and circumstances, not just another application number.
              </p>
              <br />

              
              <br />

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                What sets us apart is our genuine commitment to your long-term success. 
                We don't just help you get admitted—we ensure you're prepared for the academic, cultural,
                 and personal challenges ahead. From pre-departure briefings to ongoing support while you're abroad, 
                 we remain your trusted partner throughout your educational journey.
              </p>
              <br />

              <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
               <b>"To all aspiring global scholars: take that leap of faith. 
                The world has so much to offer"</b>.
                Let Deeds Consultancy be the bridge that connects your aspirations with achievements. Your success story starts here.
              </p>

            </div>

          </div>

          {/* Right Side - Co-Founder Image */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={cofounder}
                  alt="Faisal Rasheed - Co-Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}