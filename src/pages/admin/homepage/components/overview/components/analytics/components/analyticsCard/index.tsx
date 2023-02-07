import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {useAnalyticsData} from 'hooks'
export const AnalyticsCard = () => {
   const { data } = useAnalyticsData()

   const percentage = (members:number) => {
      const percent = (data?.total_users/members) * 100
      return percent
   }

  return (
    <div className="grid grid-cols-4 justify-between gap-x-[32px] w-full">
         <div className="text-[#0D142E] rounded-[8px] border border-[#D3D3D3] bg-[#fff] p-[20px] flex flex-col gap-y-[14px] relative">
            <div className='flex flex-col gap-y-[10px] mb-[22px]'>
              <span>Total Users</span>
              <p className="text-[1.37rem] font-semibold">{`${'0' || data?.total_users}` }</p>
            </div>
            <p className="absolute bottom-[22px] right-[22px] rounded-[50px] bg-[#D5E5FA] w-[65px]  p-[8px]  text-[#19275E] text-[12px] font-semibold flex justify-start items-center gap-x-[10px]">
              <span> <FontAwesomeIcon icon={faArrowUp} /></span>
              <span>{`${'100%' || `${data?.total_users}%`}` }</span>
            </p>
         </div>
         <div className="text-[#0D142E] rounded-[8px] border border-[#D3D3D3] bg-[#fff] p-[20px] flex flex-col gap-y-[14px] relative">
          <div className='flex flex-col gap-y-[10px] mb-[22px]'>
            <span>VIP SIgnal Members</span>
            <p className="text-[1.37rem] font-semibold">{`${'0' || data?.vip_members}`}</p>
          </div>
          <p className="absolute bottom-[22px] right-[22px] rounded-[50px] bg-[#FCECCA] p-[8px] text-right text-[#F8A600] text-[12px] font-semibold flex justify-start items-center gap-x-[10px]">
            <span> <FontAwesomeIcon icon={faArrowUp} /></span>
            <span>{`${'0' || `${percentage(data?.vip_members)}%`}` }</span>
          </p>
         </div>
         <div className="text-[#0D142E] rounded-[8px] border border-[#D3D3D3] bg-[#fff] p-[20px] flex flex-col gap-y-[14px] relative">
          <div className='flex flex-col gap-y-[10px] mb-[22px]'>
            <span>Mentorship Members</span>
            <p className="text-[1.37rem] font-semibold">{`${'0' || data?.mentorship_members}`}</p>
          </div>
          <p className="absolute bottom-[22px] right-[22px] rounded-[50px] bg-[#BEF2DA] p-[8px] text-right text-[#12B76A] text-[12px] font-semibold flex justify-start items-center gap-x-[10px]">
            <span> <FontAwesomeIcon icon={faArrowUp} /></span>
            <span>{`${'0' || `${percentage(data?.mentorship_members)}%`}` }</span>
          </p>
         </div>
         <div className="text-[#0D142E] rounded-[8px] border border-[#D3D3D3] bg-[#fff] p-[20px] flex flex-col gap-y-[14px] relative">
          <div className='flex flex-col gap-y-[10px] mb-[22px]'>
            <span>Completed Training</span>
            <p className="text-[1.37rem] font-semibold">{`${'0' || data?.completed_trainees}`}</p>
          </div>
          <p className="absolute bottom-[22px] right-[22px] rounded-[50px] bg-[#EEE1FF] p-[8px] text-right text-[#9747FF] text-[12px] font-semibold flex justify-start items-center gap-x-[10px]">
            <span> <FontAwesomeIcon icon={faArrowUp} /></span>
            <span>{`${'0' || `${percentage(data?.completed_training)}%`}` }</span>
          </p>
         </div>
      </div>
  )
}

