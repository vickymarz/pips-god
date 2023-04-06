import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'

export const PortalProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const checkUserToken = () => {
        const userToken = localStorage.getItem('jwt-token')

        if (!userToken  || userToken === undefined) {
          setIsLoggedIn(false)
          return navigate('/login')
        }
        setIsLoggedIn(true)
    }

    useEffect(() => {
      checkUserToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

  return (
    <>
     {
        isLoggedIn ? children : null
     }
    </>
  )
}

