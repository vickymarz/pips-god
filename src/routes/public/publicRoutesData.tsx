import { ForgetPassword, Homepage, ResetLink, SignIn, Signup,  ResetPassword, ResetToken, VipPayment, MentorshipPayment, EmailVerification, EmailVerificationSuccess, AdminSignup, AdminSignIn, ContactUs  } from '../../pages'
import type { RouteObject } from 'react-router-dom'
import { PaystackCallback } from 'components';
import { ResetPasswordModal } from 'pages/external/resetPassword/component/resetPasswordModal'

const publicRoutesData: RouteObject[] = [
    {
      id: '1',
      path: "/",
      element: <Homepage />
    },
    {
      id: '2',
      path: "register/:reference",
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
      path: "paystack/success/:id",
      element: <PaystackCallback />,
    },
    {
      id: '12',
      path: "reset_password/success",
      element: <ResetPasswordModal />
    },
    {
      id: '13',
      path: "email/verify_email",
      element: <EmailVerification />
    },
    {
      id: '14',
      path: "verify-email/",
      element: <EmailVerificationSuccess  />
    },
    {
      id: '14',
      path: "admin-register",
      element: <AdminSignup  />
    },
    {
      id: '14',
      path: "admin-login",
      element: <AdminSignIn  />
    },
    {
      id: '15',
      path: "contact-us",
      element: <ContactUs />
    }
  ];

  export default publicRoutesData
