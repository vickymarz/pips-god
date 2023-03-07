import { useEffect } from 'react'
import { AuthFooter, AuthHeader } from "components";
import { ResetTokenForm } from "./component";
import { useLocation, useNavigate} from 'react-router-dom';

export const ResetToken = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(state?.email === undefined) {
       navigate("/forgot_password");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='w-full min-h-screen bg-authImg md:bg-none bg-cover bg-no-repeat'>
      <div className="w-full min-h-screen flex items-start justify-start justify-center bg-[#ffffffe6] md:bg-[#F8FAFC] px-[33px] md:px-[38px] pt-[49px] md:pt-[94px]">
        <div className='flex flex-col justify-center items-center md:items-start gap-y-[1.25rem] gap-y-[1.25rem] md:gap-y-[4rem] md:w-full'>
          <AuthHeader
            title="Reset Password"
            text={`Enter 6 digit code sent to ${state?.email}.`}
          />
         <ResetTokenForm email={state?.email} />
         <AuthFooter />
      </div>
    </div>
    </section>
  );
};


