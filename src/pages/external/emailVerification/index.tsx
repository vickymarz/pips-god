import { Link } from "react-router-dom";
import logo from '../../../assets/images/pipsgod.png'

export const EmailVerification = () => {

  return (
    <>
      <div className="w-full min-h-screen bg-authImg bg-cover bg-no-repeat">
        <div className="w-full min-h-screen flex bg-[#ffffffe6] px-[33px] md:px-[38px] pt-[45px]">
          <div className="flex flex-col justify-start items-center gap-y-[30px] w-full mt-[50px]">
            <Link to={'/'} className="flex justify-center items-center w-[200px]">
              <img src={logo} alt="pipsgod logo" className="object-center"/>
            </Link>
            <h2 className='text-[#0D142E] font-bold text-[2rem] md:text-[2.5rem] font-productSans text-center'>Welcome to Pipsgod Academy!</h2>
            <p className=' text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>
              An email verification code has been sent to your email.
            </p>
            <p className='text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>
               KIndly proceed to your email to continue the verification process. Thanks!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

