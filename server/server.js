import express from 'express';
//import path from 'path';
import sequelize from './config/connection.js';
import fetchStory from './routes/api/api.js'
import routes from './routes/index.js';
import cors from 'cors';
import { config } from 'dotenv';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('../client/dist'));
app.use(cors());
app.use('/api', routes)

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

/*app.get('/creatures', async (_req, res) => {
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
*/
// Create an API route to generate a story
app.post('/api/story', async (req, res) => {
  const { creatureName, habitat } = req.body; // Get creature and habitat from the request body
  //console.log(req.body, "line 41")
  if (!creatureName || !habitat) {
      return res.status(400).json({ error: 'Creature and habitat are required' });
  }

  try {
      const story = await fetchStory(creatureName, habitat); // Call the fetchStory function
      res.json({ story }); // Return the story in JSON format
  } catch (error) {
      console.error('Error generating story:', error);
      res.status(500).json({ error: 'Failed to generate story' });
  }
});
