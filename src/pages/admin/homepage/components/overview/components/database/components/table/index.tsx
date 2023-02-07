import completed from '../../../../../../../../../assets/images/completed.png'
import { useMentorshipData } from 'hooks'

export const Table = () => {

  type mentorshipDataType = {
    name: string
    email: string
    date: string
    amount: string
    number: string
  }
   const {data} = useMentorshipData()
   const mentorshipList = data?.mentorshipData.map(({name, email, date, number, amount}: mentorshipDataType) => (
    <tr className='border-b-[10px] border-[#F8FAFC] bg-[#fff] text-[#040F1A] font-medium text-[0.87rem] mb-[12px]'>
    <td className='px-[9px] py-[16px] flex justify-start items-center gap-x-[25px]'>
      <div className="bg-[#0F375A] rounded-full h-[49px] w-[49px] flex justify-center items-center text-[21px] text-white font-bold">
        {name.slice(0, 2)}
      </div>
      <h2 className='text-[#040F1A] font-medium text-[0.87rem]'>{name}</h2>
    </td>
    <td className='py-[16px] '>${amount}</td>
    <td className='py-[16px]'>{number}</td>
    <td className='py-[16px]'>{date}</td>
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
      data ? (
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
      ) : (
        <div className='flex justify-center items-center'>
           <p className='text-[30px]'>Your data will appear here</p>
        </div>
      )
  )
}
