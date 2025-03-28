import React from 'react'
import WithdrawUserTable from '../components/WithdrawUserTable';
import VerticalScrollContainer from '../components/AdvancedScrollBar';
const WithdrawalRequest = () => {
  return (
    <div>
       <div className=' bg-[#fff] max-h-screen'>
       <h1 className="text-[24px] font-[400] mb-[12px] text-[#808080]">Withdrawal</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <WithdrawUserTable />
      </VerticalScrollContainer>
      
    </div>

    </div>
  )
}

export default WithdrawalRequest