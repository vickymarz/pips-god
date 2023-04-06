import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'

export const AdminProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const checkUserToken = () => {
      const adminToken = localStorage.getItem('admin-token')

      if(!adminToken || adminToken === undefined) {
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

