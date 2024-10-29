import Creature from '../models/creature.js';

// Get all creatures
export const getAllCreatures = async (req, res) => {
  try {
    const creatures = await Creature.findAll();
    res.json(creatures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get creature by ID
export const getCreatureById = async (req, res) => {
  try {
    const creature = await Creature.findByPk(req.params.id);
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    res.json(creature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get creature by name
export const getCreatureByName = async (req, res) => {
  try {
    const creature = await Creature.findOne({ where: { name: req.params.name } });
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    res.json(creature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get creature by habitat
export const getCreatureByHabitat = async (req, res) => {
  try {
    const creature = await Creature.findAll({ where: { habitats_name: req.params.habitat } });
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    res.json(creature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get creature by ability
export const getCreatureByAbility = async (req, res) => {
  try {
    const creature = await Creature.findAll({ where: { abilities_name: req.params.ability } });
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    res.json(creature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get creature by User
export const getCreatureByUser = async (req, res) => {
  try {
    const creature = await Creature.findAll({ where: { user_id: req.params.user } });
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    res.json(creature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get strength
export const getStrength = async (req, res) => {
  try {
    const creature = await Creature.findByPk(req.params.id);
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    res.json(creature.strength);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get intelligence
export const getIntelligence = async (req, res) => {
  try {
    const creature = await Creature.findByPk(req.params.id);
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    res.json(creature.intelligence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get agility
export const getAgility = async (req, res) => {
  try {
    const creature = await Creature.findByPk(req.params.id);
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    res.json(creature.agility);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update creature
export const updateCreature = async (req, res) => {
  try {
    const creature = await Creature.findByPk(req.params.id);
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    const { name, description, image_url, habitats_id, abilities_id } = req.body;
    await creature.update({ name, description, image_url, habitats_id, abilities_id, strength, intelligence, agility});
    res.json(creature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Create new creature
export const createCreature = async (req, res) => {
  try {
    console.log(req.body)
    const { name, description, image_url, habitats_name, habitat_image, abilities_name, strength, intelligence, agility} = req.body;
    console.log('Destructured')
    const newCreature = await Creature.create({ name: name, description: description, image_url: image_url, habitats_name: habitats_name, habitat_image: habitat_image, abilities_name: abilities_name, strength: strength, intelligence: intelligence, agility: agility });
    res.status(201).json(newCreature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete creature
export const deleteCreature = async (req, res) => {
  try {
    const creature = await Creature.findByPk(req.params.id);
    if (!creature) {
      return res.status(404).json({ error: 'Creature not found' });
    }
    await creature.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};