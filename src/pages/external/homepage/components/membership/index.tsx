import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from 'components'
import ellipse from '../../../../../assets/images/ellipse.png'
import leftHill from '../../../../../assets/images/left-hill.png'
import rightHill from '../../../../../assets/images/right-hill.png'
import hill from '../../../../../assets/images/hill-mobile.png'
import { Button } from 'components'

export const Membership = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<null | string>(null)

  const navigate = useNavigate()

  const emailValidation = () => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regex.test(email) === false){
        setError("Email is not valid");
        return false;
    }
    return true;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setEmail(e.target.value)

  const handleSubmit = async () => {
    if(emailValidation()) {
      navigate('/vip_payment', { state: { email } })
    }
  }

  return (
    <section className='bg-[#FFF6E3] bg-no-repeat'>
      <div style={{
              background: window.innerWidth >= 768 ? `url(${leftHill}) no-repeat, url(${rightHill}) no-repeat right` : `url(${hill}) no-repeat`
            }}
          className='px-[1.6rem] md:py-[4rem] py-[1.4rem] z-10 flex flex-col justify-center items-center gap-y-[16px] md:gap-y-[2.7rem]'>
          <h2 className="font-productSans text-center font-bold text-[1.4rem] md:text-[3rem] leading-[1.7rem] md:leading-[3rem] text-[#494949]">
            Sign up for Our <span className='text-[#0D142E]'>VIP Signal Group</span>
          </h2>
          <p className="md:w-[65%] mx-auto text-center font-medium text-[14px] md:text-[1.7rem] text-[#19275E] leading-[19px] md:leading-[2rem]">
            You'll have access to exclusive signals, analysis, and market insights that are not available to the general public. You'll also receive personalized support and one-on-one coaching from our team of experts. Sign up now and let us help you achieve your financial goals!
          </p>
          <div className='flex justify-center items-center'>
            <Input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter email address'
              className='py-[0.5rem] md:py-[1.5rem] pl-[0.8rem] md:pl-[1rem] md:pr-[1.5rem] rounded-tl-[4px] md:rounded-tl-[10px] shadow-textShadowMobile md:shadow-textShadow bg-white text-[#CCCCCC] font-medium text-[0.7rem] md:text-[1rem] '
            />
            <div className='relative'>
              <img src={ellipse} alt="" className='block w-[10px] h-[10px] md:w-[26px] md:h-[26px] object-contain absolute top-[-5px] md:top-[-30px] right-[-10px]'/>
              <Button type='button' onClick={handleSubmit} className='font-productSans rounded-tl-none rounded-br-[10px] bg-[#0D142E] text-[#fff] py-[0.7rem] px-[8px] md:py-[1.5rem] md:px-[1.3rem] text-[0.5rem] md:text-[1.2rem] font-bold'>
                Sign up for VIP mentorship
              </Button>
            </div>
          </div>
            {error !== "" && (
              <small className="text-red-500 text-xs mdmt-[-20px] mt-[10px]">{error}</small>
             )}
        </div>
    </section>
  )
}

