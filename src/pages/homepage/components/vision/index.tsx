import student from '../../../../assets/images/student.png'

export const Vision = () => {
  return (
    <section className='px-[1.6rem] md:px-[0] pt-[1.4rem] pb-[1rem] md:py-[0] bg-[#FFF5E3] flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start gap-y-[0.5rem] md:gap-y-[0px] md:gap-x-[58px]'>
        <div className='basis-3/6 md:order-last flex flex-col justify-start items-start gap-y-[0.5rem] md:gap-y-[1.4rem] md:pt-[1.7rem] md:pr-[5.4rem] md:pb-[1.4rem]'>
          <span className="font-productSans px-[0.7rem] md:px-[2.7rem] md:py-[4px] py-[1px] rounded-[13.45px] md:rounded-[60px] bg-[#CFF1FC] text-[#19275E] text-[0.9rem] md:text-[2rem] font-[600]">Our vision</span>
          <h2 className="font-productSans font-bold text-[1.4rem] md:text-[3rem] leading-[1.7rem] md:leading-[3rem] text-[#343434]">Learn at your pace, <br />No restrictions, <br />No limits.</h2>
          <p className="md:font-medium text-[0.9rem] md:text-[1.7rem] text-[#19275E] leading-[1.1rem] md:leading-[2.5rem]">We envision a place where traders of all levels can come to learn and grow, from beginners to experienced professionals looking to sharpen their skills.
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

