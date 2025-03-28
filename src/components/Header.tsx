import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../assets/driver/driver24.svg'
import { DeviceTabletIcon, PowerIcon } from '@heroicons/react/24/solid'
import Navbar from './Navbar'

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileImageRef = useRef(null);

  const handleNavbarToggle = (openState) => {
    setIsNavbarOpen(openState);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both the dropdown and the profile image
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        profileImageRef.current && 
        !profileImageRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);


  return (
    <div className='w-full relative'>
      <div className='flex justify-between py-[12px] px-[24px] bg-[#96842c] rounded-[8px]'>
      <div className='md:hidden bg-[#96842c]'>
        <div>
           <Navbar />
        </div>
      </div>
        <img
          ref={profileImageRef} 
          src={Profile}
           onClick={toggleDropdown}
            className=' w-[40px] h-[40px] rounded-[50%] cursor-pointer'/>
         
         {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
         ref={dropdownRef}
         className="absolute z-10 w-full left-[0px] bg-[#fff] rounded-[8px] shadow-[8px] mt-[50px] overflow-hidden">
          <Link
            to="/settings" 
            className="block px-[16px] no-underline text-[#1f1f1f] hover:bg-[#719ef2] transition duration-200"
          >
            <div className='flex align-center'>
           
            <p className='no-underline text-[18px] px-[4px] text-[#808080]'>
            <DeviceTabletIcon className='w-[20px] h-[20px] px-[4px]'/>
              Settings
            </p>
            </div>
          </Link>
          <Link
            to="/" 
            className="block px-[16px] no-underline text-[#1f1f1f] hover:bg-[#719ef2] transition duration-200"
          >
            <div className='flex align-center'>
           
            <p className='no-underline text-[18px] px-[4px] text-[#808080]'>
            <PowerIcon className='w-[20px] h-[20px] px-[4px]'/>
              Logout
            </p>
            </div>
          </Link>
    
        </div>
      )}

      </div>

      
    </div>
  )
}

export default Header