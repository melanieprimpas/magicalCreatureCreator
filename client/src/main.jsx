import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'

import BrowseCreatures from './pages/BrowseCreatures.jsx';
import CreateCreatures from './pages/CreateCreatures.jsx';
import SavedCreatures from './pages/SavedCreatures.jsx'
import ErrorPage from './pages/ErrorPage.jsx';

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
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/