import { AdminSignupForm, AdminSignupFooter } from "./component"
import { AuthHeader } from "components";
import cap from '../../../assets/images/white-cap.png'

export const Signup = () => {
	return (
		<section className='w-full min-h-screen bg-authImg md:bg-none bg-cover bg-no-repeat flex justify-start'>
			<div className='hidden md:block bg-authDesktop min-h-screen basis-2/4 bg-no-repeat md:pt-[91px] md:px-[58px]'>
				<div className="w-[111px] h-[73px] mb-[43px]">
				   <img src={cap} alt="cap" />
				</div>
				<h2 className="pr-[80px] font-bold text-[#fff] leading-[2.43rem] text-[2.12rem] font-productSans">You will be joining an an administrator of this platform</h2>
			</div>
			<div className="md:basis-2/4 w-full min-h-screen flex items-center justify-center md:justify-start bg-[#ffffffe6] px-[33px] md:px-[37px] pt-[45px]">
				<div className='flex flex-col justify-center md:items-start items-center gap-y-[1.25rem] md:gap-y-[4rem] md:w-full'>
					<AuthHeader
					title="Create Admin Account"
					text="Help and manage this community of like minds."
					/>
					<AdminSignupForm />
		            <AdminSignupFooter />
				</div>
			</div>
		</section>
	);
};

