import { Homepage } from '../../pages/homepage'
import type {RouteObject} from 'react-router-dom'

const publicRoutesData: RouteObject[] = [
    {
      id: '1',
      path: "/",
      element: <Homepage />,
    }
  ];

  export default publicRoutesData
