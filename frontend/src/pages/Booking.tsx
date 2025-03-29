import React from 'react'
import VerticalScrollContainer from '../components/AdvancedScrollBar'
import BookingsUsersTable from '../components/BookingsUsersTable'
const Booking = () => {
  return (
    <div>
    <div className=' bg-[#fff] md:mx-auto md:py-10  max-h-screen'>
    <h1 className="text-[24px] font-[400] mb-[12px] text-[#808080] md:py-4 py-2">Bookings</h1>
   <VerticalScrollContainer className=' max-w-screen'>
      <BookingsUsersTable />
   </VerticalScrollContainer>
   
 </div>

 </div>
  )
}

export default Booking