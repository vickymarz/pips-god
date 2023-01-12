import { Route, Routes } from 'react-router';
import publicRoutesData from '../publicRoutesData';

export const PublicRoutes = () => {
    const publicRoutes = publicRoutesData.map(({ path, id, element }) => {
        return <Route key={id} path={`/${path}`} element={element} />;
    });

    return <Routes>{publicRoutes}</Routes>;
}
