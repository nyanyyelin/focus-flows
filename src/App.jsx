import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Timer from '../src/pages/Timer';
import Login from './pages/login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Dashboard from './pages/Dashboard';
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/timer" replace />,
      },
      {
        path: '/timer',
        element: <Timer />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
