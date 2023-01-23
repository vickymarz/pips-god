import { VipPaymentForm, VipPaymentInfo, VipPaymentSummary } from './components'
import { Link } from 'react-router-dom'
import arrow from '../../../assets/images/arrow-square-left.png'

export const VipPayment = () => {
  return (
    <section className='py-[34px] px-[20px] lg:p-[80px]'>
        <Link to={''} className='flex justify-center items-center gap-x-[9px] lg:gap-x-[21px]'>
          <div className='lg:w-[41px] lg:h-[41px]'>
            <img src={arrow} alt="back" />
          </div>
          <span className='text-[#000000] text-[0.74px] lg:text-[1.75rem] font-medium'>Back</span>
        </Link>
        <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start'>
           <VipPaymentInfo />
           <VipPaymentForm id="form"/>
        </div>
        <VipPaymentSummary id="form" />
    </section>
  )
}
