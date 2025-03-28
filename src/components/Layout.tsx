import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React, { useState, useCallback } from 'react';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = useCallback(() => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    // Optional: Callback to parent component if needed
  }, [isOpen]);

  return (
    <div className="flex">
       {/* <div className="w-1/5 bg-gray-200 p-4">
           <Navbar onNavbarToggle={toggleNavbar} />
        </div>
        <div className="w-4/5 p-4">
            <Outlet />
        </div>*/}
    </div>
  )
}

export default Layout;
