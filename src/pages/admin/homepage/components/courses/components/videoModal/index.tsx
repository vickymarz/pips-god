import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes  } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import { VideoModalType } from '../../moduleTypes'

export const VideoModal = ({isOpen, setIsOpen, item}: VideoModalType) => {

  return (
    <div className={`${isOpen ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen z-20 bg-[#69686844] overflow-y-scroll' : 'hidden'}`}>
      <div className='w-[80%] ml-auto mr-auto relative my-[50px] rounded-[27px] bg-white px-[40px] py-[20px]'>
        <div className='w-full flex justify-end items-end mb-[10px] text-end'>
          <Button type="button" onClick={() => setIsOpen(false)} className="z-10 flex justify-end items-end mb-[50px] text-end w-full">
           <FontAwesomeIcon icon={faTimes} className={`text-[25px] text-[#232323]`}/>
         </Button>
        </div>
        <div className='flex justify-start items-start gap-x-[36px]'>
          <h4 className="text-[2.5rem] font-bold font-productSans text-[#19275E]">{item?.title}</h4>
        </div>
        <video controls width="100%" height="100%" poster={item?.course_resources[0].thumbnail}>
          <source src={item?.course_resources[0].url} type="video/webm" />
          <source src={item?.course_resources[0].url} type="video/mp4" />
           Sorry, your browser doesn't support videos.
        </video>
      </div>
   </div>
  )
}

