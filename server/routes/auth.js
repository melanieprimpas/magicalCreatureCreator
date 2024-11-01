
import express from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    console.log('Login request:', req.body);
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ where: { email: email} });
    console.log('made it')
    console.log(user)
    const validatedPassword = await user.validPassword(password)
    console.log(validatedPassword)
    if (!user || !validatedPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'email', 'username']
    });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
