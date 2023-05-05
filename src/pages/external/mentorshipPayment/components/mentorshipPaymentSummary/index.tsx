import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

export const MentorshipPaymentSummary = ({id}:{id:string}) => {
  return (
    <div className='md:bg-[#F8FAFC] px-[26px] py-[34px] md:py-[80px] flex flex-col :justify-start items-start'>
         <h3 className="text-[#19275E] font-semibold text-[1.18rem] md:text-[2rem]">Summary</h3>
         <div className='flex justify-between items-center w-full py-[10px] md:py-[26px] text-[#2D2D2D] md:text-[1.3rem] font-medium'>
           <span>Original price</span>
           <span><FontAwesomeIcon icon={faDollarSign} />500</span>
         </div>
         <div className="text-[#2D2D2D] flex justify-center items-center w-full"><span>____________________________________________</span><span className="hidden md:block">________________</span></div>
         <div className='flex w-full justify-between items-center py-[10px] md:py-[26px] text-[#19275E] font-semibold pb-[30px] md:pb-[85px] md:text-[1.3rem]'>
           <span>Total</span>
           <span><FontAwesomeIcon icon={faDollarSign} />500</span>
         </div>
         <p>By completing your purchase you agree to our <span>No refund Policy</span></p>
         <div className="w-full flex justify-center items-center">
           <button className="font-productSans text-[1.06rem] font-bold mt-5 text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[3.8rem] tracking-[0.02em]" type="submit" form={id}>
             Complete Payment
            </button>
         </div>
       </div>
  )
}
