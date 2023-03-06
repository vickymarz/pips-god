import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import userServices from "services/userServices";
import OtpInput from 'react18-otp-input'
import { ResendOTP } from "../resendOTP";

export const ResetTokenForm = ({email}: {email: string}) => {
  const [Otp, setOtp] = useState("");
  const navigate = useNavigate();

  const {mutate: verifyToken, data, isLoading } = useMutation(userServices.resetToken, {
    onSuccess: (data) => {
      if(data?.code === 200) {
        setTimeout(() => {
          navigate("/reset_password", {state: {email: email, token: Otp}});
        }, 3000);
      }
  },
})

  const handleToken = () => {
		verifyToken({token: Otp, email})
    setOtp("")
  }

  const {mutate: resetTokenMutate } = useMutation(userServices.recoverPassword)

  const handleForgotPassword = () => {
		resetTokenMutate({email})
  }

  useEffect(() => {
    if (Otp.length === 6) {
      handleToken()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Otp])


	const errorMsg = () => {
		let element;
		if (data?.code === 200) {
			element = (
				<p className='mt-4 md:text-[20px] text-green-600 text-center'>
					Proceed to reset your password!
				</p>
			);
		} else if (data?.code === 401) {
			element = (
				<p className='mt-4 md:text-[20px] text-red-600 text-center'>
					Invalid token!
				</p>
			);
		} else if (isLoading) {
          element = (
            <p className='mt-4 md:text-[20px] text-[#74671D] text-center'>
                Verification in progress...
            </p>
          );
        }
		return element;
	};


  return (
    <>
      {errorMsg()}
        <form className='flex flex-col justify-start items-center w-full gap-y-[1rem] md:gap-y-[53px]'>
          <div className='relative flex flex-col justify-start items-start gap-y-[8px] md:gap-y-[23px] w-full'>
            <OtpInput
             value={Otp}
             onChange={setOtp}
             numInputs={6}
             isInputNum={true}
             shouldAutoFocus
             containerStyle={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: window.innerWidth >= 768 ? '21.52px': '10px'}}
             inputStyle={{color: '#0D142E', fontWeight: 500, borderRadius: '4px', border: '1.65517px solid #B0B0B0', fontSize: '1.75rem', width:window.innerWidth >= 768 ? '66px' : '40px', height: window.innerWidth >= 768 ? '66px' : '40px'}}
             focusStyle={{border: '1.65517px solid #0D142E'}}
            />
          <ResendOTP handleForgotPassword={handleForgotPassword}/>
          </div>
        </form>
        </>
  )
}

