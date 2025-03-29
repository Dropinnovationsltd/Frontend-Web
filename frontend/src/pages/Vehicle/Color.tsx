import React from 'react'
import VerticalScrollContainer from '../../components/AdvancedScrollBar'
import ColorUsersTable from '../../components/Tables/ColorUsersTable'

const Color = () => {
  return (
    <div className=' bg-[#fff] md:mx-auto md:py-10  max-h-screen'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080]  md:py-4 py-2">Vehicle Color</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <ColorUsersTable />
      </VerticalScrollContainer>
      
    </div>
  )
}

export default Color