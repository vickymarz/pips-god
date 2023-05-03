import { getInitials } from 'helpers'
import { TbCurrencyNaira } from "react-icons/tb";
import completed from '../../../../../../../../../assets/images/completed.png'

export const Table = ({data}: {data: any}) => {

  type mentorshipDataType = {
    firstName: string
    lastName: string
    email: string
    completedAt: string
    totalAmountPaid: number
    phone: string
  }

   const mentorshipList = data?.completedTrainingAndMentoring?.users.training_and_mentoring?.map(({firstName, lastName, email, completedAt, phone, totalAmountPaid}: mentorshipDataType) => (
     <tr className='border-b-[10px] border-[#F8FAFC] bg-[#fff] text-[#040F1A] font-medium text-[0.87rem] mb-[12px]'>
    <td className='px-[9px] py-[16px] flex justify-start items-center gap-x-[25px]'>
      <div className="bg-[#0F375A] rounded-full h-[49px] w-[49px] flex justify-center items-center text-[21px] text-white font-bold">
        {getInitials(firstName, lastName)}
      </div>
      <h2 className='text-[#040F1A] font-medium text-[0.87rem]'>{`${firstName} ${lastName}`}</h2>
    </td>
    <td className='py-[16px]'>
      <div className='flex justify-start items-center'>
        <TbCurrencyNaira />
        <span>{totalAmountPaid / 100}</span>
      </div>
      </td>
    <td className='py-[16px]'>{phone}</td>
    <td className='py-[16px]'>{completedAt.toString().split('T')[0]}</td>
    <td className='py-[16px]'>{email}</td>
    <td className="py-[16px] flex flex-start items-center gap-x-[7px]">
      <div className="w-[9px] h-[9px]">
        <img src={completed} alt="completed" />
      </div>
      <span className='text-[#777777] font-medium text-[0.87rem]'>Completed</span>
    </td>
  </tr>
   ))

  return (
    <>
      {
      data === undefined ||data?.completedTrainingAndMentoring?.total === 0  ?
        <div className='flex justify-center items-center'>
          <p className='text-[30px]'>No user has completed training yet.</p>
        </div>
      :
        <table className="table-auto w-full border-0 outline-0 max-h-[30rem] overflow-y-scroll">
        <thead>
          <tr className='text-justify pb-[22px] text-start text-[#777777] font-medium text-[0.87rem]'>
            <th className="text-justify">NAME</th>
            <th className="text-justify">AMOUNT PAID</th>
            <th className="text-justify">PHONE</th>
            <th className="text-justify">DATE OF COMPLETION</th>
            <th className="text-justify">EMAIL ADDRESS</th>
            <th className="text-justify">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {mentorshipList}
        </tbody>
      </table>
      }
      </>
  )
}
