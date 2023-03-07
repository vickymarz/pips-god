import { Route, Routes } from 'react-router';
import { ProtectedRoute } from 'utils';
import publicRoutesData from '../publicRoutesData';

export const PublicRoutes = () => {
    const publicRoutes = publicRoutesData.map(({ path, id, element }) => {
        return <Route key={id} path={`/${path}`} element={
        <ProtectedRoute>
            { element }
        </ProtectedRoute>
        } />;
    });

    return <Routes>{publicRoutes}</Routes>;
}
