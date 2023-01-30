import { useState } from 'react';
import './dateRangePicker.css'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import {Button} from 'components'

export const DatePicker = ({setModal, modal}:{setModal: React.Dispatch<React.SetStateAction<boolean>>, modal: boolean}) => {
    const [value, onChange] = useState<string | Date[] | any>([new Date(), new Date()]);

    return (
    <div className={`${modal ?'fixed top-0 right-0 left-0 bottom-0 w-screen z-20 bg-[#69686844]': 'hidden'}`}>
      <div className='w-[26%] ml-auto mr-auto relative mt-44 flex flex-col justify-center items-center bg-white py-6 rounded-2xl h-min-[400px]'>

        <DateRangePicker
          onChange={onChange}
          value={value}
          isOpen={true}
          calendarIcon={null}
          clearIcon={null}
          />
        <div className='flex justify-end items-center gap-x-[20px]'>
          <Button type='button' className="rounded-[3.5px] text-[14px] text-productSans  bg-[#19275E] py-[11px] px-[13px]  text-[#fff]">
            Show Overview
          </Button>
          <Button type='button' onClick={() => setModal(false)} className="rounded-[3.5px] text-[14px] text-productSans border border-[#D3DDE0] bg-white py-[11px] px-[13px]  text-[#EA4545]">
           Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

