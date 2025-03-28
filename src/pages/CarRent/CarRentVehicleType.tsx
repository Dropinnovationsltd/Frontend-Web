
import VerticalScrollContainer from '../../components/AdvancedScrollBar'
import CarTypeUsersTable from '../../components/Tables/CarTypeUsersTable'


const CarRentVehicleType = () => {
  return (
    <div className=' bg-[#fff] max-h-screen'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080]">Vehicle Type</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <CarTypeUsersTable />
      </VerticalScrollContainer>
      
    </div>
  )
}

export default CarRentVehicleType