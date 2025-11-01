import React from 'react'
import ConsultationForm from './ConsultationForm';

const SectionContainerDropDowns = ({ title, subtitle, children }) => {
    return (
       <div>
      <div className="container mx-auto md:px-4 md:py-5 p-0 w-[90%] ">
        {/* Main title of the section */}
        {title && (
          <h1 className="text-2xl md:text-2xl font-extrabold text-gray-900 mb-4 rounded-lg">
            {title}
          </h1>
        )}
  
        {/* Optional subtitle or introductory paragraph */}
        {subtitle && (
          <p className="text-lg md:text-[18px] text-gray-700 leading-relaxed mb-2">
            {subtitle}
          </p>
        )}
  
        {/* Renders any children passed into the component.
            This allows for flexible content like paragraphs, lists, images, etc. */}
        <div className="prose prose-lg max-w-none text-gray-800">
          {children}
        </div>

      </div>
      
      </div>
    );
  };
  
export default SectionContainerDropDowns