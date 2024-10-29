import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Nav />
        <main>
          <Outlet />
        </main>
      </AuthProvider>
    </>
  );
}

export default App;