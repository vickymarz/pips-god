import { AdminRoutes } from './routes';
import { CreateCourseContextProvider } from 'context'

function App() {

  return (
    <div className="App">
      <CreateCourseContextProvider>
        <AdminRoutes />
      </CreateCourseContextProvider>
    </div>
  );
}

export default App;
