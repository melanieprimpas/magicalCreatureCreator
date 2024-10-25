import express from 'express';
import Creature from './models/creature.js';
import path from 'path';
import sequelize from './config/connection.js';
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(express.static('../client/dist'));

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

app.get('/creatures', async (_req, res) => {
  try {
    const creatures = await Creature.findAll();
    res.json(creatures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/api/register', async (req, res) => {
  try {
      const { username, email, password } = req.body;
      
      // Check if user exists
      const userExists = await pool.query(
          'SELECT * FROM users WHERE email = $1 OR username = $2',
          [email, username]
      );

      if (userExists.rows.length > 0) {
          return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert user
      const newUser = await pool.query(
          'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
          [username, email, hashedPassword]
      );

      // Create token
      const token = jwt.sign(
          { id: newUser.rows[0].id },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
      );

      res.json({ token, user: newUser.rows[0] });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
      const { email, password } = req.body;

      // Check if user exists
      const user = await pool.query(
          'SELECT * FROM users WHERE email = $1',
          [email]
      );

      if (user.rows.length === 0) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Validate password
      const validPassword = await bcrypt.compare(password, user.rows[0].password);
      if (!validPassword) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create token
      const token = jwt.sign(
          { id: user.rows[0].id },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
      );

      res.json({
          token,
          user: {
              id: user.rows[0].id,
              username: user.rows[0].username,
              email: user.rows[0].email
          }
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
      return res.status(401).json({ message: 'Access denied' });
  }

  try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
  } catch (err) {
      res.status(400).json({ message: 'Invalid token' });
  }
};

app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.user.id });
});