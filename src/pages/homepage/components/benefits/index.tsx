import { Button } from "components"
import { vipData, premiumData } from "./benefitData"

export const Benefits = () => {
    const vipBenefits = vipData.map(({title, id}) => (
        <li key={id} className="list-disc text-[#2D2D2D] tracking-[0.01em] leading-[1.06rem] md:leading-[2rem] text-[0.75rem] md:text-[1.37rem] mb-[0.93rem] md:mb-[1.87rem] font-medium">
           { title}
        </li>
    ))

    const premiumBenefits = premiumData.map(({title, id}) => (
        <li key={id} className="list-disc text-[#2D2D2D] tracking-[0.01em] leading-[1.06rem] md:leading-[2rem] text-[0.75rem] md:text-[1.37rem] mb-[0.93rem] md:mb-[1.87rem] font-medium">
           { title}
        </li>
    ))
  return (
    <section className='bg-[#F8FAFC] bg-no-repeat px-[1.6rem] md:px-[5rem] pt-[0.5rem] pb-[1.06rem] md:py-[3.12rem]'>
      <div className='md:bg-hill bg-no-repeat z-10'>
          <h2 className="text-center font-bold text-[1.37rem] md:text-[3rem] leading-[1.68rem] md:leading-[3.25rem] text-[#0D142E] my-[1rem] md:my-[2.5rem]">
          Our Packages
          </h2>
        <div className='flex flex-col md:flex-row items-start justify-start md:justify-between md:gap-x-[5.7rem]  gap-y-[9px]'>
          <div className="rounded-[10px] md:rounded-[20px] pt-[1rem] pb-[0.8rem] px-[0.75rem] md:pt-[2.12rem] md:pb-[1.62rem] md:px-[1.37rem] bg-white">
            <h3 className="text-[#343434] text-center text-[1.12rem] md:text-[2.12rem] mb-[0.43rem] md:mb-[0.87rem] font-medium">VIP Signal Group</h3>
            <p className="text-[#919191] leading-[1.31rem] md:leading-[2.5rem] text-[0.75rem] md:text-[1.37rem] font-medium">
              With our signals, you can trade at breakneck speed, increase profits, and decrease losses.
            </p>
            <ul className="px-[0.75rem] md:px-[1.5rem] mt-[1.31rem] md:mt-[2.6rem]">
              {vipBenefits}
            </ul>
            <div className="flex justify-center items-center">
            <Button type="button" className='rounded-[4px] md:rounded-[10px] bg-[#0D142E] text-[#fff] py-[0.5rem] px-[0.62rem] md:py-[1.25rem] md:px-[2.5rem] text-[0.62rem] md:text-[1.25rem] font-bold mt-[1.56rem]'>
              Subscribe
            </Button>
            </div>
          </div>
          <div className="rounded-[10px] md:rounded-[20px] pt-[1rem] pb-[0.81rem] px-[0.75rem] md:pt-[2.12rem] md:pb-[1.63rem] md:px-[1.37rem] bg-white">
            <h3 className="text-[#343434] text-center text-[1.12rem] md:text-[2.12rem] mb-[0.43rem] md:mb-[0.87rem] font-medium">Premium Mentorship</h3>
            <p className="text-[#919191] leading-[1.31rem] md:leading-[2.5rem] text-[0.75rem] md:text-[1.37rem] font-medium">
             Learn how to navigate the financial market and start making profits like a trading god.
            </p>
            <ul className="px-[0.75rem] md:px-[1.5rem] mt-[0.43rem] md:mt-[0.87rem]">
              {premiumBenefits}
            </ul>
            <div className="flex justify-center items-center">
            <Button type="button" className='rounded-[4px] md:rounded-[10px] bg-[#0D142E] text-[#fff] py-[0.5rem] px-[0.62rem] md:py-[1.25rem] md:px-[2.5rem] text-[0.62rem] md:text-[1.25rem] font-bold mt-[1.56rem]'>
              Subscribe
            </Button>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
  )
}

