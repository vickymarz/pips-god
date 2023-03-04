import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import userServices from "services/userServices";
import { useMutation } from "react-query";
import { useTransactions } from 'hooks'
import { VerifyPopup } from "../verifyPopUp";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobile: string;
    address: string;
};

export const SignupForm = () => {
    const [verify, setVerify] = useState(false)
    const { reference } = useParams()
    const navigate = useNavigate();

      const onSuccess = (data:any) => {
        if (data.code === 404 || isError) {
          setVerify(true)
          setTimeout(() => {
             navigate('/')
          }, 3000);
        }
    }
    const { isError } = useTransactions(reference, onSuccess)

    const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();

	const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};


    const {mutate, isSuccess, isLoading, error, data} = useMutation(userServices.register, {
        onSuccess: (data) => {
          if (data?.code !== 400 && data?.code === 200) {
            localStorage.setItem("jwt-token", data.accessToken);
			setTimeout(() => {
				navigate("/dashboard");
			}, 1000);
          }
        },
    })

    console.log(data, isSuccess, error)
	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		reset();
		mutate({...data, transactionReference: reference})
	};

	const errorMsg = () => {
		let element;
		if (data?.code === 200) {
			element = (
				<p className='mt-4 text-xl text-green-600 text-center'>
					Registration completed!
				</p>
			);
		} else if (error instanceof Error) {
			element = (
				<p className='mt-4 text-xl text-red-600 text-center'>
					{error?.message}
				</p>
			);
		}
		return element;
	};

	const pattern =
		// eslint-disable-next-line no-useless-escape
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const secondPattern = /^[a-z][a-z0-9]+$/gi;
	const thirdPattern = /^[a-z][a-z0-9\s]+$/gi;

  return (
    <>
        {errorMsg()}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-start items-center w-full gap-y-[1rem] md:gap-y-[2.12rem]'>
          <div className="w-full flex gap-y-[1rem] md:gap-y-[2.12rem] md:gap-x-[2.12rem] flex-col md:flex-row justify-start items-start">
            <div className='relative flex flex-col justify-start items-start gap-y-[8px] w-full'>
                <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='firstName'>
                    First Name
                </label>
                <input
                    style={{
                        borderBottom: errors.firstName && "2px solid red",
                    }}
                    className={`focus:outline-none text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2 `}
                    type='text'
                    id="firstName"
                    placeholder='Enter your first name'
                    {...register("firstName", {
                        required: "First name cannot be empty",
                        minLength: {
                            value: 3,
                            message: "First name must be at least 3 characters",
                        },
                        maxLength: {
                            value: 30,
                            message: "First name must not be more than 30 characters",
                        },

                        pattern: {
                            value: thirdPattern,
                            message:
                                "First name must start with a letter and no special characters are allowed",
                        },
                    })}
                />
                {errors.firstName && (
                    <p
                        className='right-0 bottom-[-37px] italic text-sm mt-2'
                        style={{ color: "red" }}>
                        {errors.firstName?.message}
                    </p>
                )}
            </div>
            <div className='relative flex flex-col justify-start items-start gap-y-[8px] w-full'>
                <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='lastName'>
                    Last Name
                </label>
                <input
                    style={{
                        borderBottom: errors.lastName && "2px solid red",
                    }}
                    className={`focus:outline-none text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2 `}
                    type='text'
                    id="lastName"
                    placeholder='Enter your last name'
                    {...register("lastName", {
                        required: "last name cannot be empty",
                        minLength: {
                            value: 3,
                            message: "Last name must be at least 3 characters",
                        },
                        maxLength: {
                            value: 30,
                            message: "Last name must not be more than 30 characters",
                        },

                        pattern: {
                            value: thirdPattern,
                            message:
                                "Last name must start with a letter and no special characters are allowed",
                        },
                    })}
                />
                {errors.lastName && (
                    <p
                        className='right-0 bottom-[-37px] italic text-sm mt-2'
                        style={{ color: "red" }}>
                        {errors.lastName?.message}
                    </p>
                )}
            </div>

            </div>
            <div className='relative flex flex-col justify-start items-start w-full gap-y-[8px]'>
                <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='email'>
                    Email
                </label>
                <input
                    style={{
                        borderBottom: errors.email && "2px solid red"
                    }}
                    className={`focus:outline-none  text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
                    type='email'
                    id="email"
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

            <div className='relative flex flex-col justify-start items-start gap-y-[8px] w-full'>
                <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='mobile'>
                    Phone Number
                </label>
                <input
                    style={{
                        borderBottom: errors.mobile && "2px solid red"
                    }}
                    className={`focus:outline-none text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
                    type='number'
                    id="mobile"
                    placeholder='Enter your phone number'
                    {...register("mobile", {
                        required: "Phone number cannot be empty",
                        minLength: {
                            value: 5,
                            message: "Phone number must be at least 5 digits",
                        },
                        maxLength: {
                            value: 11,
                            message: "phone number must not be more than 11 digits",
                        }
                    })}
                />
                {errors.mobile && (
                    <p
                        className='right-0 bottom-[-37px] italic text-sm mt-2'
                        style={{ color: "red" }}>
                        {errors.mobile?.message}
                    </p>
                )}
            </div>

            <div className='relative flex flex-col justify-start items-start gap-y-[8px] w-full'>
                <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='password'>
                   Create Password
                </label>
                <input
                    style={{
                        borderBottom: errors.password
                            && "2px solid red"
                        ,
                    }}
                    className={`relative focus:outline-none text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
                    type={passwordShown ? "text" : "password"}
                    id="password"
                    placeholder='Create password'
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

            <div className='relative flex flex-col justify-start items-start gap-y-[8px] w-full'>
                <label className='pb-0 md:text-[#888888] text-[#666666] md:text-[1.25rem] text-[1rem] font-medium' htmlFor='address'>
                    Address
                </label>
                <input
                    style={{
                        borderBottom: errors.address && "2px solid red"
                    }}
                    className={`focus:outline-none text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
                    type='text'
                    id="address"
                    placeholder='Enter your residential address'
                    {...register("address", {
                        required: "Address cannot be empty",
                        minLength: {
                            value: 10,
                            message: "Address must be at least 10 characters",
                        },
                        maxLength: {
                            value: 50,
                            message: "firstName must not be more than 50 characters",
                        },
                    })}
                />
                {errors.address && (
                    <p
                        className='right-0 bottom-[-37px] italic text-sm mt-2'
                        style={{ color: "red" }}>
                        {errors.address?.message}
                    </p>
                )}
            </div>
            <div>
            <button
                className='font-productSans text-[1.06rem] font-bold mt-5 text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[3.8rem] tracking-[0.02em]'
                type='submit'>
                {isLoading ? "Loading..." : "Create Account"}
            </button>

            </div>
        </form>
        {verify && <VerifyPopup verify={verify} />}
    </>
  )
}
