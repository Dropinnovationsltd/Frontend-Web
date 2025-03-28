import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bars2Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

const VehicleDropdown: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const vehicleSubItems = [
    { 
      path: '/make', 
      name: 'Make', 
    },
    { 
      path: '/model', 
      name: 'Model', 
    },
    { 
      path: '/vehicle-type', 
      name: 'Vehicle Type', 
    },
    { 
      path: '/color', 
      name: 'Color', 
    }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path: string) => {
    onClose && onClose();
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
        <TruckIcon className="w-[24px] text-[18px] h-[24px] mr-[1.5rem]" />
        <span className="text-[16px] font-[500] flex-grow">Vehicle</span>
        {isOpen ? (
          <ChevronUpIcon className="w-[20px] h-[20px]" />
        ) : (
          <ChevronDownIcon className="w-[20px] h-[20px]" />
        )}
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className=" space-y-2">
          {vehicleSubItems.map((item) => {
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
                  block cursor-pointer mx-[1px] my-[6px] p-[8px] rounded-[8px] transition-colors duration-200
                  ${isActive 
                    ? 'bg-[#96842c] text-[#fff] no-underline' 
                    : 'text-[#96842c] no-underline'}
                `}
              >
                <Bars2Icon className="w-[24px] text-[18px] h-[24px] mr-[1.5rem]"/>
                <span className="text-[16px] font-[500]">{item.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VehicleDropdown;