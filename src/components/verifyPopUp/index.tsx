
export const VerifyPopup = ({verify, verifyData}: {verify: boolean, verifyData?: any}) => {
    return (
      <div className={`${verify ? 'fixed top-0 right-0 left-0 bottom-0 min-h-screen w-screen w-screen z-20 bg-[#0D142e] overflow-y-scroll' : 'hidden'}`}>
        <div className='w-[80%] md:w-[50%] ml-auto mr-auto relative my-44 rounded-[27px]  bg-white p-[30px] md:p-[40px]'>
          {
            verifyData.status === 208 ?
            <>
               <h2 className=' mb-[20px] text-[#0D142E] font-bold text-[2rem] text-center'>Apologies!</h2>
               <p>Kindly proceed to login, your account has been registered.</p>
            </> :
            <>
              <h2 className=' mb-[20px] text-[#0D142E] font-bold text-[2rem] text-center'>Registration Failed!</h2>
              <p>Sorry, you cannot register at this time!</p>
            </>
          }
        </div>
      </div>
  )
}

