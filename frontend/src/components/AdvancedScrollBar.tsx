import React, { FC } from 'react';


interface VerticalScrollContainerProps {
  children: React.ReactNode;
  maxHeight?: string;
  className?: string;
}
const VerticalScrollContainer: FC<VerticalScrollContainerProps> = ({ children, maxHeight = 'max-h-96', className = '' }) => {
    return (
      <div 
        className={`
          ${maxHeight} 
           
          scrollbar-thin 
          scrollbar-track-gray-100 
          scrollbar-thumb-gray-300 
          hover:scrollbar-thumb-gray-400 
          rounded-[8px] 
          
          border-[#d4d2d2] 
          ${className}
        `}
      >
        {children}
      </div>
    );
  };
  
  export default VerticalScrollContainer;