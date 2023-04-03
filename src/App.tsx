import { GoTop } from 'components';
import { PublicRoutes, PortalRoutes, AdminRoutes } from './routes';
import { GetCourseContextProvider, CreateCourseContextProvider, AdminAuthContextProvider, AnalyticsContextProvider } from 'context'

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
      <GetCourseContextProvider>
        <PortalRoutes />
      </GetCourseContextProvider>
    </div>
  );
}

export default App;
