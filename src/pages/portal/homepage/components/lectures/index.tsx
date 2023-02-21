import { LessonOverview, Lessons, Transcript } from "./components";
import { Button } from "components"
import { useState } from "react";
import { GetCourseContextUse } from 'context';

export const Lectures = () => {
  const {course} = GetCourseContextUse()
  console.log(course)
    const [status, setStatus] = useState("overview");
  return (
    <div className="w-full">
      <h2 className='md:hidden mb-[21px] text-[#0D142E] text-[20px] font-bold'>Get Started in Forex Trading.</h2>
        <video controls width="100%" poster=
         "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png">
        <source src="/video-example.webm" type="video/webm" />
        <source src="/video-example.mp4" type="video/mp4" />
         Sorry, your browser doesn't support videos.
       </video>
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
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
          {status === "overview" && (
            <LessonOverview />
          )}
          {status === "transcript" && (
            <Transcript />
          )}
          {status === "lesson" && (
            <Lessons />
          )}
    </div>
  )
}

