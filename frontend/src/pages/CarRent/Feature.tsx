import React from 'react'
import VerticalScrollContainer from '../../components/AdvancedScrollBar'
import FeatureUsersTable from '../../components/Tables/FeatureUsersTable'

const Feature = () => {
  return (
    <div className=' bg-[#fff] md:mx-auto md:py-10  max-h-screen'>
       <h1 className="text-[24px] font-[3000] mb-[12px] text-[#808080]">Features</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <FeatureUsersTable />
      </VerticalScrollContainer>
      
    </div>
  )
}

export default Feature