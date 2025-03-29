import React from 'react'
import  { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../assets/driver/driver13.png'
import { DeviceTabletIcon, PowerIcon } from '@heroicons/react/24/solid'
import Navbar from './Navbar'

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);
const profileImageRef = useRef<HTMLImageElement>(null);


const handleNavbarToggle = (openState: boolean) => {

    setIsNavbarOpen(openState);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {



      // Check if the click is outside both the dropdown and the profile image
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        profileImageRef.current && 
        !profileImageRef.current.contains(event.target as Node)
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
      <div className='flex justify-between md:justify-end py-[12px] px-[24px] bg-[#96842c] rounded-[8px]'>
      <div className='md:hidden bg-[#96842c]'>
        <div>
           <Navbar onNavbarToggle={handleNavbarToggle} />

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
         className="absolute z-10 w-full md:w-fit md:right-0 bg-[#fff] rounded-[8px] shadow mt-[50px] overflow-hidden">
          <Link
            to="/settings" 
            className="block py-1 px-[16px] md:px-5 md:py-2 no-underline text-[#1f1f1f] hover:bg-[#96842c] transition duration-200"
          >
            <div className='flex flex-row'>
           
            <p className='no-underline text-[18px] md:px-4 px-[4px] text-[#808080]'>
            
              Settings
            </p>
            </div>
          </Link>
          <Link
            to="/" 
            className="block px-[16px] no-underline md:px-5 md:py-2 text-[#1f1f1f] hover:bg-[#96842c] transition duration-200"
          >
            <div className='flex py-1 align-center'>
           
            <p className='no-underline text-[18px] md:px-4 px-[4px] text-[#808080]'>
            
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
