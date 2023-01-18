import logo from '../../assets/images/pipsgod.png'

type authHeaderType = {
    title: string,
    text: string
}

export const AuthHeader = ({title, text}:authHeaderType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-[1.8rem]">
     <div className="flex justify-center items-center">
       <img src={logo} alt="pipsgod logo" />
     </div>
     <div className='flex flex-col justify-center items-center gap-y-[0.5rem]'>
        <h2 className='text-[#0D142E] font-bold text-[1.4rem]'>{title}</h2>
        <p className='px-[40px] text-center text-[#8B8B8B] leading-[1.37rem] text-[1rem] font-medium'>{text}</p>
     </div>
    </div>
  )
}

