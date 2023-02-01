import {useState} from 'react'
import { PortalHeader } from 'components'
import { Lectures, CourseContent } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components';

export const Portal = () => {
  const [isClose, setIsClose] = useState(false)
  return (
    <div>
        <PortalHeader />
        <div className='relative md:flex justify-start pt-[90px] md:pt-[120px] px-5 md:px-[80px] gap-x-[43px]'>
        <Lectures />
        <CourseContent isClose={isClose} setIsClose={setIsClose}/>
        <Button type="button"  className="z-10 fixed bottom-[30px] right-[40px]" onClick={() => setIsClose(!isClose)}>
			    <FontAwesomeIcon icon={faBookOpen} className={`text-[#0D142E] text-[30px]`}/>
			  </Button>
        </div>
    </div>
  )
}

