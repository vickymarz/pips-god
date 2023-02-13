import { useState } from "react";
import { AdminHeader, Courses, Overview } from "./components"
import { Button, Logo } from "components"
import { CourseModal } from "./components/courses/components";
import {CreateCourseContextUse} from 'context'

export const Admin = () => {
  const [status, setStatus] = useState("overview");
  // const [modal, setModal] = useState(false)
  const {modal }  = CreateCourseContextUse()

  return (
    <>
    <div className='px-6 py-[24px] md:px-[80px]'>
      <Logo />
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
               Courses
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

