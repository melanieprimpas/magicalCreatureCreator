import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout } from '../services/authService';

const Nav = () => {
  const currentPage = useLocation().pathname;
  const { user, setUser, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  const buttonStyles = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  const loginButtonStyles = `${buttonStyles} bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white focus:ring-blue-500`;
  const logoutButtonStyles = `${buttonStyles} bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white focus:ring-gray-500`;

  return (
    <div className="nav-container relative bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <nav className="flex space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  currentPage === '/' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Browse Creatures
              </Link>
              {isAuthenticated && (
                <>
                  <Link
                    to="/SavedCreatures"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      currentPage === '/SavedCreatures'
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Saved Creatures
                  </Link>
                  <Link
                    to="/CreateCreatures"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      currentPage === '/CreateCreatures'
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Create a Creature
                  </Link>
                </>
              )}
            </nav>
          </div>
          
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600">
                  Welcome, {user?.username || 'User'}
                </span>
                <button
                  onClick={handleLogout}
                  className={logoutButtonStyles}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className={loginButtonStyles}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`${buttonStyles} bg-white border border-blue-500 text-blue-500 hover:bg-blue-50`}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;