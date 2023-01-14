import { Button, Input } from 'components'
import ellipse from '../../../../assets/images/ellipse.png'
import leftHill from '../../../../assets/images/left-hill.png'
import rightHill from '../../../../assets/images/right-hill.png'

export const Membership = () => {
  return (
    <section className='bg-[#FFF6E3] bg-no-repeat lg:py-[63px]'>
      <div style={{
              background: window.innerWidth >= 768 ? `url(${leftHill}) no-repeat, url(${rightHill}) no-repeat right` : ''
            }}
          className='px-[25px] lg:px-20 py-[22px] z-10 flex flex-col justify-center items-center gap-y-[16px] lg:gap-y-[44px]'>
          <h2 className="text-center font-bold text-[22px] lg:text-[48px] leading-[27px] lg:leading-[52px] text-[#494949]">
            Sign up for Our VIP Signal Group
          </h2>
          <p className="lg:w-[65%] mx-auto text-center lg:font-medium text-[14px] lg:text-[28px] text-[#19275E] leading-[19px] lg:leading-[40px]">
            You'll have access to exclusive signals, analysis, and market insights that are not available to the general public. You'll also receive personalized support and one-on-one coaching from our team of experts. Sign up now and let us help you achieve your financial goals!
          </p>
          <div className='flex justify-center items-center'>
            <Input
              type='email'
              name='email'
              placeholder='Enter email address'
              className='py-[10px] lg:py-[20px] pl-[13px] lg:pl-[36px] lg:pr-[136px] rounded-[4px] lg:rounded-[10px] shadow-textShadowMobile lg:shadow-textShadow bg-white text-[#CCCCCC] font-medium text-[12px] lg:text-[28px]'
            />
            <div className='relative'>
                <img src={ellipse} alt="" className='block w-[10px] h-[10px] lg:w-[26px] lg:h-[26px] object-contain absolute top-[-5px] lg:top-[-10px] right-0'/>
              <Button type="button" className='rounded-tl-none rounded-br-[10px] bg-[#0D142E] text-[#fff] py-[12px] px-[8px] lg:py-[28px] lg:px-[21px] text-[8px] lg:text-[20px] lg:text-base font-bold'>
                Sign up for VIP mentorship
              </Button>
            </div>
          </div>
        </div>
    </section>
  )
}

