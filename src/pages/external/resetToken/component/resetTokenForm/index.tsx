import { useState } from "react";
// import OTPInput, { ResendOTP } from "otp-input-react";
// import { OTPInputProps } from "react-otp-input";
import OtpInput from 'react18-otp-input'
import { ResendOTP } from "../resendOTP";

export const ResetTokenForm = () => {
  const [Otp, setOtp] = useState("");
  console.log(Otp);

  return (
    <>
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
            {/* <ResendOTP
          renderTime={() => React.Fragment}
          renderButton={(buttonProps) => {
            return (
              <button {...buttonProps}>
                {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend"}
              </button>
            );
          }} */}
          <ResendOTP />
            </div>
        </form>
        </>
  )
}

