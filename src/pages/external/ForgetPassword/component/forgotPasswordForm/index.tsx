import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userServices from "services/userServices";

type FormValues = {
    email: string;
  };

export const ForgotPasswordForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [validCredentials, setValidCredentials] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<FormValues>();

const navigate = useNavigate();

const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    setIsSubmit(true);
    const recovery = await userServices.recoverPassword(data);

    if (recovery.status === "fail") {
      setIsSubmit(false);
      setInvalidCredentials(true);
    }

    if (recovery.status === "success") {
      setValidCredentials(true);
      setTimeout(() => {
        navigate("/reset_link");
      }, 2000);
    }
  };

  const errorMsg = () => {
    let element;
    if (validCredentials) {
      element = (
        <p className="mt-4 text-xl text-green-600 text-center">
          Successful, Kindly proceed to your email!
        </p>
      );
    } else if (invalidCredentials) {
      element = (
        <p className="mt-4 text-xl text-red-600 text-center">
          Incorrect email address
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
                    Your Email
                </label>

                <input
                    style={{
                        border: errors.email && "1px solid red"
                    }}
                    className={`focus:outline-none focus:${
                        !errors.email
                            ? "shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]"
                            : "shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]"
                    } text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
                    type='email'
                    placeholder='Enter your email'
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
                className='mt-[150px] md:my-[85px] text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]'
                type='submit'>
                {isSubmit ? "Loading..." : "Sign In"}
            </button>
        </form>
        </>
  )
}

