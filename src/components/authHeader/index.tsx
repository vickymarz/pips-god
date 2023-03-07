import { Link } from 'react-router-dom'
import logo from '../../assets/images/pipsgod.png'

type authHeaderType = {
    title: string,
    text: string
}

export const AuthHeader = ({title, text}:authHeaderType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-[1.8rem]">
     <div className="flex justify-center items-center md:hidden">
      <Link to={'/'}>
        <img src={logo} alt="pipsgod logo" />
      </Link>
     </div>
     <div className='flex flex-col justify-center md:justify-start md:items-start items-center gap-y-[0.5rem]'>
        <h2 className='text-[#0D142E] font-bold text-[1.4rem] md:text-[1.87rem] font-productSans'>{title}</h2>
        <p className='px-[40px] md:px-[0] text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] md:text-[1.31rem] font-medium'>{text}</p>
     </div>
    </div>
  )
}

