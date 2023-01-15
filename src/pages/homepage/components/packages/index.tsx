import arrow from '../../../../assets/images/arrow.png'

export const Packages = () => {
    const packages = [
      {
        'id': '1',
        'title': 'Affordable VIP Signal group'
      },
      {
        'id': '2',
        'title': 'Free Educational tools'
      },
      {
        'id': '3',
        'title': 'Best Mentors at your disposal'
      },
      {
        'id': '4',
        'title': 'Access to free courses'
      },
    ]

    const userPackages = packages.map(({id, title}) => (
      <li key={id} className='flex justify-start items-center rounded-[10px] md:rounded-[20px] mb-[14px] md:mb-[0] bg-white shadow-cardShadowMobile md:shadow-cardShadow gap-x-[4px] md:gap-x-[8px] md:p-[30px] p-[15px]'>
        <div className='w-[23px] h-[23px] md:w-[47px] md:h-[47px]'>
          <img src={arrow} alt="" />
        </div>
        <span className='text-[#040F1A] text-[0.9rem] md:text-[1.7rem] font-medium'>{title}</span>
      </li>
    ))

  return (
    <section className='flex flex-col justify-start md:justify-center items-start md:items-center gap-y-[1rem] md:gap-y-[2.8rem] px-[1.6rem] md:px-[5rem] py-[1rem] md:py-[4rem] bg-[#FFF5E3]'>
        <div className='flex flex-col justify-start md:justify-center md:items-center gap-y-[8px] md:gap-y-[2rem] md:w-[70%] mx-auto'>
            <h2 className="md:text-center font-bold text-[1.4rem] md:text-[3rem] leading-[1.7rem] md:leading-[3rem] text-[#0D142E]">
              Gain Practical Investment Knowledge
            </h2>
            <p className="md:text-center font-medium text-[1rem] md:text-[1.7rem] text-[#19275E] leading-[1.4rem] md:leading-[2.5rem]">
              Learn from the best team of Forex traders, our courses are the best because we offer;
            </p>
        </div>
        <ul className='md:grid grid-cols-2 grid-rows-2 gap-[80px]' >
          {userPackages}
        </ul>
    </section>
  )
}

