import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import userServices from "services/userServices";

type FormValues = {
    password: string;
    passwordConfirm: string;
  };

export const ResetPasswordForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [validCredentials, setValidCredentials] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<FormValues>();

const navigate = useNavigate();

const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    setIsSubmit(true);
    const reset = await userServices.recoverPassword(data);

    if (reset.status === "fail") {
      setIsSubmit(false);
      setInvalidCredentials(true);
    }

    if (reset.status === "success") {
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
          Password Reset Successful!
        </p>
      );
    } else if (invalidCredentials) {
      element = (
        <p className="mt-4 text-xl text-red-600 text-center">
           Invalid code or incorrect email address
        </p>
      );
    }
    return element;
  };

  /* eslint-disable-next-line */
  const secondPattern = /^[a-z][a-z0-9]+$/gi;

  return (
    <>
        {errorMsg()}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-start items-center w-full gap-y-[1rem] md:gap-y-[53px]'>
            <div className='relative flex flex-col justify-start items-start gap-y-[8px] md:gap-y-[23px] w-full'>
                <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='password'>
                   New Password
                </label>

                <input
                    style={{
                        border: errors.password
                            && "1px solid red"
                        ,
                    }}
                    className={`relative focus:outline-none ${
                        !errors.password
                            ? "focus:shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]"
                            : "focus:shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]"
                    } text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
                    type={passwordShown ? "text" : "password"}

                    placeholder='Enter password'
                    {...register("password", {
                        required: "Password cannot be empty",
                        minLength: {
                            value: 9,
                            message: "Password must be at least 9 characters",
                        },
                        maxLength: {
                            value: 30,
                            message: "Password must not be more than 30 characters",
                        },
                        pattern: {
                            value: secondPattern,
                            message:
                                "Password has to start with a letter, can contain numbers. No spaces and special characters allowed",
                        },
                    })}
                />
                <span
                    className={`absolute ${
                        errors.password ? "bottom-11" : "bottom-3.5"
                    } right-3 cursor-pointer`}
                    onClick={togglePassword}>
                    {passwordShown ? <FiEyeOff /> : <FiEye />}
                </span>
                {errors.password && (
                    <p
                        className='right-0 bottom-[-37px] italic text-sm mt-2'
                        style={{ color: "red" }}>
                        {errors.password?.message}
                    </p>
                )}
            </div>
            <div className='relative flex flex-col justify-start items-start gap-y-[8px] md:gap-y-[23px] w-full'>
                <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='password'>
                   Confirm Password
                </label>

                <input
                    style={{
                        border: errors.passwordConfirm
                            && "1px solid red"
                        ,
                    }}
                    className={`relative focus:outline-none ${
                        !errors.passwordConfirm
                            ? "focus:shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]"
                            : "focus:shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]"
                    } text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
                    type={passwordShown ? "text" : "password"}

                    placeholder='Confirm password'
                    {...register("password", {
                        required: "Password cannot be empty",
                        minLength: {
                            value: 9,
                            message: "Password must be at least 9 characters",
                        },
                        maxLength: {
                            value: 30,
                            message: "Password must not be more than 30 characters",
                        },
                        pattern: {
                            value: secondPattern,
                            message:
                                "Password has to start with a letter, can contain numbers. No spaces and special characters allowed",
                        },
                    })}
                />
                <span
                    className={`absolute ${
                        errors.passwordConfirm ? "bottom-11" : "bottom-3.5"
                    } right-3 cursor-pointer`}
                    onClick={togglePassword}>
                    {passwordShown ? <FiEyeOff /> : <FiEye />}
                </span>
                {errors.passwordConfirm && (
                    <p
                        className='right-0 bottom-[-37px] italic text-sm mt-2'
                        style={{ color: "red" }}>
                        {errors.passwordConfirm?.message}
                    </p>
                )}
            </div>
            <button
                className='mt-[150px] md:my-[85px] text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]'
                type='submit'>
                {isSubmit ? "Loading..." : "Submit"}
            </button>
        </form>
        </>
  )
}
