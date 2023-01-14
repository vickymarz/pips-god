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
      <li key={id} className='flex justify-start items-center rounded-[10px] lg:rounded-[20px] mb-[14px] lg:mb-[0] bg-white shadow-cardShadowMobile lg:shadow-cardShadow gap-x-[4px] gap-x-[8px] p-[30px] p-[15px]'>
        <div className='w-[23px] h-[23px] lg:w-[47px] lg:h-[47px]'>
          <img src={arrow} alt="" />
        </div>
        <span className='text-[#040F1A] text-[14px] lg:text-[28px] font-medium'>{title}</span>
      </li>
    ))

  return (
    <section className='flex flex-col justify-start lg:justify-center items-start lg:items-center gap-y-[16px] lg:gap-y-[46px] px-[25px] lg:px-[80px] py-[16px] lg:py-[98px] bg-[#FFF5E3]'>
        <div className='flex flex-col justify-start lg:justify-center lg:items-center gap-y-[8px] lg:gap-y-[36px] lg:w-[50%] mx-auto'>
            <h2 className="lg:text-center lg:mb-[22px] font-bold text-[22px] lg:text-[48px] leading-[27px] lg:leading-[52px] text-[#343434]">
              Gain Practical Investment Knowledge
            </h2>
            <p className="lg:text-center lg:font-medium text-[14px] lg:text-[28px] text-[#19275E] leading-[19px] lg:leading-[40px]">
              Learn from the best team of Forex traders, our courses are the best because we offer;
            </p>
        </div>
        <ul className='lg:grid grid-cols-2 grid-rows-2 gap-[80px]' >
          {userPackages}
        </ul>
    </section>
  )
}

