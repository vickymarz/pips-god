import { Link } from "react-router-dom"


export const AdminSignupFooter = () => {
  return (
    <div className="flex justify-center items-center w-full mb-[20px]">
    <Link to='/admin_login' className="flex justify-center items-start gap-x-[10px]">
        <span className="hidden md:inline-block align-top">________________</span>
        <p className=' mt-[5px] mb-[10px] font-medium text-[0.87rem] md:text-[1.31rem] text-center text-[#666666]'>
           Are you an admin? <span className='text-[#0D142E]'>Sign In</span>
        </p>
        <span className="hidden md:inline-block align-top">________________</span>
    </Link>
    </div>
  )
}

