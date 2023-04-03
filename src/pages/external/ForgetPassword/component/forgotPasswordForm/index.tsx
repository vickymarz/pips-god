import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userServices from "services/userServices";
import { useMutation } from "react-query";

type FormValues = {
    email: string;
  };

export const ForgotPasswordForm = () => {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
} = useForm<FormValues>();

const navigate = useNavigate();

const {mutate, data, isLoading, isError} = useMutation(userServices.recoverPassword, {
  onSuccess: (data) => {
      if(data?.code === 200) {
        setTimeout(() => {
          navigate("/reset_link", {state: {email: data.email}});
        }, 3000);
      }
    }
  })

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		reset();
		mutate(data)
	};

  const errorMsg = () => {
    let element;
    if (data?.code === 200) {
      element = (
        <p className="w-full mt-4 md:text-[20px] text-green-600 text-center">
          Successful, Kindly proceed to your email!
        </p>
      );
    } else if (isError) {
      element = (
        <p className="w-full mt-4 md:text-[20px] text-red-600 text-center">
          If there's is an account associated with this email address, we will send you an email an OTP shortly.
        </p>
      );
    }
    return element;
  };
  const pattern =
    /* eslint-disable-next-line */
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <>
      {errorMsg()}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-start items-center w-full gap-y-[1rem] md:gap-y-[53px]'>
        <div className='relative flex flex-col justify-start items-start w-full gap-y-[8px] md:gap-y-[23px]'>
          <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='email'>
            Email
          </label>
          <input
              style={{
                  borderBottom: errors.email && "2px solid red"
              }}
              className={`focus:outline-none text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
              type='email'
              placeholder='Enter your email'
              id="email"
              {...register("email", {
                  required: "Email cannot be empty",
                  pattern: {
                      value: pattern,
                      message: "Please enter a valid email",
                  },
              })}
          />
          {errors.email && (
              <p className='italic text-sm mt-2' style={{ color: "red" }}>
                  {errors.email?.message}
              </p>
          )}
      </div>
            <button
                className='mt-[80px] md:my-[150px] text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]'
                type='submit'>
                {isLoading ? "Loading..." : "Reset password"}
            </button>
        </form>
        </>
  )
}

