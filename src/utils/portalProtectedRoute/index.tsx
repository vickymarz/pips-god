import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import userServices from "services/userServices";
import { useMutation } from "react-query";
import loader from '../../assets/images/200w.gif'

type TokenType = {
  code: number,
  data: {
    access: object,
    refresh: object
  }
}

export const PortalProtectedRoute = ({children}: {children: React.ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()
  const tokens = JSON.parse(localStorage.getItem('UTS') || '{}')
  const refreshToken = tokens?.refresh?.token
  const accessToken = tokens?.access?.token

    const { mutate, isLoading } = useMutation(userServices.refreshTokens, {
      onSuccess: (data) => {
        const responseData = data as TokenType
        if (responseData.code === 200) {
            setIsLoggedIn(true)
            localStorage.setItem("", JSON.stringify(responseData?.data));
        } else {
            setIsLoggedIn(false)
            return navigate('/login')
        }
      }
    })

    useEffect(() => {
      if (!accessToken  || accessToken === undefined) {
        setIsLoggedIn(false)
        return navigate('/login')
      } else if(refreshToken) {
        mutate({'refreshToken': refreshToken})
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
     {
      isLoggedIn ?
        isLoading ?
          <div className="bg-[#ffffffe6] h-screen flex justify-center items-center w-full">
            <div className=''>
              <img src={loader} alt='' />
            </div>
          </div> :
            children :
          <div className="bg-[#ffffffe6] h-screen flex justify-center items-center w-full">
            <div className=''>
                <img src={loader} alt='' />
            </div>
          </div>
      }
    </>
  )
}
