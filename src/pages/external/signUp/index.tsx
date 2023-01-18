import { SignupForm } from "./component"
import { AuthHeader } from "components";
import { Link } from "react-router-dom";

export const Signup = () => {
	return (
		<section className='w-full min-h-screen bg-authImg bg-cover bg-no-repeat'>
			<div className="w-full min-h-screen flex items-center justify-center bg-[#ffffffe6] px-[33px] pt-[45px]">
			<div className='flex flex-col justify-center items-center gap-y-[1.25rem]'>
				<AuthHeader
				title="Create Account"
				text="Join our amazing community of like minds."
				/>
				<SignupForm />
				<Link to='/sign_in'>
					{" "}
					<p className=' mt-[5px] mb-[10px] font-medium text-[14px] text-center text-[#666666]'>
						Have an account? <span className='text-[#0D142E]'>Sign in</span>
					</p>
				</Link>
			</div>
			<div
				className='hidden tablet:block tablet:w-6/12 bg-cover bg-gray-100'>
			</div>
			</div>
		</section>
	);
};

