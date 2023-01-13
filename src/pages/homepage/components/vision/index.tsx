import student from '../../../../assets/images/student.png'

export const Vision = () => {
  return (
    <section className='px-[25px] lg:px-[0] py-[8px] lg:py-[0] bg-[#FFF5E3] flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start gap-y-[8px] lg:gap-y-[0px] lg:gap-x-[58px]'>
        <div className='basis-2/4 lg:order-last flex flex-col justify-start items-start gap-y-[8px] lg:pt-[28px] lg:pr-[87px] lg:pb-[22px]'>
            <span className="lg:mb-[22px] px-[12px] lg:px-[44px] lg:py-[4px] py-[1px] rounded-[13.45px] rounded-[60px] bg-[#CFF1FC] text-[#19275E] text-[14px] lg:text-[32px] font-[600]">Our vision</span>
            <h2 className="lg:mb-[22px] font-bold text-[22px] lg:text-[48px] leading-[27px] lg:leading-[52px] text-[#343434]">Learn at your pace, <br />No restrictions, <br />No limits.</h2>
            <p className="lg:font-medium text-[14px] lg:text-[28px] text-[#19275E] leading-[19px] lg:leading-[40px]">We envision a place where traders of all levels can come to learn and grow, from beginners to experienced professionals looking to sharpen their skills.
              <span className='mb-[10px] block'></span>
              Our academy will offer a wide range of educational resources and tools all designed to help traders develop their knowledge and expertise.
            </p>
        </div>
        <div className='basis-2/4' >
          <img src={student} alt="student" />
        </div>
    </section>
  )
}

