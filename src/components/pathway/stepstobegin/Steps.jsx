import React from 'react';
import { 
  MousePointerClick, 
  FileText, 
  Mail, 
  CheckCircle, 
  CreditCard, 
  Award, 
  Plane, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { Link } from 'react-router';

const Steps = () => {
 

  const steps = [
    {
      number: 1,
      title: 'Select Your Program',
      icon: MousePointerClick,
      description: 'Choose your desired course and university'
    },
    {
      number: 2,
      title: 'Submit Application',
      icon: FileText,
      description: 'Complete and submit your application form'
    },
    {
      number: 3,
      title: 'Receive Offer Letter',
      icon: Mail,
      description: 'Get your conditional offer letter from university'
    },
    {
      number: 4,
      title: 'Fulfill Conditions',
      icon: CheckCircle,
      description: 'Meet all the admission requirements'
    },
    {
      number: 5,
      title: 'Pay Tuition Deposit',
      icon: CreditCard,
      description: 'Secure your place with deposit payment'
    },
    {
      number: 6,
      title: 'Get Unconditional Offer',
      icon: Award,
      description: 'Receive your final admission confirmation'
    },
    {
      number: 7,
      title: 'Apply For Visa',
      icon: Plane,
      description: 'Submit your student visa application'
    },
    {
      number: 8,
      title: 'Book Flight & Accommodation',
      icon: MapPin,
      description: 'Arrange your travel and housing'
    },
    {
      number: 9,
      title: 'Start Your Program',
      icon: GraduationCap,
      description: 'Begin your academic journey'
    }
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Your Journey to Study Abroad
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to achieve your dream of studying overseas
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Step Number Badge */}
                <div 
                  className="absolute -top-4 left-6 w-8 h-8 bg-themeClr rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-end mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center bg-themeClr2 justify-center"
                    
                  >
                    <IconComponent 
                      size={24} 
                      className='bg-themeClr2 text-white'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div 
                  className="absolute bottom-0 left-0 bg-themeClr2 h-1 w-full rounded-b-xl"
                  
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Steps;