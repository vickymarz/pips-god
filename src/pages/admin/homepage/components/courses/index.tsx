import {Videos, Readings} from './components'
import { Button } from "components";
import { useState } from "react";

export const Courses = () => {
  const [status, setStatus] = useState("videos");
  return (
    <div>
        <ul className="flex justify-start items-center gap-x-[45px] border border-[#D3D3D3]">
        <li>
            <Button type='button'
                className={`${
                  status === "videos"
                    ? "px-[16px] py-[14px] bg-[#F5F9FA] border-[3px] border-[#0D142E] font-semibold text-[#19275E] text-[1.37rem]"
                    : ""
                }'outline-0 border-0 text-[#53717A] bg-inherit text-[1.37rem] font-medium'`}
                onClick={() => setStatus("videos")}
              >
                Videos
              </Button>
            </li>
            <li>
              <Button
                type="button"
                className={`${
                  status === "readings"
                    ? "px-[16px] py-[14px] bg-[#F5F9FA] border-[3px] border-[#0D142E] font-semibold text-[#19275E] text-[1.37rem]"
                    : ""
                }' outline-0 border-0 text-[#53717A] bg-inherit text-[1.37rem] font-medium'`}
                onClick={() => setStatus("readings")}
              >
               Readings
              </Button>
            </li>
          </ul>
          <div>
          {status === "videos" && (
           <Videos />
          )}
          {status === "readings" && (
            <Readings />
          )}
        </div>
    </div>
  )
}

