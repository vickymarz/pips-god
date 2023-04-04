import {Videos, Readings} from './components'
import { Button } from "components";
import { useState } from "react";
import { useGetModules } from 'hooks'

type ModuleType = {
  docs: {
    id: number,
    title: string
    course_resources: {
      type: string
      url: string
      thumbnail: string
    }[]
  }[]
  pages: number
  total: number
}

export const Courses = () => {
  const [status, setStatus] = useState("videos");
  const { data } = useGetModules()
  const responseData = data as ModuleType

  return (
    <div>
        <ul className="flex justify-start items-center gap-x-[45px] mt-[20px]">
        <li>
            <Button type='button'
                className={`${
                  status === "videos"
                    ? "px-[16px] py-[14px] font-semibold text-[#19275E] text-[1.37rem]"
                    : "text-[#53717A]"
                }'outline-0 focus:outline-none border-0  bg-inherit text-[1.37rem] font-medium'`}
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
                    ? "px-[16px] py-[14px] font-semibold text-[#19275E] text-[1.37rem]"
                    : "text-[#53717A]"
                }' outline-0 focus:outline-none border-0 bg-inherit text-[1.37rem] font-medium'`}
                onClick={() => setStatus("readings")}
              >
               Readings
              </Button>
            </li>
          </ul>
          <div>
          {status === "videos" && (
           <Videos data={responseData} />
          )}
          {status === "readings" && (
            <Readings data={responseData} />
          )}
        </div>
    </div>
  )
}

