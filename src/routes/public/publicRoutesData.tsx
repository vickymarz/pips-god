import { ForgetPassword, Homepage, ResetLink, SignIn, Signup,  ResetPassword  } from '../../pages'
import type {RouteObject} from 'react-router-dom'

const publicRoutesData: RouteObject[] = [
    {
      id: '1',
      path: "/",
      element: <Homepage />,
    },
    {
      id: '2',
      path: "create_account",
      element: <Signup />,
    },
    {
      id: '3',
      path: "login",
      element: <SignIn />,
    },
    {
      id: '4',
      path: "forgot_password",
      element: <ForgetPassword />,
    },
    {
      id: '5',
      path: "reset_password",
      element: <ResetPassword />,
    },
    {
      id: '6',
      path: "reset_link",
      element: <ResetLink/>,
    },
  ];

  export default publicRoutesData
