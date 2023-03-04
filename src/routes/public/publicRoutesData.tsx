import { ForgetPassword, Homepage, ResetLink, SignIn, Signup,  ResetPassword, ResetToken, VipPayment, MentorshipPayment } from '../../pages'
import type {RouteObject} from 'react-router-dom'
import { PaystackCallback } from 'components';

const publicRoutesData: RouteObject[] = [
    {
      id: '1',
      path: "/",
      element: <Homepage />
    },
    {
      id: '2',
      path: "register",
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
    {
      id: '9',
      path: "vip_payment",
      element: <VipPayment />,
    },
    {
      id: '10',
      path: "mentorship_payment",
      element: <MentorshipPayment />,
    },
    {
      id: '11',
      path: "paystack/success",
      element: <PaystackCallback />,
    }
  ];

  export default publicRoutesData
