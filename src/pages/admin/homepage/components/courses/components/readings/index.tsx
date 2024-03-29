import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import file from '../../../../../../../assets/images/file.png'
import { CreateCourseContextUse} from 'context'
import { useGetModule } from 'hooks';
import { ModulesType, ModuleType, readingType, ItemType } from '../../moduleTypes'
import { TextModal } from '../textModal';
import { DeleteModuleConfirmation } from '../deleteModuleConfirmation';


export const Readings = ({data}:{data:ModulesType}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<null | number>(null)
  const {setModal, setModule, setAction }  = CreateCourseContextUse()
  const [isOpen, setIsOpen] = useState(false)
  const [popup, setPopup] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ItemType>({course_resources: [], title: ''})

  const { data:moduleData, refetch } = useGetModule(selectedModuleId)
  const responseData = moduleData as ModuleType
  const handleModuleClick = (id: null | number) => {
    setSelectedModuleId(id)
  }

  useEffect(() => {
    if (selectedModuleId) {
      refetch()
      setModule(responseData)
    }

    if(responseData) {
      setAction('edit')
      setModal(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModuleId, responseData, setModule])

  const handleItemClick = (course_resources: any[], title: string) => {
    setIsOpen(true)
    setSelectedItem({course_resources, title})
  }

  const documents = data?.docs?.map(({id, course_resources, title }: readingType) => (
  <div key={id}>
    <div className='rounded-[8px] bg-white py-[13px] py-[24px] flex justify-between items-center px-[24px] py-[13px]'>
      <div className='flex justify-start items-start gap-x-[36px]'>
        <Button type='button'  onClick={() => handleItemClick(course_resources, title) }>
          <img src={file} alt="file player" />
        </Button>
        <div className='flex flex-col justify-start items-start gap-y-[3px]'>
          <h4 className='text-[#0D142E] text-[1.37rem] font-medium'>{title}</h4>
        </div>
      </div>
      <div className="flex justify-start items-start gap-x-[32px]">
        <Button type='button' onClick={() => setPopup(true)} className="rounded-[3.5px] border border-[#D3DDE0] bg-white py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#EA4545]">
          <FontAwesomeIcon icon={faTrashCan} className='text-[18px]'/>
          <span className='text-[14px] text-productSans'>Delete Module</span>
        </Button>
        <Button type='button' onClick={() => handleModuleClick(id)} className="rounded-[3.5px]  bg-[#19275E] py-[11px] px-[13px] flex justify-start items-center gap-x-[11px] text-[#fff]">
           <FontAwesomeIcon icon={faPen} className='text-[18px]'/>
           <span className='text-[14px] text-productSans'>Edit Module</span>
        </Button>
      </div>
    </div>
    {isOpen && <TextModal isOpen={isOpen} setIsOpen={setIsOpen} item={selectedItem} />}
    {popup && <DeleteModuleConfirmation popup={popup} setPopup={setPopup} id={id} />}
  </div>
))

  return (
    <div className='flex flex-col gap-y-[16px] p-[32px] bg-[#F8FAFC] rounded-[8px] w-full'>
      {
        data === undefined || data?.docs.length === 0 ?
        <div className='flex justify-center items-center'>
        <p className='text-[30px]'>There are no course modules yet</p>
      </div> :
         documents
      }
    </div>
  )
}
