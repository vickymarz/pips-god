import { GoTop } from 'components';
import { PublicRoutes  } from './routes';
// import { GetCourseContextProvider } from 'context'

function App() {

  return (
    <div className="App">
       <PublicRoutes />
       <GoTop />
      {/* <CreateCourseContextProvider>
        <AdminRoutes />
      </CreateCourseContextProvider> */}
      <GetCourseContextProvider>
        <PortalRoutes />
      </GetCourseContextProvider>
    </div>
  );
}

export default App;
