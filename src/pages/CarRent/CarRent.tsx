
import VerticalScrollContainer from '../../components/AdvancedScrollBar'
import CarRentUsersTable from '../../components/Tables/CarRentUsersTable'

const CarRent = () => {
  return (
    <div className=' bg-[#fff] max-h-screen'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080]"> Car Rent </h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <CarRentUsersTable />
      </VerticalScrollContainer>
      
    </div>
  )
}

export default CarRent