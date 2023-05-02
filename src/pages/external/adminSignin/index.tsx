import { AdminSigninForm } from "./components"
import { AuthHeader } from "components";

export const AdminSignIn = () => {
	return (
		<section className='w-full min-h-screen bg-authImg md:bg-none bg-cover bg-no-repeat'>
			<div className="w-full min-h-screen flex items-center md:justify-start justify-center bg-[#ffffffe6] md:bg-[#F8FAFC]  px-[33px] md:px-[38px] pt-[45px]">
			<div className='flex flex-col justify-center items-center md:items-start gap-y-[1.25rem] md:gap-y-[4rem] md:w-full'>
				<AuthHeader
				title="Admin SignIn"
				text="Hi Admin, welcome back!"
				/>
				<AdminSigninForm />
			</div>
			</div>
		</section>
	);
};

