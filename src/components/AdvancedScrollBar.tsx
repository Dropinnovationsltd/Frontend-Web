const VerticalScrollContainer = ({ children, maxHeight = 'max-h-96', className = '' }) => {
    return (
      <div 
        className={`
          ${maxHeight} 
          overflow-y-auto 
          scrollbar-thin 
          scrollbar-track-gray-100 
          scrollbar-thumb-gray-300 
          hover:scrollbar-thumb-gray-400 
          rounded-[8px] 
          border 
          border-[#d4d2d2] 
          ${className}
        `}
      >
        {children}
      </div>
    );
  };
  
  export default VerticalScrollContainer;