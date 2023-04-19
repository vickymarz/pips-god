import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "react-query";
import userServices from "services/userServices";
import success from '../../../assets/images/success.png'
import fail from '../../../assets/images/fail.png'

export const EmailVerificationSuccess = () => {

const [searchParams] = useSearchParams();

const {mutate, data} = useMutation(userServices.verifyEmail, {
  onSuccess: (data) => {
    console.log(data)
    if (data?.code === 200) {
       console.log(data.tokens, true)
       localStorage.setItem("tokens", JSON.stringify(data.tokens))
    }
  },
})

useEffect(() => {
  const token = searchParams.get('token');
  const trans= searchParams.get('trans');
  mutate({token, trans})
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


const verifySuccess = (
  <div className="w-full min-h-screen bg-authImg bg-cover bg-no-repeat">
    <div className="w-full min-h-screen flex bg-[#ffffffe6] px-[33px] md:px-[38px] pt-[45px]">
      <div className="flex flex-col items-center justify-start items-center gap-y-[30px] w-full mt-[50px]">
        <h2 className='text-[#0D142E] font-bold text-[2rem] md:text-[2.5rem] font-productSans text-center'>Congratulations!</h2>
        <p className=' text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>
          Your email has been verified successfully!.
        </p>
        <div className='flex justify-center items-center'>
          <img src={success} alt="success" />
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="my-[20px] text-[0.75rem] md:text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]"
          >
            <Link to="/portal">Click here to proceed to the learning portal</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
)

const verifyStale = (
    <div className="w-full min-h-screen bg-authImg bg-cover bg-no-repeat">
    <div className="w-full min-h-screen flex bg-[#ffffffe6] px-[33px] md:px-[38px] pt-[45px]">
      <div className="flex flex-col items-center justify-start items-center gap-y-[30px] w-full mt-[50px]">
        <h2 className='text-[#0D142E] font-bold text-[2rem] md:text-[2.5rem] font-productSans text-center'>Verified!</h2>
        <p className=' text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>
          Your email has already been verified successfully.
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
)

const verifyFailed = (
    <div className="w-full min-h-screen bg-authImg bg-cover bg-no-repeat">
    <div className="w-full min-h-screen flex bg-[#ffffffe6] px-[33px] md:px-[38px] pt-[45px]">
      <div className="flex flex-col items-center justify-start items-center gap-y-[30px] w-full mt-[50px]">
        <h2 className='text-[#0D142E] font-bold text-[2rem] md:text-[2.5rem] font-productSans text-center'>Verification Failed!</h2>
        <p className=' text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>
          Your email could not be verified. <br /> You can retry again or go back and register on the platform.
        </p>
        <div className='flex justify-center items-center w-[100px]'>
          <img src={fail} alt="fail" className="mix-blend-darken"/>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="my-[20px] text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]"
          >
            <Link to="/">Click here to return to the website</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
)
const verifyExpired = (
    <div className="w-full min-h-screen bg-authImg bg-cover bg-no-repeat">
    <div className="w-full min-h-screen flex bg-[#ffffffe6] px-[33px] md:px-[38px] pt-[45px]">
      <div className="flex flex-col items-center justify-start items-center gap-y-[30px] w-full mt-[50px]">
        <h2 className='text-[#0D142E] font-bold text-[2rem] md:text-[2.5rem] font-productSans text-center'>Verification Failed!</h2>
        <p className=' text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>
          Your email could not be verified. <br /> A new verification link will be sent to your email shortly.
        </p>
        <div className='flex justify-center items-center w-[100px]'>
          <img src={fail} alt="fail" className="mix-blend-darken"/>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="my-[20px] text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]"
          >
            <Link to="/">Click here to return to the website</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
)

const verifyProgress = (
    <div className="w-full min-h-screen bg-authImg bg-cover bg-no-repeat">
    <div className="w-full min-h-screen flex bg-[#ffffffe6] px-[33px] md:px-[38px] pt-[45px]">
      <div className="flex flex-col items-center justify-start items-center gap-y-[30px] w-full mt-[50px]">
        <h2 className='text-[#0D142E] font-bold text-[1.5rem] md:text-[2.5rem] font-productSans text-center'>Verification in progress...</h2>
        <p className=' text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>
          Please wait while we verify your email.
        </p>
      </div>
    </div>
  </div>
)

const displayUI = () => {
    if(data?.code === 200) {
       return verifySuccess
    } else if(data?.code === 208) {
       return verifyStale
    } else if(data?.code === 401) {
        return verifyFailed
    } else if (data?.code === 308) {
       return verifyExpired
    } else {
        return verifyProgress
    }
}
  return (
    <>
      {displayUI()}
    </>
  );
};

