import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import userServices from "services/userServices";
import card from '../../../../../assets/images/card.png'

type FormValues = {
    email: string;
};

export const VipPaymentForm = ({id}:{id:string}) => {
    const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();

    const {mutate, isError, isLoading} = useMutation(userServices.initializeTransaction, {
        onSuccess: (data) => {
			setTimeout(() => {
                window.location.href = data.authorizationUrl;
			}, 1000);
      }
    })

	const errorMsg = () => {
		let element;
		 if (isError) {
			element = (
                <div className="w-full justify-center items-center">
                    <p className='mt-4 text-red-600 text-center'>
                        Kindly try again, Thank!
                    </p>
                </div>
			);
		}

		 if (isLoading) {
			element = (
                <div className="w-full justify-center items-center">
                    <p className='mt-4 text-green-600 text-center md:text-[20px]'>
                       Transaction initialization in progress...
                    </p>
                </div>
			);
		}
		return element;
	};

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		reset();
		mutate({...data, "subscriptionPlanName": "vip_signals"})
	};

	const pattern =
		// eslint-disable-next-line no-useless-escape
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
        {errorMsg()}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-start items-center w-full gap-y-[1rem] mt-[20px]' id={id}>
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
        </form>
        <div className="hidden md:flex justify-center items-center w-full0 mt-[105px] md:mt-[80px]">
            <img src={card} alt="" className="md:object-scale-down"/>
        </div>
    </>
  )
}


