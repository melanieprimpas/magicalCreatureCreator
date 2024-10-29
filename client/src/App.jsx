import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './components/Login';
import Nav from './components/Nav';
import { useContext } from 'react';
import BrowseCreatures from './pages/BrowseCreatures';


function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={              
              <ProtectedRoute>
                <Nav />
              </ProtectedRoute>
            } 
          />
          <Route path="/" element={<BrowseCreatures />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;