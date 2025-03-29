import React from 'react'
import VerticalScrollContainer from '../../components/AdvancedScrollBar'
import MakeUsersTable from '../../components/Tables/MakeUsersTable'


const Make = () => {
  return (
    <div className=' bg-[#fff] V max-h-screen'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080]">Vehicle Make</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <MakeUsersTable />
      </VerticalScrollContainer>
      
    </div>
  )
}

export default Make