import React from 'react';
import StudentReview from '../Home/StudentReview';
import BreadcrumbLocation from './BreadcrumbLocation';

function Location() {
  const offices = [
    {
      name: 'Manchester Office',
      company: 'Deeds Global Consultancy Limited',
      owner: 'Faisal Rasheed',
      phone: '+44 7440 642529',
      email: 'manchester@deedsconsultancy.com',
      address: '8A Maine Road, Manchester, M14 4DW, United Kingdom',
    },
    {
      name: 'UAE Office - Sharjah',
      company: 'Deeds Consultancy Pvt Ltd',
      owner: 'Muhammad Nouman Makshoof',
      phone: '+971 50 818 7649',
      email: 'makshoofnouman@deedsglobalconsultancy.com',
      address: '1307 Mina Tower, near Main Jubail Bus Station, Sharjah, UAE',
    },
    {
      name: 'UAE Office - Abu Dhabi',
      company: 'Deeds Consultancy Pvt Ltd',
      owner: 'Muhammad Nouman Makshoof',
      phone: '+971 50 818 7649',
      email: 'makshoofnouman@deedsglobalconsultancy.com',
      address: 'Villa No. 91, Al Amair Street, Al Smaha East, Abu Dhabi, UAE',
    },
    {
      name: 'Lahore Office',
      company: 'Deeds Consultancy Pvt Ltd',
      owner: 'Imran Rasheed',
      phone: '+92 335 4554666',
      email: 'lahore@deedsconsultancy.com',
      address: 'C7XW+4HV, Lajna Chowk, College Road, Township Block 2, Twp Sector C1, Ahmed Avenue, Lahore, 54770, Pakistan',
    },
    {
      name: 'Faisalabad Branch',
      company: 'Deeds Consultancy Pvt Ltd',
      owner: 'Ms. Maheen Mughal, CEO',
      phone: '+92 313 3337334',
      email: 'info@deedsconsultancy.com',
      address: 'Office #29–30, Center Point Plaza, Kohinoor City, Faisalabad, Pakistan',
    },
  ];

  const openingHours = [
    { day: 'Monday', hours: '10:00 AM - 06:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM - 06:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM - 06:00 PM' },
    { day: 'Thursday', hours: '10:00 AM - 06:00 PM' },
    { day: 'Friday', hours: '10:00 AM - 06:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 06:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-lg overflow-hidden">
          <BreadcrumbLocation />

          {/* Offices Grid */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-themeClr2 mb-1">
                        {office.name}
                      </h3>
                      <p className="text-sm text-gray-500 italic">{office.company}</p>
                    </div>
                    <div className="bg-themeClr2 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {office.name.includes('UAE') ? 'UAE' : office.name.includes('Manchester') ? 'UK' : 'Pakistan'}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-themeClr font-bold mr-2 mt-1">👤</span>
                      <div>
                        <p className="text-sm text-gray-500">Owner</p>
                        <p className="font-semibold text-gray-800">{office.owner}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span className="text-themeClr font-bold mr-2 mt-1">📞</span>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a href={`tel:${office.phone}`} className="font-semibold text-themeClr2 hover:underline">
                          {office.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span className="text-themeClr font-bold mr-2 mt-1">📧</span>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a href={`mailto:${office.email}`} className="font-semibold text-themeClr2 hover:underline break-all">
                          {office.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span className="text-themeClr font-bold mr-2 mt-1">🏢</span>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="text-gray-700 leading-relaxed">{office.address}</p>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                
              ))}

              {/* Opening Hours Card */}
              <div
                className="bg-gradient-to-br from-white to-gray-50 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={offices.length * 100}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-themeClr2 mb-1">
                      Opening Hours
                    </h3>
                    <p className="text-sm text-themeClr2 text-opacity-80 italic">All Offices</p>
                  </div>
                 
                </div>

                <div className="space-y-3 mt-6">
                  {openingHours.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between text-sm text-themeClr2 items-center bg-white bg-opacity-10 px-1 py-2 rounded-lg backdrop-blur-sm"
                    >
                      <span className="font-semibold text-sm ">{item.day}</span>
                      <span className={item.hours === 'Closed' ? 'text-themeClr font-semibold' : 'text-themeClr2'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StudentReview />
    </>
  );
}

export default Location;