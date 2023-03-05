
export const VerifyPopup = ({verify}: {verify: boolean}) => {
    return (
      <div className={`${verify ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen w-screen z-20 bg-[#69686844] overflow-y-scroll' : 'hidden'}`}>
        <div className='w-[80%] md:w-[50%] ml-auto mr-auto relative my-44 rounded-[27px]  bg-white p-[20px]'>
          <h2 className=' mb-[20px] text-[#0D142E] font-bold text-[2rem] text-center'>Transaction not found</h2>
           <p>Sorry, your transaction cannot be found. Please ensure that you make payment before you proceed. Thanks!</p>
        </div>
      </div>
  )
}

