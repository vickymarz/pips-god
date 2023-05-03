import { useState } from "react";
import { AdminHeader, Courses, Overview } from "./components"
import { Button, Logo } from "components"
import { CourseModal } from "./components/courses/components";
import { CreateCourseContextUse } from 'context'
import userServices from "services/userServices";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom"

export const Admin = () => {
  const [status, setStatus] = useState("overview");
  const {modal }  = CreateCourseContextUse()
  const navigate = useNavigate()
  const tokens = JSON.parse(localStorage.getItem('ATS') || '{}')
  const refreshToken = tokens?.refresh?.token

   const { mutate, isSuccess } = useMutation(userServices.logout)

   if(isSuccess) {
      localStorage.removeItem('ATS')
      navigate('/admin-login')
   }

   const handleLogout = () => {
    mutate({'refreshToken': refreshToken})
  }

  return (
    <>
    <div className='px-6 py-[24px] md:px-[80px]'>
      <div className='flex justify-between items-center w-full'>
        <Logo />
        <Button type="button" onClick={handleLogout} className='font-productSans rounded-[8px] bg-[#19275E] text-[#fff] py-[0.5rem] px-[0.9rem] text-[0.9rem] flex justify-center items-center gap-x-[10px]'>
         Logout
        </Button>
      </div>
      <AdminHeader />
      <ul className="flex justify-start items-center gap-x-[45px] border-b border-[#D3D3D3] mt-[20px]">
        <li>
            <Button type='button'
                className={`${
                  status === "overview"
                    ? "px-[16px] py-[14px] bg-[#F5F9FA] border-b-[3px] border-[#0D142E] font-semibold text-[#19275E]"
                    : "text-[#53717A]"
                }'outline-0 focus:outline-0 border-0 text-[#53717A] text-[1.37rem] font-medium'`}
                onClick={() => setStatus("overview")}
              >
                Overview
              </Button>
            </li>
            <li>
              <Button
                type="button"
                className={`${
                  status === "courses"
                    ? "px-[16px] py-[14px] bg-[#F5F9FA] border-b-[3px] border-[#0D142E] font-semibold text-[#19275E]"
                    : "text-[#53717A]"
                }'outline-0 border-0 focus:outline-0 text-[#53717A] text-[1.37rem] font-medium'`}
                onClick={() => setStatus("courses")}
              >
              Modules
              </Button>
            </li>
          </ul>
          <div>
          {status === "overview" && (
            <Overview />
          )}
          {status === "courses" && (
            <Courses />
          )}
        </div>
    </div>
    {modal && <CourseModal />}

    </>
  )
}

