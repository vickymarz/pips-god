import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import userServices from "services/userServices";
import card from '../../../../../assets/images/card.png'

type FormValues = {
    fullName: string;
    telegramUsername: string;
    email: string;
    amount: number;
  };

export const VipPaymentForm = ({id}:{id:string}) => {
    const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();

    const navigate = useNavigate();

    const {mutate, isSuccess, isError} = useMutation(userServices.vipPayment, {
        onSuccess: (data) => {
            localStorage.setItem("jwt-token", data.accessToken);
			setTimeout(() => {
				navigate("/dashboard");
			}, 1000);
        },
    })

	const errorMsg = () => {
		let element;
		if (isSuccess) {
			element = (
				<p className='mt-4 text-xl text-green-600 text-center'>
					Payment Initialized!
				</p>
			);
		} else if (isError) {
			element = (
				<p className='mt-4 text-xl text-red-600 text-center'>
					Kindly try again
				</p>
			);
		}
		return element;
	};

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		reset();
		mutate(data)
	};

	const pattern =
		// eslint-disable-next-line no-useless-escape
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const thirdPattern = /^[a-z][a-z0-9\s]+$/gi;

  return (
    <>
        {errorMsg()}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-start items-center w-full gap-y-[1rem] mt-[20px]' id={id}>
            <div className='relative flex flex-col justify-start items-start gap-y-[8px] w-full'>
                <label className='pb-0 text-[#19275E] md:text-[1.25rem] text-[1rem] ' htmlFor='fullName'>
                    Full Name
                </label>
                <input
                    style={{
                        border: errors.fullName && "1px solid red",
                    }}
                    className={`focus:outline-none focus:${
                        !errors.fullName
                            ? "shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]"
                            : "shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]"
                    }  w-full pr-[80px] text-[#666666] text-[0.75rem] md:text-[1rem] py-[12px] px-[10px] rounded-[10px] bg-transparent border border-[#000000]`}
                    type='text'
                    id='fullName'
                    placeholder='Enter your full name'
                    {...register("fullName", {
                        required: "Name cannot be empty",
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters",
                        },
                        maxLength: {
                            value: 30,
                            message: "Name must not be more than 30 characters",
                        },

                        pattern: {
                            value: thirdPattern,
                            message:
                                "Name must start with a letter and no special characters are allowed",
                        },
                    })}
                />
                {errors.fullName && (
                    <p
                        className='right-0 bottom-[-37px] italic text-sm mt-2'
                        style={{ color: "red" }}>
                        {errors.fullName?.message}
                    </p>
                )}
            </div>
            <div className='relative flex flex-col justify-start items-start gap-y-[8px] w-full'>
                <label className='pb-0 text-[#19275E] md:text-[1.25rem] text-[1rem] ' htmlFor='telegram'>
                    Telegram Username
                </label>
                <input
                    style={{
                        border: errors.telegramUsername && "1px solid red",
                    }}
                    className={`focus:outline-none focus:${
                        !errors.telegramUsername
                            ? "shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]"
                            : "shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]"
                    }  w-full pr-[80px] text-[#666666] text-[0.75rem] md:text-[1rem] py-[12px] px-[10px] rounded-[10px] bg-transparent border border-[#000000]`}
                    type='text'
                    id="telegram"
                    placeholder='Enter your telegram username'
                    {...register("telegramUsername", {
                        required: "Telegram username cannot be empty",
                        minLength: {
                            value: 3,
                            message: "Telegram username must be at least 3 characters",
                        },
                        maxLength: {
                            value: 10,
                            message: "Telegram username must not be more than 10 characters",
                        },
                    })}
                />
                {errors.telegramUsername && (
                    <p
                        className='right-0 bottom-[-37px] italic text-sm mt-2'
                        style={{ color: "red" }}>
                        {errors.telegramUsername?.message}
                    </p>
                )}
            </div>

            <div className='relative flex flex-col justify-start items-start w-full gap-y-[8px]'>
                <label className='pb-0 text-[#19275E] md:text-[1.25rem] text-[1rem] ' htmlFor='email'>
                    Email
                </label>

                <input
                    style={{
                        border: errors.email && "1px solid red"
                    }}
                    className={`focus:outline-none focus:${
                        !errors.email
                            ? "shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]"
                            : "shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]"
                    }  text-[#666666] w-full text-[0.75rem] md:text-[1rem] pr-[80px] py-[12px] px-[10px] rounded-[10px] bg-transparent border border-[#000000]`}
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
                <label className='pb-0 text-[#19275E] md:text-[1.25rem] text-[1rem] ' htmlFor='amount'>
                    Amount
                </label>
                <input
                    style={{
                        border: errors.amount && "1px solid red"
                    }}
                    className={`focus:outline-none focus:${
                        !errors.amount
                            ? "shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]"
                            : "shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]"
                    }  text-[#666666] w-full text-[0.75rem] md:text-[1rem] pr-[80px] py-[12px] px-[10px] rounded-[10px] bg-transparent border border-[#000000]`}
                    type='number'
                    placeholder='Enter amount'
                    id="amount"
                    {...register("amount", {
                        required: "Amount cannot be empty",
                        minLength: {
                            value: 3,
                            message: "Amount must be least 3 numbers",
                        },
                        maxLength: {
                            value: 3,
                            message: "Amount must be least 3 numbers",
                        }
                    })}
                />
                {errors.amount && (
                    <p
                        className='right-0 bottom-[-37px] italic text-sm mt-2'
                        style={{ color: "red" }}>
                        {errors.amount?.message}
                    </p>
                )}
            </div>
        </form>
        <div className="hidden md:flex justify-center items-center w-full mt-[105px]">
            <img src={card} alt="" />
        </div>
    </>
  )
}


