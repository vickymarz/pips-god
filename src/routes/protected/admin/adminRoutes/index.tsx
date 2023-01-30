
import { Route, Routes } from 'react-router';
import {adminRoutesData} from '../adminRoutesData';

export const AdminRoutes = () => {
    const adminRoutes = adminRoutesData.map(({ path, id, element }) => {
        return <Route key={id} path={`/${path}`} element={element} />;
    });

    return <Routes>{adminRoutes}</Routes>;
}
