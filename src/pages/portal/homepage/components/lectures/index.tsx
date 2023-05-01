import { LessonOverview } from "./components";
import ReactPlayer from 'react-player'
import { Button } from "components"
import { useState } from "react";
import { PortalContextUse } from 'context';

export const Lectures = () => {
  const [status, setStatus] = useState("overview");
  const { module } = PortalContextUse()

  return (
    <div className="w-full">
      <h2 className='md:hidden mb-[21px] text-[#0D142E] text-[20px] font-bold'>Get Started in Forex Trading.</h2>
        <div className="w-full">
          {module?.code === 403 ?
          <div className="w-full h-[300px] bg-[#F2F3F7] flex flex-col justify-center items-center">
            <p className="text-[#0D142E] text-[20px] font-bold">
              Sorry, this module is currently not available.
            </p>
            <p className="text-[#0D142E] text-[20px] font-bold">
              Kindly check back after 24 hrs of completing the previous module.
            </p>
          </div>
          :
          <ReactPlayer url={module?.course_resources !== undefined ? module?.course_resources[0].url : ''} controls width="100%" light={ module?.course_resources !== undefined ? module?.course_resources[0].thumbnail : ''}/>
          }

        </div>
       <ul className="flex justify-start items-center gap-x-[32px] md:gap-x-[45px] border-b border-[#D3D3D3] mt-[20px]">
        <li>
            <Button type='button'
                className={`${
                  status === "overview"
                    ? "border-b-[3px] border-[#0D142E] font-bbold text-[#19275E]"
                    : "text-[#53717A]"
                }'outline-0 focus:outline-0 border-0 text-[#53717A] text-[14px] md:text-[1.37rem] font-bold`}
                onClick={() => setStatus("overview")}
              >
                Overview
              </Button>
            </li>
            {/* <li>
              <Button
                type="button"
                className={`${
                  status === "transcript"
                    ? "border-b-[3px] border-[#0D142E] font-semibold text-[#19275E]"
                    : "text-[#53717A]"
                }'outline-0 border-0 focus:outline-0 text-[#53717A] text-[14px] md:text-[1.37rem] font-bold`}
                onClick={() => setStatus("transcript")}
              >
               Transcript
              </Button>
            </li> */}
            {/* <li>
              <Button
                type="button"
                className={`${
                  status === "lessons"
                    ? "border-b-[3px] border-[#0D142E] font-semibold text-[#19275E]"
                    : "text-[#53717A]"
                }'outline-0 border-0 focus:outline-0 text-[#53717A] text-[14px] md:text-[1.37rem] font-bold`}
                onClick={() => setStatus("lessons")}
              >
               Lesson tools
              </Button>
            </li> */}
          </ul>
          {status === "overview" && (
            <LessonOverview />
          )}
          {/* {status === "transcript" && (
            <Transcript />
          )}
          {status === "lesson" && (
            <Lessons />
          )} */}
    </div>
  )
}

