import React, { useState } from 'react'
import upload from '../../../../../../../assets/images/upload.png'
import pin from '../../../../../../../assets/images/pin.png'
import { Button } from 'components';
import userServices from 'services/userServices';

export const CourseModal = ({setModal, modal}:{setModal: React.Dispatch<React.SetStateAction<boolean>>, modal: boolean}) => {
  const [image, setImage] = useState<string | Blob>('')
  const [selectedFile, setSelectedFile] =  useState<string | React.ReactNode>('')
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [selectedVideo, setSelectedVideo] =  useState<string | React.ReactNode>('')
	const [isVideoPicked, setIsVideoPicked] = useState(false);
  const [tags, setTags] = useState<Array<string>>([])

  const onFileChange = async(event: React.ChangeEvent) => {
    const target= event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    const raw = await userServices.uploadFile(file)
		setSelectedFile(raw);
		setIsFilePicked(true);
	};

  const onVideoChange = async(event: React.ChangeEvent) => {
    const target= event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    const video = await userServices.uploadVideo(file)
		setSelectedVideo(video);
		setIsVideoPicked(true);
	};

  const onImageChange = async(event: React.ChangeEvent) => {
    const target= event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    const thumbnail = await userServices.uploadThumbnail(file)
    setImage(thumbnail)
};

const handleKeyDown = (event: React.KeyboardEvent) => {
  if(event.key !== 'Enter') return
  const target = event.target as HTMLInputElement
  const values = target.value
  if(!values.trim()) return
  setTags([...tags, values])
  target.value = ''
}

    return (
      <div className={`${modal ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen w-screen z-20 bg-[#69686844] overflow-y-scroll' : 'hidden'}`}>
        <div className='w-[80%] ml-auto mr-auto relative my-44 rounded-[27px] flex justify-between items-start bg-white'>
          <div className="p-[32px]">
            <h2 className='mb-[16px] text-[#0D142E] font-semibold text-[1.37rem]'>Course thumbnail <span className='text-[#E8E8E8] font-normal'>(required)</span></h2>
	          <div className="flex flex-col justify-center items-center gap-y-[32px]">
		          <div className="bg-[#E8E8E8] rounded-[8px] flex justify-center items-center w-[339px] h-[259px]">
                  {image ? ( <img src={`${image}`} alt="uploaded thumbnail" className='object-cover'/>)
                  :
                  (
                  <div className='flex justify-center items-center w-[50px] h-[33.3px]'>
                    <img src={`${upload}`} alt="uploaded thumbnail" />
                  </div>
                  )}
		          </div>
              <input type="file" name="file" id="input" multiple accept="image/*" onChange={onImageChange} className='hidden'/>
              <label htmlFor="input" className="text-[#2A72FF] font-medium text-[1.37rem] cursor-pointer">
                Upload thumbnail
              </label>
            </div>
          </div>
          <form className='w-full flex flex-col justify-start items-start gap-y-[32px] py-[40px] px-[32px] border-l-[1px] border-[#B0B0B0]'>
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
              <div className="border-[2px] border-[#000] p-[0.5em] rounded-[3px] mt-[1em] flex items-center wrap gap-[0.5em]">
               { tags.map((tag, index) => (
                  <div key={index} className='bg-[rgb(218, 216, 216)] inline-block px-[0.75em] py-[0.5em] rounded-[20px]'>
                    <span>{tag}</span>
                    <span className='h-[20px] w-[20px] bg-[rgb(48, 48. 48)] text-[#fff] rounded-[50%] inline-flex justify-center items-center text-[18px] cursor-pointer'>&times;</span>
                  </div>
               ))}
                <input
                  className={`border-0 outline-none text-[#B0B0B0] text-[1.37rem] font-medium w-full py-[17px] px-[20px] rounded-[8px] bg-[#fff] border border-[#B0B0B0]`}
                  type='text'
                  required
                  id='keywords'
                  onKeyDown={handleKeyDown}
                  placeholder='Provide your video keywords'
                />
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-y-[19px]'>
              <input type="file" id="videopicker" accept="video/*" onChange={onVideoChange} className='hidden'/>
              <label htmlFor='videopicker' className='rounded-[10px] bg-[#E8E8E8] py-[5px] px-[3px] flex justify-start items-center gap-x-[11px]'>
                <span className='text-[#0D142E] font-medium text-[1.25rem]'>Attach videos</span>
                <div className='w-[11px] h-[22px]'>
                  <img src={pin} alt="attach video" />
                </div>
              </label>
              {isVideoPicked && (
				        <span>
					        <p>{selectedVideo}</p>
				        </span>
			        )}
              <input type="file" id="docpicker" onChange={onFileChange} accept=".pdf, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className='hidden'/>
              <label htmlFor='docpicker' className='rounded-[10px] bg-[#E8E8E8] py-[5px] px-[3px] flex justify-start items-center gap-x-[11px]'>
                <span className='text-[#0D142E] font-medium text-[1.25rem]'>Attach file</span>
                <div className='w-[11px] h-[22px]'>
                  <img src={pin} alt="attach file" />
                </div>
              </label>
              {isFilePicked && (
				        <span>
					        <p>{selectedFile}</p>
				        </span>
			        )}
            </div>
            <div className='mt-[59px] w-full flex justify-end items-start text-[1.12rem] font-bold font-productSans gap-x-[32px]'>
              <Button type='button' onClick={() => setModal(false)}  className="text-[#B0B0B0] bg-[#fff] rounded-[8px] py-[17px] px-[34px] border border-[#B0B0B0]">
                Cancel
              </Button>
              <Button type='submit' className="text-white bg-[#0D142E] rounded-[8px] py-[17px] px-[34px]">
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
  )
}

