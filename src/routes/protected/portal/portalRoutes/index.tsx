
import { Route, Routes } from 'react-router';
import { ProtectedRoute } from 'utils';
import {portalRoutesData} from '../portalRoutesData';

export const PortalRoutes = () => {
    const portalRoutes = portalRoutesData.map(({ path, id, element }) => {
        return <Route key={id} path={`/${path}`} element={
          <ProtectedRoute>
           { element }
          </ProtectedRoute>
        } />;
    });

    return <Routes>{portalRoutes}</Routes>;
}
