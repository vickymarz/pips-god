import { Homepage, SignIn, Signup } from '../../pages'
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
    }
  ];

  export default publicRoutesData
