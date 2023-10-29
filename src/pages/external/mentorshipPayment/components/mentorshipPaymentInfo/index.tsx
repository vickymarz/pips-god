import paystackDesktop from '../../../../../assets/images/paystack-desktop.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faNairaSign } from '@fortawesome/free-solid-svg-icons';

export const MentorshipPaymentInfo = () => {
  return (
    <div>
    <h2 className='pt-[14px] md:pt-[34px] pb-[21px] md:pb-[20px] text-[#19275E] text-[1.06rem] md:text-[2rem] font-semibold'>Payment Checkout</h2>
    <div className='flex flex-col justify-start items-start gap-y-[3px] md:gap-y-[6px]'>
       <span className='text-[#8B8B8B] font medium text-[0.62rem] md:text-[1.2rem]'>USD | NAIRA</span>
       <h3 className='text-[#000000] font-medium text-[1.31rem] lg:text-[2rem]'>
       <FontAwesomeIcon icon={faDollarSign} className='text-[1.2rem] md:text-[1.8rem]'/>
       500 (<FontAwesomeIcon icon={faNairaSign} className='text-[1.2rem] md:text-[1.8rem]'/>350,000)</h3>
    </div>
    <div className='font-medium text-[0.67rem] lg:text-[1.2rem] text-[#000000] flex flex-col justify-start items-start gap-y-[20px] md:gap-y-[40px] mb-[24px]'>
       <h4 className='text-[#19275E]'>Mentorship Details</h4>
       <p className='leading-[1rem] md:leading-[2rem] lg:text-[1.1rem]'> Online Premium Mentorship <br /> Learn and Earn Program <br /> Monthly Subscription <br /> Earn Masterclass Certificate</p>
       <p> Payment would be processed by <span className='text-[#19275E]'>Paystack</span> </p>
    </div>
    <div>
       <h3 className='text-[#19275E] font-medium text-[0.93rem] md:text-[1.4rem]'>Payment Method</h3>
       <div className='w-full'>
         <img src={paystackDesktop} alt="payment method" className='w-min md:w-full'/>
       </div>
    </div>
</div>
  )
}

