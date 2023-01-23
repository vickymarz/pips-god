import { Link } from 'react-router-dom'
import success from '../../../../../assets/images/sucess.png'
export const ResetPasswordModal = () => {
  return (
    <div className='flex justify-center items-center gap-x-[79px] w-full min-h-full'>
        <h2>Password Reset Successful.</h2>
        <div className='flex justify-center items-center'>
          <img src={success} alt="success" />
        </div>
        <Link to="/sign_in"className="block font-productSans text-[1.06rem] font-bold mt-5 text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[3.8rem] tracking-[0.02em]">
            Back to home
        </Link>
    </div>
  )
}

