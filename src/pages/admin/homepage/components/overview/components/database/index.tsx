import { Table } from "./components"

export const Database = ({data}: {data: any}) => {
  return (
    <div className='rounded-[8px] w-full bg-[#F8FAFC] mt-[32px] p-[28px]'>
      <div className='flex flex-col justify-start items-start gap-y-[10px] mb-[26px]'>
        <h2 className='text-[#19275E] text-[1.25rem] font-semibold'>
          Database
        </h2>
        <p className='text-[#19275E] text-[0.87rem]'>
          See members that completed training.
        </p>
      </div>
      <div className='max-h-[30rem] overflow-y-scroll'>
        <Table data={data}/>
      </div>
    </div>
  )
}

