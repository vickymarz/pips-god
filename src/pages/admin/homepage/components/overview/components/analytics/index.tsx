import { AnalyticsCard, AnalyticsGraph } from "./components"

export const Analytics = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-y-[32px] mt-[16px]">
      <div className="flex justify-between items-center w-full">
        <div className='flex flex-col justify-start items-start gap-y-[10px]'>
          <h2 className='text-[#19275E] font-semibold'>
            Analytics
          </h2>
          <p className='text-[#8B8B8B]'>
            See your website statistics
          </p>
        </div>
        <div className="rounded-[8px] border-0 outline-0 bg-[#F5F9FA] py-[14px] px-[16px] text-[#19275E] font-semibold">
          Dec 21st 2022- Jan 14th 2023
        </div>
      </div>
      <AnalyticsCard />
      <AnalyticsGraph />
    </div>
  )
}
