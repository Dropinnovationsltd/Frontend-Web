import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import UsersTable from '../components/UserTable';
import VerticalScrollContainer from '../components/AdvancedScrollBar';
import Footer from '../components/Footer';



const Users = () => {
  return (
    <div className=' bg-[#fff] max-h-screen'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080]">User</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <UsersTable />
      </VerticalScrollContainer>
      
    </div>

)
};

export default Users;
