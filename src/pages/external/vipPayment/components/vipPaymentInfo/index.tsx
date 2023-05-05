import paystack from '../../../../../assets/images/paystack.png'
import paystackDesktop from '../../../../../assets/images/paystack-desktop.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

export const VipPaymentInfo = () => {
  return (
    <div>
    <h2 className='pt-[14px] md:pt-[34px] pb-[21px] md:pb-[20px] text-[#19275E] text-[1.06rem] md:text-[2rem] font-semibold'>Vip Signal Group | Pips god Academy</h2>
    <div className='flex flex-col justify-start items-start gap-y-[3px] md:gap-y-[6px]'>
       <span className='text-[#8B8B8B] font medium text-[0.62rem] md:text-[1.2rem]'>USD</span>
       <h3 className='text-[#000000] font-medium text-[1.31rem] lg:text-[2rem]'><FontAwesomeIcon icon={faDollarSign} />100</h3>
    </div>
    <div className='font-medium text-[0.67rem] lg:text-[1.2rem] text-[#000000] flex flex-col justify-start items-start gap-y-[20px] md:gap-y-[40px] mb-[24px]'>
       <h4 className='text-[#19275E]'>Vip Signal Group Details</h4>
       <p className='leading-[1rem] md:leading-[2rem] lg:text-[1.1rem]'> Professional guidance <br /> Advanced risk management <br /> One-off Subscription<br /> Precise stop and limit levels to maximize profit</p>
       <p> Payment would be processed by <span className='text-[#19275E]'>Paystack</span> </p>
    </div>
    <div>
       <h3 className='text-[#19275E] font-medium text-[0.93rem] md:text-[1.4rem]'>Payment Method</h3>
       <div className='w-full'>
         <img src={paystack} alt="payment method" className='md:hidden w-min'/>
         <img src={paystackDesktop} alt="payment method" className='w-min md:w-full'/>
       </div>
    </div>
</div>
  )
}

