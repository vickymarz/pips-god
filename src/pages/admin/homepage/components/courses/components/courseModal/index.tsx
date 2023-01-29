import React, { useState } from 'react'
import upload from '../../../../../../../assets/images/upload.png'
import pin from '../../../../../../../assets/images/pin.png'
import { Button } from 'components';

export const CourseModal = ({setModal, modal}:{setModal: () => void, modal: boolean}) => {
  const [image, setImage] = useState<string | Blob>('')


  const onImageChange = (event: React.ChangeEvent) => {
    const target= event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];;
    setImage(URL.createObjectURL(file))
};

    return (
      <div className={`${modal ? 'fixed top-0 right-0 left-0 bottom-0 w-screen w-screen z-20 bg-[#69686844]' : 'hidden'}`}>
        <div className='w-[80%] ml-auto mr-auto relative mt-44 rounded-[27px] flex justify-between items-start'>
          <div className="profileContainer">
            <h2 className='mb-[16px] text-[#0D142E] font-semibold text-[1.37rem]'>Course thumbnail <span className='text-[#E8E8E8]'>(required)</span></h2>
	          <div className="flex flex-col justify-center items-center gap-x-[32px]">
		          <div className="bg-[#E8E8E8] rounded-[8px] flex justify-center items-center w-[339px] h-[259px]">
			          <img src={`${upload || image}`} alt="uploaded thumbnail" />
		          </div>
              <input type="file" name="file" id="input" multiple accept="image/*" onChange={onImageChange} className='hidden'/>
              <label htmlFor="input" className="text-[#2A72FF] font-medium text-[1.37rem]">
                Upload thumbnail
              </label>
            </div>
          </div>
          <form className='w-full flex flex-col justify-start items-start gap-y-[32px]'>
            <div className='relative flex flex-col justify-start items-start w-full gap-y-[11px]'>
              <label className='text-[#0D142E] text-[1.37rem] font-semibold' htmlFor='title'>
                Course title <span className='text-[#B0B0B0]'>(required)</span>
              </label>
              <input
                className={`outline-none text-[#B0B0B0] text-[1.37rem] font-medium w-full py-[17px] px-[20px] rounded-[8px] bg-[#fff] border border-[#B0B0B0]`}
                type='text'
                required
                id='title'
                placeholder='Provide your course title'
                />
            </div>
            <div className='relative flex flex-col justify-start items-start w-full gap-y-[11px]'>
              <label className='text-[#0D142E] text-[1.37rem] font-semibold' htmlFor='transcript'>
                Include transcript
              </label>
              <input
                className={`outline-none text-[#B0B0B0] text-[1.37rem] font-medium w-full py-[17px] px-[20px] rounded-[8px] bg-[#fff] border border-[#B0B0B0]`}
                type='text'
                required
                id='transcript'
                placeholder='Provide your video transcript'
                />
            </div>
            <div className='relative flex flex-col justify-start items-start w-full gap-y-[11px]'>
              <label className='text-[#0D142E] text-[1.37rem] font-semibold' htmlFor='keywords'>
                Include Keywords
              </label>
              <input
                className={`outline-none text-[#B0B0B0] text-[1.37rem] font-medium w-full py-[17px] px-[20px] rounded-[8px] bg-[#fff] border border-[#B0B0B0]`}
                type='text'
                required
                id='keywords'
                placeholder='Provide your video keywords'
                />
            </div>
            <div className='flex flex-col justify-start items-start gap-y-[19px]'>
              <Button type='button' className='rounded-[10px] bg-[#E8E8E8] py-[5px] px-[3px] flex justify-start items-center gap-x-[4px]'>
                <span className='text-[#0D142E] font-medium text-[1.25rem]'>Attach videos</span>
                <img src={pin} alt="attach video" />
              </Button>
              <Button type='button' className='rounded-[10px] bg-[#E8E8E8] py-[5px] px-[3px] flex justify-start items-center gap-x-[4px]'>
                <span className='text-[#0D142E] font-medium text-[1.25rem]'>Attach file</span>
                <img src={pin} alt="attach file" />
              </Button>
            </div>
            <div className='mt-[59px] flex justify-end items-start text-[1.12rem] font-bold font-productSans'>
              <button className="text-[#B0B0B0] bg-[#fff] rounded-[8px] py-[17px] px-[34px] border border-[#B0B0B0]" type="button">
                Cancel
              </button>
              <button className="text-white bg-[#0D142E] rounded-[8px] py-[17px] px-[34px]" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

