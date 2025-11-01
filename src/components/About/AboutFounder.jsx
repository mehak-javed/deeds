import React from 'react';
import founder from '../../assets/team/imranrasheedfounder.png';

export default function AboutFounder() {

    return (
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8" data-aos="fade-right">
                        <h2 className="text-themeClr text-lg font-semibold mb-4">About Founder</h2>
                        <h1 className="text-4xl lg:text-5xl font-bold text-themeClr2 mb-8 leading-tight">
                            Message from our Founder
                        </h1>
                        <div>
                            <h3 className="text-2xl font-bold text-themeClr2 mb-4">Imran Rasheed</h3>
                            <h4 className="text-lg text-gray-600 mb-6">Founder, Deeds Consultancy</h4>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                Welcome to Deeds Consultancy. As the founder of this organization,
                                I am deeply honored to be part of your journey toward achieving your educational dreams abroad.
                            </p>
                            <br />

                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                Our approach is built on three core principles: integrity, personalized attention, and unwavering support. We believe that every student deserves a chance to explore their full potential, regardless of their background. That's why we work tirelessly to understand your unique aspirations, academic goals, and financial circumstances to find the best-fit opportunities for you.
                            </p>
                            <br />



                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                "<b>To every student who walks through our doors or reaches out to us: your dreams matter, your ambitions are valid, and your success is our mission. Together, let's make your study abroad journey a remarkable chapter in your life story."</b>
                            </p>

                        </div>

                    </div>

                    {/* Right Side - Founder Image */}
                    <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={founder}
                                    alt="Imran Rasheed - Founder"
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