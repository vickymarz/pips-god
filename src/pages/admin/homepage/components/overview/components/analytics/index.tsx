import {useState} from 'react'
import { AnalyticsCard, AnalyticsGraph } from "./components"
import {Button} from 'components'
import {DatePicker} from '../datePicker'
import { AnalyticsContextUse } from 'context'

export const Analytics = ({data}: {data: any}) => {
  const [modal, setModal] = useState(false)
  const { startDate, endDate } = AnalyticsContextUse()

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <>
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
        <Button type='button' onClick={handleModal} className="border-0 outline-0 rounded-[8px] border-0 outline-0 bg-[#F5F9FA] py-[14px] px-[16px] text-[#19275E] font-semibold">
          {startDate && endDate ? `${startDate.toDateString()} - ${endDate.toDateString()}` : 'View data by date'}
        </Button>
      </div>
      <AnalyticsCard data={data} />
      <AnalyticsGraph data={data} />
    </div>
    {modal && <DatePicker setModal={setModal} modal={modal}/>}
    </>
  )
}
