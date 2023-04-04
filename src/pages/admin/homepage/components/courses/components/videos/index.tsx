import {useState} from 'react'
import { useMutation } from 'react-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import video from '../../../../../../../assets/images/video-player.png'
import {CreateCourseContextUse} from 'context'
import { useGetModule } from 'hooks';
import userServices from 'services/userServices';
import { ModulesType, ModuleType, VideoType } from '../../moduleTypes'



export const Videos = ({data}:{data:ModulesType}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<null | number>(null)
  const {setModal, setModule }  = CreateCourseContextUse()
  const [isOpen, setIsOpen] = useState(false)

  const { data:moduleData } = useGetModule(selectedModuleId)
  const responseData = moduleData as ModuleType
  const handleModuleClick = (id: null | number) => {
    setSelectedModuleId(id)
    setModule(responseData)
    setModal(true)
  }

  const { mutate } = useMutation(userServices.deleteModule)

  const videos = data?.docs?.map(({id, course_resources, title }: VideoType) => (
    <div key={id}>
    <div className='rounded-[8px] bg-white py-[13px] py-[24px] flex justify-between items-center px-[24px] py-[13px]'>
    <div className='flex justify-start items-center gap-x-[36px]'>
        <Button type='button' onClick={() =>setIsOpen(true)}>
          <img src={video} alt="video player" />
        </Button>
        <div className='flex flex-col justify-start items-start gap-y-[3px]'>
          <h4 className='text-[#0D142E] text-[1.37rem] font-medium'>{title}</h4>
        </div>
    </div>
    <div className="flex justify-start items-start gap-x-[32px]">
        <Button type='button' onClick={() => mutate(id)} className="rounded-[3.5px] border border-[#D3DDE0] bg-white py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#EA4545]">
           <FontAwesomeIcon icon={faTrashCan} className='text-[18px]'/>
           <span className='text-[14px] text-productSans'>Delete Video</span>
        </Button>
        <Button type='button' onClick={() => handleModuleClick(id)} className="rounded-[3.5px]  bg-[#19275E] py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#fff]">
           <FontAwesomeIcon icon={faPen} className='text-[18px]'/>
           <span className='text-[14px] text-productSans'>Edit Video</span>
        </Button>
    </div>
  </div>
      <div className={`${isOpen ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen z-20 bg-[#69686844] overflow-y-scroll' : 'hidden'}`}>
      <div className='w-[80%] ml-auto mr-auto relative my-[50px] rounded-[27px] bg-white px-[40px] py-[20px]'>
      <div className='w-full flex justify-end items-end mb-[10px] text-end'>
        <Button type="button" onClick={() => setIsOpen(false)} className="z-10 flex justify-end items-end mb-[50px] text-end w-full">
           <FontAwesomeIcon icon={faTimes} className={`text-white text-[25px] text-[#232323]`}/>
         </Button>
      </div>
      <div className='flex justify-start items-start gap-x-[36px]'>
          <h4 className="text-[2.5rem] font-bold font-productSans text-[#19275E]">{title}</h4>
        </div>
       <video controls width="100%" height="100%" poster={course_resources[0]?.thumbnail}>
         <source src={course_resources[0]?.url} type="video/webm" />
         <source src={course_resources[0]?.url} type="video/mp4" />
         Sorry, your browser doesn't support videos.
       </video>
      </div>
   </div>
   </div>
  ))
  return (
    <>
    <div className='flex flex-col gap-y-[16px] p-[28px] bg-[#F8FAFC] rounded-[8px] w-full'>
    {
      data === undefined ?
        <div className='flex justify-center items-center'>
          <p className='text-[30px]'>Your data will appear here</p>
        </div> :
          videos
    }
    </div>
    </>
  )
}
