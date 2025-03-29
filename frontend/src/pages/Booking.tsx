
import VerticalScrollContainer from '../components/AdvancedScrollBar'
import BookingsUsersTable from '../components/BookingsUsersTable'
const Booking = () => {
  return (
    <div>
    <div className=' bg-[#fff] max-h-screen'>
    <h1 className="text-[24px] font-[400] mb-[12px] text-[#808080]">Bookings</h1>
   <VerticalScrollContainer className=' max-w-screen'>
      <BookingsUsersTable />
   </VerticalScrollContainer>
   
 </div>

 </div>
  )
}

export default Booking