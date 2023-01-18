import forex from '../../../../../assets/images/forex.png'

export const Values = () => {
  return (
    <section className='bg-flashesMobile lg:bg-flashes bg-cover bg-no-repeat'>
      <div className='md:bg-vector bg-no-repeat z-10 bg-center flex justify-between items-center gap-x-[1rem] gap-y-[0.5rem] px-[1.6rem] md:px-[5rem] pt-[1.4rem] md:py-[4rem] pb-[1rem]'>
        <div className='flex flex-col md:basis-3/6 justify-start items-center gap-y-[8px] md:gap-y-[75px]'>
            <h2 className="font-productSans font-bold text-[1.4rem] md:text-[3rem] leading-[1.7rem] md:leading-[3rem] text-[#343434]">Learn <span className='text-[#19275E]'>Everything</span> you need to know about <span className='text-[#19275E]'>Forex</span> and more!</h2>
            <p className="lg:font-medium text-[0.9rem] lg:text-[1.7rem] text-[#19275E] leading-[1.1rem] lg:leading-[2.5rem]">Our comprehensive courses cover everything from the basics of the forex market to advanced trading strategies. <br />
              You'll learn how to analyze market trends, manage risks, and make informed trades.
            </p>
        </div>
        <div className='object-cover'>
          <img src={forex} alt="forex trading" />
        </div>
      </div>
    </section>
  )
}

