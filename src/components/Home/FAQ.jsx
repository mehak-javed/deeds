import { useState } from 'react';
import demoImage from '../../assets/images/faqimg.jpg'; // Make sure to have an image in your project or use a placeholder URL

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Which country is best for me to study?",
      answer: "It depends on your course, budget, and career goals—we help match you with the best-fit country!."
    },
    {
      question: "What are the admission requirements for UK/Canada/Australia?",
      answer: "Each country has its own specific requirements, but generally, you'll need to provide proof of your academic qualifications, English language proficiency, and sometimes a personal statement or portfolio."
    },
    {
      question: "Do I need IELTS?",
      answer: "Yes, most universities require IELTS or an equivalent test—but some offer waivers based on your background."
    },
    {
      question: "How long does the visa process take?",
      answer: "The visa process can take anywhere from a few weeks to a few months, depending on the country and individual circumstances."
    },
    {
      question: "Can I work while studying abroad?",
      answer: "Yes, many countries allow students to work part-time while studying. However, there are specific regulations and restrictions depending on the country."
    },
    {
      question: "What scholarships are available?",
      answer: "We provide comprehensive support including university selection, application assistance, visa guidance, accommodation help, and pre-departure briefings."
    }
  ];

  return (
    <div className=" mx-auto w-full py-12  px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-themeClr2">
          Frequently Asked Question <span className="text-themeClr">(FAQs)</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image and Events Section - Right Side */}
        <div className="w-full md:w-1/2">
          <div className="w-full  rounded-lg overflow-hidden">
            <img 
              src={demoImage} 
              alt="Education Consultation"
              className="w-full h-[400px] object-cover rounded-3xl"
            />
           
            </div>
        </div>
        {/* FAQ Accordion Section - Left Side */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-themeClr"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center">
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`px-6 pb-4 pt-0 transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FAQ;