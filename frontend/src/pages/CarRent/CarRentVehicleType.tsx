import React from 'react'
import VerticalScrollContainer from '../../components/AdvancedScrollBar'
import CarTypeUsersTable from '../../components/Tables/CarTypeUsersTable'


const CarRentVehicleType = () => {
  return (
    <div className=' py-2 bg-[#fff] md:mx-auto md:py-10  max-h-screen'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080] md:py-4 py-2">Vehicle Type</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <CarTypeUsersTable />
      </VerticalScrollContainer>
      
    </div>
  )
}

export default CarRentVehicleType