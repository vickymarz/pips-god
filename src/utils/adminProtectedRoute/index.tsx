import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import userServices from "services/userServices";
import { useMutation } from "react-query";


type TokenType = {
  code: number,
  data: {
    access: object,
    refresh: object
  }
}

export const AdminProtectedRoute = ({children}: {children: React.ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()
  const tokens = JSON.parse(localStorage.getItem('admin-tokens') || '{}')
  const refreshToken = tokens?.refresh?.token
  const accessToken = tokens?.access?.token

    const { mutate } = useMutation(userServices.refreshTokens, {
      onSuccess: (data) => {
        const responseData = data as TokenType
        if (responseData.code === 200) {
            setIsLoggedIn(true)
            localStorage.setItem("admin-tokens", JSON.stringify(responseData?.data));
        } else {
            setIsLoggedIn(false)
            return navigate('/admin-login')
        }
      }
    })

    useEffect(() => {
      if (!accessToken  || accessToken === undefined) {
        setIsLoggedIn(false)
        return navigate('/admin-login')
      } else if(refreshToken) {
        mutate({'refreshToken': refreshToken})
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
     {
        isLoggedIn ? children : null
     }
    </>
  )
}
