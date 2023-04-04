import {useState} from 'react'
import { useMutation } from 'react-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import video from '../../../../../../../assets/images/video-player.png'
import {CreateCourseContextUse} from 'context'
import { useGetModule } from 'hooks';
import userServices from 'services/userServices';
import { ModulesType, ModuleType, VideoType } from '../../moduleTypes'
import { VideoModal } from '../videoModal';



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
  <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} videoUrl={course_resources[0]?.url} thumbnail={course_resources[0]?.thumbnail} title={title}/>
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
