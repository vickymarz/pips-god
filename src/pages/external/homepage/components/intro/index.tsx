import { Button } from "components"

export const Intro = () => {
  return (
    <section className="text-center px-6 pt-[5.5rem] md:pt-[13.5rem] flex flex-col justify-center items-center gap-y-[0.5rem] md:gap-y-[1.2rem]">
      <h2 className="font-productSans font-bold text-[1.4rem] md:text-[4.2rem] leading-[1.7rem] md:leading-[5rem] text-white">The best Trading <br />Academy</h2>
      <p className="md:w-[70%] mx-auto md:font-medium text-[0.6rem] md:text-[1.7rem] leading-[0.9rem] md:leading-[2.5rem] text-[#E8E8E8]">We are committed to helping you succeed in the fast-paced world of foreign exchange. With our state-of-the-art trading platform and comprehensive educational resources, we provide everything you need to navigate the markets with confidence and achieve your financial goals.</p>
       <Button type="button" className='font-productSans rounded-[3.7px] lg:rounded-lg bg-white text-[#0D142E] py-[8.5px] px-[6px] md:py-[20px] md:px-[40px] text-[0.7rem] md:text-[1.2rem] font-bold md:mt-[3.5rem] mb-[13px] md:mb-[2.7rem]'>
          Get Free Courses
       </Button>
    </section>
  )
}

