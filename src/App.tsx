import { GoTop } from 'components';
import { PublicRoutes, PortalRoutes, AdminRoutes } from './routes';
import { CreateCourseContextProvider, AdminAuthContextProvider, AnalyticsContextProvider, PortalContextProvider } from 'context'

function App() {
  return (
    <div className="App">
       <PublicRoutes />
       <GoTop />
        <CreateCourseContextProvider>
          <AdminAuthContextProvider>
             <AnalyticsContextProvider>
               <AdminRoutes />
             </AnalyticsContextProvider>
          </AdminAuthContextProvider>
        </CreateCourseContextProvider>
        <PortalContextProvider>
          <PortalRoutes />
        </PortalContextProvider>
    </div>
  );
}

export default App;
