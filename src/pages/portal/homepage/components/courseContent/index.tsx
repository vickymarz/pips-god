import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';
import video from '../../../../../assets/images/video-player.png'
import checked from '../../../../../assets/images/checked.png'
import { useGetModules, useGetModule } from 'hooks'
import { CreateCourseContextUse } from 'context';

  type courseType ={
    title: string,
    index: number,
    watched: boolean
  }

export const CourseContent = ({isClose, setIsClose}:{isClose: boolean, setIsClose: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const { data: allModules } = useGetModules()
  const {data: singleModule, refetch}  = useGetModule(allModules?.id)
  const {setModule} = CreateCourseContextUse()

  const handleClick = () => {
    refetch()
    setModule(singleModule)
  }

  const courses = allModules?.map(({title, index, watched}: courseType) => (
    <li onClick = {handleClick} className='border border-[#D3D3D3] bg-white px-[23px] py-[7px] flex flex-col justify-start gap-y-[16px] visited:bg-[#EFEFEF]'>
      <div className='flex justify-start items-center gap-x-[5px]'>
        <div className={`hidden ${watched && 'flex'} justify-start items-center w-[16px] h-[16px]`}>
          <img src={checked} alt='checked' className='object-cover'/>
        </div>
        <h3 className='text-[#19275E] font-medium text-[20px]'>{`${index}. ${title}`}</h3>
      </div>
      <div className='flex justify-start items-center gap-x-[8px]'>
        <div className='w-[18.8px] h-[18.8px]'>
          <img src={video} alt="video player" className='object-cover'/>
        </div>
        {/* <span className='text-[#19275E]'>6 min</span> */}
      </div>
    </li>
  ))

  return (
    <div className={`basis-[35%] ${isClose ? 'hidden' : ''} bg-white md:bg-none px-[10px] md:px-0 absolute top-[90px] md:top-0 right-0 min-h-screen md:h-initial md:static`}>
      <h2 className='shadow-headerShadow py-[15px] px-[20px] flex justify-between items-center'>
        <span className='text-[#0D142E] font-bold text-[20px] font-productSans'>Course Content</span>
        <Button type="button"  className="z-10" onClick={() => setIsClose(true)}>
			    <FontAwesomeIcon icon={faTimes} className={`text-[#2D2D2D] text-[20px]`}/>
			  </Button>
      </h2>
      <ul className='flex flex-col justify-start gap-y-[12px] mt-[12px]'>
        { allModules === undefined ?
          <li className="text-[#0D142E] flex justify-center items-center">Not available</li>
            :
          courses
        }
      </ul>
    </div>
  )
}

