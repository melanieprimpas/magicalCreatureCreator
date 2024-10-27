import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Nav from './Nav';
import Login from './Login';

function AppRoutes() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
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
          <Route path="/SavedCreatures" element={
            <ProtectedRoute>
              <div>Saved Creatures Page</div>
            </ProtectedRoute>
          } />
          <Route path="/CreateCreatures" element={
            <ProtectedRoute>
              <div>Create Creatures Page</div>
            </ProtectedRoute>
          } />
          <Route path="/" element={<div>Browse Creatures Page</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoutes;