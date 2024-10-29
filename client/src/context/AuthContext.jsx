// import { createContext, useState, useContext, useEffect } from 'react';
// import { getCurrentUser } from '../services/authService';

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const initializeAuth = async () => {
//       try {
//         const user = await getCurrentUser();
//         setUser(user);
//       } catch (error) {
//         console.error('Auth initialization error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     initializeAuth();
//   }, []);

//   const value = {
//     user,
//     setUser,
//     isAuthenticated: !!user,
//     loading
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

import { createContext, useState, useContext, useEffect } from 'react';
import { getCurrentUser } from '../services/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to handle user login
  const loginUser = (userData, token) => {
    // Save token to localStorage
    localStorage.setItem('authToken', token);
    setUser(userData);
  };

  // Function to handle user logout
  const logoutUser = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check for existing token
        const token = localStorage.getItem('authToken');
        if (token) {
          const user = await getCurrentUser(token);
          setUser(user);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        // If token is invalid, remove it
        localStorage.removeItem('authToken');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const value = {
    user,
    setUser,
    loginUser,
    logoutUser,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};