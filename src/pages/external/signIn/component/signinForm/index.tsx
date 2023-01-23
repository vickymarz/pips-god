import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import userServices from "services/userServices";

type FormValues = {
    email: string;
    password: string;
  };

export const SigninForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();

    const navigate = useNavigate();

	const [invalidCredentials, setInvalidCredentials] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);
	const [accountCreated, setAccountCreated] = useState(false);
	const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		reset();
		setIsSubmit(true);

		const result = await userServices.login(data);

		if (result.status === "fail") {
			setIsSubmit(false);
			setInvalidCredentials(true);
		}

		if (result.status === "success") {
			setAccountCreated(true);
			localStorage.setItem("jwt-token", result.accessToken);
			setTimeout(() => {
				navigate("/dashboard");
			}, 1000);
		}
	};

	const errorMsg = () => {
		let element;
		if (accountCreated) {
			element = (
				<p className='mt-4 text-xl text-green-600 text-center'>
					Login Successful!
				</p>
			);
		} else if (invalidCredentials) {
			element = (
				<p className='mt-4 text-xl text-red-600 text-center'>
					Incorrect Email or Password
				</p>
			);
		}
		return element;
	};


    const handleCheckbox = () => {
        setIsChecked(!isChecked);
      };

	const pattern =
		// eslint-disable-next-line no-useless-escape
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const secondPattern = /^[a-z][a-z0-9]+$/gi;

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
            <div className='relative flex flex-col justify-start items-start gap-y-[8px] md:gap-y-[23px] w-full'>
                <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='password'>
                   Enter Password
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
            <div className="flex justify-between mt-[0] md:mt-[20px]  w-full">
                <div className='flex justify-start items-center gap-x-[9px]'>
                   <input type="checkbox" className={`appearance-none w-[16px] md:w-[26px] h-[16px] md:h-[26px] relative outline-none bg-transparent border border-[#000] rounded-[3.7px] ${isChecked ? 'relative' : ''}`} checked={isChecked} onChange={handleCheckbox} id={`${isChecked ? 'checkbox' : ''}`} />
                   <span className="text-[1rem] md:text-[16px] font-medium text-[#8B8B8B]">Remember me</span>
                </div>
                <p className="hidden md:block text-[#19275E] text-[1rem] md:text-[1.12rem] font-medium">Forget password?</p>
            </div>
            <p className="md:hidden mt-[15px] text-[#19275E] text-[1rem] md:text-[1.12rem] font-medium">Forget password?</p>
            <button
                className='mt-[150px] md:my-[85px] text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]'
                type='submit'>
                {isSubmit ? "Loading..." : "Sign In"}
            </button>
        </form>
    </>
  )
}
