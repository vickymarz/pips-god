import { Link } from "react-router-dom";
import success from '../../../assets/images/success.png'

export const EmailVerificationSuccess = () => {

  return (
    <>
      <div className="w-full min-h-screen bg-authImg bg-cover bg-no-repeat">
        <div className="w-full min-h-screen flex bg-[#ffffffe6] px-[33px] md:px-[38px] pt-[45px]">
          <div className="flex flex-col items-center justify-start items-center gap-y-[30px] w-full mt-[50px]">
            <h2 className='text-[#0D142E] font-bold text-[2rem] md:text-[2.5rem] font-productSans text-center'>Congratulations!</h2>
            <p className=' text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>
              Your email has been verified successfully.
            </p>
            <div className='flex justify-center items-center'>
              <img src={success} alt="success" />
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="my-[20px] text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]"
              >
                <Link to="/portal">Click here to proceed to the learning portal</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

