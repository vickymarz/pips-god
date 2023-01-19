import { ResetPasswordForm } from "./component";
import { AuthHeader } from "components";

const ResetPassword = () => {
  <section className='w-full min-h-screen bg-authImg md:bg-none bg-cover bg-no-repeat'>
  <div className="w-full min-h-screen flex items-center md:justify-start justify-center bg-[#F8FAFC] px-[33px] md:px-[38px] pt-[45px]">
    <div className='flex flex-col justify-center items-center md:items-start gap-y-[1.25rem] gap-y-[1.25rem] md:gap-y-[4rem] md:w-full'>
      <AuthHeader
        title="Reset password"
        text="Let’s help you get back to your account."
      />
     <ResetPasswordForm />
</div>
</div>
</section>
};

export default ResetPassword;
