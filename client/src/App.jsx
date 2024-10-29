import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { AuthProvider } from './context/AuthContext';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Nav />
        <main>
          <Outlet />
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;