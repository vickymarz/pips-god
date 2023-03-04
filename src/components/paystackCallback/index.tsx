import { Link } from 'react-router-dom'
import success from '../../assets/images/success.png'

export const PaystackCallback = () => {
  return (
    <div className='flex justify-center flex-col px-[20px] py-[80px] md:px-[80px] items-center gap-y-[50px] w-full min-h-full'>
        <div className='text-[#0D142E] flex justify-center flex-col gap-y-[20px] items-center md:font-semiBold'>
          <h2 className='text-[1.37rem] md:text-[2.5rem] font-bold'>Payment Successful.</h2>
          <p className='text-center text-[0.75rem] md:text-[0.93rem]'>Payment has been processed successfully, you can proceed to continue your registration </p>
        </div>
        <div className='flex justify-center items-center'>
          <img src={success} alt="success" />
        </div>
        <Link to="/register/:id"className="block font-productSans text-[1.06rem] font-bold mt-5 text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[3.8rem] tracking-[0.02em]">
          Continue Registration
        </Link>
    </div>
  )
}

