import {  useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTransactions } from 'hooks'
import { useSearchParams } from "react-router-dom";
import success from '../../assets/images/success.png'
import { VerifyPopup } from "../verifyPopUp";

export const PaystackCallback = () => {
  const [verify, setVerify] = useState(false)
  const [vipSignal, setVipSignal] = useState<string | null>('')
  const { id } = useParams()
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const vip_signal = searchParams?.get('vip_signal');
    setVipSignal(vip_signal)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSuccess = (data:any) => {
    if (data.code === 404 || isError) {
      setVerify(true)
      setTimeout(() => {
         navigate("/")
      }, 2000);
    }
}
const { isError } = useTransactions(id, onSuccess)

const vip = (
  <div className='bg-authImg bg-cover bg-no-repeat w-full min-h-screen'>
    <div className="w-full min-h-screen px-[20px] py-[80px] md:px-[80px] items-center gap-y-[50px] flex justify-start pt-[45px] flex-col bg-[#ffffffe6] md:bg-[#F8FAFC]">
      <div className='flex justify-center items-center'>
        <img src={success} alt="success" />
      </div>
      <div className='text-[#0D142E] flex justify-center flex-col gap-y-[20px] items-center md:font-semiBold'>
        <h2 className='text-[2rem] md:text-[2.5rem] font-bold'>Payment Successful.</h2>
        <p className='text-center'>Payment has been processed successfully, you can now proceed to your email to join the vip telegram group via a link that will be sent to you. </p>
      </div>
  </div>
</div>
)

const mentorship = (
  <div className='bg-authImg bg-cover bg-no-repeat w-full min-h-screen'>
    <div className="w-full min-h-screen px-[20px] py-[80px] md:px-[80px] items-center gap-y-[50px] flex justify-start pt-[45px] flex-col bg-[#ffffffe6] md:bg-[#F8FAFC]">
      <div className='text-[#0D142E] flex justify-center flex-col gap-y-[20px] items-center md:font-semiBold'>
        <h2 className='text-[2rem] md:text-[2.5rem] font-bold'>Payment Successful.</h2>
        <p className='text-center'>Payment has been processed successfully, you can proceed to continue your registration </p>
      </div>
      <div className='flex justify-center items-center'>
        <img src={success} alt="success" />
      </div>
      <Link to={`/register/${id}`} className="block font-productSans text-[1.06rem] font-bold mt-5 text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[3.8rem] tracking-[0.02em]">
        Continue Registration
      </Link>
    </div>
</div>
)

const pending = (
  <div className='bg-authImg bg-cover bg-no-repeat w-full min-h-screen'>
  <div className="w-full min-h-screen px-[20px] py-[80px] md:px-[80px] items-center gap-y-[50px] flex justify-start pt-[45px] flex-col bg-[#ffffffe6] md:bg-[#F8FAFC]">
    <div className='text-[#0D142E] flex justify-center flex-col gap-y-[20px] items-center md:font-semiBold'>
      <p className='text-center'>Please wait...</p>
    </div>
  </div>
</div>
)

const displayUI = () => {
  if(vipSignal === 'true') {
     return vip
  } else if(vipSignal === 'false') {
     return mentorship
   } else {
      return pending
  }
}

  return (
    <>
    {displayUI()}
      {verify && <VerifyPopup verify={verify} />}
    </>
  )
}

