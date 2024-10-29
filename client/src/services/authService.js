import axios from 'axios';

const API_URL = '/api/auth';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};


export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    const { token, user } = response.data;
    setAuthToken(token);
    return user;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password
    });
    const { token, user } = response.data;
    setAuthToken(token);
    return user;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const logout = () => {
  setAuthToken(null);
};

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    const response = await axios.get(`${API_URL}/me`);
    return response.data;
  } catch (error) {
    setAuthToken(null);
    throw error.response?.data || error;
  }
};