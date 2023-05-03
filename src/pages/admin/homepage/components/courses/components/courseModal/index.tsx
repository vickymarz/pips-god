import React, { useState, useEffect } from 'react'
import upload from '../../../../../../../assets/images/upload.png'
import pin from '../../../../../../../assets/images/pin.png'
import { Button } from 'components';
import userServices from 'services/userServices';
import { useMutation, useQueryClient } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CreateCourseContextUse } from 'context'

export const CourseModal = () => {
  const {modal, setModal, module, action, setAction, setModule }  = CreateCourseContextUse()
  const [image, setImage] = useState<string | Blob | undefined>('')
  const [selectedFile, setSelectedFile] =  useState<string | React.ReactNode>('')
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [selectedVideo, setSelectedVideo] =  useState<string | React.ReactNode>('')
  const [isSelectedVideo, setIsSelectedVideo] =  useState<string | React.ReactNode>('')
  const [isSelectedFile, setIsSelectedFile] =  useState<string | React.ReactNode>('')
	const [isVideoPicked, setIsVideoPicked] = useState(false);
  const [tags, setTags] = useState<Array<string>>([])
  const [title, setTitle] = useState('')

  const queryClient = useQueryClient()

  useEffect(() => {
    if(module && module?.course_resources !== undefined && module?.tags !== undefined && module?.title !== undefined) {
      setImage(module?.course_resources[0]?.thumbnail)
      setSelectedFile(module?.course_resources[1]?.url)
      setSelectedVideo(module?.course_resources[0]?.url)
      setTags(module?.tags.split(','))
      setTitle(module?.title)
      setIsFilePicked(true)
      setIsVideoPicked(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFileChange = async(event: React.ChangeEvent) => {
    const target= event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
	  setIsSelectedFile('false');
    const raw = await userServices.uploadFile(file)
		raw && setSelectedFile(raw);
    setIsSelectedFile('true');
		setIsFilePicked(true);
	};

  const onVideoChange = async(event: React.ChangeEvent) => {
    const target= event.target as HTMLInputElement;
	  setIsSelectedVideo('false')
    const file = (target.files as FileList)[0];
    const video = await userServices.uploadVideo(file)
		video && setSelectedVideo(video);
    setIsSelectedVideo('true')
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
  event.preventDefault()
  const target = event.target as HTMLInputElement
  const values = target.value
  if(!values.trim()) return
  setTags([...tags, values])
  target.value = ''
}

const removeTag = (index:number) => {
  setTags(tags.filter((el:any, i:number) => i !== index))
}

const {mutate:addModule, data:addModuleData, isError:addModuleError, isLoading:addModuleLoader} = useMutation(userServices.createModule, {
  onSuccess: (data) => {
    const responseData = data as {status: number, data: object}
    if (responseData?.status === 200) {
      queryClient.invalidateQueries('get-all-modules')
      setTimeout(() => {
        setModal(false)
      }, 2000);
    }
}})

const {mutate:updateModule, data:updateModuleData, isError:updateModuleError, isLoading:updateModuleLoader} = useMutation(userServices.updateModule, {
  onSuccess: (data) => {
    const responseData = data as {status: number, data: object}
    if (responseData?.status === 200) {
      queryClient.invalidateQueries('get-all-modules')
      setModule({
        "id": 0,
        "title": "",
         'tags': "",
        "course_resources": [
          {
          "type": "video",
          "url": "",
          "thumbnail": "",
          },
          {
          "type": "text",
          "url": ""
          }
        ]
    })
      setTimeout(() => {
        setModal(false)
      }, 2000);
    }
}})

const onSubmit = (e:React.FormEvent) => {
  e.preventDefault()
    setImage('')
    setSelectedFile('')
    setSelectedVideo('')
    setTags([])
    setTitle('')
  if(action === 'add') {
    addModule({
      "courseResources": [
        {
          "type": "video",
          "url": selectedVideo,
          "thumbnail": image,
        },
        {
          "type": "text",
          "url": selectedFile,
        }
      ],
      "courseModule": {
        "title": title,
        "tags": tags.join(','),
        "courseId": 1
      }
    })
  }

  if (action === 'edit' && module?.course_resources !== undefined) {
    updateModule({
      "courseResources": [
        {
          "id": module?.course_resources[0]?.id,
          "type": "video",
          "url": selectedVideo,
          "thumbnail": image,
        },
        {
          "id": module?.course_resources[1]?.id,
          "type": "text",
          "url": selectedFile,
        }
      ],
      "courseModule": {
        "title": title,
        "tags": tags.join(','),
        "courseModuleId": module?.id
      }
    })
    setAction('add')
  }
}

const closeModal = () => {
  setModule(
    {
        "id": 0,
        "title": "",
         'tags': "",
        "course_resources": [
          {
          "type": "video",
          "url": "",
          "thumbnail": "",
          },
          {
          "type": "text",
          "url": ""
          }
        ]
    })
    setModal(false)
  }



const errorMsg = () => {
  let element;
  const responseData = addModuleData as {code: number, status: number, data: object}
  const responseData2 = updateModuleData as {code: number, status: number, data: object}
  if (responseData?.status === 200 || responseData2?.status === 200) {
    element = (
      <p className='w-full mt-4 text-[24px] text-green-600 text-center'>
        Course module added successfully!
      </p>
    );
  } else if (addModuleError || updateModuleError) {
    element = (
      <p className='w-full mt-4 text-[24px] text-red-600 text-center'>
        Something went wrong. Please try again!
      </p>
    );
  } else if (responseData?.code === 208 || responseData2?.code === 208) {
    element = (
      <p className='w-full mt-4 text-[24px] text-red-600 text-center'>
        A course module with this title already exist. KIndly use another descriptive title
      </p>
    );
  } else if(responseData?.code === 400 || responseData2?.code === 400) {
    element = (
      <p className='w-full mt-4 text-[24px] text-red-600 text-center'>
        Kindly upload a thumbnail for your course and ensure that you fill all the fields
      </p>
    );
  }
  return element;
};

    return (
      <div className={`${modal ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen w-screen z-20 bg-[#69686844] overflow-y-scroll' : 'hidden'}`}>
        {errorMsg()}
        <form className='w-[80%] ml-auto mr-auto relative my-10 rounded-[27px] flex justify-between items-start bg-white' onSubmit={onSubmit}>
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
                value={title}
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
               { tags.map((tag, index) => (
                tag.length === 0 ? null :
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
                  placeholder='Provide your keywords'
                />
              </div>
              <span className="text-[12px]">Kindly press enter after typing a keyword </span>
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
				        <span className="w-[50%] text-[12px]">
					        <p >{isSelectedVideo === 'false' ? 'Please wait...' : isSelectedVideo === 'true' && 'Uploaded!' }</p>
				        </span>
			        )}
              <input type="file" id="docpicker" onChange={onFileChange} accept=".pdf, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className='hidden'/>
              <label htmlFor='docpicker' className='rounded-[10px] bg-[#E8E8E8] py-[5px] px-[3px] flex justify-start items-center gap-x-[11px]'>
                <span className='text-[#0D142E] font-medium text-[1.25rem]'>Attach pdf</span>
                <div className='w-[11px] h-[22px]'>
                  <img src={pin} alt="attach pdf" />
                </div>
              </label>
              {isFilePicked && (
				        <span className="w-[50%] text-[12px]">
					        <p >{isSelectedFile === 'false' ? 'Please wait...' : isSelectedFile === 'true' && 'Uploaded!' }</p>
				        </span>
			        )}
            </div>
            <div className='mt-[59px] w-full flex justify-end items-start text-[1.12rem] font-bold font-productSans gap-x-[32px]'>
              <Button type='button' onClick={closeModal}  className="text-[#B0B0B0] bg-[#fff] rounded-[8px] py-[17px] px-[34px] border border-[#B0B0B0]">
                Cancel
              </Button>
              <Button type='submit' className="text-white bg-[#0D142E] rounded-[8px] py-[17px] px-[34px]">
                {addModuleLoader || updateModuleLoader  ? 'Please wait...' : 'Create'}
              </Button>
            </div>
          </div>
        </form>
      </div>
  )
}

