import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { login } from '../services/authService.js';
import { useAuth } from '../context/AuthContext.jsx';
import { postUser } from '../utils/dbRouter.js';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const location = useLocation();
  const { setUser } = useAuth();

  // Get the intended destination from location state, or default to dashboard
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const user = {
      username: username,
      email: email,
      password: password
    }
    try {
      await postUser(user);
      console.log('User saved:', user);
      navigate('/login'); 
    } catch (error) {
      setError('Failed to sign up. Please try again.'); // Handle error appropriately
      console.error('Error posting user:', error);
    }
   
  };

  return (
    <div>
      <div>
        <h2>Sign Up Here!</h2>
        {error && (
          <div>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form">
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="log-in"
              required
              placeholder='Name'
            />
          </div>
          <div className="form">
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
          
          <button
            type="submit"
            className="log-in"
          >
            Sign Up
          </button></div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;