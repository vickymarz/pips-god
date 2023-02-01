
import { Route, Routes } from 'react-router';
import {portalRoutesData} from '../portalRoutesData';

export const PortalRoutes = () => {
    const portalRoutes = portalRoutesData.map(({ path, id, element }) => {
        return <Route key={id} path={`/${path}`} element={element} />;
    });

    return <Routes>{portalRoutes}</Routes>;
}
