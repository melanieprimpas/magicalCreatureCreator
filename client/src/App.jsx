import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <div>Dashboard (Protected Route)</div>
              </ProtectedRoute>
            } 
          />
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;