import Habitat from '../models/habitat.js';

// Get all habitats
export const getAllHabitats = async (req, res) => {
  try {
    const habitats = await Habitat.findAll();
    res.json(habitats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get habitat by ID
export const getHabitatById = async (req, res) => {
  try {
    const habitat = await Habitat.findByPk(req.params.id);
    if (!habitat) {
      return res.status(404).json({ error: 'Habitat not found' });
    }
    res.json(habitat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get habitat by name
export const getHabitatByName = async (req, res) => {
  try {
    const habitat = await Habitat.findOne({ where: { name: req.params.name } });
    if (!habitat) {
      return res.status(404).json({ error: 'Habitat not found' });
    }
    res.json(habitat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get habitat by creature
export const getHabitatByCreature = async (req, res) => {
  try {
    const habitat = await Habitat.findAll({ where: { creatures_id: req.params.creature } });
    if (!habitat) {
      return res.status(404).json({ error: 'Habitat not found' });
    }
    res.json(habitat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new habitat
export const createHabitat = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newHabitat = await Habitat.create({ name, description });
    res.status(201).json(newHabitat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update habitat
export const updateHabitat = async (req, res) => {
  try {
    const habitat = await Habitat.findByPk(req.params.id);
    if (!habitat) {
      return res.status(404).json({ error: 'Habitat not found' });
    }
    const { name, description } = req.body;
    await habitat.update({ name, description });
    res.json(habitat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Delete habitat
export const deleteHabitat = async (req, res) => {
  try {
    const habitat = await Habitat.findByPk(req.params.id);
    if (!habitat) {
      return res.status(404).json({ error: 'Habitat not found' });
    }
    await habitat.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};