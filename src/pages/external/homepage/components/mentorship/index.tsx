import { Button } from 'components'
import mentors from '../../../../../assets/images/mentors.png'
import cap from '../../../../../assets/images/cap.png'

export const Mentorship = () => {
  return (
    <section className='bg-[#F8FAFC] bg-no-repeat px-[1.6rem] md:px-20 py-[1.2rem] md:py-[4rem]'>
      <div className='md:bg-stars bg-no-repeat z-10 flex flex-col md:flex-row justify-start md:justify-between item-center md:gap-x-[4rem] gap-y-[1rem]'>
        <div className='flex flex-col justify-start items-start'>
          <div className='w-[70px] h-[51px] md:w-[120px] md:h-[79px]'>
            <img src={cap} alt="graduation cap" />
          </div>
          <h2 className="font-productSans font-bold text-[1.4rem] md:text-[3rem] leading-[1.7rem] md:leading-[3rem] text-[#0D142E] my-[1rem] md:my-[2rem]">The Pipsgod
           <br/> Academy
          </h2>
          <p className="font-medium text-[1rem] md:text-[28px] text-[#19275E] leading-[1.4rem] md:leading-[40px]">Educating you in all aspects of Forex Trading  and Investing.</p>
          <Button type="button" className='font-productSans md:mt-[2rem] rounded-[4px] md:rounded-[10px] bg-[#0D142E] text-[#fff] py-[8px] px-[0.5rem] md:py-[1.2rem] md:px-[2.5rem] text-[0.6rem] md:text-base font-bold mt-[0.6rem]'>
            Start Learning
          </Button>
        </div>
        <div className='drop-shadow-mentorShadow'>
          <img src={mentors} alt="mentors"/>
        </div>
      </div>
    </section>
  )
}

