import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../services/authService.js';
import { useAuth } from '../context/AuthContext.jsx';
import '../Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();

  // Get the intended destination from location state, or default to dashboard
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const user = await login(email, password);
      setUser(user);
      navigate('/dashboard', { replace: true });
      console.log('/dashboard', user);
    } catch (error) {
      setError(error.message || 'Login failed');
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <div>
        <h2>Welcome To Mystic Makers</h2>
        {error && (
          <div>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form">
            {/* <label className="block mb-2">Email: </label> */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="log-in"
              required
              placeholder='Email'
            />
          </div>
          <div className="form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="log-in"
              required
              placeholder='Password'
            />
          </div>
          <button
            type="submit"
            className="form"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;