import { Button } from "components"

export const Intro = () => {
  return (
    <section className="text-center w-[90%] lg:w-[70%] mx-auto px-5 py-5 lg:px-20 pt-[4rem] lg:pt-[11rem] flex flex-col justify-center items center gap-y-[10px] lg:gap-y-[15px] pb-[0px]">
      <h2 className="font-bold text-[22px] lg:text-[65px] leading-[27px] lg:leading-[82px] text-white">The best Trading Academy</h2>
      <p className="font-medium text-[10px] lg:text-[25px] leading-[14px] lg:leading-[40px] text-[#E8E8E8]">We are committed to helping you succeed in the fast-paced world of foreign exchange. With our state-of-the-art trading platform and comprehensive educational resources, we provide everything you need to navigate the markets with confidence and achieve your financial goals.</p>
       <Button type="button" className='rounded-lg bg-white text-[#0D142E] lg:w-[25%] mx-auto py-[8px] px-[10px] text-[11px] lg:text-[20px] font-medium'>
          Get Free Courses
       </Button>
    </section>
  )
}

