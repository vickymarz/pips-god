import { Button } from 'components'
import mentors from '../../../../assets/images/mentors.png'
import cap from '../../../../assets/images/cap.png'

export const Mentorship = () => {
  return (
    <section className='bg-[#F8FAFC] bg-no-repeat px-[25px] lg:px-20 pt-[20px] lg:py-[63px]'>
      <div className='lg:bg-stars bg-no-repeat z-10 flex flex-col lg:flex-row justify-start lg:justify-between item-center lg:gap-x-[170px] gap-y-[10px]'>
        <div className='flex flex-col justify-start items-start'>
          <div className='w-[70px] h-[51px] lg:w-[120px] lg:h-[79px]'>
            <img src={cap} alt="graduation cap" />
          </div>
          <h2 className="font-bold text-[22px] lg:text-[48px] leading-[27px] lg:leading-[52px] text-[#0D142E] my-[16px] lg:my-[40px]">The Pipsgod Academy</h2>
          <p className="font-medium text-[16px] lg:text-[28px] text-[#19275E] leading-[22px] lg:leading-[40px]">Educating you in all aspects of Forex Trading  and Investing.</p>
          <Button type="button" className='rounded-[4px] lg:rounded-[10px] bg-[#0D142E] text-[#fff] py-[8px] px-[10px] lg:py-[20px] lg:px-[40px] text-[20px] lg:text-base font-bold mt-[25px]'>
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

