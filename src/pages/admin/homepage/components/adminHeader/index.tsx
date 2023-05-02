import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'components'
import admin from '../../../../../assets/images/admin.png'
import moment from 'moment'
import {CreateCourseContextUse, AdminAuthContextUse} from 'context'
import { capitalizeFirstLetter } from 'helpers'

export const AdminHeader = () => {
  const {setModal}  = CreateCourseContextUse()
  const { user, setUser }  = AdminAuthContextUse()
  const location = useLocation()

  useEffect(() => {
     setUser(location?.state)
  }, [location?.state, setUser])


  const handleModal = () => {
    setModal(true)
  }

  return (
    <>
    <div className="flex justify-between w-full items-center gap-x-[8px] pt-[42px] border-b-[1px] border-[#D3D3D3] pb-[22px]">
      <div className="flex justify-start items-center gap-x-[8px] pt-[42px]">
        <div className='flex justify-center items-center'>
          <img src={admin} alt="admin avatar" />
        </div>
        <div className='flex flex-col justify-start items-start gap-y-[5px] '>
          <h2 className='text-[#19275E] text-[1.37rem] font-semibold'>
            {capitalizeFirstLetter(user?.firstName)} - Admin Access
          </h2>
          <p className='text-[#19275E]'>
            {moment().toString()}
          </p>
        </div>
     </div>
     <Button type='button' onClick={handleModal} className='flex justify-center items-center gap-x-[6px] text-productSans text-[1.06rem] font-bold text-white bg-[#0D142E] rounded-[8.25px] py-[15px] px-[34px] tracking-[0.02em]'>
       <span className='text-[30px] font-normal'>+</span>
       <span>Create</span>
     </Button>
    </div>
    </>
  )
}

