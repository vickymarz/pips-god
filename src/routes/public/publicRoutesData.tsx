import { ForgetPassword, Homepage, ResetLink, SignIn, Signup,  ResetPassword, ResetToken } from '../../pages'
import type {RouteObject} from 'react-router-dom'

const publicRoutesData: RouteObject[] = [
    {
      id: '1',
      path: "/",
      element: <Homepage />
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
      id: '6',
      path: "reset_link",
      element: <ResetLink/>,
    },
    {
      id: '7',
      path: "reset_token",
      element: <ResetToken />,
    },
    {
      id: '8',
      path: "reset_password",
      element: <ResetPassword />,
    },
  ];

  export default publicRoutesData
