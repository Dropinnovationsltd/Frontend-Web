{/*import React from 'react'
import Navbar from '../components/Navbar'
import search from "../assets/Frame 723.png"
import caricon1 from '../assets/Frame 584.png'

const Dashboard = () => {
  return (
    <>
    <div className='container w-full flex '>
        <div className='w-[20%] container ml-0 p-2'>
            
            <Navbar />
        </div>
        <div className='w-[80%]'> 
         
          <div className='container p-4 text-white flex justify-between border-[1px] border-black'>
            < p className='text-[36px] text-black p-[1rem]'>Hello John</p>
            <img src={search} className=' p-5 h-9 w-9'/>
          </div>
         
          <div>
            <p className='text-[32px] text-black p-4'>Dashboard</p>
          </div>
          <div className='flex '>
            <div className='flex flex-row p-[1rem] border-[1px] border-black rounded-[1rem]'>
              <img src={caricon1} className='w-[2.5rem] h-[2.5rem]'/>
              <div className='flex flex-col p-[0.5rem]'> 
                <p className='text-[0.8rem] font-light text-[#bbbbbb]'>Total active rentals</p>
                <h2 className='text-[1.5rem] font-bold'>12 Rentals</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard*/}
import Header from "../components/Header";
import DashboardOverview from "../components/DashboardOverview";
import BookingActivity from "../components/BookingActivity";
import FleetManagement from "../components/FleetManagement";
import TopEarningVehicles from "../components/TopEarningVehicles";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="p-[8px] h-screen bg-[#f4efeff8]">
      <DashboardOverview />
      
    </div>

  );
}

export default Dashboard;