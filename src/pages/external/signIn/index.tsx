import { SigninForm } from "./component"
import { AuthHeader } from "components";

export const SignIn = () => {
	return (
		<section className='w-full min-h-screen bg-authImg bg-cover bg-no-repeat'>
			<div className="w-full min-h-screen flex items-center justify-center bg-[#ffffffe6] px-[33px] pt-[45px]">
			<div className='flex flex-col justify-center items-center gap-y-[1.25rem]'>
				<AuthHeader
				title="Sign In"
				text="Hi, we are glad to have you back!"
				/>
				<SigninForm />
			</div>
			</div>
		</section>
	);
};

