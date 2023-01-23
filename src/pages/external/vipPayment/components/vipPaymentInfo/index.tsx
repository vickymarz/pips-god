import paystack from '../../../../../assets/images/paystack.png'

export const VipPaymentInfo = () => {
  return (
    <div>
    <h2 className='pt-[14px] lg:pt-[34px] pb-[21px] lg:pb-[20px] text-[#19275E] text-[1.06rem] lg:text-[2.5rem] font-semiBold'>Mentorship payment | Pips god Academy</h2>
    <div className='flex flex-col justify-center items-center gap-y-[3px] lg:gap-y-[6px]'>
       <span className='text-[#8B8B8B] font medium text-[0.62rem] lg:text-[1.25rem]'>USD</span>
       <h3 className='text-[#000000] font-medium text-[1.31rem] lg:text-[2.75px]'>$400</h3>
    </div>
    <div className='font-medium text-[0.67px] lg:text-[1.37rem] text-[#000000] flex flex-col justify-start items-start gap-y-[20px] lg:gap-y-[40px]'>
       <h4 className='text-[#19275E]'>Mentorship Details</h4>
       <p className='leading-[1rem] leading-[2rem]'> Online Premium Mentorship Learn and Earn Program Monthly Subscription Earn Masterclass Certificate</p>
       <p> Payment would be processed by <span className='text-[#19275E]'>Paystack</span> </p>
    </div>
    <div>
       <h3 className='text-[#19275E] font-medium text-[0.93rem] lg:text-[1.87rem]'>Payment Method</h3>
       <div className='w-full'>
         <img src={paystack} alt="payment method" />
       </div>
    </div>
</div>
  )
}

