import { Table } from "./components"

export const Database = () => {
  return (
    <div className='border-[8px] w-full bg-[#F8FAFC]'>
      <div className='flex flex-col justify-start items-center gap-y-[10px] mb-[26px]'>
        <h2 className='text-[#19275E] text-[1.25rem] font-semibold'>
          Database
        </h2>
        <p className='text-[#19275E] text-[0.87rem]'>
          See members that completed training.
        </p>
      </div>
      <Table />
    </div>
  )
}

