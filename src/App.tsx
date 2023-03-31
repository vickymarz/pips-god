import { GoTop } from 'components';
import { PublicRoutes, PortalRoutes, AdminRoutes } from './routes';
import { GetCourseContextProvider, CreateCourseContextProvider, AdminAuthContextProvider } from 'context'

function App() {
  return (
    <div className="App">
       <PublicRoutes />
       <GoTop />
        <CreateCourseContextProvider>
          <AdminAuthContextProvider>
            <AdminRoutes />
          </AdminAuthContextProvider>
        </CreateCourseContextProvider>
      <GetCourseContextProvider>
        <PortalRoutes />
      </GetCourseContextProvider>
    </div>
  );
}

export default App;
