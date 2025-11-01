import React from 'react';
import ceo from '../../assets/team/maheenmughalceo.png';
export default function AboutCEO() {

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8" data-aos="fade-right">
            <h2 className="text-themeClr text-lg font-semibold mb-4">About CEO</h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-themeClr2 mb-8 leading-tight">
              Message from our CEO
            </h1>
             <h3 className="text-2xl font-bold text-themeClr2 mb-4">Maheen Mughal</h3>
                <h4 className="text-lg text-gray-600 mb-6">CEO, Deeds Consultancy</h4>
            <div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                It gives me great pleasure to welcome you to Deeds Consultancy, where our mission is to turn your dreams of studying abroad into a reality.
              </p>
              <br />
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                As someone who has closely witnessed the transformative power of global education, I founded this consultancy with a simple yet powerful vision: to guide, support, and empower students at every step of their journey toward international education. Whether you're aiming for top universities, looking for career-oriented programs, or exploring scholarship opportunities, our dedicated team is here to ensure that your path is clear and your choices are informed.
              </p>
              <br />

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Studying abroad is not just about academics—it’s about personal growth, cross-cultural understanding, and opening yourself to a world of opportunities. We understand the challenges students and families face when navigating this process, and that’s why we’re committed to offering honest advice, personalized counseling, and full support—from your first inquiry to your arrival in a new country.
              </p>
              <br />

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <b>"To all the aspiring students reading this: believe in your potential. The world is waiting for your talent, your curiosity, and your ambition. At Deeds Consultancy, we’re here to help you get there—confidently and successfully."</b>
              </p>

            </div>

          </div>

          {/* Right Side - CEO Image */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={ceo}
                  alt="CEO"
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