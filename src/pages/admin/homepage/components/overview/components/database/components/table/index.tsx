import completed from '../../../../../../../../../assets/images/completed.png'

export const Table = () => {
  return (
    <table className="table-auto">
    <thead>
      <tr className='pb-[22px] text-[#777777] font-medium text-[0.87rem]'>
        <th>NAME</th>
        <th>AMOUNT PAID</th>
        <th>PHONE</th>
        <th>DATE OF COMPLETION</th>
        <th>EMAIL ADDRESS</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr className='bg-[#fff] py-[19px] px-[9px] text-[#040F1A] font-medium text-[0.87rem]'>
        <td className='flex justify-center items-center gap-x-[25px]'>
          <div className="bg-[#0F375A] rounded-full h-[85px] w-[85px] flex justify-center items-center text-4xl text-white font-semibold">
            TH
          </div>
          <h2 className='text-[#040F1A] font-medium text-[0.87rem]'>Thelma Holmes</h2>
        </td>
        <td>$400.00</td>
        <td>09021263177</td>
        <td>26th November, 2022</td>
        <td>thelma124@gmail.com</td>
        <td>
          <img src={completed} alt="" />
          <span className='text-[#777777] font-medium text-[0.87rem]'>Completed</span>
        </td>
      </tr>
      <tr className='bg-[#fff] py-[19px] px-[9px] text-[#040F1A] font-medium text-[0.87rem]'>
        <td>
            <div className="bg-[#0F375A] rounded-full h-[85px] w-[85px] flex justify-center items-center text-4xl text-white font-semibold">
              TH
            </div>
          <h2 className='text-[#0D142E] font-semibold text-[0.87rem]'>Thelma Holmes</h2>
        </td>
        <td>$400.00</td>
        <td>09021263177</td>
        <td>26th November, 2022</td>
        <td>thelma124@gmail.com</td>
        <td>
          <img src={completed} alt="" />
          <span className='text-[#777777] font-medium text-[0.87rem]'>Completed</span>
        </td>
      </tr>
      <tr className='bg-[#fff] py-[19px] px-[9px] text-[#040F1A] font-medium text-[0.87rem]'>
        <td className='flex justify-center items-center gap-x-[25px]'>
          <div className="bg-[#0F375A] rounded-full h-[85px] w-[85px] flex justify-center items-center text-4xl text-white font-semibold">
            TH
          </div>
          <h2 className='text-[#040F1A] font-medium text-[0.87rem]'>Thelma Holmes</h2>
        </td>
        <td>$400.00</td>
        <td>09021263177</td>
        <td>26th November, 2022</td>
        <td>thelma124@gmail.com</td>
        <td>
          <img src={completed} alt="" />
          <span className='text-[#777777] font-medium text-[0.87rem]'>Completed</span>
        </td>
      </tr>
    </tbody>
  </table>
  )
}
