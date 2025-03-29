import React from 'react';
import WithdrawUserTable from '../components/WithdrawUserTable';
import VerticalScrollContainer from '../components/AdvancedScrollBar';
const WithdrawalRequest = () => {
  return (
    <div>
       <div className=' bg-[#fff]md:mx-auto md:py-10  w-full max-h-screen'>
       <h1 className="text-[24px] font-[400] mb-[12px] text-[#808080] md:py-4 py-2">Withdrawal</h1>
      <VerticalScrollContainer className=' max-w-screen'>
         <WithdrawUserTable />
      </VerticalScrollContainer>
      
    </div>

    </div>
  )
}

export default WithdrawalRequest