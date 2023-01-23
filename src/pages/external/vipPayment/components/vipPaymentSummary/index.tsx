export const VipPaymentSummary = (id:string) => {
  return (
    <div className='bg-[#F8FAFC] px-[26px]'>
         <h3 className="text-[#19275E] font-semiBold text-[1.18rem] lg:text-[2.5rem]">Summary</h3>
         <div className='flex justify-between items-center py-[26px] lg:pb-[39px] text-[#2D2D2D] lg:text-[1.62rem] font-medium'>
           <span>Original price</span>
           <span>$100</span>
         </div>
         <div className="text-[#2D2D2D]">_______________________</div>
         <div className='flex justify-between items-center py-[26px] text-[#19275E] font-semiBold lg:pb-[85px]'>
           <span>Total</span>
           <span>$100</span>
         </div>
         <p>By completing your purchase you agree to our <span>No refund Policy</span></p>
         <button className="font-productSans text-[1.06rem] font-bold mt-5 text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[3.8rem] tracking-[0.02em]" type="submit" id={id}>
           Complete Payment
          </button>
       </div>
  )
}
