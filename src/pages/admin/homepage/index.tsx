import { useState } from "react";
import { AdminHeader, Courses, Overview } from "./components"
import { Button, Logo } from "components"

export const Admin = () => {
  const [status, setStatus] = useState("overview");

  return (
    <div className='px-6 py-[24px] md:px-[80px]'>
      <Logo />
      <AdminHeader />
      <ul className="flex justify-start items-center gap-x-[45px] border border-[#D3D3D3]">
        <li>
            <Button type='button'
                className={`${
                  status === "overview"
                    ? "px-[16px] py-[14px] bg-[#F5F9FA] border-[3px] border-[#0D142E] font-semibold text-[#19275E] text-[1.37rem]"
                    : ""
                }'outline-0 border-0 text-[#53717A] bg-inherit text-[1.37rem] font-medium'`}
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
                    ? "px-[16px] py-[14px] bg-[#F5F9FA] border-[3px] border-[#0D142E] font-semibold text-[#19275E] text-[1.37rem]"
                    : ""
                }' outline-0 border-0 text-[#53717A] bg-inherit text-[1.37rem] font-medium'`}
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
  )
}

