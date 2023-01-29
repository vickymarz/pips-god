import { AnalyticsCard, AnalyticsGraph } from "./components"

export const Analytics = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-y-[32x]">
      <div className="flex justify-between items-center ">
        <div className='flex flex-col justify-start items-center gap-y-[10px]'>
          <h2 className='text-[#19275E] font-semibold'>
            Analytics
          </h2>
          <p className='text-[#8B8B8B]'>
            See your website statistics
          </p>
        </div>
        <div className="border-[8px] bg-[#F5F9FA] py-[14px] px-[16px] text-[#19275E] font-semibold">
          Dec 21st 2022- Jan 14th 2023
        </div>
      </div>
      <AnalyticsCard />
      <AnalyticsGraph />
    </div>
  )
}
