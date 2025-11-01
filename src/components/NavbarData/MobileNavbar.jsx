import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosClose, IoIosMenu } from 'react-icons/io';
import logo from '../../assets/images/deedlogo.png';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const menuItems = [
    { 
      title: 'Destinations', 
      route: '/destination', 
      key: 'destination',
      hasSubmenu: false
    },
    { 
      title: 'Countries Details', 
      route: '/uk', 
      key: 'countries',
      hasSubmenu: true,
      submenu: [
        { title: 'United Kingdom', route: '/uk' },
        { title: 'United States', route: '/usa' },
        { title: 'Germany', route: '/germany' },
        { title: 'Canada', route: '/canada' },
        { title: 'Australia', route: '/australia' },
        { title: 'Ireland', route: '/ireland' },
        { title: 'France', route: '/france' },
        { title: 'UAE', route: '/uae' },
        { title: 'Poland', route: '/poland' },
        { title: 'Turkey', route: '/turkey' },
        { title: 'Malaysia', route: '/malaysia' },
        { title: 'Italy', route: '/italy' },
      ]
    },
    { 
      title: 'Pathway', 
      route: '/pathway', 
      key: 'pathway',
      hasSubmenu: false
    },
    { 
      title: 'Locations', 
      route: '/location', 
      key: 'offices',
      hasSubmenu: false
    },
    { 
      title: 'Services', 
      route: '/services', 
      key: 'services',
      hasSubmenu: false
    },
  ];

  return (
    <div className="md:hidden lg:hidden bg-white shadow sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        <button onClick={toggleMenu} className="text-2xl text-themeClr">
          {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="px-4 pb-4 max-h-[calc(100vh-70px)] overflow-y-auto">
          {/* Links */}
          {menuItems.map(({ title, route, key, hasSubmenu, submenu }) => (
            <div key={key} className="mb-2">
              <div className="flex items-center justify-between w-full">
                <Link 
                  to={route} 
                  onClick={() => !hasSubmenu && setIsMenuOpen(false)}
                  className="flex-1 py-2 font-semibold text-themeClr2"
                >
                  {title}
                </Link>
                
                {hasSubmenu && (
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="p-2 text-themeClr2"
                  >
                    <IoIosArrowDown 
                      className={`transition-transform duration-300 ${
                        expanded === key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Submenu */}
              {hasSubmenu && expanded === key && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-themeClr pl-4">
                  {submenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.route}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-gray-600 hover:text-themeClr transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block mt-4 text-center bg-themeClr text-white py-2 rounded"
          >
            Free Consultation
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;