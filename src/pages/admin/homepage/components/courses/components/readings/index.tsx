import { useState, useEffect } from 'react'
import { useMutation } from 'react-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import file from '../../../../../../../assets/images/file.png'
import { CreateCourseContextUse} from 'context'
import userServices from 'services/userServices';
import { Document, Page, pdfjs } from "react-pdf";

type ModuleType = {
  docs: {
    id: number
    title: string
    course_resources: {
      type: string
      url: string
      thumbnail: string
    }[]
  }[]
  pages: number
  total: number
}

export const Readings = ({data}:{data:ModuleType}) => {
  const {setModal, setCourse}  = CreateCourseContextUse()
  const [isOpen, setIsOpen] = useState(false)

  type readingType = {
    id: number
    title: string
    course_resources: {
      type: string
      url: string
      thumbnail: string
    }[]
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  }[])
  const handleEdit = () => {
    // refetch()
    // setCourse(data)
    setModal(true)
  }

  const { mutate } = useMutation(userServices.deleteModule)

  const documents = data?.docs?.map(({id, course_resources, title }: readingType) => (
  <div key={id}>
    <div className='rounded-[8px] bg-white py-[13px] py-[24px] flex justify-between items-center px-[24px] py-[13px]'>
      <div className='flex justify-start items-start gap-x-[36px]'>
        <Button type='button' onClick={() =>setIsOpen(true)}>
          <img src={file} alt="file player" />
        </Button>
        <div className='flex flex-col justify-start items-start gap-y-[3px]'>
          <h4 className='text-[#0D142E] text-[1.37rem] font-medium'>{title}</h4>
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
    <div className={`${isOpen ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen z-20 bg-[#69686844] overflow-y-scroll' : 'hidden'}`}>
      <div className='w-[80%] ml-auto mr-auto relative my-[50px] rounded-[27px] bg-white px-[40px] py-[20px]'>
        <div className='w-full flex justify-end items-end mb-[10px] text-end'>
          <Button type="button" onClick={() => setIsOpen(false)} className="z-10 flex justify-end items-end mb-[50px] text-end w-full">
            <FontAwesomeIcon icon={faTimes} className={`text-white text-[25px] text-[#232323]`}/>
          </Button>
        </div>
        <div className='flex justify-start items-start gap-x-[36px]'>
          <h4>{title}</h4>
        </div>
      <div>
      <Document file={course_resources[1]?.url} >
        <Page pageNumber={1} />
      </Document>
    </div>
  </div>
  </div>
</div>
  ))

  return (
    <div className='flex flex-col gap-y-[16px] p-[32px] bg-[#F8FAFC] rounded-[8px] w-full'>
      {
        data === undefined ?
        <div className='flex justify-center items-center'>
        <p className='text-[30px]'>Your data will appear here</p>
      </div> :
         documents
      }
    </div>
  )
}
