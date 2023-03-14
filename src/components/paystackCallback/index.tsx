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


  return (
    <>
    {vipSignal ?
    (
      <div className='flex justify-center flex-col px-[20px] py-[80px] md:px-[80px] items-center gap-y-[50px] w-full min-h-full'>
      <div className='flex justify-center items-center'>
        <img src={success} alt="success" />
      </div>
      <div className='text-[#0D142E] flex justify-center flex-col gap-y-[20px] items-center md:font-semiBold'>
        <h2 className='text-[1.37rem] md:text-[2.5rem] font-bold'>Payment Successful.</h2>
        <p className='text-center text-[0.75rem] md:text-[0.93rem]'>Payment has been processed successfully, you can now proceed to your email to join the vip telegram group via a link that will be sent to you. </p>
      </div>
  </div>
    ): (
      <div className='flex justify-center flex-col px-[20px] py-[80px] md:px-[80px] items-center gap-y-[50px] w-full min-h-full'>
      <div className='text-[#0D142E] flex justify-center flex-col gap-y-[20px] items-center md:font-semiBold'>
        <h2 className='text-[1.37rem] md:text-[2.5rem] font-bold'>Payment Successful.</h2>
        <p className='text-center text-[0.75rem] md:text-[0.93rem]'>Payment has been processed successfully, you can proceed to continue your registration </p>
      </div>
      <div className='flex justify-center items-center'>
        <img src={success} alt="success" />
      </div>
      <Link to={`/register/${id}`} className="block font-productSans text-[1.06rem] font-bold mt-5 text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[3.8rem] tracking-[0.02em]">
        Continue Registration
      </Link>
  </div>
    )}
      {verify && <VerifyPopup verify={verify} />}
    </>
  )
}

