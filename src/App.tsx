import { GoTop } from 'components';
import { PublicRoutes, PortalRoutes, AdminRoutes } from './routes';
import { GetCourseContextProvider, CreateCourseContextProvider } from 'context'

function App() {
  return (
    <div className="App">
       <PublicRoutes />
       <GoTop />
      <CreateCourseContextProvider>
        <AdminRoutes />
      </CreateCourseContextProvider>
      <GetCourseContextProvider>
        <PortalRoutes />
      </GetCourseContextProvider>
    </div>
  );
}

export default App;
