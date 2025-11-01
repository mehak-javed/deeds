import React from 'react'

import { Link } from "react-router-dom"; 
import { useNavigate } from 'react-router-dom';

const DropDown = ({link, btnIcon, btnText, heading, icon, title, description, onMouseEnter, onMouseLeave }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(link);
    }
    return (
      <div 
        className='pl-10 w-full h-auto text-white'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className='flex gap-4 items-center'>
        {heading &&(
          <h5 className='font-sans text-[17px] font-bold'>{heading}</h5>
          )}
          {btnText && btnIcon && (
          <button className='flex text-[13px] items-center bg-gradient-to-r from-themeClr2 via-[#6e92bb] rounded p-2 to-themeClr'>
            {btnText}<span className='pl-1'>{btnIcon}</span>
          </button>
          )}
        </div>
       
          <div className=' flex p-5 cursor-pointer' >
            <Link to= {link}>
            
            <div>
            <span className='items-center'>{icon}</span></div>
            <div className='items-center px-4 pt-0'>
              <p className='font-bold text-[13px]'>{title}</p>
              <p className='font-extralight text-[13px]'>{description}</p>
            </div>
            </Link>
          </div>
        
        </div>
      
    );
  };

export default DropDown;