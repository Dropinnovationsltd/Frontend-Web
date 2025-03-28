import { Link } from "react-router-dom";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Card from "./Card";
import { UserIcon, UserCircleIcon, TruckIcon, UserGroupIcon,  } from "@heroicons/react/24/outline";

function DashboardOverview() {
  return (
    
    <>
      <div className="">
        
        <div className="rounded-[8px] px-[20px] pt-[14px] pb-[1px] my-[18px]  shadow-[2px] bg-[#fff]">
        <Link to='/users'>
        <div className=" rounded-[50%] w-[32px] h-[32px] p-[10px] bg-[#f5f5f5]">
            <UserIcon className="w-[30px] h-[30px] text-[#96842c]" />
          </div>
        </Link>
          <div className="mt-[-15px]">
          <p className="text-[#96842c] no-underline text-[24px] font-[1000]">182</p>
          <p className="text-[#96842c] no-un mt-[-18px]  text-[15px] font-light">Users</p>
          </div>       
        </div>
        
        <div className="rounded-[8px] px-[20px] pt-[14px] pb-[1px] my-[18px] shadow-[2px] bg-[#fff]">
          <Link to='/drivers'>
          <div className=" rounded-[50%] w-[32px] h-[32px] p-[10px] bg-[#f5f5f5]">
            <UserCircleIcon className="w-[30px] h-[30px] text-[#96842c]" />
          </div>
          </Link>
          <div className="mt-[-15px]">
          <p className="text-[#96842c] text-[24px] font-[1000]">182</p>
          <p className="text-[#96842c] mt-[-18px]  text-[15px] font-light">Driver</p>
          </div>
        </div>
        <div className="rounded-[8px] px-[20px] pt-[14px] pb-[1px] my-[18px] shadow-[2px] bg-[#fff]">
          <Link to='/car-rent'>
          <div className=" rounded-[50%] w-[32px] h-[32px] p-[10px] bg-[#f5f5f5]">
            <TruckIcon className="w-[30px] h-[30px] text-[#96842c]" />
          </div>
          </Link>
          <div className="mt-[-15px]">
          <p className="text-[#96842c] text-[24px] font-[1000]">182</p>
          <p className="text-[#96842c] mt-[-18px]  text-[15px] font-light">Car Rental</p>
          </div>
        </div>
        <div className="rounded-[8px] px-[20px] pt-[14px] pb-[1px] my-[18px] shadow-[2px] bg-[#fff]">
          <Link to='/booking'>
          <div className=" rounded-[50%] w-[32px] h-[32px] p-[10px] bg-[#f5f5f5]">
            <Bars4Icon className="w-[30px] h-[30px] text-[#96842c]" />
          </div>
          </Link>
          <div className="mt-[-15px]">
          <p className="text-[#96842c] text-[24px] font-[1000]">182</p>
          <p className="text-[#96842c] mt-[-18px]  text-[15px] font-light">Bookings</p>
          </div>
        </div>
        
      </div>
     </>
  );
}

export default DashboardOverview;