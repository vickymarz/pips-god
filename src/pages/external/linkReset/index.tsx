import { Link } from "react-router-dom";

export const ResetLink = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-authImg bg-cover bg-no-repeat">
        <div className="w-full min-h-screen flex items-center  justify-center bg-[#ffffffe6] px-[33px] md:px-[38px] pt-[45px]">
          <div className="flex flex-col items-center justify-center items-center">
            <h2 className='text-[#0D142E] font-bold text-[1.4rem] md:text-[1.87rem] font-productSans'>Reset Link sent</h2>
            <p className='px-[40px] md:px-[0] text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>
              A password reset code has been sent to your Email
            </p>
            <div className="mt-5">
              <button
                type="submit"
                className="my-[20px] text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]"
              >
                <Link to="/reset_token">Click here to enter code</Link>
              </button>
            </div>
            <p className="mt-[5px] mt-[50px] font-medium text-[0.87rem] md:text-[1.31rem] text-center text-[#666666]">
              Didn't receive the email yet?{" "}
              <Link
                to="/forgot_password"
                className="text-[#0D142E] font-semi-bold"
              >
                Click here to resend
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

