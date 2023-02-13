import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import video from '../../../../../../../assets/images/video-player.png'
import {CreateCourseContextUse} from 'context'
import { useDocumentData } from 'hooks'

export const Videos = () => {
  const {setModal, setCourse }  = CreateCourseContextUse()

  type videoType = {
    title: string
    url: string
  }

  const { data, refetch } = useDocumentData()

  const handleEdit = () => {
    refetch()
    setCourse(data)
    setModal(true)
  }
  return (
    <div className='flex flex-col gap-y-[16px] p-[28px] bg-[#F8FAFC] rounded-[8px] w-full'>
      <div className='rounded-[8px] bg-white py-[13px] py-[24px] flex justify-between items-center px-[24px] py-[13px]'>
        <div className='flex justify-start items-start gap-x-[36px]'>
            <Button type='button'>
              <img src={video} alt="video player" />
            </Button>
            <div className='flex flex-col justify-start items-start gap-y-[3px]'>
              <h4 className='text-[#0D142E] text-[1.37rem] font-medium'>What is Forex trading?</h4>
              <p className='text-[#19275E] text-[1.12rem]'>6 mins</p>
            </div>
        </div>
        <div className="flex justify-start items-start gap-x-[32px]">
            <Button type='button' className="rounded-[3.5px] border border-[#D3DDE0] bg-white py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#EA4545]">
               <FontAwesomeIcon icon={faTrashCan} className='text-[18px]'/>
               <span className='text-[14px] text-productSans'>Delete Video</span>
            </Button>
            <Button type='button' onClick={handleEdit} className="rounded-[3.5px]  bg-[#19275E] py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#fff]">
               <FontAwesomeIcon icon={faPen} className='text-[18px]'/>
               <span className='text-[14px] text-productSans'>Edit Video</span>
            </Button>
        </div>
    </div>
    </div>
  )
}
