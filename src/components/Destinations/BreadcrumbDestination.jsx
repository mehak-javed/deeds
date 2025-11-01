import React from 'react';
import bg from '../../assets/courses/bgcourse.jpg';
import { Link } from 'react-router';
export default function BreadcrumbPathway() {
  const breadcrumbItems = [
    { name: 'Home', link: '/' },
    { name: 'Destinations', link: '/destination' },
  ];

  return (
    <section
      className="bg-gradient-to-r from-slate-900 to-slate-700 text-white relative bg-cover bg-center h-96 flex items-center justify-center text-white"
     
    >
      {/* Overlay for darkening the image and ensuring text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 flex justify-center items-center text-sm font-medium">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <a
                href={item.link}
                className={`flex items-center text-gray-300 hover:text-white transition-colors duration-200 ${
                  index === breadcrumbItems.length - 1 ? 'font-bold' : ''
                }`}
              >
                {index === 0 && (
                  // Home icon (you might need Font Awesome or a custom SVG)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                )}
                {item.name}
              </a>
              {index < breadcrumbItems.length - 1 && (
                <span className="mx-2 text-gray-400">
                  {/* Arrow icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
        Immigration and <span className="text-themeClr">Citizenship</span>
        </h1>

        {/* Call to Action Button */}
        <Link to='/form'>
        <button className="bg-themeClr hover:themeClr text-white font-semibold py-3 px-8 rounded-full  transition duration-300 focus:outline-none focus:themeClr focus:themeClr focus:themeClr">
          Book a free consultation
        </button>
        </Link>
      </div>
    </section>
  );
}