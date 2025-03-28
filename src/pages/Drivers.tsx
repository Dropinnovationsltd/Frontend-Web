
import DriverUserTable from '../components/DriverUserTable';
import VerticalScrollContainer from '../components/AdvancedScrollBar';
const Drivers = () => {
  return (
    <div className=' bg-[#fff] max-h-screen font-roboto'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080]">Drivers</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <DriverUserTable />
      </VerticalScrollContainer>
      
    </div>

  )
}

export default Drivers