
import { Route, Routes } from 'react-router';
import { adminRoutesData } from '../adminRoutesData';
import { ProtectedRoute } from 'utils';

export const AdminRoutes = () => {
    const adminRoutes = adminRoutesData.map(({ path, id, element }) => {
        return <Route key={id} path={`/${path}`} element={
            <ProtectedRoute>
            {element}
           </ProtectedRoute>
        } />;
    });

    return <Routes>{adminRoutes}</Routes>;
}
