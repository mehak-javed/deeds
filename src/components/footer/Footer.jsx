import React from 'react';
import logo from '../../assets/images/deedlogo.png'

export default function Footer() {
  const offices = {
    manchester: {
      address: '8A Maine Road, Manchester, M14 4DW, United Kingdom',
      phone: '+44 7440 642529',
      email: 'manchester@deedsconsultancy.com'
    },
    sharjah: {
      address: '1307 Mina Tower, near Main Jubail Bus Station, Sharjah, UAE',
      phone: '+971 50 818 7649',
      email: 'makshoofnouman@deedsglobalconsultancy.com'
    },
    abuDhabi: {
      address: 'Villa No. 91, Al Amair Street, Al Smaha East, Abu Dhabi, UAE',
      phone: '+971 50 818 7649',
      email: 'makshoofnouman@deedsglobalconsultancy.com'
    },
    lahore: {
      address: 'C7XW+4HV, Lajna Chowk, College Road, Township Block 2, Twp Sector C1, Ahmed Avenue, Lahore, 54770, Pakistan',
      phone: '+92 335 4554666',
      email: 'lahore@deedsconsultancy.com'
    },
    faisalabad: {
      address: 'Office #29–30, Center Point Plaza, Kohinoor City, Faisalabad, Pakistan',
      phone: '+92 313 3337334',
      email: 'info@deedsconsultancy.com'
    }
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Deeds Logo" className='h-60 w-60 object-contain' />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner for global education consultancy services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="text-gray-400 hover:text-themeClr2 transition-colors">Services</a></li>
              <li><a href="/destination" className="text-gray-400 hover:text-themeClr2 transition-colors">Destinations</a></li>
              <li><a href="/pathway" className="text-gray-400 hover:text-themeClr2 transition-colors">Pathway</a></li>
              <li><a href="/form" className="text-gray-400 hover:text-themeClr2 transition-colors">Contact Us</a></li>
              <li><a href="/privacypolicy" className="text-gray-400 hover:text-themeClr2 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="font-semibold text-themeClr mb-1">Emails:</p>
                <a href="mailto:info@deedsconsultancy.com" className="block transition-colors">
                  info@deedsconsultancy.com
                </a>
                <a href="mailto:manchester@deedsconsultancy.com" className="block transition-colors">
                  manchester@deedsconsultancy.com
                </a>
                <a href="mailto:lahore@deedsconsultancy.com" className="block transition-colors">
                  lahore@deedsconsultancy.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-themeClr mb-1">Phone:</p>
                <p><span className="font-medium">UK:</span> <a href="tel:+447440642529" >{offices.manchester.phone}</a></p>
                <p><span className="font-medium">UAE:</span> <a href="tel:+971508187649" >{offices.sharjah.phone}</a></p>
                <p><span className="font-medium">PK Lahore:</span> <a href="tel:+923354554666">{offices.lahore.phone}</a></p>
                <p><span className="font-medium">PK Faisalabad:</span> <a href="tel:+923133337334">{offices.faisalabad.phone}</a></p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Offices</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="font-semibold text-themeClr">Manchester, UK</p>
                <p className="text-xs leading-relaxed">{offices.manchester.address}</p>
              </div>
              <div>
                <p className="font-semibold text-themeClr">Sharjah, UAE</p>
                <p className="text-xs leading-relaxed">{offices.sharjah.address}</p>
              </div>
              <div>
                <p className="font-semibold text-themeClr">Abu Dhabi, UAE</p>
                <p className="text-xs leading-relaxed">{offices.abuDhabi.address}</p>
              </div>
              <div>
                <p className="font-semibold text-themeClr">Lahore, Pakistan</p>
                <p className="text-xs leading-relaxed">{offices.lahore.address}</p>
              </div>
              <div>
                <p className="font-semibold text-themeClr">Faisalabad, Pakistan</p>
                <p className="text-xs leading-relaxed">{offices.faisalabad.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400">&copy; 2025 Deeds Consultancy. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/location" className="text-gray-400 hover:text-themeClr2 transition-colors">Find Us</a>
              <span className="text-gray-600">|</span>
              <a href="/form" className="text-gray-400 hover:text-themeClr2 transition-colors">Book Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}