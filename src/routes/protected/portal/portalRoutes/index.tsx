import { Route, Routes } from 'react-router';
import { PortalProtectedRoute } from 'utils';
import {portalRoutesData} from '../portalRoutesData';

export const PortalRoutes = () => {
    const portalRoutes = portalRoutesData.map(({ path, id, element }) => {
        return <Route key={id} path={`/${path}`} element={
          <PortalProtectedRoute>
           {element}
          </PortalProtectedRoute>
        } />;
    });
    return <Routes>{portalRoutes}</Routes>;
}
