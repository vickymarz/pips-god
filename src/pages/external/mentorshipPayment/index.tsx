import { MentorshipPaymentForm, MentorshipPaymentInfo, MentorshipPaymentSummary } from './components'
import { Link } from 'react-router-dom'
import arrow from '../../../assets/images/arrow-square-left.png'
import arrowDesktop from '../../../assets/images/arrow-square-desktop.png'
import cardMobile from '../../../assets/images/card-mobile.png'

export const MentorshipPayment = () => {
  return (
    <>
    <section className="flex flex-col md:flex-row justify-start">
      <div className='py-[34px] px-[20px] md:pl-[76px] md:pr-[22px] md:py-[80px] flex flex-col justify-start items-start'>
        <Link to={'/'} className='flex justify-start items-center gap-x-[9px] md:gap-x-[21px]'>
          <div>
            <img src={arrowDesktop} alt="back" className='hidden md:block'/>
            <img src={arrow} alt="back" className='md:hidden'/>
          </div>
          <span className='text-[#000000] text-[0.75rem] md:text-[1.75rem] font-medium'>Back</span>
        </Link>
        <MentorshipPaymentInfo />
        <MentorshipPaymentForm id="form"/>
      </div>
      <MentorshipPaymentSummary id="form" />
    </section>
    <div className="md:hidden flex justify-center items-center w-full mt-[50px]">
      <img src={cardMobile} alt="" />
    </div>
    </>
  )
}
