import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bars2Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

const CarRentDropdown: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const CarRentSubItems = [
    { 
      path: '/car-rent', 
      name: 'Car Rent', 
    },
    { 
      path: '/feature', 
      name: 'Feature', 
    },
    { 
      path: '/car-vehicletype', 
      name: 'Vehicle Type', 
    }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path: string) => {
    if (typeof onClose === 'function') {
        onClose();
    }

    // You can add additional logic here if needed
  };

  return (
    <div>
      {/* Dropdown Trigger */}
      <div 
        onClick={toggleDropdown}
        className={`
          flex items-center cursor-pointer mx-[1px] my-[8px] p-[8px] rounded-[8px] transition-colors duration-200
          ${isOpen ? 'bg-[#96842c] text-[#fff]' : 'text-[#96842c]'}
        `}
      >
        <TruckIcon className="w-[24px] text-[18px] h-[24px] mr-[0.5rem]" />
        <span className="text-[16px] font-[500] flex-grow">CarRent</span>
        {isOpen ? (
          <ChevronUpIcon className="w-[20px] h-[20px]" />
        ) : (
          <ChevronDownIcon className="w-[20px] h-[20px]" />
        )}
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className=" space-y-2">
          {CarRentSubItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  handleItemClick(item.path);
                  setIsOpen(false);
                }}
                className={`
                  block cursor-pointer mx-[1px] my-[6px] p-[8px] flex rounded-[8px] transition-colors duration-200
                  ${isActive 
                    ? 'bg-[#96842c] text-[#fff] no-underline' 
                    : 'text-[#96842c] no-underline'}
                `}
              >
                <Bars2Icon className="w-[18px] text-[16px] h-[18px] mt-[3px] mr-[0.5rem]"/>
                <span className="text-[16px] font-[500]">{item.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CarRentDropdown;
