import {useMutation} from 'react-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import file from '../../../../../../../assets/images/file.png'
import { useDocumentData } from 'hooks'
import {CreateCourseContextUse} from 'context'
import userServices from 'services/userServices';

export const Readings = () => {
  const {setModal, setCourse}  = CreateCourseContextUse()

  type readingType = {
    id: number
    title: string
    url: string
  }

  const { data, refetch } = useDocumentData()

  const handleEdit = () => {
    refetch()
    setCourse(data)
    setModal(true)
  }

  const { mutate } = useMutation(userServices.deleteCourse)

  const documents = data?.documentData?.map(({id, title, url }: readingType) => (
    <div className='rounded-[8px] bg-white py-[13px] py-[24px] flex justify-between items-center px-[24px] py-[13px]'>
    <div className='flex justify-start items-start gap-x-[36px]'>
        <a href={url} target='_blank' rel="noreferrer">
          <img src={file} alt="file player" />
        </a>
        <div className='flex flex-col justify-start items-start gap-y-[3px]'>
          <h4 className='text-[#0D142E] text-[1.37rem] font-medium'>{title}</h4>
          {/* <p className='text-[#19275E] text-[1.12rem]'>6 mins read</p> */}
        </div>
    </div>
    <div className="flex justify-start items-start gap-x-[32px]">
        <Button type='button' onClick={() => mutate(id)} className="rounded-[3.5px] border border-[#D3DDE0] bg-white py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#EA4545]">
           <FontAwesomeIcon icon={faTrashCan} className='text-[18px]'/>
           <span className='text-[14px] text-productSans'>Delete file</span>
        </Button>
        <Button type='button' onClick={handleEdit} className="rounded-[3.5px]  bg-[#19275E] py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#fff]">
           <FontAwesomeIcon icon={faPen} className='text-[18px]'/>
           <span className='text-[14px] text-productSans'>Edit file</span>
        </Button>
    </div>
</div>
  ))
  return (
    <div className='flex flex-col gap-y-[16px] p-[32px] bg-[#F8FAFC] rounded-[8px] w-full'>
      {
        data?.documentData === undefined ?
        <div className='flex justify-center items-center'>
        <p className='text-[30px]'>Your data will appear here</p>
      </div> :
         documents
      }
    </div>
  )
}
