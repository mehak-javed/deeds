import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import logo from '../../assets/images/deedlogo.png';
import { FaChromecast } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);
  
    const handleMouseEnter = (menuItem) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setActiveDropdown(menuItem);
    };
  
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 700);
    };
  
    const toggleDropdown = (menuItem) => {
      setActiveDropdown(activeDropdown === menuItem ? null : menuItem);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setActiveDropdown(null);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

   
    return (
      <div className='sticky top-0 z-50 w-100% bg-white hidden md:block lg:block'>
        <div >
       
          <div className='px-10 flex items-center font-sans text-themeClr2 justify-between shadow font-semibold '>
            <Link to='/'>
            <img width={120} height={120} src={logo} alt="Logo" />
            </Link>
            <div>
              <ul className='gap-5 items-center text-[14px] flex'>
                {/* Pathway */}
                <li>
                <div className='flex items-center cursor-pointer'>
                    <Link
                    to='/pathway'
                    className='text-[16px] flex items-center group'>
                   Pathway
                    </Link>
                </div>
                </li>
                <li>
                <div className='flex items-center cursor-pointer'>
                    <Link
                    to='/destination'
                    className=' text-[16px] flex items-center group'>
                   Destinations
                    </Link>
                </div>
                </li>
                <li
                onMouseEnter={() => handleMouseEnter('courses')}
                onMouseLeave={handleMouseLeave}
                className='relative group'
                >
                <div className='text-[16px] flex items-center cursor-pointer'>
                    <Link
                    to='/uk'
                    className='flex items-center group'>
                   Countries Details
                    </Link>
                    <IoIosArrowDown className='ml-1 text-sm' />
                </div>

                {/* Submenu */}
                {activeDropdown === 'courses' && (
                    <ul
                    ref={dropdownRef} 
                    className=' text-[16px] absolute top-full left-0 mt-2 w-48 bg-themeClr2 border rounded shadow z-10'>
                    <li>
                        <Link to="/uk" 
                        className='text-themeClr block px-4 py-2 hover:text-gray-100'>
                        United Kingdom
                        </Link>
                    </li>
                    <li>
                        <Link to="/australia" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        Australia
                        </Link>
                    </li>
                    <li>
                        <Link to="/canada" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        Canada
                        </Link>
                    </li>
                    <li>
                        <Link to="/usa" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        USA
                        </Link>
                    </li>
                    <li>
                        <Link to="/germany" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        Germany
                        </Link>
                    </li>
                    <li>
                        <Link to="/france" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        France
                        </Link>
                    </li>
                     <li>
                        <Link to="/poland" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        Poland
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/ireland" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        Ireland
                        </Link>
                    </li>
                    <li>
                        <Link to="/uae" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        UAE
                        </Link>
                    </li>
                     <li>
                        <Link to="/turkey" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        Turkey
                        </Link>
                    </li> <li>
                        <Link to="/malaysia" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        Malaysia
                        </Link>
                    </li>
                     <li>
                        <Link to="/italy" 
                        className=' text-[16px] text-themeClr block px-4 py-2 hover:text-gray-100'>
                        Italy
                        </Link>
                    </li>
                    </ul>
                )}
                </li>
                
                
                <li>
                {/* Global Offices */}
                <Link to='/location'
                  className='flex items-center group text-[16px]' 
                  ref={dropdownRef}
                  onMouseEnter={() => handleMouseEnter('offices')}
                  onMouseLeave={handleMouseLeave}
                >
                 Locations
                  </Link>
                  </li>
                 <li>
                {/* Global Offices */}
                <Link to='/services'
                  className='flex items-center group text-[16px]' 
                  ref={dropdownRef}
                  onMouseEnter={() => handleMouseEnter('offices')}
                  onMouseLeave={handleMouseLeave}
                >
                 Services
                  </Link>
                  </li>
              </ul>
            </div>
            <Link to='/form'>
            <div className='text-[20px] font-sans font-[600] bg-themeClr text-white px-5 py-2 rounded'>
              Free Consultation
            </div>
            </Link>
          </div>
        </div>
        </div>
    );
  };
  
  export default Navbar;

