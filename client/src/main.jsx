import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import './login.css'

import BrowseCreatures from './pages/BrowseCreatures.jsx';
import CreateCreatures from './pages/CreateCreatures.jsx';
import SavedCreatures from './pages/SavedCreatures.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import Login from './components/Login.jsx';
import { Dashboard } from './components/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <BrowseCreatures />,
      },
      {
        path: '/SavedCreatures',
        element: <SavedCreatures />,
      },
      {
        path: '/CreateCreatures',
        element: <CreateCreatures />,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/dashboard',
        element: <Dashboard/>,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
