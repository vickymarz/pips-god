import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import userServices from "services/userServices";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

type FormValues = {
    email: string;
    password: string;
  };

export const AdminSigninForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();

  const navigate = useNavigate();

	const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};

    const {mutate, data, isLoading, isError} = useMutation(userServices.adminLogin, {
      onSuccess: (data) => {
          if (data?.tokens ) {
            localStorage.setItem("admin-tokens", JSON.stringify(data.tokens));
            setTimeout(() => {
              navigate("/admin", {state: data?.user});
            }, 1000);
          }
        },
    })

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		reset();
		mutate({'email': data.email, 'password': data.password, userRole: "admin" })
	};


	const errorMsg = () => {
		let element;
		if (data?.tokens) {
			element = (
				<p className='w-full mt-4 md:text-[20px] text-green-600 text-center'>
					Login Successful!
				</p>
			);
		} else if (isError || data?.code === 401) {
			element = (
				<p className='w-full mt-4 md:text-[20px] text-red-600 text-center'>
					Incorrect Email or Password
				</p>
			);
		} else if (data?.code === 403) {
			element = (
				<p className='w-full mt-4 md:text-[20px] text-red-600 text-center'>
					You are not yet registered as an admin
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
	const secondPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{9,20}$/;

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
            borderBottom: errors.email && "2px solid red"
          }}
          className={`focus:outline-none text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
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
          <p className='italic text-sm' style={{ color: "red" }}>
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
            borderBottom: errors.password && "2px solid red"
          }}
        className={`relative outline-0 focus:outline-none text-[#666666] text-[0.75rem] md:text-[1rem] w-full py-[12px] md:py-[0] md:pb-[7px] px-[10px] md:px-[0] rounded-lg md:rounded-none bg-transparent border border-[#666666] md:border-x-0 md:border-t-0 border-2`}
            type={passwordShown ? "text" : "password"}
            id="password"
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
                  "Password must have at least 9 characters. It must include a letter, a number and a special character",
                },
            })}
        />
        <span
            className={`absolute ${
              errors.password ? "top-[45px]" : "bottom-3.5"
            } right-3 cursor-pointer`}
            onClick={togglePassword}>
            {passwordShown ? <FiEyeOff /> : <FiEye />}
        </span>
        {errors.password && (
            <p
                className='right-0 bottom-[-37px] italic text-sm'
                style={{ color: "red" }}>
                {errors.password?.message}
            </p>
        )}
      </div>

      <div className="flex justify-between mt-[0] w-full">
        <div className='flex justify-start items-center gap-x-[9px]'>
          <input type="checkbox" className={`appearance-none w-[16px] md:w-[26px] h-[16px] md:h-[26px] relative outline-none bg-transparent border border-[#000] rounded-[3.7px] ${isChecked ? 'relative' : ''}`} checked={isChecked} onChange={handleCheckbox} id={`${isChecked ? 'checkbox' : ''}`} />
          <span className="text-[1rem] md:text-[16px] font-medium text-[#8B8B8B]">Remember me</span>
        </div>
        <Link to='/forgot_password' className="hidden md:block text-[#19275E] text-[1rem] md:text-[1.12rem] font-medium">Forget password?</Link>
      </div>
      <Link to={'/forgot_password'} className="md:hidden mt-[15px] text-[#19275E] text-[1rem] md:text-[1.12rem] font-medium">Forget password?</Link>
      <button
        className='mt-[150px] md:my-[60px] text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[4px] py-[0.75rem] px-[1.56rem] tracking-[0.02em]'
        type='submit'>
        {isLoading ? "Loading..." : "Sign In"}
      </button>
    </form>
  </>
  )
}
