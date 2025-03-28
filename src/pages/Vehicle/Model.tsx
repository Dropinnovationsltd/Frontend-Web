import React from 'react'
import VerticalScrollContainer from '../../components/AdvancedScrollBar'
import ModelUsersTable from '../../components/Tables/ModelUsersTable'


const Model = () => {
  return (
    <div className=' bg-[#fff] max-h-screen'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080]">Vehicle Model</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <ModelUsersTable />
      </VerticalScrollContainer>
      
    </div>
  )
}

export default Model