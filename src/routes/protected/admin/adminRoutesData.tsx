import { Admin } from '../../../pages'
import type {RouteObject} from 'react-router-dom'

export const adminRoutesData: RouteObject[] = [
    {
      id: '1',
      path: "/admin",
      element: <Admin />
    },
  ];

