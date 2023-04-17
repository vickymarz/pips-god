
import { Route, Routes } from 'react-router';
import { adminRoutesData } from '../adminRoutesData';
import { AdminProtectedRoute } from 'utils';

export const AdminRoutes = () => {
    const adminRoutes = adminRoutesData.map(({ path, id, element }) => {
        return <Route key={id} path={`/${path}`} element={
            <AdminProtectedRoute>
            {element}
           </AdminProtectedRoute>
        } />;
    });

    return <Routes>{adminRoutes}</Routes>;
}
