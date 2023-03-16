import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import video from '../../../../../../../assets/images/video-player.png'
import {CreateCourseContextUse} from 'context'
import { useDocumentData } from 'hooks'


export const Videos = () => {
  const {setModal, setCourse }  = CreateCourseContextUse()
  const [isOpen, setIsOpen] = useState(false)

  // type videoType = {
  //   title: string
  //   url: string
  // }

  const { data, refetch } = useDocumentData()

  const handleEdit = () => {
    refetch()
    setCourse(data)
    setModal(true)
  }
  return (
    <>
    <div className='flex flex-col gap-y-[16px] p-[28px] bg-[#F8FAFC] rounded-[8px] w-full'>
      <div className='rounded-[8px] bg-white py-[13px] py-[24px] flex justify-between items-center px-[24px] py-[13px]'>
        <div className='flex justify-start items-center gap-x-[36px]'>
            <Button type='button' onClick={() =>setIsOpen(true)}>
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
    <div className={`${isOpen ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen z-20 bg-[#69686844] overflow-y-scroll' : 'hidden'}`}>
       <div className='w-[80%] ml-auto mr-auto relative my-[50px] rounded-[27px] bg-white px-[40px] py-[20px]'>
       <div className='w-full flex justify-end items-end mb-[10px] text-end'>
         <Button type="button" onClick={() => setIsOpen(false)} className="z-10 flex justify-end items-end mb-[50px] text-end w-full">
				    <FontAwesomeIcon icon={faTimes} className={`text-white text-[25px] text-[#232323]`}/>
				  </Button>
       </div>
        <video controls width="100%" height="100%" poster="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png">
          <source src="/video-example.webm" type="video/webm" />
          <source src="/video-example.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
       </div>
    </div>
    </>
  )
}
