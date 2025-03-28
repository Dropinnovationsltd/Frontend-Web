import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import VehicleDropdown from './vehicleDropdown';
import CarRentDropdown from './CarRentDropDown';


import {
  HomeIcon,
  UsersIcon,
  TruckIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
  BookmarkIcon,
  CreditCardIcon,
  DocumentIcon,
  XMarkIcon,
  Bars3Icon,
  Bars2Icon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';



const Navbar = ({ onNavbarToggle }) => {

  interface NavDropdownProps {
    onClose?: () => void;
  }

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      path: '/dashboard', 
      name: 'Dashboard', 
      icon: HomeIcon 
    },
    { 
      path: '/users', 
      name: 'Users', 
      icon: UsersIcon 
    },
    { 
      path: '/drivers', 
      name: 'Drivers', 
      icon: TruckIcon 
    },
    { 
      component : VehicleDropdown
    },
    { 
      component : CarRentDropdown
    },
    { 
      path: '/booking', 
      name: 'Booking', 
      icon: ClipboardDocumentListIcon 
    },
    { 
      path: '/withdrawal-request', 
      name: 'Withdrawal Request', 
      icon: CreditCardIcon 
    },
    { 
      path: '/cms', 
      name: 'CMS', 
      icon: DocumentIcon 
    }
  ];

  const toggleNavbar = useCallback(() => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    // Optional: Callback to parent component if needed
    onNavbarToggle && onNavbarToggle(newOpenState);
  }, [isOpen, onNavbarToggle]);


  



  return (
    <>
      {/* Mobile Menu Button */}
      <span
        onClick={toggleNavbar} 
        className=" z-50 md:hidden bg-[#96842c]"
      >
        {isOpen ? <XMarkIcon className="w-[40px] h-[40px] hidden border-none bg-[fff]" /> : <Bars3Icon className=" text-[#808080] w-[40px] h-[40px] bg-[#96842c] border-none shadow-none" />}
      </span>

      {/* Navbar */}
      <nav 
        className={`
          fixed top-[0px] left-[0px] h-full bg-white shadow-lg 
          transform transition-all duration-300 ease-in-out
          w-[65vw] max-w-[300px] z-40
          ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          md:translate-x-0 md:opacity-100
        `}
        aria-hidden={!isOpen}
      >
        <div className="p-[24px] bg-[#fff] h-screen">
          <div className='flex justify-between items-center'>
             <h2 className="text-[28px] font-[1000] mb-[20px] px-[25px] text-[#96842c] text-center">Drop</h2>
             <XMarkIcon className='w-[30px] h-[30px] border-none bg-none text-[#96842c] p-[6px]' 
                         onClick={toggleNavbar}/>
          </div>
          
          <div className="space-y-2">
            {navItems.map((item) => {
              if (item.component) {
                const Component = item.component;
                return <Component key="vehicle-dropdown" onClose={toggleNavbar} />;
              }

              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleNavbar}
                  className={`
                    flex items-center cursor-pointer mx-[1px] my-[8px] p-[8px] rounded-[8px] transition-colors duration-200
                    ${isActive 
                      ? 'bg-[#96842c] text-[#fff] no-underline' 
                      : ' text-[#96842c] no-underline'}
                  `}
                >
                  <Icon className="w-[24px] text-[18px] h-[24px] mr-[1.5rem]" />
                  <span className="text-[16px] font-[500]">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div 
          onClick={toggleNavbar} 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;



