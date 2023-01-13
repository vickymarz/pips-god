import forex from '../../../../assets/images/forex.png'

export const Values = () => {
  return (
    <section className='bg-flashes bg-no-repeat px-[25px] lg:px-20 pt-[20px] lg:py-[63px] pb-[16px]'>
      <div className='lg:bg-vector bg-no-repeat z-10 bg-center flex flex-col lg:flex-row justify-start lg:justify-between item-center lg:gap-x-[170px] gap-y-[10px]'>
        <div className='flex flex-col lg:basis-3/6 justify-start items-center gap-y-[8px] lg:gap-y-[75px]'>
            <h2 className="font-bold text-[22px] lg:text-[48px] leading-[27px] lg:leading-[48px] text-[#343434]">Learn <span className='text-[#19275E]'>Everything</span> you need to know about <span className='text-[#19275E]'>Forex</span> and more!</h2>
            <p className="lg:font-medium text-[14px] lg:text-[28px] text-[#19275E] leading-[18px] lg:leading-[40px]">Our comprehensive courses cover everything from the basics of the forex market to advanced trading strategies. <br />
              You'll learn how to analyze market trends, manage risks, and make informed trades.
            </p>
        </div>
        <div className='hidden lg:block'>
          <img src={forex} alt="forex trading" />
        </div>
      </div>
    </section>
  )
}

