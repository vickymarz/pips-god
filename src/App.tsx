import { GoTop } from 'components';
import { PublicRoutes, PortalRoutes, AdminRoutes } from './routes';
import { CreateCourseContextProvider, AdminAuthContextProvider, AnalyticsContextProvider } from 'context'

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
         <PortalRoutes />
        </CreateCourseContextProvider>
    </div>
  );
}

export default App;
