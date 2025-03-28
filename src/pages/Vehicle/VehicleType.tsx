import React from 'react'
import VerticalScrollContainer from '../../components/AdvancedScrollBar'
import VehicleTypeUsersTable from '../../components/Tables/VehicleTypeUsersTable'



const VehicleType = () => {
  return (
    <div className=' bg-[#fff] max-h-screen'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080]">Vehicle-Type</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <VehicleTypeUsersTable />
      </VerticalScrollContainer>
      
    </div>
  )
}

export default VehicleType