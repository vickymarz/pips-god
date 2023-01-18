import { Homepage, Signup } from '../../pages'
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
    }
  ];

  export default publicRoutesData
