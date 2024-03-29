// import { useState } from 'react';
// import MediaQuery from 'react-responsive';
import { useInView } from 'react-intersection-observer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {Button} from "components";
import { Logo } from 'components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import star from '../../assets/images/star.png'
// import arrow from '../../assets/images/arrow-up.png'
import { useNavigate } from "react-router-dom"
import userServices from "services/userServices";
import { useMutation } from "react-query";
import { useGetModulesBrief } from 'hooks'

export const PortalHeader = () => {
  const tokens = JSON.parse(localStorage.getItem('UTS') || '{}')
  const refreshToken = tokens?.refresh?.token
  const navigate = useNavigate()

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { data } = useGetModulesBrief()
  const progress = () => {
    let userProgress: number
    const allModules = data?.length
    console.log(allModules, 'all modules')
    const completedModules = data?.filter((docs: any) => docs?.users[0]?.user_course_module?.isCompleted === true).length
    console.log(completedModules, 'completed modules')
    if(allModules !== undefined && completedModules !== undefined) {
      userProgress = Math.round(((completedModules) / (allModules || 1)) * 100)
      return userProgress
    } else {
      return userProgress = 0
    }
  }

  const { mutate, isSuccess} = useMutation(userServices.logout)

   if(isSuccess) {
      localStorage.removeItem('UTS')
      navigate('/login')
   }

  const handleLogout = () => {
    mutate({'refreshToken': refreshToken})
  }
  return (
    <>
    <header className={`w-full h-20 md:h-24 fixed top-0 left-0 right-0 px-5 py-5 md:px-[5%] flex justify-between items-center z-10 bg-[#fff] ${inView ? '' : 'shadow-headerShadow'}`}>
      <div className='flex justify-start items-center gap-x-[38px]'>
        <Logo />
        <h2 className='hidden md:block text-[#0D142E] text-[26px] font-bold'>Get Started in Forex Trading.</h2>
      </div>
      {/* <MediaQuery maxWidth={768}> */}
        {/* {matches =>
          matches ? (
            <> */}
              {/* {isMenuOpen ? (
			            <Button type="button" onClick={handleMenuOpen} className="z-10">
				            <FontAwesomeIcon icon={faTimes} className='text-[25px] text-[#232323]'/>
				          </Button>
				        ) : (
				          <Button type="button" onClick={handleMenuOpen}>
				            <FontAwesomeIcon icon={faBars}  className='text-[25px] text-[#232323]'/>
				          </Button>
				        )
              } */}

              {/* <div className='hidden md:flex justify-start items-center gap-x-[25px]'> */}
                {/* <div className='flex justify-start items-center gap-x-[15px]'>
                  <div className='flex justify-center items-center w-[17px] h-[17px]'>
                    <img src={star} alt="rating" />
                  </div>
                  <span className='text-[#0D142E] font-medium text-[18px]'>Rate this course</span>
                </div> */}
                {/* <div className='flex justify-start items-center gap-x-[12px]'>
                  <div className='flex justify-center flex-col items-center gap-y-[1rem]' style={{ width: '26px', height: '26px'}}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`}   styles={buildStyles({
                      strokeLinecap: 'butt',
                      textSize: '1.75rem',
                      pathTransitionDuration: 0.5,
                      pathColor: `B0B0B0`,
                      textColor: '#fff',
                      trailColor: '#cdcdcd',
                    })}/>
                  </div>
                  <span className='text-[#0D142E] font-medium text-[18px]'>Your progress</span>
               </div> */}
               {/* <Button type="button" className='font-productSans rounded-[8px] bg-[#19275E] text-[#fff] py-[0.5rem] px-[0.9rem] text-[0.9rem] flex justify-center items-center gap-x-[10px]'>
                 <span>Share</span>
                 <div className='w-[15px] h-[12px]'>
                  <img src={arrow} alt="share" />
                 </div>
               </Button> */}
               {/* <Button type="button" className='font-productSans rounded-[8px] bg-[#19275E] text-[#fff] py-[0.5rem] px-[0.9rem] text-[0.9rem] flex justify-center items-center gap-x-[10px]'>
                 Logout
               </Button>
             </div> */}

            {/* </>
          ) :
          ( */}
            <>
             <div className='flex justify-start items-center gap-x-[25px]'>
                {/* <div className='flex justify-start items-center gap-x-[15px]'>
                  <div className='flex justify-center items-center w-[17px] h-[17px]'>
                    <img src={star} alt="rating" />
                  </div>
                  <span className='text-[#0D142E] font-medium text-[18px]'>Rate this course</span>
                </div> */}
                <div className='flex justify-start items-center gap-x-[12px]'>
                  <div className='flex justify-center flex-col items-center gap-y-[1rem]' style={{ width: '35px', height: '35px'}}>
                    <CircularProgressbar value={progress()} text={`${progress()}%`}   styles={buildStyles({
                      strokeLinecap: 'butt',
                      textSize: '2rem',
                      pathTransitionDuration: 0.5,
                      pathColor: `#19275E`,
                      textColor: '#0D142E',
                      trailColor: '#cdcdcd',
                    })}/>
                  </div>
                  <span className='text-[#0D142E] font-medium text-[18px]'>Your progress</span>
               </div>
               {/* <Button type="button" className='font-productSans rounded-[8px] bg-[#19275E] text-[#fff] py-[0.5rem] px-[0.9rem] text-[0.9rem] flex justify-center items-center gap-x-[10px]'>
                 <span>Share</span>
                 <div className='w-[15px] h-[12px]'>
                  <img src={arrow} alt="share" />
                 </div>
               </Button> */}
                <Button type="button" onClick={handleLogout} className='font-productSans rounded-[8px] bg-[#19275E] text-[#fff] py-[0.5rem] px-[0.9rem] text-[0.9rem] flex justify-center items-center gap-x-[10px]'>
                  Logout
               </Button>
             </div>
            </>
          {/* ) */}
        {/* } */}
        {/* </MediaQuery> */}
    </header>
    <div ref={ref}></div>
  </>
  )
}


