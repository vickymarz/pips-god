import { Button } from "components"
import { vipData, premiumData } from "./benefitData"

export const Benefits = () => {
    const vipBenefits = vipData.map(({title, id}) => (
        <li key={id} className="list-disc text-[#2D2D2D] tracking-[0.01em] leading-[17px] lg:leading-[32px] text-[12px] lg:text-[22px] mb-[15px] lg:mb-[30px] font-medium">
           { title}
        </li>
    ))

    const premiumBenefits = premiumData.map(({title, id}) => (
        <li key={id} className="list-disc text-[#2D2D2D] tracking-[0.01em] leading-[17px] lg:leading-[32px] text-[12px] lg:text-[22px] mb-[7px] lg:mb-[16px] font-medium">
           { title}
        </li>
    ))
  return (
    <section className='bg-[#F8FAFC] bg-no-repeat px-[25px] lg:px-20 pt-[8px] pb-[17px] lg:py-[50px]'>
      <div className='lg:bg-hill bg-no-repeat z-10'>
          <h2 className="text-center font-bold text-[22px] lg:text-[48px] leading-[27px] lg:leading-[52px] text-[#0D142E] my-[16px] lg:my-[40px]">
          Our Packages
          </h2>
        <div className='flex flex-col lg:flex-row items-start justify-start lg:justify-center lg:gap-x-[92px] gap-y-[9px]'>
          <div className="rounded-[10px] lg:rounded-[20px] pt-[16px] pb-[13px] px-[12px] lg:pt-[34px] lg:pb-[26px] lg:px-[22px] bg-white">
            <h3 className="text-[#343434] text-center text-[18px] lg:text-[34px] mb-[7px] lg:mb-[14px] font-medium">VIP Signal Group</h3>
            <p className="text-[#919191] leading-[21px] lg:leading-[40px] text-[12px] lg:text-[22px] font-medium">
              With our signals, you can trade at breakneck speed, increase profits, and decrease losses.
            </p>
            <ul className="px-[12px] lg:px-[24px] mt-[21px] lg:mt-[42px]">
              {vipBenefits}
            </ul>
            <Button type="button" className='rounded-[4px] lg:rounded-[10px] bg-[#0D142E] text-[#fff] py-[8px] px-[10px] lg:py-[20px] lg:px-[40px] text-[20px] lg:text-base font-bold mt-[25px]'>
              Subscribe
            </Button>
          </div>
          <div className="rounded-[10px] lg:rounded-[20px] pt-[16px] pb-[13px] px-[12px] lg:pt-[34px] lg:pb-[26px] lg:px-[22px] bg-white">
            <h3 className="text-[#343434] text-center text-[18px] lg:text-[34px] mb-[7px] lg:mb-[14px] font-medium">Premium Mentorship</h3>
            <p className="text-[#919191] leading-[21px] lg:leading-[40px] text-[12px] lg:text-[22px] font-medium">
             Learn how to navigate the financial market and start making profits like a trading god.
            </p>
            <ul className="px-[12px] lg:px-[24px] mt-[7px] lg:mt-[14px]">
              {premiumBenefits}
            </ul>
            <Button type="button" className='rounded-[4px] lg:rounded-[10px] bg-[#0D142E] text-[#fff] py-[8px] px-[10px] lg:py-[20px] lg:px-[40px] text-[20px] lg:text-base font-bold mt-[25px]'>
              Subscribe
            </Button>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

