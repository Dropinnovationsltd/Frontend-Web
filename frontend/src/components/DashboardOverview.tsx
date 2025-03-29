import React from 'react';
import { Link } from "react-router-dom";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { UserIcon, UserCircleIcon, TruckIcon, } from "@heroicons/react/24/outline";

function DashboardOverview() {
  return (
    
    <>
       <div className="md:mx-auto">
         
         <div className="rounded-[8px] px-5 md:p-9 pt-[14px] pb-[1px] my-[18px] shadow-md bg-[#fff]">
         <Link to='/users'>
         <div className=" rounded-[50%] w-[32px] md:h-10 md:w-10 h-[32px] bg-[#f5f5f5]">
             <UserIcon className="w-full h-full md:w-full md:h-full text-[#96842c]" />
           </div>
         </Link>
           <div className="">
           <p className="text-[#96842c] no-underline text-2xl  pt-2 md:py-4 font-bold">182</p>
           <p className="text-[#96842c] text-[16px] font-medium">Users</p>
           </div>       
         </div>
         
         <div className="rounded-[8px] px-[20px] md:p-9 pt-[14px] pb-[1px] my-[18px] shadow-md bg-[#fff]">
           <Link to='/drivers'>
           <div className="  rounded-[50%] w-[32px] md:h-10 md:w-10 h-[32px] bg-[#f5f5f5]">
             <UserCircleIcon className="w-full h-full md:w-full md:h-full text-[#96842c]" />
           </div>
           </Link>
           <div className="">
           <p className="text-[#96842c] text-[24px] pt-2 md:py-4 font-bold">182</p>
           <p className="text-[#96842c] text-[15px] font-medium">Driver</p>
           </div>
         </div>
         <div className="rounded-[8px] px-[20px] md:p-9 pt-[14px] pb-[1px] my-[18px] shadow-md bg-[#fff]">
           <Link to='/car-rent'>
           <div className="  rounded-[50%] w-[32px] md:h-10 md:w-10 h-[32px] bg-[#f5f5f5]">
             <TruckIcon className="w-full h-full md:w-full md:h-full text-[#96842c]" />
           </div>
           </Link>
           <div className="">
           <p className="text-[#96842c] text-[24px] pt-2 md:py-4 font-bold">182</p>
           <p className="text-[#96842c]  text-[15px] font-medium">Car Rental</p>
           </div>
         </div>
         <div className="rounded-[8px] px-[20px] md:p-9 pt-[14px] pb-[1px] my-[18px] shadow-md bg-[#fff]">
           <Link to='/booking'>
           <div className=" rounded-[50%] w-[32px] md:h-10 md:w-10 h-[32px] bg-[#f5f5f5]">
             <Bars4Icon className="w-full h-full md:w-full md:h-full text-[#96842c]" />
           </div>
           </Link>
           <div className="">
           <p className="text-[#96842c] text-[24px] pt-2 md:py-4 font-bold">182</p>
           <p className="text-[#96842c]  text-[15px] font-medium ">Bookings</p>
           </div>
         </div>
         
       </div>
      </>
  );
}

export default DashboardOverview;