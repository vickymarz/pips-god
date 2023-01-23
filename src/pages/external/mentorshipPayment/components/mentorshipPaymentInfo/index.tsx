import paystack from '../../../../../assets/images/paystack.png'
import paystackDesktop from '../../../../../assets/images/paystack-desktop.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

export const MentorshipPaymentInfo = () => {
  return (
    <div>
    <h2 className='pt-[14px] md:pt-[34px] pb-[21px] md:pb-[20px] text-[#19275E] text-[1.06rem] md:text-[2.5rem] font-semibold'>Mentorship payment | Pips god Academy</h2>
    <div className='flex flex-col justify-start items-start gap-y-[3px] md:gap-y-[6px]'>
       <span className='text-[#8B8B8B] font medium text-[0.62rem] md:text-[1.25rem]'>USD</span>
       <h3 className='text-[#000000] font-medium text-[1.31rem] lg:text-[2.75rem]'>
       <FontAwesomeIcon icon={faDollarSign} />
       400</h3>
    </div>
    <div className='font-medium text-[0.67rem] lg:text-[1.37rem] text-[#000000] flex flex-col justify-start items-start gap-y-[20px] md:gap-y-[40px] mb-[24px]'>
       <h4 className='text-[#19275E]'>Mentorship Details</h4>
       <p className='leading-[1rem] md:leading-[2rem]'> Online Premium Mentorship <br /> Learn and Earn Program <br /> Monthly Subscription <br /> Earn Masterclass Certificate</p>
       <p> Payment would be processed by <span className='text-[#19275E]'>Paystack</span> </p>
    </div>
    <div>
       <h3 className='text-[#19275E] font-medium text-[0.93rem] md:text-[1.87rem]'>Payment Method</h3>
       <div className='w-full'>
         <img src={paystack} alt="payment method" className='md:hidden'/>
         <img src={paystackDesktop} alt="payment method" className='hidden md:block'/>
       </div>
    </div>
</div>
  )
}

