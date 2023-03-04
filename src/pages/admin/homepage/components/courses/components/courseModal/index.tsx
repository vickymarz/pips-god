import React, { useState } from 'react'
import upload from '../../../../../../../assets/images/upload.png'
import pin from '../../../../../../../assets/images/pin.png'
import { Button } from 'components';
import userServices from 'services/userServices';
import {useMutation} from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {CreateCourseContextUse} from 'context'

export const CourseModal = () => {
  const {modal, setModal, course, setCourse}  = CreateCourseContextUse()
  const [image, setImage] = useState<string | Blob>('')
  const [selectedFile, setSelectedFile] =  useState<string | React.ReactNode>('')
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [selectedVideo, setSelectedVideo] =  useState<string | React.ReactNode>('')
	const [isVideoPicked, setIsVideoPicked] = useState(false);
  const [tags, setTags] = useState<Array<string>>([])
  const [title, setTitle] = useState('')

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

const removeTag = (index:number) => {
  setTags(tags.filter((el:any, i:number) => i !== index))
}


const {mutate, isSuccess, isError} = useMutation(userServices.createCourses, {
  onSuccess: (data) => {
    setCourse(data)
  }
})

const onSubmit = (e:React.FormEvent) => {
  e.preventDefault()
  const parameters = {
    title,
    image,
    selectedFile,
    selectedVideo,
    tags
  }
  mutate(parameters)
}

const errorMsg = () => {
  let element;
  if (isSuccess) {
    element = (
      <p className='mt-4 text-xl text-green-600 text-center'>
        Course added successfully!
      </p>
    );
  } else if (isError) {
    element = (
      <p className='mt-4 text-xl text-red-600 text-center'>
        Something went wrong. Please try again!
      </p>
    );
  }
  return element;
};


    return (
      <div className={`${modal ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen w-screen z-20 bg-[#69686844] overflow-y-scroll' : 'hidden'}`}>
        {errorMsg()}
        <form className='w-[80%] ml-auto mr-auto relative my-44 rounded-[27px] flex justify-between items-start bg-white' onSubmit={onSubmit}>
          <div className="p-[32px]">
            <h2 className='mb-[16px] text-[#0D142E] font-semibold text-[1.37rem]'>Course thumbnail <span className='text-[#E8E8E8] font-normal'>(required)</span></h2>
	          <div className="flex flex-col justify-center items-center gap-y-[32px]">
		          <div className="bg-[#E8E8E8] rounded-[8px] flex justify-center items-center w-[339px] h-[259px]">
                  {image ? ( <img src={`${image}`} alt="uploaded thumbnail" className='object-cover'/>)
                  :
                  (
                  <div className='flex justify-center items-center w-[50px] h-[33.3px]'>
                    <img src={`${upload || course?.image}`} alt="uploaded thumbnail" />
                  </div>
                  )}
		          </div>
              <input type="file" name="file" id="input" multiple accept="image/*" onChange={onImageChange} className='hidden'/>
              <label htmlFor="input" className="text-[#2A72FF] font-medium text-[1.37rem] cursor-pointer">
                Upload thumbnail
              </label>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-start gap-y-[32px] py-[40px] px-[32px] border-l-[1px] border-[#B0B0B0]'>
            <div className='relative flex flex-col justify-start items-start w-full gap-y-[11px]'>
              <label className='text-[#0D142E] text-[1.37rem] font-semibold' htmlFor='title'>
                Course title <span className='text-[#B0B0B0]'>(required)</span>
              </label>
              <input
                className={`outline-none text-[#B0B0B0] text-[1.37rem] font-medium w-full py-[17px] px-[20px] rounded-[8px] bg-[#fff] border border-[#B0B0B0]`}
                type='text'
                required
                id='title'
                value={course?.title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Provide your course title'
                />
            </div>
            {/* <div className='relative flex flex-col justify-start items-start w-full gap-y-[11px]'>
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
            </div> */}
            <div className='relative flex flex-col justify-start items-start w-full gap-y-[11px]'>
              <label className='text-[#0D142E] text-[1.37rem] font-semibold' htmlFor='keywords'>
                Include Keywords
              </label>
              <div className="w-full p-[0.6em] rounded-[8px] flex flex-col justify-start items-start wrap gap-[0.5em] border border-[#B0B0B0]">
               <div className='flex justify-start items-center wrap gp-x-[10px]'>
               { course?.tags || tags.map((tag, index) => (
                  <div key={index} className='bg-[#EBEBEB] flex justify-start items-center gap-x-[20px] px-[0.75em] py-[0.5em] rounded-[20px]'>
                    <span>{tag}</span>
                    <Button type='button' onClick={() => removeTag(index)}>
                      <FontAwesomeIcon icon={faTimes} className={`text-white text-[20px]`}/>
                    </Button>
                  </div>
               ))}
               </div>
                <input
                  className={`border-0 outline-none text-[#B0B0B0] text-[1.37rem] font-medium w-full rounded-[8px] bg-[#fff] border border-[#B0B0B0] p-[7px]`}
                  type='text'
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
					        <p>{selectedVideo || course?.video}</p>
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
					        <p>{selectedFile ||  course?.file}</p>
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
          </div>
        </form>
      </div>
  )
}

