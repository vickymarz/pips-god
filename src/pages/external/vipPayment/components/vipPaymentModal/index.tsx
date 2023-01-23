import { Link } from 'react-router-dom'
import success from '../../../../../assets/images/sucess.png'
export const VipPaymentModal = () => {
  return (
    <div className='flex justify-center items-center gap-x-[79px] w-full min-h-full'>
        <div className='text-[#0D142E] lg:font-semiBold'>
          <h2 className='text-[1.37rem] lg:text-[1.81rem]'>Payment Successful.</h2>
          <p className=' text-[0.75rem] lg:text-[0.93rem]'>Payment has been processed successfully, you can  now start course</p>
        </div>
        <div className='flex justify-center items-center'>
          <img src={success} alt="success" />
        </div>
        <Link to="/sign_in"className="block font-productSans text-[1.06rem] font-bold mt-5 text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[3.8rem] tracking-[0.02em]">
          Go to course
        </Link>
    </div>
  )
}

