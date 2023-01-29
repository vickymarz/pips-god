import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import file from '../../../../../../../assets/images/file.png'

export const Readings = () => {
  return (
    <div className='flex flex-col gap-y-[16px] px-[32px] bg-[#F8FAFC] rounded-[8px]'>
      <div className='rounded-[8px] bg-white py-[13px] py-[24px]'>
        <div className='flex justify-start items-start gap-x-[35xp]'>
            <Button type='button'>
              <img src={file} alt="file player" />
            </Button>
            <div className='flex flex-col justify-start items-start gap-y-[3px]'>
              <h4 className='text-[#0D142E] text-[1.37rem] font-medium'>What is Forex trading?</h4>
              <p className='text-[#19275E] text-[1.12rem]'>6 mins read</p>
            </div>
        </div>
        <div className="flex justify-start items-start gap-x-[32px]">
            <Button type='button' className="rounded-[3.5px] border border-[#D3DDE0] bg-white py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#EA4545]">
               <FontAwesomeIcon icon={faTrashCan} className='text-[18px]'/>
               <span className='text-[14px] text-productSans'>Delete file</span>
            </Button>
            <Button type='button' className="rounded-[3.5px]  bg-[#19275E] py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#fff]">
               <FontAwesomeIcon icon={faPen} className='text-[18px]'/>
               <span className='text-[14px] text-productSans'>Edit file</span>
            </Button>
        </div>
    </div>
    </div>
  )
}
