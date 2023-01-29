
export const AnalyticsCard = () => {
  return (
    <div className="grid grid-cols-4 justify-start">
         <div className="text-[#0D142E] rounded-[8px] border border-[#D3D3D3] bg-[#fff] p-[20px] flex flex-col gap-y-[14px]">
          <span>Total Users</span>
          <p className="text-[1.37rem] font-semibold">1000</p>
         </div>
         <div className="text-[#0D142E] rounded-[8px] border border-[#D3D3D3] bg-[#fff] p-[20px] flex flex-col gap-y-[14px]">
          <span>VIP SIgnal Members</span>
          <p className="text-[1.37rem] font-semibold">300</p>
         </div>
         <div className="text-[#0D142E] rounded-[8px] border border-[#D3D3D3] bg-[#fff] p-[20px] flex flex-col gap-y-[14px]">
          <span>Mentorship Members</span>
          <p className="text-[1.37rem] font-semibold">600</p>
         </div>
         <div className="text-[#0D142E] rounded-[8px] border border-[#D3D3D3] bg-[#fff] p-[20px] flex flex-col gap-y-[14px]">
          <span>Completed Training</span>
          <p className="text-[1.37rem] font-semibold">100</p>
         </div>
      </div>
  )
}

